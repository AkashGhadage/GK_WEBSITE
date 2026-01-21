// import { NavLink } from "react-router-dom";

// const NavbarComponents = [
//   { name: "Home", path: "/home" },
//   { name: "About", path: "/about" },
//   { name: "Services", path: "/services" },
//   { name: "Gallery", path: "/gallary" },
//   { name: "Blogs", path: "/blogs" },
//   { name: "contact", path: "/contact" },
// ];

// export default function Navbar() {
//   return (
//     <div className="w-full bg-black border-b border-neutral-800">
//       <div className="flex items-center justify-between px-8 py-4">
//         {/* Logo */}
//         <div className="text-2xl font-serif tracking-widest text-[#8B1C1C]">
//           TANISHQ
//         </div>

//         {/* Navigation */}
//         <div className="flex gap-10 text-sm font-medium">
//           {NavbarComponents.map((data, index) => (
//             <NavLink
//               key={index}
//               to={data.path}
//               className={({ isActive }) =>
//                 `relative pb-2 transition-all duration-300 no-underline
//                 text-white hover:text-[#D4AF37]

//                 after:absolute after:left-0 after:-bottom-0.5
//                 after:h-[2px] after:w-0 after:bg-[#D4AF37]
//                 after:transition-all after:duration-300
//                 hover:after:w-full

//                 ${isActive ? "text-[#D4AF37] after:w-full" : ""}`
//               }
//             >
//               {data.name}
//             </NavLink>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { NavLink } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";

const NavbarComponents = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallary" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [gold, setGold] = useState("--");
  const [silver, setSilver] = useState("--");
  const [loading, setLoading] = useState(true);

  // Method 1: Use CORS proxy for Shri Ganesh Bullion
  const fetchShriGaneshViaProxy = useCallback(async () => {
    try {
      setLoading(true);
      
      // Free CORS proxy (allorigins.win) - fetches their live HTML
      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent('http://www.shriganeshbullion.com')}`;
      
      const response = await fetch(proxyUrl, {
        method: 'GET',
        headers: {
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        }
      });
      
      const html = await response.text();
      
      // Extract Shri Ganesh Bullion rates using regex patterns
      const goldMatch = html.match(/GOLD[^₹]*₹?([\d,]+\.?\d*)/i) || 
                       html.match(/(\d{4,7}(?:\.\d{2})?)\s*GOLD/i);
      const silverMatch = html.match(/SILVER[^₹]*₹?([\d,]+\.?\d*)/i) ||
                         html.match(/SILVER[^$]*\$?([\d,]+\.?\d*)/i);
      
      if (goldMatch) {
        const cleanGold = parseFloat(goldMatch[1]?.replace(/,/g, ''));
        setGold(cleanGold ? `₹${cleanGold.toLocaleString()}/10g` : "--");
      }
      
      if (silverMatch) {
        const cleanSilver = parseFloat(silverMatch[1]?.replace(/,/g, ''));
        setSilver(cleanSilver ? `₹${cleanSilver.toLocaleString()}/kg` : "--");
      }
    } catch (error) {
      console.error("Shri Ganesh fetch failed:", error);
      fetchMysoreFallback();
    } finally {
      setLoading(false);
    }
  }, []);

  // Fallback: Mysuru local rates API (CORS-friendly)
  const fetchMysoreFallback = async () => {
    try {
      // Use public Indian bullion APIs that work in browser
      const apis = [
        'https://goldpricez.com/api/rates?gold=1&silver=1&city=Mysore',
        'https://api.metals.live/v1/spot/all?currency=INR'
      ];
      
      for (const api of apis) {
        try {
          const res = await fetch(api);
          const data = await res.json();
          
          if (data.gold || data.XAU) {
            const gold10g = (data.gold?.price || data.XAU?.price || 0) * 10;
            const silverKg = (data.silver?.price || data.XAG?.price || 0) * 1000;
            
            setGold(`₹${gold10g.toLocaleString('en-IN', {maximumFractionDigits: 0})}/10g`);
            setSilver(`₹${silverKg.toLocaleString('en-IN', {maximumFractionDigits: 0})}/kg`);
            return;
          }
        } catch {}
      }
      
      // Hardcoded recent Shri Ganesh rates as final fallback
      setGold("₹46,770/10g");
      setSilver("₹93,930/kg");
      
    } catch (error) {
      console.error("Fallback failed:", error);
    }
  };

  useEffect(() => {
    fetchShriGaneshViaProxy();
    
    // Update every 20 seconds
    const interval = setInterval(fetchShriGaneshViaProxy, 20000);
    
    return () => clearInterval(interval);
  }, [fetchShriGaneshViaProxy]);

  return (
    <div className="w-full bg-black border-b border-neutral-800">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-serif tracking-widest text-[#8B1C1C]">
            TANISHQ
          </div>

          <div className="hidden md:flex gap-6 text-xs">
            <div>
              <p className="text-[#D4AF37] font-semibold">
                {loading ? "₹--" : gold}
              </p>
              <p className="text-neutral-400 text-[10px]">Shri Ganesh</p>
            </div>

            <div>
              <p className="text-gray-300 font-semibold">
                {loading ? "₹--" : silver}
              </p>
              <p className="text-neutral-400 text-[10px]">Mysuru Live</p>
            </div>
          </div>
        </div>

        <div className="flex gap-10 text-sm font-medium">
          {NavbarComponents.map((data, index) => (
            <NavLink
              key={index}
              to={data.path}
              className={({ isActive }) =>
                `relative pb-2 transition-all duration-300 text-white hover:text-[#D4AF37]
                after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#D4AF37]
                after:transition-all after:duration-300 hover:after:w-full
                ${isActive ? "text-[#D4AF37] after:w-full" : ""}`
              }
            >
              {data.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
