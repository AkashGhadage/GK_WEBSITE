// src/Masters/Pages/Blogs/BlogDetails.jsx

import React, { useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { FiLink } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    slug: "why-hallmark-testing-matters",
    category: "Gold Testing",
    title: "Why Hallmark Testing Matters for Your Jewellery",
    readTime: "4 min read",
    date: "16 Jan 2026",
    image: "/contact-image.jpg",
    content: (
      <div className="space-y-5 md:space-y-6 text-sm md:text-base text-gray-700">
        {/* Intro */}
        <p>
          <span className="font-semibold">
            Hallmark testing is not just a government formality
          </span>{" "}
          – it is the simplest way to know whether the gold you are buying
          actually matches what you are paying for.
        </p>
        <p>
          In a market where even a small difference in purity can mean thousands
          of rupees, understanding hallmarking protects you from loss and gives
          you confidence in every purchase.
        </p>

        {/* What is BIS Hallmark */}
        <h2 className="text-base md:text-lg font-semibold text-gray-900 mt-4">
          What is a BIS Hallmark?
        </h2>
        <p>
          In India, BIS hallmarking is an official certification of the purity
          of gold issued by a BIS‑recognised assaying and hallmarking centre.
          The jewellery piece is tested in a lab, and only after confirming the
          purity does it receive the hallmark stamp.
        </p>
        <p>
          This makes hallmarked gold different from “just promised” gold,
          because a third‑party lab has verified the metal, not just the
          jeweller.
        </p>
        <p>
          A genuine BIS gold hallmark usually includes multiple symbols stamped
          close to each other on the jewellery. These marks together confirm the
          purity, the testing centre, and the jeweller who sold it.
        </p>

        {/* Key symbols */}
        <h2 className="text-base md:text-lg font-semibold text-gray-900 mt-4">
          Key symbols you should look for
        </h2>
        <p>When you examine a hallmarked gold ornament, look for these marks:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <span className="font-semibold">BIS logo</span> – shows it has
            passed through an authorised system.
          </li>
          <li>
            <span className="font-semibold">Purity / fineness mark</span> – for
            example 22K916, 18K750, or 14K585.
          </li>
          <li>
            <span className="font-semibold">
              Assaying and hallmarking centre mark
            </span>{" "}
            – code or symbol of the testing centre.
          </li>
          <li>
            <span className="font-semibold">Jeweller’s identification mark</span>{" "}
            – registered mark of the jeweller or brand.
          </li>
          <li>
            <span className="font-semibold">HUID number</span> – unique
            Hallmark Unique ID for each piece.
          </li>
        </ul>

        {/* How hallmark protects */}
        <h2 className="text-base md:text-lg font-semibold text-gray-900 mt-4">
          How hallmark testing protects you from loss
        </h2>
        <p>
          The main reason hallmark testing matters is simple:{" "}
          <span className="font-semibold">you are paying for purity.</span>
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <span className="font-semibold">Prevents under‑karat gold:</span> If
            you pay for 22K but receive something closer to 20K, hallmarking
            reduces this risk by confirming actual purity.
          </li>
          <li>
            <span className="font-semibold">Reduces disputes:</span> During
            buyback, exchange, or resale, a hallmarked piece is easier to value
            fairly.
          </li>
          <li>
            <span className="font-semibold">Legal protection:</span> BIS
            standards make it easier to raise a complaint if purity does not
            match the claim.
          </li>
          <li>
            <span className="font-semibold">
              Better value on loans or resale:
            </span>{" "}
            Banks and buyers are more comfortable when purity is already
            certified.
          </li>
        </ul>
        <p>
          Even a difference of 1–2 karats on a heavy chain or bangle can mean a
          big amount of money over the lifetime of that jewellery.
        </p>

        {/* Role of Independent Testing Centres */}
        <h2 className="text-base md:text-lg font-semibold text-gray-900 mt-4">
          Role of Independent Testing Centres
        </h2>
        <p>
          Even with hallmarking in place, many customers still want an extra
          level of reassurance, especially for high‑value jewellery or old
          family gold. This is where independent precious metal testing centres
          become valuable partners for both customers and jewellers.
        </p>
        <p>
          These centres use modern, non‑destructive methods such as XRF to test
          jewellery and coins. The gold is analysed through the surface without
          cutting, melting, or damaging the piece, so its appearance and value
          remain intact.
        </p>
        <p className="font-semibold">For a customer, this means:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>You are not depending only on verbal promises.</li>
          <li>
            You get a clear, technical understanding of the purity of the gold
            you own.
          </li>
          <li>
            You can make decisions with confidence, whether you are buying,
            selling, or pledging.
          </li>
        </ul>
        <p>
          An independent test is about{" "}
          <span className="font-semibold">peace of mind</span>, not about
          doubting every jeweller.
        </p>

        {/* Simple checks */}
        <h2 className="text-base md:text-lg font-semibold text-gray-900 mt-4">
          Simple Checks Every Customer Should Do
        </h2>
        <p>
          Before buying, or after receiving new jewellery, customers can protect
          themselves by following a few simple checks:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Look closely at all hallmark symbols under good lighting or with a
            magnifying glass.
          </li>
          <li>
            Match the karat and fineness mentioned on the jewellery with what is
            written on the bill.
          </li>
          <li>
            For costly or sentimental jewellery, consider an independent purity
            test.
          </li>
          <li>Use official verification tools or apps when available.</li>
        </ul>
        <p>
          These checks take only a few minutes but can save you from
          misunderstandings or losses later.
        </p>

        {/* Future transparency */}
        <h2 className="text-base md:text-lg font-semibold text-gray-900 mt-4">
          Why Purity Transparency Will Matter More in the Future
        </h2>
        <p>
          As hallmarking becomes more common and awareness increases, customers
          will naturally expect{" "}
          <span className="font-semibold">clarity about purity</span>, not just
          assurances.
        </p>
        <p>Jewellery that has been properly tested and explained is:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Easier to exchange, pledge, or resell.</li>
          <li>More straightforward for any buyer or bank to value.</li>
          <li>Less likely to cause disputes over karat or weight.</li>
        </ul>
        <p>
          For families buying gold for weddings, savings, or long‑term security,
          knowing the exact purity adds long‑term confidence.
        </p>

        {/* Takeaway */}
        <h2 className="text-base md:text-lg font-semibold text-gray-900 mt-4">
          A Customer’s Takeaway
        </h2>
        <p>
          <span className="font-semibold">Hallmarking helps you start with trust.</span>{" "}
          Independent testing helps you feel sure.
        </p>
        <p>
          By understanding hallmark marks and, when needed, getting jewellery
          checked at a trusted independent testing centre such as Gurukrupa Gold
          Testing in Karol Bagh, customers can be confident that every gram they
          pay for matches the purity they expect.
        </p>
      </div>
    ),
  },
  // other posts...
  {
    id: 2,
    slug: "laser-soldering-vs-traditional",
    category: "Laser Soldering",
    title: "Laser Soldering vs Traditional Soldering",
    content:
      "Full content for laser soldering vs traditional soldering. Explain advantages such as precision, minimal heat impact, better joins for delicate chains, and why modern workshops prefer laser.",
    readTime: "5 min read",
    date: "Jan 2026",
    image: "/contact-image.jpg",
  },
  {
    id: 3,
    slug: "how-to-check-gold-purity-before-you-buy",
    category: "Customer Guide",
    title: "How to Check Gold Purity Before You Buy",
    content:
      "Detailed steps customers can follow: check hallmark, verify karat, test small samples, and when to visit a testing center before big purchases.",
    readTime: "3 min read",
    date: "Dec 2025",
    image: "/contact-image.jpg",
  },
  {
    id: 4,
    slug: "caring-for-daily-wear-gold-jewellery",
    category: "Jewellery Care",
    title: "Caring for Your Daily‑Wear Gold Jewellery",
    content:
      "Explain cleaning routines, safe storage, avoiding harsh chemicals, and when to bring jewellery for periodic inspection and repair.",
    readTime: "4 min read",
    date: "Dec 2025",
    image: "/contact-image.jpg",
  },
  {
    id: 5,
    slug: "why-jewelers-trust-testing-centers",
    category: "Business Insight",
    title: "Why Jewelers Trust Independent Testing Centers",
    content:
      "Talk about transparency, dispute resolution, and how third‑party reports improve reputation and repeat business for jewellers.",
    readTime: "5 min read",
    date: "Nov 2025",
    image: "/contact-image.jpg",
  },
  {
    id: 6,
    slug: "basics-of-bis-hallmarking",
    category: "Compliance",
    title: "Basics of BIS Hallmarking for Retail Customers",
    content:
      "Overview of BIS hallmark components, karat symbols, year of marking, and what customers should check on every ornament.",
    readTime: "6 min read",
    date: "Nov 2025",
    image: "/contact-image.jpg",
  },
];

const BlogDetails = () => {
  const { slug } = useParams();
  const location = useLocation();

  const [copied, setCopied] = useState(false);

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-gray-600 mb-4">Blog not found.</p>
        <Link
          to="/blogs"
          className="text-[rgb(207,160,79)] font-semibold hover:underline"
        >
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  const isRichContent = React.isValidElement(post.content);
  const currentUrl = `${window.location.origin}${location.pathname}`;
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 4);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="w-full bg-gray-100 py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <nav className="mb-4 md:mb-6 text-xs md:text-sm text-gray-500">
          <div className="flex items-center gap-1 overflow-hidden whitespace-nowrap">
            <Link to="/" className="hover:text-[rgb(207,160,79)] shrink-0">
              Home
            </Link>
            <span className="shrink-0">/</span>
            <Link
              to="/blogs"
              className="hover:text-[rgb(207,160,79)] shrink-0"
            >
              Blogs
            </Link>
            <span className="shrink-0">/</span>
            <span className="text-gray-700 font-medium truncate">
              {post.title}
            </span>
          </div>
        </nav>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main column */}
          <div className="flex-1">
            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>

            {/* Meta + share */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              {/* Left: date + category */}
              <div className="flex flex-col items-start gap-2">
                <span className="text-[11px] text-gray-400">
                  {post.date} • {post.readTime}
                </span>

                <span className="inline-flex items-center rounded-full bg-[rgb(48,62,73)]/5 border border-[rgb(48,62,73)]/20 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-[rgb(48,62,73)]">
                  {post.category}
                </span>
              </div>

              {/* Right: icon-only actions */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-[#eeeeee] text-black hover:bg-[#e0e0e0] transition-colors"
                  aria-label="Copy link"
                >
                  <FiLink className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    post.title + " - " + currentUrl
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-[#eeeeee] text-black hover:bg-[#e0e0e0] transition-colors"
                  aria-label="Share on WhatsApp"
                >
                  <FaWhatsapp className="w-4 h-4" />
                </a>

                {copied && (
                  <span className="ml-1 text-[11px] text-gray-500">
                    Link copied
                  </span>
                )}
              </div>
            </div>

            {/* Image */}
            <div className="overflow-hidden rounded-2xl shadow-md mb-6">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-60 md:h-80 object-cover"
              />
            </div>

            {/* Content */}
            {isRichContent ? (
              post.content
            ) : (
              <p className="text-sm md:text-base leading-relaxed text-gray-700 whitespace-pre-line">
                {post.content}
              </p>
            )}
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-5">
              <h2 className="text-sm md:text-base font-semibold text-gray-900 mb-3">
                Recent Posts
              </h2>
              <div className="space-y-3">
                {relatedPosts.map((item) => (
                  <Link
                    key={item.id}
                    to={`/blogs/${item.slug}`}
                    className="block group border-b last:border-b-0 border-gray-100 pb-3"
                  >
                    <p className="text-xs text-gray-400 mb-1">
                      {item.date} • {item.readTime}
                    </p>
                    <p className="text-sm font-semibold text-gray-800 group-hover:text-[rgb(207,160,79)] leading-snug line-clamp-2">
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
