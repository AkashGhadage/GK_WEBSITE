// src/Masters/Pages/Blogs/Blogs.jsx

import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    slug: "why-hallmark-testing-matters",
    category: "Gold Testing",
    title: "Why Hallmark Testing Matters for Your Jewellery",
    excerpt:
      "Understand how hallmark testing protects you from under‑karat gold and ensures transparency in every transaction.",
    readTime: "4 min read",
    date: "15 Jan 2026",
    image: "/hallmark_testing.png",
  },
  {
    id: 2,
    slug: "laser-soldering-vs-traditional",
    category: "Laser Soldering",
    title: "Laser Soldering vs Traditional Soldering",
    excerpt:
      "See how modern laser soldering offers cleaner joints, less heat damage, and more precise repairs for delicate ornaments.",
    readTime: "5 min read",
    date: "Jan 2026",
    image: "/gold_soldering.png",
  },
  {
    id: 3,
    slug: "how-to-check-gold-purity-before-you-buy",
    category: "Customer Guide",
    title: "How to Check Gold Purity Before You Buy",
    excerpt:
      "Simple steps every customer should follow before buying jewellery to avoid losses and confusion later.",
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
    image: "/different_method.png",
  },
  {
    id: 5,
    slug: "selling-old-gold-in-emergency",
    category: "Must Read",
    title: "Must Read If You Are Selling Old Gold During an Emergency",
    excerpt:
      "Before you rush to sell jewellery for urgent cash, understand how to avoid heavy losses, choose the right buyer, and prepare your documents.",
    readTime: "5 min read",
    date: "Nov 2025",
    image: "/sellingGold.png",
  },
  {
    id: 6,
    slug: "gold-as-investment-jewellery-coins-bars",
    category: "Investment Guide",
    title: "Gold as Investment: Jewellery vs Coins vs Bars",
    excerpt:
      "Jewellery is perfect for wearing, but a weak investment. See why serious savers should prefer high‑purity coins and bars instead.",
    readTime: "6 min read",
    date: "Nov 2025",
    image: "/Investment.png",
  },
];

const Blogs = () => {
  return (
    <div className="w-full bg-gray-100 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.28em] text-amber-700 uppercase mb-3">
            KNOWLEDGE IS POWER
          </p>

          <h1 className="text-[24px] md:text-[30px] font-light uppercase tracking-[0.20em] text-gray-900 leading-snug">
            Insights &amp; articles
          </h1>

          <p className="mt-4 text-xs md:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Stay updated with guides on gold testing, laser soldering, jewellery
            care, and Ongoing Economic Education You Deserve.
          </p>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blogs/${post.slug}`}
              className="block group"
            >
              <article className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden h-full cursor-pointer">
                {/* Image */}
                <div className="relative h-52 md:h-60 w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center rounded-full bg-[rgb(48,62,73)]/5 border border-[rgb(48,62,73)]/20 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-[rgb(48,62,73)]">
                      {post.category}
                    </span>
                    <span className="text-[11px] text-gray-400">
                      {post.date} • {post.readTime}
                    </span>
                  </div>

                  {/* Title with custom hover color #b79654 */}
                  <h2
                    className="text-base md:text-lg font-semibold leading-snug mb-2
                               text-gray-900 transition-colors duration-200
                               group-hover:text-[#b79654]"
                  >
                    {post.title}
                  </h2>

                  <p
                    className="text-sm text-gray-500 mb-4
                               transition-colors duration-200 group-hover:text-gray-600"
                  >
                    {post.excerpt}
                  </p>

                  <span
                    className="inline-flex items-center px-4 py-2 rounded-full bg-[rgb(248,249,252)]
                   text-xs md:text-sm font-semibold text-[rgb(207,160,79)]
                   group-hover:bg-[rgb(207,160,79)] group-hover:text-black
                   transition-colors duration-200 shadow-sm"
                  >
                    Read more →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
