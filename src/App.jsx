import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Masters/LandingPage/HomePage";
import Navbar from "./Masters/NavBar/NavBar";
import AllJewellery from "./Masters/Pages/AllJewellery/AllJewellery";
import Gold from "./Masters/Pages/Gold/Gold";
import Diamonds from "./Masters/Pages/Diamond/Diamonds";
import Earrings from "./Masters/Pages/Earrings/Earrings";
import Rings from "./Masters/Pages/Rings/Rings";
import DailyWear from "./Masters/Pages/DailyWear/DailyWear";
import Collections from "./Masters/Pages/Collections/Collections";
import Wedding from "./Masters/Pages/Wedding/Wedding";
import Gifting from "./Masters/Pages/Gifting/Gifting";
import More from "./Masters/Pages/More/More";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="sticky top-0 ">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/alljewellery" element={<AllJewellery />} />
        <Route path="/gold" element={<Gold />} />
        <Route path="/diamond" element={<Diamonds />} />
        <Route path="/earrings" element={<Earrings />} />
        <Route path="/rings" element={<Rings />} />
        <Route path="/dailywear" element={<DailyWear />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/Gifting" element={<Gifting />} />
        <Route path="/More" element={<More />} />
      </Routes>
    </>
  );
}

export default App;
