"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { rating } from "@/data/social-proof";
import SectionHeader from "@/components/home/SectionHeader";

export type Review = { title?: string; text: string; name: string; firm: string };

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`flex gap-0.5 text-[#E3B341] ${className}`} aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>&#9733;</span>
      ))}
    </span>
  );
}

/* Score card on the left, review cards scrolling beside it. */
export default function ReviewCarousel({ reviews, showAllLink = true }: { reviews: Review[]; showAllLink?: boolean }) {
  const track = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 8 });
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.getBoundingClientRect().width + 16), behavior: "smooth" });
  };

  const arrow =
    "flex h-11 w-11 items-center justify-center rounded-full border border-[#e3d6bb] bg-white text-[#2f3236] transition-colors hover:border-[#c9a14f] disabled:opacity-35 disabled:hover:border-[#e3d6bb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87b25] dark:border-white/15 dark:bg-white/[0.06] dark:text-white";

  return (
    <div>
      <SectionHeader eyebrow="Client reviews" title="Firms that switched." accent="In their words.">
        <div className="flex items-center gap-2">
          <button type="button" aria-label="Previous reviews" onClick={() => scrollBy(-1)} disabled={edge.start} className={arrow}>
            <ArrowLeft size={18} strokeWidth={1.8} aria-hidden="true" />
          </button>
          <button type="button" aria-label="More reviews" onClick={() => scrollBy(1)} disabled={edge.end} className={arrow}>
            <ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" />
          </button>
        </div>
      </SectionHeader>

      <div className="mt-9 flex flex-col gap-4 lg:mt-11 lg:flex-row">
        {/* Score */}
        <div className="relative flex shrink-0 flex-col overflow-hidden rounded-[22px] bg-[#3d4145] p-7 text-white lg:w-[320px]">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(80%_70%_at_100%_0%,rgba(216,178,107,0.38),transparent_70%)]" />
          <p className="relative font-heading text-[4.2rem] leading-none sm:text-[4.8rem]">{rating.score}</p>
          <Stars className="relative mt-3 text-[1.5rem]" />
          <p className="relative mt-3 text-[1rem] leading-[1.5] text-white/80">
            from <strong className="font-semibold text-white">{rating.count}</strong> {rating.label}
          </p>
          {showAllLink && (
            <Link
              href={rating.href}
              className="group relative mt-6 inline-flex min-h-11 items-center gap-2 self-start text-[0.98rem] font-semibold text-white hover:text-[#EBC982] lg:mt-auto"
            >
              Read all reviews
              <ArrowUpRight size={16} strokeWidth={2} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          )}
        </div>

        {/* Reviews */}
        <ul
          ref={track}
          aria-label="Client reviews"
          className="ymg-review-track -mx-1 flex min-w-0 flex-1 snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{
            maskImage: `linear-gradient(90deg, ${edge.start ? "#000" : "transparent"}, #000 48px, #000 calc(100% - 64px), ${edge.end ? "#000" : "transparent"})`,
          }}
        >
          {reviews.map(({ title, text, name, firm }) => (
            <li
              key={`${name}-${firm}`}
              className="flex w-[84%] shrink-0 snap-start flex-col rounded-[22px] border border-[#ecdcb6] bg-white p-6 dark:border-white/10 dark:bg-white/[0.04] sm:w-[330px]"
            >
              <div className="flex items-center justify-between gap-3">
                <Stars className="text-[1.05rem]" />
                <span className="text-[0.78rem] font-medium text-[#7a7468] dark:text-[#a9a294]">Client review</span>
              </div>
              {title && <p className="mt-4 font-heading text-[1.15rem] leading-snug text-[#2f3236] dark:text-[#f5ecd8]">{title}</p>}
              <p className="mb-6 mt-3 text-[0.95rem] leading-[1.6] text-[#5e6064] dark:text-[#bdb6a6]">{text}</p>
              <div className="mt-auto flex items-center gap-3 border-t border-[#f0e4c8] pt-4 dark:border-white/10">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2f3236] font-heading text-[0.95rem] text-white ring-2 ring-[#D8B26B]/70"
                >
                  {firm.charAt(0)}
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.95rem] font-semibold text-[#2f3236] dark:text-[#f5ecd8]">{name}</span>
                  <span className="block text-[0.82rem] text-[#7a7468] dark:text-[#a9a294]">{firm}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
