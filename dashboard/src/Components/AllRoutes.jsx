import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import AdminLogin from "../Pages/Login";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Admin />} />
      <Route path="/" element={<AdminLogin />} />
    </Routes>
  );
};

export default AllRoutes;
