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

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "state") {
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
    <div className="w-full min-h-[calc(100vh-80px)] bg-gray-100 flex flex-col md:flex-row">
      {/* LEFT SIDE – FORM (55%) */}
      <div className="w-full md:w-[55%] flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide">
              Get in Touch
            </h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              We'd love to hear from you. Please fill out the form below.
            </p>
          </div>

          {/* Status message */}
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

          {/* Form */}
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
                  className="h-[46px] w-full rounded-md border border-gray-300 px-4 text-black focus:border-[rgb(48,62,73)] focus:ring-2 focus:ring-[rgb(48,62,73)]/30"
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
                  className="h-[46px] w-full rounded-md border border-gray-300 px-4 text-black focus:border-[rgb(48,62,73)] focus:ring-2 focus:ring-[rgb(48,62,73)]/30"
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
                  className="h-[46px] w-full rounded-md border border-gray-300 px-4 text-black focus:border-[rgb(48,62,73)] focus:ring-2 focus:ring-[rgb(48,62,73)]/30"
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
                  className="h-[46px] w-full rounded-md border border-gray-300 px-4 bg-white text-black focus:border-[rgb(48,62,73)] focus:ring-2 focus:ring-[rgb(48,62,73)]/30"
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
                  className="h-[46px] w-full rounded-md border border-gray-300 px-4 bg-white text-black focus:border-[rgb(48,62,73)] focus:ring-2 focus:ring-[rgb(48,62,73)]/30"
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
                  className="h-[46px] w-full rounded-md border border-gray-300 px-4 bg-white text-black focus:border-[rgb(48,62,73)] focus:ring-2 focus:ring-[rgb(48,62,73)]/30"
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
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-black focus:border-[rgb(48,62,73)] focus:ring-2 focus:ring-[rgb(48,62,73)]/30 resize-none"
              />
            </div>

            {/* Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className={`px-12 py-3 rounded-full font-semibold tracking-wide
                            transition-all duration-300 shadow-md hover:shadow-lg
                            ${
                              isLoading
                                ? "bg-gray-400 text-white cursor-not-allowed"
                                : "bg-[rgb(48,62,73)] text-white border border-[rgb(207,160,79)] hover:bg-[rgb(207,160,79)] hover:text-black"
                            }`}
              >
                {isLoading ? "Sending..." : "Submit Message"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE – IMAGE (45%) */}
      <div className="w-full md:w-[45%] relative hidden md:block">
        <img
          src="/contact-image.jpg"
          alt="Contact"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </div>
  );
};

export default Contact;
