import React, { useState } from "react";
import statesWithCities from "../../../../states-districts.json";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    state: "",
    city: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxC3fzT_HAJNQkUyAkSkJ_fH7_vlPTrN7KExXuvcebOcPQgEl3FfOe12NPJ1E5XJJMs/exec";

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "state") {
      // Reset city when state changes
      setFormData({
        ...formData,
        state: value,
        city: ""
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  // Handle form submit
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
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      setStatus("✅ Thank you! Your message has been sent successfully.");
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        state: "",
        city: "",
        message: ""
      });
    } catch {
      setStatus("❌ Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="text-gray-500 mt-2">
            We'd love to hear from you. Please fill out the form below.
          </p>
        </div>

        {status && (
          <div
            className={`mb-6 p-4 rounded-lg text-center font-medium border ${
              status.includes("✅")
                ? "bg-green-50 text-green-800 border-green-200"
                : "bg-red-50 text-red-800 border-red-200"
            }`}
          >
            {status}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-black placeholder-gray-400 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-black placeholder-gray-400 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20"
              />
            </div>
          </div>

          {/* Email & Service */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-black placeholder-gray-400 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Service <span className="text-red-500">*</span>
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-black bg-white focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20"
              >
                <option value="">Select Service</option>
                <option>Gold Jewellery</option>
                <option>Diamond Jewellery</option>
                <option>Custom Design</option>
                <option>Repair</option>
              </select>
            </div>
          </div>

          {/* State & City */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State <span className="text-red-500">*</span>
              </label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-black bg-white focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20"
              >
                <option value="">Select State</option>
                {Object.keys(statesWithCities).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City <span className="text-red-500">*</span>
              </label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                disabled={!formData.state || isLoading}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-black bg-white focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20"
              >
                <option value="">Select City</option>
                {formData.state &&
                  statesWithCities[formData.state].map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-black placeholder-gray-400 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 resize-vertical"
            />
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className={`px-10 py-3 rounded-full font-medium shadow-lg transition-all duration-300 ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed text-white shadow-none"
                  : "bg-red-600 text-white hover:bg-red-700 hover:shadow-xl"
              }`}
            >
              {isLoading ? "Sending..." : "Submit Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
