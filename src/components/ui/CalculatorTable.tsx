import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { AuthenticateContext } from "../../contexts/AuthContext";

const CalculatorTable = () => {
  // const [inputFcf, setInputFcf] = useState("");
  const {
    inputFcf,
    setInputFcf,
    inputRate1to5,
    setInputRate1to5,
    inputRate6to10,
    setInputRate6to10,
    inputRate11to20,
    setInputRate11to20,
    discountRate,
    setDiscountRate,
    calculatorObject,
    setCalculatorObject
  } = useContext(AuthenticateContext);

  useEffect(() => {
    console.log(inputFcf), [inputFcf];
  });
  useEffect(() => {
    console.log(discountRate), [discountRate];
  });

  const handleChangeInputFcf = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputFcf(event.target.value);
  };

  const handleChangeCashAndCashEquiv = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCalculatorObject((x) => ({
      ...x,
      cashAndCashEquiv: event.target.value
    }));
  };

  const handleChangeInputRate1to5 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputRate1to5(event.target.value);
  };
  const handleChangeInputRate6to10 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputRate6to10(event.target.value);
  };

  const handleChangeInputRate11to20 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputRate11to20(event.target.value);
  };

  const handleChangeDiscountRate = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDiscountRate(event.target.value);
  };

  const handleChangeNameOfStock = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCalculatorObject((x) => ({ ...x, nameOfStock: event.target.value }));
  };

  const handleChangeTickerSymbol = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCalculatorObject((x) => ({ ...x, tickerSymbol: event.target.value }));
  };

  const handleChangeTotalDebt = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCalculatorObject((x) => ({ ...x, totalDebt: event.target.value }));
  };

  const handleChangeOutstandingShares = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCalculatorObject((x) => ({
      ...x,
      oustandingShares: event.target.value
    }));
  };

  return (
    <div className="flex flex-col w-[550px] dark:bg-gray-800 rounded-xl">
      <h1 className="dark:bg-teal-600 h-10 flex items-center pl-5 font-bold uppercase rounded-t-xl">
        stock info
      </h1>
      <div className="flex flex-row items-center justify-between pb-2 pt-3 px-5">
        <label>Name Of Stock</label>
        <input
          type="text"
          value={calculatorObject.nameOfStock}
          onChange={handleChangeNameOfStock}
          placeholder="Enter Name Of Stock"
          className="rounded-md py-2 px-3 text-center text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        ></input>
      </div>
      <div className="flex flex-row items-center justify-between pb-2 px-5">
        <label>Ticker Symbol</label>
        <input
          type="text"
          value={calculatorObject.tickerSymbol}
          onChange={handleChangeTickerSymbol}
          placeholder="Enter Ticker Symbol"
          className="rounded-md py-2 px-3 text-center text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        ></input>
      </div>
      <div className="flex flex-row items-center justify-between pb-2 px-5">
        <label>Valuation Method</label>
        <input
          type="text"
          placeholder="Discounted Cash Flow"
          readOnly
          className="rounded-md py-2 px-3 text-center text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-yellow-300 bg-white"
        ></input>
      </div>
      <h1 className="dark:bg-teal-600 h-10 flex items-center pl-5 font-bold uppercase">
        fcf & equity info
      </h1>
      <div className="flex flex-row items-center justify-between pb-2 pt-3 px-5">
        <label>Free Cash Flow (current)</label>
        <input
          type="text"
          value={inputFcf}
          onChange={handleChangeInputFcf}
          placeholder="Enter Current FCF"
          className="rounded-md py-2 px-3 text-center text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        ></input>
      </div>
      <div className="flex flex-row items-center justify-between pb-2 px-5">
        <label>Cash & Cash Equivalent </label>
        <input
          type="text"
          value={calculatorObject.cashAndCashEquiv}
          onChange={handleChangeCashAndCashEquiv}
          placeholder="Enter Cash & Cash Equiv"
          className="rounded-md py-2 px-3 text-center text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        ></input>
      </div>
      <div className="flex flex-row items-center justify-between pb-2 px-5">
        <label>Total Debt</label>
        <input
          type="text"
          value={calculatorObject.totalDebt}
          onChange={handleChangeTotalDebt}
          placeholder="Enter Total Debt"
          className="rounded-md py-2 px-3 text-center text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        ></input>
      </div>
      <h1 className="dark:bg-teal-600 h-10 flex items-center pl-5 font-bold uppercase">
        projected growth
      </h1>
      <div className="flex flex-row items-center justify-between pb-2 pt-3 px-5">
        <label>Free Cash Flow growth rate (Yr 1-5)</label>
        <input
          type="text"
          value={inputRate1to5}
          onChange={handleChangeInputRate1to5}
          placeholder="% Year 1-5"
          className="rounded-md py-2 px-3 text-center text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        ></input>
      </div>
      <div className="flex flex-row items-center justify-between pb-2 px-5">
        <label>Free Cash Flow growth rate (Yr 6-10)</label>
        <input
          type="text"
          value={inputRate6to10}
          onChange={handleChangeInputRate6to10}
          placeholder="% Year 6-10"
          className="rounded-md py-2 px-3 text-center text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        ></input>
      </div>
      <div className="flex flex-row items-center justify-between pb-2 px-5">
        <label>Free Cash Flow growth rate (Yr 11-20)</label>
        <input
          type="text"
          value={inputRate11to20}
          onChange={handleChangeInputRate11to20}
          placeholder="% Year 6-10"
          className="rounded-md py-2 px-3 text-center text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        ></input>
      </div>
      <h1 className="dark:bg-teal-600 h-10 flex items-center pl-5 font-bold uppercase">
        shares
      </h1>
      <div className="flex flex-row items-center justify-between pb-2 pt-3 px-5">
        <label>Outstanding Shares</label>
        <input
          type="text"
          value={calculatorObject.oustandingShares}
          onChange={handleChangeOutstandingShares}
          placeholder="No Of Shares"
          className="rounded-md py-2 px-3 text-center text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        ></input>
      </div>
      <div className="flex flex-row items-center justify-between pb-2 px-5">
        <label>Discount Rate</label>
        <input
          type="text"
          value={discountRate}
          onChange={handleChangeDiscountRate}
          placeholder="% Discount"
          className="rounded-md py-2 px-3 text-center text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        ></input>
      </div>
      <div className="flex flex-row items-center justify-between pb-2 px-5">
        <label>Current Year</label>
        <input
          type="text"
          placeholder="2025"
          readOnly
          className="rounded-md py-2 px-3 text-center text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-yellow-300 bg-white"
        ></input>
      </div>
    </div>
  );
};

export default CalculatorTable;
