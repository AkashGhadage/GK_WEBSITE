import React from "react";
import { useParams, Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    slug: "why-hallmark-testing-matters",
    category: "Gold Testing",
    title: "Why Hallmark Testing Matters for Your Jewellery",
    content:
      "Here you can write the full article about hallmark testing: what BIS hallmark is, why karat verification matters, how customers can check markings, and how independent testing centers like GK Gold help build trust.",
    readTime: "4 min read",
    date: "Jan 2026",
    image: "/contact-image.jpg",
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

  return (
    <div className="w-full bg-gray-100 py-10 md:py-14">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Back link */}
        <div className="mb-4">
          <Link
            to="/blogs"
            className="text-xs md:text-sm text-[rgb(207,160,79)] font-semibold hover:underline"
          >
            ← Back to Blogs
          </Link>
        </div>

        {/* Image */}
        <div className="overflow-hidden rounded-2xl shadow-md mb-6">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-60 md:h-80 object-cover"
          />
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center rounded-full bg-[rgb(48,62,73)]/5 border border-[rgb(48,62,73)]/20 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-[rgb(48,62,73)]">
            {post.category}
          </span>
          <span className="text-[11px] text-gray-500">
            {post.date} • {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>

        {/* Content */}
        <p className="text-sm md:text-base leading-relaxed text-gray-700 whitespace-pre-line">
          {post.content}
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
