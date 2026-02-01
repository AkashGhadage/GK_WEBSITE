// src/Masters/Shared/FAQSection.jsx
import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-router-dom";

const FAQSection = ({ title = "Frequently asked questions", faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs || !faqs.length) return null;

  return (
    <section className="w-full bg-gray-50 border-t border-gray-200 py-16 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.28em] text-gray-500 uppercase mb-2">
            FAQ
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {title}
          </h2>
          <p className="mt-3 text-xs md:text-sm text-gray-500 max-w-2xl mx-auto">
            Answers to common questions about our testing, purity reports and visit experience.[web:194]
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-200 bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                {/* Header */}
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex((prev) => (prev === index ? null : index))
                  }
                  className={
                    `w-full flex items-center justify-between px-4 md:px-5 py-3.5 md:py-4 text-left transition-colors duration-200 ` +
                    (isOpen
                      ? "bg-[#b79654] text-white"
                      : "bg-white hover:bg-[#b79654] hover:text-white")
                  }
                >
                  <span className="text-sm md:text-base font-medium">
                    {item.question}
                  </span>
                  <span
                    className={`ml-3 flex items-center justify-center rounded-full border w-7 h-7 text-xs transition-all duration-200 ${
                      isOpen
                        ? "border-white text-white bg-[#a58545]"
                        : "border-gray-300 text-gray-500 bg-white"
                    }`}
                  >
                    <IoChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`px-4 md:px-5 text-xs md:text-sm text-gray-600 transition-all duration-200 ${
                    isOpen
                      ? "pb-4 pt-0 max-h-40 md:max-h-56"
                      : "max-h-0 overflow-hidden pb-0"
                  }`}
                >
                  <div className="border-t border-gray-200 pt-3 mt-1 bg-white">
                    {item.question === "Do you provide a written purity report?" ? (
                      <p className="text-xs md:text-sm text-gray-600">
                        Yes, we provide a detailed purity certificate mentioning karat,
                        purity percentage and weight details that you can use while
                        selling or remaking jewellery.{" "}
                        <Link
                          to="/blogs/how-to-check-gold-purity-before-you-buy"
                          className="text-[#b79654] font-medium hover:underline"
                        >
                          Click here to know more about testing report.
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
      </div>
    </section>
  );
};

export default FAQSection;
