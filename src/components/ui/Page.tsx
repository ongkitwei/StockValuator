import { Payment, columns } from "./Columns";
import { DataTable } from "./DataTable";
import { useEffect, useState, useContext } from "react";
import SearchEngine from "./SearchEngine";
import { FiFilter } from "react-icons/fi";
import NewWatchlistButton from "./NewWatchlistButton";
import { AuthenticateContext } from "@/contexts/AuthContext";
import Modal from "./Modal";

export default function DemoPage() {
  async function getData(): Promise<Payment[]> {
    return watchlistObject.map((x: any) => ({
      stockName: x.nameOfStock, // Ensure correct property names
      tickerSymbol: x.tickerSymbol,
      intrinsicValue: x.intrinsicValue
    }));
  }

  const { watchlistObject } = useContext(AuthenticateContext);
  const [data, setData] = useState<Payment[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  useEffect(() => {
    getData().then(setData);
  }, []);
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center justify-end gap-5 pb-8">
          <SearchEngine />
          <FiFilter size={25} className="hover:cursor-pointer" />
        </div>
        <NewWatchlistButton onClick={() => setOpenModal(true)} />
        {openModal ? (
          <Modal isOpen={openModal} onClose={() => setOpenModal(false)} />
        ) : null}
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
