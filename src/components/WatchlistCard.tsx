import React, { useContext, useEffect, useState, useRef } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import MyWatchlistChart from "./ui/MyWatchlistChart";
import { AuthenticateContext } from "@/contexts/AuthContext";
import Bin from "@/components/icons/Bin";
import NewWatchlistButton from "./ui/NewWatchlistButton";
import { watch } from "fs";
import axios from "axios";

interface WatchlistCardProps {
  stockName: string;
  currentSharePrice: number;
  intrinsicValue: number;
  tickerSymbol: string;
  onClick: () => void;
}

const WatchlistCard: React.FC<WatchlistCardProps> = ({
  stockName,
  currentSharePrice,
  intrinsicValue,
  tickerSymbol,
  onClick
}) => {
  const {
    inputFcf,
    discountRate,
    setWatchlistObject,
    watchlistObject,
    lastClose,
    setLastClose
  } = useContext(AuthenticateContext);
  const [deleteButtonState, setDeleteButtonState] = useState(false);
  const isFirstRender = useRef(true); // Track if this is the first render

  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     isFirstRender.current = false; // Mark as not first render
  //     return; // Exit early to prevent running on mount
  //   }
  //   const deleteFromSupabase = async () => {
  //     console.log("delete");
  //     const response = await axios.delete(
  //       `http://localhost:4000/api/supabase/watchlist`,
  //       {
  //         data: { Stock_Name: stockName }
  //       }
  //     );
  //   };
  //   if (stockName) {
  //     deleteFromSupabase(); // Only call delete after the component has mounted
  //   }
  // }, [deleteButtonState]);

  useEffect(() => {
    const fetchSupabaseTableData = async () => {
      const newLastCloseArray: number[] = [];
      const response = await fetch("http://localhost:4000/api/supabase");
      const result = await response.json();

      const filteredData = result.map((item: any) => ({
        nameOfStock: item.Stock_Name,
        tickerSymbol: item.Ticker_Symbol,
        intrinsicValue: item.IV
      }));
      console.log(filteredData);
      for (const x of filteredData) {
        try {
          const response = await fetch(
            `http://localhost:4000/api/lastclose/${x.tickerSymbol}`
          );
          console.log(`Fetching data for ${x.tickerSymbol}:`, response.status); // Log status

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.text();
          if (data) {
            newLastCloseArray.push(parseFloat(data));
            console.log(data);
          }
        } catch (error) {
          console.error(`Error fetching data for ${x.tickerSymbol}:`, error);
        }
      }

      setWatchlistObject(filteredData);
      setLastClose(newLastCloseArray);
    };
    fetchSupabaseTableData();
  }, []);

  // useEffect(() => {
  //   const fetchLastClosePrice = async () => {
  //     const newLastCloseArray: number[] = [];
  //     for (const x of watchlistObject) {
  //       const response = await fetch(
  //         `http://localhost:4000/api/lastclose/${x.tickerSymbol}`
  //       );
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const data = await response.text();
  //       if (data) {
  //         newLastCloseArray.push(parseFloat(data));
  //         console.log(data);
  //       }
  //     }
  //     setLastClose(newLastCloseArray);
  //   };
  //   fetchLastClosePrice();
  // }, [watchlistObject]);
  // useEffect(() => {
  //   console.log(inputFcf), [inputFcf];
  // });
  // useEffect(() => {
  //   console.log(discountRate), [discountRate];
  // });
  const manageDeleteCard = async (stockName: string) => {
    const newWatchlistObject = watchlistObject.filter(
      (stock) => stock.nameOfStock != stockName
    );
    // setWatchlistObject(newWatchlistObject);
    console.log(newWatchlistObject);
    console.log(watchlistObject);
    setWatchlistObject(newWatchlistObject);
    console.log(`delete from supabase`);
    const response = await axios.delete(
      `http://localhost:4000/api/supabase/watchlist`,
      {
        data: { Stock_Name: stockName }
      }
    );
  };

  const calculateIvPercentage = () => {
    return Math.abs(
      Number(
        (((intrinsicValue - currentSharePrice) / intrinsicValue) * 100).toFixed(
          2
        )
      )
    );
  };
  const ivPercentage = calculateIvPercentage();
  return (
    <div className="w-[380px] h-[280px] md:w-[500px] bg-black border-2 border-gray-800 grid grid-rows-3 place-items-center px-5 rounded-2xl hover:cursor-pointer">
      <div className="flex flex-row justify-center items-center gap-x-4 pt-5 pb-12">
        {" "}
        <h1 className="font-semibold sm:text-2xl md:text-3xl text-xl">
          {stockName}
        </h1>
        <Bin onClick={() => manageDeleteCard(stockName)} />
      </div>
      <div
        className="flex flex-row items-center justify-center gap-2"
        onClick={onClick}
      >
        <div className="grid grid-rows-2 place-items-center gap-y-4">
          <p className="bg-gray-300 w-[200px] md:w-[300px] h-6 flex items-center justify-between text-gray-700 rounded-md text-sm px-4">
            <div className="flex items-center">
              <MdAttachMoney />
              <span className="pl-1">Current Price</span>
            </div>
            {currentSharePrice}
          </p>
          <p className="bg-gray-300 w-[200px] md:w-[300px] h-6 flex items-center justify-between text-center text-gray-700 rounded-md text-sm px-4">
            <div className="flex items-center">
              <GiMoneyStack />
              <span className="pl-1">Intrinsic Value</span>
            </div>
            {intrinsicValue}
          </p>
        </div>
        <p
          className={`${intrinsicValue > currentSharePrice ? "bg-green-500" : "bg-red-500"} w-24 h-[70px] flex items-center justify-center text-center text-gray-700 rounded-md font-semibold`}
        >
          {ivPercentage}%
        </p>
      </div>
      <MyWatchlistChart tickerSymbol={tickerSymbol} />
    </div>
  );
};

export default WatchlistCard;
