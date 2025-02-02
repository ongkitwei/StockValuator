import React, { useState, useContext } from "react";
import { AuthenticateContext } from "@/contexts/AuthContext";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

function StockAnalysisGeminiResults({ response }: { response: string }) {
  const [formattedText, setFormattedText] = useState("");
  return (
    <div className="p-12">
      <div className="bg-blue-300 min-h-screen rounded-xl p-7">
        <p className="dark:text-black">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{response}</ReactMarkdown>
        </p>
      </div>
    </div>
  );
}

export default StockAnalysisGeminiResults;
