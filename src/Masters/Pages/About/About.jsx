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
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#b79654] selection:text-white">
      {/* ═══════════ HERO WITH IMAGE ═══════════ */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center overflow-hidden">
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
              At Gurukrupa, we understand that jewellery is more than just
              metal — it is a vessel for your most cherished memories and
              hard-earned trust.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ THE PHILOSOPHY ═══════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
                The Gurukrupa Standard
              </h2>
              <div className="w-20 h-1 bg-[#b79654]"></div>
              <p className="text-gray-600 leading-relaxed text-lg">
                We built this lab so that people have a place where their
                gold is checked and repaired with the same seriousness they feel
                for it. We use XRF technology — the gold standard in purity
                testing — to ensure you leave with absolute certainty.
              </p>
              <div className="p-8 bg-gray-50 border-l-4 border-[#b79654] italic text-gray-700 text-lg">
                "Jewellery is not just gold. It holds value, emotion, and trust.
                We treat it that way."
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-4 pt-0 md:pt-12">
                <div className="bg-gray-100 p-6 rounded-2xl hover:shadow-xl transition-shadow border hover:scale-105 duration-300 border-gray-200">
                  <ShieldCheck className="w-8 h-8 text-[#b79654] mb-4" />
                  <h3 className="font-bold">XRF Testing</h3>
                  <p className="text-sm text-gray-500">
                    Accurate gold and silver  Purity check.
                    Fast, reliable results you can see instantly.
                  </p>
                </div>
                <div className="bg-[rgb(23,28,32)] text-white p-6 rounded-2xl shadow-2xl transition-transform hover:scale-105 duration-300">
                  <Sparkles className="w-8 h-8 text-[#d4af37] mb-4" />
                  <h3 className="font-bold text-lg">Laser Technology</h3>
                  <p className="text-sm text-gray-400">
                    Precision soldering for delicate pieces.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-[rgb(23,28,32)] text-white p-6 rounded-2xl shadow-2xl hover:scale-105 duration-300">
                  <Users className="w-8 h-8 text-[#d4af37] mb-4" />
                  <h3 className="font-bold">Trust First</h3>
                  <p className="text-sm text-gray-400">
                    Serving families, jewellers, and bullion traders with honesty from day one.
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

      {/* ═══════════ PARALLAX IMAGE BREAK ═══════════ */}
      <section className="relative w-full h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/about_old.jpg"
            alt="Jewellery Testing"
            className="w-full h-full object-cover"
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

      {/* ═══════════ DAILY OPERATIONS ═══════════ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Expertise in Action
            </h2>
            <p className="text-gray-600">
              A normal day at Gurukrupa is simple, practical work focused on the
              people behind the jewellery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-8">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#b79654]"></span> What we do
              </h3>
              <ul className="space-y-6">
                {[
                  "Computerised XRF Purity Testing for gold & silver",
                  "Broken chain & weak joint repairs with laser precision",
                  "Ring resizing to a comfortable, safe fit",
                  "Gold loan purity verification with certified reports",
                  "Honest valuation consultations at market rates",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-4 text-gray-700"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#b79654] shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-6">Who we serve</h3>
              <div className="space-y-6 text-gray-600">
                <p className="flex gap-4">
                  <span className="text-[#b79654] font-serif italic text-2xl shrink-0">
                    01
                  </span>
                  Families verifying heirlooms before remaking them into new
                  designs.
                </p>
                <p className="flex gap-4">
                  <span className="text-[#b79654] font-serif italic text-2xl shrink-0">
                    02
                  </span>
                  Individuals selling old gold who want an honest, third-party
                  purity report.
                </p>
                <p className="flex gap-4">
                  <span className="text-[#b79654] font-serif italic text-2xl shrink-0">
                    03
                  </span>
                  Gold loan seekers needing fast, accurate documentation for
                  banks and NBFCs.
                </p>
                <p className="flex gap-4">
                  <span className="text-[#b79654] font-serif italic text-2xl shrink-0">
                    04
                  </span>
                  Jewellers and bullion traders verifying stock purity for
                  business transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default AboutPage;
