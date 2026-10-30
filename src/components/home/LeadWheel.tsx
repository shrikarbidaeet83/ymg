"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { Check, FileSignature, Headphones, LifeBuoy, ListChecks, Megaphone, Pause, Play, type LucideIcon } from "lucide-react";
import GlassIcon from "@/components/ui/GlassIcon";

/*
 * "One lead, five stages" (content guide: Acquire → Qualify → Intake → Convert → Support).
 * Plays by itself while on screen: one stage at a time, the lead's file on the right updates and
 * its checklist ticks through. Visitors can click any stage; hovering pauses the tour.
 */

type Stage = {
  title: string;
  body: string;
  Icon: LucideIcon;
  status: string;
  metric: { value: string; label: string };
  checks: string[];
};

const stages: Stage[] = [
  {
    title: "Acquire",
    body: "Targeted campaigns reach people actively looking for legal help.",
    Icon: Megaphone,
    status: "New inquiry",
    metric: { value: "9:47 PM", label: "Inquiry received" },
    checks: ["Searched “car accident lawyer near me”", "Clicked your Free Case Review ad", "Called your tracked campaign number"],
  },
  {
    title: "Qualify",
    body: "Every inquiry is screened against the criteria your firm sets.",
    Icon: ListChecks,
    status: "Meets your criteria",
    metric: { value: "6 / 6", label: "Firm criteria met" },
    checks: ["Accident 2 days ago, inside your window", "Treatment started, injury documented", "No attorney yet, liability clear"],
  },
  {
    title: "Intake",
    body: "A live, US-based specialist answers and documents the case.",
    Icon: Headphones,
    status: "Intake complete",
    metric: { value: "8 sec", label: "Time to answer" },
    checks: ["Answered live, day or night", "Incident, injury and insurance recorded", "Case summary sent to your team"],
  },
  {
    title: "Convert",
    body: "Follow-up and e-signature turn a qualified lead into a client.",
    Icon: FileSignature,
    status: "Retainer signed",
    metric: { value: "Signed", label: "Retainer e-signed" },
    checks: ["Consultation booked, Thu 5:30 PM", "Retainer sent for e-signature", "Signed file synced to your CRM"],
  },
  {
    title: "Support",
    body: "Our team keeps the case moving after the client signs.",
    Icon: LifeBuoy,
    status: "Case support started",
    metric: { value: "3", label: "Providers' records requested" },
    checks: ["Medical records requested", "Client file organized for your team", "Status updates until the case is ready"],
  },
];

const stageTones = ["gold", "blue", "violet", "rose", "teal"] as const;
const STAGE_MS = 2200;
const ease = [0.22, 1, 0.36, 1] as const;

export default function LeadWheel() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.35 });
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [stopped, setStopped] = useState(Boolean(reduce));
  const barRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const elapsed = useRef(0);
  const railRef = useRef<HTMLOListElement>(null);

  const running = inView && !hovered && !stopped && !reduce;

  // Fill the active stage's bar and move on when it is full.
  useEffect(() => {
    barRefs.current.forEach((bar, i) => {
      if (bar) bar.style.transform = `scaleX(${i < active ? 1 : i === active ? elapsed.current / STAGE_MS : 0})`;
    });
    if (!running) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      elapsed.current += now - last;
      last = now;
      const bar = barRefs.current[active];
      if (bar) bar.style.transform = `scaleX(${Math.min(1, elapsed.current / STAGE_MS)})`;
      if (elapsed.current >= STAGE_MS) {
        elapsed.current = 0;
        setActive((a) => (a + 1) % stages.length);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, running]);

  // On phones the rail scrolls sideways; keep the active stage in view.
  useEffect(() => {
    const rail = railRef.current;
    const item = rail?.children[active] as HTMLElement | undefined;
    if (!rail || !item || rail.scrollWidth <= rail.clientWidth) return;
    rail.scrollTo({ left: item.offsetLeft - 20, behavior: reduce ? "auto" : "smooth" });
  }, [active, reduce]);

  const select = (i: number) => {
    elapsed.current = 0;
    setActive(i);
  };

  const stage = stages[active];

  return (
    <section
      ref={sectionRef}
      id="how-a-lead-moves"
      className="ymg-lead-journey relative isolate overflow-hidden bg-[#3d4145] px-5 py-20 text-white sm:px-10 lg:px-16 lg:py-24"
    >
      {/* Backdrop: warm glow and a fine gold grid. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(60%_70%_at_75%_40%,rgba(216,178,107,0.18),transparent_70%),radial-gradient(45%_45%_at_10%_55%,rgba(235,201,130,0.08),transparent_70%)]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: "linear-gradient(rgba(235,201,130,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(235,201,130,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(70% 70% at 50% 50%, #000, transparent 85%)",
        }}
      />

      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-[#EBC982]">How a lead moves</p>
            <h2 className="mt-3 text-[2.2rem] leading-[1.05] text-white sm:text-[2.8rem] lg:text-[3.2rem]">
              One lead. Five stages. <span className="text-[#EBC982]">One team.</span>
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setStopped((s) => !s)}
            className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.85rem] font-semibold text-white/85 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EBC982] sm:self-auto"
          >
            {stopped ? <Play size={14} fill="currentColor" aria-hidden="true" /> : <Pause size={14} fill="currentColor" aria-hidden="true" />}
            {stopped ? "Play the tour" : "Pause the tour"}
          </button>
        </div>

        <div
          className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Stage rail */}
          <ol ref={railRef} className="relative flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] lg:flex-col lg:gap-2.5 lg:overflow-visible [&::-webkit-scrollbar]:hidden" aria-label="Stages">
            {stages.map(({ title, body, Icon }, i) => {
              const on = i === active;
              const done = i < active;
              return (
                <li key={title} className="shrink-0 lg:shrink">
                  <button
                    type="button"
                    onClick={() => select(i)}
                    aria-current={on ? "step" : undefined}
                    className={`group relative flex w-full items-start gap-4 overflow-hidden rounded-[16px] border px-4 py-3.5 text-left transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EBC982] lg:px-5 lg:py-4 ${
                      on ? "border-[#D8B26B]/60 bg-white/[0.07] shadow-[0_18px_40px_rgba(0,0,0,0.3)]" : "border-white/10 bg-white/[0.02] hover:border-white/25"
                    }`}
                  >
                    <GlassIcon tone={done ? "teal" : stageTones[i]} dim={!on && !done} surface="dark">
                      {done ? <Check size={17} strokeWidth={2.6} /> : <Icon size={17} strokeWidth={2} />}
                    </GlassIcon>
                    <span className="min-w-0 pr-2">
                      <span className="flex items-baseline gap-2">
                        <span className="text-[0.72rem] font-semibold tabular-nums text-white/45">0{i + 1}</span>
                        <span className={`text-[1.08rem] font-semibold transition-colors duration-500 ${on ? "text-white" : "text-white/70"}`}>{title}</span>
                      </span>
                      <span
                        className={`hidden overflow-hidden text-[0.92rem] leading-[1.45] text-white/70 transition-all duration-500 lg:block ${
                          on ? "mt-1 max-h-20 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        {body}
                      </span>
                    </span>
                    {/* Time left on this stage */}
                    <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[2px] bg-white/5">
                      <span
                        ref={(el) => {
                          barRefs.current[i] = el;
                        }}
                        className="block h-full origin-left bg-[linear-gradient(90deg,#c99a45,#EBC982)]"
                        style={{ transform: "scaleX(0)" }}
                      />
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          {/* The lead's file */}
          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[40px] bg-[radial-gradient(closest-side,rgba(216,178,107,0.22),transparent)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[24px] border border-white/12 bg-[linear-gradient(160deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-7" aria-live="polite">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-white/50">Sample lead · illustrative</p>
                  <p className="mt-1.5 font-heading text-[1.35rem] leading-tight text-white sm:text-[1.55rem]">Motor vehicle accident</p>
                  <p className="mt-0.5 text-[0.92rem] text-white/60">Las Vegas, NV · rear-ended on I-15</p>
                </div>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={stage.status}
                    initial={reduce ? false : { opacity: 0, y: -6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={reduce ? undefined : { opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ duration: 0.35, ease }}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#23796b]/25 px-3 py-1.5 text-[0.82rem] font-semibold text-[#8be0c8] ring-1 ring-[#6fd1b8]/30"
                  >
                    <Check size={13} strokeWidth={3} aria-hidden="true" /> {stage.status}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Stage track */}
              <div className="mt-6 grid grid-cols-5 gap-1.5" aria-hidden="true">
                {stages.map((s, i) => (
                  <span key={s.title} className="grid gap-1.5">
                    <span className={`h-1.5 rounded-full transition-colors duration-500 ${i < active ? "bg-[#6fd1b8]" : i === active ? "bg-[#EBC982]" : "bg-white/10"}`} />
                    <span className={`text-[0.7rem] font-semibold transition-colors duration-500 ${i === active ? "text-[#EBC982]" : i < active ? "text-white/60" : "text-white/30"}`}>
                      {s.title}
                    </span>
                  </span>
                ))}
              </div>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={stage.title}
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease }}
                  className="mt-6 grid gap-5 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center sm:gap-7"
                >
                  <div className="rounded-[18px] border border-[#D8B26B]/30 bg-[#D8B26B]/10 px-5 py-4 sm:min-w-[170px]">
                    <GlassIcon tone={stageTones[active]} size="sm" surface="dark">
                      <stage.Icon size={15} strokeWidth={2} />
                    </GlassIcon>
                    <p className="mt-3 font-heading text-[2.2rem] leading-none text-white">{stage.metric.value}</p>
                    <p className="mt-1.5 text-[0.85rem] text-white/65">{stage.metric.label}</p>
                  </div>
                  <ul className="grid gap-2.5">
                    {stage.checks.map((check, i) => (
                      <motion.li
                        key={check}
                        initial={reduce ? false : { opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: reduce ? 0 : 0.1 + i * 0.18, ease }}
                        className="flex items-center gap-3 rounded-[12px] bg-white/[0.04] px-3.5 py-2.5 text-[0.95rem] text-white/85"
                      >
                        <motion.span
                          initial={reduce ? false : { scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 18, delay: reduce ? 0 : 0.18 + i * 0.18 }}
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6fd1b8] text-[#16332d]"
                        >
                          <Check size={12} strokeWidth={3.2} aria-hidden="true" />
                        </motion.span>
                        {check}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
