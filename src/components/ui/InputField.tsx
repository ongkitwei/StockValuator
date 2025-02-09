import { ChangeEvent } from "react";

function InputField({
  inputValue,
  handleButton,
  handleInputChange
}: {
  inputValue: string;
  handleButton: () => void;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col items-center">
      <label
        htmlFor="large-input"
        className="pb-3 text-sm font-medium text-gray-900 dark:text-white"
      >
        Type in Stock Name
      </label>
      <input
        value={inputValue}
        onChange={handleInputChange}
        type="text"
        id="large-input"
        className="w-60 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
      />
      <a
        className="relative inline-flex items-center justify-center px-14 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group mt-5 hover:cursor-pointer"
        onClick={handleButton}
      >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <span className="relative">Generate</span>
      </a>
    </div>
  );
}

export default InputField;
