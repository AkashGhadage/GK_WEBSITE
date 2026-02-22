import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[rgb(23,28,32)] text-gray-200 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Section - Improved Column Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-x-20 mb-16 items-start">
          
          {/* Brand Column - Added extra right padding */}
          <div className="space-y-6 lg:h-[180px] flex flex-col justify-between lg:pr-12">
            
            <Link to="/home" className="flex items-start gap-4 group no-underline hover:no-underline">
              <img
                src="/GK_LOGO_FINAL.png"
                alt="Gurukrupa Gold Logo"
                className="h-12 lg:h-14 w-auto flex-shrink-0 object-contain transition-transform duration-500 group-hover:scale-105"
              />
              
              <div className="flex flex-col min-w-0 space-y-1.5">
                
                <div className="flex items-baseline gap-2">
                  <span className="text-base lg:text-lg font-light tracking-[0.2em] text-white uppercase leading-tight">
                    Gurukrupa
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#CFA04F] shadow-[0_0_8px_#CFA04F] mt-0.5 flex-shrink-0"></span>
                  <span className="text-base lg:text-lg font-bold tracking-[0.25em] bg-gradient-to-r from-[#D4AF37] via-[#FBF5B7] to-[#AA771C] bg-clip-text text-transparent uppercase leading-tight">
                    Gold
                  </span>
                </div>

                <div className="text-xs lg:text-sm space-y-0.5">
                  <span className="block tracking-[0.3em] text-gray-400 uppercase font-light leading-tight">
                    Your Trusted Partner
                  </span>
                  <span className="tracking-[0.2em] text-[#CFA04F] uppercase font-semibold leading-tight">
                    For Gold & Silver
                  </span>
                </div>
              </div>
            </Link>

            <p className="text-gray-400 text-xs lg:text-sm leading-relaxed tracking-wide italic mt-auto">
              Your trusted partner in precision gold testing and premium bullion investments.
            </p>
          </div>

          {/* Services Column */}
          <div className="space-y-6 pt-2 lg:pt-0">
            <h4 className="text-xs lg:text-sm font-bold tracking-[0.3em] uppercase text-white border-b border-[#CFA04F]/30 pb-2 inline-block">
              Expertise
            </h4>
            <ul className="space-y-3 text-sm font-light">
              {[
                { name: "Gold & Silver Testing", path: "/services/gold-silver-testing" },
                { name: "Computer Touch (Tunch)", path: "/services/computer-touch" },
                { name: "Jewellery Repair", path: "/services/jewellery-repair" },
                { name: "Metal Analysis", path: "/services/metal-testing" }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-[#CFA04F] transition-all flex items-center gap-2 group inline-block"
                  >
                    <span className="h-[1px] w-0 bg-[#CFA04F] group-hover:w-3 transition-all"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6 pt-2 lg:pt-0">
            <h4 className="text-xs lg:text-sm font-bold tracking-[0.3em] uppercase text-white border-b border-[#CFA04F]/30 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm font-light">
              {["Home", "About", "Gold & Silver", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(/ /g, "_")}`}
                    className="text-gray-400 hover:text-[#CFA04F] transition-all block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4 pt-2 lg:pt-0 lg:h-[180px] flex flex-col justify-between">
            <div>
              <h4 className="text-xs lg:text-sm font-bold tracking-[0.3em] uppercase text-white border-b border-[#CFA04F]/30 pb-2 inline-block mb-4">
                HQ Office
              </h4>

              <div className="space-y-2.5 text-xs lg:text-sm font-light">
                <div className="flex gap-2.5 items-start">
                  <FaMapMarkerAlt className="text-[#CFA04F] mt-0.5 shrink-0 text-sm" />
                  <p className="text-gray-400 leading-relaxed">
                    Ground Floor, 32/3175<br />
                    Karol Bagh, New Delhi 110005
                  </p>
                </div>

                <div className="flex gap-2.5 items-center">
                  <FaPhoneAlt className="text-[#CFA04F] shrink-0 text-sm" />
                  <a href="tel:+919075516373" className="text-gray-400 hover:text-white transition-colors tracking-widest">
                    +91 90755 16373
                  </a>
                </div>

                <div className="flex gap-2.5 items-center">
                  <FaPhoneAlt className="text-[#CFA04F] shrink-0 text-sm" />
                  <a href="tel:+919975796681" className="text-gray-400 hover:text-white transition-colors tracking-widest">
                    +91 99757 96681
                  </a>
                </div>

                <div className="flex gap-2.5 items-center">
                  <FaEnvelope className="text-[#CFA04F] shrink-0 text-sm" />
                  <a
                    href="mailto:gurukrupagoldtunch@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    gurukrupagoldtunch@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-white/10 mt-auto">
              <a
                href="https://wa.me/919075516373"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 rounded-full text-[#CFA04F] hover:bg-[#CFA04F] hover:text-black transition-all"
              >
                <FaWhatsapp size={16} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 rounded-full text-[#CFA04F] hover:bg-[#CFA04F] hover:text-black transition-all"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] tracking-[0.2em] uppercase text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Gurukrupa Gold. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-8 text-[10px] tracking-[0.2em] uppercase text-gray-500 font-bold">
            <Link to="/terms" className="hover:text-[#CFA04F] transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-[#CFA04F] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/blogs" className="hover:text-[#CFA04F] transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;