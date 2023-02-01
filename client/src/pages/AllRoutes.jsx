import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./Blog";
import BookAppointment from "./BookAppointment";
import Home from "./Home";
import PatientSafety from "./PatientSafety";
import OurPromise from "./OurPromise";
import RCT from "./PainRelief/RCT";
import PainRelief from "./PainRelief/PainRelief";
import TeethReplacement from "./TeethReplacement/TeethReplacement";
import CosmeticDentistry from "./CosmeticDentistry/CosmeticDentistry";
import PreventiveDentistry from "./PreventiveDentistry/PreventiveDentistry";
import KidsDentistry from "./KidsDentistry/KidsDentistry";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/promise" element={<OurPromise />} />      
      <Route path="/pain-relief" element={<PainRelief />} />
      <Route path="/teeth-replacement" element={<TeethReplacement />} />
      <Route path="/cosmetic-dentistry" element={<CosmeticDentistry />} />
      <Route path="/preventive-dentistry" element={<PreventiveDentistry />} />
      <Route path="/kids-dentistry" element={<KidsDentistry />} />
      <Route path="/rct" element={<RCT />} />
      <Route path="/patient-safety" element={<PatientSafety />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/book-appointment" element={<BookAppointment />} />
    </Routes>
  );
};

export default AllRoutes;
