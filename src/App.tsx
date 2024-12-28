import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import SignupPage from "./Signup";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "./components/ThemeProvider";
import MenuPage from "./components/MenuPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/HomePage",
    element: <HomePage />
  },
  {
    path: "/Signup",
    element: <SignupPage />
  },
  {
    path: "/Menu",
    element: <MenuPage />
  }
]);

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
