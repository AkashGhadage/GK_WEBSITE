// src/Masters/Pages/Blogs/BlogDetails.jsx

import React, { useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { FiLink } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import LaserSolderingVsTraditional from "./content/LaserSolderingVsTraditional";
import WhyHallmarkTesting from "./content/WhyHallmarkTesting";
import DifferentMethodsToCheckGoldPurity from "./content/DifferentMethodsToCheckGoldPurity";
import SellingOldGoldInEmergency from "./content/SellingOldGoldInEmergency";
import GoldAsInvestmentJewelleryCoinsBars from "./content/GoldAsInvestmentJewelleryCoinsBars";
import HowToCheckGoldPurityBeforeYouBuy from "./content/HowToCheckGoldPurityBeforeYouBuy";


// Pure data only
const blogPosts = [
  {
    id: 1,
    slug: "why-hallmark-testing-matters",
    category: "Gold Testing",
    title: "Why Hallmark Testing Matters for Your Jewellery",
    readTime: "4 min read",
    date: "16 Jan 2026",
    image: "/hallmark_testing.png",
    content:
      "Hallmark testing is the simplest way to know whether the gold you are buying actually matches what you are paying for.",
  },
  {
    id: 2,
    slug: "laser-soldering-vs-traditional",
    category: "Laser Soldering",
    title: "Laser Soldering vs Traditional Soldering",
    content:
      "Full content for laser soldering vs traditional soldering. Explain advantages such as precision, minimal heat impact, better joins for delicate chains, and why modern workshops prefer laser.",
    readTime: "5 min read",
    date: "Jan 2026",
    image: "/gold_soldering.png",
  },
  {
    id: 3,
    slug: "how-to-check-gold-purity-before-you-buy",
    category: "Customer Guide",
    title: "How to Check Gold Purity Before You Buy",
    content:
      "Simple checks every customer should do before buying gold jewellery, from reading the hallmark correctly to using apps and independent testing centres when in doubt.",
    readTime: "3 min read",
    date: "Dec 2025",
    image: "/goldpurity_1.png",
  },

  {
    id: 4,
    slug: "different-methods-to-check-gold-purity",
    category: "Customer Guide",
    title: "Different Methods to Check Gold Purity",
    excerpt:
      "Understand key methods like hallmark inspection, touchstone tests, density checks, and advanced machine testing so you know how purity is verified.",
    readTime: "4 min read",
    date: "Dec 2025",
    image: "/puritygold.png",
  },
  {
    id: 5,
    slug: "selling-old-gold-in-emergency",
    category: "Must Read",
    title: "Must Read If You Are Selling Old Gold During an Emergency",
    content:
      "Essential points to remember when selling old gold for urgent cash, including rate checks, documentation, purity testing, and how to avoid panic decisions.",
    readTime: "5 min read",
    date: "Nov 2025",
    image: "/sellingGold.png",
  },
  {
    id: 6,
    slug: "gold-as-investment-jewellery-coins-bars",
    category: "Investment Guide",
    title: "Gold as Investment: Jewellery vs Coins vs Bars",
    content:
      "Jewellery carries emotion and design, but high making charges and resale cuts make it a weak investment. Coins and bars, with higher purity and lower premiums per gram, are usually better for serious long‑term savings.",
    readTime: "6 min read",
    date: "Nov 2025",
    image: "/Investment.png",
  },

];

// Map slugs to rich JSX components
const richContentBySlug = {
  "why-hallmark-testing-matters": WhyHallmarkTesting,
  "laser-soldering-vs-traditional": LaserSolderingVsTraditional,
  "different-methods-to-check-gold-purity": DifferentMethodsToCheckGoldPurity,
  "selling-old-gold-in-emergency": SellingOldGoldInEmergency,
  "gold-as-investment-jewellery-coins-bars": GoldAsInvestmentJewelleryCoinsBars,
  "how-to-check-gold-purity-before-you-buy": HowToCheckGoldPurityBeforeYouBuy,

};


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

  const RichComponent = richContentBySlug[post.slug] || null;

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

            <h1
              className="text-2xl md:text-3xl font-serif font-bold mb-4
             text-[#b79654]"
            >
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
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#eeeeee] text-black hover:bg-[#e0e0e0] transition-colors"
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
            {RichComponent ? (
              <RichComponent />
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
