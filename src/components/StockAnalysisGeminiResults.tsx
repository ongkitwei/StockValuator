import React, { useState, useContext } from "react";
import DOMPurify from "dompurify";
import Typewriter from "typewriter-effect";

function StockAnalysisGeminiResults({ response }: { response: string }) {
  const [formattedText, setFormattedText] = useState("");
  const sanitizedHTML = DOMPurify.sanitize(response); // Sanitize the response

  return (
    <div className="p-20">
      <div className="bg-blue-300 min-h-screen rounded-xl p-12">
        <p
          className="dark:text-black"
          dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
        />
      </div>
    </div>
  );
}

export default StockAnalysisGeminiResults;
