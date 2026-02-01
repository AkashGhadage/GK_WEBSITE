// src/Masters/Pages/Footer/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[rgb(48,62,73)] text-gray-200 pt-10 pb-6">

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Top: 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 mb-8">
          {/* Brand + short line */}
          <div>
            <h3 className="text-lg font-semibold text-[#b79654] mb-3">
              GURUKRUPA GOLD
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Your Trusted Partner
              <br />
              for Gold &amp; Silver
            </p>
          </div>

          {/* SERVICES (2nd column) */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.18em] uppercase text-gray-300 mb-3">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services/metal-testing"
                  className="text-gray-300 hover:text-[#b79654] transition-colors"
                >
                  Gold &amp; Silver Testing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/computer-touch"
                  className="text-gray-300 hover:text-[#b79654] transition-colors"
                >
                  Computer Touch (Tunch)
                </Link>
              </li>
              <li>
                <Link
                  to="/services/jewellery-repair"
                  className="text-gray-300 hover:text-[#b79654] transition-colors"
                >
                  Jewellery Repair &amp; Soldering
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links (3rd column) */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.18em] uppercase text-gray-300 mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/home"
                  className="text-gray-300 hover:text-[#b79654] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-[#b79654] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-gray-300 hover:text-[#b79654] transition-colors"
                >
                  Blogs &amp; Guides
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-[#b79654] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact (4th column) */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.18em] uppercase text-gray-300 mb-3">
              Contact Us
            </h4>
            <p className="text-sm text-gray-300 mb-3 leading-relaxed">
              Office: Ground Floor, 32/3175
              <br />
              Below Northern Railway Ticket Office,
              <br />
              Block 33, Beadonpura, Karol Bagh,
              <br />
              New Delhi, Delhi 110005, India
            </p>

            <p className="text-sm text-gray-300">
              Phone:{" "}
              <a
                href="tel:+919075516373"
                className="text-gray-300 hover:text-[#b79654] transition-colors"
              >
                +91 90755 16373
              </a>
              {" / "}
              <a
                href="tel:+917011675610"
                className="text-gray-300 hover:text-[#b79654] transition-colors"
              >
                +91 70116 75610
              </a>
            </p>

            <p className="text-sm text-gray-300 mt-2 mb-4">
              Email:{" "}
              <a
                href="mailto:gurukrupagoldtunch@gmail.com"
                className="text-gray-300 hover:text-[#b79654] transition-colors"
              >
                gurukrupagoldtunch@gmail.com
              </a>
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919075516373"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-[#b79654] text-black hover:bg-white transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-[#b79654] text-[#b79654] hover:bg-white hover:text-black transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Gurukrupa Gold Testing &amp; Laser
            Soldering. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <button className="hover:text-[#b79654] transition-colors">
              Terms
            </button>
            <button className="hover:text-[#b79654] transition-colors">
              Privacy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
