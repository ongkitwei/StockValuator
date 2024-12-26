import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./Signup";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path="/SignupPage" element={<SignupPage />}></Route>
        <Route path="/HomePage" element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
