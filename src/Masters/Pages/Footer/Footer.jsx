import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[rgb(23,28,32)] text-gray-200 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link to="/home" className="flex items-center gap-4 group no-underline w-fit">
              <img
                src="/GK_LOGO_FINAL.png"
                alt="Logo"
                className="h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="flex flex-col border-l border-white/20 pl-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-light tracking-[0.2em] text-white uppercase leading-none">Gurukrupa</span>
                  <span className="text-lg font-bold tracking-[0.2em] bg-gradient-to-r from-[#D4AF37] via-[#FBF5B7] to-[#AA771C] bg-clip-text text-transparent uppercase leading-none">Gold</span>
                </div>
                <span className="text-[10px] tracking-[0.3em] text-[#CFA04F] uppercase font-semibold mt-2">Testing Lab & Bullion</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed tracking-wide italic">
              "Your trusted partner in precision gold testing and premium bullion investments. Accuracy you can bank on."
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-white mb-6 border-b border-[#CFA04F]/30 pb-2 inline-block">
              Expertise
            </h4>
            <ul className="space-y-4 text-sm font-light">
              {[
                { name: "Gold & Silver Testing", path: "/services/gold-silver-testing" },
                { name: "Computer Touch (Tunch)", path: "/services/computer-touch" },
                { name: "Jewellery Repair", path: "/services/jewellery-repair" },
                { name: "Metal Analysis", path: "/services/metal-testing" }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-400 hover:text-[#CFA04F] transition-all flex items-center gap-2 group">
                    <span className="h-[1px] w-0 bg-[#CFA04F] group-hover:w-3 transition-all"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-white mb-6 border-b border-[#CFA04F]/30 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm font-light">
              {['Home', 'About', 'Gold & Silver', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(/ /g, '_')}`} className="text-gray-400 hover:text-[#CFA04F] transition-all">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-white mb-2 border-b border-[#CFA04F]/30 pb-2 inline-block">
              HQ Office
            </h4>
            <div className="space-y-4 text-sm font-light">
              <div className="flex gap-3 items-start">
                <FaMapMarkerAlt className="text-[#CFA04F] mt-1 shrink-0" />
                <p className="text-gray-400 leading-relaxed">
                  Ground Floor, 32/3175, Karol Bagh, <br /> New Delhi 110005
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <FaPhoneAlt className="text-[#CFA04F] shrink-0" />
                <a href="tel:+919075516373" className="text-gray-400 hover:text-white transition-colors tracking-widest">+91 90755 16373</a>
              </div>
               <div className="flex gap-3 items-center">
                <FaPhoneAlt className="text-[#CFA04F] shrink-0" />
                <a href="tel:+919975796681" className="text-gray-400 hover:text-white transition-colors tracking-widest">+91 99757 96681</a>
              </div>
              <div className="flex gap-3 items-center">
                <FaEnvelope className="text-[#CFA04F] shrink-0" />
                <a href="mailto:gurukrupagoldtunch@gmail.com" className="text-gray-400 hover:text-white transition-colors truncate">gurukrupagoldtunch@gmail.com</a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a href="https://wa.me/919075516373" target="_blank" className="p-3 bg-white/5 rounded-full text-[#CFA04F] hover:bg-[#CFA04F] hover:text-black transition-all">
                <FaWhatsapp size={18} />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-full text-[#CFA04F] hover:bg-[#CFA04F] hover:text-black transition-all">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] tracking-[0.2em] uppercase text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Gurukrupa Gold. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-[10px] tracking-[0.2em] uppercase text-gray-500 font-bold">
            <Link to="/terms" className="hover:text-[#CFA04F] transition-colors">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-[#CFA04F] transition-colors">Privacy Policy</Link>
            <Link to="/blogs" className="hover:text-[#CFA04F] transition-colors">Blog</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;