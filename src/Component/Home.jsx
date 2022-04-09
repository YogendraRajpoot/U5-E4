import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Auth/Authcontext";

export const Home = () => {
  const { isAuth, logout } = useContext(AuthContext);
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return <div>Home</div>;
};
