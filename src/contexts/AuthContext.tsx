import { useState, createContext, ReactNode } from "react";

// Define the type for the context
type AuthenticateContextType = {
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
  fcfs: number[];
  setArrayFcf: React.Dispatch<React.SetStateAction<number[]>>;
  inputFcf: string;
  setInputFcf: React.Dispatch<React.SetStateAction<string>>;
  inputRate1to5: string;
  setInputRate1to5: React.Dispatch<React.SetStateAction<string>>;
  inputRate6to10: string;
  setInputRate6to10: React.Dispatch<React.SetStateAction<string>>;
  inputRate11to20: string;
  setInputRate11to20: React.Dispatch<React.SetStateAction<string>>;
  discountRate: string;
  setDiscountRate: React.Dispatch<React.SetStateAction<string>>;
  discountedValue: number[];
  setDiscountedValue: React.Dispatch<React.SetStateAction<number[]>>;
  intrinsicValue: number;
  setIntrinsicValue: React.Dispatch<React.SetStateAction<number>>;
  calculatorObject: CalculatorObjectType;
  setCalculatorObject: React.Dispatch<
    React.SetStateAction<CalculatorObjectType>
  >;
};

type CalculatorObjectType = {
  nameOfStock: string;
  tickerSymbol: string;
  cashAndCashEquiv: string;
  totalDebt: string;
  oustandingShares: string;
};

export const AuthenticateContext = createContext<AuthenticateContextType>({
  isLoggedIn: false,
  setLoggedIn: () => {
    throw new Error("setLoggedIn function must be overridden by a provider.");
  },
  fcfs: [],
  setArrayFcf: () => {
    throw new Error("setArrayFcf function must be overridden by a provider.");
  },
  inputFcf: "",
  setInputFcf: () => {
    throw new Error("setInputFcf function must be overridden by a provider.");
  },
  inputRate1to5: "",
  setInputRate1to5: () => {
    throw new Error("setInput1to5 function must be overridden by a provider.");
  },
  inputRate6to10: "",
  setInputRate6to10: () => {
    throw new Error(
      "setInputRate6to10 function must be overridden by a provider."
    );
  },
  inputRate11to20: "",
  setInputRate11to20: () => {
    throw new Error(
      "setInputRate11to20 function must be overridden by a provider."
    );
  },
  discountRate: "",
  setDiscountRate: () => {
    throw new Error(
      "SetDiscountRate function must be overridden by a provider."
    );
  },
  discountedValue: [],
  setDiscountedValue: () => {
    throw new Error(
      "SetDiscountedValue function must be overridden by a provider."
    );
  },
  intrinsicValue: 0,
  setIntrinsicValue: () => {
    throw new Error(
      "SetIntrinsicValue function must be overridden by a provider."
    );
  },
  calculatorObject: {
    nameOfStock: "",
    tickerSymbol: "",
    cashAndCashEquiv: "",
    totalDebt: "",
    oustandingShares: ""
  },
  setCalculatorObject: () => {
    throw new Error("SetCalculator function must be overridden by a provider.");
  }
});

function AuthContext({ children }: { children: ReactNode }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [fcfs, setArrayFcf] = useState<number[]>([]);
  const [inputFcf, setInputFcf] = useState("");
  const [inputRate1to5, setInputRate1to5] = useState("");
  const [inputRate6to10, setInputRate6to10] = useState("");
  const [inputRate11to20, setInputRate11to20] = useState("");
  const [discountRate, setDiscountRate] = useState("");
  const [discountedValue, setDiscountedValue] = useState<number[]>([]);
  const [intrinsicValue, setIntrinsicValue] = useState(0);
  const [calculatorObject, setCalculatorObject] =
    useState<CalculatorObjectType>({
      nameOfStock: "",
      tickerSymbol: "",
      cashAndCashEquiv: "",
      totalDebt: "",
      oustandingShares: ""
    });

  return (
    <AuthenticateContext.Provider
      value={{
        isLoggedIn,
        setLoggedIn,
        fcfs,
        setArrayFcf,
        inputFcf,
        setInputFcf,
        inputRate1to5,
        setInputRate1to5,
        inputRate6to10,
        setInputRate6to10,
        inputRate11to20,
        setInputRate11to20,
        discountRate,
        setDiscountRate,
        discountedValue,
        setDiscountedValue,
        intrinsicValue,
        setIntrinsicValue,
        calculatorObject,
        setCalculatorObject
      }}
    >
      {children}
    </AuthenticateContext.Provider>
  );
}

export default AuthContext;
