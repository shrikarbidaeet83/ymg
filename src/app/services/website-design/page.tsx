import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServiceHeroFlowers, ServiceHeroProof } from "@/components/sections/ProofHighlights";
import ServiceFaqSection from "@/components/sections/ServiceFaqSection";
import TestimonialContactSection from "@/components/sections/TestimonialContactSection";
import WebsiteDesignProcessSection from "@/components/sections/WebsiteDesignProcessSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ScrollRevealCard from "@/components/ui/ScrollRevealCard";
import {
  BarChart3,
  Database,
  FileCog,
  Gauge,
  Laptop,
  Layers3,
  LineChart,
  Network,
  Shield,
  Settings2,
  Smartphone,
  TabletSmartphone,
  TrendingUp,
  Zap,
  UsersRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Website Design for Law Firms | YMG Legal",
  description:
    "High-performance WordPress website design for law firms built to rank, convert, and grow.",
};

const buildItems = [
  {
    title: "Custom WordPress\nDevelopment",
    body: "Professionally crafted websites tailored specifically for law firms and their practice areas.",
    Icon: Laptop,
    bg: "bg-[#e8f1f5]",
    color: "text-[#52646d]",
  },
  {
    title: "Mobile-First\nDesign",
    body: "Responsive experiences that look and perform flawlessly across every device.",
    Icon: Smartphone,
    bg: "bg-[#f5e6dd]",
    color: "text-[#9b6a55]",
  },
  {
    title: "SEO-Ready\nArchitecture",
    body: "Clean code, optimized structure, and technical best practices built from day one.",
    Icon: Layers3,
    bg: "bg-[#e6efe7]",
    color: "text-[#5f7f62]",
  },
  {
    title: "Conversion-\nFocused UX",
    body: "Every page is strategically designed to generate more consultation requests and signed cases.",
    Icon: Network,
    bg: "bg-[#eee8f4]",
    color: "text-[#735d86]",
  },
];

const successFeatures = [
  { label: "Lightning-Fast\nPerformance", Icon: Zap, bg: "bg-[#fff1c7]", color: "text-[#b88927]" },
  { label: "Mobile & Tablet\nResponsive", Icon: TabletSmartphone, bg: "bg-[#dff0ff]", color: "text-[#477492]" },
  { label: "Core Web Vitals\nOptimized", Icon: Gauge, bg: "bg-[#e5f6df]", color: "text-[#5f874d]" },
  { label: "SEO-Friendly\nStructure", Icon: FileCog, bg: "bg-[#f3e4ff]", color: "text-[#7a5b92]" },
  { label: "Secure & Scalable\nPlatform", Icon: Shield, bg: "bg-[#e2f5ef]", color: "text-[#4f8675]" },
  { label: "Conversion-\nFocused Design", Icon: Settings2, bg: "bg-[#ffe5dc]", color: "text-[#a75f49]" },
  { label: "Easy Content\nManagement", Icon: Database, bg: "bg-[#edf0f4]", color: "text-[#65717e]" },
  { label: "Analytics &\nTracking Integration", Icon: LineChart, bg: "bg-[#f1eacb]", color: "text-[#8b772e]" },
];

const resultCards = [
  { eyebrow: "Page Speed Score", title: "Faster\nLoad Speed", value: "90", suffix: "+", Icon: Gauge, bg: "bg-[#fff3cf]", color: "text-[#9a731e]" },
  { eyebrow: "For Important Keywords", title: "Higher\nRankings", value: "Top 3", Icon: BarChart3, bg: "bg-[#edf0f4]", color: "text-[#65717e]" },
  { eyebrow: "Increase in Leads", title: "More\nQualified Leads", value: "2X", suffix: "+", Icon: UsersRound, bg: "bg-[#e6f3ea]", color: "text-[#53785c]" },
  { eyebrow: "Improvement", title: "Better\nConversion Rate", value: "50%", suffix: "+", Icon: TrendingUp, bg: "bg-[#f2e7f7]", color: "text-[#775b88]" },
];

function WebsiteProblemVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[620px] lg:mx-0">
      <Image
        src="/web-design-thumb.webp"
        alt="Website performance and conversion optimization illustration"
        width={575}
        height={482}
        className="mx-auto h-auto w-full max-w-[575px] object-contain"
      />
    </div>
  );
}

function BuildCard({
  item,
  index,
}: {
  item: (typeof buildItems)[number];
  index: number;
}) {
  const { title, body, Icon, bg, color } = item;

  return (
    <ScrollRevealCard index={index} className="flex min-h-[248px] flex-col items-center rounded-[5px] border border-[#dfbd78]/75 bg-white px-6 pb-7 pt-7 text-center shadow-[0_10px_22px_rgba(72,55,28,0.16)] transition-transform duration-200 hover:-translate-y-1">
      <div className={`flex h-[62px] w-[62px] items-center justify-center rounded-[5px] border border-[#dfbd78]/55 ${bg} shadow-[0_5px_10px_rgba(0,0,0,0.12)] dark:bg-transparent dark:shadow-none`}>
        <Icon className={`h-[34px] w-[34px] ${color} dark:text-[#D8B26B]`} strokeWidth={1.45} />
      </div>
      <h3 className="mt-6 whitespace-pre-line text-[0.86rem] font-semibold leading-[1.2] text-[#343434]">
        {title}
      </h3>
      <p className="mt-5 max-w-[168px] text-[0.75rem] leading-[1.26] text-[#a1a1a1]">
        {body}
      </p>
    </ScrollRevealCard>
  );
}

function SuccessFeature({
  feature,
  index,
}: {
  feature: (typeof successFeatures)[number];
  index: number;
}) {
  const { label, Icon } = feature;

  return (
    <ScrollReveal delay={index * 0.08} className="relative flex min-h-[126px] flex-col items-center justify-center px-4 text-center">
      <div className={`flex h-[50px] w-[50px] items-center justify-center rounded-[6px] border border-[#dfbd78]/45 ${feature.bg} shadow-[0_6px_14px_rgba(0,0,0,0.24)]`}>
        <Icon className={`h-[24px] w-[24px] ${feature.color}`} strokeWidth={1.7} />
      </div>
      <p className="mt-5 whitespace-pre-line text-[0.94rem] font-bold leading-[1.22] text-[#e0b65b]">
        {label}
      </p>
      {index % 4 !== 3 && (
        <span className="absolute right-0 top-1/2 hidden h-[54px] w-px -translate-y-1/2 bg-white/20 lg:block" />
      )}
    </ScrollReveal>
  );
}

function ResultsGraphic() {
  return (
    <div className="relative mx-auto w-full max-w-[520px] lg:mx-0">
      <Image src="/images/big_flowers.webp" alt="" width={190} height={190} className="pointer-events-none absolute left-[58px] top-[-38px] h-auto w-[126px] opacity-[0.05]" />
      <Image src="/images/small_flowers.webp" alt="" width={125} height={125} className="pointer-events-none absolute left-[8px] top-[24px] h-auto w-[38px] opacity-[0.055]" />
      <Image src="/images/small_flowers.webp" alt="" width={125} height={125} className="pointer-events-none absolute left-[214px] top-[48px] h-auto w-[42px] opacity-[0.055]" />
      <Image src="/result-thumb.svg" alt="" width={318} height={300} className="relative z-10 ml-auto h-auto w-full max-w-[360px] sm:max-w-[410px] lg:max-w-[430px]" />
    </div>
  );
}

function ResultCard({ card, index }: { card: (typeof resultCards)[number]; index: number }) {
  const { eyebrow, title, value, suffix, Icon, bg, color } = card;

  return (
    <ScrollRevealCard index={index} className="flex min-h-[274px] flex-col items-center rounded-[7px] border border-[#dfbd78]/75 bg-white px-6 py-7 text-center shadow-[0_11px_22px_rgba(0,0,0,0.22)]">
      <p className="text-[1rem] font-medium leading-tight text-[#8a8a8a] dark:text-[#D8B26B]">{eyebrow}</p>
      <div className={`mt-6 flex h-[70px] w-[70px] items-center justify-center rounded-[6px] border border-[#dfbd78]/55 ${bg} shadow-[0_7px_15px_rgba(88,59,16,0.16)] dark:bg-transparent dark:shadow-none`}>
        <Icon className={`h-[34px] w-[34px] ${color} dark:text-[#D8B26B]`} strokeWidth={1.85} />
      </div>
      <h3 className="mt-6 whitespace-pre-line text-[1.02rem] font-semibold leading-[1.22] text-[#373737] dark:text-[#D8B26B]">{title}</h3>
      <span className="mt-5 h-px w-[56px] bg-[#d9d9d9]" />
      <p className="mt-4 text-[2.65rem] font-semibold leading-none text-[#444] dark:text-[#D8B26B]">
        {value}
        {suffix && <sup className="ml-2 text-[1.35rem] font-semibold">{suffix}</sup>}
      </p>
    </ScrollRevealCard>
  );
}

export default function WebsiteDesignPage() {
  return (
    <main className="min-h-screen bg-[#FFF5E0] text-[#424242]">
      <section className="ymg-standard-hero relative isolate overflow-hidden border-t-2 border-[#9d51ff] px-5 sm:px-10 lg:px-16">
        <ServiceHeroFlowers />

        <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col items-center">
          <ScrollReveal className="ymg-standard-hero-copy">
            <p className="ymg-standard-hero-eyebrow text-[#444444]">
              Website Design
            </p>
            <h1 className="ymg-standard-hero-title text-[#424242]">
              High-Performance
              <span className="mt-1 block">WordPress Websites Built to</span>
              <span className="mt-1 block">Rank, Convert &amp; Grow</span>
            </h1>
            <p className="ymg-standard-hero-body text-[#4c4c4c]">
              Launch a fast, conversion-focused WordPress website
              <span className="block">engineered for search visibility, exceptional user experience,</span>
              <span className="block">and higher client acquisition.</span>
            </p>

            <div className="ymg-standard-hero-actions flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-[18px]">
              <Link
                href="/contact#booking"
                className="inline-flex h-[52px] w-full max-w-[260px] items-center justify-center rounded-[4px] bg-[#d9ae5d] px-8 text-center text-sm font-bold leading-tight text-[#2e3032] shadow-[0_12px_28px_rgba(168,129,62,0.22)] transition-colors hover:bg-[#c89f4e] sm:w-[255px]"
              >
                Book a Strategy Call
              </Link>
              <Link
                href="/contact#booking"
                className="inline-flex h-[52px] w-full max-w-[260px] items-center justify-center rounded-[4px] border border-[#dfbd78] bg-transparent px-8 text-center text-sm font-semibold leading-tight text-[#d3a65a] transition-colors hover:bg-[#d9ae5d]/10 sm:w-[336px]"
              >
                Get a Free Website Design Audit
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.14} className="w-full">
            <ServiceHeroProof />
          </ScrollReveal>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#3d3d3b] px-5 py-14 text-[#e5bd65] sm:px-10 sm:py-16 lg:px-16 lg:py-[58px]">
        <div className="mx-auto grid w-full max-w-[1180px] items-center gap-10 lg:grid-cols-[minmax(0,410px)_minmax(560px,1fr)] lg:gap-12">
          <ScrollReveal direction="left" className="max-w-[440px] text-center lg:text-left">
            <h2 className="font-heading text-[2.05rem] font-bold leading-[1.25] tracking-[0] sm:text-[2.45rem] lg:text-[2.3rem]">
              Why Your Law Firm
              <span className="mt-2 block">Needs a Better Website</span>
            </h2>
            <p className="mt-5 text-[0.86rem] leading-[1.42] text-[#e1b656] sm:text-[0.92rem] lg:text-[0.88rem]">
              Your website is often the first impression potential clients have
              of your firm. A slow, outdated, or poorly designed website can
              cost you valuable cases before a conversation even begins. We
              build modern WordPress websites that establish trust, improve
              search visibility, and convert visitors into qualified leads.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.14}>
            <WebsiteProblemVisual />
          </ScrollReveal>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#FFF5E0] px-5 py-14 text-[#424242] sm:px-10 sm:py-16 lg:px-16 lg:pb-[76px] lg:pt-[58px]">
        <Image
          src="/images/big_flowers.webp"
          alt=""
          width={190}
          height={190}
          className="pointer-events-none absolute right-[7%] top-[-8px] z-0 h-auto w-[112px] opacity-[0.04]"
        />
        <Image
          src="/images/small_flowers.webp"
          alt=""
          width={125}
          height={125}
          className="pointer-events-none absolute right-[12%] top-[112px] z-0 h-auto w-[42px] opacity-[0.045]"
        />
        <Image
          src="/images/big_flowers.webp"
          alt=""
          width={190}
          height={190}
          className="pointer-events-none absolute bottom-[-36px] left-[5%] z-0 h-auto w-[88px] opacity-[0.04]"
        />

        <div className="relative z-10 mx-auto max-w-[980px]">
          <ScrollReveal>
            <h2 className="text-center font-heading text-[2.15rem] font-bold leading-tight text-[#424242] sm:text-[2.55rem] lg:text-[2.35rem]">
              What We Build
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {buildItems.map((item, index) => (
              <BuildCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#3d3d3b] px-5 py-16 text-[#e0b65b] sm:px-10 sm:py-20 lg:px-16 lg:pb-[112px] lg:pt-[92px]">
        <Image
          src="/images/big_flowers.webp"
          alt=""
          width={190}
          height={190}
          className="pointer-events-none absolute right-[-8px] top-[6px] h-auto w-[128px] opacity-[0.045]"
        />
        <Image
          src="/images/small_flowers.webp"
          alt=""
          width={125}
          height={125}
          className="pointer-events-none absolute right-[7%] top-[78px] h-auto w-[48px] opacity-[0.06]"
        />

        <div className="relative z-10 mx-auto max-w-[1120px]">
          <ScrollReveal>
            <h2 className="text-center font-heading text-[2.35rem] font-bold leading-[1.42] tracking-[0] text-[#e0b65b] sm:text-[3rem] lg:text-[3rem]">
              Features That Power
              <span className="block">Your Success</span>
            </h2>
          </ScrollReveal>

          <div className="mt-20 grid gap-y-10 sm:grid-cols-2 lg:mt-[104px] lg:grid-cols-4 lg:gap-y-[86px]">
            {successFeatures.map((feature, index) => (
              <SuccessFeature
                key={feature.label}
                feature={feature}
                index={index}
              />
            ))}
          </div>

          <div className="mx-auto mt-[38px] hidden h-px w-[88%] bg-white/20 lg:block" />
        </div>
      </section>

      <WebsiteDesignProcessSection />

      <section className="relative isolate overflow-hidden bg-[#3d3d3b] px-5 py-16 text-[#dfb65d] sm:px-10 sm:py-20 lg:px-16 lg:pb-[50px] lg:pt-[74px]">
        <div className="relative z-10 mx-auto max-w-[1160px]">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,470px)_minmax(520px,1fr)] lg:gap-12">
            <ScrollReveal direction="left" className="text-center lg:text-left">
              <h2 className="font-heading text-[2.35rem] font-bold leading-[1.35] tracking-[0] text-[#dfb65d] sm:text-[3rem] lg:text-[2.95rem]">
                Websites That
                <span className="mt-3 block">Deliver Real Results</span>
              </h2>
              <p className="mt-7 max-w-[430px] text-[1.1rem] leading-[1.34] text-[#dfb65d] max-lg:mx-auto">
                Our WordPress websites are built with strategy speed and SEO at
                the core - so you get more visibility more leads and more
                signed cases.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.14}>
              <ResultsGraphic />
            </ScrollReveal>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:mt-[42px] lg:grid-cols-4 lg:gap-9">
            {resultCards.map((card, index) => (
              <ResultCard key={card.eyebrow} card={card} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#FFF5E0] px-5 py-14 text-[#424242] sm:px-10 sm:py-16 lg:px-16 lg:py-[68px]">
        <Image
          src="/images/big_flowers.webp"
          alt=""
          width={190}
          height={190}
          className="pointer-events-none absolute right-[6%] top-[-24px] h-auto w-[128px] opacity-[0.04]"
        />
        <Image
          src="/images/small_flowers.webp"
          alt=""
          width={125}
          height={125}
          className="pointer-events-none absolute right-[11%] top-[118px] h-auto w-[42px] opacity-[0.045]"
        />
        <Image
          src="/images/big_flowers.webp"
          alt=""
          width={190}
          height={190}
          className="pointer-events-none absolute bottom-[-38px] left-[5%] h-auto w-[116px] opacity-[0.04]"
        />
        <Image
          src="/images/small_flowers.webp"
          alt=""
          width={125}
          height={125}
          className="pointer-events-none absolute bottom-[28px] left-[17%] h-auto w-[36px] opacity-[0.04]"
        />

        <div className="relative z-10 mx-auto grid max-w-[1160px] items-center gap-10 lg:grid-cols-[minmax(420px,1fr)_minmax(0,560px)] lg:gap-14">
          <ScrollReveal direction="left" className="flex justify-center lg:justify-start">
            <Image
              src="/cases-thumb.webp"
              alt=""
              width={1536}
              height={1024}
              className="h-auto w-full max-w-[470px] lg:max-w-[520px]"
            />
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.14} className="text-center lg:text-left">
            <h2 className="font-heading text-[2.15rem] font-bold leading-[1.32] tracking-[0] text-[#424242] sm:text-[2.75rem] lg:text-[2.65rem]">
              Ready to Build a Website
              <span className="mt-2 block">That Wins More Cases?</span>
            </h2>
            <p className="mt-6 max-w-[560px] text-[1rem] leading-[1.34] text-[#4c4c4c] max-lg:mx-auto lg:text-[1.02rem]">
              Whether you&apos;re launching a new law firm or redesigning an existing
              website, we&apos;ll build a high-performance WordPress experience that
              strengthens your brand, improves search visibility, and converts more
              visitors into qualified clients.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex h-[52px] w-full max-w-[260px] items-center justify-center rounded-[4px] bg-[#d9ae5d] px-8 text-center text-sm font-bold leading-tight text-[#2e3032] shadow-[0_12px_28px_rgba(168,129,62,0.22)] transition-colors hover:bg-[#c89f4e] sm:w-[255px]"
              >
                Book a Strategy Call
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-[52px] w-full max-w-[260px] items-center justify-center rounded-[4px] border border-[#dfbd78] bg-transparent px-8 text-center text-sm font-semibold leading-tight text-[#d3a65a] transition-colors hover:bg-[#d9ae5d]/10 sm:w-[292px]"
              >
                Get a Free Website Audit
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal>
        <TestimonialContactSection showTestimonials={false} contactVariant="home" />
      </ScrollReveal>
      <ScrollReveal>
        <ServiceFaqSection />
      </ScrollReveal>
    </main>
  );
}
