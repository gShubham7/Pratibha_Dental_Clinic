import React from "react";
import { Route, Routes } from "react-router-dom";
import Appointments from "./Appointments";
import Dashboard from "./Dashboard";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/appointments" element={<Appointments />} />
    </Routes>
  );
};

export default AllRoutes;
