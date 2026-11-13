"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CountText from "@/components/ui/CountText";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  activeItems,
  practiceAreas,
  type PracticeArea,
} from "@/data/practice-areas";
import GlassIcon from "@/components/ui/GlassIcon";

/*
 * Practice areas as six expanding panels: the open panel shows that area's live campaigns,
 * the others stay narrow with their name and count. Panels open on hover or click and the
 * row cycles through them by itself while on screen. On phones and tablets they become a swipeable row of cards.
 */

const AREA_MS = 4500;
const ease = [0.22, 1, 0.36, 1] as const;
const areaTones = ["gold", "violet", "teal", "blue", "amber", "rose"] as const;

// Collapsed panels are narrow; long names use their common short form there.
const panelName = (area: PracticeArea) =>
  area.slug === "workers-compensation" ? "Workers' Comp" : area.title;

function AreaIcon({
  area,
  className,
}: {
  area: PracticeArea;
  className?: string;
}) {
  if (area.icon)
    return (
      <Image
        src={area.icon}
        alt=""
        width={40}
        height={40}
        className={`object-contain ${className ?? ""}`}
      />
    );
  if (area.Icon)
    return (
      <area.Icon strokeWidth={1.6} aria-hidden="true" className={className} />
    );
  return null;
}

function MobileAreas() {
  const rail = useRef<HTMLUListElement>(null);
  const [current, setCurrent] = useState(0);

  // Which card is in view, from the scroll position (for the dots).
  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    const onScroll = () => {
      const card = el.firstElementChild as HTMLElement | null;
      if (!card) return;
      setCurrent(Math.round(el.scrollLeft / (card.offsetWidth + 12)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const go = (i: number) => {
    const el = rail.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (el && card)
      el.scrollTo({
        left: card.offsetLeft - el.offsetLeft,
        behavior: "smooth",
      });
  };

  return (
    <div className="mt-8 lg:hidden">
      <ul
        ref={rail}
        aria-label="Practice areas"
        className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-3 overflow-x-auto px-5 pb-2 sm:scroll-px-10 [scrollbar-width:none] sm:-mx-10 sm:px-10 [&::-webkit-scrollbar]:hidden"
      >
        {practiceAreas.map((area, i) => {
          const items = activeItems(area);
          return (
            <li
              key={area.slug}
              className="w-[86%] shrink-0 snap-start sm:w-[60%]"
            >
              <article className="relative flex h-full flex-col overflow-hidden rounded-[22px] bg-[#0B231D] p-6 text-[#F5F1E8]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_100%_0%,rgba(200,162,78,0.22),transparent_65%)]"
                />
                <div className="relative flex items-start justify-between gap-3">
                  <GlassIcon
                    tone={areaTones[i % areaTones.length]}
                    size="md"
                    surface="dark"
                  >
                    <AreaIcon
                      area={area}
                      className="h-5 w-5 [filter:brightness(0)_invert(1)]"
                    />
                  </GlassIcon>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#6FCF97]/15 px-3 py-1.5 text-[0.78rem] font-semibold text-[#9BE0B6]">
                    <span
                      className="h-2 w-2 rounded-full bg-[#6FCF97]"
                      aria-hidden="true"
                    />
                    {items.length} live
                  </span>
                </div>
                <h3 className="relative mt-5 text-[1.7rem] leading-tight text-[#F5F1E8]">
                  {area.title}
                </h3>
                <p className="relative mt-2 text-[0.92rem] leading-[1.5] text-[#C9C3B4]">
                  {area.description}
                </p>
                <ul className="relative mt-4 grid gap-0">
                  {items.slice(0, 5).map((item) => (
                    <li
                      key={item.short}
                      className="flex items-center gap-2.5 border-b border-[#F5F1E8]/10 py-2 text-[0.92rem] font-medium text-[#F5F1E8]"
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D6B263]"
                        aria-hidden="true"
                      />
                      {item.short}
                    </li>
                  ))}
                  {items.length > 5 && (
                    <li className="pt-2 text-[0.85rem] text-[#A9A395]">
                      +{items.length - 5} more
                    </li>
                  )}
                </ul>
                <Link
                  href={area.href}
                  className="relative mt-auto inline-flex min-h-11 items-center gap-1.5 pt-5 text-[0.95rem] font-semibold text-[#D6B263]"
                >
                  Explore {area.title}{" "}
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.9}
                    aria-hidden="true"
                  />
                </Link>
              </article>
            </li>
          );
        })}
      </ul>

      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="flex gap-1.5">
          {practiceAreas.map((area, i) => (
            <button
              key={area.slug}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show ${area.title}`}
              aria-current={i === current}
              className="flex h-10 min-w-6 items-center justify-center px-1"
            >
              <span
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-[#0B231D]" : "w-1.5 bg-[#0B231D]/25"}`}
              />
            </button>
          ))}
        </div>
        <Link
          href="/practice-areas"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#0B231D]/20 px-4 text-[0.9rem] font-semibold text-[#0B231D]"
        >
          All practice areas{" "}
          <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

export default function ActiveCampaignsSection() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.35 });
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const running = inView && !hovered && !reduce;
  const total = practiceAreas.reduce(
    (sum, a) => sum + activeItems(a).length,
    0,
  );

  // Cycles on desktop only; on phones the stacked accordion would jump while someone reads it.
  useEffect(() => {
    if (!running || !window.matchMedia("(min-width: 1024px)").matches) return;
    const id = window.setTimeout(
      () => setIndex((i) => (i + 1) % practiceAreas.length),
      AREA_MS,
    );
    return () => window.clearTimeout(id);
  }, [index, running]);

  return (
    <section
      ref={sectionRef}
      className="ymg-practice-panels ymg-tone-sand relative isolate overflow-hidden bg-[#F6E9CC] px-5 py-16 dark:bg-[#191917] sm:px-10 lg:px-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1240px]">
        {/* Header: the number leads */}
        <div
          data-reveal-group
          className="grid grid-cols-[auto_minmax(0,1fr)] items-end gap-4 sm:gap-6 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-10"
        >
          <p
            className="font-heading text-[4.2rem] leading-[0.8] tracking-[-0.04em] text-[#D8B26B] sm:text-[7rem] lg:text-[8.5rem]"
            aria-hidden="true"
          >
            <CountText value={String(total)} />
          </p>
          <div className="lg:pb-2">
            <h2 className="max-w-[20ch] text-[1.45rem] leading-[1.1] sm:text-[1.9rem] text-[#2f3236] dark:text-[#f5ecd8] sm:text-[2.3rem] lg:text-[2.5rem]">
              <span className="sr-only">{total} </span>case types across six
              practice areas.
            </h2>
          </div>
          <Link
            href="/practice-areas"
            className="group hidden min-h-11 items-center gap-2 self-start rounded-full border lg:inline-flex border-[#d9c9a4] bg-white/70 px-5 text-[0.92rem] font-semibold text-[#2f3236] transition-colors hover:border-[#2f3236] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87b25] dark:border-white/20 dark:bg-white/[0.05] dark:text-[#f5ecd8] dark:hover:border-[#EBC982] lg:mb-2 lg:self-end"
          >
            All practice areas{" "}
            <ArrowUpRight
              size={16}
              strokeWidth={2}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Panels */}
        <div
          data-reveal
          data-reveal-delay="150"
          className="mt-10 hidden gap-2.5 lg:mt-12 lg:flex lg:h-[470px] lg:flex-row lg:gap-3"
          onMouseLeave={() => setHovered(false)}
        >
          {practiceAreas.map((area, i) => {
            const open = i === index;
            const items = activeItems(area);
            return (
              <div
                key={area.slug}
                onMouseEnter={() => {
                  setHovered(true);
                  setIndex(i);
                }}
                className={`relative min-w-0 overflow-hidden rounded-[24px] transition-[flex-grow,background-color,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:basis-0 ${
                  open
                    ? "bg-[#0B231D] text-[#F5F1E8] shadow-[0_24px_50px_rgba(11,35,29,0.28)] lg:grow-[4.5]"
                    : "bg-[#FFF8EA] text-[#2f3236] ring-1 ring-[#e6d3a6] hover:bg-white dark:bg-white/[0.04] dark:text-[#f1ead9] dark:ring-white/10 lg:grow"
                }`}
              >
                {/* Open panel atmosphere */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${open ? "opacity-100" : "opacity-0"}`}
                  style={{
                    background:
                      "radial-gradient(70% 80% at 100% 0%, rgba(200,162,78,0.22), transparent 65%), radial-gradient(50% 60% at 0% 100%, rgba(200,162,78,0.08), transparent 70%)",
                  }}
                />

                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-expanded={open}
                  aria-controls={`area-${area.slug}`}
                  aria-label={`${area.title}, ${items.length} live ${items.length === 1 ? "campaign" : "campaigns"}`}
                  className="relative flex w-full items-center gap-3 p-4 text-left focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#a87b25] lg:h-full lg:flex-col lg:items-start lg:justify-between lg:px-4 lg:py-5"
                >
                  <GlassIcon
                    tone={areaTones[i % areaTones.length]}
                    size="md"
                    surface={open ? "dark" : "light"}
                  >
                    <AreaIcon
                      area={area}
                      className="h-5 w-5 [filter:brightness(0)_invert(1)]"
                    />
                  </GlassIcon>

                  {/* Collapsed panels: a faint watermark of the area's icon fills the space */}
                  {!open && (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute left-1/2 top-[44%] hidden -translate-x-1/2 -translate-y-1/2 opacity-[0.07] dark:opacity-[0.1] lg:block"
                    >
                      <AreaIcon
                        area={area}
                        className="h-20 w-20 text-[#2f3236] dark:text-white dark:[filter:brightness(0)_invert(1)]"
                      />
                    </span>
                  )}

                  {/* Collapsed label: read left to right, name then campaign count */}
                  {!open && (
                    <span className="min-w-0 flex-1 lg:flex lg:flex-col lg:justify-end">
                      <span className="block text-[1rem] font-semibold leading-[1.2] lg:text-[0.98rem]">
                        {panelName(area)}
                      </span>
                      <span className="mt-1 block text-[0.8rem] text-[#85878a] dark:text-[#a9a59b] lg:mt-2">
                        <span className="font-semibold text-[#a87b25] dark:text-[#EBC982]">
                          {items.length}
                        </span>{" "}
                        live
                        <span className="lg:hidden">
                          {" "}
                          {items.length === 1 ? "campaign" : "campaigns"}
                        </span>
                      </span>
                    </span>
                  )}
                </button>

                {/* Open content */}
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      id={`area-${area.slug}`}
                      key={area.slug}
                      initial={reduce ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduce ? undefined : { opacity: 0 }}
                      transition={{
                        duration: 0.45,
                        delay: reduce ? 0 : 0.2,
                        ease,
                      }}
                      className="relative px-4 pb-5 lg:absolute lg:inset-0 lg:flex lg:flex-col lg:px-8 lg:pb-6 lg:pt-[84px]"
                    >
                      <div className="flex flex-wrap items-end justify-between gap-3">
                        <h3 className="text-[1.7rem] leading-tight text-[#F5F1E8] lg:text-[2.2rem]">
                          {area.title}
                        </h3>
                        <span className="inline-flex items-center gap-2 rounded-full bg-[#6FCF97]/15 px-3 py-1.5 text-[0.8rem] font-semibold text-[#9BE0B6]">
                          <span
                            className="relative flex h-2 w-2"
                            aria-hidden="true"
                          >
                            <span className="absolute inset-0 rounded-full bg-[#6fd1b8] opacity-70 motion-safe:animate-ping" />
                            <span className="relative h-2 w-2 rounded-full bg-[#6fd1b8]" />
                          </span>
                          {items.length} live
                        </span>
                      </div>
                      <p className="mt-2 max-w-[34rem] text-[0.95rem] leading-[1.5] text-[#C9C3B4]">
                        {area.description}
                      </p>

                      <ol className="mt-4 grid gap-x-8 sm:grid-cols-2">
                        {items.map((item, n) => (
                          <motion.li
                            key={item.short}
                            initial={reduce ? false : { opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.35,
                              delay: reduce ? 0 : 0.3 + n * 0.05,
                              ease,
                            }}
                            className="flex items-baseline gap-3 border-b border-[#F5F1E8]/12 py-2"
                          >
                            <span className="w-6 shrink-0 font-heading text-[0.85rem] tabular-nums text-[#D6B263]">
                              {String(n + 1).padStart(2, "0")}
                            </span>
                            <span className="min-w-0">
                              <span className="block text-[0.98rem] font-semibold text-[#F5F1E8]">
                                {item.short}
                              </span>
                              <span
                                className="block text-[0.82rem] text-[#A9A395] lg:truncate"
                                title={item.description}
                              >
                                {item.description}
                              </span>
                            </span>
                          </motion.li>
                        ))}
                      </ol>

                      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
                        <Link
                          href={area.href}
                          className="inline-flex min-h-11 items-center gap-1.5 text-[0.95rem] font-semibold text-[#D6B263] hover:text-[#F5F1E8]"
                        >
                          Explore {area.title}{" "}
                          <ArrowUpRight
                            size={16}
                            strokeWidth={1.9}
                            aria-hidden="true"
                          />
                        </Link>
                        <span className="text-[0.75rem] text-[#8C9690]">
                          Availability and jurisdictions change over time.
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Phones and tablets: a swipeable row of full cards, one practice area each */}
        <MobileAreas />
      </div>
    </section>
  );
}
