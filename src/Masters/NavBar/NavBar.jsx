import {
  Search,
  Mic,
  Heart,
  User,
  ShoppingBag,
  Store,
  Diamond,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const NavbarComponents = [
  { name: "All Jewellery", path: "/alljewellery" },
  { name: "Gold", path: "/gold" },
  { name: "Diamond", path: "/diamond" },
  { name: "Earrings", path: "/earrings" },
  { name: "Rings", path: "/rings" },
  { name: "Daily Wear", path: "/dailywear" },
  { name: "Collections", path: "/collections" },
  { name: "Wedding", path: "/wedding" },
  { name: "Gifting", path: "/gifting" },
  { name: "More", path: "/more" },
];

export default function Navbar() {
  return (
    <div className="w-full border-b">
      {/* Top Row */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-serif tracking-widest text-[#8B1C1C]">
          TANISHQ
        </div>

        {/* Search Bar */}
        <div className="flex items-center w-[500px] border rounded-full px-4 py-2 gap-2">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search for gold necklace"
            className="w-full outline-none text-sm"
          />
          <Mic size={18} className="text-[#8B1C1C]" />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6 text-[#8B1C1C]">
          <Diamond size={20} />
          <Store size={20} />
          <Heart size={20} />
          <User size={20} />
          <div className="relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-[#8B1C1C] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center gap-8 py-3 text-sm font-medium">
        {NavbarComponents.map((data, index) => (
          <NavLink
            key={index}
            to={data.path}
            className={({ isActive }) =>
              `transition hover:text-[#8B1C1C] ${
                isActive ? "text-[#8B1C1C] border-b-2 border-[#8B1C1C]" : ""
              }`
            }
          >
            {data.name}
          </NavLink>
        ))}
      </div> */}
      {/* <div className="flex justify-center gap-10 py-3 text-sm font-medium">
        {NavbarComponents.map((data, index) => (
          <NavLink
            key={index}
            to={data.path}
            className={({ isActive }) =>
              `relative pb-2 transition-all duration-300 
         hover:text-[#8B1C1C]
         after:absolute after:left-0 after:-bottom-0.5 
         after:h-[2px] after:w-0 after:bg-[#8B1C1C]
         after:transition-all after:duration-300
         hover:after:w-full
         ${isActive ? "text-[#8B1C1C] after:w-full" : "text-gray-700"}`
            }
          >
            {data.name}
          </NavLink>
        ))}
      </div> */}

      {/* <div className="flex justify-center gap-8 py-3 text-sm font-medium">
        {NavbarComponents.map((data, index) => (
          <NavLink
            key={index}
            to={data.path}
            className={({ isActive }) =>
              `relative px-1 transition-all duration-300
         ${isActive ? "text-[#8B1C1C]" : "text-gray-700 hover:text-[#8B1C1C]"}
         before:absolute before:-bottom-1 before:left-0 
         before:h-[2px] before:w-0 
         before:bg-gradient-to-r before:from-[#8B1C1C] before:to-[#D4AF37]
         before:transition-all before:duration-300
         hover:before:w-full
         ${isActive ? "before:w-full" : ""}
        `
            }
          >
            {data.name}
          </NavLink>
        ))}
      </div> */}

      {/* <div className="flex justify-center gap-6 py-3 text-sm font-medium">
        {NavbarComponents.map((data, index) => (
          <NavLink
            key={index}
            to={data.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-full transition-all duration-300
         ${
           isActive
             ? "bg-[#8B1C1C] text-white shadow-md"
             : "text-gray-700 hover:bg-gray-100 hover:text-[#8B1C1C]"
         }`
            }
          >
            {data.name}
          </NavLink>
        ))}
      </div> */}

      <div className="flex justify-center gap-10 py-3 text-sm font-medium bg-black">
        {NavbarComponents.map((data, index) => (
          <NavLink
            key={index}
            to={data.path}
            className={({ isActive }) =>
              `relative pb-2 transition-all duration-300 no-underline
         !text-white hover:!text-[#D4AF37] visited:!text-white

         after:absolute after:left-0 after:-bottom-0.5 
         after:h-[2px] after:w-0 after:bg-[#D4AF37]
         after:transition-all after:duration-300
         hover:after:w-full

         ${isActive ? "!text-[#D4AF37] after:w-full" : ""}`
            }
          >
            {data.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
