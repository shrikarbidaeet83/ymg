"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/components/sections/TestimonialContactSection";
import { rating } from "@/data/social-proof";
import { SHOW_RATING } from "@/data/site-flags";
import { SHOW_TESTIMONIALS } from "@/data/site-flags";

/*
 * What clients say, beside a photo of the work: one quote at a time, set large, turning every few
 * seconds (paused on hover and for reduced motion). `start` lets each page open on a different quote.
 */
export default function ClientProof({
  photo,
  start = 0,
  tone = "white",
}: {
  photo: { src: string; alt: string };
  start?: number;
  tone?: "white" | "mist";
}) {
  const count = testimonials.length;
  const [i, setI] = useState(count ? start % count : 0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (paused || reduce || count < 2) return;
    const t = setTimeout(() => setI((n) => (n + 1) % count), 7000);
    return () => clearTimeout(t);
  }, [i, paused, reduce, count]);

  if (!SHOW_TESTIMONIALS || count === 0) return null;
  const review = testimonials[i];
  const go = (d: number) => setI((n) => (n + d + count) % count);

  return (
    <section
      className={`${tone === "mist" ? "bg-[#F0F4F1]" : "bg-white"} px-5 py-24 sm:px-10 lg:px-12 lg:py-32`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="mx-auto grid max-w-[1320px] items-center gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <h2
          data-reveal
          className="max-w-[19ch] text-[clamp(1.93rem,3.52vw,3.2rem)] leading-[1.03] tracking-[-0.015em] text-[#0B231D] md:col-start-2 md:row-start-1 md:self-end"
        >
          What law firms <span className="text-[#8C6B22]">tell us.</span>
        </h2>

        {/* The photo, with the review score sitting across its bottom edge */}
        <div
          data-reveal
          className="relative pb-10 md:col-start-1 md:row-span-2 md:row-start-1"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] bg-[#0B231D] sm:aspect-[5/4] md:aspect-[4/5]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-5 flex items-center gap-4 rounded-[20px] bg-white px-5 py-4 shadow-[0_24px_50px_rgba(11,35,29,0.16)] sm:left-8">
            {SHOW_RATING ? (
              <>
                <span className="ymg-num text-[2.4rem] leading-none text-[#0B231D]">
                  {rating.score}
                </span>
                <span>
                  <span
                    aria-hidden="true"
                    className="block tracking-[2px] text-[#E3B341]"
                  >
                    ★★★★★
                  </span>
                  <span className="block text-[0.92rem] font-semibold text-[#4E5A54]">
                    {rating.count} {rating.label}
                  </span>
                </span>
              </>
            ) : (
              <>
                <span className="ymg-num text-[2.4rem] leading-none text-[#0B231D]">
                  15+
                </span>
                <span className="block text-[0.92rem] font-semibold leading-tight text-[#4E5A54]">
                  years in
                  <br />
                  legal marketing
                </span>
              </>
            )}
          </div>
        </div>

        <div
          data-reveal
          className="md:col-start-2 md:row-start-2 md:self-start"
        >
          <Quote
            size={40}
            className="text-[#D6B263]"
            fill="currentColor"
            strokeWidth={0}
            aria-hidden="true"
          />
          <div
            aria-live="polite"
            className="mt-4 min-h-[15rem] sm:min-h-[12rem]"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.figure
                key={i}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <blockquote className="ymg-num text-[clamp(1.5rem,2.4vw,2.1rem)] leading-[1.3] text-[#0B231D]">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B231D] text-[1rem] font-semibold text-[#D6B263]">
                    {review.firm.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-[1rem] font-semibold text-[#0B231D]">
                      {review.name}
                    </span>
                    <span className="block text-[0.92rem] text-[#4E5A54]">
                      {review.firm}
                    </span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous review"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0B231D]/15 text-[#0B231D] transition-colors hover:bg-[#0B231D] hover:text-[#D6B263]"
              >
                <ArrowLeft size={18} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next review"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0B231D]/15 text-[#0B231D] transition-colors hover:bg-[#0B231D] hover:text-[#D6B263]"
              >
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
            <span className="flex gap-1.5" aria-hidden="true">
              {testimonials.map((_, n) => (
                <span
                  key={n}
                  className={`h-1.5 rounded-full transition-all duration-300 ${n === i ? "w-6 bg-[#0B231D]" : "w-1.5 bg-[#0B231D]/20"}`}
                />
              ))}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
