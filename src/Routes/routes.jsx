// src/Routes/routes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../Masters/Pages/Home/Home";
import About from "../Masters/Pages/About/About";

import Blogs from "../Masters/Pages/Blogs/Blogs";
import BlogDetails from "../Masters/Pages/Blogs/BlogDetails";
import Contact from "../Masters/Pages/Contact/Contact";
import MetalTesting from "../Masters/Pages/Services/MetalTesting";
import ComputerTouchPage from "../Masters/Pages/Services/ComputerTouchPage";
import JewelleryRepair from "../Masters/Pages/Services/JewelleryRepair";
import GoldSilverTesting from "../Masters/Pages/Services/GoldSilverTesting";
import GoldSilver from "../Masters/Pages/gold_silver/GoldSilver";
import TermsConditions from "../Masters/Pages/Legal/TermsConditions";
import PrivacyPolicy from "../Masters/Pages/Legal/PrivacyPolicy";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Default route: when you open the app, show Home */}
      <Route path="/" element={<Home />} />

      {/* Other routes */}
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gold_silver" element={<GoldSilver />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />

      {/* Service Pages */}
      <Route path="/services/computer-touch" element={<ComputerTouchPage />} />
      <Route path="/services/jewellery-repair" element={<JewelleryRepair />} />
      <Route path="/services/metal-testing" element={<MetalTesting />} />
      <Route path="/services/Gold-Silver-Testing" element={<GoldSilverTesting />} />
      <Route path="/services/gold-&-silver-testing" element={<GoldSilverTesting />} />

      {/* Legal Pages */}
      <Route path="/terms" element={<TermsConditions />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  );
};

export default AppRoutes;
