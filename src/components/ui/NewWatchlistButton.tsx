type NewWatchlistButtonType = {
  onClick: () => void;
};
const NewWatchlistButton = ({ onClick }: NewWatchlistButtonType) => {
  return (
    <div
      onClick={onClick}
      className="w-[150px] h-5 p-5 flex flex-row items-center justify-center gap-3 bg-blue-600 rounded-lg hover:cursor-pointer"
    >
      <span className="text-lg">+</span>
      <span>New Stock</span>
    </div>
  );
};

export default NewWatchlistButton;
