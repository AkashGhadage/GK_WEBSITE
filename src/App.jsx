import "./App.css";
import Navbar from "./Masters/NavBar/NavBar";
import AppRoutes from "./Routes/routes";

function App() {
  return (
    <>
      <Navbar />
      {/* Push content below 80px navbar */}
      <div className="pt-[80px]">
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
