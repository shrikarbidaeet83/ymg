import Image from "next/image";
import Link from "next/link";
import CaseAcquisitionSystem from "@/components/sections/CaseAcquisitionSystem";
import {
  BadgeDollarSign,
  BarChart3,
  Bot,
  CalendarDays,
  Check,
  ClipboardList,
  FileCheck2,
  MapPin,
  Magnet,
  Network,
  ShieldCheck,
  Target,
} from "lucide-react";

/* ─── data ─────────────────────────────────────────────────── */

const proofItems = [
  { icon: ShieldCheck, label: "15+ Years",      detail: "Experience"       },
  { icon: BadgeDollarSign, label: "Millions in Case", detail: "Value Generated"  },
  { icon: Network,      label: "Trusted by",    detail: "100+ Law Firms"   },
  { icon: MapPin,       label: "Las Vegas",     detail: "Based"            },
];

const missionBullets = [
  "Performance-based pricing",
  "Expert intake & qualification",
  "AI-powered call & booking",
  "Compliant & ethical marketing",
];

const stats = [
  { value: "+42%",   label: "Conversion Rate",      sub: "Industry Average" },
  { value: "+42%",   label: "Qualified Leads",       sub: "vs last quarter"  },
  { value: "$2.3M+", label: "Case Value Generated",  sub: "vs last quarter"  },
];

const solutions = [
  {
    icon: Magnet,
    iconBg: "bg-[#e7eefb]",
    iconColor: "text-[#5b8def]",
    title: "Lead Generation",
    body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    tilt: "-rotate-[5deg] translate-y-2 sm:-rotate-[4deg] lg:-rotate-[6deg]",
  },
  {
    icon: ClipboardList,
    iconBg: "bg-[#f3e9fb]",
    iconColor: "text-[#a06ad4]",
    title: "Intake Services",
    body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    tilt: "rotate-[4deg] -translate-y-2 sm:rotate-[3deg] lg:rotate-[4deg] lg:-translate-y-3",
  },
  {
    icon: FileCheck2,
    iconBg: "bg-[#e4f6ea]",
    iconColor: "text-[#46b06a]",
    title: "Case Acquisition",
    body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    tilt: "-rotate-[4deg] translate-y-2 sm:-rotate-[4deg] sm:translate-y-3 lg:-rotate-[4deg]",
  },
  {
    icon: Bot,
    iconBg: "bg-[#fbeedd]",
    iconColor: "text-[#d8ae63]",
    title: "AI Booking",
    body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    tilt: "rotate-[5deg] -translate-y-1 sm:rotate-[4deg] lg:rotate-[6deg]",
  },
];

/* ─── proof bar (desktop 4-col grid) ───────────────────────── */

function ProofBar({ className = "" }: { className?: string }) {
  return (
    <div
      className={`grid overflow-hidden rounded-[6px] border border-[#e7d5ad] bg-white shadow-[0_10px_28px_rgba(73,59,33,0.16)] sm:grid-cols-2 lg:grid-cols-4 ${className}`}
    >
      {proofItems.map(({ icon: Icon, label, detail }) => (
        <div
          key={label}
          className="flex min-h-[46px] items-center gap-4 border-[#e3d8be] px-6 py-4
                     sm:[&:nth-child(odd)]:border-r
                     lg:border-r lg:last:border-r-0"
        >
          <Icon size={31} strokeWidth={1.8} className="shrink-0 text-[#3f4245]" />
          <div className="text-sm font-semibold leading-tight text-[#4f5356]">
            {label}
            <span className="block">{detail}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── mobile horizontal scroller ───────────────────────────── */

function MobileProofScroller() {
  return (
    <div className="mt-7 w-full min-w-0 lg:hidden">
      <div className="flex w-full snap-x snap-mandatory overflow-x-auto rounded-[6px] border border-[#e7d5ad] bg-white shadow-[0_10px_28px_rgba(73,59,33,0.16)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {proofItems.map(({ icon: Icon, label, detail }) => (
          <div
            key={label}
            className="flex min-h-[54px] w-1/3 min-w-0 shrink-0 snap-start items-center justify-center gap-1 border-r border-[#e3d8be] px-1 py-2 last:border-r-0 min-[360px]:gap-2 min-[360px]:px-2"
          >
            <Icon size={17} strokeWidth={1.8} className="shrink-0 text-[#3f4245] min-[360px]:size-[19px]" />
            <div className="min-w-0 text-left text-[0.5rem] font-semibold leading-tight text-[#4f5356] min-[360px]:text-[0.58rem]">
              {label}
              <span className="block">{detail}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── page ─────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="ymg-hero relative isolate min-h-[100svh] overflow-hidden bg-[#f8efd9] pt-[76px] text-[#3a3d42]">
        {/* Decorative flowers — desktop only */}
        <Image
          src="/images/Home page Big Flower light mode (1)-Photoroom.png"
          alt="" width={200} height={200} priority
          className="pointer-events-none absolute right-[11%] top-28 z-0 hidden opacity-20 lg:block"
        />
        <Image
          src="/images/Home page Small Flower light mode-Photoroom.png"
          alt="" width={68} height={68} priority
          className="pointer-events-none absolute right-[4.5%] top-44 z-0 hidden opacity-20 lg:block"
        />

        {/* Main two-column grid */}
        <div
          className="ymg-hero-grid relative z-10 mx-auto grid w-full items-center px-5 pb-6 sm:px-8
                     lg:min-h-[calc(100svh-76px)] lg:grid-cols-[minmax(410px,0.86fr)_minmax(520px,0.92fr)]
                     lg:gap-8 lg:px-12 lg:pb-[112px] xl:gap-12"
          style={{ maxWidth: "1440px" }}
        >
          {/* ── Left: copy ── */}
          <div className="ymg-hero-copy mx-auto flex w-full min-w-0 max-w-xl flex-col items-center pt-8 text-center
                          sm:max-w-[620px] sm:pt-12
                          lg:mx-0 lg:items-start lg:pt-0 lg:text-left">

            <h1
              className="ymg-hero-title w-full max-w-[650px] text-[clamp(2.7rem,5.2vw,5.9rem)] font-semibold
                         leading-[1.0] tracking-tight text-[#3d4145]"
            >
              From Intake to
              <span className="mt-[0.12em] block text-[#d8ae63]">Retainer</span>
            </h1>

            <p className="ymg-hero-text mt-5 max-w-[480px] text-[0.9rem] leading-[1.7] text-[#7e8082]
                          sm:mt-6 sm:text-[1rem]
                          lg:mt-7 lg:text-[1rem]">
              YMG legal is a premier legal marketing firm with over 15+ years of
              experience in acquiring cases using the power of online marketing.
              With our offices in Las Vegas, we have a specialized team to assist
              you with your law firm or legal marketing needs.
            </p>

            {/* CTAs */}
            <div className="ymg-hero-buttons mt-7 flex w-full max-w-[430px] flex-col gap-3
                            sm:mt-9 sm:flex-row sm:items-center sm:gap-4
                            lg:mt-9">
              <Link
                href="/contact"
                className="inline-flex h-[52px] items-center justify-center rounded-[4px]
                           bg-[#d9ae5d] px-8 text-sm font-bold text-[#2e3032]
                           shadow-[0_12px_28px_rgba(168,129,62,0.22)]
                           transition-colors hover:bg-[#c89f4e]"
              >
                Contact us today
              </Link>
              <Link
                href="/about"
                className="inline-flex h-[52px] items-center justify-center rounded-[4px]
                           border border-[#dfbd78] bg-[#fff6e5]/40 px-8
                           text-sm font-semibold text-[#d3a65a]
                           transition-colors hover:bg-[#fff6e5]/70"
              >
                Learn more
              </Link>
            </div>

            {/* Trust labels */}
            <div className="ymg-hero-trust mt-5 flex flex-col gap-2 text-[0.75rem] font-semibold text-[#65676a]
                            sm:flex-row sm:gap-8 lg:mt-6">
              <span className="inline-flex items-center justify-center gap-1.5 lg:justify-start">
                <Check size={12} className="text-[#757a70]" strokeWidth={2.5} />
                Results-focused approach
              </span>
              <span className="inline-flex items-center justify-center gap-1.5 lg:justify-start">
                <Check size={12} className="text-[#757a70]" strokeWidth={2.5} />
                No long-term contracts
              </span>
            </div>

            <MobileProofScroller />
          </div>

          {/* ── Right: image stage ── */}
          <div
            className="ymg-hero-stage relative mx-auto flex w-full min-w-0 max-w-[600px] items-end justify-center
                       min-h-[330px] pb-16
                       sm:min-h-[520px] sm:pb-20
                       lg:min-h-[630px] lg:max-w-[640px] lg:justify-end lg:pb-0
                       xl:max-w-[690px]"
          >
            {/* Rings */}
            <Image
              src="/images/hero-rings-bg-Photoroom.png"
              alt="" width={820} height={820} priority
              className="ymg-hero-rings pointer-events-none absolute
                         bottom-[-12%] right-[-18%] z-0
                         w-[108%] max-w-[820px] opacity-90
                         sm:right-[-10%] sm:w-[98%]
                         lg:bottom-[-9%] lg:right-[-8%] lg:w-[112%]"
            />
            {/* Woman */}
            <Image
              src="/images/girl-hero-Photoroom.png"
              alt="Smiling woman pointing toward the YMG Legal headline"
              width={690} height={760} priority
              className="ymg-hero-girl relative z-10
                         w-[88%] max-w-[400px] object-contain
                         drop-shadow-[0_20px_40px_rgba(84,59,29,0.09)]
                         sm:w-[80%] sm:max-w-[500px]
                         lg:w-[76%] lg:max-w-[560px]
                         lg:translate-x-[-1rem] lg:translate-y-[24px]
                         xl:w-[72%] xl:max-w-[620px]
                         lg:bottom-[40px]"
            />

            {/* Floating strategy buttons */}
            <div
              className="ymg-hero-floating absolute z-20 flex flex-col gap-2
                         bottom-3 left-1/2 w-[calc(100%-2rem)] max-w-[360px] -translate-x-1/2
                         sm:bottom-6
                         lg:bottom-[34px] lg:left-auto lg:right-[3.25rem]
                         lg:w-[240px] lg:translate-x-0
                         xl:right-[4.25rem]
                         
                         "
            >
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-between rounded-[4px]
                           bg-[#d9ae5d] px-4 text-xs font-bold text-[#36383b]
                           shadow-[0_8px_20px_rgba(98,75,36,0.28)]
                           "
              >
                Book Strategy call
                <CalendarDays size={14} />
              </Link>
              <Link
                href="/services/case-acquisition"
                className="inline-flex h-10 items-center justify-between rounded-[4px]
                           bg-[#d9ae5d] px-4 text-xs font-bold text-[#36383b]
                           shadow-[0_8px_20px_rgba(98,75,36,0.20)]"
              >
                Get more cases
                <BarChart3 size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Proof bar — desktop only, pinned to bottom of section */}
        <div
          className="ymg-proof-wrap pointer-events-none absolute bottom-8 left-0 right-0 z-20 hidden
                     px-4 sm:px-8 lg:block lg:px-12"
        >
          <div className="pointer-events-auto mx-auto" style={{ maxWidth: "1440px" }}>
            <ProofBar className="ymg-proof-bar max-w-[930px] xl:max-w-[960px]" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GROWTH PARTNER (dark)
      ══════════════════════════════════════════ */}
      <section className="ymg-about relative isolate overflow-hidden bg-[#403d3b] py-10 text-white sm:py-14 lg:py-20">

        {/* Rings ghost — bottom-right */}
        <Image
          src="/images/hero-rings-bg-Photoroom.png"
          alt="" width={760} height={760}
          className="ymg-about-rings pointer-events-none absolute -right-[34%] top-[-18%] z-0
                     w-[120%] max-w-none opacity-[0.35]
                     sm:-right-[20%] sm:w-[86%]
                     lg:-right-[14%] lg:top-[-26%] lg:w-[62%] lg:opacity-[0.42]"
        />

        <div className="ymg-about-inner relative z-10 mx-auto px-5 sm:px-8 lg:px-12" style={{ maxWidth: "1440px" }}>

          {/* Two-column: copy ← | card → */}
          <div className="ymg-about-grid grid items-center gap-9 lg:grid-cols-[1fr_minmax(430px,520px)] lg:gap-14">

            {/* Left */}
            <div className="ymg-about-copy order-2 text-center lg:order-1 lg:text-left">
              <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#d8ae63]">
                About YMG - Legal
              </p>

              <h2
                className="text-[clamp(1.85rem,5vw,3.2rem)] font-semibold
                           leading-[1.08] text-[#d8ae63]"
              >
                Your Growth Partner
                <span className="mt-[0.1em] block">in Legal Success</span>
              </h2>

              <p className="mx-auto mt-5 max-w-[500px] text-[0.88rem] leading-[1.75] text-[#efd99f] lg:mx-0">
                We are full-service legal marketing and intake company specializing
                in mass torts and personal injury. Our performance driven approach
                ensures you pay for results, not promises.
              </p>

              <ul className="mx-auto mt-7 max-w-[340px] space-y-3 text-left lg:mx-0">
                {missionBullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-3 text-[0.85rem] font-medium text-[#efd99f]"
                  >
                    <span
                      className="flex h-[18px] w-[18px] shrink-0 items-center justify-center
                                 rounded-full border border-[#d8ae63]/55 text-[#d8ae63]"
                    >
                      <Check size={8} strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Our Mission card */}
            <div className="ymg-about-card-wrap order-1 flex justify-center lg:order-2 lg:justify-end">
              <div className="ymg-about-card-cluster relative w-full max-w-[520px] pb-0 lg:pb-16">
              <div
                className="ymg-mission-card min-h-[214px] w-full rounded-[8px] bg-white
                           px-7 py-7 shadow-[0_20px_60px_rgba(0,0,0,0.24)]
                           sm:min-h-[240px] sm:px-9 sm:py-9 lg:min-h-[286px]"
              >
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center
                             rounded-full bg-[#fef4d8]"
                >
                  <Target size={18} strokeWidth={1.9} className="text-[#d8ae63]" />
                </div>
                <h3 className="mb-2.5 text-[1.35rem] font-medium text-[#3a3d42] sm:text-[1.65rem]">
                  Our Mission
                </h3>
                <div className="mb-3 h-px w-32 bg-[#d8ae63]" />
                <p className="max-w-[330px] text-[0.95rem] leading-[1.58] text-[#8a8c8e] sm:text-[1.12rem]">
                  To help law firms grow with a predictable pipeline of qualified
                  cases.
                </p>
              </div>

              <div className="ymg-about-stats mt-3 grid gap-2.5 sm:grid-cols-3 lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:w-[calc(100%-40px)] lg:-translate-x-1/2">
                {stats.map(({ value, label, sub }) => (
                  <div
                    key={label}
                    className="rounded-[6px] border border-[#eadfca] bg-white px-3 py-3 text-left shadow-[0_10px_26px_rgba(0,0,0,0.18)]"
                  >
                    <p className="text-[0.56rem] font-semibold leading-tight text-[#3a3d42] sm:text-[0.62rem]">
                      {label}
                    </p>
                    <p className="mt-1.5 text-[1.15rem] font-bold leading-none text-[#3a3d42] sm:text-[1.35rem]">
                      {value}
                    </p>
                    <p className="mt-1 text-[0.54rem] text-[#777] sm:text-[0.58rem]">
                      {sub}
                    </p>
                  </div>
                ))}
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FULL-FUNNEL SOLUTIONS (cards)
      ══════════════════════════════════════════ */}
      <section className="relative isolate overflow-x-clip bg-[#f8efd9] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">

          {/* Heading */}
          <div className="text-center">
            <p className="mb-3 text-[0.8rem] font-medium text-[#7a7c7e]">
              About YMG - Legal
            </p>
            <h2 className="text-[clamp(1.9rem,5vw,3.1rem)] font-semibold leading-[1.12] text-[#2f3236]">
              Full-Funnel Legal Growth Solutions
            </h2>
          </div>

          {/* Cards — single overlapping tilted row, horizontal scroll when overflowing */}
          <div
            className="mt-12 flex snap-x snap-mandatory overflow-x-auto px-4 pb-8 pt-4
                       [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                       lg:mt-16 lg:justify-center lg:overflow-visible lg:px-6 lg:pb-12 lg:pt-6"
          >
            {solutions.map(({ icon: Icon, iconBg, iconColor, title, body, tilt }, i) => (
              <div
                key={title}
                className={`group w-[240px] shrink-0 snap-start
                           transition-transform duration-300 ease-out
                           hover:z-10 hover:rotate-0 hover:translate-y-0
                           lg:w-[260px]
                           ${i !== 0 ? "-ml-6 lg:-ml-7" : ""} ${tilt}`}
              >
                <div
                  className="flex h-full flex-col rounded-2xl bg-white px-6 py-7
                             shadow-[0_14px_40px_rgba(73,59,33,0.10)]
                             transition-all duration-300 ease-out
                             group-hover:-translate-y-3 group-hover:scale-[1.06]
                             group-hover:shadow-[0_30px_64px_rgba(73,59,33,0.22)]"
                >
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${iconBg}`}
                  >
                    <Icon size={22} strokeWidth={1.8} className={iconColor} />
                  </div>
                  <h3 className="mb-2.5 text-[1.15rem] font-semibold text-[#2f3236]">
                    {title}
                  </h3>
                  <p className="text-[0.85rem] leading-[1.65] text-[#8a8c8e]">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseAcquisitionSystem />
    </>
  );
}
