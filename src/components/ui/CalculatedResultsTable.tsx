import React from "react";
import { AuthenticateContext } from "../../contexts/AuthContext";
import { useContext } from "react";

function CalculatedResultsTable() {
  const { fcfs } = useContext(AuthenticateContext);

  return (
    <div className="flex items-center flex-col">
      <table className="border-white border">
        <tr className="border border-gray-400">
          {fcfs.map((a, index) => (
            <th className="border border-gray-400 p-3" key={index}>
              {index + 1}
            </th>
          ))}
        </tr>
        <tr className="border border-gray-400">
          {fcfs.map((a, index) => (
            <td className="border border-gray-400 p-3" key={index}>
              {a.toFixed(2)}
            </td>
          ))}
        </tr>
      </table>
    </div>
  );
}

export default CalculatedResultsTable;
