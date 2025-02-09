import React, { useContext, useState } from "react";
import { AuthenticateContext } from "@/contexts/AuthContext";
import InputField from "./ui/InputField";
import StockAnalysisGeminiResults from "./StockAnalysisGeminiResults";
import LoadingSpinner from "./ui/LoadingSpinner";

function StockAnalysisBody() {
  const [response, setResponse] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [_, setError] = useState(null);
  const { inputStockName, setInputStockName } = useContext(AuthenticateContext);

  async function handleGenerateButton() {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:4000/api/generate/${inputStockName}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        );
      }
      const text = await response.text(); // Read response as text first
      console.log(text);
      setResponse(text);
    } catch (err: any) {
      console.error("Error fetching text:", err);
      setError(err.message);
    } finally {
      setLoading(false); // Set loading to false *after* the fetch call completes (success or error)
    }
  }

  function handlechangeInputStockName(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setInputStockName(event.target.value);
  }

  return (
    <div className="pt-24">
      <InputField
        inputValue={inputStockName}
        handleButton={handleGenerateButton}
        handleInputChange={handlechangeInputStockName}
      />
      {loading ? (
        <div className="flex items-center justify-center pt-8">
          <LoadingSpinner />
        </div>
      ) : null}
      <StockAnalysisGeminiResults response={response} />
    </div>
  );
}

export default StockAnalysisBody;
