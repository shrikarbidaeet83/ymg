"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
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

type Service = { id: string; ms: number; tab: string; hint: string; title: string; body: string; href: string; cta: string; Scene: ComponentType };

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
        cta: "Mass Tort & Class Action",
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

export default function ServiceShowcase({ showAll = true }: { showAll?: boolean }) {
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
      if (bar) bar.style.transform = `scaleX(${i === index ? elapsed.current / services[index].ms : 0})`;
    });
    if (!running) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      elapsed.current += now - last;
      last = now;
      const bar = barRefs.current[index];
      if (bar) bar.style.transform = `scaleX(${Math.min(1, elapsed.current / services[index].ms)})`;
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
    rail.scrollTo({ left: tab.offsetLeft - 20, behavior: reduce ? "auto" : "smooth" });
  }, [index, reduce]);

  const select = (i: number) => {
    elapsed.current = 0;
    setIndex(i);
  };
  const go = (step: number) => select((index + step + services.length) % services.length);

  return (
    <section ref={sectionRef} className="ymg-service-showcase relative isolate overflow-hidden bg-[#FFF5E0] px-5 py-14 sm:px-10 lg:px-16 lg:py-16">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(55%_60%_at_70%_55%,rgba(235,201,130,0.28),transparent_70%)]" />

      <div className="mx-auto max-w-[1200px]">
        <SectionHeader eyebrow="What we run for your firm" title="Seven services." accent="One connected system." action={showAll ? { label: "All services", href: "/services" } : undefined} />

        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-8">
          {/* Service list, grouped by where the case is */}
          <div
            ref={railRef}
            role="tablist"
            aria-label="Services"
            aria-orientation="vertical"
            className="relative -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:px-0 lg:mx-0 lg:flex-col lg:gap-3.5 lg:overflow-visible [&::-webkit-scrollbar]:hidden"
          >
            {groups.map((group) => (
              <div key={group.title} className="flex shrink-0 gap-2 lg:flex-col lg:gap-1">
                <p className="hidden px-3 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#a87b25] lg:block">{group.title}</p>
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
                      className={`group relative flex shrink-0 items-center gap-3 overflow-hidden rounded-[14px] px-3 py-2.5 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87b25] lg:py-2 ${
                        selected
                          ? "bg-[#2f3236] text-white shadow-[0_14px_30px_rgba(47,50,54,0.22)]"
                          : "bg-white/70 text-[#2f3236] ring-1 ring-[#eadbb7] hover:bg-white dark:bg-white/5 dark:text-[#f1ead9] dark:ring-white/10 lg:bg-transparent lg:ring-0 lg:hover:bg-white/70 dark:lg:bg-transparent dark:lg:hover:bg-white/5"
                      }`}
                    >
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[0.75rem] font-bold tabular-nums transition-colors ${
                          selected ? "bg-[#D8B26B] text-[#1f2023]" : "bg-[#f3e6c8] text-[#8a6420]"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span className="min-w-0">
                        <span className="block whitespace-nowrap text-[0.95rem] font-semibold">{s.tab}</span>
                        <span className={`hidden text-[0.8rem] lg:block ${selected ? "text-white/65" : "text-[#85878a] dark:text-[#a9a59b]"}`}>{s.hint}</span>
                      </span>
                      {selected && <ArrowRight size={16} strokeWidth={2} aria-hidden="true" className="ml-auto hidden text-[#EBC982] lg:block" />}
                      {/* Time left on this step */}
                      <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[2px]">
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

          {/* The selected service, working */}
          <div
            id="service-panel"
            role="tabpanel"
            aria-labelledby={`tab-${current.id}`}
            className="relative min-w-0"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.id}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease }}
              >
                <div className="flex flex-col gap-4 px-1 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                  <div className="min-w-0">
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[#a87b25]">
                      Step {index + 1} of {services.length}
                    </p>
                    <h3 className="mt-1.5 text-[1.45rem] leading-tight text-[#2f3236] sm:text-[1.7rem]">{current.title}</h3>
                    <p className="mt-2 max-w-[38rem] text-[0.98rem] leading-[1.55] text-[#5e6064]">{current.body}</p>
                  </div>
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

                <div className="mt-4">
                  {/* Scenes play 1.4x faster here than on the service pages, to match the shorter tabs. */}
                  <SceneSpeed.Provider value={SHOWCASE_SPEED}>
                    <current.Scene />
                  </SceneSpeed.Provider>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1">
                  <Link href={current.href} className="ymg-text-link inline-flex min-h-11 items-center gap-2 text-[0.98rem] font-semibold text-[#8a6420] hover:text-[#5e4416]">
                    Explore {current.cta} <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
                  </Link>
                  <span className="flex gap-1.5" aria-hidden="true">
                    {services.map((s, i) => (
                      <span key={s.id} className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-[#2f3236]" : "w-1.5 bg-[#d9c9a4]"}`} />
                    ))}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
