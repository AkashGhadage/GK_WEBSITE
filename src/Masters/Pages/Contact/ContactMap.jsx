import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactMap = () => {
  const handleCopyAddress = () => {
    navigator.clipboard.writeText(
      "Ground Floor, 32/3175, Gali Number 32, below Northern Railway Ticket Office, Block 33, Beadonpura, Karol Bagh, New Delhi, Delhi, 110005, India",
    );
  };

  const handleCopyPhone1 = () => {
    navigator.clipboard.writeText("+91 9075516373");
  };

  const handleCopyPhone2 = () => {
    navigator.clipboard.writeText("+91 7011675610");
  };

  return (
    <div className="w-full bg-white/90 backdrop-blur-xl py-8 lg:py-12 rounded-3xl shadow-2xl border border-white/50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Map Section */}
        <div className="w-full h-[350px] lg:h-[450px] rounded-2xl overflow-hidden shadow-xl">
          <iframe
            title="Gurukrupa Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14001.1234!2d77.1901724!3d28.6519174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03a89277a621%3A0x52ff6ffc6ace99e8!2sGURUKRUPA%20COMPUTERIZED%20TUNCH%20%26%20LASER%20SOLDERING%20CENTRE!5e0!3m2!1sen!2sin!4v1700000000000"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact Details */}
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            Head Office
          </h2>

          {/* Address */}
          <div
            className="flex items-start gap-4 group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg p-2 rounded-xl hover:bg-gradient-to-r hover:from-[rgb(207,160,79)]/10"
            onClick={handleCopyAddress}
            title="Click to copy address"
          >
            <div className="bg-[rgb(207,160,79)] p-3 rounded-full text-white flex-shrink-0 group-hover:scale-110 group-hover:bg-[#CFA04F] transition-all duration-300">
              <MapPin size={24} />
            </div>
            <p className="text-gray-700 leading-relaxed text-base lg:text-lg max-w-md group-hover:text-[rgb(207,160,79)] group-hover:font-semibold transition-colors duration-300">
              Ground Floor, 32/3175, Gali Number 32, below Northern Railway
              Ticket Office, Block 33, Beadonpura, Karol Bagh, New Delhi, Delhi,
              110005, India
            </p>
          </div>

          {/* Phone */}
          <div
            className="flex items-start gap-4 group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg p-2 rounded-xl hover:bg-gradient-to-r hover:from-[rgb(207,160,79)]/10"
            title="Click individual numbers to copy"
          >
            <div className="bg-[rgb(207,160,79)] p-3 rounded-full text-white flex-shrink-0 group-hover:scale-110 group-hover:bg-[#CFA04F] transition-all duration-300">
              <Phone size={24} />
            </div>
            <div className="space-y-3">
              <p
                className="text-lg font-semibold text-gray-700 cursor-pointer hover:text-[rgb(134,104,53)] transition-colors duration-300 pr-2"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopyPhone1();
                }}
                title="Click to copy +91 9075516373"
              >
                +91 9075516373
              </p>
              <p
                className="text-lg font-semibold text-gray-700 cursor-pointer hover:text-[rgb(207,160,79)] transition-colors duration-300 pr-2"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopyPhone2();
                }}
                title="Click to copy +91 7011675610"
              >
                +91 7011675610
              </p>
            </div>
          </div>

          {/* Email */}
          <div
            className="flex items-start gap-4 group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg p-2 rounded-xl hover:bg-gradient-to-r hover:from-[rgb(207,160,79)]/10"
            title="Click to copy email"
            onClick={() =>
              navigator.clipboard.writeText("gurukrupagoldtunch@gmail.com")
            }
          >
            <div className="bg-[rgb(207,160,79)] p-3 rounded-full text-white flex-shrink-0 group-hover:scale-110 group-hover:bg-[#CFA04F] transition-all duration-300">
              <Mail size={24} />
            </div>
            <p className="text-gray-700 text-lg font-semibold underline hover:no-underline group-hover:text-[rgb(207,160,79)] transition-colors duration-300">
              gurukrupagoldtunch@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
