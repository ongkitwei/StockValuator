import React, { useContext, useEffect, useState } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

const MyWatchlistChart = ({ tickerSymbol }: { tickerSymbol: any }) => {
  const [lastClose, setLastClose] = useState([]);
  const fetchStockData = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/genrate/${tickerSymbol}`
      );
      const result = await response.json();
      const allClosedPrice = result.map((item: any) => item.close);
      setLastClose(allClosedPrice);
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
  };
  useEffect(() => {
    fetchStockData();
  }, []);

  // Determine trend color
  const isUptrend =
    lastClose.length > 1 && lastClose[lastClose.length - 1] > lastClose[0];
  const lineColor = isUptrend ? "green" : "red";

  return (
    <div className="w-[300px] md:w-[400px] h-[100px] flex items-center justify-center">
      <Sparklines data={lastClose} width={200} height={25}>
        <SparklinesLine color={lineColor} />
      </Sparklines>
    </div>
  );
};

export default MyWatchlistChart;
