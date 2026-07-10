"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Search } from "lucide-react";
import { useMemo, useState } from "react";
import ContactConversationContent from "@/components/sections/ContactConversationContent";
import ReadyGrowCtaSection from "@/components/sections/ReadyGrowCtaSection";
import { posts } from "@/data/blog";

const blogImages = [
  "/blogs/Rectangle 400.svg",
  "/blogs/Rectangle 400 (1).svg",
  "/blogs/Rectangle 400 (2).svg",
  "/blogs/Rectangle 400 (3).svg",
  "/blogs/Rectangle 400 (4).svg",
  "/blogs/Rectangle 400 (5).svg",
  "/blogs/Rectangle 400 (6).svg",
  "/blogs/Rectangle 400 (7).svg",
  "/blogs/Rectangle 400 (8).svg",
];

const blogCards = Array.from({ length: 27 }, (_, index) => ({
  ...posts[index % posts.length],
  cardId: index,
  image: blogImages[index % blogImages.length],
}));

const PAGE_SIZE = 9;

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCards = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return blogCards.filter((post) => {
      const matchesCategory = !category || post.category === category;
      const matchesQuery =
        !normalizedQuery ||
        `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const totalPages = Math.max(1, Math.ceil(filteredCards.length / PAGE_SIZE));
  const activePage = Math.min(currentPage, totalPages);
  const visibleCards = filteredCards.slice((activePage - 1) * PAGE_SIZE, activePage * PAGE_SIZE);

  const changePage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
    window.requestAnimationFrame(() => {
      document.getElementById("blog-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <main className="min-h-screen bg-[#FFF5E0] pt-20">
      <section className="ymg-section-padding pt-16 sm:pt-20 lg:pt-24 xl:pt-28">
        <div
          className="relative mx-auto flex min-h-[430px] max-w-[1210px] items-center overflow-hidden rounded-[12px] bg-center bg-no-repeat sm:min-h-[453px]"
          style={{ backgroundImage: "url('/bolg-bg.svg')", backgroundSize: "102% 104%" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/28 to-black/5" />
          <div className="relative z-10 w-full px-7 py-12 text-white sm:px-14 lg:px-20">
            <p className="text-[0.82rem] font-medium sm:text-[1rem]">
              Expert Strategies, Trends &amp; Industry Updates
            </p>
            <h1 className="mt-4 max-w-[480px] font-heading text-[clamp(2.4rem,5vw,4.1rem)] font-normal leading-[1.05] tracking-[0]">
              Insights That Drive
              <span className="block">Legal Growth</span>
            </h1>
            <p className="mt-5 max-w-[420px] text-[0.82rem] leading-[1.45] text-white/90 sm:text-[0.95rem]">
              Discover actionable insights, proven marketing strategies, and the latest
              industry trends to help law firms generate more cases, scale faster, and
              stay ahead in a competitive market.
            </p>
          </div>
          <button
            type="button"
            aria-label="Play featured video"
            className="absolute left-1/2 top-1/2 z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#3d4145] shadow-lg transition-transform hover:scale-105 max-sm:hidden"
          >
            <Play className="ml-0.5 h-5 w-5 fill-current" />
          </button>
        </div>
      </section>

      <section className="ymg-section-padding bg-[#FFF5E0]">
        <div className="mx-auto max-w-[1120px]">
          <div className="mb-8 grid gap-3 sm:grid-cols-2 sm:gap-5">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#55585a]" />
              <input
                type="search"
                placeholder="Search"
                aria-label="Search articles"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setCurrentPage(1);
                }}
                className="h-11 w-full rounded-[5px] border border-[#dfbd78] bg-[#FFF5E0] pl-11 pr-4 text-[0.82rem] text-[#3d4145] outline-none focus:shadow-[0_0_0_3px_rgba(235,201,130,0.24)]"
              />
            </label>
            <select
              aria-label="Filter by category"
              value={category}
              onChange={(event) => {
                setCategory(event.target.value);
                setCurrentPage(1);
              }}
              className="h-11 w-full rounded-[5px] border border-[#dfbd78] bg-[#FFF5E0] px-4 text-[0.82rem] text-[#55585a] outline-none focus:shadow-[0_0_0_3px_rgba(235,201,130,0.24)]"
            >
              <option value="">Categories</option>
              <option>Mass Torts</option>
              <option>Hair Relaxer</option>
              <option>Talcum Powder</option>
            </select>
          </div>

          <div id="blog-grid" className="scroll-mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleCards.map((post) => (
              <Link
                key={post.cardId}
                href={`/blog/${post.slug}`}
                className="group relative aspect-[4/5] min-h-[390px] overflow-hidden rounded-[12px] border border-[#dfbd78] bg-transparent transition-transform duration-500 hover:-translate-y-1.5"
              >
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="scale-[1.045] object-cover transition-transform duration-700 group-hover:scale-[1.09]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/48 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col p-5 text-white sm:p-6">
                  <p className="text-[1.15rem] font-semibold leading-tight sm:text-[1.35rem]">
                    {post.category}
                  </p>
                  <h2 className="mt-2 line-clamp-2 text-[0.82rem] font-medium leading-[1.35] sm:text-[0.95rem]">
                    {post.title}
                  </h2>
                  <p className="mt-4 line-clamp-3 text-[0.7rem] leading-[1.4] text-white/65 sm:text-[0.78rem]">
                    Expert Insight: {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-end justify-between gap-3 text-[#EBC982]">
                    <span className="text-[0.72rem] font-medium">Keep Reading ›</span>
                    <span className="text-right text-[0.65rem] sm:text-[0.72rem]">
                      {post.readTime.replace(" read", "")} | {post.date}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {visibleCards.length === 0 && (
            <p className="py-16 text-center text-[0.95rem] text-[#777]">No articles found.</p>
          )}

          <nav aria-hidden="true" className="hidden">
            <button type="button" className="h-9 w-9">‹</button>
            <button type="button" className="h-9 w-9">1</button>
            <button type="button" className="h-9 w-9">2</button>
            <button type="button" className="h-9 w-9">3</button>
            <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dfbd78] bg-white text-[#3d4145]">4</button>
            <button type="button" className="h-9 w-9">76</button>
            <button type="button" className="h-9 w-9">›</button>
          </nav>

          <nav aria-label="Blog pagination" className="mt-10 flex items-center justify-center gap-2 text-[0.78rem] text-[#c89d45]">
            <button
              type="button"
              aria-label="Previous page"
              disabled={activePage === 1}
              onClick={() => changePage(activePage - 1)}
              className="h-10 w-10 disabled:cursor-not-allowed disabled:opacity-30"
            >
              &lsaquo;
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button
                key={page}
                type="button"
                aria-label={`Page ${page}`}
                aria-current={activePage === page ? "page" : undefined}
                onClick={() => changePage(page)}
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                  activePage === page
                    ? "border-[#dfbd78] bg-white text-[#3d4145]"
                    : "border-transparent hover:border-[#dfbd78]/60"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              type="button"
              aria-label="Next page"
              disabled={activePage === totalPages}
              onClick={() => changePage(activePage + 1)}
              className="h-10 w-10 disabled:cursor-not-allowed disabled:opacity-30"
            >
              &rsaquo;
            </button>
          </nav>
        </div>
      </section>
      <ReadyGrowCtaSection />
      <section className="ymg-section-padding relative isolate overflow-hidden bg-[#D8B26B] text-[#404040]">
        <div className="relative z-10 mx-auto max-w-7xl">
          <ContactConversationContent variant="gold" />
        </div>
      </section>
    </main>
  );
}
