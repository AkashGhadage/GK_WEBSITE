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

  const whatsappNumber = "+917011675610";
  const whatsappMessage =
    "Hello, I would like to get more information about your services.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxyLMMD7oVPKFON3GLkTRlVLSt13hdFSsROfkA_C6rmQ1txN_fpaNnCz4wFW7mVnUgkwg/exec";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // VALIDATION LOGIC: Check for missing fields before sending
    if (
      !formData.name ||
      !formData.phone ||
      !formData.state ||
      !formData.city ||
      formData.service.length === 0 ||
      !formData.message
    ) {
      setStatus("Please fill in all required fields and select a service.");
      setTimeout(() => setStatus(""), 3000);
      return;
    }

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

      setStatus("Thank you! Your message has been sent successfully.");
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
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.28em] text-[#b79654] uppercase mb-3">
            Get in touch
          </p>

          <h1 className="text-[24px] md:text-[30px] font-serif font-bold uppercase tracking-[0.10em] text-gray-900 leading-snug">
            Talk to Our Gold Testing Experts
          </h1>

          <p className="mt-4 text-xs md:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Connect with our laboratory experts for gold & silver purity
            analysis, advanced XRF testing, precision laser soldering, or
            professional jewellery restoration. We provide honest guidance and
            expert service for every piece.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch mb-12 lg:mb-16">
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
                      disabled={isLoading}
                      className="w-full h-11 px-4 rounded-xl border border-gray-300 bg-white/70 backdrop-blur-sm text-sm md:text-base text-gray-900 focus:border-[#b79654] focus:ring-2 focus:ring-[#b79654]/20 transition-all disabled:opacity-60"
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
                      disabled={isLoading}
                      className="w-full h-11 px-4 rounded-xl border border-gray-300 bg-white/70 backdrop-blur-sm text-sm md:text-base text-gray-900 focus:border-[#b79654] focus:ring-2 focus:ring-[#b79654]/20 transition-all disabled:opacity-60"
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
                    className="w-full h-11 px-4 rounded-xl border border-gray-300 bg-white/70 backdrop-blur-sm text-sm md:text-base text-gray-900 focus:border-[#b79654] focus:ring-2 focus:ring-[#b79654]/20 transition-all disabled:opacity-60"
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
                      disabled={isLoading}
                      className="w-full h-11 px-4 rounded-xl border border-gray-300 bg-white/70 backdrop-blur-sm text-sm md:text-base text-gray-900 focus:border-[#b79654] focus:ring-2 focus:ring-[#b79654]/20 transition-all disabled:opacity-60"
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
                      disabled={!formData.state || isLoading}
                      className="w-full h-11 px-4 rounded-xl border border-gray-300 bg-white/70 backdrop-blur-sm text-sm md:text-base text-gray-900 focus:border-[#b79654] focus:ring-2 focus:ring-[#b79654]/20 transition-all disabled:opacity-60"
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {serviceOptions.map((service) => (
                      <label
                        key={service}
                        className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white/70 px-3 py-2 text-xs md:text-sm text-gray-900 hover:border-[#b79654] hover:bg-white cursor-pointer transition"
                      >
                        <input
                          type="checkbox"
                          name="service"
                          value={service}
                          checked={formData.service.includes(service)}
                          onChange={handleChange}
                          disabled={isLoading}
                          className="h-4 w-4 rounded border-gray-300 text-[#b79654] focus:ring-[#b79654]"
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
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/70 backdrop-blur-sm text-sm md:text-base text-gray-900 focus:border-[#b79654] focus:ring-2 focus:ring-[#b79654]/20 transition-all disabled:opacity-60"
                    placeholder="Tell us about your jewellery project..."
                  />
                </div>

                {/* Submit Button - Updated to GOLD color and clickable for validation */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full h-12 rounded-full font-bold tracking-widest uppercase text-sm transition-all duration-300 
                    ${
                      isLoading
                        ? "bg-[#967a42] cursor-not-allowed text-white opacity-80"
                        : "bg-[#b79654] text-white hover:bg-[#967a42] hover:shadow-lg active:scale-[0.98] shadow-md shadow-[#b79654]/20"
                    }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:order-2 h-full flex">
            <div className="relative h-[320px] md:h-[360px] lg:h-full w-full rounded-2xl overflow-hidden shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#CFA04F]/10 via-[#b79654]/5 to-[#AA771C]/10"></div>
              <img
                src="/contact-image.jpg"
                alt="Premium Jewellery Craftsmanship"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-xl rounded-xl p-3 md:p-4 lg:p-5 border border-white/50 shadow-lg">
                  <h3 className="text-lg lg:text-xl font-serif font-black text-[#b79654] mb-2">
                    Visit Our Lab
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    Walk in with your jewellery and walk out with clear reports.
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-2.5 h-2.5 bg-[#b79654] rounded-full animate-ping"></div>
                    <span className="text-xs font-semibold text-[#b79654]">
                      Open 10AM - 9PM Daily
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <MapSection />
      </div>

      {/* Success/Error popup */}
      {status && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center pointer-events-none px-4">
          <div className="pointer-events-auto rounded-2xl bg-white shadow-2xl border border-gray-200 px-6 py-4 flex items-center gap-3 animate-[fadeIn_0.2s_ease-out]">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-white text-sm font-bold ${
                status.includes("Thank you") ? "bg-emerald-500" : "bg-rose-500"
              }`}
            >
              {status.includes("Thank you") ? "✓" : "!"}
            </div>
            <p className="text-sm md:text-base text-gray-800">{status}</p>
          </div>
        </div>
      )}

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
  );
};

export default Contact;
