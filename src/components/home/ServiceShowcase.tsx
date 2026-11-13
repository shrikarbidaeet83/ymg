"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SearchToLead from "@/components/illustrations/SearchToLead";
import PayPerCall from "@/components/illustrations/PayPerCall";
import CriteriaScreening from "@/components/illustrations/CriteriaScreening";
import IntakeNightShift from "@/components/illustrations/IntakeNightShift";
import FollowUpSequence from "@/components/illustrations/FollowUpSequence";
import RetainerSigning from "@/components/illustrations/RetainerSigning";
import MedicalChronology from "@/components/illustrations/MedicalChronology";
import { SceneSpeed } from "@/components/illustrations/Scene";
import SectionHeader from "@/components/home/SectionHeader";

const SHOWCASE_SPEED = 1.4;

type Service = {
  id: string;
  ms: number;
  tab: string;
  hint: string;
  title: string;
  body: string;
  href: string;
  cta: string;
  Scene: ComponentType;
};

// The deck's service pillars in the order a case moves through them, each shown working in its own scene.
const groups: { title: string; services: Service[] }[] = [
  {
    title: "Get the case",
    services: [
      {
        id: "generation",
        ms: 4000,
        tab: "Case generation",
        hint: "Google, Meta, YouTube",
        title: "Campaigns built around your case types and markets",
        body: "Google Search, Meta, YouTube and pay-per-call campaigns that reach people actively looking for legal help.",
        href: "/services/law-firm-marketing",
        cta: "Law Firm Marketing",
        Scene: SearchToLead,
      },
      {
        id: "calls",
        ms: 3900,
        tab: "Pay-per-call",
        hint: "Live, screened calls",
        title: "High-intent calls, screened live",
        body: "Inbound calls from people searching for legal help, transferred to your team when they meet your criteria.",
        href: "/services/pay-per-call",
        cta: "Pay-Per-Call",
        Scene: PayPerCall,
      },
    ],
  },
  {
    title: "Win the client",
    services: [
      {
        id: "screening",
        ms: 3900,
        tab: "Qualification",
        hint: "Your criteria first",
        title: "Screened against your criteria first",
        body: "Every inquiry is checked against the requirements your firm sets before it reaches your intake team.",
        href: "/services/mass-tort-leads",
        cta: "Mass Tort Leads",
        Scene: CriteriaScreening,
      },
      {
        id: "intake",
        ms: 4500,
        tab: "24/7 intake",
        hint: "Nights and weekends",
        title: "Calls answered after hours, on weekends and holidays",
        body: "Trained intake specialists follow your firm's scripts so prospective clients reach a person, not voicemail.",
        href: "/services/legal-intake",
        cta: "Legal Intake Services",
        Scene: IntakeNightShift,
      },
      {
        id: "follow-up",
        ms: 4900,
        tab: "Follow-up",
        hint: "Text, email, calls",
        title: "Followed up until they're ready to talk",
        body: "Text, email and live re-engagement keep prospects moving instead of going cold after the first contact.",
        href: "/services/outbound-client-acquisition",
        cta: "Outbound Client Acquisition",
        Scene: FollowUpSequence,
      },
      {
        id: "retainer",
        ms: 4200,
        tab: "Retainers",
        hint: "E-sign, same day",
        title: "Guided to a signed retainer",
        body: "Digital retainer delivery and confirmation, with signed agreements synced to your case management system.",
        href: "/services/retainer-signing",
        cta: "Legal Contract & Retainer",
        Scene: RetainerSigning,
      },
    ],
  },
  {
    title: "Work the case",
    services: [
      {
        id: "support",
        ms: 4400,
        tab: "Case support",
        hint: "Records, chronologies",
        title: "Records and chronologies handled for your team",
        body: "Medical record retrieval, review and chronologies so your attorneys stay focused on legal work.",
        href: "/services/law-firm-support",
        cta: "Paralegal & Firm Support",
        Scene: MedicalChronology,
      },
    ],
  },
];

const services = groups.flatMap((g) => g.services);
const ease = [0.22, 1, 0.36, 1] as const;

export default function ServiceShowcase({
  showAll = true,
}: {
  showAll?: boolean;
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const current = services[index];
  const railRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.4 });
  const [hovered, setHovered] = useState(false);
  const barRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const elapsed = useRef(0);
  const running = inView && !hovered && !reduce;

  // Steps play by themselves in a loop; the active step's bar shows the time left.
  useEffect(() => {
    barRefs.current.forEach((bar, i) => {
      if (bar)
        bar.style.transform = `scaleX(${i === index ? elapsed.current / services[index].ms : 0})`;
    });
    if (!running) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      elapsed.current += now - last;
      last = now;
      const bar = barRefs.current[index];
      if (bar)
        bar.style.transform = `scaleX(${Math.min(1, elapsed.current / services[index].ms)})`;
      if (elapsed.current >= services[index].ms) {
        elapsed.current = 0;
        setIndex((i) => (i + 1) % services.length);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [index, running]);

  // On phones the service list scrolls sideways; keep the selected one in view.
  useEffect(() => {
    const rail = railRef.current;
    const tab = rail?.querySelector<HTMLElement>(`#tab-${services[index].id}`);
    if (!rail || !tab || rail.scrollWidth <= rail.clientWidth) return;
    rail.scrollTo({
      // Centre the selected tab, so it is never half cut at an edge.
      left: tab.offsetLeft - (rail.clientWidth - tab.offsetWidth) / 2,
      behavior: reduce ? "auto" : "smooth",
    });
  }, [index, reduce]);

  const select = (i: number) => {
    elapsed.current = 0;
    setIndex(i);
  };
  const go = (step: number) =>
    select((index + step + services.length) % services.length);

  return (
    <section
      ref={sectionRef}
      className="ymg-service-showcase relative isolate overflow-hidden bg-[#FFF5E0] px-5 py-14 sm:px-10 lg:px-16 lg:py-16"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(55%_60%_at_70%_55%,rgba(235,201,130,0.28),transparent_70%)]"
      />

      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          title="Seven services."
          accent="One connected system."
          action={
            showAll ? { label: "All services", href: "/services" } : undefined
          }
        />

        <div
          data-reveal
          data-reveal-delay="150"
          className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-8"
        >
          {/* Service list, grouped by where the case is */}
          <div
            ref={railRef}
            role="tablist"
            aria-label="Services"
            aria-orientation="vertical"
            className="relative -mx-5 -my-3 flex snap-x gap-2 overflow-x-auto scroll-px-5 px-5 py-3 [scrollbar-width:none] sm:mx-0 sm:px-0 lg:mx-0 lg:my-0 lg:flex-col lg:gap-3.5 lg:overflow-visible lg:py-0 [&::-webkit-scrollbar]:hidden"
          >
            {groups.map((group) => (
              <div
                key={group.title}
                className="flex shrink-0 gap-2 lg:flex-col lg:gap-1"
              >
                <p className="hidden px-3 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#8C6B22] lg:block">
                  {group.title}
                </p>
                {group.services.map((s) => {
                  const i = services.indexOf(s);
                  const selected = i === index;
                  return (
                    <button
                      key={s.id}
                      id={`tab-${s.id}`}
                      role="tab"
                      type="button"
                      aria-selected={selected}
                      aria-controls="service-panel"
                      onClick={() => select(i)}
                      className={`group relative flex shrink-0 snap-start items-center gap-2.5 overflow-hidden rounded-full py-2 pl-2 pr-4 lg:gap-3 lg:rounded-[14px] lg:px-3 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87b25] lg:py-2 ${
                        selected
                          ? "bg-[#2f3236] text-white shadow-[0_8px_18px_rgba(47,50,54,0.18)] lg:shadow-[0_14px_30px_rgba(47,50,54,0.22)]"
                          : "bg-white/70 text-[#2f3236] ring-1 ring-[#eadbb7] hover:bg-white dark:bg-white/5 dark:text-[#f1ead9] dark:ring-white/10 lg:bg-transparent lg:ring-0 lg:hover:bg-white/70 dark:lg:bg-transparent dark:lg:hover:bg-white/5"
                      }`}
                    >
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[0.75rem] font-bold tabular-nums transition-colors ${
                          selected
                            ? "bg-[#D8B26B] text-[#1f2023]"
                            : "bg-[#f3e6c8] text-[#8a6420]"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span className="whitespace-nowrap text-[0.9rem] font-semibold lg:text-[0.95rem]">
                        {s.tab}
                      </span>
                      {/* Time left on this step */}
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-4 bottom-0 h-[2px] lg:inset-x-0"
                      >
                        <span
                          ref={(el) => {
                            barRefs.current[i] = el;
                          }}
                          className="block h-full origin-left bg-[linear-gradient(90deg,#c99a45,#EBC982)]"
                          style={{ transform: "scaleX(0)" }}
                        />
                      </span>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          {/* The selected service, working: the scene carries its own headline, so the panel adds only
              the link and the arrows. The panel never changes height while services rotate:
              every service's heading is stacked in one grid cell (the tallest sets the height), and the
              scene area holds the tallest scene seen so far (with a measured floor per breakpoint). */}
          <div
            id="service-panel"
            role="tabpanel"
            aria-labelledby={`tab-${current.id}`}
            className="relative min-w-0"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* One fixed height per breakpoint, measured from the tallest scene at the end of its animation.
                A fixed box (not one that grows with its content) can never feed back into itself. */}
            {/* Phones: the scene at 80% and its own height. Old and new scenes share one grid cell while they
                cross-fade, so the panel never collapses between them. */}
            <div className="grid items-start transition-[height] sm:h-[590px] lg:h-[552px]">
              <AnimatePresence initial={false}>
                <motion.div
                  key={current.id}
                  initial={
                    reduce
                      ? false
                      : { opacity: 0, transform: "translateY(12px)" }
                  }
                  animate={{ opacity: 1, transform: "translateY(0px)" }}
                  exit={
                    reduce
                      ? undefined
                      : { opacity: 0, transform: "translateY(-8px)" }
                  }
                  transition={{ duration: 0.3, ease }}
                  className="grid [grid-area:1/1] max-sm:[zoom:0.8] sm:h-full [&>figure]:sm:h-full"
                >
                  {/* Scenes play 1.4x faster here than on the service pages, to match the shorter tabs. */}
                  <SceneSpeed.Provider value={SHOWCASE_SPEED}>
                    <current.Scene />
                  </SceneSpeed.Provider>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* One row on every screen: the link (shortened on phones) and the arrows */}
            <div className="mt-4 flex items-center justify-between gap-3 px-1">
              <Link
                href={current.href}
                className="ymg-text-link inline-flex min-h-11 min-w-0 items-center gap-1.5 text-[0.92rem] font-semibold text-[#8a6420] hover:text-[#5e4416] sm:text-[0.98rem]"
              >
                <span className="hidden sm:inline">Explore</span>
                <span className="truncate">{current.cta}</span>
                <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
              </Link>
              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous service"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e3d6bb] bg-white text-[#2f3236] dark:border-white/20 dark:bg-white/10 dark:text-white transition-colors hover:border-[#c9a14f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87b25]"
                >
                  <ArrowLeft size={17} strokeWidth={1.9} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next service"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2f3236] text-white transition-colors hover:bg-[#1f2023] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87b25]"
                >
                  <ArrowRight size={17} strokeWidth={1.9} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
