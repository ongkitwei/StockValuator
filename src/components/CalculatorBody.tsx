import CalculatorWorkflow from "./CalculatorWorkflow";
import CalculatorTable from "./ui/CalculatorTable";

const CalculatorBody = () => {
  return (
    <div className="w-screen dark:bg-black bg-white pt-[50px] flex flex-col items-center justify-between pb-[50px]">
      <span className="font-serif text-sm">* ALL UNITS IN MILLIONS</span>
      <span className="pb-2 font-serif text-sm">
        * KEY IN THE VALUES IN THE WHITE BOXES
      </span>
      <CalculatorTable />
      <CalculatorWorkflow />
    </div>
  );
};

export default CalculatorBody;
