import React, { useState } from "react";

const ComputerTouchPage = () => {
  const [openSections, setOpenSections] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
  });

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const getRotateClass = (index) => {
    return openSections[index] ? "rotate-180" : "rotate-90";
  };

  const getContentClass = (index) => {
    return openSections[index]
      ? "max-h-40 pb-4 opacity-100"
      : "max-h-0 pb-0 opacity-0";
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* WhatsApp Button */}
      <div className="fixed bottom-2 right-2 z-50">
        <a
          href="https://wa.me/919326883179?text=I%20want%20know%20more%20about%20your%20service"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <svg
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </a>
      </div>

      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="py-8 px-4 md:px-0">
          {/* Hero Banner */}
          <div className="banner max-w-4xl mx-auto md:h-[350px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-200/50">
            <img
              src="/gold-hero.jpg"
              alt="Computer Touch Service"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="max-w-4xl mx-auto px-4 space-y-8 py-12">
            <header className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight">
                Computer Touch
              </h1>

              <p className="text-xl leading-relaxed text-gray-700 text-justify font-medium max-w-3xl">
                At Nagesh Touch Lab, we offer specialized{" "}
                <strong className="text-red-600 font-black">
                  Computer Touch Gold Testing
                </strong>{" "}
                services in Kalyan to generate fast, precise, and digital tunch
                reports of gold. Whether you're a jewellery shop, hallmarking
                centre, or metal testing professional, our touch lab ensures
                that every gold purity test is documented using advanced gold
                touch machines and accurate weight-measurement systems.[file:1]
              </p>
            </header>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div className="space-y-8 lg:pr-12">
                <section>
                  <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent mb-8">
                    What is Computer Touch?
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-700 text-justify font-medium pb-12">
                    Computer Touch Gold Testing refers to the digital process of
                    generating tunch reports for gold purity testing using
                    specialized software and machines. It combines
                    non-destructive testing (like XRF) with automated data
                    entry, report printing, and barcode tagging—helping
                    jewellers and assayers quickly document and manage gold
                    purity results accurately and professionally.[file:1][web:2]
                  </p>
                </section>

                <section>
                  <h3 className="text-3xl font-black text-gray-900 mb-8 border-b-4 border-red-500 pb-4 inline-block">
                    Why Choose Our Service?
                  </h3>

                  {/* Accordion Cards */}
                  <div className="space-y-4">
                    {[
                      {
                        id: 1,
                        title: "Cutting-Edge Technology",
                        content:
                          "Our Computer Touch technology represents the latest advancements in the industry, ensuring the most accurate and reliable gold testing results.",
                        open: true,
                      },
                      {
                        id: 2,
                        title: "Non-Destructive Testing",
                        content:
                          "Your valuable gold items will remain intact and unharmed during the testing process, allowing you to retain their beauty and value.",
                        open: false,
                      },
                      {
                        id: 3,
                        title: "Efficiency and Speed",
                        content:
                          "With Computer Touch, we can perform gold testing swiftly without compromising on accuracy.",
                        open: false,
                      },
                      {
                        id: 4,
                        title: "Digital Reporting",
                        content:
                          "Get professional digital tunch reports with barcode tagging for easy tracking and verification.",
                        open: false,
                      },
                    ].map((item) => (
                      <div
                        key={item.id}
                        className="group border border-gray-200/80 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50/50 to-orange-50 hover:from-amber-100 hover:shadow-orange-100/50 transition-all duration-500 hover:-translate-y-1 hover:border-red-200"
                      >
                        <button
                          className="w-full flex justify-between items-center px-6 py-5 text-left text-xl font-semibold text-gray-800 hover:bg-gradient-to-r hover:from-red-50 hover:to-amber-50 transition-all duration-300 relative overflow-hidden"
                          onClick={() => toggleSection(item.id)}
                        >
                          <span className="font-bold relative z-10">
                            {item.title}
                          </span>
                          <div className="relative z-10 flex items-center">
                            <svg
                              className={`w-6 h-6 text-red-600 transition-all duration-500 flex-shrink-0 ${getRotateClass(item.id)}`}
                              fill="currentColor"
                              viewBox="0 0 1024 1024"
                              stroke="currentColor"
                              strokeWidth="0"
                            >
                              <path d="M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z" />
                            </svg>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                        <div
                          className={`px-6 overflow-hidden transition-all duration-700 ease-out ${getContentClass(item.id)}`}
                        >
                          <p className="text-gray-700 leading-relaxed text-base py-4 border-t border-gray-100">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Right CTA */}
              <div className="lg:sticky lg:top-24 self-start">
                <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-900/90 backdrop-blur-xl text-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl border border-red-500/30 hover:border-red-400/50 transition-all duration-500 group hover:scale-[1.02] hover:rotate-1">
                  <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                    <svg
                      className="w-10 h-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black mb-6 leading-tight tracking-tight">
                    Ready to Test Your Gold?
                  </h3>
                  <p className="text-red-100 mb-10 leading-relaxed opacity-95 text-lg font-medium">
                    Experience precision gold testing with cutting-edge Computer
                    Touch technology.
                  </p>
                  <div className="space-y-4">
                    <a
                      href="https://wa.me/919326883179?text=I%20want%20to%20book%20Computer%20Touch%20service"
                      className="block w-full bg-white shadow-xl hover:shadow-2xl text-red-600 font-black py-5 px-8 rounded-2xl text-xl uppercase tracking-wider hover:-translate-y-2 hover:bg-gray-50 transition-all duration-300 text-center ring-2 ring-white/50"
                    >
                      Book Now WhatsApp
                    </a>
                    <a
                      href="/contact"
                      className="block w-full border-2 border-white/60 hover:border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-center hover:shadow-lg hover:shadow-white/20"
                    >
                      Contact Us →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");

        * {
          font-family:
            "Inter",
            -apple-system,
            BlinkMacSystemFont,
            sans-serif;
        }

        .banner {
          aspect-ratio: 16/9;
        }

        @media (min-width: 768px) {
          .banner {
            height: 350px;
          }
        }
      `}</style>
    </div>
  );
};

export default ComputerTouchPage;
