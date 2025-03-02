import { Payment, columns } from "./Columns";
import { DataTable } from "./DataTable";
import { useEffect, useState, useContext, useRef } from "react";
import SearchEngine from "./SearchEngine";
import { FiFilter } from "react-icons/fi";
import NewWatchlistButton from "./NewWatchlistButton";
import { AuthenticateContext } from "@/contexts/AuthContext";
import Modal from "./Modal";
import getLastClose from "@/utils/getLastClose";

const DemoPage = () => {
  function findWatchlistObjectPosition(nameOfStock: any) {
    return watchlistObject.findIndex((item) => item.nameOfStock == nameOfStock);
  }

  async function getData(): Promise<Payment[]> {
    const payments = await Promise.all(
      portfolioObject.map(async (x: any) => ({
        stockName: x.stockName,
        tickerSymbol: x.tickerSymbol,
        noOfShares: x.noOfShares,
        averageSharePrice: x.averageSharePrice,
        currentSharePrice: await getLastClose(x.tickerSymbol),
        intrinsicValue: x.intrinsicValue,
        valuation: x.valuation
      }))
    );

    return payments;
  }

  const { watchlistObject, lastClose, portfolioObject, setPortfolioObject } =
    useContext(AuthenticateContext);
  const [data, setData] = useState<Payment[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://localhost:4000/api/supabase/portfolio"
      );
      const result = await response.json();

      // console.log(result.length);
      let portfolioArray = [];
      portfolioArray = result.map((x: any) => ({
        stockName: x.Stock_Name,
        tickerSymbol: x.Ticker_Symbol,
        noOfShares: x.No_Of_Shares,
        averageSharePrice: x.Average_Price,
        currentSharePrice: x.Current_Price,
        intrinsicValue: x.IV,
        valuation: x.Valuation
      }));
      console.log(portfolioArray[0].stockName);

      // setPortfolioObject(portfolioArray);
      // Check if the new portfolioArray is different before updating state

      if (JSON.stringify(portfolioArray) != JSON.stringify(portfolioObject)) {
        setPortfolioObject(portfolioArray);
      }
    }
    fetchData();
    getData().then(setData);
  }, [portfolioObject]);

  const handlechangeInSearchEngine = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // const currentInput = event.target.value;
    setInput(event.target.value);
    // console.log(input);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center justify-end gap-5 pb-8">
          <SearchEngine onChangeSearchEngine={handlechangeInSearchEngine} />
          <FiFilter size={25} className="hover:cursor-pointer" />
        </div>
        <NewWatchlistButton onClick={() => setOpenModal(true)} />
        {openModal ? (
          <Modal isOpen={openModal} onClose={() => setOpenModal(false)} />
        ) : null}
      </div>
      <DataTable
        columns={columns}
        data={data.filter((item) => {
          return input == "" || item.stockName == null
            ? item
            : item.stockName.toLowerCase().includes(input.toLowerCase());
        })}
      />
    </div>
  );
};

export default DemoPage;
