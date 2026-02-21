import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const whatsappNumber = "+919975796681";
  const whatsappMessage =
    "Hello, I'm interested in your gold testing services. Please share more details.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Show tooltip after 5 seconds on first visit
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setShowTooltip(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  // Auto-hide tooltip after 8 seconds
  useEffect(() => {
    if (showTooltip) {
      const timer = setTimeout(() => setShowTooltip(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [showTooltip]);

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="animate-fade-in bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 max-w-[240px] relative">
          <button
            onClick={() => {
              setShowTooltip(false);
              setDismissed(true);
            }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X size={12} className="text-gray-500" />
          </button>
          <p className="text-sm font-semibold text-gray-800 mb-1">
            Need help with gold testing?
          </p>
          <p className="text-xs text-gray-500">
            Chat with our expert on WhatsApp for instant guidance.
          </p>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse-gold"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
