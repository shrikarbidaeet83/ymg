"use client";

import { useState } from "react";
import Link from "next/link";

const POSTS = [
  {
    category: "Business Operations",
    title: "How is client information gathered during legal intake?",
    excerpt: "Effective legal intake balances thorough information gathering with strict confidentiality protocols. Most firms collect too much irrelevant data while…",
    minutes: 15,
    date: "Apr 28, 2026",
    slug: "client-information-legal-intake",
  },
  {
    category: "Marketing",
    title: "What role does feedback play in improving legal intake services?",
    excerpt: "Structured feedback collection during legal intake can improve client conversion rates by 35% while reducing intake processing time by…",
    minutes: 14,
    date: "Apr 20, 2026",
    slug: "feedback-legal-intake",
  },
  {
    category: "Sales",
    title: "5 Advantages of Using Legal Answering Services",
    excerpt: "Legal answering services transform law firm operations by capturing leads around the clock while maintaining professional standards. They deliver…",
    minutes: 13,
    date: "Apr 16, 2026",
    slug: "advantages-legal-answering",
  },
  {
    category: "Business Operations",
    title: "How is client information gathered during legal intake?",
    excerpt: "Effective legal intake balances thorough information gathering with strict confidentiality protocols. Most firms collect too much irrelevant data while…",
    minutes: 15,
    date: "Apr 28, 2026",
    slug: "client-information-legal-intake-2",
  },
  {
    category: "Marketing",
    title: "What role does feedback play in improving legal intake services?",
    excerpt: "Structured feedback collection during legal intake can improve client conversion rates by 35% while reducing intake processing time by…",
    minutes: 14,
    date: "Apr 20, 2026",
    slug: "feedback-legal-intake-2",
  },
  {
    category: "Sales",
    title: "5 Advantages of Using Legal Answering Services",
    excerpt: "Legal answering services transform law firm operations by capturing leads around the clock while maintaining professional standards. They deliver…",
    minutes: 13,
    date: "Apr 16, 2026",
    slug: "advantages-legal-answering-2",
  },
  {
    category: "Business Operations",
    title: "How is client information gathered during legal intake?",
    excerpt: "Effective legal intake balances thorough information gathering with strict confidentiality protocols. Most firms collect too much irrelevant data while…",
    minutes: 15,
    date: "Apr 28, 2026",
    slug: "client-information-legal-intake-3",
  },
  {
    category: "Marketing",
    title: "What role does feedback play in improving legal intake services?",
    excerpt: "Structured feedback collection during legal intake can improve client conversion rates by 35% while reducing intake processing time by…",
    minutes: 14,
    date: "Apr 20, 2026",
    slug: "feedback-legal-intake-3",
  },
  {
    category: "Sales",
    title: "5 Advantages of Using Legal Answering Services",
    excerpt: "Legal answering services transform law firm operations by capturing leads around the clock while maintaining professional standards. They deliver…",
    minutes: 13,
    date: "Apr 16, 2026",
    slug: "advantages-legal-answering-3",
  },
];

const CATEGORIES = ["All", "Business Operations", "Marketing", "Sales"];

export default function BlogList() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = POSTS.filter((p) => {
    const matchesCat = cat === "All" || p.category === cat;
    const matchesQuery = !query || p.title.toLowerCase().includes(query.toLowerCase()) || p.excerpt.toLowerCase().includes(query.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <section style={{ background: "var(--ivory)", paddingBlock: "clamp(2rem,4vw,3.5rem)" }}>
      <div className="wrap">
        {/* search + filter */}
        <div
          className="blog-filter"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 220px",
            gap: "0.875rem",
            marginBottom: "clamp(1.5rem,3vw,2.5rem)",
          }}
        >
          <div style={{ position: "relative" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--charcoal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)", opacity: 0.5 }}>
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="search"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                width: "100%",
                height: "2.875rem",
                padding: "0 0.875rem 0 2.5rem",
                fontFamily: "var(--font-sans)",
                fontSize: "0.875rem",
                background: "#FFFFFF",
                border: "1px solid rgba(216,178,107,0.3)",
                borderRadius: "0.5rem",
                color: "var(--charcoal)",
                outline: "none",
              }}
            />
          </div>
          <select
            value={cat}
            onChange={(e) => setCat(e.target.value)}
            style={{
              height: "2.875rem",
              padding: "0 0.875rem",
              fontFamily: "var(--font-sans)",
              fontSize: "0.875rem",
              background: "#FFFFFF",
              border: "1px solid rgba(216,178,107,0.3)",
              borderRadius: "0.5rem",
              color: "var(--charcoal)",
              outline: "none",
              cursor: "pointer",
            }}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c === "All" ? "Categories" : c}
              </option>
            ))}
          </select>
        </div>

        {/* grid */}
        <div
          className="blog-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "1.25rem",
          }}
        >
          {filtered.map((p, i) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              style={{ textDecoration: "none", display: "block" }}
            >
              <article
                style={{
                  borderRadius: "0.875rem",
                  overflow: "hidden",
                  background: "#1A1A1A",
                  minHeight: "300px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "1.25rem",
                  color: "var(--ivory)",
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%), linear-gradient(${135 + i * 30}deg, #46330F, #404040)`,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--gold)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {p.category}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    lineHeight: 1.35,
                    marginBottom: "0.625rem",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: 1.6,
                    marginBottom: "1rem",
                  }}
                >
                  {p.excerpt}
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.7rem" }}>
                  <span style={{ color: "var(--gold)", fontWeight: 600 }}>Keep Reading →</span>
                  <span style={{ color: "rgba(255,255,255,0.6)" }}>{p.minutes} min | {p.date}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* pagination */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem", marginTop: "clamp(2rem,3vw,3rem)" }}>
          {["←", "1", "2", "3", "4", "…", "76", "→"].map((p, i) => {
            const isActive = p === "4";
            const isDots = p === "…";
            return (
              <button
                key={i}
                type="button"
                disabled={isDots}
                style={{
                  minWidth: "32px",
                  height: "32px",
                  paddingInline: "0.5rem",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8125rem",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "var(--walnut)" : "var(--charcoal)",
                  background: isActive ? "var(--grad-gold)" : "transparent",
                  border: isActive ? "none" : "1px solid rgba(216,178,107,0.25)",
                  borderRadius: "50%",
                  cursor: isDots ? "default" : "pointer",
                }}
              >
                {p}
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .blog-grid { grid-template-columns: repeat(2,1fr) !important; }
          .blog-filter { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 540px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
