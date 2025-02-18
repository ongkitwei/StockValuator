import { AuthenticateContext } from "../../contexts/AuthContext";
import { useContext, useEffect, useState, useRef } from "react";
import FavouritesButton from "./FavouritesButton";
import axios from "axios";
import { useLocation } from "react-router-dom"; // Ensure you have React Router set up

function CalculatedResultsTable() {
  const {
    fcfs,
    setArrayFcf,
    discountedValue,
    setDiscountedValue,
    calculatorObject,
    setCalculatorObject,
    intrinsicValue,
    setIntrinsicValue,
    handleCalculateButtonState,
    favouritesButton,
    setFavouritesButton,
    watchlistObject,
    setWatchlistObject,
    setInputRate1to5,
    setInputRate6to10,
    setInputRate11to20,
    setDiscountRate,
    setInputFcf
  } = useContext(AuthenticateContext);

  const [stockName, setStockName] = useState<string>("");
  const [tickerSymbol, setTickerSymbol] = useState<string>("");
  const isFirstRender = useRef(true); // Track if this is the first render
  const location = useLocation(); // Track the current location (URL)

  useEffect(() => {
    console.log("Initial Mount");
    return () => {
      setStockName("");
      setTickerSymbol("");
      setIntrinsicValue(0);
      setArrayFcf([]);
      setDiscountedValue([]);
      setCalculatorObject({
        nameOfStock: "",
        tickerSymbol: "",
        cashAndCashEquiv: "",
        totalDebt: "",
        oustandingShares: ""
      });
      setInputRate1to5("");
      setInputRate6to10("");
      setInputRate11to20("");
      setDiscountRate("");
      setInputFcf("");
      setFavouritesButton(false);
      isFirstRender.current = true;
    };
  }, [location.pathname]);

  useEffect(() => {
    setStockName(calculatorObject.nameOfStock.toUpperCase());
    setTickerSymbol(calculatorObject.tickerSymbol.toUpperCase());
  }, [handleCalculateButtonState]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false; // Mark as not first render
      return; // Exit early to prevent running on mount
    }

    const updateFavourites = async () => {
      try {
        if (favouritesButton) {
          // Post req to supabase
          const response = await axios.post(
            `http://localhost:4000/api/supabase`,
            {
              Stock_Name: stockName,
              Ticker_Symbol: tickerSymbol,
              IV: intrinsicValue
            }
          );
          console.log("Added: ", response.data);
        } else {
          // Delete request to remove favourites stock on supabase
          // const response = await axios.delete(
          //   `http://localhost:4000/api/supabase`
          // );
          const response = await axios.delete(
            `http://localhost:4000/api/supabase`,
            {
              data: { Ticker_Symbol: tickerSymbol }
            }
          );
          console.log("Deleted:", response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    updateFavourites();
  }, [favouritesButton]);

  const handleFavouritesButton = async () => {
    setFavouritesButton((x) => !x);
  };

  return (
    <div className="flex items-center flex-col pt-12 pb-12 gap-7 md:text-base text-xs">
      {fcfs.length > 1 ? (
        <div className="flex flex-row justify-center items-center">
          <span className="text-[50px] font-extrabold text-pink-300 capitalize font-irish">
            {stockName}
          </span>
          <span className="pl-3 pr-[300px] text-orange-200 uppercase">
            *{tickerSymbol}
          </span>

          <span className="bg-green-400 text-red-600 p-2 rounded-lg mr-4">
            {intrinsicValue}
          </span>
          <FavouritesButton
            handleFavouritesButton={handleFavouritesButton}
            favouritesButtonColor={favouritesButton ? "green" : "white"}
          />
        </div>
      ) : null}
      <table className="border-white border">
        <thead>
          <tr className="border border-white">
            {fcfs.length > 1 ? (
              <th className="border border-white p-3 bg-orange-400 uppercase font-semibold">
                year
              </th>
            ) : null}
            {fcfs.map((_, index) =>
              index < 10 ? (
                <th
                  className="border border-white p-3 bg-orange-400"
                  key={index}
                >
                  {new Date().getFullYear() + index + 1}
                </th>
              ) : null
            )}
          </tr>
        </thead>
        <tbody>
          <tr className="border border-white bg-slate-500">
            {fcfs.length > 1 ? (
              <td className="border border-white p-3 uppercase font-semibold">
                projected fcf
              </td>
            ) : null}
            {fcfs.map((a, index) =>
              index < 10 ? (
                <td className="border border-white p-3" key={index}>
                  {a.toFixed(2)}
                </td>
              ) : null
            )}
          </tr>
        </tbody>
        <tbody>
          <tr className="border border-white bg-slate-500">
            {fcfs.length > 1 ? (
              <td className="border border-white p-3 uppercase font-semibold">
                Discounted Value
              </td>
            ) : null}
            {discountedValue.map((a, index) =>
              index < 10 ? (
                <td className="border border-white p-3" key={index}>
                  {a.toFixed(2)}
                </td>
              ) : null
            )}
          </tr>
        </tbody>
      </table>

      <table className="border-white border">
        <thead>
          <tr className="border border-white">
            {fcfs.length > 1 ? (
              <th className="border border-white p-3 bg-orange-400 uppercase font-semibold">
                year
              </th>
            ) : null}
            {fcfs.map((_, index) =>
              index >= 10 ? (
                <th
                  className="border border-white p-3 bg-orange-400"
                  key={index}
                >
                  {new Date().getFullYear() + index + 1}
                </th>
              ) : null
            )}
          </tr>
        </thead>
        <tbody>
          <tr className="border border-white bg-slate-500">
            {fcfs.length > 1 ? (
              <td className="border border-white p-3 uppercase font-semibold">
                projected fcf
              </td>
            ) : null}
            {fcfs.map((a, index) =>
              index >= 10 ? (
                <td className="border border-white p-3" key={index}>
                  {a.toFixed(2)}
                </td>
              ) : null
            )}
          </tr>
        </tbody>
        <tbody>
          <tr className="border border-white bg-slate-500">
            {fcfs.length > 1 ? (
              <td className="border border-white p-3 uppercase font-semibold">
                discounted value
              </td>
            ) : null}
            {discountedValue.map((a, index) =>
              index >= 10 ? (
                <td className="border border-white p-3" key={index}>
                  {a.toFixed(2)}
                </td>
              ) : null
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CalculatedResultsTable;
