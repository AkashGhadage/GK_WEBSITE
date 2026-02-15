import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FAQSection from "../../Shared/FAQSection";
import { globalFaqs } from "../../Shared/faqData";

import {
  CheckCircle,
  ShieldCheck,
  Award,
  Hammer,
  Gem,
  Clock,
  Play,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const JewelleryRepair = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const whatsappNumber = "+919326883179";
  const whatsappMessage =
    "Hello, I would like to know more about your jewellery repairing service.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  const features = [
    {
      title: "Skilled Craftsmanship",
      desc: "Experienced goldsmiths handle every repair with precision, care, and traditional jewellery-making expertise.",
      icon: Hammer,
    },
    {
      title: "Safe & Secure Handling",
      desc: "Your jewellery is handled responsibly with complete safety, transparency, and respect for its value.",
      icon: ShieldCheck,
    },
    {
      title: "Traditional & Modern Techniques",
      desc: "We combine time-tested craftsmanship with modern tools for strong, long-lasting repairs.",
      icon: Award,
    },
    {
      title: "Attention to Fine Details",
      desc: "From stone safety to weight balance, every detail is carefully checked and restored.",
      icon: Gem,
    },
    {
      title: "All Precious Jewellery",
      desc: "We repair gold, silver, diamond, antique, and precious jewellery with the right methods.",
      icon: CheckCircle,
    },
    {
      title: "Reliable Timelines",
      desc: "Clear timelines and honest advice so you know exactly what to expect from start to finish.",
      icon: Clock,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      {/* WhatsApp Button */}
      {/* <div className="fixed bottom-4 right-4 z-50">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-xl transition-transform hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <svg fill="currentColor" viewBox="0 0 448 512" className="w-6 h-6">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.5 32 1.9 131.6 1.9 254c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157z" />
          </svg>
        </a>
      </div> */}

      <section className="bg-white rounded-[2rem] shadow-xl border border-gray-100 py-12 px-4 md:px-12 max-w-6xl mx-auto space-y-16">
        {/* Breadcrumb */}

        {/* Hero Section */}
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#b79654] uppercase mb-4 block">
              Jewellery Care
            </span>

            <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Jewellery Repairing –
              <span className="text-[#b79654]"> Crafted with Care</span>
            </h1>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              We provide expert jewellery repairing services to restore the
              beauty, strength, and value of your precious ornaments. Every
              piece is handled with skill, honesty, and complete care.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "Experienced Goldsmiths",
                "Safe Handling",
                "Traditional & Modern Techniques",
                "Gold, Silver & Diamond Jewellery",
                "Trusted Repairs",
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
                className="px-8 py-4 bg-[#b79654] text-white rounded-full font-bold hover:bg-[#967a42] transition-all shadow-lg shadow-[#b79654]/20"
              >
                Book a Repair
              </Link>
              <a
                href={whatsappLink}
                className="px-8 py-4 border-2 border-gray-200 text-gray-800 rounded-full font-bold hover:border-[#b79654]"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

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

        {/* Features */}
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-900">
              Why Trust Us for Jewellery Repairing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every repair is done with patience, responsibility, and respect
              for the emotional and financial value of your jewellery.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="p-8 bg-white border border-gray-100 rounded-3xl hover:shadow-xl transition-all"
                >
                  <div className="mb-5 p-3 rounded-2xl bg-[#fcfaf7] w-fit">
                    <Icon className="w-6 h-6 text-[#b79654]" />
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
        <div className="bg-stone-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Who is this service for?
              </h2>
              <p className="text-stone-400 mb-6">
                Professional jewellery repairing with expert craftsmanship and
                complete care.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Broken chains & necklaces",
                  "Ring resizing & stone fixing",
                  "Damaged bangles & bracelets",
                  "Old jewellery restoration",
                  "Polishing & finishing services",
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
                "Restore the beauty of your precious memories."
              </p>
              <Link
                to="/contact"
                className="inline-block bg-[#b79654] px-10 py-4 rounded-full font-bold hover:bg-[#d4af37] transition-colors"
              >
                Repair My Jewellery
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#b79654]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title="Jewellery Repairing FAQs" faqs={globalFaqs} />
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

export default JewelleryRepair;
