import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default AllRoutes;
