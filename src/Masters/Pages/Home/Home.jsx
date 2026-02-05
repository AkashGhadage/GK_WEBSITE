// src/Masters/Pages/Home/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaBullseye,
  FaClock,
  FaAward,
  FaShieldAlt,
  FaRupeeSign,
  FaWhatsapp,
} from "react-icons/fa";
import FAQSection from "../../Shared/FAQSection";
import { globalFaqs } from "../../Shared/faqData";
import GoogleReview from "../../Shared/GoogleReview";

const Home = () => {
  // WhatsApp contact details
  const whatsappNumber = "+919975796681";
  const whatsappMessage =
    "Hello, I'm interested in your gold testing services.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="min-h-screen font-sans text-gray-800 antialiased">
      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Contact on WhatsApp"
      >
        <svg
          className="w-7 h-7 text-white"
          fill="currentColor"
          viewBox="0 0 448 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      </a>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/gold-hero.jpg"
            alt="Gold Jewelry Assay"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-white uppercase tracking-tight">
            Precision Assays For
            <br />
            Unraveling The Truth
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-white font-medium">
            At Nagesh Touch Lab, we specialize in providing accurate and
            reliable assay and gold testing services that empower individuals,
            businesses, and industries to uncover the true composition and value
            of precious materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-block bg-[#FFCC00] text-black px-10 py-4 text-xl font-bold rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-xl"
            >
              Visit Lab...
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 text-xl font-bold rounded-full hover:bg-green-600 transition-all duration-300 shadow-xl"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-24 px-4 md:px-8" id="about">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="/about.jpg"
              alt="Gold Jewellery"
              className="rounded-3xl shadow-lg max-w-full h-auto"
            />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
              About
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-8">
              Nagesh Touch Lab is a govt-certified gold testing lab in Kalyan
              West, known for trusted and transparent gold purity testing
              services. With decades of expertise in tunch report generation,
              hallmarking, and metal assay, we help individuals and jewellery
              businesses verify the authenticity and purity of gold, silver, and
              other precious metals.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#about"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Know more
                <span>→</span>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                <FaWhatsapp />
                Chat Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Google review */}
      <section>
        <GoogleReview></GoogleReview>
      </section>

      {/* Service Section */}
      <section className="bg-red-100 py-15 px-2 md:px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 text-center mb-12">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Computer Touch */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center">
                <img
                  src="/computer-touch.jpg"
                  alt="Computer Touch"
                  className="w-24 h-24 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-blue-900 mb-3 text-center">
                  Computer Touch
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  Advanced digital gold purity testing with precise and reliable
                  results.
                </p>
                <button
                  type="button"
                  className="px-4 py-2 rounded-full bg-[rgb(248,249,252)]
                 text-xs md:text-sm font-semibold text-[rgb(207,160,79)]
                 hover:bg-[rgb(207,160,79)] hover:text-black
                 transition-colors duration-200 shadow-sm"
                >
                  Read more →
                </button>
              </div>
            </div>

            {/* Metal Testing */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center">
                <img
                  src="/metal-testing.jpg"
                  alt="Metal Testing"
                  className="w-24 h-24 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-blue-900 mb-3 text-center">
                  Metal Testing
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  Professional assay services for gold, silver and precious
                  metals.
                </p>
                <button
                  type="button"
                  className="px-4 py-2 rounded-full bg-[rgb(248,249,252)]
                 text-xs md:text-sm font-semibold text-[rgb(207,160,79)]
                 hover:bg-[rgb(207,160,79)] hover:text-black
                 transition-colors duration-200 shadow-sm"
                >
                  Read more →
                </button>
              </div>
            </div>

            {/* Jewellery Repairing */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center">
                <img
                  src="/jewellery-repair.jpg"
                  alt="Jewellery Repairing"
                  className="w-24 h-24 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-blue-900 mb-3 text-center">
                  Jewellery Repairing
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  Expert restoration and repair services for your precious
                  ornaments.
                </p>
                <button
                  type="button"
                  className="px-4 py-2 rounded-full bg-[rgb(248,249,252)]
                 text-xs md:text-sm font-semibold text-[rgb(207,160,79)]
                 hover:bg-[rgb(207,160,79)] hover:text-black
                 transition-colors duration-200 shadow-sm"
                >
                  Read more →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
            Key Benefit
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            <div className="w-full max-w-sm bg-gradient-to-b from-red-500 to-red-700 text-white rounded-2xl p-8 shadow-md">
              <div className="w-14 h-14 bg-white rounded-full mx-auto mb-5 flex items-center justify-center">
                <FaBullseye className="text-red-600 text-xl" />
              </div>
              <p className="font-semibold">Unparalleled Accuracy</p>
            </div>

            <div className="w-full max-w-sm bg-gradient-to-b from-red-500 to-red-700 text-white rounded-2xl p-8 shadow-md">
              <div className="w-14 h-14 bg-white rounded-full mx-auto mb-5 flex items-center justify-center">
                <FaClock className="text-red-600 text-xl" />
              </div>
              <p className="font-semibold">Swift Turnaround</p>
            </div>

            <div className="w-full max-w-sm bg-gradient-to-b from-red-500 to-red-700 text-white rounded-2xl p-8 shadow-md">
              <div className="w-14 h-14 bg-white rounded-full mx-auto mb-5 flex items-center justify-center">
                <FaAward className="text-red-600 text-xl" />
              </div>
              <p className="font-semibold">Industry Experience</p>
            </div>

            <div className="w-full max-w-sm bg-gradient-to-b from-red-500 to-red-700 text-white rounded-2xl p-8 shadow-md">
              <div className="w-14 h-14 bg-white rounded-full mx-auto mb-5 flex items-center justify-center">
                <FaShieldAlt className="text-red-600 text-xl" />
              </div>
              <p className="font-semibold">Confidentiality & Security</p>
            </div>

            <div className="w-full max-w-sm bg-gradient-to-b from-red-500 to-red-700 text-white rounded-2xl p-8 shadow-md">
              <div className="w-14 h-14 bg-white rounded-full mx-auto mb-5 flex items-center justify-center">
                <FaRupeeSign className="text-red-600 text-xl" />
              </div>
              <p className="font-semibold">Transparent Pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shared FAQ Section – just above footer */}
      <FAQSection
        title="Frequently asked questions about gold testing & laser soldering"
        faqs={globalFaqs}
      />
    </div>
  );
};

export default Home;
