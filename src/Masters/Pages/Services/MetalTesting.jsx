import React, { useState } from "react";
import { globalFaqs } from "../../Shared/faqData";
import FAQSection from "../../Shared/FAQSection";

const MetalTesting = () => {
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
            {/* Breadcrumb */}
            <nav className="text-sm hidden md:block max-w-[1000px] mx-auto my-2">
              <ol className="flex gap-2">
                <li>
                  <a className="text-gray-600 hover:text-red-500 hover:underline" href="/">
                    Home
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-600">/</span>
                  <span className="font-semibold text-gray-800 capitalize px-1">metal-testing</span>
                </li>
              </ol>
            </nav>

            {/* Hero Banner */}
            <div className="banner max-w-[1000px] mx-auto md:h-[350px]">
              <img
                alt="Metal Test"
                loading="lazy"
                width="1920"
                height="1080"
                className="w-full h-full rounded-2xl bg-cover bg-center object-cover"
                src="/gold-hero.jpg"
              />
            </div>

            {/* Main Content */}
            <div className="space-y-5 py-8 max-w-[1000px] mx-auto px-3">
              <h1 className="text-3xl md:text-4xl font-bold">Metal Test</h1>
              <p className="body-text text-justify">
                At Nagesh Touch Lab, we understand the importance of accurate and reliable metal testing. As a trusted metal testing lab in Kalyan, we invest in cutting-edge technology and equipment to ensure the highest level of precision and efficiency in our services. Our expert team of metallurgists and technicians are well-versed in using these advanced tools to deliver results you can trust.[file:1]
              </p>

              <h2 className="text-2xl md:text-3xl font-bold">What is Metal Test?</h2>
              <p className="body-text text-justify">
                Metal testing in jewellery is the process of checking whether a piece is made of real gold, silver, platinum, or other metals and determining its purity. It helps identify if the jewellery is genuine, hallmarked, or mixed with other metals. Using methods like acid tests, XRF machines, or touchstone testing, jewellers can quickly verify authenticity, ensure quality, and provide accurate value to customers.[file:1]
              </p>
            </div>

            {/* Why Choose Section */}
            <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-10 px-3 py-12 items-start">
              <div className="left-part">
                <h3 className="text-2xl md:text-3xl font-bold mb-5">Why Choose Our Metal Test Service?</h3>
                <div className="space-y-1">
                  {[
                    {
                      id: 1,
                      title: "1. Precision and Accuracy",
                      content: "Our commitment to accuracy ensures that you receive reliable results that meet industry standards and regulatory requirements.",
                    },
                    {
                      id: 2,
                      title: "2. Customized Solutions",
                      content: "We tailor our metal testing services to suit your specific needs, providing insights and recommendations to support your unique requirements.",
                    },
                    {
                      id: 3,
                      title: "3. Timely Results",
                      content: "We understand the urgency of your testing needs. Our streamlined processes enable us to deliver results promptly without compromising on quality.",
                    },
                    {
                      id: 4,
                      title: "4. Industry Expertise",
                      content: "With years of experience in metal testing and metallurgy, our team possesses the knowledge and skills needed to handle diverse projects and industries.",
                    },
                    {
                      id: 5,
                      title: "5. Confidentiality and Data Security",
                      content: "We prioritize the confidentiality of your samples and testing data, providing a secure environment throughout the entire testing process.",
                    },
                    {
                      id: 6,
                      title: "6. Certified Testing Standards",
                      content: "Our procedures follow nationally and internationally recognized standards, giving you lab-tested results that meet quality assurance and industry benchmarks.",
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
                  alt="Metal Test"
                  loading="lazy"
                  width="900"
                  height="900"
                  className="w-full h-full rounded-2xl object-cover"
                  src="/about.jpg"
                />
              </div>
            </div>

            {/* Conclusion */}
            <div className="conclusion max-w-[1000px] mx-auto px-3 py-6">
              <p className="body-text text-justify">
                At Nagesh Touch Lab, we are dedicated to providing reliable, accurate, and efficient material analysis services to support your business, manufacturing, and research endeavors. Our commitment to quality, customer satisfaction, and industry expertise makes us a trusted partner for all your metallurgical assessment requirements. Contact us today to learn more about our Metal Testing Services or to schedule a consultation. Trust us to uncover the true potential of your metal samples with precision and confidence.[file:1]
              </p>
            </div>
          </div>

          {/* Your Imported FAQSection */}
          <FAQSection
            title="Frequently asked questions about metal testing"
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

export default MetalTesting;
