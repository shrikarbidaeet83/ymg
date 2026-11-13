"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import ScrollMotion from "@/components/home/ScrollMotion";
import { BookCallButton } from "@/components/site/Cta";
import { coverFor, posts, type Post } from "@/data/blog";
import HeroBackdrop from "@/components/site/HeroBackdrop";

function Cover({
  post,
  sizes,
  priority = false,
}: {
  post: Post;
  sizes: string;
  priority?: boolean;
}) {
  const src = coverFor(post);
  return (
    <Image
      src={src}
      alt=""
      fill
      sizes={sizes}
      priority={priority}
      unoptimized={src.startsWith("http")}
      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
    />
  );
}

function Meta({ post, light = false }: { post: Post; light?: boolean }) {
  return (
    <span
      className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.92rem] ${light ? "text-[#C9C3B4]" : "text-[#4E5A54]"}`}
    >
      <span
        className={`font-semibold ${light ? "text-[#D6B263]" : "text-[#8C6B22]"}`}
      >
        {post.category}
      </span>
      <span aria-hidden="true">·</span>
      <span>{post.date}</span>
      <span aria-hidden="true">·</span>
      <span>{post.readTime}</span>
    </span>
  );
}

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const categories = useMemo(
    () => [...new Set(posts.map((p) => p.category))].sort(),
    [],
  );

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter(
      (p) =>
        (!category || p.category === category) &&
        (!q ||
          `${p.title} ${p.excerpt} ${p.category}`.toLowerCase().includes(q)),
    );
  }, [category, query]);

  const [lead, ...rest] = shown;

  return (
    <div className="ymg-site">
      {/* Hero: the title, then search, then the line under it */}
      <section className="ymg-dark-hero relative isolate overflow-hidden bg-[#0B231D] px-5 pb-20 pt-32 text-[#F5F1E8] sm:px-10 sm:pt-36 lg:px-12 lg:pb-24">
        <HeroBackdrop src="/images/home/svc-support-files.jpg" />
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-2 lg:items-end lg:gap-16">
          <h1
            data-reveal
            className="max-w-[16ch] text-[clamp(2.18rem,4.48vw,4rem)] leading-[1] tracking-[-0.02em]"
          >
            Insights for{" "}
            <span className="text-[#D6B263]">plaintiff firms.</span>
          </h1>
          <div data-reveal data-reveal-delay="120">
            <label htmlFor="blog-search" className="sr-only">
              Search articles
            </label>
            <div className="flex items-center gap-3 rounded-full bg-[#F5F1E8] py-2 pl-5 pr-2 text-[#0B231D] shadow-[0_24px_50px_rgba(0,0,0,0.3)]">
              <Search
                size={20}
                className="shrink-0 text-[#0B231D]/60"
                aria-hidden="true"
              />
              <input
                id="blog-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles"
                className="min-h-12 w-full bg-transparent text-[1.05rem] outline-none placeholder:text-[#0B231D]/45"
              />
            </div>
            <p className="mt-5 max-w-[30rem] text-[1.08rem] leading-[1.6] text-[#C9C3B4]">
              Campaign updates, intake practice and marketing notes for firms
              that want more signed cases.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1320px]">
          {categories.length > 1 && (
            <div
              role="group"
              aria-label="Filter by topic"
              className="mb-12 flex flex-wrap gap-2"
            >
              {["", ...categories].map((c) => {
                const on = category === c;
                return (
                  <button
                    key={c || "all"}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setCategory(c)}
                    className={`min-h-11 rounded-full border px-5 text-[0.98rem] font-semibold transition-colors ${
                      on
                        ? "border-[#0B231D] bg-[#0B231D] text-[#F5F1E8]"
                        : "border-[#0B231D]/15 text-[#0B231D] hover:border-[#0B231D]"
                    }`}
                  >
                    {c || "All topics"}
                  </button>
                );
              })}
            </div>
          )}

          {!lead ? (
            <p className="border-t border-[#0B231D]/12 py-12 text-[1.1rem] text-[#4E5A54]">
              No articles match
              {query ? <> &ldquo;{query}&rdquo;</> : " this topic"}. Try another
              word.
            </p>
          ) : (
            <>
              {/* The newest article, large */}
              <Link
                href={`/blog/${lead.slug}`}
                className="group grid items-center gap-8 md:grid-cols-2 md:gap-12"
              >
                <span className="relative block aspect-[16/11] overflow-hidden rounded-[26px] bg-[#0B231D]">
                  <Cover
                    post={lead}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority
                  />
                </span>
                <span>
                  <Meta post={lead} />
                  <span className="ymg-num mt-4 block text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.06] text-[#0B231D] transition-colors group-hover:text-[#8C6B22]">
                    {lead.title}
                  </span>
                  <span className="mt-4 block max-w-[34rem] text-[1.08rem] leading-[1.6] text-[#4E5A54]">
                    {lead.excerpt}
                  </span>
                  <span className="mt-6 inline-flex items-center gap-2 text-[1rem] font-semibold text-[#0B231D]">
                    Read the article{" "}
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </Link>

              {/* The rest, as an editorial list */}
              {rest.length > 0 && (
                <ul className="mt-16 border-t border-[#0B231D]/12">
                  {rest.map((post) => (
                    <li
                      key={post.slug}
                      className="border-b border-[#0B231D]/12"
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group grid gap-5 py-8 sm:grid-cols-[220px_minmax(0,1fr)] sm:items-center sm:gap-8"
                      >
                        <span className="relative block aspect-[16/11] overflow-hidden rounded-[18px] bg-[#0B231D]">
                          <Cover
                            post={post}
                            sizes="(min-width: 640px) 220px, 100vw"
                          />
                        </span>
                        <span>
                          <Meta post={post} />
                          <span className="ymg-num mt-3 block text-[clamp(1.5rem,2.4vw,2rem)] leading-tight text-[#0B231D] transition-colors group-hover:text-[#8C6B22]">
                            {post.title}
                          </span>
                          <span className="mt-2 block max-w-[46rem] text-[1.02rem] leading-[1.55] text-[#4E5A54]">
                            {post.excerpt}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#071813] px-5 py-28 text-[#F5F1E8] sm:px-10 lg:px-12 lg:py-36">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(45%_70%_at_85%_50%,rgba(214,178,99,0.14),transparent_70%)]"
        />
        <div className="mx-auto flex max-w-[1320px] flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <h2
            data-reveal
            className="max-w-[20ch] text-[clamp(2.18rem,4.48vw,4rem)] leading-[1] tracking-[-0.02em]"
          >
            Put the ideas <span className="text-[#D6B263]">to work.</span>
          </h2>
          <div data-reveal className="flex flex-col gap-3 sm:flex-row lg:pb-3">
            <BookCallButton />
          </div>
        </div>
      </section>
      <ScrollMotion />
    </div>
  );
}
