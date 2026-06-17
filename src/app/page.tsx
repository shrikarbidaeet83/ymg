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
  ExternalLink,
  FileCheck2,
  FileText,
  FlaskConical,
  HeartPulse,
  Mail,
  MapPin,
  Magnet,
  Network,
  Phone,
  Plus,
  Scale,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

/* ─── data ─────────────────────────────────────────────────── */

const proofItems = [
  { icon: ShieldCheck, label: "15+ Years", detail: "Experience" },
  { icon: BadgeDollarSign, label: "Millions in Case", detail: "Value Generated" },
  { icon: Network, label: "Trusted by", detail: "100+ Law Firms" },
  { icon: MapPin, label: "Las Vegas", detail: "Based" },
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

const lawFirmLogos = [
  { name: "Law Logo", src: "/images/law-firms/law-logo.svg" },
  { name: "III Trial Lawyers", src: "/images/law-firms/iii-trial-lawyers.svg" },
  { name: "Alliance Legal Partners", src: "/images/law-firms/alliance-legal-partners.svg" },
  { name: "Halavanau Law Office", src: "/images/law-firms/halavanau-law-office.svg" },
  { name: "Morgan Maxwell Attorney & Law", src: "/images/law-firms/morgan-maxwell.svg" },
  { name: "Erol Gulistan Law Firm", src: "/images/law-firms/erol-gulistan-law-firm.svg" },
  { name: "Good Law", src: "/images/law-firms/good-law.svg" },
  { name: "Attorney & Law", src: "/images/law-firms/attorney-law.svg" },
];

const practiceAreas = [
  { icon: FileText, label: "Mass", detail: "Torts" },
  { icon: Plus, label: "Personal", detail: "Injury" },
  { icon: HeartPulse, label: "Tylenol Pregnancy", detail: "Lawsuits" },
  { icon: FlaskConical, label: "Hair Relaxer", detail: "Cancer Lawsuit" },
  { icon: Sparkles, label: "Talcum Powder", detail: "Lawsuits" },
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
    <div className="relative z-30 mt-7 w-full min-w-0 lg:hidden">
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
              className="absolute z-20 flex flex-col gap-2
                         bottom-5 left-1/2 w-[calc(100%-24px)] max-w-[320px] -translate-x-1/2
                         sm:bottom-7 sm:w-[300px]
                         lg:bottom-[14px] lg:left-auto lg:right-[2.25rem]
                         lg:w-[250px] lg:translate-x-0
                         xl:left-[15.35rem] xl:right-auto xl:w-[280px] xl:translate-x-0

                         "
            >
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-between rounded-[4px]
                           bg-[#d9ae5d] px-4   text-xs font-bold text-[#36383b]
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
      <section className="ymg-about relative isolate overflow-hidden bg-[#404040] py-10 text-white sm:py-14 lg:py-20">

        {/* Rings ghost — bottom-right */}
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

              <p className="ymg-about-text mx-auto mt-5 max-w-[500px] text-[0.88rem] leading-[1.75] text-[#efd99f] lg:mx-0">
                We are full-service legal marketing and intake company specializing
                in mass torts and personal injury. Our performance driven approach
                ensures you pay for results, not promises.
              </p>

              <ul className="ymg-about-list mx-auto mt-7 max-w-[340px] space-y-3 text-left lg:mx-0">
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
                className="ymg-mission-card relative min-h-[214px] w-full rounded-[8px] bg-white
                           px-7 py-7 shadow-[0_20px_60px_rgba(0,0,0,0.24)]
                           sm:min-h-[240px] sm:px-9 sm:py-9 lg:min-h-[286px]"
              >
                <Image
                  src="/images/mission-bullseye.webp"
                  alt=""
                  width={120}
                  height={120}
                  className="pointer-events-none absolute right-7 top-7 h-16 w-16 object-contain sm:right-8 sm:top-8 sm:h-20 sm:w-20"
                />
                <h3 className="mb-2.5 pr-20 text-[1.35rem] font-medium text-[#3a3d42] sm:pr-24 sm:text-[1.65rem]">
                  Our Mission
                </h3>
                <div className="mb-3 h-px w-32 bg-[#d8ae63]" />
                <p className="max-w-[330px] pt-5 text-[1.08rem] leading-[1.56] text-[#8a8c8e] sm:text-[1.24rem] lg:text-[1.4rem]">
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
      <section className="relative isolate overflow-x-clip bg-[#fff5E0] pt-6 lg:pb-10 lg:pt-12">
        <Image
          src="/images/Home page Big Flower light mode (1)-Photoroom.png"
          alt=""
          width={200}
          height={200}
          className="pointer-events-none absolute right-4 top-4 z-0 w-24 opacity-65 brightness-125 sepia sm:right-8 sm:top-6 sm:w-32 lg:right-12 lg:top-8 lg:w-40"
        />
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
                className={`group w-[155px] shrink-0 snap-start
                           transition-transform duration-300 ease-out
                           hover:z-10 hover:rotate-0 hover:translate-y-0
                           sm:w-[240px] lg:w-[260px]
                           ${i !== 0 ? "-ml-4 sm:-ml-6 lg:-ml-7" : ""} ${tilt}`}
              >
                <div
                  className="flex h-full flex-col rounded-xl bg-white px-4 py-5
                             shadow-[0_12px_28px_rgba(73,59,33,0.08)]
                             transition-all duration-300 ease-out
                             group-hover:-translate-y-3 group-hover:scale-[1.06]
                             group-hover:shadow-[0_18px_38px_rgba(73,59,33,0.14)]
                             sm:rounded-2xl sm:px-6 sm:py-7"
                >
                  <div
                    className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl sm:mb-5 sm:h-12 sm:w-12 ${iconBg}`}
                  >
                    <Icon size={18} strokeWidth={1.8} className={`${iconColor} sm:size-[22px]`} />
                  </div>
                  <h3 className="mb-2 text-[0.82rem] font-semibold leading-tight text-[#2f3236] sm:mb-2.5 sm:text-[1.15rem]">
                    {title}
                  </h3>
                  <p className="text-[0.62rem] leading-[1.5] text-[#8a8c8e] sm:text-[0.85rem] sm:leading-[1.65]">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseAcquisitionSystem />

      <section className="relative isolate overflow-hidden bg-[#fff5E0] pb-10 pt-0 text-[#3a3d42] sm:pb-20 sm:pt-0 lg:pb-24 lg:pt-0">
        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[minmax(320px,0.76fr)_minmax(520px,1fr)] lg:gap-16 lg:px-12">
          <div className="pt-0 text-center lg:pt-1 lg:text-left">
            <p className="text-[0.72rem] font-medium text-[#54575a] sm:text-[0.9rem] xl:text-[1.05rem]">
              Trusted by Leading Law Firms
            </p>
            <h2 className="mt-4 text-[clamp(1.45rem,8vw,2rem)] font-semibold leading-[1.12] text-[#3d4145] sm:mt-5 sm:text-[clamp(2rem,4vw,2.45rem)] sm:leading-[1.18] xl:text-[clamp(2rem,4.6vw,3rem)]">
              Proven Results.
              <span className="block">Lasting Partnerships.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[300px] text-[0.72rem] leading-[1.42] text-[#8a8c8e] sm:mt-6 sm:max-w-[420px] sm:text-[0.9rem] sm:leading-[1.5] lg:mx-0 xl:text-[1.05rem] xl:leading-[1.55]">
              We partner with ambitious law firms nationwide, delivering qualified
              cases, consistent growth, and measurable success.
            </p>
            <div className="pointer-events-none relative mx-auto mt-28 hidden h-[170px] w-[280px] opacity-100 brightness-75 contrast-125 saturate-150 lg:mx-0 lg:ml-[40px] lg:mt-32 lg:block lg:h-[250px] lg:w-[420px]">
            <Image
              src="/images/Home page Big Flower light mode (1)-Photoroom.png"
              alt=""
              width={200}
              height={200}
              className="absolute left-1/2 top-0 w-[150px] -translate-x-1/2 sm:w-[175px] lg:w-[230px]"
            />
            </div>
          </div>

          <div className="ymg-law-logo-window relative mx-auto w-full max-w-[620px] overflow-hidden px-3 py-4 sm:px-10 sm:py-8 lg:py-10">
            <div className="ymg-law-logo-track grid grid-cols-2 gap-x-2 gap-y-4 sm:gap-x-8 sm:gap-y-8">
              {[...lawFirmLogos, ...lawFirmLogos].map(({ name, src }, index) => {
                const rowOffset = Math.floor(index / 2) % 2 === 0 ? "-translate-x-3 sm:-translate-x-8" : "translate-x-3 sm:translate-x-8";

                return (
                  <div
                    key={`${name}-${index}`}
                    className={`${rowOffset} flex aspect-[1.72/1] min-h-[62px] items-center justify-center rounded-[6px] border-[0.79px] border-[#D9B46D] bg-[#fcf2de] px-2.5 shadow-[0_10px_22px_rgba(91,69,34,0.15)] sm:min-h-[108px] sm:px-5 lg:min-h-[112px]`}
                  >
                    <Image
                      src={src}
                      alt={name}
                      width={220}
                      height={120}
                      className="h-[34px] w-auto max-w-[82%] object-contain sm:h-[70px] lg:h-[76px]"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#fff5E0] px-5 py-14 text-[#3a3d42] sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[0.7rem] font-medium text-[#54575a] sm:text-[0.9rem]">Client Testimonials</p>
            <h2 className="mt-3 text-[clamp(1.45rem,8vw,2.05rem)] font-semibold leading-tight text-[#3d4145] sm:text-[clamp(2rem,4vw,3rem)]">
              What Our Clients Say
            </h2>
          </div>

          <div className="group/testimonials relative mx-auto mt-8 h-[360px] max-w-[820px] overflow-visible sm:mt-16 sm:h-[560px]">
            <div className="pointer-events-none absolute bottom-12 right-0 z-[5] h-[150px] w-[230px] opacity-80 sm:bottom-10 sm:right-0 sm:h-[180px] sm:w-[280px]">
              <Image
                src="/images/Home page Big Flower light mode (1)-Photoroom.png"
                alt=""
                width={200}
                height={200}
                className="absolute right-[72px] top-0 w-[115px] sm:right-[88px] sm:w-[145px]"
              />
              <Image
                src="/images/Home page Small Flower light mode-Photoroom.png"
                alt=""
                width={68}
                height={68}
                className="absolute left-0 top-9 w-[42px] sm:w-[50px]"
              />
              <Image
                src="/images/Home page Small Flower light mode-Photoroom.png"
                alt=""
                width={68}
                height={68}
                className="absolute right-0 top-16 w-[42px] sm:w-[50px]"
              />
              <Image
                src="/images/Home page Small Flower light mode-Photoroom.png"
                alt=""
                width={68}
                height={68}
                className="absolute bottom-0 left-[70px] w-[46px] sm:left-[86px] sm:w-[54px]"
              />
            </div>

            {[
              {
                name: "Managing Partner",
                firm: "Bergson Legal",
                avatar: "bg-[radial-gradient(circle_at_35%_28%,#f4d0b8_0_18%,transparent_19%),linear-gradient(135deg,#d9ae5d,#f6e8bd)]",
                text: "YMG Legal completely transformed our intake and lead quality. We went from chasing leads to consistently signing qualified cases every week.",
                color: "bg-white",
                stars: "text-[#d9ae5d]",
                pos: "left-[8px] top-[88px] w-[112px] min-h-[150px] -rotate-[18deg] sm:left-8 sm:top-[120px] sm:w-[300px] sm:min-h-[330px]",
              },
              {
                name: "Founder",
                firm: "Orion Law",
                avatar: "bg-[radial-gradient(circle_at_48%_26%,#e8b99d_0_18%,transparent_19%),linear-gradient(135deg,#b8c4d8,#f8efd9)]",
                text: "Their system works. From lead generation to intake, everything is streamlined. Our team now focuses on closing cases instead of filtering bad leads.",
                color: "bg-white",
                stars: "text-[#d9ae5d]",
                pos: "left-1/2 top-0 w-[118px] min-h-[158px] -translate-x-1/2 -rotate-[4deg] sm:w-[300px] sm:min-h-[350px]",
              },
              {
                name: "Partner",
                firm: "Westline Injury",
                avatar: "bg-[radial-gradient(circle_at_50%_30%,#f1c2a5_0_17%,transparent_18%),linear-gradient(135deg,#3d4145,#d9ae5d)]",
                text: "We worked with multiple marketing agencies before, but none delivered results like this. The reporting, quality, and consistency are excellent.",
                color: "bg-white",
                stars: "text-[#d9ae5d]",
                pos: "right-[8px] top-[88px] w-[112px] min-h-[150px] rotate-[11deg] sm:right-8 sm:top-[122px] sm:w-[300px] sm:min-h-[330px]",
              },
              {
                name: "Partner",
                firm: "Injury Law Group",
                avatar: "bg-[radial-gradient(circle_at_45%_28%,#efc5ab_0_18%,transparent_19%),linear-gradient(135deg,#7e5ab7,#f3dbff)]",
                text: "The biggest difference is their intake team. Every lead is handled professionally, and we only speak with serious, qualified clients.",
                color: "bg-[#c091e8]",
                stars: "text-[#ffd35e]",
                pos: "left-[28%] top-[140px] z-20 w-[118px] min-h-[158px] -rotate-[4deg] sm:left-[26%] sm:top-[245px] sm:w-[300px] sm:min-h-[330px]",
              },
              {
                name: "Attorney",
                firm: "Casebridge Law",
                avatar: "bg-[radial-gradient(circle_at_52%_27%,#d8a98d_0_17%,transparent_18%),linear-gradient(135deg,#f0c878,#fff4d7)]",
                text: "In the first 60 days, we saw a significant increase in signed retainers. YMG understands legal marketing because they are a true partner.",
                color: "bg-[#f8d8a7]",
                stars: "text-[#d9ae5d]",
                pos: "right-[18%] top-[132px] z-10 w-[118px] min-h-[158px] rotate-[20deg] sm:right-[16%] sm:top-[265px] sm:w-[300px] sm:min-h-[330px]",
              },
            ].map(({ name, firm, avatar, text, color, stars, pos }) => (
              <article
                key={name}
                className={`absolute ${pos} rounded-bl-none rounded-br-[12px] rounded-tl-[12px] rounded-tr-none border border-[#ead3a0] ${color} p-2 shadow-[0_16px_34px_rgba(87,66,34,0.14)] transition-all duration-300 ease-out hover:z-40 hover:-translate-y-3 hover:scale-105 hover:rotate-0 hover:shadow-[0_24px_48px_rgba(87,66,34,0.24)] sm:rounded-br-[18px] sm:rounded-tl-[18px] sm:p-6`}
              >
                <div className={`mb-2 flex gap-0.5 sm:mb-4 ${stars}`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-[0.52rem] leading-none sm:text-base">★</span>
                  ))}
                </div>
                <p className="text-[0.39rem] leading-[1.28] text-[#7c7d80] sm:text-[0.9rem] sm:leading-[1.48]">
                  “{text}”
                </p>
                <div className="mt-2 h-px w-12 bg-[#3a3d42]/40 sm:mt-5 sm:w-24" />
                <div className="mt-2 flex items-center gap-1.5 sm:mt-4 sm:gap-3">
                  <div className={`relative h-5 w-5 overflow-hidden rounded-[3px] shadow-inner sm:h-9 sm:w-9 ${avatar}`}>
                    <div className="absolute bottom-0 left-1/2 h-2.5 w-4 -translate-x-1/2 rounded-t-full bg-[#2f3236]/70 sm:h-4 sm:w-6" />
                  </div>
                  <div>
                    <p className="text-[0.42rem] font-bold text-[#3d4145] sm:text-[0.68rem]">{name}</p>
                    <p className="text-[0.36rem] text-[#8a8c8e] sm:text-[0.58rem]">{firm}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff5E0] px-5 pb-14 pt-2 text-[#3a3d42] sm:px-8 sm:pb-20 lg:px-12">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-[0.95rem] font-medium text-[#54575a] sm:text-[1.05rem]">
            What We Serve
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-tight text-[#3d4145]">
            Practice Areas We Specialize in
          </h2>

          <div className="mx-auto mt-9 flex max-w-[1180px] snap-x snap-mandatory overflow-x-auto rounded-[6px] bg-white shadow-[0_10px_24px_rgba(82,64,34,0.08)] [scrollbar-width:none] sm:grid sm:grid-cols-2 sm:overflow-hidden lg:grid-cols-5 [&::-webkit-scrollbar]:hidden">
            {practiceAreas.map(({ icon: Icon, label, detail }) => (
              <div
                key={`${label}-${detail}`}
                className="relative flex min-h-[66px] w-1/3 min-w-0 shrink-0 snap-start items-center justify-center gap-2 px-2 py-3 text-left after:absolute after:right-0 after:top-1/2 after:h-8 after:w-px after:-translate-y-1/2 after:bg-[#e1d5bf] last:after:hidden sm:w-auto sm:min-h-[74px] sm:shrink sm:gap-4 sm:px-5 sm:py-4"
              >
                <Icon size={21} strokeWidth={1.45} className="shrink-0 text-[#3d4145] sm:size-[31px]" />
                <p className="min-w-0 text-[0.58rem] font-medium leading-tight text-[#3d4145] sm:text-[0.9rem]">
                  {label}
                  <span className="block">{detail}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#404040] px-5 py-10 text-[#d9b46d] before:pointer-events-none before:absolute before:inset-0 before:z-0 before:bg-[radial-gradient(circle_at_50%_52%,rgba(70,51,15,0.82)_0%,rgba(70,51,15,0.56)_22%,rgba(70,51,15,0.2)_44%,rgba(70,51,15,0)_70%)] sm:px-8 lg:px-12 lg:py-16">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-8 text-center lg:grid-cols-12 lg:gap-x-12 lg:gap-y-20 lg:text-left">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center lg:col-span-8">
              <div className="flex h-[74px] w-[74px] shrink-0 items-center justify-center rounded-full border border-[#d9b46d] lg:h-[96px] lg:w-[96px]">
                <Scale size={50} strokeWidth={1.25} className="lg:size-[56px]" />
              </div>
              <div>
                <h2 className="mx-auto max-w-[210px] text-[1.45rem] font-semibold leading-tight sm:max-w-none sm:text-[clamp(2rem,3.2vw,3.1rem)] lg:whitespace-nowrap">
                  Ready to Grow Your Firm?
                </h2>
                <p className="mt-3 text-[0.58rem] font-medium text-[#ecd08c] sm:mt-5 sm:text-[1.25rem]">
                  Let&apos;s build your pipeline of qualified cases.
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-center gap-3 lg:col-span-3 lg:col-start-10 lg:flex-col lg:items-stretch lg:gap-5 lg:pt-1">
              <Link
                href="/services/case-acquisition"
                className="inline-flex h-8 min-w-[116px] items-center justify-center rounded-[3px] bg-[#d9b46d] px-4 text-[0.56rem] font-bold text-[#262626] lg:h-[58px] lg:px-8 lg:text-[0.9rem]"
              >
                Get More Cases
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-8 min-w-[116px] items-center justify-center rounded-[3px] border border-[#d9b46d] px-4 text-[0.56rem] font-semibold text-[#d9b46d] lg:h-[48px] lg:px-8 lg:text-[0.86rem]"
              >
                Book Strategy Call
              </Link>
            </div>

            <div className="lg:col-span-6">
              <p className="text-[0.7rem] text-[#f0d28a] lg:text-[1.25rem]">Contact Us</p>
              <h3 className="mx-auto mt-4 max-w-[230px] text-[1.55rem] font-semibold leading-tight lg:mt-6 lg:max-w-none lg:text-[clamp(2rem,3.3vw,3.25rem)] lg:whitespace-nowrap">
                Let&apos;s Start a Conversation
              </h3>

              <div className="mt-7 hidden grid-cols-4 gap-2 text-[#f0d28a] lg:mt-10 lg:grid lg:gap-12">
                {[
                  { icon: Phone, value: "(424) 447-1147" },
                  { icon: Mail, value: "info@ymg-legal.com" },
                  { icon: MapPin, value: "Las Vegas Nevada" },
                  { icon: ExternalLink, value: "LinkedIn" },
                ].map(({ icon: Icon, value }) => (
                  <div key={value} className="flex flex-col items-center gap-2 lg:items-start lg:gap-5">
                    <Icon size={13} strokeWidth={1.45} className="lg:size-5" />
                    <p className="whitespace-nowrap text-[0.42rem] font-medium lg:text-[0.88rem]">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto w-full max-w-[320px] rounded-[6px] bg-[#fff4dd] p-5 text-left text-[#3d4145] shadow-[0_18px_40px_rgba(0,0,0,0.18)] lg:col-span-5 lg:col-start-8 lg:max-w-none lg:self-start lg:p-7">
              <h4 className="text-[0.92rem] font-medium lg:text-[1.25rem]">Book Your Free Strategy Call</h4>
              <p className="mt-2 max-w-[260px] text-[0.52rem] leading-[1.45] text-[#55585a] lg:mt-3 lg:text-[0.75rem]">
                Tell us about your firm and we&apos;ll show you how we can help.
              </p>

              <form className="mt-4 grid gap-2 lg:mt-5 lg:gap-3">
                <div className="grid gap-2 lg:grid-cols-2 lg:gap-3">
                  <input
                    aria-label="Full Name"
                    placeholder="Full Name"
                    className="h-7 rounded-[4px] border border-[#cdbb97] bg-[#fffaf0] px-3 text-[0.55rem] outline-none lg:h-10 lg:px-4 lg:text-[0.75rem]"
                  />
                  <input
                    aria-label="Email"
                    placeholder="Email"
                    className="h-7 rounded-[4px] border border-[#cdbb97] bg-[#fffaf0] px-3 text-[0.55rem] outline-none lg:h-10 lg:px-4 lg:text-[0.75rem]"
                  />
                  <input
                    aria-label="Phone Number"
                    placeholder="Phone Number"
                    className="h-7 rounded-[4px] border border-[#cdbb97] bg-[#fffaf0] px-3 text-[0.55rem] outline-none lg:h-10 lg:px-4 lg:text-[0.75rem]"
                  />
                  <select
                    aria-label="Practice Area"
                    className="h-7 rounded-[4px] border border-[#cdbb97] bg-[#fffaf0] px-3 text-[0.55rem] text-[#55585a] outline-none lg:h-10 lg:px-4 lg:text-[0.75rem]"
                    defaultValue=""
                  >
                    <option value="" disabled>Practice Area</option>
                    <option>Mass Torts</option>
                    <option>Personal Injury</option>
                    <option>Tylenol Pregnancy Lawsuits</option>
                  </select>
                </div>
                <button
                  type="button"
                  className="mt-1 h-8 rounded-[3px] bg-[#3f3f3f] text-[0.58rem] font-bold text-white lg:h-10 lg:text-[0.78rem]"
                >
                  Book My Free Call
                </button>
              </form>
            </div>

            <div className="grid grid-cols-4 gap-2 text-[#f0d28a] lg:hidden">
              {[
                { icon: Phone, value: "(424) 447-1147" },
                { icon: Mail, value: "info@ymg-legal.com" },
                { icon: MapPin, value: "Las Vegas Nevada" },
                { icon: ExternalLink, value: "LinkedIn" },
              ].map(({ icon: Icon, value }) => (
                <div key={value} className="flex flex-col items-center gap-2">
                  <Icon size={13} strokeWidth={1.45} />
                  <p className="whitespace-nowrap text-[0.42rem] font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
