import CalculatorWorkflow from "./CalculatorWorkflow";
import CalculatorTable from "./ui/CalculatorTable";

const CalculatorBody = () => {
  return (
    <div className="w-screen dark:bg-black bg-white pt-[50px] flex flex-col items-center justify-between pb-[50px]">
      <span className="pb-2 font-serif">* ALL UNITS IN MILLIONS</span>

      <CalculatorTable />
      <CalculatorWorkflow />
    </div>
  );
};

export default CalculatorBody;
