import { useState, useContext } from "react";
import { AuthenticateContext } from "../contexts/AuthContext";

const CalculatorWorkflow = () => {
  // A = P(1 + rt)
  const { inputFcf, setInputFcf, fcfs, setArrayFcf } =
    useContext(AuthenticateContext);

  const [fcfGrowthYears, setFcfGrowthYears] = useState<number[]>([]);

  function calculateFcfGrowth() {
    const currentYear = new Date().getFullYear();
    const principal = parseFloat(inputFcf);
    const rate = 0.04;

    setInputFcf("");

    for (let i = 1; i < 21; i++) {
      setArrayFcf((x) => [...x, principal * (1 + rate * i)]);
      setFcfGrowthYears((x) => [...x, currentYear + i]);

      console.log(fcfs);
    }
  }

  return (
    <div className="dark: text-white">
      <button
        className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold transition duration-300 ease-in-out hover:bg-yellow-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-600 mt-8"
        onClick={calculateFcfGrowth}
      >
        CALCULATE
      </button>
    </div>
  );
};

export default CalculatorWorkflow;
