import { useState, createContext, ReactNode } from "react";

// Define the type for the context
type AuthenticateContextType = {
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
  fcfs: number[];
  setArrayFcf: React.Dispatch<React.SetStateAction<number[]>>;
  inputFcf: string;
  setInputFcf: React.Dispatch<React.SetStateAction<string>>;
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
  }
});

function AuthContext({ children }: { children: ReactNode }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [fcfs, setArrayFcf] = useState<number[]>([]);
  const [inputFcf, setInputFcf] = useState("");

  return (
    <AuthenticateContext.Provider
      value={{
        isLoggedIn,
        setLoggedIn,
        fcfs,
        setArrayFcf,
        inputFcf,
        setInputFcf
      }}
    >
      {children}
    </AuthenticateContext.Provider>
  );
}

export default AuthContext;
