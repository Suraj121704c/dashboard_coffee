import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import AdminLogin from "../Pages/Login";
import Register from "../Pages/Register";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Admin />} />
      <Route path="/" element={<AdminLogin />} />
      <Route path="/reg" element={<Register />} />
    </Routes>
  );
};

export default AllRoutes;
