import React, { useState } from "react";
import statesWithCities from "../../../../states-districts.json";
import MapSection from "./ContactMap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: [],
    state: "",
    city: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxC3fzT_HAJNQkUyAkSkJ_fH7_vlPTrN7KExXuvcebOcPQgEl3FfOe12NPJ1E5XJJMs/exec";

  const serviceOptions = [
    "Computer Touch",
    "Metal Testing",
    "Laser Sholdering",
    "Jewellery Repairing",
  ];

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "state") {
      setFormData({
        ...formData,
        state: value,
        city: "",
      });
    } else if (name === "service") {
      const currentServices = formData.service;
      if (checked) {
        setFormData({
          ...formData,
          service: [...currentServices, value],
        });
      } else {
        setFormData({
          ...formData,
          service: currentServices.filter((service) => service !== value),
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const hasServiceSelected = formData.service.length > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("FORM DATA:", formData);
    setIsLoading(true);
    setStatus("");

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setStatus("✅ Thank you! Your message has been sent successfully.");
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: [],
        state: "",
        city: "",
        message: "",
      });

      setTimeout(() => setStatus(""), 2500);
    } catch {
      setStatus("❌ Something went wrong. Please try again.");
      setTimeout(() => setStatus(""), 2500);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen  bg-gray-100 from-amber-50 via-white to-rose-50/50 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative max-w-5xl mx-auto">
        {/* Hero Section - meaningful copy */}
        <div className="text-center mb-12">
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.28em] text-amber-700 uppercase mb-3">
            Get in touch
          </p>

          <h1 className="text-[24px] md:text-[30px] font-light uppercase tracking-[0.20em] text-gray-900 leading-snug">
            Talk to your metal testing - laser soldering expert
          </h1>

          <p className="mt-4 text-xs md:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Connect with our laboratory experts for unmatched accuracy in gold and silver purity analysis. Whether you require advanced XRF computer gold & silver , high-precision laser soldering, or professional jewelry restoration, we provide clear guidance and master-level service for every piece.
          </p>
        </div>

        {/* Main Content Grid */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch mb-12 lg:mb-16">
          {/* Contact Form */}
          <div className="lg:order-1 h-full flex">
            <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 lg:p-7 border border-white/60 shadow-xl flex-1 flex flex-col">
              <form
                onSubmit={handleSubmit}
                className="space-y-5 flex-1 flex flex-col"
              >
                {/* Name & Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2 tracking-wide">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="w-full h-11 px-4 rounded-xl border border-gray-300 bg-white/70 backdrop-blur-sm text-sm md:text-base text-gray-900 focus:border-[rgb(48,62,73)] focus:ring-2 focus:ring-[rgb(48,62,73)]/20 transition-all disabled:opacity-60"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2 tracking-wide">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="w-full h-11 px-4 rounded-xl border border-gray-300 bg-white/70 backdrop-blur-sm text-sm md:text-base text-gray-900 focus:border-[rgb(48,62,73)] focus:ring-2 focus:ring-[rgb(48,62,73)]/20 transition-all disabled:opacity-60"
                      placeholder="+91"
                    />
                  </div>
                </div>

                {/* Email Row */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2 tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full h-11 px-4 rounded-xl border border-gray-300 bg-white/70 backdrop-blur-sm text-sm md:text-base text-gray-900 focus:border-[rgb(48,62,73)] focus:ring-2 focus:ring-[rgb(48,62,73)]/20 transition-all disabled:opacity-60"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* State & City Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2 tracking-wide">
                      State <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="w-full h-11 px-4 rounded-xl border border-gray-300 bg-white/70 backdrop-blur-sm text-sm md:text-base text-gray-900 focus:border-[rgb(48,62,73)] focus:ring-2 focus:ring-[rgb(48,62,73)]/20 transition-all disabled:opacity-60"
                    >
                      <option value="">Select your state</option>
                      {Object.keys(statesWithCities).map((state) => (
                        <option key={state}>{state}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2 tracking-wide">
                      City <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      disabled={!formData.state || isLoading}
                      className="w-full h-11 px-4 rounded-xl border border-gray-300 bg-white/70 backdrop-blur-sm text-sm md:text-base text-gray-900 focus:border-[rgb(48,62,73)] focus:ring-2 focus:ring-[rgb(48,62,73)]/20 transition-all disabled:opacity-60"
                    >
                      <option value="">Select your city</option>
                      {formData.state &&
                        statesWithCities[formData.state].map((city) => (
                          <option key={city}>{city}</option>
                        ))}
                    </select>
                  </div>
                </div>

                {/* Services Row */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2 tracking-wide">
                    Services Needed <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {serviceOptions.map((service) => (
                      <label
                        key={service}
                        className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white/70 px-3 py-2 text-xs md:text-sm text-gray-900 hover:border-[rgb(207,160,79)] hover:bg-white cursor-pointer transition"
                      >
                        <input
                          type="checkbox"
                          name="service"
                          value={service}
                          checked={formData.service.includes(service)}
                          onChange={handleChange}
                          disabled={isLoading}
                          className="h-4 w-4 rounded border-gray-300 text-[rgb(48,62,73)] focus:ring-[rgb(48,62,73)]"
                        />
                        <span>{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2 tracking-wide">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/70 backdrop-blur-sm text-sm md:text-base text-gray-900 focus:border-[rgb(48,62,73)] focus:ring-2 focus:ring-[rgb(48,62,73)]/20 transition-all disabled:opacity-60"
                    placeholder="Tell us about your jewellery project or requirement..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading || !hasServiceSelected}
                  className={` ${isLoading || !hasServiceSelected
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : "*:"
                    }`}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>


              </form>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:order-2 h-full flex">
            <div className="relative h-[320px] md:h-[360px] lg:h-full w-full rounded-2xl overflow-hidden shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/15 via-rose-500/10 to-amber-600/15"></div>
              <img
                src="/contact-image.jpg"
                alt="Premium Jewellery Craftsmanship"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-xl rounded-xl p-4 lg:p-5 border border-white/50 shadow-lg">
                  <h3 className="text-lg lg:text-xl font-black text-gray-900 mb-2 bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                    Visit Our Lab
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    Walk in with your jewellery and walk out with clear,
                    transparent purity reports.
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-2.5 h-2.5 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full animate-ping"></div>
                    <span className="text-xs font-semibold text-amber-700">
                      Open 10AM - 9PM Daily
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map & Contact Info Section */}
        <MapSection />
      </div>

      {/* Centered success/error popup */}
      {status && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center pointer-events-none">
          <div className="pointer-events-auto rounded-2xl bg-white shadow-2xl border border-gray-200 px-6 py-4 flex items-center gap-3 animate-[fadeIn_0.2s_ease-out]">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-white text-sm font-bold ${status.includes("✅") ? "bg-emerald-500" : "bg-rose-500"
                }`}
            >
              {status.includes("✅") ? "✓" : "!"}
            </div>
            <p className="text-sm md:text-base text-gray-800">{status}</p>
          </div>

          <style jsx>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(6px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </div>
      )}

      {/* Custom CSS Styles */}
      <style jsx>{`
        @keyframes tilt {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(2deg);
          }
        }
        .animate-tilt {
          animation: tilt 10s ease-in-out infinite;
        }
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #f59e0b, #f43f5e);
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
};

export default Contact;
