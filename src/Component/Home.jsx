import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Employees } from "./Employees";

export const Home = () => {
  const isauth = useSelector((state) => state.isauth);
  // const { logout } = useContext(AuthContext);

  // if (!isauth) {
  //   return <Navigate to="/login" />;
  // }
  return <div>
    <Employees/>
  </div>;
};
