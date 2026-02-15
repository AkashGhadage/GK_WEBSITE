// src/Masters/Pages/About/AboutPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, Users, HeartHandshake, ShieldCheck } from "lucide-react";

const AboutPage = () => {
  const whatsappNumber = "+919975796681";
  const whatsappMessage =
    "Hello, I want to know more about Gurukrupa Computerized Tunch & Laser Soldering Centre.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero / Who we are */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-12 space-y-8">
          <div className="space-y-3 max-w-3xl">
            <p className="text-[10px] font-bold tracking-[0.3em] text-[#b79654] uppercase">
              About Gurukrupa
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
              Gurukrupa Computerized Tunch & Laser Soldering Centre
            </h1>
            <p className="text-lg md:text-xl font-semibold text-gray-800">
              Trusted gold testing and precision repairs for everyday families, jewellers,
              and gold loan customers.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-[1.6fr_1.2fr] items-start">
            <div className="space-y-5 text-sm md:text-base text-gray-700 leading-relaxed">
              <p>
                Gurukrupa started with a simple thought: jewellery is never just metal.
                It carries money, memories, and trust. When someone hands over a chain,
                ring, or bangle, they are also handing over their emotions and belief
                that you will do the right thing.
              </p>
              <p>
                We built this centre so that people have a place where their gold is
                checked and repaired with the same seriousness they feel for it. We use
                modern machines and methods, but our real focus is how secure and informed
                you feel when you leave.
              </p>

              <div className="border-l-4 border-[#b79654] pl-4 py-2 space-y-1 text-gray-800">
                <p className="font-semibold">Jewellery is not just gold.</p>
                <p>It holds value, emotion, and trust.</p>
                <p>We treat it that way.</p>
              </div>
            </div>

            <div className="space-y-4 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-5">
              <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase">
                At a glance
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Computerized XRF gold and silver purity testing — without melting.</li>
                <li>Fine laser soldering for broken chains, weak joints, and ring resizing.</li>
                <li>Simple, transparent explanations about purity and value.</li>
                <li>Per‑piece pricing so you always know what you are paying for.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why we exist */}
      <section className="w-full bg-[#111827] text-gray-100 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-12 grid gap-10 md:grid-cols-2 items-start">
          <div className="space-y-4">
            <p className="text-[10px] font-bold tracking-[0.3em] text-[#f5d38b] uppercase">
              Our story
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold">
              Why we started this centre
            </h2>
            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
              In gold, even a small change in purity can change the price by thousands of
              rupees. But many people still buy, sell, or pledge jewellery without checking
              purity properly. They depend only on what someone else tells them.
            </p>
            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
              We started Gurukrupa so that anyone can walk in, test their jewellery in
              minutes, and make decisions with confidence. Clear results. No confusion.
              No guesswork.
            </p>
          </div>

          <div className="space-y-4 text-sm md:text-base text-gray-200 leading-relaxed">
            <p>
              Our computerized XRF testing checks purity without melting or cutting your
              jewellery. You see the process, you see the reading, and we explain it in
              simple words.
            </p>
            <p>
              Alongside testing, our laser soldering lets us repair and strengthen delicate
              pieces with clean, focused heat—safer for stones, designs, and daily‑wear
              jewellery.
            </p>
          </div>
        </div>
      </section>

      {/* What we actually do daily */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-12 space-y-10">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
              What we do every day
            </h2>
            <p className="text-sm md:text-base text-gray-700">
              A normal day at Gurukrupa is simple, practical work around real people and their jewellery.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 text-sm md:text-base text-gray-700 leading-relaxed">
            <div className="space-y-3">
              <ul className="space-y-2">
                <li>Test gold and silver jewellery for purity.</li>
                <li>Help gold loan customers get quick purity checks.</li>
                <li>Repair broken chains and strengthen weak joints.</li>
                <li>Resize rings to a comfortable, safe fit.</li>
                <li>Explain how purity and weight affect value in simple terms.</li>
              </ul>
              <p>Every piece is handled carefully — whether it is small or heavy.</p>
            </div>

            <div className="space-y-4 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-5">
              <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase">
                Who walks into our centre?
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Someone selling old jewellery and wanting to be sure before finalising a price.</li>
                <li>A family checking old gold before giving it to a jeweller for remaking.</li>
                <li>A gold loan customer needing a quick, clear purity check.</li>
                <li>Anyone worried about a broken chain or loose joint on a favourite piece.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How we work / values */}
      <section className="w-full bg-gray-100 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-12 space-y-10">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
              Our way of working
            </h2>
            <p className="text-sm md:text-base text-gray-700">
              More than machines and tools, our approach is what makes Gurukrupa different.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 text-sm md:text-base text-gray-700">
            <div className="space-y-3">
              <ShieldCheck className="w-6 h-6 text-[#b79654]" />
              <h3 className="font-semibold text-gray-900">Transparent</h3>
              <p>
                Testing is done in front of you. You can see the jewellery, the process,
                and the reading. You always know what is happening.
              </p>
            </div>

            <div className="space-y-3">
              <HeartHandshake className="w-6 h-6 text-[#b79654]" />
              <h3 className="font-semibold text-gray-900">Careful</h3>
              <p>
                We handle every ornament like family jewellery, not just as a “piece of
                gold”. We keep you informed at every step.
              </p>
            </div>

            <div className="space-y-3">
              <Sparkles className="w-6 h-6 text-[#b79654]" />
              <h3 className="font-semibold text-gray-900">Simple pricing</h3>
              <p>
                Clear per‑piece charges with no hidden costs. You know the rate before
                work starts, so the bill never surprises you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final “why visit us” band */}
      <section className="w-full bg-[#111827] text-gray-100 py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3">
            <h2 className="text-xl md:text-2xl font-serif font-bold">
              When you need clarity about your gold
            </h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Whether you are selling, pledging, buying old jewellery, checking family
              gold, or repairing a chain — one visit to Gurukrupa gives you clear
              information about purity and repair options.
            </p>
            <p className="text-sm md:text-base text-gray-200">
              Your gold should feel safe.<br />
              You should feel confident.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[#b79654] text-black hover:bg-[#a48545] transition-colors"
            >
              Visit / contact us
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full text-sm font-semibold border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
