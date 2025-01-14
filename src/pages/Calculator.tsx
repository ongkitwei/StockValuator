import React from "react";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import CalculatorBody from "@/components/CalculatorBody";

function Calculator() {
  return (
    <div className="flex flex-col justify-between h-screen dark:bg-black bg-white">
      <Header />
      <CalculatorBody />
      <Footer />
    </div>
  );
}

export default Calculator;
