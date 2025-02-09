import React, { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
} from "chart.js";
import { AuthenticateContext } from "@/contexts/AuthContext";

// Register Chart.js components
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

const MyWatchlistChart = ({ tickerSymbol }: { tickerSymbol: any }) => {
  // const {
  //   favouritesButton,
  //   calculatorObject,
  //   setCalculatorObject,
  //   watchlistObject,
  //   setWatchlistObject
  // } = useContext(AuthenticateContext);
  const [chartData, setChartData] = useState<{
    labels: string[];
    datasets: any[];
  } | null>(null);

  const fetchStockData = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/genrate/${tickerSymbol}`
      );
      const result = await response.json();

      // Extract data for the chart
      const labels = result.map((entry: any) =>
        new Date(entry.date).toLocaleDateString("en-US", {
          month: "short",
          year: "numeric"
        })
      );
      const prices = result.map((entry: any) => entry.close);

      // Set the chart data
      setChartData({
        labels,
        datasets: [
          {
            label: `${tickerSymbol} Stock Price`,
            data: prices,
            borderColor: "blue",
            backgroundColor: "rgba(0, 0, 255, 0.2)",
            fill: true
          }
        ]
      });
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
  };
  useEffect(() => {
    fetchStockData();
  }, []);

  return (
    <div className="h-[300px] w-[300px] p-3">
      {chartData ? (
        <Line
          data={chartData}
          options={{
            maintainAspectRatio: false, // Prevents extra space below the chart
            responsive: true, // Adjusts the chart size dynamically
            layout: {
              autoPadding: false
            }
          }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyWatchlistChart;
