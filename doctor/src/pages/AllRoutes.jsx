import React from "react";
import { Route, Routes } from "react-router-dom";
import Appointments from "./Appointments";
import Dashboard from "./Dashboard";
import Doctors from "./Doctors";
import EditDoctor from "./EditDoctor";
import Home from "./Home";
import Login from "./Login";
import Patients from "./Patients";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="" element={<Home />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="doctors/:id" element={<EditDoctor />} />
        <Route path="patients" element={<Patients />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
