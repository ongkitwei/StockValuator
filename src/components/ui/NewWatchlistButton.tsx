import React from "react";

const NewWatchlistButton = () => {
  return (
    <div className="w-[150px] h-5 p-5 flex flex-row items-center justify-center gap-3 bg-blue-600 rounded-lg">
      <span className="text-lg">+</span>
      <span>New Stock</span>
    </div>
  );
};

export default NewWatchlistButton;
