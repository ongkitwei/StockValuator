import { useState, useContext, useEffect } from "react";
import { AuthenticateContext } from "../contexts/AuthContext";

const CalculatorWorkflow = () => {
  // A = P(1 + rt)
  const {
    inputFcf,
    setInputFcf,
    fcfs,
    setArrayFcf,
    inputRate1to5,
    setInputRate1to5,
    inputRate6to10,
    setInputRate6to10,
    inputRate11to20,
    setInputRate11to20
  } = useContext(AuthenticateContext);

  const [fcfGrowthYears, setFcfGrowthYears] = useState<number[]>([]);

  function handleCalculateButton() {
    if (isNaN(parseFloat(inputFcf)) || inputRate1to5 == null) {
      alert("Is FCF, Growth Rate filled up ???");
      setInputFcf("");
    } else {
      setFcfGrowthYears([]);
      setArrayFcf([]);
      const currentYear = new Date().getFullYear();
      const principal = parseFloat(inputFcf);
      const rateYear1to5 = parseFloat(inputRate1to5) / 100;
      const rateYear6to10 = parseFloat(inputRate6to10) / 100;
      const rateYear11to20 = parseFloat(inputRate11to20) / 100;
      let newArrayFcfs: number[] = [];

      for (let i = 1; i < 21; i++) {
        if (i <= 5) {
          newArrayFcfs.push(principal * (1 + rateYear1to5) ** i);
        } else if (i > 5 && i <= 10) {
          newArrayFcfs.push(newArrayFcfs[4] * (1 + rateYear6to10) ** (i - 5));
        } else {
          newArrayFcfs.push(newArrayFcfs[9] * (1 + rateYear11to20) ** (i - 10));
        }
        setFcfGrowthYears((x) => [...x, currentYear + i]);
        console.log(newArrayFcfs);
      }
      setArrayFcf(newArrayFcfs);
      setInputFcf("");
      setInputRate1to5("");
      setInputRate6to10("");
      setInputRate11to20("");
    }
  }

  return (
    <a
      className="relative inline-flex items-center justify-center px-14 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group mt-5 hover:cursor-pointer"
      onClick={handleCalculateButton}
    >
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
      <span className="relative">Calculate</span>
    </a>
  );
};

export default CalculatorWorkflow;
