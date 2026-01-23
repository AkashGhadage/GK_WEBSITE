// src/components/HomePage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBullseye,
  FaClock,
  FaAward,
  FaShieldAlt,
  FaRupeeSign,
  FaWhatsapp,
} from "react-icons/fa";

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);
  // WhatsApp contact details
  const whatsappNumber = "+919975796681";
  const whatsappMessage =
    "Hello, I'm interested in your gold testing services.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const faqs = [
    {
      id: 1,
      question: "What is gold assay testing?",
      answer:
        "Gold assay testing is the process of analyzing gold to determine its purity and content. It helps verify the exact karat and value of a gold item.",
    },
    {
      id: 2,
      question: "Why should I get my gold assayed?",
      answer:
        "Getting your gold assayed ensures you know the exact purity and value of your gold items. It provides protection against fraud, helps with accurate valuation for buying/selling, and gives you confidence in your investment.",
    },
    {
      id: 3,
      question: "How is gold purity measured during assay?",
      answer:
        "Gold purity is measured in karats (K) or percentage. Pure gold is 24K or 100%. We use advanced techniques like XRF (X-Ray Fluorescence) testing to determine the exact composition.",
    },
    {
      id: 4,
      question: "How long does a gold assay test take?",
      answer:
        "Most gold assay tests are completed within 5-15 minutes for basic purity checks. More comprehensive testing including detailed reports may take 20-30 minutes.",
    },
    {
      id: 5,
      question: "Do I need an appointment for testing?",
      answer:
        "Walk-ins are welcome, but we recommend booking an appointment for faster service—especially during peak hours.",
    },
    {
      id: 6,
      question: "Where is your assay lab located?",
      answer:
        "We are located at [Insert Address]. You can also call us at [Insert Phone Number] or WhatsApp for directions and service queries.",
    },
    {
      id: 7,
      question: "Is gold assay testing expensive?",
      answer:
        "Our services are priced affordably, starting from just ₹[Insert price]. We offer transparent pricing with no hidden charges.",
    },
    {
      id: 8,
      question: "Do you issue certificates after testing?",
      answer:
        "Yes, we provide detailed assay reports or certificates showing the karat, purity percentage, and weight of your gold.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 antialiased">
      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </a>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center py-24 px-4 overflow-hidden">
        {/* Background Image with Optimized Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/gold-hero.jpg"
            alt="Gold Jewelry Assay"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-900/30 to-blue-900/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-white uppercase tracking-tight">
            Precision Assays For
            <br />
            Unraveling The Truth
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-white font-medium">
            At Nagesh Touch Lab, we specialize in providing accurate and
            reliable Assay and gold testing services. Services that empower
            individuals, businesses, and industries to uncover the true
            composition and value of precious materials.
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
      <section className="bg-gray-50 py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="/about.jpg"
              alt="Gold Jewellery"
              className="rounded-3xl shadow-lg max-w-full h-auto"
            />
          </div>

          {/* Right Content */}
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

      {/* Key Benefits Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
            Key Benefit
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {/* Card 1 */}
            <div className="w-full max-w-sm bg-gradient-to-b from-red-500 to-red-700 text-white rounded-2xl p-8 shadow-md">
              <div className="w-14 h-14 bg-white rounded-full mx-auto mb-5 flex items-center justify-center">
                <FaBullseye className="text-red-600 text-xl" />
              </div>
              <p className="font-semibold">Unparalleled Accuracy</p>
            </div>

            {/* Card 2 */}
            <div className="w-full max-w-sm bg-gradient-to-b from-red-500 to-red-700 text-white rounded-2xl p-8 shadow-md">
              <div className="w-14 h-14 bg-white rounded-full mx-auto mb-5 flex items-center justify-center">
                <FaClock className="text-red-600 text-xl" />
              </div>
              <p className="font-semibold">Swift Turnaround</p>
            </div>

            {/* Card 3 */}
            <div className="w-full max-w-sm bg-gradient-to-b from-red-500 to-red-700 text-white rounded-2xl p-8 shadow-md">
              <div className="w-14 h-14 bg-white rounded-full mx-auto mb-5 flex items-center justify-center">
                <FaAward className="text-red-600 text-xl" />
              </div>
              <p className="font-semibold">Industry Experience</p>
            </div>

            {/* Card 4 */}
            <div className="w-full max-w-sm bg-gradient-to-b from-red-500 to-red-700 text-white rounded-2xl p-8 shadow-md">
              <div className="w-14 h-14 bg-white rounded-full mx-auto mb-5 flex items-center justify-center">
                <FaShieldAlt className="text-red-600 text-xl" />
              </div>
              <p className="font-semibold">Confidentiality & Security</p>
            </div>

            {/* Card 5 */}
            <div className="w-full max-w-sm bg-gradient-to-b from-red-500 to-red-700 text-white rounded-2xl p-8 shadow-md">
              <div className="w-14 h-14 bg-white rounded-full mx-auto mb-5 flex items-center justify-center">
                <FaRupeeSign className="text-red-600 text-xl" />
              </div>
              <p className="font-semibold">Transparent Pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-gradient-to-b from-red-600 to-red-800 py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-blue-900 mb-12 text-center relative">
            # FAQs
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-yellow-400 rounded-full"></div>
          </h2>

          {/* FAQ Grid - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column - Questions 1-4 */}
            <div className="space-y-4">
              {faqs.slice(0, 4).map((faq, index) => (
                <div
                  key={faq.id}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-200"
                >
                  <button
                    className="w-full text-left p-5"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 pr-4">
                        <span className="text-xl font-bold text-black mt-0.5">
                          {faq.id}.
                        </span>
                        <h3 className="text-lg font-semibold text-black text-left">
                          {faq.question}
                        </h3>
                      </div>
                      <span className="text-2xl text-red-600 font-bold flex-shrink-0">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </div>
                  </button>

                  {/* Answer - Shows when expanded */}
                  <div
                    className={`px-5 pb-5 transition-all duration-300 ${openIndex === index ? "block" : "hidden"}`}
                  >
                    <div className="pl-9 pt-2 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed mt-3">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Questions 5-8 */}
            <div className="space-y-4">
              {faqs.slice(4, 8).map((faq, index) => (
                <div
                  key={faq.id}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-200"
                >
                  <button
                    className="w-full text-left p-5"
                    onClick={() => toggleFAQ(index + 4)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 pr-4">
                        <span className="text-xl font-bold text-black mt-0.5">
                          {faq.id}.
                        </span>
                        <h3 className="text-lg font-semibold text-black text-left">
                          {faq.question}
                        </h3>
                      </div>
                      <span className="text-2xl text-red-600 font-bold flex-shrink-0">
                        {openIndex === index + 4 ? "−" : "+"}
                      </span>
                    </div>
                  </button>

                  {/* Answer - Shows when expanded */}
                  <div
                    className={`px-5 pb-5 transition-all duration-300 ${openIndex === index + 4 ? "block" : "hidden"}`}
                  >
                    <div className="pl-9 pt-2 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed mt-3">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
