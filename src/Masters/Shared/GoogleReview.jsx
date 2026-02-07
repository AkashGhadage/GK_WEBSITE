import React from "react";
import { FaStar, FaQuoteLeft, FaCheckCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const ClientTestimonials = () => {
  const testimonials = [
    {
      name: "Amit Deshmukh",
      role: "Jewelry Investor",
      text: "The precision at Nagesh Touch Lab is unmatched. I've used their computerized testing for over 5 years. The reports are instant and highly detailed.",
      rating: 5,
    },
    {
      name: "Sneha Kapoor",
      role: "Retail Customer",
      text: "Extremely transparent process. They tested my family gold right in front of me without any melting or damage. Truly a trusted name in Kalyan.",
      rating: 5,
    },
    {
      name: "Rajesh Zaveri",
      role: "Professional Jeweler",
      text: "As a jeweler, accuracy is everything. Their German XRF technology gives me the confidence to provide the best value to my own clients.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-[#fcfaf7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[#b79654]"></div>
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#b79654] uppercase">
              Real Experiences
            </span>
            <div className="h-px w-8 bg-[#b79654]"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 leading-tight">
            What our <span className="text-[#b79654] italic font-light">Clients</span> say
          </h2>
          <p className="text-gray-500 text-lg">
            Building trust through transparency and precision, one test at a time.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-[#b79654]/10 hover:border-[#b79654]/20 transition-all duration-500"
            >
              {/* Floating Quote Icon */}
              <div className="absolute -top-5 left-10 w-12 h-12 bg-[#b79654] rounded-2xl flex items-center justify-center shadow-lg shadow-[#b79654]/30 transform group-hover:-translate-y-2 transition-transform">
                <FaQuoteLeft className="text-white text-xl" />
              </div>

              <div className="space-y-6 pt-4">
                <div className="flex text-[#fabb05] gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>

                <p className="text-stone-600 text-lg leading-relaxed italic">
                  "{item.text}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                  <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-[#b79654] font-bold font-serif">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 flex items-center gap-2">
                      {item.name}
                      <FaCheckCircle className="text-blue-500 text-xs" />
                    </h4>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Bar */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
           <div className="flex items-center gap-2">
             <FcGoogle size={32} />
             <span className="font-bold text-stone-800">4.9/5 Rating</span>
           </div>
           <div className="h-8 w-px bg-stone-300 hidden md:block"></div>
           <p className="text-stone-800 font-bold uppercase tracking-[0.2em] text-xs">Verified Lab Reports</p>
           <div className="h-8 w-px bg-stone-300 hidden md:block"></div>
           <p className="text-stone-800 font-bold uppercase tracking-[0.2em] text-xs">Govt. Certified Purity</p>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;