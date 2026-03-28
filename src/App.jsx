// src/App.jsx
import "./App.css";
import Navbar from "./Masters/NavBar/NavBar";
import AppRoutes from "./Routes/routes";
import Footer from "./Masters/Pages/Footer/Footer";
import WhatsAppButton from "./Masters/Shared/WhatsAppButton";
import ScrollToTop from "./Masters/Shared/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
