import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import SignupPage from "./Signup";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "./components/ThemeProvider";
// import MenuPage from "./components/MenuPage";
import AuthContext from "./contexts/AuthContext";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Calculator from "./pages/Calculator";
import MyPortfolio from "./pages/MyPortfolio";
import MyWatchlist from "./pages/MyWatchlist";
import StockAnalysis from "./pages/StockAnalysis";
import LandingPage from "./pages/LandingPage";
// import { Home } from "lucide-react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/homepage",
        element: <HomePage />
      }
    ]
  },
  {
    path: "/signup",
    element: <SignupPage />
  },
  {
    path: "/calculator",
    element: <Calculator />
  },
  {
    path: "/myportfolio",
    element: <MyPortfolio />
  },
  {
    path: "/mywatchlist",
    element: <MyWatchlist />
  },
  {
    path: "/stockanalysis",
    element: <StockAnalysis />
  },
  {
    path: "/landingpage",
    element: <LandingPage />
  }
]);

function App() {
  return (
    <AuthContext>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthContext>
  );
}

export default App;
