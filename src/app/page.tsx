import Image from "next/image";
import Link from "next/link";
import CardInteractionHint from "@/components/sections/CardInteractionHint";
import ContactConversationContent from "@/components/sections/ContactConversationContent";
import CaseAcquisitionSystem from "@/components/sections/CaseAcquisitionSystem";
import GrowthPartnerSection from "@/components/sections/GrowthPartnerSection";
import HeroOrbitAnimation from "@/components/sections/HeroOrbitAnimation";
import {
  Bot,
  ClipboardList,
  FileCheck2,
  Magnet,
} from "lucide-react";
import TouchPopCard from "@/components/sections/TouchPopCard";

/* ─── data ─────────────────────────────────────────────────── */

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
  { icon: "/Wha-We-Serve/mass-torts.png", label: "Mass", detail: "Torts" },
  { icon: "/Wha-We-Serve/personal-injury.png", label: "Personal", detail: "Injury" },
  { icon: "/Wha-We-Serve/Pregnancy-Lawsuits.png", label: "Tylenol Pregnancy", detail: "Lawsuits" },
  { icon: "/Wha-We-Serve/Hair-Relaxer.png", label: "Hair Relaxer", detail: "Cancer Lawsuit" },
  { icon: "/Wha-We-Serve/Talcum-Powder.png", label: "Talcum Powder", detail: "Lawsuits" },
];

/* ─── proof bar (desktop 4-col grid) ───────────────────────── */

/* ─── page ─────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="ymg-hero relative isolate min-h-[100svh] overflow-hidden bg-[#FFF5E0] pt-[76px] text-[#3a3d42]">
        {/* Decorative flowers — desktop only */}
        <Image
          src="/images/big_flowers.png"
          alt="" width={200} height={200} priority
          className="pointer-events-none absolute right-[11%] top-28 z-0 hidden opacity-20 lg:block"
        />
        <Image
          src="/images/small_flowers.png"
          alt="" width={68} height={68} priority
          className="pointer-events-none absolute right-[4.5%] top-44 z-0 hidden opacity-20 lg:block"
        />

        {/* Main two-column grid */}
        <div
          className="ymg-section-padding-x ymg-hero-grid relative z-10 mx-auto grid w-full items-center pb-6
                     lg:min-h-[calc(100svh-76px)] lg:grid-cols-[minmax(410px,0.86fr)_minmax(520px,0.92fr)]
                     lg:gap-8 lg:pb-[112px] xl:gap-12"
          style={{ maxWidth: "1440px" }}
        >
          {/* ── Left: copy ── */}
          <div className="ymg-hero-copy mx-auto flex h-full w-full min-w-0 max-w-xl flex-col items-center justify-center pt-8 text-center
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
            <div className="ymg-hero-buttons mt-auto flex w-full max-w-[430px] flex-col gap-3
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

          </div>

          {/* ── Right: orbit animation stage ── */}
          <div
            className="ymg-hero-stage relative mx-auto flex w-full min-w-0 max-w-[600px] items-center justify-center
                       min-h-[330px] pb-16
                       sm:min-h-[520px] sm:pb-20
                       lg:min-h-[630px] lg:max-w-[640px] lg:pb-0
                       xl:max-w-[690px]"
          >
            <HeroOrbitAnimation className="max-w-[480px] sm:max-w-[560px] lg:max-w-[640px]" />
          </div>
        </div>

      </section>

      {/* ══════════════════════════════════════════
          FULL-FUNNEL SOLUTIONS (cards)
      ══════════════════════════════════════════ */}
      <section className="ymg-section-padding relative isolate overflow-x-clip bg-[#FFF5E0]">
        <Image
          src="/images/big_flowers.png"
          alt=""
          width={200}
          height={200}
          className="pointer-events-none absolute right-4 top-4 z-0 w-24 opacity-65 brightness-125 sepia sm:right-8 sm:top-6 sm:w-32 lg:right-12 lg:top-8 lg:w-40"
        />
        <div className="mx-auto max-w-7xl">

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
              <TouchPopCard
                as="div"
                key={title}
                activeClassName="max-[1100px]:z-10 max-[1100px]:rotate-0 max-[1100px]:translate-y-0"
                className={`group w-[155px] shrink-0 snap-start touch-manipulation
                           transition-transform duration-300 ease-out
                           hover:z-10 hover:rotate-0 hover:translate-y-0
                           sm:w-[240px] lg:w-[260px]
                           ${i !== 0 ? "-ml-4 sm:-ml-6 lg:-ml-7" : ""} ${tilt}`}
              >
                <div
                  className="flex h-full flex-col rounded-xl bg-white px-4 py-5
                             shadow-[0_12px_28px_rgba(73,59,33,0.08)]
                             transition-all duration-300 ease-out
                             group-data-[active=true]:-translate-y-3 group-data-[active=true]:scale-[1.06]
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
              </TouchPopCard>
            ))}
          </div>
        </div>
      </section>

      <CaseAcquisitionSystem showStepFlower />

      <section className="ymg-section-padding relative isolate overflow-hidden bg-[#FFF5E0] text-[#3a3d42]">
        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(320px,0.76fr)_minmax(520px,1fr)] lg:gap-16">
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
            <div className="pointer-events-none relative mx-auto mt-28 hidden h-[170px] w-[280px] opacity-100 lg:mx-0 lg:ml-[40px] lg:mt-32 lg:block lg:h-[250px] lg:w-[420px]">
            <Image
              src="/flowers/vcardBG.svg"
              alt=""
              width={273}
              height={196}
              className="absolute inset-0 h-full w-full object-contain object-left-bottom"
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

      {/* ══════════════════════════════════════════
          GROWTH PARTNER (dark)
      ══════════════════════════════════════════ */}
      <GrowthPartnerSection variant="light" backgroundColor="#404040" goldText whiteCards />

      <section className="ymg-section-padding relative isolate overflow-hidden bg-[#FFF5E0] text-[#3a3d42]">
        <Image
          src="/flowers/vcardBG.svg"
          alt=""
          width={273}
          height={196}
          className="pointer-events-none absolute bottom-0 right-0 z-0 w-[150px] sm:w-[230px] lg:w-[300px]"
        />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[0.7rem] font-medium text-[#54575a] sm:text-[0.9rem]">Client Testimonials</p>
            <h2 className="mt-3 text-[clamp(1.45rem,8vw,2.05rem)] font-semibold leading-tight text-[#3d4145] sm:text-[clamp(2rem,4vw,3rem)]">
              What Our Clients Say
            </h2>
            <CardInteractionHint tone="light" />
          </div>

          <div className="group/testimonials relative mx-auto mt-7 h-[360px] max-w-[820px] overflow-visible sm:mt-14 sm:h-[560px]">
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
                color: "bg-[#c091e8] text-white [&_p]:!text-white [&_.testimonial-divider]:!bg-white/60",
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
              <TouchPopCard
                key={`${name}-${firm}`}
                centerOnMobile
                className={`absolute ${pos} rounded-bl-none rounded-br-[12px] rounded-tl-[12px] rounded-tr-none border border-[#ead3a0] ${color} p-2 shadow-[0_16px_34px_rgba(87,66,34,0.14)] touch-manipulation transition-all duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:z-40 hover:-translate-y-3 hover:scale-105 hover:rotate-0 hover:shadow-[0_24px_48px_rgba(87,66,34,0.24)] sm:rounded-br-[18px] sm:rounded-tl-[18px] sm:p-6`}
              >
                <div className={`mb-2 flex gap-0.5 sm:mb-4 ${stars}`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-[0.52rem] leading-none sm:text-base">★</span>
                  ))}
                </div>
                <p className="text-[0.39rem] leading-[1.28] text-[#7c7d80] sm:text-[0.9rem] sm:leading-[1.48]">
                  “{text}”
                </p>
                <div className="testimonial-divider mt-2 h-px w-12 bg-[#3a3d42]/40 sm:mt-5 sm:w-24" />
                <div className="mt-2 flex items-center gap-1.5 sm:mt-4 sm:gap-3">
                  <div className={`relative h-5 w-5 overflow-hidden rounded-[3px] shadow-inner sm:h-9 sm:w-9 ${avatar}`}>
                    <div className="absolute bottom-0 left-1/2 h-2.5 w-4 -translate-x-1/2 rounded-t-full bg-[#2f3236]/70 sm:h-4 sm:w-6" />
                  </div>
                  <div>
                    <p className="text-[0.42rem] font-bold text-[#3d4145] sm:text-[0.68rem]">{name}</p>
                    <p className="text-[0.36rem] text-[#8a8c8e] sm:text-[0.58rem]">{firm}</p>
                  </div>
                </div>
              </TouchPopCard>
            ))}
          </div>
        </div>
      </section>

      <section className="ymg-section-padding bg-[#FFF5E0] text-[#3a3d42]">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-[0.95rem] font-medium text-[#54575a] sm:text-[1.05rem]">
            What We Serve
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-tight text-[#3d4145]">
            Practice Areas We Specialize in
          </h2>

          <div className="mx-auto mt-9 max-w-[1180px] overflow-hidden rounded-[6px] bg-white shadow-[0_10px_24px_rgba(82,64,34,0.08)]">
            <div className="ymg-practice-marquee flex w-max lg:grid lg:w-full lg:grid-cols-5">
              {[...practiceAreas, ...practiceAreas].map(({ icon, label, detail }, index) => (
                <div
                  key={`${label}-${detail}-${index}`}
                  aria-hidden={index >= practiceAreas.length}
                  className={`relative flex min-h-[66px] w-[calc((100vw-40px)/3)] shrink-0 items-center justify-center gap-2 px-2 py-3 text-left after:absolute after:right-0 after:top-1/2 after:h-8 after:w-px after:-translate-y-1/2 after:bg-[#e1d5bf] sm:min-h-[74px] sm:w-[calc((100vw-64px)/3)] sm:gap-4 sm:px-5 sm:py-4 lg:w-auto lg:shrink ${index === practiceAreas.length - 1 ? "lg:after:hidden" : ""} ${index >= practiceAreas.length ? "lg:hidden" : ""}`}
                >
                  <Image
                    src={icon}
                    alt=""
                    width={32}
                    height={32}
                    className="h-[21px] w-[21px] shrink-0 object-contain sm:h-[31px] sm:w-[31px]"
                  />
                  <p className="min-w-0 text-[0.58rem] font-medium leading-tight text-[#3d4145] sm:text-[0.9rem]">
                    {label}
                    <span className="block">{detail}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ymg-section-padding relative isolate overflow-hidden bg-[#D8B26B] text-[#404040]">
        <div className="relative z-10 mx-auto max-w-7xl">
          <ContactConversationContent variant="gold" />
        </div>
      </section>
    </>
  );
}
