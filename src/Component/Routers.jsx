import React from "react";
import { Route, Routes } from "react-router-dom";
import { Employees } from "./Employees";
import { Home } from "./Home";
import { Login } from "./Login";
import { Notfound } from "./Notfound";
import { Register } from "./Register";
import { SingleProductPage } from "./SingleProductPage";

export const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employees/:userid" element={<SingleProductPage />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};
