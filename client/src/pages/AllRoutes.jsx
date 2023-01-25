import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./Blog";
import BookAppointment from "./BookAppointment";
import Home from "./Home";
import PatientSafety from "./PatientSafety";
import Treatments from "./Treatments";
import OurPromise from "./OurPromise";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/promise" element={<OurPromise />} />
      <Route path="/treatments" element={<Treatments />} />
      <Route path="/patient-safety" element={<PatientSafety />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/book-appointment" element={<BookAppointment />} />
    </Routes>
  );
};

export default AllRoutes;
