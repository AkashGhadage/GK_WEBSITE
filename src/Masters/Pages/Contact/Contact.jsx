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
    "Gold Jewellery",
    "Diamond Jewellery", 
    "Custom Design",
    "Repair"
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
    } catch {
      setStatus("❌ Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50/50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-rose-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-64 h-64 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-24 lg:mb-32">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-100 to-rose-100 border border-amber-200/50 mb-8">
            <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-medium text-amber-800">Ready to create something beautiful?</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-gray-900 via-black to-amber-900 bg-clip-text text-transparent mb-6 leading-tight">
            GET IN<br className="hidden lg:block"/> TOUCH
          </h1>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
            Let's discuss your jewellery needs and create something extraordinary together.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24 lg:mb-32">
          
          {/* Contact Form */}
          <div className="lg:order-1">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-50 to-rose-50 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl p-8 lg:p-12 border border-white/50 shadow-2xl">
                
                {/* Status Message */}
                {status && (
                  <div className={`mb-10 p-6 rounded-2xl text-center font-semibold shadow-lg transform transition-all duration-500 ${
                    status.includes("✅")
                      ? "bg-gradient-to-r from-emerald-500/10 to-green-500/10 border-2 border-emerald-200 text-emerald-800"
                      : "bg-gradient-to-r from-rose-500/10 to-red-500/10 border-2 border-rose-200 text-rose-800"
                  }`}>
                    {status}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name & Phone Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-field">
                      <label className="block text-sm font-bold text-gray-900 mb-3 tracking-wide">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className="w-full h-14 px-4 lg:px-5 rounded-2xl border-2 border-gray-200 bg-white/60 backdrop-blur-sm text-lg font-medium text-gray-900 focus:border-black focus:ring-4 focus:ring-black/10 transition-all duration-300 group-hover:border-gray-300 disabled:opacity-50"
                      placeholder="Enter your name"
                      />
                    </div>
                    <div className="form-field">
                      <label className="block text-sm font-bold text-gray-900 mb-3 tracking-wide">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                         className="w-full h-14 px-4 lg:px-5 rounded-2xl border-2 border-gray-200 bg-white/60 backdrop-blur-sm text-lg font-medium text-gray-900 focus:border-black focus:ring-4 focus:ring-black/10 transition-all duration-300 group-hover:border-gray-300 disabled:opacity-50"
                        placeholder="+91"
                      />
                    </div>
                  </div>

                  {/* Email & Services Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-field">
                      <label className="block text-sm font-bold text-gray-900 mb-3 tracking-wide">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                         className="w-full h-14 px-4 lg:px-5 rounded-2xl border-2 border-gray-200 bg-white/60 backdrop-blur-sm text-lg font-medium text-gray-900 focus:border-black focus:ring-4 focus:ring-black/10 transition-all duration-300 group-hover:border-gray-300 disabled:opacity-50"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="form-field">
                      <label className="block text-sm font-bold text-gray-900 mb-3 tracking-wide">Services Needed *</label>
                      <div className="service-grid">
                        {serviceOptions.map((service) => (
                          <label key={service} className="service-checkbox">
                            <input
                              type="checkbox"
                              name="service"
                              value={service}
                              checked={formData.service.includes(service)}
                              onChange={handleChange}
                              disabled={isLoading}
                            />
                            <span className="service-label">{service}</span>
                          </label>
                        ))}
                      </div>
                      {!hasServiceSelected && !isLoading && (
                        <p className="mt-2 text-sm text-rose-600 font-medium flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          Please select at least one service
                        </p>
                      )}
                    </div>
                  </div>

                  {/* State & City Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-field">
                      <label className="block text-sm font-bold text-gray-900 mb-3 tracking-wide">State *</label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                         className="w-full h-14 px-4 lg:px-5 rounded-2xl border-2 border-gray-200 bg-white/60 backdrop-blur-sm text-lg font-medium text-gray-900 focus:border-black focus:ring-4 focus:ring-black/10 transition-all duration-300 group-hover:border-gray-300 disabled:opacity-50"
                      >
                        <option value="">Select your state</option>
                        {Object.keys(statesWithCities).map((state) => (
                          <option key={state}>{state}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-field">
                      <label className="block text-sm font-bold text-gray-900 mb-3 tracking-wide">City *</label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        disabled={!formData.state || isLoading}
                         className="w-full h-14 px-4 lg:px-5 rounded-2xl border-2 border-gray-200 bg-white/60 backdrop-blur-sm text-lg font-medium text-gray-900 focus:border-black focus:ring-4 focus:ring-black/10 transition-all duration-300 group-hover:border-gray-300 disabled:opacity-50"
                      >
                        <option value="">Select your city</option>
                        {formData.state &&
                          statesWithCities[formData.state].map((city) => (
                            <option key={city}>{city}</option>
                          ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="form-field">
                    <label className="block text-sm font-bold text-gray-900 mb-3 tracking-wide">Your Message *</label>
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                       className="w-full h-14 px-4 lg:px-5 rounded-2xl border-2 border-gray-200 bg-white/60 backdrop-blur-sm text-lg font-medium text-gray-900 focus:border-black focus:ring-4 focus:ring-black/10 transition-all duration-300 group-hover:border-gray-300 disabled:opacity-50"
                      placeholder="Tell us more about your jewellery project, requirements, or any specific designs you're envisioning..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading || !hasServiceSelected}
                    className="w-full bg-gradient-to-r from-amber-500 via-rose-500 to-amber-600 hover:from-amber-600 hover:via-rose-600 hover:to-amber-700 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border-0 focus:ring-4 focus:ring-amber-300/50"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <svg className="w-6 h-6 inline mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:order-2 relative h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-rose-500/10 to-amber-600/20"></div>
            <img
              src="/contact-image.jpg"
              alt="Premium Jewellery Craftsmanship"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/50 shadow-2xl">
                <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-3 bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                  Visit Us Today
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Experience our exquisite collection in person
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full animate-ping"></div>
                  <span className="font-semibold text-amber-700">Open 10AM - 9PM Daily</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map & Contact Info Section */}
        <MapSection />
      </div>

      {/* Custom CSS Styles - Add to your global CSS or Tailwind config */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes tilt {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(2deg); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-tilt { animation: tilt 10s ease-in-out infinite; }
        .form-input, .form-select, .form-textarea {
          @apply w-full px-5 py-4 rounded-2xl border-2 border-gray-200/50 bg-white/70 backdrop-blur-sm text-lg font-semibold text-gray-900 
          focus:border-amber-500 focus:ring-4 focus:ring-amber-500/20 transition-all duration-300 hover:border-amber-300 
          disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md;
        }
        .form-select {
          @apply appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNiA2TDExIDEiIGZpbGw9IiM5Qzk5QUMiIHN0cm9rZT0iIzlDQTlBQSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K')] bg-no-repeat bg-right-4;
        }
        .service-grid {
          @apply space-y-3 max-h-52 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-amber-300 scrollbar-track-transparent;
        }
        .service-checkbox {
          @apply flex items-center p-4 rounded-xl cursor-pointer hover:bg-amber-50/50 hover:shadow-md transition-all duration-200 group;
        }
        .service-checkbox input[type="checkbox"] {
          @apply w-6 h-6 rounded-xl border-2 border-amber-300 bg-white shadow-sm focus:ring-2 focus:ring-amber-500/50 
          transition-all duration-200 mr-4 accent-amber-500 group-hover:scale-110 group-hover:border-amber-400;
        }
        .service-label {
          @apply text-sm lg:text-base font-semibold text-gray-900 select-none group-hover:text-amber-700;
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
