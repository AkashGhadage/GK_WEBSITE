// import React, { useState } from "react";
// import { IoChevronDown } from "react-icons/io5";
// import { Link } from "react-router-dom";

// const FAQSection = ({ title = "Frequently asked questions", faqs }) => {
//   const [openIndex, setOpenIndex] = useState(null);

//   if (!faqs || !faqs.length) return null;

//   return (
//     <section className="w-full bg-[#fcfaf7]  py-16 md:py-24 md:my-5">
//       <div className="max-w-4xl mx-auto px-4 md:px-8">
        
//         {/* Elegant Heading Area */}
//         <div className="text-center mb-12 space-y-4">
//           <div className="flex items-center justify-center gap-3 mb-2">
//             <div className="h-px w-8 bg-[#b79654]"></div>
//             <span className="text-[10px] font-bold tracking-[0.3em] text-[#b79654] uppercase">
//               Support
//             </span>
//             <div className="h-px w-8 bg-[#b79654]"></div>
//           </div>
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
//             {title}
//           </h2>
//           <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
//             Everything you need to know about our non-destructive testing process and reports.
//           </p>
//         </div>

//         {/* FAQ Accordion */}
//         <div className="space-y-4">
//           {faqs.map((item, index) => {
//             const isOpen = openIndex === index;
//             return (
//               <div
//                 key={index}
//                 className={`group border transition-all duration-300 rounded-2xl overflow-hidden ${
//                   isOpen 
//                     ? "border-[#b79654] bg-white shadow-lg shadow-[#b79654]/5" 
//                     : "border-gray-200 bg-white hover:border-[#b79654]/50"
//                 }`}
//               >
//                 {/* Header */}
//                 <button
//                   type="button"
//                   onClick={() => setOpenIndex(isOpen ? null : index)}
//                   className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
//                 >
//                   <span className={`text-base md:text-lg font-medium transition-colors duration-300 ${
//                     isOpen ? "text-[#b79654]" : "text-gray-800"
//                   }`}>
//                     {item.question}
//                   </span>
                  
//                   <div className={`flex items-center justify-center rounded-full w-8 h-8 transition-all duration-300 ${
//                     isOpen 
//                       ? "bg-[#b79654] text-white rotate-180" 
//                       : "bg-gray-50 text-gray-400 group-hover:bg-[#b79654]/10 group-hover:text-[#b79654]"
//                   }`}>
//                     <IoChevronDown className="w-5 h-5" />
//                   </div>
//                 </button>

//                 {/* Animated Answer Body */}
//                 <div 
//                   className={`overflow-hidden transition-all duration-500 ease-in-out ${
//                     isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
//                   }`}
//                 >
//                   <div className="px-6 pb-6 pt-2 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-50">
//                     {item.question === "Do you provide a written purity report?" ? (
//                       <p>
//                         Yes, we provide a detailed purity certificate mentioning karat,
//                         purity percentage and weight details that you can use while
//                         selling or remaking jewellery.{" "}
//                         <Link
//                           to="/blogs/how-to-check-gold-purity-before-you-buy"
//                           className="text-[#b79654] font-semibold hover:underline inline-flex items-center gap-1"
//                         >
//                           Learn more about reports →
//                         </Link>
//                       </p>
//                     ) : (
//                       item.answer
//                     )}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom Support Link */}
//         <div className="mt-12 text-center p-8 rounded-[2rem] bg-[#b79654]/5 border border-[#b79654]/10">
//           <p className="text-gray-700 font-medium">Still have questions?</p>
//           <Link 
//             to="/contact" 
//             className="mt-2 inline-block text-[#b79654] font-bold hover:underline"
//           >
//             Contact our specialists today
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;

import React, { useState } from "react";
import { IoChevronDown, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const FAQSection = ({ title = "Frequently asked questions", faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs || !faqs.length) return null;

  return (
    <section className="w-full bg-[#f8f9fa] py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* --- MAIN ENCLOSING DIV --- */}
        <div className="bg-white border border-black-100 shadow-2xl shadow-gray-200/50 rounded-[2.5rem] p-6 md:p-12">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center space-x-2 mb-4">
              <span className="h-px w-6 bg-[rgb(207,160,79)]"></span>
              <span className="text-[rgb(207,160,79)] font-bold tracking-[0.4em] uppercase text-[10px]">
                Expertise
              </span>
              <span className="h-px w-6 bg-[rgb(207,160,79)]"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[rgb(48,62,73)] mb-4">
              {title}
            </h2>
            <p className="text-gray-500 text-sm italic">
              Transparency in every test, clarity in every answer.
            </p>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`transition-all duration-500 rounded-2xl ${
                    isOpen 
                      ? "bg-gradient-to-br from-gray-50 to-white ring-1 ring-[rgb(207,160,79)]/20 shadow-md" 
                      : "hover:bg-gray-50/50 border border-transparent hover:border-gray-100"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                  >
                    <span className={`text-base md:text-lg font-serif transition-all duration-300 ${
                      isOpen ? "text-[rgb(207,160,79)] font-bold translate-x-2" : "text-[rgb(48,62,73)]"
                    }`}>
                      {item.question}
                    </span>
                    
                    <div className={`flex items-center justify-center rounded-full w-10 h-10 transition-all duration-500 ${
                      isOpen 
                        ? "bg-[rgb(48,62,73)] text-white rotate-180 shadow-lg shadow-[rgb(48,62,73)]/20" 
                        : "bg-white text-gray-400 border border-gray-100"
                    }`}>
                      <IoChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-8 pb-6 pt-0 text-gray-600 text-sm md:text-base leading-relaxed">
                      <div className="h-px w-full bg-gradient-to-r from-[rgb(207,160,79)]/30 to-transparent mb-4"></div>
                      {item.question === "Do you provide a written purity report?" ? (
                        <p>
                          Yes, we provide a detailed purity certificate mentioning karat,
                          purity percentage and weight details.{" "}
                          <Link
                            to="/blogs/how-to-check-gold-purity-before-you-buy"
                            className="text-[rgb(207,160,79)] font-bold hover:underline"
                          >
                            Read about reports →
                          </Link>
                        </p>
                      ) : (
                        item.answer
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Integrated CTA */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[rgb(207,160,79)]/10 rounded-full flex items-center justify-center text-[rgb(207,160,79)]">
                <IoChatbubbleEllipsesOutline size={24} />
              </div>
              <div className="text-left">
                <p className="text-[rgb(48,62,73)] font-bold text-sm">Still confused?</p>
                <p className="text-gray-400 text-xs uppercase tracking-widest">Our experts are online</p>
              </div>
            </div>
            <Link 
              to="/contact" 
              className="bg-[rgb(48,62,73)] text-white px-10 py-3 rounded-full font-bold hover:bg-[rgb(207,160,79)] hover:text-black transition-all duration-300 shadow-lg shadow-[rgb(48,62,73)]/10 text-sm"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;