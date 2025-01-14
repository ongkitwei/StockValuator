import React from "react";
import CalculatorTable from "./ui/CalculatorTable";

const CalculatorBody = () => {
  return (
    <div className="h-screen w-screen dark:bg-black bg-white pt-[50px] flex flex-col items-center pb-[50px]">
      <span className="pr-[380px] font-bebas">* ALL UNITS IN MILLIONS</span>

      <CalculatorTable
        title="Stock Info"
        label1="Name Of Stock"
        label1Placeholder="Enter Name Of Stock"
        label2="Ticker Symbol"
        label2Placeholder="Enter Ticker Symbol"
        label3="Valuation Method"
        label3Placeholder="Discounted Cash Flow"
        label3ReadOnly={true}
      />
      <CalculatorTable
        title="FcF & Equity Info"
        label1="Free Cash Flow (current)"
        label1Placeholder="Enter current FCF"
        label2="Cash & Cash Equivalent"
        label2Placeholder="Enter Cash & Cash Equivalent"
        label3="Total Debt"
        label3Placeholder="Enter Total Debt"
        label3ReadOnly={false}
      />
      <CalculatorTable
        title="Projected Growth"
        label1="Free Cash Flow growth rate (Yr 1-5)		"
        label1Placeholder="% Year 1-5"
        label2="Free Cash Flow growth rate (Yr 6-10)"
        label2Placeholder="% Year 6-10"
        label3="Free Cash Flow growth rate (Yr 11-20)"
        label3Placeholder="% Year 11-20"
        label3ReadOnly={false}
      />
      <CalculatorTable
        title="Shares"
        label1="Oustanding Shares"
        label1Placeholder="No Of Shares"
        label2="Discount Rate"
        label2Placeholder="% Discount"
        label3="Current Year"
        label3Placeholder="2025"
        label3ReadOnly={true}
      />
    </div>
  );
};

export default CalculatorBody;
