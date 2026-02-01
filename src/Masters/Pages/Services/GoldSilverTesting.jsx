// src/Masters/Pages/Services/GoldSilverTesting.jsx
import React from "react";
import { Link } from "react-router-dom";

const GoldSilverTesting = () => {
    // WhatsApp for this service
    const whatsappNumber = "+919975796681";
    const whatsappMessage =
        "Hello, I want to know more about your gold and silver purity testing service.";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
    )}`;

    return (
        <div className="min-h-screen bg-gray-100 py-16 px-4 md:px-8">
            <section className="bg-white rounded-3xl shadow-sm border border-gray-200 py-12 px-4 md:px-8 max-w-6xl mx-auto">
                <div className="space-y-12">
                    {/* Top: intro + video */}
                    <div className="grid gap-10 md:grid-cols-[1.4fr_minmax(0,1fr)] items-center">
                        {/* Text */}
                        <div>
                            <p className="text-[11px] md:text-xs font-semibold tracking-[0.28em] text-gray-500 uppercase mb-2">
                                Service we offer
                            </p>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                                Gold & Silver Purity Testing
                            </h1>
                            <p className="text-sm md:text-base text-gray-600 mb-3">
                                Non‑destructive XRF testing for your gold and silver jewellery, coins
                                and bars, so you know the exact purity before you buy, sell or remake
                                anything.
                            </p>
                            <p className="text-sm md:text-base text-gray-600">
                                Every test is done on calibrated machines and each report is personally
                                explained in simple language, so you clearly understand the purity,
                                weight and value of your jewellery.
                            </p>

                            {/* CTAs */}
                            <div className="mt-6 flex flex-wrap gap-3">
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

                        {/* Video */}
                        <div className="rounded-2xl overflow-hidden border border-gray-200 bg-black shadow-sm max-w-md mx-auto md:mx-0">
                            <video
                                className="w-full h-56 md:h-64 object-cover"
                                src="/videos/gold-silver-purity-testing.mp4"
                                controls
                                poster="/videos/gold-silver-purity-testing-thumbnail.jpg"
                            />
                        </div>

                    </div>

                    {/* Middle: 3 key trust cards */}
                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                            <h2 className="text-sm font-semibold text-gray-900 mb-2">
                                Precision & accuracy
                            </h2>
                            <p className="text-xs md:text-sm text-gray-600">
                                XRF machines calibrated to industry standards give you reliable,
                                repeatable purity readings that match hallmarking and regulatory
                                expectations.[web:201][web:232]
                            </p>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                            <h2 className="text-sm font-semibold text-gray-900 mb-2">
                                Customized insights
                            </h2>
                            <p className="text-xs md:text-sm text-gray-600">
                                We don’t just show a number. We explain what that purity means for
                                buying, selling, pledging or remaking your jewellery in your real‑life
                                situation.[web:232][web:236]
                            </p>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                            <h2 className="text-sm font-semibold text-gray-900 mb-2">
                                Timely results
                            </h2>
                            <p className="text-xs md:text-sm text-gray-600">
                                Most items are tested in 2–5 minutes, so you can quickly complete your
                                purchase, sale or loan work without long waiting time.[web:203][web:235]
                            </p>
                        </div>
                    </div>

                    {/* Bottom: expertise, security, standards */}
                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="border border-gray-200 rounded-2xl p-5 bg-white">
                            <h2 className="text-sm font-semibold text-gray-900 mb-2">
                                Industry expertise
                            </h2>
                            <p className="text-xs md:text-sm text-gray-600">
                                Years of experience in metal testing and jewellery work help us read
                                complex items accurately and guide you with practical suggestions you
                                can actually use.[web:233][web:236]
                            </p>
                        </div>

                        <div className="border border-gray-200 rounded-2xl p-5 bg-white">
                            <h2 className="text-sm font-semibold text-gray-900 mb-2">
                                Confidential & secure
                            </h2>
                            <p className="text-xs md:text-sm text-gray-600">
                                Your jewellery stays under your supervision during the process, and all
                                purity results and valuations are treated as confidential and shared
                                only with you.[web:232][web:236]
                            </p>
                        </div>

                        <div className="border border-gray-200 rounded-2xl p-5 bg-white">
                            <h2 className="text-sm font-semibold text-gray-900 mb-2">
                                Certified testing standards
                            </h2>
                            <p className="text-xs md:text-sm text-gray-600">
                                Our procedures follow nationally and internationally recognized testing
                                standards, giving you lab‑style reports that support quality assurance,
                                loans and documentation.[web:201][web:232]
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GoldSilverTesting;
