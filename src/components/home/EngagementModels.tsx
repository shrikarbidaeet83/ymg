"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import GlassIcon from "@/components/ui/GlassIcon";
import SectionHeader from "@/components/home/SectionHeader";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Minus, RefreshCw } from "lucide-react";

import { pillars, models } from "@/data/plans";

const nextSteps = [
  {
    title: "Strategy call",
    when: "30 min",
    body: "We review your case volume, intake process, target case types and where leads are being lost.",
  },
  {
    title: "Custom proposal",
    when: "Within 48 hrs",
    body: "Services, deliverables, timeline and pricing scoped to your firm.",
  },
  {
    title: "Onboarding & setup",
    when: "1–2 weeks",
    body: "Campaign setup, intake script approval, CRM integration and automation, all before go-live.",
  },
  {
    title: "Launch & first 30 days",
    when: "Days 1–30",
    body: "Campaigns go live with daily monitoring, weekly reporting and ongoing adjustments.",
  },
  {
    title: "Ongoing optimization",
    when: "Monthly",
    body: "Month-over-month refinement based on lead quality, cost per case and conversion data.",
  },
];

export function EngagementModels({
  showCompare = true,
}: {
  showCompare?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <section className="ymg-engagement ymg-section-padding bg-[#FFF5E0] dark:bg-[#191917]">
      <div className="mx-auto max-w-[1240px]">
        <SectionHeader
          title="Three ways to work"
          accent="with YMG."
          intro="Pick where your firm needs the most support. Every engagement is scoped to your firm before it starts."
          action={
            showCompare ? { label: "Compare plans", href: "/plans" } : undefined
          }
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {models.map(
            ({ name, body, bestFor, Icon, includes, featured }, i) => (
              <motion.article
                key={name}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`ymg-model-card relative flex flex-col rounded-[20px] p-7 ${
                  featured
                    ? "bg-[#3d4145] text-[#f5ecd8] shadow-[0_30px_70px_rgba(47,40,28,0.25)] ring-2 ring-[#D8B26B]"
                    : "border border-[#eadbb7] bg-white/80 text-[#2f3236] dark:border-white/10 dark:bg-white/[0.04] dark:text-[#f5ecd8]"
                }`}
              >
                {featured && (
                  <span className="absolute -top-3 right-6 rounded-full bg-[#D8B26B] px-3 py-1 text-[0.8rem] font-bold text-[#2f3236] shadow-[0_6px_14px_rgba(0,0,0,0.2)]">
                    ★ Most popular
                  </span>
                )}
                <GlassIcon
                  tone={featured ? "gold" : i === 0 ? "blue" : "teal"}
                  size="lg"
                  surface={featured ? "dark" : "light"}
                >
                  <Icon size={20} strokeWidth={2} />
                </GlassIcon>
                <h3
                  className={`mt-5 text-[1.5rem] leading-tight ${featured ? "text-[#f5ecd8]" : "text-[#2f3236] dark:text-[#f5ecd8]"}`}
                >
                  {name}
                </h3>
                <p
                  className={`mt-3 text-[1rem] leading-[1.55] ${featured ? "text-[#d9d1c0]" : "text-[#5e6064] dark:text-[#bdb6a6]"}`}
                >
                  {body}
                </p>
                <ul
                  className="mt-6 grid gap-2.5 border-t pt-5"
                  style={{
                    borderColor: featured
                      ? "rgba(255,255,255,0.12)"
                      : "#eadbb7",
                  }}
                >
                  {pillars.map((pillar, pi) => (
                    <li
                      key={pillar}
                      className={`flex items-center gap-3 text-[0.95rem] ${includes[pi] ? (featured ? "text-[#f5ecd8]" : "text-[#2f3236] dark:text-[#f5ecd8]") : featured ? "text-white/40" : "text-[#a5a39d]"}`}
                    >
                      {includes[pi] ? (
                        <Check
                          size={16}
                          strokeWidth={2.6}
                          className={
                            featured ? "text-[#5FD39E]" : "text-[#1E9E6A]"
                          }
                          aria-label="Included"
                        />
                      ) : (
                        <Minus
                          size={16}
                          strokeWidth={2}
                          aria-label="Not included"
                        />
                      )}
                      {pillar}
                    </li>
                  ))}
                </ul>
                <p
                  className={`mt-auto pt-6 text-[0.9rem] ${featured ? "text-[#c9c1b0]" : "text-[#5e6064] dark:text-[#bdb6a6]"}`}
                >
                  <span className="font-semibold">Best for:</span> {bestFor}
                </p>
                <Link
                  href="/contact#booking"
                  className={`mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-full text-[0.92rem] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EBC982] ${
                    featured
                      ? "bg-[#F5F1E8] text-[#0B231D] hover:bg-white"
                      : "border border-[#d9c9a4] text-[#2f3236] hover:border-[#2f3236] dark:border-white/20 dark:text-[#f5ecd8] dark:hover:border-[#EBC982]"
                  }`}
                >
                  Discuss this plan{" "}
                  <ArrowRight size={16} strokeWidth={1.9} aria-hidden="true" />
                </Link>
              </motion.article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

/* Small animated pictures, one per step; each plays while its step is the current one. */
function StepVisual({ step, on }: { step: number; on: boolean }) {
  const reduce = useReducedMotion();
  const play = on && !reduce;
  const gold = on ? "#1E9E6A" : "#CFE3D8";

  if (step === 0) {
    // Call waveform
    return (
      <span className="flex h-10 items-center gap-[3px]" aria-hidden="true">
        {[0.5, 0.9, 0.6, 1, 0.7, 0.45, 0.8].map((h, i) => (
          <motion.span
            key={i}
            className="w-[3px] rounded-full"
            style={{ background: gold }}
            initial={false}
            animate={
              play
                ? { height: [8, 36 * h, 10, 30 * h, 8] }
                : { height: 10 + 18 * h }
            }
            transition={
              play
                ? {
                    duration: 1.1,
                    repeat: Infinity,
                    delay: i * 0.08,
                    ease: "easeInOut",
                  }
                : { duration: 0.3 }
            }
          />
        ))}
      </span>
    );
  }
  if (step === 1) {
    // Proposal being written
    return (
      <span
        className="relative flex h-11 w-9 flex-col gap-1.5 rounded-[5px] border bg-white px-1.5 pt-2 shadow-sm"
        style={{ borderColor: gold }}
        aria-hidden="true"
      >
        {[1, 0.75, 0.9, 0.55].map((w, i) => (
          <motion.span
            key={i}
            className="h-[3px] rounded-full"
            style={{ background: gold }}
            initial={false}
            animate={{ width: play ? ["0%", `${w * 100}%`] : `${w * 100}%` }}
            transition={{ duration: 0.45, delay: play ? 0.15 + i * 0.22 : 0 }}
          />
        ))}
      </span>
    );
  }
  if (step === 2) {
    // Setup checklist
    return (
      <span className="grid gap-1" aria-hidden="true">
        {["Campaigns", "Scripts", "CRM"].map((label, i) => (
          <span
            key={label}
            className="flex items-center gap-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.06em] text-[#14724C]"
          >
            <motion.span
              className="flex h-3.5 w-3.5 items-center justify-center rounded-full"
              initial={false}
              animate={{
                backgroundColor: on ? "#1E9E6A" : "#DCE8E1",
                scale: play ? [0.6, 1.15, 1] : 1,
              }}
              transition={{ duration: 0.35, delay: play ? 0.2 + i * 0.25 : 0 }}
            >
              <Check size={9} strokeWidth={3.5} className="text-white" />
            </motion.span>
            {label}
          </span>
        ))}
      </span>
    );
  }
  if (step === 3) {
    // Results climbing after launch
    return (
      <svg viewBox="0 0 64 40" className="h-10 w-16" aria-hidden="true">
        <path d="M2 38 H62" stroke="#DCE8E1" strokeWidth="1" />
        <motion.path
          d="M2 34 L14 30 L24 31 L34 22 L44 18 L54 9 L62 5"
          fill="none"
          stroke={gold}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={false}
          animate={{ pathLength: play ? [0, 1] : 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
        <motion.circle
          cx="62"
          cy="5"
          r="3"
          fill={on ? "#1E9E6A" : "#CFE3D8"}
          initial={false}
          animate={{ scale: play ? [0, 1.3, 1] : 1 }}
          transition={{ delay: play ? 0.85 : 0, duration: 0.3 }}
        />
      </svg>
    );
  }
  // Monthly optimisation loop
  return (
    <motion.span
      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed"
      style={{ borderColor: gold, color: gold }}
      initial={false}
      animate={{ rotate: play ? 360 : 0 }}
      transition={
        play
          ? { duration: 2.4, repeat: Infinity, ease: "linear" }
          : { duration: 0.3 }
      }
      aria-hidden="true"
    >
      <RefreshCw size={16} strokeWidth={2} />
    </motion.span>
  );
}

const STEP_MS = 1800;

export function NextSteps() {
  const reduce = useReducedMotion();
  const listRef = useRef<HTMLOListElement>(null);
  const inView = useInView(listRef, { amount: 0.35 });
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [rail, setRail] = useState({
    top: 0,
    height: 0,
    x: 28,
    stops: [] as number[],
  });
  // Every open step uses the height of the longest description, so the section never changes height.
  const [bodyHeight, setBodyHeight] = useState(0);

  // Measure where each step's marker sits, so the light on the rail stops exactly on it.
  const measure = useCallback(() => {
    const list = listRef.current;
    if (!list) return;
    const markers = Array.from(
      list.querySelectorAll<HTMLElement>("[data-marker]"),
    );
    const box = list.getBoundingClientRect();
    const stops = markers.map(
      (m) => m.getBoundingClientRect().top - box.top + m.offsetHeight / 2,
    );
    const x = markers[0]
      ? markers[0].getBoundingClientRect().left -
        box.left +
        markers[0].offsetWidth / 2
      : 28;
    setRail({
      top: stops[0] ?? 0,
      height: (stops[stops.length - 1] ?? 0) - (stops[0] ?? 0),
      x,
      stops,
    });
    const bodies = Array.from(
      list.querySelectorAll<HTMLElement>("[data-body] > span"),
    );
    if (bodies.length)
      setBodyHeight(Math.max(...bodies.map((b) => b.offsetHeight)));
  }, []);

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(list);
    return () => ro.disconnect();
  }, [measure]);

  // Step bodies open and close with a transition; measure again once they settle, and lock the
  // list's height to that settled size so the section never moves while steps change.
  const [listHeight, setListHeight] = useState<number | undefined>(undefined);
  useEffect(() => {
    const id = window.setTimeout(() => {
      measure();
      if (listRef.current) setListHeight(listRef.current.offsetHeight);
    }, 600);
    return () => window.clearTimeout(id);
  }, [active, measure]);
  useEffect(() => {
    const reset = () => setListHeight(undefined);
    window.addEventListener("resize", reset);
    return () => window.removeEventListener("resize", reset);
  }, []);
  useEffect(() => {
    if (listHeight !== undefined) return;
    const id = window.setTimeout(
      () => listRef.current && setListHeight(listRef.current.offsetHeight),
      650,
    );
    return () => window.clearTimeout(id);
  }, [listHeight]);

  useEffect(() => {
    if (!inView || hovered || reduce) return;
    const id = window.setTimeout(
      () => setActive((a) => (a + 1) % nextSteps.length),
      active === nextSteps.length - 1 ? STEP_MS * 1.6 : STEP_MS,
    );
    return () => window.clearTimeout(id);
  }, [active, inView, hovered, reduce]);

  const fill = rail.height
    ? ((rail.stops[active] ?? 0) - rail.top) / rail.height
    : 0;

  return (
    <section className="ymg-next-steps relative isolate overflow-hidden bg-[#F0F4F1] px-5 py-24 sm:px-10 lg:px-12 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(45%_60%_at_75%_50%,rgba(200,162,78,0.12),transparent_70%)]"
      />
      <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-16">
        <div>
          <h2 className="text-[clamp(1.93rem,3.52vw,3.2rem)] leading-[1.03] tracking-[-0.015em] text-[#0B231D]">
            From first call to{" "}
            <span className="text-[#8C6B22]">live campaigns</span> in weeks.
          </h2>
          <p className="mt-5 max-w-[30rem] text-[1.04rem] leading-[1.6] text-[#4E5A54] dark:text-[#bdb6a6]">
            A free strategy call, a proposal in 48 hours, and campaigns live in
            as little as a week.
          </p>

          {/* The three promises as a compact timeline strip */}
          <div className="mt-7 grid grid-cols-3 overflow-hidden rounded-[18px] border border-[#0B231D]/12 bg-white/70 dark:border-white/10 dark:bg-white/[0.04]">
            {[
              { value: "30", unit: "min", label: "Free strategy call" },
              { value: "48", unit: "hrs", label: "Custom proposal" },
              { value: "1", unit: "wk", label: "To launch, at fastest" },
            ].map(({ value, unit, label }, i) => (
              <div
                key={label}
                className={`px-4 py-4 ${i ? "border-l border-[#0B231D]/12 dark:border-white/10" : ""}`}
              >
                <p className="font-heading leading-none text-[#0B231D] dark:text-[#f5ecd8]">
                  <span className="text-[2rem]">{value}</span>
                  <span className="ml-1 text-[0.95rem] text-[#8C6B22]">
                    {unit}
                  </span>
                </p>
                <p className="mt-1.5 text-[0.8rem] leading-tight text-[#4E5A54] dark:text-[#bdb6a6]">
                  {label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-3 flex items-center gap-2 text-[0.88rem] font-medium text-[#0B231D] dark:text-[#f1ead9]">
            <Check
              size={15}
              strokeWidth={2.6}
              className="text-[#1E9E6A]"
              aria-hidden="true"
            />{" "}
            No long-term contracts required to start
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/contact#booking"
              className="inline-flex items-center gap-2 rounded-full bg-[#0B231D] px-6 py-3.5 text-[0.98rem] font-semibold text-white shadow-[0_12px_26px_rgba(47,50,54,0.22)] transition-colors hover:bg-[#102E26] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8A24E] dark:bg-[#D8B26B] dark:text-[#1f2023] dark:hover:bg-[#e6c27b]"
            >
              Book a free strategy call{" "}
              <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Roadmap: a light travels down the rail and each step comes alive as it arrives */}
        <div style={{ height: listHeight }}>
          <ol
            ref={listRef}
            className="relative grid gap-4 lg:gap-5"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            aria-label="What happens after you call"
          >
            <span
              aria-hidden="true"
              className="absolute w-[2px] -translate-x-1/2 rounded-full bg-[#0B231D]/12 dark:bg-white/10"
              style={{ left: rail.x, top: rail.top, height: rail.height }}
            />
            <motion.span
              aria-hidden="true"
              className="absolute w-[2px] -translate-x-1/2 origin-top rounded-full bg-[linear-gradient(180deg,#34C08A,#1E9E6A)]"
              style={{ left: rail.x, top: rail.top, height: rail.height }}
              initial={false}
              animate={{ scaleY: fill }}
              transition={{
                duration: reduce ? 0 : 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute z-10 h-[46px] w-[46px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#1E9E6A] shadow-[0_0_0_5px_rgba(30,158,106,0.14),0_0_22px_rgba(30,158,106,0.35)]"
              style={{ left: rail.x }}
              initial={false}
              animate={{ top: rail.stops[active] ?? 0 }}
              transition={{
                duration: reduce ? 0 : 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            {nextSteps.map((step, i) => {
              const on = i === active;
              const done = i < active;
              return (
                <li key={step.title}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-current={on ? "step" : undefined}
                    className={`relative flex w-full items-center gap-4 rounded-[18px] border px-3 py-4 text-left transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8A24E] sm:gap-5 sm:pr-5 ${
                      on
                        ? "border-[#1E9E6A]/40 bg-white shadow-[0_22px_44px_rgba(11,35,29,0.12)]"
                        : "border-[#0B231D]/10 bg-white/60 hover:bg-white"
                    }`}
                  >
                    <span
                      data-marker
                      className={`relative z-[5] flex h-[34px] w-[34px] shrink-0 translate-x-[-2px] items-center justify-center rounded-full font-heading text-[0.95rem] transition-colors duration-500 sm:ml-1 ${
                        on
                          ? "bg-[#1E9E6A] text-white"
                          : done
                            ? "bg-[#1E9E6A] text-white"
                            : "bg-[#E3ECE6] text-[#0B231D] dark:bg-white/10 dark:text-[#EBC982]"
                      }`}
                    >
                      {done ? (
                        <Check size={15} strokeWidth={3} aria-hidden="true" />
                      ) : (
                        i + 1
                      )}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span
                          className={`font-heading text-[1.15rem] leading-tight transition-colors sm:text-[1.22rem] ${on ? "text-[#0B231D] dark:text-[#f5ecd8]" : "text-[#0B231D]/75 dark:text-[#d9d1c0]"}`}
                        >
                          {step.title}
                        </span>
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[0.76rem] font-semibold transition-colors ${on ? "bg-[#E3F4EC] text-[#14724C]" : "bg-[#E3ECE6] text-[#0B231D]"}`}
                        >
                          {step.when}
                        </span>
                      </span>
                      <span
                        data-body
                        className={`block overflow-hidden text-[0.94rem] leading-[1.5] text-[#4E5A54] transition-[height,opacity] duration-500 dark:text-[#bdb6a6] ${on ? "opacity-100" : "opacity-0"}`}
                        style={{ height: on ? bodyHeight : 0 }}
                      >
                        <span className="block pt-1.5">{step.body}</span>
                      </span>
                    </span>
                    <span
                      className={`hidden w-16 shrink-0 items-center justify-center transition-opacity duration-500 sm:flex ${on ? "opacity-100" : "opacity-0"}`}
                    >
                      {on && <StepVisual step={i} on />}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
