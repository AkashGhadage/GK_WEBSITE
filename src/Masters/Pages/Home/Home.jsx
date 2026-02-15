import React from "react";
import { Link } from "react-router-dom";
import {
  FaBullseye,
  FaClock,
  FaAward,
  FaShieldAlt,
  FaRupeeSign,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import FAQSection from "../../Shared/FAQSection";
import { globalFaqs } from "../../Shared/faqData";
import GoogleReview from "../../Shared/GoogleReview";

const services = [
  {
    title: "Computer Touch",
    image: "/computer-touch.jpg",
    desc: "Advanced digital gold purity testing with precise and reliable results. Get instant Tunch reports.",
    link: "/services/computer-touch",
  },
  {
    title: "Metal Testing",
    image: "/metal-testing.jpg",
    desc: "Professional assay services for gold and silver using scientific XRF technology.",
    link: "/services/metal-testing",
  },
  {
    title: "Jewellery Repair",
    image: "/jewellery-repair.jpg",
    desc: "Expert restoration and laser soldering services for your precious ornaments.",
    link: "/services/jewellery-repair",
  },
  {
    title: "gold and silver purity testing",
    image: "/goldpurity_1.png",
    desc: "Accurate and reliable purity testing for gold and silver using advanced, non-destructive methods to ensure transparency and trust in every transaction.",
    link: "/services/gold-silver-testing",
  },
];

const benefits = [
  { icon: <FaBullseye />, title: "Precision", desc: "Accurate assays." },
  { icon: <FaClock />, title: "Swift", desc: "Rapid turnaround." },
  { icon: <FaAward />, title: "Expertise", desc: "Decades of exp." },
  { icon: <FaShieldAlt />, title: "Secure", desc: "Material safety." },
  { icon: <FaRupeeSign />, title: "Transparent", desc: "Market rates." },
];

const Home = () => {
  const whatsappNumber = "+919975796681";
  const whatsappMessage =
    "Hello, I'm interested in your gold testing services.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen font-sans text-gray-900 antialiased bg-white">
      {/* Floating WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all"
      >
        <FaWhatsapp className="w-7 h-7 text-white" />
      </a>

      {/* --- HERO SECTION (Tightened) --- */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[rgb(48,62,73)]/80 z-10" />
          <img
            src="/gold-hero.jpg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <span className="text-[rgb(207,160,79)] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Trusted Gold Testing Lab
          </span>
          <h1 className="text-4xl md:text-7xl font-serif text-white mb-6 leading-tight uppercase">
            Precision In{" "}
            <span className="text-[rgb(207,160,79)]">Every Karat</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[rgb(207,160,79)] text-black px-8 py-3 font-bold rounded-full hover:bg-yellow-500 transition-all"
            >
              Visit Lab
            </Link>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 font-bold rounded-full hover:bg-white/20 transition-all"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* --- STATS OVERLAY (Tightened) --- */}
      <section className="relative z-30 -mt-12 max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100">
          {[
            { label: "Experience", val: "20+ Yrs" },
            { label: "Accuracy", val: "99.9%" },
            { label: "Purity Checks", val: "50,000+" },
            { label: "Daily Clients", val: "100+" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 text-center border-r last:border-0 border-gray-50"
            >
              <p className="text-[rgb(207,160,79)] text-xl md:text-2xl font-bold">
                {stat.val}
              </p>
              <p className="text-gray-400 text-[10px] uppercase tracking-widest mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- ABOUT SECTION (Tightened) --- */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <img
              src="/about.jpg"
              alt="About"
              className="rounded-2xl shadow-lg h-[400px] w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-[rgb(207,160,79)] p-6 rounded-2xl hidden md:block">
              <p className="text-black font-serif text-2xl font-bold italic">
                GK
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-[#b79654] font-bold tracking-[0.2em] uppercase text-xs">
              About Us
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[rgb(48,62,73)]">
              Trusted Gold & Silver Verification
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Located in Karol Bagh, Gurukrupa Gold offers government-certified
              testing. We combine traditional expertise with XRF technology to
              ensure every milligram counts.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-bold text-[rgb(48,62,73)] border-b-2 border-[rgb(207,160,79)] pb-1 group"
            >
              Know More{" "}
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION (Tighter Grid) --- */}
      <section className="bg-[rgb(48,62,73)] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[rgb(207,160,79)] font-bold tracking-[0.2em] uppercase text-xs mb-2">
              Our Specialization
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif text-white">
              Excellence in Every Karat
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-serif text-white mb-2">
                    {s.title}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4">
                    {s.desc}
                  </p>
                  <Link
                    to={s.link}
                    className="text-[rgb(207,160,79)] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
                  >
                    Explore Service →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- REVIEWS (Tightened) --- */}
      <div className="py-12 bg-gray-50 border-y border-gray-100">
        <GoogleReview />
      </div>

      {/* --- WHY CHOOSE US (Tightened) --- */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-serif font-bold text-[rgb(48,62,73)]">
              Why Clients Choose Us
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-gray-50 border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-2xl text-[rgb(207,160,79)] mb-3 flex justify-center">
                  {benefit.icon}
                </div>
                <h5 className="font-bold text-[rgb(48,62,73)] text-[11px] uppercase mb-1">
                  {benefit.title}
                </h5>
                <p className="text-[10px] text-gray-400">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-[rgb(48,62,73)] to-[rgb(30,40,50)] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-xl font-serif text-white font-bold">
                Ready to verify your gold?
              </h4>
              <p className="text-gray-400 text-sm">
                Visit our Karol Bagh lab for a report in minutes.
              </p>
            </div>
            <Link
              to="/contact"
              className="bg-[rgb(207,160,79)] text-black px-8 py-3 rounded font-bold hover:bg-white transition-all whitespace-nowrap text-sm"
            >
              Book Test Now
            </Link>
          </div>
        </div>
      </section>
      <FAQSection title="Common Questions" faqs={globalFaqs} />

    </div>
  );
};

export default Home;
