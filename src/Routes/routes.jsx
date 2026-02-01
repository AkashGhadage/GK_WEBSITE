// src/Routes/routes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../Masters/Pages/Home/Home";
import About from "../Masters/Pages/About/About";
import Gallary from "../Masters/Pages/Gallary/Gallary";
import Blogs from "../Masters/Pages/Blogs/Blogs";
import BlogDetails from "../Masters/Pages/Blogs/BlogDetails";
import Contact from "../Masters/Pages/Contact/Contact";
import MetalTesting from "../Masters/Pages/Services/MetalTesting";
import ComputerTouchPage from "../Masters/Pages/Services/ComputerTouchPage";
import JewelleryRepair from "../Masters/Pages/Services/JewelleryRepair";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Default route: when you open the app, show Home */}
      <Route path="/" element={<Home />} />

      {/* Other routes */}
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallary" element={<Gallary />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />

      {/* Service Pages */}
      <Route path="/services/computer-touch" element={<ComputerTouchPage />} />
      <Route path="/services/jewellery-repair" element={<JewelleryRepair />} />
      <Route path="/services/metal-testing" element={<MetalTesting />} />
    </Routes>
  );
};

export default AppRoutes;
