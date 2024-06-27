import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const adminIsLogged = sessionStorage.getItem("adminIsLogged");

  return adminIsLogged ? children : <Navigate to="/admin" />;
};

export default PrivateRoute;
