import { useState, createContext, ReactNode } from "react";

// Define the type for the context
type AuthenticateContextType = {
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
};
export const AuthenticateContext = createContext<AuthenticateContextType>({
  isLoggedIn: false,
  setLoggedIn: () => {
    throw new Error("setLoggedIn function must be overridden by a provider.");
  }
});

function AuthContext({ children }: { children: ReactNode }) {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <AuthenticateContext.Provider
      value={{
        isLoggedIn,
        setLoggedIn
      }}
    >
      {children}
    </AuthenticateContext.Provider>
  );
}

export default AuthContext;
