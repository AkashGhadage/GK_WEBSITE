import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[rgb(23,28,32)] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-[#CFA04F] font-bold tracking-[0.3em] uppercase text-[11px]">
            Legal
          </span>
          <h1 className="text-3xl md:text-5xl font-serif text-white mt-4 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Please read these terms carefully before using our gold testing,
            laser soldering, jewellery repair, and bullion services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <div className="prose prose-gray max-w-none space-y-10">
          {/* General */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-[#CFA04F] font-serif italic text-3xl">01</span>
              General Terms
            </h2>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed pl-10">
              <p>
                By using the services of Gurukrupa Computerized Tunch & Laser
                Soldering Centre ("Gurukrupa Gold"), you agree to these Terms &
                Conditions. These terms apply to all services including gold & silver
                purity testing, computer tunch reports, laser soldering, jewellery
                repair, and bullion sales.
              </p>
              <p>
                Gurukrupa Gold reserves the right to modify these terms at any time.
                Continued use of our services constitutes acceptance of the updated
                terms.
              </p>
            </div>
          </div>

          {/* Testing Report Terms */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-[#CFA04F] font-serif italic text-3xl">02</span>
              Gold & Silver Purity Testing Reports
            </h2>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed pl-10">
              <p>
                Purity testing is performed using advanced non-destructive XRF
                (X-Ray Fluorescence) technology. Results are based on surface-level
                readings and reflect the composition of the tested area.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Testing results may vary slightly if jewellery has plating,
                  rhodium coating, or non-uniform alloy distribution.
                </li>
                <li>
                  Reports are valid for the specific item tested at the time
                  of testing. Purity may differ if the item is altered, melted,
                  or mixed with other materials after testing.
                </li>
                <li>
                  Gurukrupa Gold does not guarantee market value or buy-back
                  prices based on purity reports. Actual transaction rates
                  depend on current market conditions.
                </li>
                <li>
                  Reports are issued for informational and indicative purposes.
                  While we maintain the highest accuracy standards with certified
                  equipment, results should be considered alongside other forms
                  of verification for high-value transactions.
                </li>
                <li>
                  XRF testing is non-destructive. No cutting, melting, or
                  scratching is performed on the jewellery during testing.
                </li>
              </ul>
            </div>
          </div>

          {/* Laser Soldering & Repair */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-[#CFA04F] font-serif italic text-3xl">03</span>
              Laser Soldering & Jewellery Repair
            </h2>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed pl-10">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  All repair work is performed by experienced craftsmen using
                  professional equipment. However, jewellery repair inherently
                  involves risk depending on the condition and age of the piece.
                </li>
                <li>
                  Gurukrupa Gold will inform you of any potential risks before
                  starting work. By agreeing to proceed, you accept those risks.
                </li>
                <li>
                  We are not responsible for damage caused by pre-existing
                  weakness, hidden cracks, poorly set stones, or inherent
                  structural issues in the jewellery.
                </li>
                <li>
                  Estimated timelines are indicative. Complex repairs may take
                  additional time depending on the nature of work.
                </li>
                <li>
                  All charges are communicated before starting any work. No
                  hidden costs will be added without your consent.
                </li>
              </ul>
            </div>
          </div>

          {/* Bullion Terms */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-[#CFA04F] font-serif italic text-3xl">04</span>
              Bullion Sales Terms
            </h2>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed pl-10">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Gold and silver bullion prices are based on live MCX and
                  international market rates. Prices are confirmed only at
                  the time of booking and payment.
                </li>
                <li>
                  All bullion products sold by Gurukrupa Gold are BIS Hallmarked
                  and lab-tested for purity certification.
                </li>
                <li>
                  Once a bullion purchase is confirmed and paid for, cancellations
                  or refunds are not applicable due to the volatile nature of
                  precious metal prices.
                </li>
                <li>
                  Availability of specific weight denominations is subject to
                  current stock. Limited stock items are sold on a first-come,
                  first-served basis.
                </li>
                <li>
                  Bulk orders may require advance booking. Contact our bullion
                  desk for live rates and availability.
                </li>
              </ul>
            </div>
          </div>

          {/* Liability */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-[#CFA04F] font-serif italic text-3xl">05</span>
              Limitation of Liability
            </h2>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed pl-10">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Gurukrupa Gold shall not be liable for any indirect,
                  incidental, or consequential damages arising from the use of
                  our services, testing reports, or bullion purchases.
                </li>
                <li>
                  Our maximum liability for any claim shall not exceed the
                  service fee paid for the specific transaction in question.
                </li>
                <li>
                  We accept no liability for decisions made based on our purity
                  reports, including but not limited to buying, selling, or
                  pledging gold or silver.
                </li>
              </ul>
            </div>
          </div>

          {/* Dispute Resolution */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-[#CFA04F] font-serif italic text-3xl">06</span>
              Dispute Resolution
            </h2>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed pl-10">
              <p>
                Any disputes arising out of these terms shall be subject to the
                exclusive jurisdiction of the courts in New Delhi, India. We
                encourage customers to first reach out to our team for an amicable
                resolution before pursuing legal action.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">
              Questions About Our Terms?
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              If you have any questions regarding these Terms & Conditions, please
              contact us:
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

export default TermsConditions;
