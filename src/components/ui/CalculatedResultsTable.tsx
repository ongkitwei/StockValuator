import { AuthenticateContext } from "../../contexts/AuthContext";
import { useContext } from "react";

function CalculatedResultsTable() {
  const { fcfs, discountedValue, calculatorObject, intrinsicValue } =
    useContext(AuthenticateContext);

  return (
    <div className="flex items-center flex-col pt-12 pb-12 gap-7 md:text-lg text-xs">
      {fcfs.length > 1 ? (
        <div>
          <span className="text-[100px] font-extrabold text-pink-300 capitalize font-irish">
            {calculatorObject.nameOfStock}
          </span>
          <span className="pl-3 pr-8 text-orange-200 uppercase">
            *{calculatorObject.tickerSymbol}
          </span>

          <span className="bg-green-400 text-red-600 p-2 rounded-lg">
            {intrinsicValue}
          </span>
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
            {fcfs.map((a, index) =>
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
            {fcfs.map((a, index) =>
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
