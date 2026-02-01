import React from "react";

const LaserSolderingVsTraditional = () => {
  return (
    <div className="space-y-5 md:space-y-6 text-sm md:text-base text-gray-700">
      {/* Intro */}
      <p>
        <span className="font-semibold">Laser soldering</span> is becoming the
        preferred choice for modern jewellery workshops, especially where
        precision and finish are important.
      </p>
      <p>
        Traditional flame soldering still has its place, but understanding the
        difference helps customers and jewellers choose the right method for
        each type of repair or custom work.
      </p>

      {/* How traditional soldering works */}
      <h2 className="text-base md:text-lg font-semibold text-gray-900 mt-4">
        How traditional soldering works
      </h2>
      <p>
        In traditional soldering, a flame is used to heat the area around the
        joint along with solder and flux. The entire portion of metal becomes
        hot before the solder flows and joins the pieces together.
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Heat spreads to a bigger area around the joint.</li>
        <li>Stones, enamel, and delicate parts can get affected.</li>
        <li>
          More polishing and finishing is usually required after the repair.
        </li>
      </ul>

      {/* How laser soldering works */}
      <h2 className="text-base md:text-lg font-semibold text-gray-900 mt-4">
        How laser soldering works
      </h2>
      <p>
        In laser soldering, a focused laser beam is used to heat only a very
        small area where the joint is required. The energy is controlled
        precisely by power, pulse duration, and spot size.
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Very small, controlled heat zone – rest of the jewellery stays cool.
        </li>
        <li>
          Ideal for thin chains, small links, and close‑setting stone work.
        </li>
        <li>
          Joints are neat and require less filing, buffing, or polishing.
        </li>
      </ul>

      {/* Key advantages of laser soldering */}
      <h2 className="text-base md:text-lg font-semibold text-gray-900 mt-4">
        Key advantages of laser soldering
      </h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <span className="font-semibold">Minimal heat impact:</span> Nearby
          stones, meenakari work, or delicate designs are much safer compared to
          open flame.
        </li>
        <li>
          <span className="font-semibold">Cleaner joints:</span> The joint area
          is focused, so extra solder spread is reduced and finishing is
          quicker.
        </li>
        <li>
          <span className="font-semibold">Precision on micro parts:</span>{" "}
          Perfect for repairing thin chains, hollow bangles, and imported
          lightweight jewellery.
        </li>
        <li>
          <span className="font-semibold">Less distortion:</span> Because the
          rest of the piece does not heat up, chances of bending or warping are
          lower.
        </li>
      </ul>

      {/* When traditional is still used */}
      <h2 className="text-base md:text-lg font-semibold text-gray-900 mt-4">
        When traditional soldering is still used
      </h2>
      <p>
        Not every job needs a laser. Traditional methods are still used for:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Larger, heavier pieces where a wide area has to be joined or rebuilt.
        </li>
        <li>
          Purely gold‑metal jobs without stones or delicate design elements.
        </li>
        <li>
          Basic workshop setups where laser machines are not yet available.
        </li>
      </ul>

      {/* What this means for customers */}
      <h2 className="text-base md:text-lg font-semibold text-gray-900 mt-4">
        What this means for jewellery customers
      </h2>
      <p>
        For customers, the main benefit of laser soldering is{" "}
        <span className="font-semibold">safer, neater repairs</span> on costly
        and delicate ornaments.
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Less risk to diamonds, gemstones, and designer work during repair.
        </li>
        <li>
          Joints are often less visible, so the piece looks closer to original.
        </li>
        <li>
          Many jobs can be done faster because there is less re‑finishing work.
        </li>
      </ul>

      {/* Why workshops are shifting to laser */}
      <h2 className="text-base md:text-lg font-semibold text-gray-900 mt-4">
        Why modern workshops prefer laser soldering
      </h2>
      <p>
        Workshops that invest in laser machines signal that they are focusing
        on quality and precision. For high‑value or imported jewellery, this
        becomes an important service.
      </p>
      <p>
        At centres like <span className="font-semibold">Gurukrupa Gold Testing &amp; Laser Soldering</span>, 
        laser systems allow jewellers to offer safer repairs and customers to
        trust that their jewellery is handled with modern, controlled
        technology.
      </p>

      {/* Takeaway */}
      <h2 className="text-base md:text-lg font-semibold text-gray-900 mt-4">
        Simple takeaway
      </h2>
      <p>
        Traditional soldering will always have a role, but for fine, stone‑set,
        or lightweight gold jewellery,{" "}
        <span className="font-semibold">laser soldering gives better control, finish, and safety.</span>
      </p>
      <p>
        When you give jewellery for repair, you can always ask which method will
        be used so you understand how your piece is being treated.
      </p>
    </div>
  );
};

export default LaserSolderingVsTraditional;
