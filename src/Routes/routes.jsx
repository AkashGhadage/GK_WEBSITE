import { Routes, Route } from "react-router-dom";
import HomePage from "../Masters/LandingPage/HomePage";
import About from "../Masters/Pages/About/About";
import Services from "../Masters/Pages/Services/Services";
import Gallary from "../Masters/Pages/Gallary/Gallary";
import Blogs from "../Masters/Pages/Blogs/Blogs";
import Contact from "../Masters/Pages/Contact/Contact";

// Pages


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/gallary" element={<Gallary />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
