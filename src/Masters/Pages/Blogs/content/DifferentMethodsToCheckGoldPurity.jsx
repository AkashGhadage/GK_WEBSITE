import React from "react";

const DifferentMethodsToCheckGoldPurity = () => {
  return (
    <div className="space-y-5 md:space-y-6 text-sm md:text-base text-gray-700">
      {/* Intro */}
      <p>
        <span className="font-semibold">Gold purity</span> directly affects
        how much you pay and what value you receive when you sell, pledge, or
        exchange your jewellery.
      </p>
      <p>
        There is no single method for checking purity. In real life, jewellers,
        testing centres, and customers use a combination of{" "}
        <span className="font-semibold">
          hallmark inspection, traditional tests, and modern machines
        </span>{" "}
        to understand how pure a piece really is.
      </p>

      {/* 1. Checking BIS hallmark and stamp */}
      <h2 className="text-base md:text-lg font-semibold text-gray-900 mt-4">
        1. Checking BIS hallmark and karat stamp
      </h2>
      <p>
        The simplest starting point is to inspect the{" "}
        <span className="font-semibold">BIS hallmark and karat stamp</span> on
        the jewellery. This does not test the metal by itself, but it tells you
        what purity is being claimed.
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Look for BIS logo, karat mark (22K916, 18K750, 14K585 etc.).</li>
        <li>Check the jeweller&apos;s mark and HUID number where applicable.</li>
        <li>
          Make sure the same karat is written on the bill and clearly mentioned
          to you.
        </li>
      </ul>
      <p>
        This step is important because it is your{" "}
        <span className="font-semibold">legal reference</span> if there is any
        dispute later.
      </p>

      {/* 2. Traditional touchstone / acid test */}
      <h2 className="text-base md:text-lg font-semibold text-gray-900 mt-4">
        2. Traditional touchstone and acid testing
      </h2>
      <p>
        In the traditional{" "}
        <span className="font-semibold">touchstone method</span>, a small part
        of the jewellery is rubbed on a special stone and tested with different
        acids to estimate the karat.
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Gives a quick idea of purity compared to known samples.</li>
        <li>
          Useful for day‑to‑day buying and selling in many jewellery markets.
        </li>
        <li>
          Can leave very slight marks if not done carefully, so it is usually
          taken from a hidden area.
        </li>
      </ul>
      <p>
        The accuracy of this method depends a lot on the{" "}
        <span className="font-semibold">experience of the tester</span> and the
        quality of the acids and needles used.
      </p>

      {/* 3. Simple home checks (basic screening only) */}
      <h2 className="text-base md:text-lg font-semibold text-gray-900 mt-4">
        3. Simple home checks (basic screening only)
      </h2>
      <p>
        Some people try basic home checks just to see if an item feels
        suspicious, for example:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <span className="font-semibold">Magnet test:</span> strong magnets can
          sometimes reveal base metals, but many alloys are non‑magnetic, so
          this test has limits.
        </li>
        <li>
          <span className="font-semibold">Visual inspection:</span> checking
          colour, finish, and whether plating seems to be coming off.
        </li>
        <li>
          <span className="font-semibold">Density or float tests:</span> basic
          water or density checks that give only a rough idea.
        </li>
      </ul>
      <p>
        These methods can help detect obvious fakes but{" "}
        <span className="font-semibold">
          cannot confirm exact karat purity
        </span>{" "}
        and should not be used alone for serious decisions.
      </p>

      {/* 4. Machine-based testing (XRF and others) */}
      <h2 className="text-base md:text-lg font-semibold text-gray-900 mt-4">
        4. Machine‑based testing (XRF and other methods)
      </h2>
      <p>
        Modern testing centres use{" "}
        <span className="font-semibold">X‑Ray Fluorescence (XRF)</span> and
        other electronic methods to analyse the metal without cutting or
        melting it.
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Non‑destructive: jewellery stays intact, with no loss of weight or
          damage.
        </li>
        <li>
          Gives a detailed reading of gold and alloy percentages on the
          surface.
        </li>
        <li>
          Useful for high‑value jewellery, coins, bars, and when customers want
          written reports.
        </li>
      </ul>
      <p>
        At centres like{" "}
        <span className="font-semibold">
          Gurukrupa Gold Testing &amp; Laser Soldering
        </span>
        , XRF machines help customers and jewellers get an{" "}
        <span className="font-semibold">independent, technical opinion</span> on
        purity before buying, selling, or pledging.
      </p>

      {/* 5. Combining methods for better confidence */}
      <h2 className="text-base md:text-lg font-semibold text-gray-900 mt-4">
        5. Combining different methods for better confidence
      </h2>
      <p>
        In practice, the best approach is to{" "}
        <span className="font-semibold">combine methods</span> instead of
        relying on only one.
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Start with hallmark and bill verification at the time of purchase.
        </li>
        <li>
          Use touchstone testing for quick checks or when buying old or
          exchange gold.
        </li>
        <li>
          For big amounts, inheritance, or doubt, go for an XRF test at an
          independent centre.
        </li>
      </ul>
      <p>
        This layered approach protects you both in{" "}
        <span className="font-semibold">day‑to‑day jewellery shopping</span>{" "}
        and in important financial decisions involving gold.
      </p>

      {/* Takeaway */}
      <h2 className="text-base md:text-lg font-semibold text-gray-900 mt-4">
        Simple takeaway for customers
      </h2>
      <p>
        Different methods to check purity have different strengths – some are
        quick and low‑cost, others are detailed and machine‑based.
      </p>
      <p>
        By understanding what each method can and cannot do, and by using{" "}
        <span className="font-semibold">
          trusted testing centres along with proper hallmarking
        </span>
        , you can be confident that the gold you hold truly matches the purity
        written on paper.
      </p>
    </div>
  );
};

export default DifferentMethodsToCheckGoldPurity;
