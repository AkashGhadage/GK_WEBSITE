import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FAQSection from "../../Shared/FAQSection";
import { globalFaqs } from "../../Shared/faqData";

import {
  ShieldCheck,
  CheckCircle,
  Award,
  Search,
  Zap,
  Clock,
  Play,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const MetalTesting = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const whatsappNumber = "+919326883179";
  const whatsappMessage =
    "Hello, I would like to know more about your metal testing service.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  const features = [
    {
      title: "Accurate Metal Identification",
      desc: "We accurately identify gold, silver, platinum, and other metals using reliable, non-destructive testing methods.",
      icon: Search,
    },
    {
      title: "Non-Destructive Testing",
      desc: "No cutting, melting, or damage. Your jewellery and metal items remain completely safe during testing.",
      icon: ShieldCheck,
    },
    {
      title: "Experienced Professionals",
      desc: "Handled by trained experts with strong knowledge of jewellery metals, alloys, and purity standards.",
      icon: Award,
    },
    {
      title: "Fast & Clear Results",
      desc: "Most metal testing is completed within minutes with results explained in simple, easy language.",
      icon: Clock,
    },
    {
      title: "Advanced German XRF Technology",
      desc: "We use advanced German XRF technology for fast, accurate, and non-destructive gold and silver purity testing.",
      icon: Zap,
    },
    {
      title: "Suitable for All Needs",
      desc: "Ideal for buyers, sellers, jewellers, investors, inherited jewellery checks, and remaking purposes.",
      icon: CheckCircle,
    },
  ];

  return (
    <div>
      <div className="min-h-screen bg-gray-100 pt-16 py-5 ">
        <section className="bg-white rounded-2xl md:rounded-[2rem] shadow-xl border border-gray-100 py-12 px-4 md:px-12 max-w-6xl mx-auto space-y-16">
          {/* Hero Section */}
          <div className="grid gap-8 md:gap-12 md:grid-cols-[1.2fr_1fr] items-center">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#b79654] uppercase mb-4 block">
                Purity & Identification
              </span>

              <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Metal Testing –
                <span className="text-[#b79654]"> Accurate & Reliable</span>
              </h1>

              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                We provide professional metal testing services to identify metal
                type and purity with accuracy and honesty. Whether it is
                jewellery, coins, bars, or mixed metal items, your valuables are
                tested safely and transparently.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "Gold, Silver & Platinum Testing",
                  "Non-Destructive Process",
                  "Instant & Clear Results",
                  "Trusted by Jewellers & Customers",
                  "Safe & Transparent",
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
                  className="px-8 py-4 bg-[#b79654] text-white rounded-full font-bold hover:bg-[#967a42] transition-all shadow-lg shadow-[#b79654]/20"
                >
                  Test Your Metal
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

          {/* Features */}
          <div className="space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-900">
                Why Choose Our Metal Testing Service
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Trusted metal verification backed by experience, proper tools, and
                complete transparency.
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
                    <div className="mb-5 p-3 rounded-2xl bg-gray-50 w-fit">
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
          <div className="bg-[rgb(23,28,32)] rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-serif font-bold mb-4">
                  Who is this service for?
                </h2>
                <p className="text-gray-400 mb-6">
                  Professional metal identification and purity testing for all
                  valuable items.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "Testing gold, silver & mixed metals",
                    "Coins & metal bar verification",
                    "Scrap metal evaluation",
                    "Business & trader verification",
                    "Inheritance metal identification",
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
                  "Know exactly what metal you own."
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-[#b79654] px-10 py-4 rounded-full font-bold hover:bg-[#d4af37] transition-colors"
                >
                  Check Metal Now
                </Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#b79654]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          </div>
        </section>


      </div>
      {/* FAQ */}
      <FAQSection title="Metal Testing FAQs" faqs={globalFaqs} className="bg-gray-100"/>
    </div>
  );
};

export default MetalTesting;
