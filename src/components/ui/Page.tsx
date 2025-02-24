import { Payment, columns } from "./Columns";
import { DataTable } from "./DataTable";
import { useEffect, useState, useContext } from "react";
import SearchEngine from "./SearchEngine";
import { FiFilter } from "react-icons/fi";
import NewWatchlistButton from "./NewWatchlistButton";
import { AuthenticateContext } from "@/contexts/AuthContext";
import Modal from "./Modal";

const DemoPage = () => {
  async function getData(): Promise<Payment[]> {
    return watchlistObject.map((x: any, index) => ({
      stockName: x.nameOfStock, // Ensure correct property names
      tickerSymbol: x.tickerSymbol.toUpperCase(),
      currentSharePrice: lastClose[index],
      intrinsicValue: x.intrinsicValue,
      valuation: String(
        (
          ((lastClose[index] - x.intrinsicValue) / x.intrinsicValue) *
          100
        ).toFixed(2)
      )
    }));
  }

  const { watchlistObject, lastClose } = useContext(AuthenticateContext);
  const [data, setData] = useState<Payment[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [input, setInput] = useState("");
  useEffect(() => {
    getData().then(setData);
  }, []);

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
          return input == ""
            ? item
            : item.stockName.toLowerCase().includes(input.toLowerCase());
        })}
      />
    </div>
  );
};

export default DemoPage;
