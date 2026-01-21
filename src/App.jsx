import "./App.css";

// Layout
import Navbar from "./Masters/NavBar/NavBar";
import AppRoutes from "./Routes/routes";

function App() {
  return (
    <>
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* App Routes */}
      <AppRoutes />
    </>
  );
}

export default App;
