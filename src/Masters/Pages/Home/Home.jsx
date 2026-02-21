import React from "react";
import { Link } from "react-router-dom";
import {
  FaBullseye,
  FaClock,
  FaAward,
  FaShieldAlt,
  FaRupeeSign,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Phone, FileCheck, Gem, ArrowRight } from "lucide-react";
import FAQSection from "../../Shared/FAQSection";
import { globalFaqs } from "../../Shared/faqData";
import GoogleReview from "../../Shared/GoogleReview";

const services = [
  {
    title: "Computer Touch (Tunch)",
    image: "/computer-touch.jpg",
    desc: "Advanced digital gold purity testing with precise XRF technology. Get instant computerised Tunch reports you can trust.",
    link: "/services/computer-touch",
  },
  {
    title: "Metal Testing",
    image: "/metal-testing.jpg",
    desc: "Professional assay services for gold, silver, and precious metals using scientific XRF analysis. Accurate to 0.01%.",
    link: "/services/metal-testing",
  },
  {
    title: "Jewellery Repair",
    image: "/jewellery-repair.jpg",
    desc: "Expert restoration, laser soldering, ring resizing, and precious stone fixing for your cherished ornaments.",
    link: "/services/jewellery-repair",
  },
  {
    title: "Gold & Silver Purity Testing",
    image: "/goldpurity_1.png",
    desc: "Non-destructive purity testing for gold & silver jewellery, coins, and bars. Certified reports for loans & transactions.",
    link: "/services/Gold-Silver-Testing",
  },
];

const benefits = [
  {
    icon: <FaBullseye className="text-2xl" />,
    title: "99.9% Precision",
    desc: "German XRF technology for ultra-accurate purity results every time.",
  },
  {
    icon: <FaClock className="text-2xl" />,
    title: "5 Minute Reports",
    desc: "Walk in and get certified purity reports in under 5 minutes.",
  },
  {
    icon: <FaAward className="text-2xl" />,
    title: "20+ Years Expertise",
    desc: "Decades of experience testing and handling precious metals.",
  },
  {
    icon: <FaShieldAlt className="text-2xl" />,
    title: "100% Non-Destructive",
    desc: "No melting, cutting, or scratching. Your jewellery stays safe.",
  },
  {
    icon: <FaRupeeSign className="text-2xl" />,
    title: "Transparent Pricing",
    desc: "Clear per-piece charges. No hidden fees. Know the cost upfront.",
  },
];

const processSteps = [
  {
    step: "01",
    icon: <Gem className="w-6 h-6" />,
    title: "Bring Your Jewellery",
    desc: "Walk in with your gold, silver, or precious items. No appointment needed.",
  },
  {
    step: "02",
    icon: <FileCheck className="w-6 h-6" />,
    title: "Instant XRF Testing",
    desc: "We test purity in front of you using German XRF technology — zero damage.",
  },
  {
    step: "03",
    icon: <Phone className="w-6 h-6" />,
    title: "Get Certified Report",
    desc: "Receive a detailed purity certificate with karat, percentage & weight details.",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen font-sans text-gray-900 antialiased bg-white">
      {/* ═══════════════════════════════════ HERO ═══════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[rgb(23,28,32)] z-10" />
          <img
            src="/gold-hero.jpg"
            alt="Gurukrupa Gold Testing Lab"
            className="w-full h-full object-cover animate-slow-zoom"
          />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8">
            <FaCheckCircle className="text-[#25D366] text-sm" />
            <span className="text-white/90 text-xs font-medium tracking-wide">
              Trusted by 50,000+ Customers Across India
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-[1.1] animate-fade-in-up">
            Precision In{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#FBF5B7] to-[#AA771C] bg-clip-text text-transparent">
              Every Karat
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Delhi's most trusted gold testing lab. Get certified XRF purity
            reports in minutes — no melting, no damage, no doubt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-[#D4AF37] to-[#AA771C] text-black px-8 py-4 font-bold rounded-full hover:shadow-xl hover:shadow-[#CFA04F]/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Visit Our Lab
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://wa.me/919975796681?text=Hello%2C%20I%27m%20interested%20in%20your%20gold%20testing%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 font-bold rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.593-.798-6.36-2.142l-.182-.142-3.148 1.055 1.055-3.148-.142-.182A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20"></div>
      </section>

      {/* ═══════════════════════════════ STATS OVERLAY ═══════════════════════════════ */}
      <section className="relative z-30 -mt-16 max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
          {[
            { label: "Years Experience", val: "20+" },
            { label: "Testing Accuracy", val: "99.9%" },
            { label: "Purity Checks Done", val: "50,000+" },
            { label: "Happy Clients Daily", val: "100+" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 md:p-8 text-center border-r last:border-0 border-gray-100 hover:bg-[#CFA04F]/5 transition-colors"
            >
              <p className="text-[#CFA04F] text-2xl md:text-3xl font-bold font-serif">
                {stat.val}
              </p>
              <p className="text-gray-500 text-[10px] md:text-[11px] uppercase tracking-[0.15em] mt-2 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════ ABOUT SECTION ═══════════════════════════════ */}
      <section className="py-20 md:py-24 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/about.jpg"
              alt="Gurukrupa Gold Testing Lab"
              className="rounded-3xl shadow-lg h-[420px] w-full object-cover"
            />
            <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-[#D4AF37] to-[#AA771C] p-5 rounded-2xl hidden md:flex flex-col items-center shadow-xl">
              <p className="text-black font-serif text-3xl font-bold">20+</p>
              <p className="text-black/70 text-[10px] uppercase tracking-widest font-bold">
                Years
              </p>
            </div>
          </div>
          <div className="space-y-5">
            <span className="text-[#b79654] font-bold tracking-[0.25em] uppercase text-[11px]">
              About Gurukrupa Gold
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">
              Your Trusted Partner for Gold & Silver Verification
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              Located in Karol Bagh, New Delhi, Gurukrupa Gold is a certified
              gold testing laboratory with over two decades of expertise. We
              combine traditional knowledge with advanced German XRF technology
              to deliver purity reports you can bank on — literally.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              Whether you're buying new jewellery, selling old gold, taking a
              gold loan, or verifying inherited pieces — we ensure every
              milligram is accounted for with complete transparency.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 border-b-2 border-[#CFA04F] pb-1 group hover:text-[#CFA04F] transition-colors"
            >
              Learn Our Story
              <FaArrowRight className="group-hover:translate-x-2 transition-transform text-[#CFA04F]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ HOW IT WORKS ═══════════════════════════ */}
      <section className="py-20 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#b79654] font-bold tracking-[0.25em] uppercase text-[11px]">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-3">
              How Gold Testing Works
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
              No appointments needed. Walk in, get tested, walk out with clarity.
              The entire process takes under 10 minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((item, i) => (
              <div key={i} className="relative group">
                <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#CFA04F]/30 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#CFA04F]/10 flex items-center justify-center text-[#CFA04F] group-hover:bg-[#CFA04F] group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="text-5xl font-serif font-bold text-gray-100 group-hover:text-[#CFA04F]/20 transition-colors">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                {/* Connector arrow (hidden on last item and mobile) */}
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-200 z-10">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ SERVICES SECTION ═══════════════════════════════ */}
      <section className="bg-[rgb(23,28,32)] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#CFA04F] font-bold tracking-[0.25em] uppercase text-[11px]">
              Our Specialization
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-white mt-3">
              Excellence in Every Service
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
              From purity testing to jewellery restoration — every service is
              backed by technology, expertise, and a commitment to honesty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <Link
                key={i}
                to={s.link}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-[#CFA04F]/30 transition-all duration-300 block"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-serif text-white mb-2 group-hover:text-[#CFA04F] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4">
                    {s.desc}
                  </p>
                  <span className="text-[#CFA04F] text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors inline-flex items-center gap-1">
                    Learn More
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ GOOGLE REVIEWS ═══════════════════════════════ */}
      <div className="py-16 bg-gray-50 border-y border-gray-100">
        <GoogleReview />
      </div>

      {/* ═══════════════════════════════ WHY CHOOSE US ═══════════════════════════════ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#b79654] font-bold tracking-[0.25em] uppercase text-[11px]">
              Our Promise
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-3">
              Why Thousands Choose Gurukrupa
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center hover:shadow-lg hover:border-[#CFA04F]/20 transition-all duration-300"
              >
                <div className="text-[#CFA04F] mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-gray-900 text-[12px] uppercase tracking-wide mb-2">
                  {benefit.title}
                </h4>
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-16 p-8 md:p-10 bg-gradient-to-r from-[rgb(23,28,32)] to-[rgb(48,62,73)] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-serif text-white font-bold">
                Ready to verify your gold?
              </h3>
              <p className="text-gray-400 text-sm mt-2 max-w-md">
                Visit our Karol Bagh lab and get your certified purity report in
                under 5 minutes. Walk-ins welcome — no appointment needed.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#D4AF37] to-[#AA771C] text-black px-8 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-[#CFA04F]/30 transition-all whitespace-nowrap text-sm flex items-center gap-2"
              >
                Book Purity Test
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+919975796681"
                className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all whitespace-nowrap text-sm text-center"
              >
                Call: +91 99757 96681
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ FAQ ═══════════════════════════════ */}
      <FAQSection title="Common Questions" faqs={globalFaqs} />
    </div>
  );
};

export default Home;
