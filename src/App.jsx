// src/App.jsx
import "./App.css";
import Navbar from "./Masters/NavBar/NavBar";
import AppRoutes from "./Routes/routes";
import Footer from "./Masters/Pages/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
