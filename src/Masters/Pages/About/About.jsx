import React from "react";
import { Link } from "react-router-dom";
import {
  FaHistory,
  FaUsers,
  FaMicroscope,
  FaCertificate,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";

const About = () => {
  const whatsappNumber = "+919975796681";
  const whatsappMessage =
    "Hello, I'm interested in your gold testing services.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="/about.jpg"
            alt="About Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4">
          <span className="text-[rgb(207,160,79)] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
            Since 2006
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white uppercase">
            Our <span className="text-[rgb(207,160,79)]">Legacy</span>
          </h1>
        </div>
      </section>

      {/* --- MAIN STORY SECTION (Image Left, Text Right) --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* IMAGE BLOCK - Fixed Position */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/aboutone.png"
                alt="Lab Technology"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            {/* Decorative Gold Frame behind image */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[rgb(207,160,79)] z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[rgb(207,160,79)] z-0"></div>
          </div>

          {/* TEXT BLOCK */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-[rgb(207,160,79)] font-bold tracking-[0.2em] uppercase text-xs">
              Scientific Precision
            </h2>
            <h3 className="text-4xl font-serif font-bold text-[rgb(48,62,73)] leading-tight">
              Where Technology Meets <br /> Traditional Trust
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Located in the heart of Karol Bagh, we have spent nearly two
              decades perfecting the art of precious metal verification.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Our laboratory utilizes state-of-the-art XRF technology to provide
              instant, non-destructive reports for gold and silver. We
              understand that every milligram matters, which is why we offer a
              transparent process where clients can witness the testing in
              real-time.
            </p>
            <div className="flex items-center gap-6 pt-4">
              <div className="h-px bg-gray-200 flex-1"></div>
              <p className="font-serif italic text-[rgb(48,62,73)] text-xl">
                Gurukrupa Gold
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- VALUES GRID (Dark Section) --- */}
      <section className="bg-[rgb(48,62,73)] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-all text-center">
              <FaMicroscope className="text-4xl text-[rgb(207,160,79)] mx-auto mb-6" />
              <h4 className="text-white font-serif text-xl mb-3">
                Instant Analysis
              </h4>
              <p className="text-gray-400 text-sm">
                Get precise purity reports within minutes using computerized
                touch technology.
              </p>
            </div>
            <div className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-all text-center">
              <FaCertificate className="text-4xl text-[rgb(207,160,79)] mx-auto mb-6" />
              <h4 className="text-white font-serif text-xl mb-3">
                Govt. Standards
              </h4>
              <p className="text-gray-400 text-sm">
                Our testing procedures align with international industry
                standards for gold assaying.
              </p>
            </div>
            <div className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-all text-center">
              <FaUsers className="text-4xl text-[rgb(207,160,79)] mx-auto mb-6" />
              <h4 className="text-white font-serif text-xl mb-3">
                Transparent Policy
              </h4>
              <p className="text-gray-400 text-sm">
                We maintain 100% transparency. No hidden charges, just honest
                results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif text-[rgb(48,62,73)]">
            Ready to verify?
          </h2>
          <p className="text-gray-500">
            Visit us today for a reliable and quick purity check of your
            ornaments and bullion.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[rgb(207,160,79)] text-black px-12 py-4 rounded-full font-bold hover:bg-[rgb(180,140,60)] transition-all"
          >
            Get Directions <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* ✅ FLOATING WHATSAPP BUTTON ADDED */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all"
      >
        <FaWhatsapp className="w-7 h-7 text-white" />
      </a>
    </div>
  );
};

export default About;
