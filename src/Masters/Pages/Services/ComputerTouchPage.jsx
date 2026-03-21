import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FAQSection from "../../Shared/FAQSection";
import { globalFaqs } from "../../Shared/faqData";

import {
  CheckCircle,
  ShieldCheck,
  Zap,
  Award,
  Search,
  Clock,
  Play,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const ComputerTouchPage = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const whatsappNumber = "+917011675610";
  const whatsappMessage =
    "Hello, I want to know more about your gold and silver purity testing service.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // REMOVED color classes from here so the map function can control them
  const features = [
    {
      title: "Precision & Accuracy",
      desc: "We use the Fischer Goldscope 550, built on advanced German technology and trusted worldwide for consistent results.",
      icon: Search,
    },
    {
      title: "Practical Explanation",
      desc: "We don’t just give numbers. We explain what your purity means for buying, selling, or remaking jewellery.",
      icon: CheckCircle,
    },
    {
      title: "Fast Results",
      desc: "Most items are tested within 2–5 minutes, helping you complete transactions without unnecessary waiting.",
      icon: Clock,
    },
    {
      title: "Industry Experience",
      desc: "Years of experience handling complex and mixed jewellery items with practical, honest insights.",
      icon: Zap,
    },
    {
      title: "Confidential & Secure",
      desc: "Your jewellery remains under your supervision. Results are kept strictly confidential and shared only with you.",
      icon: ShieldCheck,
    },
    {
      title: "Recognized Standards",
      desc: "Procedures follow international standards. Reports are suitable for quality assurance and loan documentation.",
      icon: Award,
    },
  ];

  return (
    <div>
      <div className="min-h-screen  bg-gray-100 pt-16 py-5 ">
        <section className="bg-white rounded-2xl md:rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 py-12 px-4 md:px-12 max-w-6xl mx-auto space-y-16">
          {/* Hero Section */}
          <div className="grid gap-8 md:gap-12 md:grid-cols-[1.2fr_1fr] items-center">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#b79654] uppercase mb-4 block">
                Purity Analysis
              </span>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Computer Tunch –{" "}
                <span className="text-[#b79654]">You Can Trust</span>
              </h1>

              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Using non‑destructive{" "}
                <span className="font-semibold text-gray-900">
                  XRF technology
                </span>
                , we provide instant, lab-grade purity results for your gold and
                silver — no melting, no damage.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "No Melting, No Damage, No Risk",
                  "Free Testing",
                  "Instant Reports",
                  "Transparent process",
                  " Accurate & reliable results",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs font-medium border border-gray-200"
                  >
                    ✦ {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-[#b79654] text-white rounded-full font-bold hover:bg-[#967a42] transition-all transform hover:-translate-y-1 shadow-lg shadow-[#b79654]/20"
                >
                  Book a Purity Test
                </Link>
                <a
                  href={whatsappLink}
                  className="px-8 py-4 border-2 border-gray-200 text-gray-800 rounded-full font-bold hover:border-[#b79654] transition-all"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#b79654] to-[#D4AF37] rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

              <div className="relative rounded-[1.8rem] overflow-hidden bg-black aspect-video shadow-2xl">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src="/videos/gold-silver-purity-testing.mp4"
                  controls
                  poster="/videos/gold-silver-purity-testing-thumbnail.jpg"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform group-hover:scale-110">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <Play className="text-white fill-white w-6 h-6 ml-1" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Feature Section with Fixed Hover Icons */}
          <div className="space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-900">
                Why We Are Better at Testing
              </h2>
              <div className="flex items-center justify-center gap-4">
                <div className="h-[2px] w-12 bg-[#b79654]"></div>
                <p className="text-[#b79654] font-medium tracking-widest uppercase text-sm">
                  Our Excellence
                </p>
                <div className="h-[2px] w-12 bg-[#b79654]"></div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => {
                const IconComponent = f.icon; // Assigned to a variable for React rendering
                return (
                  <div
                    key={i}
                    className="group p-8 bg-white border border-gray-100 rounded-3xl hover:border-[#b79654]/30 hover:shadow-2xl hover:shadow-[#b79654]/10 transition-all duration-300"
                  >
                    <div className="mb-5 p-3 rounded-2xl bg-gray-50 w-fit group-hover:bg-[#b79654] transition-colors duration-300">
                      {/* The icon color is now controlled by group-hover on the parent div */}
                      <IconComponent className="w-6 h-6 text-[#b79654] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {f.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Targeted Audience Card */}
          <div className="bg-[rgb(23,28,32)] rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-serif font-bold mb-4">
                  Who is this service for?
                </h2>
                <p className="text-gray-400 mb-6">
                  Fast, non-destructive gold & silver purity testing for complete
                  trust and transparency.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "Jewellery buyers & sellers",
                    "Gold loan & pledge customers",
                    "People verifying gold before selling",
                    "Jewellers checking stock purity",
                    "Customers wanting instant lab-grade results",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <CheckCircle className="w-4 h-4 text-[#b79654]" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center md:text-right space-y-6">
                <p className="text-xl font-light italic text-gray-400">
                  "Instant purity results. Zero damage. 100% trust."
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-[#b79654] px-10 py-4 rounded-full font-bold hover:bg-[#d4af37] transition-colors"
                >
                  Test Your Gold Now
                </Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#b79654]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          </div>
        </section>


      </div>

      <FAQSection
        title="Purity Testing FAQs"
        faqs={globalFaqs}
        className="bg-gray-100"
      />
    </div>
  );
};

export default ComputerTouchPage;
