import { ReactNode, useState } from "react";
import { AuthenticateContext } from "@/contexts/AuthContext";
import { useContext } from "react";
import axios from "axios";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  const { portfolioObject, setPortfolioObject, watchlistObject } =
    useContext(AuthenticateContext);
  const [modalTicker, setModalTicker] = useState("");
  const [modalAverageSharePrice, setModalAverageSharePrice] = useState("");
  const [modalNoOfShares, setModalNoOfShares] = useState("");
  console.log(modalTicker);

  const updatePortfolio = async (
    stockName: any,
    tickerSymbol: any,
    noOfShares: any,
    averageSharePrice: any,
    currentPrice: any,
    intrinsicValue: any,
    valuation: any
  ) => {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/supabase/portfolio`,
        {
          Stock_Name: stockName,
          Ticker_Symbol: tickerSymbol,
          No_Of_Shares: noOfShares,
          Average_Price: averageSharePrice,
          Current_Price: currentPrice,
          IV: intrinsicValue,
          Valuation: valuation
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //
  const handleModalInput = async () => {
    const findInfoFromWatchlist = watchlistObject.find(
      (x) => x.tickerSymbol.toUpperCase() == modalTicker.toUpperCase()
    );
    if (findInfoFromWatchlist == undefined) {
      onClose();
      alert("NOT FOUND");
    } else {
      try {
        const response = await fetch(
          `http://localhost:4000/api/lastclose/${modalTicker}` // Corrected the URL
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();
        const lastClosePrice = data ? parseFloat(data) : null; // Ensure it's parsed properly

        // Update the portfolio with lastClosePrice now available
        setPortfolioObject((x) => [
          ...x,
          {
            nameOfStock: findInfoFromWatchlist?.nameOfStock ?? null,
            tickerSymbol: modalTicker,
            noOfShares: parseInt(modalNoOfShares),
            averageSharePrice: parseFloat(modalAverageSharePrice),
            currentPrice: lastClosePrice ?? null, // Now correctly set
            intrinsicValue: findInfoFromWatchlist?.intrinsicValue ?? null,
            valuation:
              lastClosePrice !== null
                ? String(
                    (
                      ((lastClosePrice - findInfoFromWatchlist.intrinsicValue) /
                        findInfoFromWatchlist.intrinsicValue) *
                      100
                    ).toFixed(2)
                  )
                : null // Or any fallback value, like 'N/A', if you prefer
          }
        ]);
        updatePortfolio(
          findInfoFromWatchlist?.nameOfStock ?? null,
          modalTicker,
          parseInt(modalNoOfShares),
          parseFloat(modalAverageSharePrice),
          lastClosePrice ?? null,
          findInfoFromWatchlist?.intrinsicValue ?? null,
          lastClosePrice !== null
            ? String(
                (
                  ((lastClosePrice - findInfoFromWatchlist.intrinsicValue) /
                    findInfoFromWatchlist.intrinsicValue) *
                  100
                ).toFixed(2)
              )
            : null
        );
      } catch (error) {
        console.log("Error fetching last close price:", error);
      }
    }
    onClose();
  };
  //

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-gray-900 flex flex-col items-center justify-center w-[600px] h-[600px] rounded-xl shadow-lg">
        <div className="flex flex-col gap-4 items-end pb-9">
          <div className="flex justify-center items-center gap-3">
            <label htmlFor="tickerSymbol">Ticker Symbol</label>
            <input
              id="tickerSymbol"
              className="rounded-xl py-1.5 px-1.5 bg-gray-200 text-black"
              onChange={(event) =>
                setModalTicker(event.target.value.toUpperCase())
              }
            ></input>
          </div>
          <div className="flex justify-center items-center gap-3">
            <label htmlFor="averageSharePrice">Average Cost Price</label>
            <input
              id="averageSharePrice"
              className="rounded-xl py-1.5 px-2 text-black"
              onChange={(event) =>
                setModalAverageSharePrice(event.target.value)
              }
            ></input>
          </div>
          <div className="flex justify-center items-center gap-3">
            <label htmlFor="noOfShares">No of shares</label>
            <input
              id="noOfShares"
              className="rounded-xl py-1.5 px-2 text-black"
              onChange={(event) => setModalNoOfShares(event.target.value)}
            ></input>
          </div>
        </div>

        <div className="flex flex-row gap-9">
          <div
            onClick={onClose}
            className="w-36 h-10 bg-blue-800 flex items-center justify-center rounded-lg hover:cursor-pointer"
          >
            <span>CANCEL</span>
          </div>
          <div
            onClick={handleModalInput}
            className="w-36 h-10 bg-purple-800 flex items-center justify-center rounded-lg hover:cursor-pointer"
          >
            <span>ADD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
