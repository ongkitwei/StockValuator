import React, { useState, useContext } from "react";
import { AuthenticateContext } from "@/contexts/AuthContext";

function StockAnalysisGeminiResults({ response }: { response: string }) {
  return (
    <div className="h-screen p-12">
      <div className="bg-blue-300 h-screen rounded-xl">
        <p className="dark:text-black">{response}</p>
      </div>
    </div>
  );
}

export default StockAnalysisGeminiResults;
