import React, { useState } from "react";
import { globalFaqs } from "../../Shared/faqData";
import FAQSection from "../../Shared/FAQSection";

const JewelleryRepair = () => {
  const [openSections, setOpenSections] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
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
      ? "max-h-40 px-5 pb-4 opacity-100"
      : "max-h-0 px-5 opacity-0";
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* WhatsApp Button */}
      <div className="fixed bottom-2 right-2 z-50">
        <a
          href="https://wa.me/919326883179?text=I%20want%20know%20more%20about%20your%20service"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-xl flex items-center justify-center transition-transform duration-300 transform hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            className="text-4xl"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </a>
      </div>

      <main className="pt-16 overflow-x-hidden">
        <div>
          <div className="py-8 p-3">
            {/* Breadcrumb */}
            <nav className="text-sm hidden md:block max-w-[1000px] mx-auto my-2">
              <ol className="flex gap-2">
                <li>
                  <a className="text-gray-600 hover:text-red-500 hover:underline" href="/">
                    Home
                  </a>
                </li>
                {/* <li className="flex items-center">
                  <span className="text-gray-600">/</span>
                  <a className="text-gray-600 capitalize hover:text-red-500 hover:underline px-1" href="/services">
                    services
                  </a>
                </li> */}
                <li className="flex items-center">
                  <span className="text-gray-600">/</span>
                  <span className="font-semibold text-gray-800 capitalize px-1">jewellery-repairing</span>
                </li>
              </ol>
            </nav>

            {/* Hero Banner */}
            <div className="banner max-w-[1000px] mx-auto md:h-[350px]">
              <img
                alt="Jewellery Repairing"
                loading="lazy"
                width="1920"
                height="1080"
                className="w-full h-full rounded-2xl bg-cover bg-center object-cover"
                src="/jewellery-repair.jpg"
              />
            </div>

            {/* Main Content */}
            <div className="space-y-5 py-8 max-w-[1000px] mx-auto px-3">
              <h1 className="text-3xl md:text-4xl font-bold">Jewellery Repairing</h1>
              <p className="body-text text-justify">
                At Nagesh Touch Lab, we provide professional Jewellery Repairing Services designed to restore the beauty, strength, and value of your precious items. From fixing broken chains and resizing rings to polishing, stone replacement, and detailed restorations, our skilled experts handle every piece with precision and care. Whether you are an individual looking to revive your favourite jewellery or a business seeking reliable repair support, our team ensures fast, trusted, and high-quality service at every step.[file:1]
              </p>

              <h2 className="text-2xl md:text-3xl font-bold">What is Jewellery Repairing?</h2>
              <p className="body-text text-justify">
                Jewellery repairing involves restoring damaged, broken, or worn-out jewellery pieces to their original beauty and strength. From fixing clasps and resizing rings to polishing, soldering, and stone replacement, professional repair ensures your precious items remain safe, durable, and visually appealing. It helps maintain the sentimental and financial value of your jewellery while extending its lifespan.[file:1]
              </p>
            </div>

            {/* Why Choose Section */}
            <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-10 px-3 py-12 items-start">
              <div className="left-part">
                <h3 className="text-2xl md:text-3xl font-bold mb-5">Why Choose Our Jewellery Repairing Service?</h3>
                <div className="space-y-1">
                  {[
                    {
                      id: 1,
                      title: "1. Expert Craftsmanship",
                      content: "Our experienced technicians handle each piece with precision and care, ensuring every repair is performed with expert workmanship.",
                    },
                    {
                      id: 2,
                      title: "2. Careful Handling",
                      content: "We treat your jewellery with utmost responsibility, using professional tools and techniques to protect its structural integrity and shine.",
                    },
                    {
                      id: 3,
                      title: "3. Fast Turnaround",
                      content: "We offer fast turnaround times without compromising on quality, so you can have your favourite jewellery pieces back sooner.",
                    },
                    {
                      id: 4,
                      title: "4. Complete Solutions",
                      content: "From ring resizing and chain soldering to stone fixing and polishing, we provide complete repair solutions for all kinds of jewellery.",
                    },
                    {
                      id: 5,
                      title: "5. Transparent Pricing",
                      content: "We assess the repair needs clearly, explain the process, and provide upfront pricing so you always know exactly what to expect.",
                    },
                  ].map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-xl shadow-sm overflow-hidden bg-amber-100">
                      <button
                        className="w-full flex justify-between cursor-pointer items-center px-5 py-2 text-left text-[17px] hover:bg-gray-100 transition"
                        onClick={() => toggleSection(item.id)}
                      >
                        <span>{item.title}</span>
                        <span className={`transition-transform duration-300 ${getRotateClass(item.id)}`}>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z" />
                          </svg>
                        </span>
                      </button>
                      <div className={`transition-all duration-500 overflow-hidden ${getContentClass(item.id)}`}>
                        <p className="body-text text-[15px] leading-relaxed">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="right-part h-[60vh] md:h-[70vh]">
                <img
                  alt="Jewellery Repairing"
                  loading="lazy"
                  width="900"
                  height="900"
                  className="w-full h-full rounded-2xl object-cover"
                  src="/jewellery-repair.jpg"
                />
              </div>
            </div>

            {/* Conclusion */}
            <div className="conclusion max-w-[1000px] mx-auto px-3 py-6">
              <p className="body-text text-justify">
                Our Jewellery Repairing Service delivers trusted, high-quality restoration that brings your precious items back to life. With expert craftsmanship, modern tools, and complete transparency, we ensure every piece is repaired with precision and care. At Nagesh Touch Lab, your jewellery is in safe, skilled hands—restored beautifully and built to last.[file:1]
              </p>
            </div>
          </div>

          {/* Your Imported FAQSection */}
          <FAQSection
            title="Frequently asked questions about jewellery repairing"
            faqs={globalFaqs}
          />
        </div>
      </main>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");

        * {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .body-text {
          @apply text-base leading-relaxed text-gray-700;
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

export default JewelleryRepair;
