import WatchlistCard from "./WatchlistCard";
import MyWatchlistChart from "./ui/MyWatchlistChart";
import StockChart from "./ui/MyWatchlistChart";
import { AuthenticateContext } from "@/contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import DOMPurify from "dompurify";

const MyWatchlistBody = () => {
  const { watchlistObject, lastClose } = useContext(AuthenticateContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>();
  const [_, setError] = useState(null);
  const { inputStockName, setInputStockName } = useContext(AuthenticateContext);
  let sanitizedText = "";

  async function handleGenerateButton(nameOfStock: any) {
    const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
    if (modal) modal.showModal();
    try {
      setLoading(true);
      setInputStockName(nameOfStock);
      const response = await fetch(
        `http://localhost:4000/api/generate/${nameOfStock}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        );
      }
      const text = await response.text(); // Read response as text first
      sanitizedText = DOMPurify.sanitize(text);
      setResponse(sanitizedText);
      console.log(text);
    } catch (err: any) {
      console.error("Error fetching text:", err);
      setError(err.message);
    } finally {
      setLoading(false); // Set loading to false *after* the fetch call completes (success or error)
    }
  }
  return (
    <>
      <div className="flex flex-col md:flex-rows-2 items-center justify-center space-y-7 p-12 2xl:grid 2xl:grid-cols-3 xl:grid xl:grid-cols-2">
        {watchlistObject.map((x: any, index) => (
          <WatchlistCard
            key={x.tickerSymbol}
            stockName={x.nameOfStock}
            currentSharePrice={lastClose[index]}
            intrinsicValue={x.intrinsicValue}
            tickerSymbol={x.tickerSymbol}
            onClick={() => handleGenerateButton(x.nameOfStock)}
          />
        ))}
        {/* <p>{watchlistObject.map((x: any) => x.tickerSymbol)}</p> */}
      </div>
      {/* Modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* Close button */}
            <button className="btn btn-lg btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex flex-col items-center justify-center">
            {loading ? (
              <span className="loading loading-spinner loading-xl"></span>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: response }} />
            )}
            <span className="text-black">diaidiadas</span>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default MyWatchlistBody;
