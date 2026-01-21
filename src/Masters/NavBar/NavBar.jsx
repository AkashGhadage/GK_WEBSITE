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
      .then(res => res.json())
      .then(data => {
        const item = data.items[0];
        const gold10g = (item.xauPrice / 31.1035) * 10;
        const silver1kg = (item.xagPrice / 31.1035) * 1000;
        setGold(gold10g.toFixed(2));
        setSilver(silver1kg.toFixed(2));
      })
      .catch(err => console.error("API Error:", err));
  };

  useEffect(() => {
    fetchMetalPrices();
    const intervalId = setInterval(fetchMetalPrices, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-[80px] bg-gradient-to-r from-slate-900/95 via-blue-900/70 to-slate-900/95 backdrop-blur-xl border-b border-neutral-800/50 shadow-2xl">
      <div className="h-full flex items-center justify-between px-6 lg:px-12">
        
        {/* Logo & Prices - Left */}
        <div className="flex items-center gap-4 lg:gap-6 flex-shrink-0">
          <div className="text-2xl lg:text-3xl font-serif tracking-widest bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
            GK Gold
          </div>

          <div className="hidden md:flex items-center gap-3 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-xl border border-neutral-700/60 shadow-lg">
            <div className="text-center">
              <p className="text-yellow-400 font-bold text-sm lg:text-base leading-tight">
                ₹{gold ?? "--"}
              </p>
              <p className="text-xs text-neutral-400 font-medium">/10g</p>
            </div>
            <div className="w-px h-6 bg-neutral-600/50"></div>
            <div className="text-center">
              <p className="text-gray-300 font-bold text-sm lg:text-base leading-tight">
                ₹{silver ?? "--"}
              </p>
              <p className="text-xs text-neutral-400 font-medium">/kg</p>
            </div>
          </div>
        </div>

        {/* Navigation - Center */}
        <div className="flex-1 flex justify-center px-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 lg:gap-8 text-sm lg:text-base font-medium">
            {NavbarComponents.map((data, index) => (
              <NavLink
                key={index}
                to={data.path}
                className={({ isActive }) =>
                  `relative px-3 py-2 transition-all duration-500 ease-out text-gray-200 hover:text-yellow-400 hover:font-semibold
                  after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[2px] after:w-0 
                  after:bg-gradient-to-r after:from-yellow-400 after:to-orange-500 after:rounded-full
                  after:transition-all after:duration-500 hover:after:w-12 lg:hover:after:w-16 after:origin-center
                  ${isActive 
                    ? "!text-yellow-400 font-semibold after:w-16 scale-105" 
                    : ""
                  }`
                }
              >
                {data.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* CTA Button - Right */}
        <div className="flex-shrink-0">
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 
                     hover:from-yellow-500 hover:via-yellow-600 hover:to-orange-600 shadow-2xl hover:shadow-3xl 
                     text-slate-900 font-bold px-8 py-3 rounded-full text-sm lg:text-base
                     transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98]
                     whitespace-nowrap border-2 border-transparent hover:border-yellow-400/50"
          >
            Book Test →
          </Link>
        </div>
      </div>
    </div>
  );
}
