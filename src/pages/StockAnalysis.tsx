import React from "react";
import StockAnalysisBody from "@/components/StockAnalysisBody";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

function StockAnalysis() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <StockAnalysisBody />
      <Footer />
    </div>
  );
}

export default StockAnalysis;
