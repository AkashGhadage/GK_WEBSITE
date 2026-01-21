import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const NavbarComponents = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallary" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [gold, setGold] = useState(null);
  const [silver, setSilver] = useState(null);

  const fetchMetalPrices = () => {
    fetch("https://data-asg.goldprice.org/dbXRates/INR")
      .then((res) => res.json())
      .then((data) => {
        const item = data.items[0];
        const gold10g = (item.xauPrice / 31.1035) * 10;
        const silver1kg = (item.xagPrice / 31.1035) * 1000;
        setGold(gold10g.toFixed(2));
        setSilver(silver1kg.toFixed(2));
      })
      .catch((err) => console.error("API Error:", err));
  };

  useEffect(() => {
    fetchMetalPrices();
    const intervalId = setInterval(fetchMetalPrices, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    // <header className="fixed inset-x-0 top-0 z-50 h-[80px] border-b border-[#333] shadow-xl bg-[rgb(48,62,73)]">
      
    // AFTER
    <header className="w-full h-[80px] border-b border-[#333] shadow-xl bg-[rgb(48,62,73)]">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 lg:px-6 text-[#e5e5e5]">
        {/* Left: Logo + prices */}
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="text-2xl lg:text-3xl font-serif tracking-[0.3em] text-[rgb(207,160,79)]">
            GK 
          </div>

          <div className="hidden md:flex items-center gap-4 rounded-lg bg-black/30 px-4 py-2 border border-[#404040]">
            <div className="text-center">
              <p className="text-sm lg:text-base font-semibold text-[rgb(207,160,79)] leading-tight">
                ₹{gold ?? "--"}
              </p>
              <p className="text-[11px] text-[#cbd5f5] font-medium">/10g</p>
            </div>
            <span className="h-6 w-px bg-[#4b5563]" />
            <div className="text-center">
              <p className="text-sm lg:text-base font-semibold text-[#f9fafb] leading-tight">
                ₹{silver ?? "--"}
              </p>
              <p className="text-[11px] text-[#cbd5f5] font-medium">/kg</p>
            </div>
          </div>
        </div>

        {/* Center: nav links (desktop) */}
        <nav className="hidden md:flex flex-1 justify-center px-4">
          <div className="flex items-center gap-5 text-xs lg:text-sm font-medium">
            {NavbarComponents.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                style={({ isActive }) => ({
                  color: isActive ? "rgb(207,160,79)" : "white",
                  textDecoration: "none",
                  fontSize: "0.8rem", // smaller font
                })}
                className={({ isActive }) =>
                  `relative px-1.5 py-1
                   font-sans tracking-[0.18em] uppercase
                   transition-colors duration-200
                   after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                   after:bg-[rgb(207,160,79)]
                   after:transition-all after:duration-200
                   hover:after:w-full
                   ${isActive ? "font-semibold after:w-full" : ""}`
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "rgb(207,160,79)";
                }}
                onMouseLeave={(e) => {
                  const isActive = e.currentTarget.className.includes(
                    "font-semibold"
                  );
                  e.currentTarget.style.color = isActive
                    ? "rgb(207,160,79)"
                    : "white";
                }}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Right: prices (mobile) + CTA */}
        <div className="flex items-center gap-3">
          <div className="flex md:hidden flex-col text-right text-[11px] leading-tight">
            <span className="text-[rgb(207,160,79)] font-semibold">
              G: ₹{gold ?? "--"}/10g
            </span>
            <span className="text-[#e5e5e5] font-semibold">
              S: ₹{silver ?? "--"}/kg
            </span>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-[rgb(207,160,79)]
                       px-5 py-2 text-sm lg:text-base font-semibold text-black
                       border border-[#facc15]
                       hover:bg-[#f1c769] hover:border-[#fde68a]
                       transition-transform transition-colors duration-300
                       hover:-translate-y-[2px] hover:shadow-lg active:scale-95 whitespace-nowrap"
          >
            Book Test →
          </Link>
        </div>
      </div>
    </header>
  );
}
