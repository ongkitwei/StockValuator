import DOMPurify from "dompurify";
import Typewriter from "typewriter-effect";

function StockAnalysisGeminiResults({ response }: { response: string }) {
  const sanitizedHTML = DOMPurify.sanitize(response); // Sanitize the response

  return (
    <div className="p-20">
      <div className="bg-blue-300 min-h-screen rounded-xl p-12">
        <Typewriter
          options={{
            strings: [sanitizedHTML],
            autoStart: true,
            loop: false,
            delay: 30,
            deleteSpeed: Infinity // Prevents deleting
          }}
        ></Typewriter>
      </div>
    </div>
  );
}

export default StockAnalysisGeminiResults;
