import { useState, useContext } from "react";
import { AuthenticateContext } from "../contexts/AuthContext";

const CalculatorWorkflow = () => {
  const {
    inputFcf,
    setInputFcf,
    setArrayFcf,
    inputRate1to5,
    setInputRate1to5,
    inputRate6to10,
    setInputRate6to10,
    inputRate11to20,
    setInputRate11to20,
    discountRate,
    setDiscountRate,
    setDiscountedValue,
    setIntrinsicValue,
    calculatorObject,
    setCalculatorObject,
    sethandleCalculateButtonState,
    setFavouritesButton
  } = useContext(AuthenticateContext);

  const [_, setFcfGrowthYears] = useState<number[]>([]);

  function calculateIntrinsicValue(
    sumDiscountedValue: number,
    cashAndCashEquiv: number,
    debt: number,
    shares: number
  ) {
    return parseFloat(
      ((cashAndCashEquiv + sumDiscountedValue - debt) / shares).toFixed(2)
    );
  }

  function calculateDiscountedValue(
    currentFcf: number,
    discountRate: number,
    gapInYear: number
  ): number {
    const discountedValue = currentFcf / (1 + discountRate / 100) ** gapInYear;
    return discountedValue;
  }

  function handleClearInputFieldButton() {
    setCalculatorObject((x) => ({
      ...x,
      nameOfStock: "",
      tickerSymbol: "",
      cashAndCashEquiv: "",
      totalDebt: "",
      oustandingShares: ""
    }));
    setFavouritesButton((x) => !x);
    setInputFcf("");
    setInputRate1to5("");
    setInputRate6to10("");
    setInputRate11to20("");
    setDiscountRate("");
  }

  async function handleCalculateButton() {
    if (
      isNaN(parseFloat(inputFcf)) ||
      inputRate1to5 == null ||
      discountRate == ""
    ) {
      alert("Is FCF, Growth Rate filled up ???");
    } else {
      const response = await fetch(
        `http://localhost:4000/api/calculatorinfo/${calculatorObject.tickerSymbol}`
      );
      const data = await response.json();
      setCalculatorObject((x) => ({ ...x, nameOfStock: data.stockName }));
      console.log(data.impliedSharesOutstanding);
      console.log(data.totalDebt);
      console.log(
        `Fetching data for ${calculatorObject.tickerSymbol}:`,
        response.status
      ); // Log status

      setFcfGrowthYears([]);
      setArrayFcf([]);
      const currentYear = new Date().getFullYear();
      const principal = parseFloat(inputFcf);
      const rateYear1to5 = parseFloat(inputRate1to5) / 100;
      const rateYear6to10 = parseFloat(inputRate6to10) / 100;
      const rateYear11to20 = parseFloat(inputRate11to20) / 100;
      let newArrayFcfs: number[] = [];
      let newArrayDiscountedValues: number[] = [];
      let sumDiscountedValue: number = 0;

      for (let i = 1; i < 21; i++) {
        if (i <= 5) {
          newArrayFcfs.push(principal * (1 + rateYear1to5) ** i);
        } else if (i > 5 && i <= 10) {
          newArrayFcfs.push(newArrayFcfs[4] * (1 + rateYear6to10) ** (i - 5));
        } else {
          newArrayFcfs.push(newArrayFcfs[9] * (1 + rateYear11to20) ** (i - 10));
        }
        let currentDiscountedValue = calculateDiscountedValue(
          newArrayFcfs[i - 1],
          parseFloat(discountRate),
          i
        );
        setFcfGrowthYears((x) => [...x, currentYear + i]);
        // setDiscountedValue((x) => [...x, currentDiscountedValue]);
        newArrayDiscountedValues.push(currentDiscountedValue);
      }

      for (let i = 0; i < newArrayDiscountedValues.length; i++) {
        sumDiscountedValue += newArrayDiscountedValues[i];
      }

      setIntrinsicValue(
        calculateIntrinsicValue(
          sumDiscountedValue,
          parseFloat(calculatorObject.cashAndCashEquiv),
          parseFloat(data.totalDebt),
          parseFloat(data.impliedSharesOutstanding)
        )
      );
      setArrayFcf(newArrayFcfs);
      setDiscountedValue(newArrayDiscountedValues);
      sethandleCalculateButtonState((x) => x + 1);
    }
  }

  return (
    <div className="flex flex-row gap-8 pt-3">
      <a
        className="relative inline-flex items-center justify-center px-14 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group mt-5 hover:cursor-pointer"
        onClick={handleClearInputFieldButton}
      >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-red-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <span className="relative">Clear Input</span>
      </a>
      <a
        className="relative inline-flex items-center justify-center px-14 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group mt-5 hover:cursor-pointer"
        onClick={handleCalculateButton}
      >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <span className="relative">Calculate</span>
      </a>
    </div>
  );
};

export default CalculatorWorkflow;
