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

const PurityTestingPage = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const whatsappNumber = "+919975796681";
  const whatsappMessage =
    "Hello, I want to know more about your Gold & Silver purity testing service.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const features = [
    {
      title: "German XRF Technology",
      desc: "We use the Fischer Goldscope 550, the gold standard in precision testing, ensuring results are accurate to the 0.01%.",
      icon: Search,
    },
    {
      title: "Non-Destructive Process",
      desc: "Your jewelry is never rubbed, filed, or melted. The testing is entirely non-invasive and safe for all precious metals.",
      icon: ShieldCheck,
    },
    {
      title: "Instant Certification",
      desc: "Receive a detailed purity report in under 5 minutes, allowing you to proceed with transactions immediately.",
      icon: Clock,
    },
    {
      title: "Expert Guidance",
      desc: "Our team provides honest market insights based on your purity results to help you maximize your asset value.",
      icon: Zap,
    },
    {
      title: "Transparent Valuation",
      desc: "The entire testing process happens right in front of you, ensuring complete peace of mind and integrity.",
      icon: CheckCircle,
    },
    {
      title: "Global Standards",
      desc: "Our reports are recognized by banks and jewelers, making them ideal for gold loans and quality assurance.",
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcfaf7] py-16 px-4 md:px-8">
      {/* Main Container */}
      <section className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 py-12 px-4 md:px-12 max-w-6xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#b79654] uppercase mb-4 block">
              Professional Lab Services
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Gold & Silver <br />
              <span className="text-[#b79654]">Purity Testing</span>
            </h1>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              We provide Non‑destructive XRF, Fast, Reliable testing for your
              gold and silver jewellery, coins and bars, so you know the exact
              purity before you buy, sell or remake anything. so you know the
              exact purity before you buy, sell or remake anything.
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
                  className="px-4 py-1.5 rounded-full bg-stone-100 text-stone-700 text-xs font-medium border border-stone-200"
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
                Book Purity Test
              </Link>
              <a
                href={whatsappLink}
                className="px-8 py-4 border-2 border-gray-200 text-gray-800 rounded-full font-bold hover:border-[#b79654] transition-all"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Video / Visual Element */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#b79654] to-[#e4cf9c] rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

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

        {/* Feature Section */}
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-900">
              Why Choose Our Purity Lab?
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[2px] w-12 bg-[#b79654]"></div>
              <p className="text-[#b79654] font-medium tracking-widest uppercase text-sm">
                Quality Assurance
              </p>
              <div className="h-[2px] w-12 bg-[#b79654]"></div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => {
              const IconComponent = f.icon;
              return (
                <div
                  key={i}
                  className="group p-8 bg-white border border-gray-100 rounded-3xl hover:border-[#b79654]/30 hover:shadow-2xl hover:shadow-[#b79654]/10 transition-all duration-300"
                >
                  <div className="mb-5 p-3 rounded-2xl bg-[#fcfaf7] w-fit group-hover:bg-[#b79654] transition-colors duration-300">
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
        <div className="bg-stone-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Who is this service for?
              </h2>
              <p className="text-stone-400 mb-6">
                Fast and non-destructive XRF purity testing before you buy,
                sell, or remake.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Customers buying new jewellery",
                  "People selling gold & silver",
                  "Before remaking old jewellery",
                  "Gold investors",
                  "Jewellers verifying purity",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-stone-200"
                  >
                    <CheckCircle className="w-4 h-4 text-[#b79654]" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center md:text-right space-y-6">
              <p className="text-xl font-light italic text-stone-300">
                "Test before you trust."
              </p>
              <Link
                to="/contact"
                className="inline-block bg-[#b79654] px-10 py-4 rounded-full font-bold hover:bg-[#d4af37] transition-colors"
              >
                Verify Purity Now
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#b79654]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection title="Gold & Silver Purity Testing FAQs" faqs={globalFaqs} />
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

export default PurityTestingPage;
