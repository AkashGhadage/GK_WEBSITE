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
    message: "",
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
        city: "",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
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
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setStatus("✅ Thank you! Your message has been sent successfully.");
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
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
    <div
      className="w-full grid grid-cols-1 md:grid-cols-2"
      style={{ height: "calc(100vh + 35vh)" }} 
    >
      {/* LEFT SIDE – FORM (UNCHANGED) */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 md:p-12 overflow-hidden">
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

          {/* 👇 YOUR FORM – EXACTLY SAME */}
          <form onSubmit={handleSubmit} className="space-y-7">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="h-[46px] w-full rounded-md border border-gray-300 px-4 text-black focus:border-black focus:ring-2 focus:ring-black/20"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="h-[46px] w-full rounded-md border border-gray-300 px-4 text-black focus:border-black focus:ring-2 focus:ring-black/20"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="h-[46px] w-full rounded-md border border-gray-300 px-4 text-black focus:border-black focus:ring-2 focus:ring-black/20"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">
                  Service <span className="text-red-500">*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="h-[46px] w-full rounded-md border border-gray-300 px-4 bg-white text-black focus:border-black focus:ring-2 focus:ring-black/20"
                >
                  <option value="">Select Service</option>
                  <option>Gold Jewellery</option>
                  <option>Diamond Jewellery</option>
                  <option>Custom Design</option>
                  <option>Repair</option>
                </select>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">
                  State <span className="text-red-500">*</span>
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="h-[46px] w-full rounded-md border border-gray-300 px-4 bg-white text-black focus:border-black focus:ring-2 focus:ring-black/20"
                >
                  <option value="">Select State</option>
                  {Object.keys(statesWithCities).map((state) => (
                    <option key={state}>{state}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">
                  City <span className="text-red-500">*</span>
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  disabled={!formData.state || isLoading}
                  className="h-[46px] w-full rounded-md border border-gray-300 px-4 bg-white text-black focus:border-black focus:ring-2 focus:ring-black/20"
                >
                  <option value="">Select City</option>
                  {formData.state &&
                    statesWithCities[formData.state].map((city) => (
                      <option key={city}>{city}</option>
                    ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-black focus:border-black focus:ring-2 focus:ring-black/20 resize-none"
              />
            </div>

            {/* Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={isLoading}
                className={`px-12 py-3 rounded-full font-medium transition ${
                  isLoading
                    ? "bg-gray-400 text-white"
                    : "bg-black text-white hover:bg-gray-900"
                }`}
              >
                {isLoading ? "Sending..." : "Submit Message"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE – IMAGE */}
      <div className="hidden md:block relative h-full">
        <img
          src="/contact-image.jpg"
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
    </div>
  );  
};

export default Contact;
