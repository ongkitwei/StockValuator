import React from "react";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import CalculatorBody from "@/components/CalculatorBody";
import CalculatedResultsTable from "@/components/ui/CalculatedResultsTable";

function Calculator() {
  return (
    <div className="dark:bg-black bg-white min-h-screen flex flex-col">
      <Header />
      <CalculatorBody />
      <CalculatedResultsTable />
      <Footer />
    </div>
  );
}

export default Calculator;
