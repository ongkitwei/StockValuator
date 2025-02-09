import { AuthenticateContext } from "../../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import AddButton from "./FavouritesButton";

function CalculatedResultsTable() {
  const {
    fcfs,
    discountedValue,
    calculatorObject,
    setCalculatorObject,
    intrinsicValue,
    handleCalculateButtonState,
    favouritesButton,
    setFavouritesButton,
    watchlistObject,
    setWatchlistObject
  } = useContext(AuthenticateContext);

  const [stockName, setStockName] = useState<string>("");
  const [tickerSymbol, setTickerSymbol] = useState<string>("");

  useEffect(() => {
    setStockName(calculatorObject.nameOfStock);
    setTickerSymbol(calculatorObject.tickerSymbol);
  }, [handleCalculateButtonState]);

  const handleAddButton = () => {
    console.log("Add button");
    setFavouritesButton(!favouritesButton);

    // Post req to supabase
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
          <AddButton
            handleFavouritesButton={handleAddButton}
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
