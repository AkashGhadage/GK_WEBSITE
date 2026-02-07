import React from "react";
import { Link } from "react-router-dom";
import { 
  FaWhatsapp, 
  FaArrowRight 
} from "react-icons/fa";
import { 
  Target, 
  Clock, 
  Award, 
  ShieldCheck, 
  BadgeIndianRupee, 
  Gem 
} from "lucide-react";
import FAQSection from "../../Shared/FAQSection";
import { globalFaqs } from "../../Shared/faqData";
import GoogleReview from "../../Shared/GoogleReview";

const Home = () => {
  const whatsappNumber = "+919975796681";
  const whatsappMessage = "Hello, I'm interested in your gold testing services.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const services = [
    {
      title: "Computer Tunch",
      desc: "Advanced XRF digital purity testing with instant lab-grade reports.",
      link: "/services/computer-tunch",
      image: "/computer-touch.jpg"
    },
    {
      title: "Gold & Silver Testing",
      desc: "Professional assay services for bulk metals and jewelry verification.",
      link: "/services/purity-testing",
      image: "/metal-testing.jpg"
    },
    {
      title: "Jewellery Repairing",
      desc: "Expert restoration and laser soldering for your precious ornaments.",
      link: "/services/repairing",
      image: "/jewellery-repair.jpg"
    }
  ];

  const benefits = [
    { title: "Unparalleled Accuracy", icon: Target },
    { title: "Swift Turnaround", icon: Clock },
    { title: "Industry Experience", icon: Award },
    { title: "Secure & Confidential", icon: ShieldCheck },
    { title: "Transparent Pricing", icon: BadgeIndianRupee }
  ];

  return (
    <div className="min-h-screen bg-[#fcfaf7] font-sans text-gray-900 antialiased">
      
      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <FaWhatsapp className="text-3xl" />
      </a>

      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        {/* Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/gold-hero.jpg"
            alt="Gold Purity Lab"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-2xl space-y-8">
            <span className="inline-block px-4 py-1 rounded-full bg-[#b79654]/20 border border-[#b79654]/30 text-[#e4cf9c] text-xs font-bold tracking-[0.3em] uppercase">
              Govt. Certified Lab
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1]">
              Precision Assays. <br />
              <span className="text-[#b79654] italic font-light">Unraveling Truth.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              At Nagesh Touch Lab, we empower individuals and businesses with 
              accurate, non-destructive gold testing services in Kalyan West.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link
                to="/contact"
                className="px-10 py-4 bg-[#b79654] text-white text-lg font-bold rounded-full hover:bg-[#967a42] transition-all shadow-xl shadow-[#b79654]/30 text-center"
              >
                Visit Our Lab
              </Link>
              <a
                href={whatsappLink}
                className="px-10 py-4 border-2 border-white/30 backdrop-blur-md text-white text-lg font-bold rounded-full hover:bg-white hover:text-black transition-all text-center flex items-center justify-center gap-2"
              >
                <FaWhatsapp /> Chat Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-[#b79654]/10 rounded-[2.5rem] rotate-3"></div>
            <img
              src="/about.jpg"
              alt="Our Lab"
              className="relative rounded-[2rem] shadow-2xl z-10 w-full object-cover aspect-[4/5]"
            />
            <div className="absolute bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-gray-100">
              <p className="text-4xl font-serif font-bold text-[#b79654]">20+</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Years of Trust</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-[10px] font-bold tracking-[0.4em] text-[#b79654] uppercase">Heritage & Quality</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
                Decades of Expertise in <br /> Precious Metals
              </h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Nagesh Touch Lab is a hallmark of transparency. Located in the heart of Kalyan West, 
              we bridge the gap between doubt and certainty using state-of-the-art German XRF technology.
            </p>
            <div className="grid grid-cols-2 gap-6 py-4">
              <div className="space-y-2">
                <h4 className="font-bold text-stone-900">Govt. Certified</h4>
                <p className="text-sm text-gray-500">Full compliance with national assay standards.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-stone-900">Instant Tunch</h4>
                <p className="text-sm text-gray-500">Get detailed reports in under 5 minutes.</p>
              </div>
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 text-[#b79654] font-bold group">
              Discover Our Story <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-stone-900 py-24 px-6 md:px-12 rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-[#b79654] font-bold tracking-[0.3em] uppercase text-xs">Our Specialization</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">Excellence in Every Karat</h3>
            </div>
            <p className="text-gray-400 max-w-sm">From digital purity analysis to expert restoration, we handle your assets with ultimate care.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="group bg-stone-800/50 border border-white/5 rounded-[2rem] overflow-hidden hover:bg-stone-800 transition-all duration-500">
                <div className="h-64 overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 space-y-4">
                  <h4 className="text-2xl font-serif font-bold text-white">{s.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                  <Link to={s.link} className="inline-block pt-4 text-[#b79654] font-bold hover:text-white transition-colors">
                    Explore Service →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY BENEFITS - FIXED HOVER ICONS */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-serif font-bold">Why Nagesh Touch Lab?</h2>
          <div className="h-1 w-20 bg-[#b79654] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="group p-8 bg-white border border-gray-100 rounded-[2rem] text-center hover:bg-[#b79654] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#b79654]/20">
                <div className="mb-6 mx-auto w-14 h-14 bg-[#fcfaf7] rounded-full flex items-center justify-center text-[#b79654] group-hover:bg-white/20 group-hover:text-white transition-all">
                  <Icon size={24} />
                </div>
                <p className="font-bold text-sm text-stone-800 group-hover:text-white transition-colors">
                  {b.title}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="pb-24">
        <GoogleReview />
      </section>

      {/* FAQ */}
      <FAQSection 
        title="Frequently Asked Questions" 
        faqs={globalFaqs} 
      />
    </div>
  );
};

export default Home;