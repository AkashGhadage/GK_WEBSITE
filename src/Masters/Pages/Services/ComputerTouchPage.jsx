import React, { useState } from "react";
import { globalFaqs } from "../../Shared/faqData";
import FAQSection from "../../Shared/FAQSection";

const ComputerTouchPage = () => {
  const [openSections, setOpenSections] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
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
            {/* Breadcrumb - Hidden on mobile */}
            <nav className="text-sm hidden md:block max-w-[1000px] mx-auto my-2">
              <ol className="flex gap-2">
                <li>
                  <a className="text-gray-600 hover:text-red-500 hover:underline" href="/">
                    Home
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-600">/</span>
                  <span className="font-semibold text-gray-800 capitalize px-1">computer-touch</span>
                </li>
              </ol>
            </nav>

            {/* Hero Banner */}
            <div className="banner max-w-[1000px] mx-auto md:h-[350px]">
              <img
                alt="Computer Touch"
                loading="lazy"
                width="1920"
                height="1080"
                className="w-full h-full rounded-2xl bg-cover bg-center object-cover"
                src="/computer-touch.jpg"
              />
            </div>

            {/* Main Content */}
            <div className="space-y-5 py-8 max-w-[1000px] mx-auto px-3">
              <h1 className="text-3xl md:text-4xl font-bold">Computer Touch</h1>
              <p className="body-text text-justify">
                At Nagesh Touch Lab, we offer specialized Computer Touch Gold Testing services in Kalyan to generate fast, precise, and digital tunch reports of gold. Whether you're a jewellery shop, hallmarking centre, or metal testing professional, our touch lab ensures that every gold purity test is documented using advanced gold touch machines and accurate weight-measurement systems.[file:1]
              </p>

              <h2 className="text-2xl md:text-3xl font-bold">What is Computer Touch?</h2>
              <p className="body-text text-justify">
                Computer Touch Gold Testing refers to the digital process of generating tunch reports for gold purity testing using specialized software and machines. It combines non-destructive testing (like XRF) with automated data entry, report printing, and barcode tagging—helping jewellers and assayers quickly document and manage gold purity results accurately and professionally.[file:1]
              </p>
            </div>

            {/* Why Choose Section */}
            <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-10 px-3 py-12 items-start">
              <div className="left-part">
                <h3 className="text-2xl md:text-3xl font-bold mb-5">Why Choose Our Computer Touch Service?</h3>
                <div className="space-y-1">
                  {[
                    {
                      id: 1,
                      title: "1. Cutting-Edge Technology",
                      content: "Our Computer Touch technology represents the latest advancements in the industry, ensuring the most accurate and reliable gold testing results.",
                    },
                    {
                      id: 2,
                      title: "2. Non-Destructive Testing",
                      content: "Your valuable gold items will remain intact and unharmed during the testing process, allowing you to retain their beauty and value.",
                    },
                    {
                      id: 3,
                      title: "3. Efficiency and Speed",
                      content: "With Computer Touch, we can perform gold testing swiftly without compromising on accuracy.",
                    },
                    {
                      id: 4,
                      title: "4. Professional Expertise",
                      content: "Our team of skilled technicians is trained to operate the Computer Touch system effectively, providing you with precise and trustworthy results.",
                    },
                    {
                      id: 5,
                      title: "5. Customer Satisfaction",
                      content: "We are committed to delivering exceptional customer service and ensuring your experience with us is both pleasant and informative.",
                    },
                    {
                      id: 6,
                      title: "6. Instant and Accurate Results",
                      content: "Get results within seconds. Computerized gold testing delivers fast and highly accurate readings, making it ideal for both personal and professional use.",
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
                  alt="Computer Touch"
                  loading="lazy"
                  width="900"
                  height="900"
                  className="w-full h-full rounded-2xl object-cover"
                  src="/gold-hero.jpg"
                />
              </div>
            </div>

            {/* Conclusion */}
            <div className="conclusion max-w-[1000px] mx-auto px-3 py-6">
              <p className="body-text text-justify">
                Choose Nagesh Touch Lab for Computer Touch Gold Testing and experience the future of gold assay technology. Our commitment to accuracy and customer satisfaction sets us apart as a trusted partner in the precious metals industry. Contact us today to learn more about our Computer Touch Gold Testing Service or to schedule an appointment. Let us help you uncover the true value and purity of your precious gold items![file:1]
              </p>
            </div>
          </div>

          {/* Your Imported FAQSection */}
          <FAQSection
            title="Frequently asked questions about gold testing & laser soldering"
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

export default ComputerTouchPage;
