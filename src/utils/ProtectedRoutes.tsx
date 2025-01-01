import { Outlet, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthenticateContext } from "../contexts/AuthContext";

function ProtectedRoutes() {
  const { isLoggedIn } = useContext(AuthenticateContext);
  console.log("isloggedin status" + isLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
}

export default ProtectedRoutes;
