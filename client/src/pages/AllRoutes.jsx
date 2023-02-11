import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./Blog";
import Home from "./Home";
import PatientSafety from "./PatientSafety";
import OurPromise from "./OurPromise";
import RootCanalTreatment from "./PainRelief/RootCanalTreatment";
import PainRelief from "./PainRelief/PainRelief";
import TeethReplacement from "./TeethReplacement/TeethReplacement";
import CosmeticDentistry from "./CosmeticDentistry/CosmeticDentistry";
import PreventiveDentistry from "./PreventiveDentistry/PreventiveDentistry";
import KidsDentistry from "./KidsDentistry/KidsDentistry";
import WistomTeethRemoval from "./PainRelief/WistomTeethRemoval";
import JawPain from "./PainRelief/JawPain";
import Dentures from "./TeethReplacement/Dentures";
import DentureImplants from "./TeethReplacement/DentureImplants";
import BridgesCrowns from "./TeethReplacement/BridgesCrowns";
import SmileMakeover from "./CosmeticDentistry/SmileMakeover";
import TeethWhitening from "./CosmeticDentistry/TeethWhitening";
import ClearAligners from "./CosmeticDentistry/ClearAligners";
import BracesAligners from "./CosmeticDentistry/BracesAligners";
import LaminatesVeneers from "./CosmeticDentistry/LaminatesVeneers";
import AdvancedGumTreatment from "./PreventiveDentistry/AdvancedGumTreatment";
import BadBreadthTreatment from "./PreventiveDentistry/BadBreadthTreatment";
import TeethCleaning from "./PreventiveDentistry/TeethCleaning";
import MouthUlcers from "./PreventiveDentistry/MouthUlcers";
import AboutUs from "./AboutUs";
import Contact from "./Contact";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/promise" element={<OurPromise />} />

      <Route path="/pain-relief" element={<PainRelief />} />
      <Route path="/root-canal-treatment" element={<RootCanalTreatment />} />
      <Route path="/wisdom-tooth-removal" element={<WistomTeethRemoval />} />
      <Route path="/jaw-pain-treatment" element={<JawPain />} />

      <Route path="/teeth-replacement" element={<TeethReplacement />} />
      <Route path="/dentures" element={<Dentures />} />
      <Route path="/dental-implants" element={<DentureImplants />} />
      <Route path="/bridges-crowns" element={<BridgesCrowns />} />

      <Route path="/cosmetic-dentistry" element={<CosmeticDentistry />} />
      <Route path="/smile-makeover" element={<SmileMakeover />} />
      <Route path="/teeth-whitening" element={<TeethWhitening />} />
      <Route path="/clear-aligners" element={<ClearAligners />} />
      <Route path="/braces-aligners" element={<BracesAligners />} />
      <Route path="/laminates-veneers" element={<LaminatesVeneers />} />

      <Route path="/preventive-dentistry" element={<PreventiveDentistry />} />
      <Route
        path="/advanced-gum-treatment"
        element={<AdvancedGumTreatment />}
      />
      <Route path="/bad-breath-treatment" element={<BadBreadthTreatment />} />
      <Route path="/teeth-cleaning" element={<TeethCleaning />} />
      <Route path="/mouth-ulcers" element={<MouthUlcers />} />

      <Route path="/kids-dentistry" element={<KidsDentistry />} />

      <Route path="/patient-safety" element={<PatientSafety />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />      
    </Routes>
  );
};

export default AllRoutes;
