import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-black/80 flex flex-col items-center justify-center w-[600px] h-[600px] rounded-xl shadow-lg">
        <div className="flex flex-col gap-4 items-end pb-9">
          <div className="flex justify-center items-center gap-3">
            <label htmlFor="ticker">Ticker Symbol</label>
            <input id="ticker" className="rounded-md py-1 bg-gray-200"></input>
          </div>
          <div className="flex justify-center items-center gap-3">
            <label htmlFor="ticker">Average Cost Price</label>
            <input id="ticker" className="rounded-md py-1 bg-gray-200 "></input>
          </div>
        </div>

        <div className="flex flex-row gap-9">
          <div
            onClick={onClose}
            className="w-36 h-10 bg-blue-800 flex items-center justify-center rounded-lg hover:cursor-pointer"
          >
            <span>CANCEL</span>
          </div>
          <div
            onClick={onClose}
            className="w-36 h-10 bg-purple-800 flex items-center justify-center rounded-lg hover:cursor-pointer"
          >
            <span>ADD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
