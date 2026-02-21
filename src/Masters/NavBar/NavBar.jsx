import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, ShieldCheck, Menu, X } from "lucide-react";

const NavbarComponents = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallary" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [showServices, setShowServices] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="w-full h-[80px] lg:h-[100px] border-b border-[#3d4a54] shadow-2xl bg-[rgb(48,62,73)] sticky top-0 z-[1000] backdrop-blur-md bg-opacity-98">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 lg:px-8 text-[#e5e5e5]">

        {/* Left: Logo & Trust Tagline */}
        <Link to="/home" className="flex items-center gap-2 lg:gap-4 group no-underline">
          <img
            src="/GK_LOGO_FINAL.png"
            alt="Gurukrupa Gold Logo"
            className="h-10 lg:h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />

          <div className="flex flex-col border-l border-white/20 pl-2 lg:pl-4 items-center justify-center">
            {/* Top Row: The Brand */}
            <div className="flex items-baseline justify-center w-full">
              <span className="text-sm lg:text-xl font-light tracking-[0.15em] lg:tracking-[0.25em] text-white uppercase leading-none">
                Gurukrupa
              </span>
              <span className="mx-1 lg:mx-1.5 h-1 w-1 rounded-full bg-[#CFA04F] shadow-[0_0_8px_#CFA04F]"></span>
              <span className="text-sm lg:text-xl font-bold tracking-[0.2em] lg:tracking-[0.3em] bg-gradient-to-r from-[#D4AF37] via-[#FBF5B7] to-[#AA771C] bg-clip-text text-transparent uppercase leading-none">
                Gold
              </span>
            </div>

            {/* The Trust Tagline */}
            <div className="mt-1 lg:mt-2 flex flex-col items-center w-full text-center">
              <span className="block text-[6px] lg:text-[9px] tracking-[0.2em] lg:tracking-[0.35em] text-gray-400 uppercase font-light leading-tight">
                Your Trusted Partner
              </span>
              <span className="block text-[7px] lg:text-[11px] tracking-[0.15em] lg:tracking-[0.25em] text-[#CFA04F] uppercase font-semibold leading-tight mt-0.5">
                For Gold & Silver
              </span>
            </div>
          </div>
        </Link>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden md:flex flex-1 justify-center px-4">
          <div className="flex items-center gap-5 lg:gap-7 text-[11px] lg:text-[12px] font-medium uppercase tracking-[0.2em]">
            {NavbarComponents.map((item) => {
              if (item.name === "Services") {
                return (
                  <div
                    key={item.name}
                    className="relative py-8"
                    onMouseEnter={() => setShowServices(true)}
                    onMouseLeave={() => setShowServices(false)}
                  >
                    <div className={`flex items-center gap-1 cursor-pointer transition-all duration-300 ${showServices ? "text-[#CFA04F]" : "text-white hover:text-[#CFA04F]"}`}>
                      Services <ChevronDown size={14} className={`transition-transform duration-300 ${showServices ? "rotate-180" : ""}`} />
                    </div>
                    {/* Desktop Dropdown */}
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2 transition-all duration-300 transform ${showServices ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                      <div className="bg-[rgb(43,56,66)] border border-white/10 rounded-sm shadow-2xl overflow-hidden">
                        {["Computer Touch", "Jewellery Repair", "Metal Testing", "Gold & Silver Testing"].map((sub) => (
                          <button key={sub} onClick={() => { navigate(`/services/${sub.toLowerCase().replace(/ /g, '-')}`); setShowServices(false); }} className="block w-full text-left px-6 py-4 text-[10px] tracking-widest text-white hover:bg-[#CFA04F] hover:text-black transition-all border-b border-white/5 last:border-0 uppercase font-semibold">
                            {sub}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <NavLink key={item.path} to={item.path} className={({ isActive }) => `relative px-1 py-1 transition-all duration-300 group ${isActive ? "text-[#CFA04F]" : "text-white hover:text-[#CFA04F]"}`}>
                  {({ isActive }) => (
                    <>
                      {item.name}
                      <span className={`absolute bottom-0 left-0 h-[1.5px] bg-[#CFA04F] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* Right: Security Badge (Desktop) & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 px-4 py-2 border border-[#CFA04F]/20 rounded-sm bg-[#CFA04F]/5">
            <ShieldCheck size={16} className="text-[#CFA04F]" />
            <span className="text-[10px] tracking-[0.2em] text-gray-300 uppercase">Secure Testing</span>
          </div>
          
          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className="md:hidden text-white p-2">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Side Menu Overlay */}
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[2000] transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={toggleMobileMenu}>
        <div className={`absolute right-0 top-0 h-full w-[280px] bg-[rgb(48,62,73)] shadow-2xl transition-transform duration-300 transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`} onClick={(e) => e.stopPropagation()}>
          <div className="flex flex-col p-6 gap-6 mt-10">
            {NavbarComponents.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={toggleMobileMenu}
                className={({ isActive }) => `text-sm font-semibold tracking-widest uppercase ${isActive ? "text-[#CFA04F]" : "text-white"}`}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}