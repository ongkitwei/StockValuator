import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import SignupPage from "./Signup";
import HomePage from "./pages/HomePage";

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
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
