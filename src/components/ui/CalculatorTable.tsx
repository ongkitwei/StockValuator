import React from "react";

interface CalculatorTableProps {
  title: string;
  label1: string;
  label1Placeholder: string;
  label2: string;
  label2Placeholder: string;
  label3?: string;
  label3Placeholder?: string;
  label3ReadOnly: boolean;
}

const CalculatorTable = (props: CalculatorTableProps) => {
  return (
    <div className="flex flex-col w-[500px] dark:bg-gray-800">
      <h1 className="dark:bg-teal-600 h-10 flex items-center pl-5 font-bold uppercase">
        {props.title}
      </h1>
      <div className="flex flex-row items-center justify-between pb-2 pt-3 px-5">
        <label>{props.label1}</label>
        <input
          type="text"
          placeholder={props.label1Placeholder}
          className="rounded-md py-2 px-3 text-center text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        ></input>
      </div>
      <div className="flex flex-row items-center justify-between pb-2 px-5">
        <label>{props.label2}</label>
        <input
          type="text"
          placeholder={props.label2Placeholder}
          className="rounded-md py-2 px-3 text-center text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        ></input>
      </div>
      <div className="flex flex-row items-center justify-between pb-2 px-5">
        <label>{props.label3}</label>
        <input
          type="text"
          placeholder={props.label3Placeholder}
          readOnly={props.label3ReadOnly}
          className="rounded-md py-2 px-3 text-center text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        ></input>
      </div>
    </div>
  );
};

export default CalculatorTable;
