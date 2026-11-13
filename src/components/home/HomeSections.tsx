"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import GlassIcon, { toneCycle } from "@/components/ui/GlassIcon";
import { caseStudy } from "@/data/social-proof";
import SectionHeader from "@/components/home/SectionHeader";
import CountText from "@/components/ui/CountText";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Check,
  FileCheck2,
  FlaskConical,
  Headset,
  LockKeyhole,
  MapPin,
  PhoneCall,
  Route,
  ShieldCheck,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";

/* ─── What does your firm need? ─────────────────────────────── */

const needs = [
  {
    title: "More qualified cases",
    body: "Acquisition campaigns built around the cases your firm is prepared to handle.",
    links: [
      {
        label: "Personal Injury Lead Generation",
        href: "/services/personal-injury-leads",
      },
      { label: "MVA Lead Generation", href: "/services/mva-leads" },
      { label: "Mass Tort Lead Generation", href: "/services/mass-tort-leads" },
    ],
  },
  {
    title: "Stronger intake",
    body: "Screening, follow-up, documentation and call handling built around your process.",
    links: [{ label: "Legal Intake Services", href: "/services/legal-intake" }],
  },
  {
    title: "More capacity",
    body: "Marketing channels and operational support without building every role in-house.",
    links: [
      { label: "Law Firm Marketing", href: "/services/law-firm-marketing" },
      {
        label: "Outsourced Paralegal & Law Firm Support",
        href: "/services/law-firm-support",
      },
    ],
  },
];

export function NeedPaths() {
  return (
    <section className="ymg-section-padding bg-[#FFF5E0]">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-[34rem] text-[2rem] leading-[1.1] text-[#2f3236] sm:text-[2.5rem] lg:text-[2.75rem]">
            What does your firm need?
          </h2>
          <Link
            href="/services"
            className="ymg-text-link inline-flex items-center gap-2 text-[1rem] font-semibold text-[#8a6420] hover:text-[#5e4416]"
          >
            View All Services{" "}
            <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-[18px] border border-[#ead3a0] bg-white shadow-[0_14px_30px_rgba(82,64,34,0.08)] md:grid-cols-3">
          {needs.map(({ title, body, links }, index) => (
            <div
              key={title}
              className={`flex flex-col p-7 lg:p-9 ${index > 0 ? "border-t border-[#efe0bd] md:border-l md:border-t-0" : ""}`}
            >
              <h3 className="text-[1.55rem] leading-tight text-[#2f3236] lg:text-[1.75rem]">
                {title}
              </h3>
              <p className="mt-3 text-[1.02rem] leading-[1.55] text-[#5e6064]">
                {body}
              </p>
              <ul className="mt-6 grid gap-1 border-t border-[#efe0bd] pt-4">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between gap-3 rounded-[8px] px-2 py-2.5 text-[1rem] font-semibold text-[#3d4145] transition-colors hover:bg-[#fff5e0] hover:text-[#8a6420]"
                    >
                      {link.label}
                      <ArrowRight
                        size={16}
                        strokeWidth={1.8}
                        aria-hidden="true"
                        className="shrink-0 text-[#c99a45] transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── The problem: YMG client data (deck, chapter 01) ─────── */

const problemRings = [
  {
    value: 35,
    suffix: "%",
    label: "Leads lost",
    detail: "of all inquiries",
    color: "#e0775c",
  },
  {
    value: 48,
    suffix: "%",
    label: "Missed calls",
    detail: "after hours",
    color: "#d8b26b",
  },
  {
    value: 60,
    suffix: "%",
    label: "Poor conversion",
    detail: "never followed up",
    color: "#5cc2a8",
  },
  {
    value: 30,
    suffix: "+",
    label: "Time wasted",
    detail: "hours a week on admin",
    color: "#9cbcf0",
    hours: true,
  },
];

export function ProblemStats() {
  return (
    <section className="ymg-problem-section ymg-band relative overflow-hidden bg-[#3d4145] px-5 py-20 text-[#f5ecd8] sm:px-10 lg:px-16 lg:py-32">
      {/* A full-width charcoal band, so the problem breaks the cream page edge to edge. */}
      <div
        aria-hidden="true"
        data-parallax="0.1"
        className="absolute inset-x-0 -inset-y-24 bg-[radial-gradient(50%_70%_at_100%_0%,rgba(216,178,107,0.26),transparent_70%),radial-gradient(40%_60%_at_0%_100%,rgba(235,201,130,0.1),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-[1240px]">
        <SectionHeader
            tone="dark"
            align="center"
          title="Most firms lose cases"
          accent="before the first conversation."
        />
        <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-14">
          <div className="border-l-2 border-[#e0775c] pl-5">
            <CountUp
              to={250}
              prefix="$"
              suffix="K+"
              className="font-heading text-[4rem] leading-none text-[#f08a6f] sm:text-[5rem]"
            />
            <p className="mt-2 font-heading text-[1.4rem] text-[#f5ecd8]">
              Revenue lost annually
            </p>
            <p className="mt-1 text-[1rem] text-[#d9d1c0]">
              Average missed opportunity from poor intake and lead management.
            </p>
          </div>
          <ul
            data-reveal-group
            className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4"
          >
            {problemRings.map((ring) => (
              <li key={ring.label} className="text-center">
                <Ring {...ring} />
                <p className="mt-4 font-heading text-[1.15rem] text-[#f5ecd8]">
                  {ring.label}
                </p>
                <p className="text-[0.92rem] text-[#c9c1b0]">{ring.detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#f5ecd8]/15 pt-6">
          <p className="text-[0.85rem] text-[#b9b1a0]">
            Based on YMG client data.
          </p>
          <Link
            href="/services/legal-intake"
            className="inline-flex min-h-11 items-center gap-2 text-[1rem] font-semibold text-[#EBC982] hover:text-white"
          >
            See how Legal Intake closes the gap{" "}
            <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function useCountUp(to: number, active: boolean, reduce: boolean) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (reduce) {
      const id = window.setTimeout(() => setN(to), 0);
      return () => window.clearTimeout(id);
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / 1400);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, reduce, to]);
  return n;
}

function CountUp({
  to,
  prefix = "",
  suffix = "",
  className,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = Boolean(useReducedMotion());
  const n = useCountUp(to, inView, reduce);
  return (
    <p ref={ref} className={className} aria-label={`${prefix}${to}${suffix}`}>
      <span aria-hidden="true">
        {prefix}
        {n}
        {suffix}
      </span>
    </p>
  );
}

function Ring({
  value,
  suffix,
  color,
  hours,
}: {
  value: number;
  suffix: string;
  color: string;
  hours?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = Boolean(useReducedMotion());
  const n = useCountUp(value, inView, reduce);
  const R = 46;
  const C = 2 * Math.PI * R;
  // The hours ring is a clock face, not a percentage: it fills completely.
  const fill = hours ? 1 : value / 100;
  return (
    <div
      ref={ref}
      className="relative mx-auto h-[118px] w-[118px]"
      role="img"
      aria-label={`${value}${suffix}${hours ? " hours a week" : ""}`}
    >
      <svg
        viewBox="0 0 110 110"
        className="h-full w-full -rotate-90"
        aria-hidden="true"
      >
        <circle
          cx="55"
          cy="55"
          r={R}
          fill="none"
          stroke="rgba(245,236,216,0.12)"
          strokeWidth="9"
        />
        <motion.circle
          cx="55"
          cy="55"
          r={R}
          fill="none"
          stroke={color}
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={C}
          initial={false}
          animate={{ strokeDashoffset: inView ? C * (1 - fill) : C }}
          transition={{ duration: reduce ? 0 : 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <span
        aria-hidden="true"
        className="absolute inset-0 flex flex-col items-center justify-center font-heading text-[1.85rem] leading-none text-[#f5ecd8]"
      >
        {n}
        {suffix}
        {hours && (
          <span className="mt-1 font-sans text-[0.68rem] font-semibold tracking-[0.08em] text-[#c9c1b0]">
            HRS / WEEK
          </span>
        )}
      </span>
    </div>
  );
}

/* ─── How a lead moves (guide: Why YMG Legal) ──────────────── */

const steps = [
  {
    title: "Acquire",
    body: "Reach prospective clients through targeted marketing and case acquisition campaigns.",
  },
  {
    title: "Qualify",
    body: "Screen opportunities against the case criteria established by your firm.",
  },
  {
    title: "Intake",
    body: "Collect and organize the information your team needs to evaluate the opportunity.",
  },
  {
    title: "Convert",
    body: "Support follow-up, consultation, and retainer workflows where included in the engagement.",
  },
  {
    title: "Support",
    body: "Extend your firm's internal team with operational and legal support services.",
  },
];

export function LeadJourney() {
  return (
    <section className="ymg-section-padding bg-[#FFF5E0]">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
          <h2 className="text-[2rem] leading-[1.1] text-[#2f3236] sm:text-[2.5rem] lg:text-[2.75rem]">
            Built Around the Way Law Firms Actually Grow
          </h2>
          <p className="text-[1.06rem] leading-[1.6] text-[#5e6064]">
            Generating traffic is only one part of growth. The real challenge is
            connecting marketing, lead quality, intake, follow-up, and case
            conversion into a process your firm can manage and scale. YMG Legal
            helps bring those pieces together.
          </p>
        </div>

        <ol className="relative mt-12 grid gap-8 md:grid-cols-5 md:gap-5">
          <span
            aria-hidden="true"
            className="absolute left-[18px] top-0 h-full w-px bg-[#d8b26b] md:left-0 md:top-[18px] md:h-px md:w-full"
          />
          {steps.map(({ title, body }, index) => (
            <li key={title} className="relative pl-14 md:pl-0 md:pt-14">
              <span className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-[#D8B26B] font-heading text-[0.95rem] text-[#2f3236] shadow-[0_6px_14px_rgba(168,123,37,0.25)]">
                {index + 1}
              </span>
              <h3 className="text-[1.4rem] leading-tight text-[#2f3236]">
                {title}
              </h3>
              <p className="mt-2 text-[0.98rem] leading-[1.55] text-[#5e6064]">
                {body}
              </p>
            </li>
          ))}
        </ol>

        <Link
          href="/how-it-works"
          className="mt-10 inline-flex items-center gap-2 text-[1rem] font-semibold text-[#8a6420] hover:text-[#5e4416]"
        >
          See how it works{" "}
          <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

/* ─── One partner + compliance ─────────────────────────────── */

// Deck, chapter 05: "Why law firms choose YMG Legal" (confirmed by YMG).
// Only CEO-approved facts (15+ years, Las Vegas team, 24/7 intake) and campaigns already on the site.
const credentials: { value: string; label: string; Icon: LucideIcon }[] = [
  { value: "15+ years", label: "in legal marketing", Icon: Award },
  { value: "Las Vegas, NV", label: "US-based team", Icon: MapPin },
  { value: "24/7", label: "live intake, nights and weekends", Icon: Headset },
  {
    value: "5 mass torts",
    label: "Tylenol, Paraquat, Hair Relaxer, Roundup, Talc",
    Icon: FlaskConical,
  },
];

/*
 * Compares ways of working, not named companies. "Lead-only vendor" and "in-house" are described by
 * what the model is by definition, and anything that differs between providers says "Varies".
 * Keep every YMG cell to approved claims (see PRODUCT.md / approved claims list).
 */
type Cell = { text: string; good?: boolean };
const comparison: { row: string; ymg: Cell; vendor: Cell; inhouse: Cell }[] = [
  {
    row: "Built only for law firms",
    ymg: { text: "Yes", good: true },
    vendor: { text: "Varies" },
    inhouse: { text: "Yes", good: true },
  },
  {
    row: "Intake and qualification",
    ymg: { text: "Included", good: true },
    vendor: { text: "Leads only" },
    inhouse: { text: "Your staff" },
  },
  {
    row: "Live intake at night and weekends",
    ymg: { text: "24/7, US-based", good: true },
    vendor: { text: "Varies" },
    inhouse: { text: "Extra shifts to staff" },
  },
  {
    row: "From ad to signed retainer",
    ymg: { text: "One team", good: true },
    vendor: { text: "Stops at the lead" },
    inhouse: { text: "Several hires and tools" },
  },
  {
    row: "Consent and lead-source tracking",
    ymg: { text: "Built in", good: true },
    vendor: { text: "Ask for proof" },
    inhouse: { text: "You set it up" },
  },
  {
    row: "Time to launch",
    ymg: { text: "As little as 1 week", good: true },
    vendor: { text: "Varies" },
    inhouse: { text: "Hire and train first" },
  },
  {
    row: "Commitment",
    ymg: { text: "No long-term contract", good: true },
    vendor: { text: "Varies" },
    inhouse: { text: "Salaries and overhead" },
  },
];

const compliancePractices: { title: string; body: string; Icon: LucideIcon }[] =
  [
    {
      title: "Consent-aware acquisition",
      body: "Campaigns and forms built around documented consent.",
      Icon: FileCheck2,
    },
    {
      title: "TCPA-conscious practices",
      body: "Calls and texts follow consent, timing and opt-out rules.",
      Icon: PhoneCall,
    },
    {
      title: "Lead-source tracking",
      body: "Each lead traced back to the campaign it came from.",
      Icon: Route,
    },
    {
      title: "Firm-defined criteria",
      body: "Screening runs on the rules your firm sets.",
      Icon: SlidersHorizontal,
    },
    {
      title: "Secure data handling",
      body: "Client information stored and shared with access controls.",
      Icon: LockKeyhole,
    },
  ];

export function OnePartner() {
  return (
    <section className="ymg-why-ymg ymg-section-padding bg-[#FFF5E0] dark:bg-[#191917]">
      <div className="mx-auto max-w-[1240px]">
        <SectionHeader
          title="Why law firms"
          accent="choose YMG Legal."
          intro="Most firms weigh a lead vendor against building intake themselves. Here is how the three compare."
        />

        {/* Credentials */}
        <ul
          data-reveal-group
          className="mt-10 grid grid-cols-2 gap-x-4 gap-y-6 border-y border-[#eadbb7] py-6 dark:border-white/10 lg:mt-12 lg:grid-cols-4 lg:py-7"
        >
          {credentials.map(({ value, label, Icon }, i) => (
            <li key={value} className="flex items-start gap-3 lg:justify-center">
              <GlassIcon tone={toneCycle[i % toneCycle.length]}>
                <Icon size={17} strokeWidth={2} />
              </GlassIcon>
              <span className="min-w-0">
                <span className="block font-heading text-[1.15rem] leading-tight text-[#2f3236] dark:text-[#f5ecd8] sm:text-[1.3rem]">
                  <CountText value={value} />
                </span>
                <span className="mt-1 block text-[0.85rem] leading-[1.4] text-[#6b6c6f] dark:text-[#a9a294]">{label}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-10 lg:mt-12">
            {/* Comparison */}
            <div
              data-reveal
              className="overflow-hidden rounded-[24px] border border-[#eadbb7] bg-white/75 dark:border-white/10 dark:bg-white/[0.04]"
            >
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">
                  YMG Legal compared with a lead-only vendor and an in-house
                  intake team
                </caption>
                <thead className="max-sm:sr-only">
                  <tr className="text-[0.8rem] font-semibold uppercase tracking-[0.1em]">
                    <th
                      scope="col"
                      className="w-[34%] px-5 py-4 text-[#8b8478] dark:text-[#8f887b]"
                    >
                      <span className="sr-only">What firms compare</span>
                    </th>
                    <th
                      scope="col"
                      className="border-x border-[#e7cf98] bg-[#f6e6c1] px-4 py-4 text-[#2f3236] dark:border-[#D8B26B]/30 dark:bg-[#D8B26B]/20 dark:text-[#EBC982]"
                    >
                      YMG Legal
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-4 text-[#6b6c6f] dark:text-[#a9a294]"
                    >
                      Lead-only vendor
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-4 text-[#6b6c6f] dark:text-[#a9a294]"
                    >
                      In-house team
                    </th>
                  </tr>
                </thead>
                <tbody data-reveal-group>
                  {comparison.map(({ row, ymg, vendor, inhouse }) => (
                    <tr
                      key={row}
                      className="border-t border-[#f0e4c8] dark:border-white/[0.07] max-sm:grid max-sm:grid-cols-3 max-sm:gap-x-2 max-sm:px-4 max-sm:pb-3.5 max-sm:pt-3"
                    >
                      <th
                        scope="row"
                        className="px-5 py-3.5 text-[0.95rem] font-semibold text-[#2f3236] dark:text-[#f5ecd8] max-sm:col-span-3 max-sm:px-0 max-sm:pb-2 max-sm:pt-0"
                      >
                        {row}
                      </th>
                      {[
                        { cell: ymg, label: "YMG Legal", accent: true },
                        {
                          cell: vendor,
                          label: "Lead-only vendor",
                          accent: false,
                        },
                        {
                          cell: inhouse,
                          label: "In-house team",
                          accent: false,
                        },
                      ].map(({ cell, label, accent }) => (
                        <td
                          key={label}
                          className={`px-4 py-4 align-middle text-[0.9rem] leading-[1.35] max-sm:rounded-[10px] max-sm:px-2.5 max-sm:py-2 max-sm:text-[0.84rem] ${
                            accent
                              ? "border-x border-[#e7cf98] bg-[#fbf1da] font-semibold text-[#2f3236] dark:border-[#D8B26B]/30 dark:bg-[#D8B26B]/10 dark:text-[#f5ecd8] max-sm:border"
                              : "text-[#6b6c6f] dark:text-[#a9a294] max-sm:bg-[#fbf3e1] dark:max-sm:bg-white/[0.04]"
                          }`}
                        >
                          <span
                            className="block text-[0.7rem] font-semibold uppercase tracking-[0.08em] opacity-70 sm:hidden"
                            aria-hidden="true"
                          >
                            {label}
                          </span>
                          <span className="inline-flex items-start gap-2">
                            {cell.good && accent && (
                              <span
                                className="mt-[1px] grid size-[18px] shrink-0 place-items-center rounded-full bg-[#2f3236] text-[#EBC982] dark:bg-[#EBC982] dark:text-[#2f3236]"
                                aria-hidden="true"
                              >
                                <Check size={11} strokeWidth={3} />
                              </span>
                            )}
                            {cell.text}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="border-t border-[#f0e4c8] px-5 py-3.5 text-[0.8rem] leading-[1.5] text-[#7a7468] dark:border-white/[0.07] dark:text-[#8f887b]">
                Compares common ways of working, not any named company.
                Providers differ, so ask any vendor for specifics.
              </p>
            </div>

        </div>

        {/* Compliance: one slim row closing the argument, not a section of its own */}
        <div className="mt-14 border-t border-[#eadbb7] pt-10 dark:border-white/10 lg:mt-16">
          <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
            <div data-reveal className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2f3236] text-[#EBC982]" aria-hidden="true">
                <ShieldCheck size={22} strokeWidth={1.6} />
              </span>
              <div>
                <h3 className="text-[1.45rem] leading-tight text-[#2f3236] dark:text-[#f5ecd8] sm:text-[1.7rem]">Built with compliance in mind</h3>
                <p className="mt-1 max-w-[40rem] text-[0.95rem] leading-[1.55] text-[#5e6064] dark:text-[#bdb6a6]">
                  Campaigns and intake are structured with advertising, consent, privacy and professional-responsibility requirements in mind.
                </p>
              </div>
            </div>
            <Link
              href="/compliance"
              data-reveal
              className="group inline-flex min-h-11 shrink-0 items-center gap-2 text-[0.95rem] font-semibold text-[#8a6420] hover:text-[#5e4416] dark:text-[#EBC982]"
            >
              How we handle compliance
              <ArrowRight size={16} strokeWidth={1.8} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
          <ul data-reveal-group className="mt-8 grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-5" aria-label="Compliance practices">
            {compliancePractices.map(({ title, body, Icon }) => (
              <li key={title} className="flex gap-3 lg:flex-col lg:gap-3">
                <Icon size={20} strokeWidth={1.8} className="mt-0.5 shrink-0 text-[#a87b25] dark:text-[#EBC982]" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-[0.98rem] font-semibold text-[#2f3236] dark:text-[#f5ecd8]">{title}</span>
                  <span className="mt-0.5 block text-[0.86rem] leading-[1.45] text-[#6b6c6f] dark:text-[#a9a294]">{body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* One verified client result, shown with the reviews as proof (light card on the sand band). */
export function CaseResult() {
  if (!caseStudy.show) return null;
  return (
    <figure
      data-reveal
      className="mt-6 grid overflow-hidden rounded-[22px] border border-[#ecdcb6] bg-white dark:border-white/10 dark:bg-white/[0.04] lg:mt-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
    >
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-[#8a6420] dark:text-[#EBC982]">Client result</p>
          <span className="rounded-full border border-[#e3d6bb] px-2.5 py-1 text-[0.75rem] text-[#6b6c6f] dark:border-white/15 dark:text-[#a9a294]">{caseStudy.period}</span>
        </div>
        <p className="mt-3 font-heading text-[1.35rem] leading-tight text-[#2f3236] dark:text-[#f5ecd8]">
          {caseStudy.firm}, {caseStudy.region}
        </p>
        <dl className="mt-6 grid grid-cols-3 gap-4">
          {caseStudy.metrics.map(({ value, label }) => (
            <div key={label}>
              <dt className="sr-only">{label}</dt>
              <dd className="font-heading text-[2rem] leading-none text-[#2f3236] dark:text-[#EBC982] sm:text-[2.6rem]">
                <CountText value={value} />
              </dd>
              <dd className="mt-2 text-[0.85rem] leading-[1.4] text-[#6b6c6f] dark:text-[#a9a294]">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="flex flex-col border-t border-[#f0e4c8] bg-[#fbf3e1] p-6 dark:border-white/10 dark:bg-white/[0.03] sm:p-8 lg:border-l lg:border-t-0">
        <blockquote className="font-heading text-[1.3rem] leading-[1.4] text-[#2f3236] dark:text-[#f5ecd8] sm:text-[1.45rem]">
          &ldquo;{caseStudy.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-3 text-[0.9rem] text-[#6b6c6f] dark:text-[#a9a294]">&mdash; {caseStudy.role}</figcaption>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
          <Link
            href="/contact#booking"
            className="group inline-flex min-h-11 items-center gap-2 text-[0.95rem] font-semibold text-[#8a6420] hover:text-[#5e4416] dark:text-[#EBC982]"
          >
            Ask us for the full case study
            <ArrowRight size={16} strokeWidth={1.8} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
          <p className="text-[0.78rem] text-[#7a7468] dark:text-[#8f887b]">Results vary by firm, market and case type.</p>
        </div>
      </div>
    </figure>
  );
}
