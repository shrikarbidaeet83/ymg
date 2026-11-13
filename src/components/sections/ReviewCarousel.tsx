"use client";

import { SHOW_RATING } from "@/data/site-flags";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { rating } from "@/data/social-proof";
import SectionHeader from "@/components/home/SectionHeader";
import CountText from "@/components/ui/CountText";

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

const SPEED = 36; // px per second
const RESUME_AFTER = 2500; // ms after the visitor scrolls, swipes or uses the arrows

/*
 * Score card on the left, review cards drifting beside it at a steady pace.
 * The list is rendered twice so the drift loops without a jump. It pauses on hover, focus,
 * touch and while off screen, and stays still for visitors who prefer reduced motion.
 */
export default function ReviewCarousel({ reviews, showAllLink = true }: { reviews: Review[]; showAllLink?: boolean }) {
  const track = useRef<HTMLUListElement>(null);
  const [moving, setMoving] = useState(false);
  const hold = useRef({ hover: false, focus: false, until: 0 });
  const pos = useRef(0);

  // Width of one full set of reviews, i.e. where the second copy starts.
  const loopWidth = () => {
    const el = track.current;
    const copy = el?.querySelector<HTMLElement>("[data-copy]");
    return el && copy ? copy.offsetLeft - (el.firstElementChild as HTMLElement).offsetLeft : 0;
  };

  useEffect(() => {
    const el = track.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setMoving(true);

    let frame = 0;
    let last = performance.now();
    let visible = true;
    const seen = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    seen.observe(el);

    const tick = (now: number) => {
      const dt = Math.min(now - last, 64);
      last = now;
      const h = hold.current;
      const loop = loopWidth();
      // Pick up wherever the visitor left it.
      if (Math.abs(el.scrollLeft - pos.current) > 2) pos.current = el.scrollLeft;
      if (visible && !document.hidden && !h.hover && !h.focus && now > h.until && loop >= el.clientWidth) {
        pos.current += (SPEED * dt) / 1000;
        if (pos.current >= loop) pos.current -= loop;
        el.scrollLeft = pos.current;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    const pause = () => (hold.current.until = performance.now() + RESUME_AFTER);
    el.addEventListener("pointerdown", pause);
    el.addEventListener("wheel", pause, { passive: true });
    el.addEventListener("touchmove", pause, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      seen.disconnect();
      el.removeEventListener("pointerdown", pause);
      el.removeEventListener("wheel", pause);
      el.removeEventListener("touchmove", pause);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    hold.current.until = performance.now() + RESUME_AFTER;
    const step = card.getBoundingClientRect().width + 16;
    const loop = loopWidth();
    // Wrap first so both arrows can go round forever.
    if (loop > 0 && dir === -1 && el.scrollLeft < step) el.scrollLeft += loop;
    if (loop > 0 && dir === 1 && el.scrollLeft + step >= loop) el.scrollLeft -= loop;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const fade = "transparent, #000 20px, #000 calc(100% - 40px), transparent";

  const arrow =
    "flex h-11 w-11 items-center justify-center rounded-full border border-[#e3d6bb] bg-white text-[#2f3236] transition-colors hover:border-[#c9a14f] disabled:opacity-35 disabled:hover:border-[#e3d6bb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87b25] dark:border-white/15 dark:bg-white/[0.06] dark:text-white";

  return (
    <div>
      <SectionHeader title="Firms that switched." accent="In their words.">
        <div className="flex items-center gap-2">
          <button type="button" aria-label="Previous reviews" onClick={() => scrollBy(-1)} className={arrow}>
            <ArrowLeft size={18} strokeWidth={1.8} aria-hidden="true" />
          </button>
          <button type="button" aria-label="More reviews" onClick={() => scrollBy(1)} className={arrow}>
            <ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" />
          </button>
        </div>
      </SectionHeader>

      <div data-reveal-group data-reveal-delay="120" className="mt-9 flex flex-col gap-4 lg:mt-11 lg:flex-row">
        {/* Score: set as type on the section, not in a box (hidden until the score is confirmed) */}
        {SHOW_RATING && (
        <div className="flex shrink-0 flex-col border-[#e3cf9f] pb-2 dark:border-white/10 lg:w-[260px] lg:border-r lg:pb-0 lg:pr-8">
          <p className="font-heading text-[4.6rem] leading-none text-[#2f3236] dark:text-[#f5ecd8] sm:text-[5.4rem]">
            <CountText value={String(rating.score)} />
          </p>
          <Stars className="mt-3 text-[1.4rem]" />
          <p className="mt-3 text-[1rem] leading-[1.5] text-[#5e6064] dark:text-[#bdb6a6]">
            from <strong className="font-semibold text-[#2f3236] dark:text-[#f5ecd8]">{rating.count}</strong> {rating.label}
          </p>
          {showAllLink && (
            <Link
              href={rating.href}
              className="group mt-5 inline-flex min-h-11 items-center gap-2 self-start text-[0.98rem] font-semibold text-[#8a6420] hover:text-[#5e4416] dark:text-[#EBC982] lg:mt-auto"
            >
              Read all reviews
              <ArrowUpRight size={16} strokeWidth={2} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          )}
        </div>
        )}

        {/* Reviews */}
        <ul
          ref={track}
          aria-label="Client reviews"
          onMouseEnter={() => (hold.current.hover = true)}
          onMouseLeave={() => (hold.current.hover = false)}
          onFocus={() => (hold.current.focus = true)}
          onBlur={() => (hold.current.focus = false)}
          className={`ymg-review-track -mx-1 flex min-w-0 flex-1 gap-4 overflow-x-auto px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
            moving ? "" : "snap-x snap-mandatory"
          }`}
          style={{ maskImage: `linear-gradient(90deg, ${fade})` }}
        >
          {(moving ? [...reviews, ...reviews] : reviews).map(({ title, text, name, firm }, i) => (
            <li
              key={`${name}-${firm}-${i}`}
              data-copy={i === reviews.length ? "" : undefined}
              aria-hidden={i >= reviews.length || undefined}
              inert={i >= reviews.length || undefined}
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
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B231D] font-heading text-[0.95rem] text-[#D6B263]"
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
