import WatchlistCard from "./WatchlistCard";
import MyWatchlistChart from "./ui/MyWatchlistChart";
import StockChart from "./ui/MyWatchlistChart";
import { AuthenticateContext } from "@/contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
const MyWatchlistBody = () => {
  const { watchlistObject, lastClose } = useContext(AuthenticateContext);
  // useEffect(() => {
  //   const fetchLastClosePrice = async () => {
  //     watchlistObject.map((x:any) => ())
  //     const response = await fetch(`http://localhost:4000/api/lastclose/${}`);
  //     const result = await response.json();
  //     console.log(result);

  //     const filteredData = result.map((item: any) => ({
  //       nameOfStock: item.Stock_Name,
  //       tickerSymbol: item.Ticker_Symbol,
  //       intrinsicValue: item.IV
  //     }));
  //     setWatchlistObject(filteredData);
  //   };
  //   fetchSupabaseTableData();
  // }, []);
  return (
    <div className="py-16 grid gap-5 2xl:grid-cols-3 lg:grid-cols-2 place-items-center">
      {watchlistObject.map((x: any, index) => (
        <WatchlistCard
          key={x.tickerSymbol}
          stockName={x.nameOfStock}
          currentSharePrice={lastClose[index]}
          intrinsicValue={x.intrinsicValue}
          tickerSymbol={x.tickerSymbol}
        />
      ))}
      {/* <p>{watchlistObject.map((x: any) => x.tickerSymbol)}</p> */}
    </div>
  );
};

export default MyWatchlistBody;
