import React, { useState } from "react";
import { globalFaqs } from "../../Shared/faqData";
import FAQSection from "../../Shared/FAQSection";
import { Link } from "react-router-dom";

const ComputerTouchPage = () => {
  const whatsappNumber = "+919975796681";
  const whatsappMessage =
    "Hello, I want to know more about your gold and silver purity testing service.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 md:px-8">
      <section className="bg-white rounded-3xl shadow-sm border border-gray-200 py-12 px-4 md:px-8 max-w-6xl mx-auto space-y-12">
        {/* Hero + video */}
        <div className="grid gap-10 md:grid-cols-[1.4fr_minmax(0,1fr)] items-center">
          {/* Hero text */}
          <div>
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.28em] text-gray-500 uppercase mb-2">
              Coumputer Tunch
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Coumputer Tunch - You Can Trust
            </h1>
            <p className="mt-2 text-xs md:text-sm text-gray-500">
            Tunch refers to the local Indian term for the purity or fineness of gold, often expressed as a percentage
            </p>
            
            <p className="text-sm md:text-base text-gray-700 mb-2">
              Coumputer Tunch aka Know the exact purity of your gold and silver jewellery, coins and bars
              before you buy, sell, pledge or remake.
            </p>
            <p className="text-sm md:text-base text-gray-700">
              We use non‑destructive XRF testing, so your jewellery remains completely
              safe while you get fast, accurate results — explained in simple language.
            </p>

            {/* Quick trust bullets */}
            <div className="mt-4 flex flex-wrap gap-3 text-xs md:text-sm text-gray-700">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 border border-gray-200">
                ✔ Free purity testing for gold & silver
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 border border-gray-200">
                ✔ Results in 2–5 minutes
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 border border-gray-200">
                ✔ Transparent process
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 border border-gray-200">
                ✔ No damage. No melting. No risk.
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 border border-gray-200">
                ✔ Accurate & reliable results
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm md:text-base font-semibold rounded-full bg-[#b79654] text-white hover:bg-[#9f8350] transition-colors shadow-sm"
              >
                Book a purity test
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-sm md:text-base font-semibold rounded-full border border-gray-300 text-gray-800 hover:border-[#b79654] hover:text-[#b79654] transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
            <p className="mt-2 text-xs md:text-sm text-gray-500">
              Walk‑ins welcome | Serving customers across Karol Bagh & nearby areas
            </p>
          </div>

          {/* Video card */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 bg-black shadow-sm max-w-md mx-auto md:mx-0">
            <div className="relative">
              <video
                className="w-full h-56 md:h-64 object-cover"
                src="/videos/gold-silver-purity-testing.mp4"
                controls
                poster="/videos/gold-silver-purity-testing-thumbnail.jpg"
              />
              {/* Optional overlay text on thumbnail look */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
                <p className="text-xs md:text-sm font-medium text-white">
                  Watch how our gold & silver purity testing works (30 sec)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Short trust line */}
        <p className="text-sm md:text-base text-gray-700 text-center max-w-3xl mx-auto">
          Every test is performed in front of you, and each report is personally
          explained so you clearly understand the purity, weight and true value of
          your jewellery.
        </p>

        {/* Trust signal row */}
        <div className="grid gap-4 md:grid-cols-4 text-xs md:text-sm text-gray-700">
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3">
            <span className="text-lg">✅</span>
            <span>Tested in front of you</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3">
            <span className="text-lg">✅</span>
            <span>No damage to jewellery</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3">
            <span className="text-lg">✅</span>
            <span>Transparent, explained process</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3">
            <span className="text-lg">✅</span>
            <span>Honest, independent testing</span>
          </div>
        </div>

        {/* Feature cards – improved wording */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
            <h2 className="text-sm font-semibold text-gray-900 mb-2">
              Precision & accuracy
            </h2>
            <p className="text-xs md:text-sm text-gray-600">
              Our XRF machines are regularly calibrated to industry standards,
              ensuring reliable and repeatable purity results that match hallmarking
              and regulatory expectations.[web:201][web:232]
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
            <h2 className="text-sm font-semibold text-gray-900 mb-2">
              Clear, practical explanation
            </h2>
            <p className="text-xs md:text-sm text-gray-600">
              We don’t just give numbers. We explain what your purity means for buying,
              selling, pledging or remaking jewellery — so you can make confident,
              informed decisions.[web:232][web:236]
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
            <h2 className="text-sm font-semibold text-gray-900 mb-2">
              Fast results
            </h2>
            <p className="text-xs md:text-sm text-gray-600">
              Most items are tested within 2–5 minutes, helping you complete purchases,
              sales or loans without unnecessary waiting at the counter.[web:203][web:235]
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="border border-gray-200 rounded-2xl p-5 bg-white">
            <h2 className="text-sm font-semibold text-gray-900 mb-2">
              Industry experience
            </h2>
            <p className="text-xs md:text-sm text-gray-600">
              With years of experience in precious metal testing, we accurately handle
              complex and mixed jewellery items and guide you with practical, honest
              insights.[web:233][web:236]
            </p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 bg-white">
            <h2 className="text-sm font-semibold text-gray-900 mb-2">
              Confidential & secure
            </h2>
            <p className="text-xs md:text-sm text-gray-600">
              Your jewellery always remains under your supervision. All purity results
              and valuations are kept strictly confidential and shared only with
              you.[web:232][web:236]
            </p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 bg-white">
            <h2 className="text-sm font-semibold text-gray-900 mb-2">
              Recognized testing standards
            </h2>
            <p className="text-xs md:text-sm text-gray-600">
              Our testing procedures follow nationally and internationally accepted
              standards, and reports are suitable for quality assurance, loans and
              documentation purposes.[web:201][web:232]
            </p>
          </div>
        </div>

        {/* Optional: Who is this service for */}
        <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50">
          <h2 className="text-sm md:text-base font-semibold text-gray-900 mb-3">
            Who is this service for?
          </h2>
          <div className="grid gap-2 md:grid-cols-2 text-xs md:text-sm text-gray-700">
            <span>• Jewellery buyers & sellers</span>
            <span>• Gold loan & pledge customers</span>
            <span>• Individuals checking inherited jewellery</span>
            <span>• Jewellers & traders</span>
            <span>• Anyone wanting purity clarity before remaking jewellery</span>
          </div>
        </div>

        {/* Bottom CTA repeat */}
        <div className="text-center space-y-3">
          <p className="text-sm md:text-base text-gray-700">
            Ready to check the real purity of your gold and silver?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm md:text-base font-semibold rounded-full bg-[#b79654] text-white hover:bg-[#9f8350] transition-colors shadow-sm"
            >
              Book a purity test
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-sm md:text-base font-semibold rounded-full border border-gray-300 text-gray-800 hover:border-[#b79654] hover:text-[#b79654] transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComputerTouchPage;
