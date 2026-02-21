import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[rgb(23,28,32)] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-[#CFA04F] font-bold tracking-[0.3em] uppercase text-[11px]">
            Legal
          </span>
          <h1 className="text-3xl md:text-5xl font-serif text-white mt-4 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Your privacy is important to us. This policy outlines how Gurukrupa
            Gold collects, uses, and protects your information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <div className="prose prose-gray max-w-none space-y-10">
          {/* Information Collection */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-[#CFA04F] font-serif italic text-3xl">01</span>
              Information We Collect
            </h2>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed pl-10">
              <p>When you use our services or contact us, we may collect:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Your name, phone number, and email address (when you submit a contact form or enquiry).</li>
                <li>Your state and city information for service-related communication.</li>
                <li>Details about the services you are interested in.</li>
                <li>Any messages or information you voluntarily provide through our contact form, WhatsApp, or in-person visits.</li>
              </ul>
              <p>
                We do not collect any financial information, credit card details,
                or sensitive payment data through our website.
              </p>
            </div>
          </div>

          {/* How We Use */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-[#CFA04F] font-serif italic text-3xl">02</span>
              How We Use Your Information
            </h2>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed pl-10">
              <ul className="list-disc pl-5 space-y-2">
                <li>To respond to your enquiries and provide service-related information.</li>
                <li>To communicate about your jewellery testing, repair, or bullion orders.</li>
                <li>To improve our services and customer experience.</li>
                <li>To send relevant updates about our services (only if you have opted in).</li>
              </ul>
              <p>
                We will never sell, rent, or share your personal information with
                third parties for marketing purposes.
              </p>
            </div>
          </div>

          {/* Data Protection */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-[#CFA04F] font-serif italic text-3xl">03</span>
              Data Protection
            </h2>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed pl-10">
              <p>
                We implement reasonable security measures to protect your
                personal information from unauthorized access, alteration, or
                disclosure. However, no method of internet transmission is
                100% secure, and we cannot guarantee absolute security.
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-[#CFA04F] font-serif italic text-3xl">04</span>
              Cookies & Analytics
            </h2>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed pl-10">
              <p>
                Our website may use cookies and analytics tools to understand
                how visitors interact with our site. This data is anonymized and
                used solely for improving the user experience. You can disable
                cookies through your browser settings.
              </p>
            </div>
          </div>

          {/* Third-Party Links */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-[#CFA04F] font-serif italic text-3xl">05</span>
              Third-Party Links
            </h2>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed pl-10">
              <p>
                Our website may contain links to third-party sites (e.g., Google
                Maps, WhatsApp, Google Reviews). We are not responsible for the
                privacy practices or content of these external sites. We
                recommend reviewing their privacy policies independently.
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-[#CFA04F] font-serif italic text-3xl">06</span>
              Your Rights
            </h2>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed pl-10">
              <ul className="list-disc pl-5 space-y-2">
                <li>You may request access to the personal data we hold about you.</li>
                <li>You may request correction or deletion of your personal data.</li>
                <li>You may opt out of any promotional communications at any time.</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us using the
                details below.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">
              Questions About Our Privacy Policy?
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              If you have any concerns about how we handle your data, please
              reach out:
            </p>
            <div className="text-sm text-gray-600 space-y-1">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:gurukrupagoldtunch@gmail.com" className="text-[#b79654] hover:underline">
                  gurukrupagoldtunch@gmail.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+919975796681" className="text-[#b79654] hover:underline">
                  +91 99757 96681
                </a>
              </p>
              <p>
                <strong>Address:</strong> Ground Floor, 32/3175, Karol Bagh,
                New Delhi 110005
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[#b79654] text-white rounded-full font-bold text-sm hover:bg-[#967a42] transition-colors"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-xs text-gray-400 text-center pt-4">
            Last updated: February 2026
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
