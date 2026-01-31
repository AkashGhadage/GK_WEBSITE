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
    image: "/contact-image.jpg", // from public/
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
    image: "/contact-image.jpg",
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
    image: "/contact-image.jpg",
  },
  {
    id: 4,
    slug: "caring-for-daily-wear-gold-jewellery",
    category: "Jewellery Care",
    title: "Caring for Your Daily‑Wear Gold Jewellery",
    excerpt:
      "Tips to keep your jewellery shining while preventing scratches, bend marks, and stone loosening.",
    readTime: "4 min read",
    date: "Dec 2025",
    image: "/contact-image.jpg",
  },
  {
    id: 5,
    slug: "why-jewelers-trust-testing-centers",
    category: "Business Insight",
    title: "Why Jewelers Trust Independent Testing Centers",
    excerpt:
      "Learn how third‑party testing adds credibility to your shop and builds long‑term customer trust.",
    readTime: "5 min read",
    date: "Nov 2025",
    image: "/contact-image.jpg",
  },
  {
    id: 6,
    slug: "basics-of-bis-hallmarking",
    category: "Compliance",
    title: "Basics of BIS Hallmarking for Retail Customers",
    excerpt:
      "A quick overview of BIS hallmark symbols, karat markings, and what they mean for purity and pricing.",
    readTime: "6 min read",
    date: "Nov 2025",
    image: "/contact-image.jpg",
  },
];

const Blogs = () => {
  return (
    <div className="w-full bg-gray-100 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.28em] text-amber-700 uppercase mb-3">
            Blog & insights
          </p>

          <h1 className="text-[24px] md:text-[30px] font-light uppercase tracking-[0.20em] text-gray-900 leading-snug">
            Insights &amp; articles
          </h1>

          <p className="mt-4 text-xs md:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Stay updated with guides on gold testing, laser soldering, jewellery
            care, and more from GK Gold.
          </p>
        </div>

        {/* Blog grid */}


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-52 md:h-60 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-500"
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

                <h2 className="text-base md:text-lg font-semibold text-gray-900 leading-snug mb-2">
                  {post.title}
                </h2>

                <p className="text-sm text-gray-500 mb-4">
                  {post.excerpt}
                </p>
                <Link to={`/blogs/${post.slug}`}>
                  <button
                    type="button"
                    className="px-4 py-2 rounded-full bg-[rgb(248,249,252)]
               text-xs md:text-sm font-semibold text-[rgb(207,160,79)]
               hover:bg-[rgb(207,160,79)] hover:text-black
               transition-colors duration-200 shadow-sm"
                  >
                    Read more →
                  </button>
                </Link>

              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
