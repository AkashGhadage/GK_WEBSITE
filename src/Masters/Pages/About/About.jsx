// // src/Masters/Pages/About/AboutPage.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import { Sparkles, Users, HeartHandshake, ShieldCheck } from "lucide-react";

// const AboutPage = () => {
//   const whatsappNumber = "+919975796681";
//   const whatsappMessage =
//     "Hello, I want to know more about Gurukrupa Computerized Tunch & Laser Soldering Centre.";
//   const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
//     whatsappMessage
//   )}`;

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Hero / Who we are */}
//       <section className="w-full bg-white py-16 md:py-20">
//         <div className="max-w-6xl mx-auto px-4 md:px-12 space-y-8">
//           <div className="space-y-3 max-w-3xl">
//             <p className="text-[10px] font-bold tracking-[0.3em] text-[#b79654] uppercase">
//               About Gurukrupa
//             </p>
//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
//               Gurukrupa Computerized Tunch & Laser Soldering Centre
//             </h1>
//             <p className="text-lg md:text-xl font-semibold text-gray-800">
//               Trusted gold testing and precision repairs for everyday families, jewellers,
//               and gold loan customers.
//             </p>
//           </div>

//           <div className="grid gap-10 md:grid-cols-[1.6fr_1.2fr] items-start">
//             <div className="space-y-5 text-sm md:text-base text-gray-700 leading-relaxed">
//               <p>
//                 Gurukrupa started with a simple thought: jewellery is never just metal.
//                 It carries money, memories, and trust. When someone hands over a chain,
//                 ring, or bangle, they are also handing over their emotions and belief
//                 that you will do the right thing.
//               </p>
//               <p>
//                 We built this centre so that people have a place where their gold is
//                 checked and repaired with the same seriousness they feel for it. We use
//                 modern machines and methods, but our real focus is how secure and informed
//                 you feel when you leave.
//               </p>

//               <div className="border-l-4 border-[#b79654] pl-4 py-2 space-y-1 text-gray-800">
//                 <p className="font-semibold">Jewellery is not just gold.</p>
//                 <p>It holds value, emotion, and trust.</p>
//                 <p>We treat it that way.</p>
//               </div>
//             </div>

//             <div className="space-y-4 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-5">
//               <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase">
//                 At a glance
//               </p>
//               <ul className="space-y-2 text-sm text-gray-700">
//                 <li>Computerized XRF gold and silver purity testing — without melting.</li>
//                 <li>Fine laser soldering for broken chains, weak joints, and ring resizing.</li>
//                 <li>Simple, transparent explanations about purity and value.</li>
//                 <li>Per‑piece pricing so you always know what you are paying for.</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why we exist */}
//       <section className="w-full bg-[#111827] text-gray-100 py-16 md:py-20">
//         <div className="max-w-6xl mx-auto px-4 md:px-12 grid gap-10 md:grid-cols-2 items-start">
//           <div className="space-y-4">
//             <p className="text-[10px] font-bold tracking-[0.3em] text-[#f5d38b] uppercase">
//               Our story
//             </p>
//             <h2 className="text-2xl md:text-3xl font-serif font-bold">
//               Why we started this centre
//             </h2>
//             <p className="text-sm md:text-base text-gray-200 leading-relaxed">
//               In gold, even a small change in purity can change the price by thousands of
//               rupees. But many people still buy, sell, or pledge jewellery without checking
//               purity properly. They depend only on what someone else tells them.
//             </p>
//             <p className="text-sm md:text-base text-gray-200 leading-relaxed">
//               We started Gurukrupa so that anyone can walk in, test their jewellery in
//               minutes, and make decisions with confidence. Clear results. No confusion.
//               No guesswork.
//             </p>
//           </div>

//           <div className="space-y-4 text-sm md:text-base text-gray-200 leading-relaxed">
//             <p>
//               Our computerized XRF testing checks purity without melting or cutting your
//               jewellery. You see the process, you see the reading, and we explain it in
//               simple words.
//             </p>
//             <p>
//               Alongside testing, our laser soldering lets us repair and strengthen delicate
//               pieces with clean, focused heat—safer for stones, designs, and daily‑wear
//               jewellery.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* What we actually do daily */}
//       <section className="w-full bg-white py-16 md:py-20">
//         <div className="max-w-6xl mx-auto px-4 md:px-12 space-y-10">
//           <div className="space-y-2">
//             <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
//               What we do every day
//             </h2>
//             <p className="text-sm md:text-base text-gray-700">
//               A normal day at Gurukrupa is simple, practical work around real people and their jewellery.
//             </p>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2 text-sm md:text-base text-gray-700 leading-relaxed">
//             <div className="space-y-3">
//               <ul className="space-y-2">
//                 <li>Test gold and silver jewellery for purity.</li>
//                 <li>Help gold loan customers get quick purity checks.</li>
//                 <li>Repair broken chains and strengthen weak joints.</li>
//                 <li>Resize rings to a comfortable, safe fit.</li>
//                 <li>Explain how purity and weight affect value in simple terms.</li>
//               </ul>
//               <p>Every piece is handled carefully — whether it is small or heavy.</p>
//             </div>

//             <div className="space-y-4 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-5">
//               <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase">
//                 Who walks into our centre?
//               </p>
//               <ul className="space-y-2 text-sm text-gray-700">
//                 <li>Someone selling old jewellery and wanting to be sure before finalising a price.</li>
//                 <li>A family checking old gold before giving it to a jeweller for remaking.</li>
//                 <li>A gold loan customer needing a quick, clear purity check.</li>
//                 <li>Anyone worried about a broken chain or loose joint on a favourite piece.</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How we work / values */}
//       <section className="w-full bg-gray-100 py-16 md:py-20">
//         <div className="max-w-6xl mx-auto px-4 md:px-12 space-y-10">
//           <div className="space-y-2">
//             <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
//               Our way of working
//             </h2>
//             <p className="text-sm md:text-base text-gray-700">
//               More than machines and tools, our approach is what makes Gurukrupa different.
//             </p>
//           </div>

//           <div className="grid gap-8 md:grid-cols-3 text-sm md:text-base text-gray-700">
//             <div className="space-y-3">
//               <ShieldCheck className="w-6 h-6 text-[#b79654]" />
//               <h3 className="font-semibold text-gray-900">Transparent</h3>
//               <p>
//                 Testing is done in front of you. You can see the jewellery, the process,
//                 and the reading. You always know what is happening.
//               </p>
//             </div>

//             <div className="space-y-3">
//               <HeartHandshake className="w-6 h-6 text-[#b79654]" />
//               <h3 className="font-semibold text-gray-900">Careful</h3>
//               <p>
//                 We handle every ornament like family jewellery, not just as a “piece of
//                 gold”. We keep you informed at every step.
//               </p>
//             </div>

//             <div className="space-y-3">
//               <Sparkles className="w-6 h-6 text-[#b79654]" />
//               <h3 className="font-semibold text-gray-900">Simple pricing</h3>
//               <p>
//                 Clear per‑piece charges with no hidden costs. You know the rate before
//                 work starts, so the bill never surprises you.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Final “why visit us” band */}
//       <section className="w-full bg-[#111827] text-gray-100 py-14 md:py-16">
//         <div className="max-w-6xl mx-auto px-4 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
//           <div className="space-y-3">
//             <h2 className="text-xl md:text-2xl font-serif font-bold">
//               When you need clarity about your gold
//             </h2>
//             <p className="text-sm md:text-base text-gray-300 leading-relaxed">
//               Whether you are selling, pledging, buying old jewellery, checking family
//               gold, or repairing a chain — one visit to Gurukrupa gives you clear
//               information about purity and repair options.
//             </p>
//             <p className="text-sm md:text-base text-gray-200">
//               Your gold should feel safe.<br />
//               You should feel confident.
//             </p>
//           </div>
//           <div className="flex flex-wrap gap-3">
//             <Link
//               to="/contact"
//               className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[#b79654] text-black hover:bg-[#a48545] transition-colors"
//             >
//               Visit / contact us
//             </Link>
//             <a
//               href={whatsappLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-6 py-2.5 rounded-full text-sm font-semibold border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
//             >
//               Chat on WhatsApp
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutPage;

import React from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Users,
  HeartHandshake,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const AboutPage = () => {
  const whatsappNumber = "+919975796681";
  const whatsappMessage =
    "Hello, I want to know more about Gurukrupa Computerized Tunch & Laser Soldering Centre.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#b79654] selection:text-white">
      {/* SECTION 1: HERO WITH IMAGE */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center overflow-hidden">
        {/* Background Image from Public Folder */}
        <div className="absolute inset-0 z-0">
          <img
            src="/jewwllary.jpeg"
            alt="Gold Craftsmanship"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-2xl space-y-6">
            <span className="inline-block text-[12px] font-bold tracking-[0.4em] text-[#d4af37] uppercase border-b border-[#d4af37] pb-2">
              Our Legacy
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-white leading-tight">
              Precision Meets <br />
              <span className="italic">Purity.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed">
              At Gurukrupa, we understand that jewelry is more than just
              metal—it is a vessel for your most cherished memories and
              hard-earned trust.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PHILOSOPHY */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
                The Gurukrupa Standard
              </h2>
              <div className="w-20 h-1 bg-[#b79654]"></div>
              <p className="text-gray-600 leading-relaxed text-lg">
                We built this centre so that people have a place where their
                gold is checked and repaired with the same seriousness they feel
                for it. We use XRF technology—the gold standard in purity
                testing—to ensure you leave with absolute certainty.
              </p>
              <div className="p-8 bg-gray-50 border-l-4 border-[#b79654] italic text-gray-700 text-lg">
                "Jewellery is not just gold. It holds value, emotion, and trust.
                We treat it that way."
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-gray-100 p-6 rounded-2xl hover:shadow-xl transition-shadow border hover:scale-105 duration-300 border-gray-200">
                  <ShieldCheck className="w-8 h-8 text-[#b79654] mb-4" />
                  <h3 className="font-bold">XRF Testing</h3>
                  <p className="text-sm text-gray-500">
                    Purity checks without a single scratch.
                  </p>
                </div>
                <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-2xl transition-transform hover:scale-105 duration-300">
                  <Sparkles className="w-8 h-8 text-[#d4af37] mb-4" />
                  <h3 className="font-bold text-lg">Laser Tech</h3>
                  <p className="text-sm text-gray-400">
                    Precision soldering for delicate pieces.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-2xl hover:scale-105 duration-300">
                  <Users className="w-8 h-8 text-[#d4af37] mb-4" />
                  <h3 className="font-bold">Trust First</h3>
                  <p className="text-sm text-gray-400">
                    Serving families and jewelers since day one.
                  </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-2xl hover:shadow-xl transition-shadow border hover:scale-105 duration-300 border-gray-200">
                  <HeartHandshake className="w-8 h-8 text-[#b79654] mb-4" />
                  <h3 className="font-bold">Transparent</h3>
                  <p className="text-sm text-gray-500">
                    Real-time results, right before your eyes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MIDDLE IMAGE BREAK (PARALLAX EFFECT) */}
      <section className="relative w-full h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/about.jpg"
            alt="Jewelry Testing"
            className="w-full h-full object-cover fixed-bg"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">
            Clarity in Every Karat
          </h2>
          <p className="text-[#d4af37] tracking-[0.3em] uppercase font-bold text-sm">
            No Guesswork. No Confusion.
          </p>
        </div>
      </section>

      {/* SECTION 4: DAILY OPERATIONS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Expertise in Action
            </h2>
            <p className="text-gray-600">
              A normal day at Gurukrupa is simple, practical work focused on the
              people behind the jewelry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#b79654]"></span> What we do
              </h3>
              <ul className="space-y-6">
                {[
                  "Computerized XRF Purity Testing",
                  "Broken Chain & Joint Repairs",
                  "Precision Ring Resizing",
                  "Gold Loan Purity Verification",
                  "Valuation Consultations",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-4 text-gray-700"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#b79654]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-6">Who we serve</h3>
              <div className="space-y-6 text-gray-600">
                <p className="flex gap-4">
                  <span className="text-[#b79654] font-serif italic text-2xl">
                    01
                  </span>
                  Families verifying heirlooms before remaking them into new
                  designs.
                </p>
                <p className="flex gap-4">
                  <span className="text-[#b79654] font-serif italic text-2xl">
                    02
                  </span>
                  Individuals selling old gold who want an honest, third-party
                  purity report.
                </p>
                <p className="flex gap-4">
                  <span className="text-[#b79654] font-serif italic text-2xl">
                    03
                  </span>
                  Gold loan seekers needing fast, accurate documentation for
                  banks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
            Ready to get the{" "}
            <span className="text-[#d4af37]">absolute truth</span> about your
            gold?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="group px-8 py-4 bg-[#b79654] text-black font-bold rounded-full flex items-center gap-2 hover:bg-[#d4af37] transition-all"
            >
              Visit Our Centre{" "}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all"
            >
              Consult via WhatsApp
            </a>
          </div>
        </div>
        {/* Subtle decorative element */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#b79654]/10 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
};

export default AboutPage;
