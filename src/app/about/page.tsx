import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseMedical,
  ClipboardList,
  Handshake,
  Headphones,
  Lightbulb,
  ListChecks,
  Megaphone,
  RefreshCw,
  ShieldCheck,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";
import GlassIcon, { type GlassTone } from "@/components/ui/GlassIcon";
import ScrollMotion from "@/components/home/ScrollMotion";
import { TrustBand } from "@/components/home/HomeStory";
import { BookCallButton } from "@/components/site/Cta";
import { TestimonialCardsShowcase } from "@/components/sections/TestimonialContactSection";
import PipelineBoard from "@/components/illustrations/PipelineBoard";
import HeroBackdrop from "@/components/site/HeroBackdrop";
import HeroPoints from "@/components/site/HeroPoints";

export const metadata: Metadata = {
  title: "About YMG Legal | Legal Marketing & Law Firm Support",
  description:
    "YMG Legal works exclusively with law firms: 15+ years of legal marketing, case acquisition, 24/7 US-based intake and case support from Las Vegas, Nevada.",
};

// Deck, "About YMG Legal" (confirmed by YMG).
const facts = [
  {
    value: "15+",
    unit: "years",
    body: "in legal marketing, lead generation and case acquisition for law firms.",
  },
  {
    value: "6",
    unit: "practice areas",
    body: "PI, mass torts, class action, medical malpractice, workers' comp and SSD.",
  },
  {
    value: "24/7",
    unit: "live intake",
    body: "from a native English-speaking, US-based team in Las Vegas, Nevada.",
  },
];

// Deck, "What we cover": the six service pillars.
const pillars: {
  title: string;
  body: string;
  href: string;
  Icon: LucideIcon;
  tone: GlassTone;
}[] = [
  {
    title: "Case Generation",
    body: "Search, Meta, YouTube, pay-per-call and SEO campaigns built for your case types.",
    href: "/services/law-firm-marketing",
    Icon: Megaphone,
    tone: "teal",
  },
  {
    title: "Lead Qualification",
    body: "Every inquiry screened against your criteria before it reaches your team.",
    href: "/services/personal-injury-leads",
    Icon: ListChecks,
    tone: "blue",
  },
  {
    title: "24/7 Intake & Retainers",
    body: "Live intake on your scripts, nights and weekends, through to a signed retainer.",
    href: "/services/legal-intake",
    Icon: Headphones,
    tone: "violet",
  },
  {
    title: "Automated Follow-Up",
    body: "Text, email and live re-engagement until prospects are ready to talk.",
    href: "/services/outbound-client-acquisition",
    Icon: RefreshCw,
    tone: "rose",
  },
  {
    title: "Case Onboarding",
    body: "Digital intake packets and organised client files, ready on day one.",
    href: "/services/law-firm-support",
    Icon: ClipboardList,
    tone: "green",
  },
  {
    title: "Records & Case Support",
    body: "Medical record retrieval, review, chronologies and case file organisation.",
    href: "/services/law-firm-support",
    Icon: BriefcaseMedical,
    tone: "amber",
  },
];

// Deck, "Our approach": the four things YMG runs for the firm, in order.
const approach = [
  {
    title: "We run your marketing",
    body: "Google, Meta and pay-per-call campaigns, managed end to end for your case type and geography.",
  },
  {
    title: "We qualify every lead",
    body: "Every inquiry is screened before it reaches your intake team.",
  },
  {
    title: "We handle intake 24/7",
    body: "Trained specialists answer day and night, on your scripts.",
  },
  {
    title: "We follow up until they sign",
    body: "Live and automated follow-up re-engages anyone who didn't sign on first contact.",
  },
];

const values: {
  title: string;
  body: string;
  Icon: LucideIcon;
  tone: GlassTone;
}[] = [
  {
    title: "Integrity",
    body: "Honest reporting, compliant practices and clear expectations with every firm.",
    Icon: ShieldCheck,
    tone: "teal",
  },
  {
    title: "Innovation",
    body: "We keep improving the technology, campaigns and intake systems behind your cases.",
    Icon: Lightbulb,
    tone: "amber",
  },
  {
    title: "Performance",
    body: "Every campaign is measured and tuned for signed cases, not clicks.",
    Icon: SlidersHorizontal,
    tone: "blue",
  },
  {
    title: "Partnership",
    body: "We work as an extension of your firm, toward growth that lasts.",
    Icon: Handshake,
    tone: "violet",
  },
];

const h2 = "text-[clamp(1.93rem,3.52vw,3.2rem)] leading-[1.03] tracking-[-0.015em]";

function Hero() {
  return (
    <section className="ymg-dark-hero relative isolate overflow-hidden bg-[#0B231D] px-5 pb-20 pt-32 text-[#F5F1E8] sm:px-10 sm:pt-36 lg:px-12 lg:pb-24">
      <HeroBackdrop src="/images/about/meeting.jpg" />
      <div className="mx-auto grid max-w-[1320px] gap-8">
        <h1
          data-reveal
          className="max-w-[18ch] text-[clamp(2.18rem,4.48vw,4rem)] leading-[1] tracking-[-0.02em]"
        >
          We work exclusively with{" "}
          <span className="text-[#D6B263]">law firms.</span>
        </h1>
        <div data-reveal data-reveal-delay="200" className="max-w-[40rem]">
          <p className="max-w-[32rem] text-[1.12rem] leading-[1.65] text-[#C9C3B4]">
            We help plaintiff firms acquire, qualify and sign clients through
            targeted marketing, live intake and back-office case support, from
            the first ad to a signed retainer, so your team can practice law.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <BookCallButton />
          </div>
          <HeroPoints
            points={[
              "15+ years in legal marketing",
              "US-based team, Las Vegas",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

/* The three facts, set large and plain. */
function Facts() {
  return (
    <section className="bg-white px-5 py-20 sm:px-10 lg:px-12 lg:py-28">
      <dl
        data-reveal-group
        className="mx-auto grid max-w-[1320px] gap-10 md:grid-cols-3 md:gap-0"
      >
        {facts.map(({ value, unit, body }, i) => (
          <div
            key={unit}
            className={`md:px-10 ${i ? "md:border-l md:border-[#0B231D]/12" : "md:pl-0"}`}
          >
            <dt className="sr-only">{unit}</dt>
            <dd className="flex items-baseline gap-3">
              <span className="ymg-num text-[clamp(4rem,8vw,6.5rem)] leading-[0.9] text-[#0B231D]">
                {value}
              </span>
              <span className="ymg-num text-[1.5rem] text-[#8C6B22]">
                {unit}
              </span>
            </dd>
            <dd className="mt-4 max-w-[22rem] text-[1.05rem] leading-[1.55] text-[#4E5A54]">
              {body}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/* Who we are: the copy beside the live pipeline board. */
function WhoWeAre() {
  return (
    <section className="bg-[#F0F4F1] px-5 py-24 sm:px-10 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-6">
        <h2
          data-reveal
          className={`${h2} max-w-[19ch] self-end text-[#0B231D] lg:col-start-1 lg:row-start-1`}
        >
          More than marketing.{" "}
          <span className="text-[#8C6B22]">One accountable team.</span>
        </h2>
        <div
          data-reveal
          className="min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1"
        >
          <PipelineBoard />
        </div>
        <div data-reveal className="self-start lg:col-start-1 lg:row-start-2">
          <p className="max-w-[32rem] text-[1.1rem] leading-[1.65] text-[#4E5A54]">
            Firms need qualified opportunities, fast intake, steady follow-up
            and the capacity to handle growth. We run all of it as one process,
            built around your practice areas and markets.
          </p>
        </div>
      </div>
    </section>
  );
}

/* What we cover: six pillars as a two-column menu on evergreen. */
function Pillars() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0B231D] px-5 py-24 text-[#F5F1E8] sm:px-10 lg:px-12 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_15%_10%,rgba(214,178,99,0.1),transparent_70%)]"
      />
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-20">
          <h2 data-reveal className={`${h2} max-w-[16ch]`}>
            What we <span className="text-[#D6B263]">cover.</span>
          </h2>
          <p
            data-reveal
            className="max-w-[30rem] text-[1.1rem] leading-[1.6] text-[#C9C3B4] lg:pb-2"
          >
            Six pillars that run together as one partnership, or on their own.
          </p>
        </div>
        <ul
          data-reveal-group
          className="mt-14 grid border-t border-[#F5F1E8]/12 md:grid-cols-2 md:gap-x-12"
        >
          {pillars.map(({ title, body, href, Icon, tone }) => (
            <li key={title} className="border-b border-[#F5F1E8]/12">
              <Link href={href} className="group flex items-start gap-5 py-7">
                <GlassIcon tone={tone} size="lg" surface="dark">
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </GlassIcon>
                <span className="min-w-0 flex-1">
                  <span className="ymg-num block text-[1.7rem] leading-tight transition-colors group-hover:text-[#D6B263]">
                    {title}
                  </span>
                  <span className="mt-2 block max-w-[28rem] text-[1.04rem] leading-[1.55] text-[#C9C3B4]">
                    {body}
                  </span>
                </span>
                <ArrowUpRight
                  size={20}
                  className="mt-2 shrink-0 text-[#F5F1E8]/40 transition-colors group-hover:text-[#D6B263]"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* Approach: a wide photo with the line set into it, then the four commitments in order. */
function Approach() {
  return (
    <section className="bg-white px-5 py-24 sm:px-10 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1320px]">
        <div
          data-reveal
          className="relative isolate flex min-h-[420px] items-end overflow-hidden rounded-[28px] p-7 sm:p-12 lg:aspect-[21/8] lg:min-h-0"
        >
          <Image
            src="/images/about/boardroom.jpg"
            alt="A firm's team in a boardroom meeting"
            fill
            sizes="(min-width: 1320px) 1320px, 100vw"
            className="-z-10 object-cover"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071813]/90 via-[#071813]/45 to-transparent"
          />
          <h2 className={`${h2} max-w-[22ch] text-[#F5F1E8]`}>
            We don&apos;t hand you leads{" "}
            <span className="text-[#D6B263]">and walk away.</span>
          </h2>
        </div>
        <ol
          data-reveal-group
          className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          {approach.map(({ title, body }, i) => (
            <li key={title} className="border-t-2 border-[#C8A24E] pt-6">
              <span className="ymg-num block text-[3rem] leading-none text-[#0B231D]/15">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[1.55rem] font-normal leading-tight text-[#0B231D]">
                {title}
              </h3>
              <p className="mt-3 text-[1.04rem] leading-[1.55] text-[#4E5A54]">
                {body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* Values: four quadrants split by hairlines. */
function Values() {
  return (
    <section className="bg-[#F0F4F1] px-5 py-24 sm:px-10 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
        <h2 data-reveal className={`${h2} max-w-[14ch] text-[#0B231D]`}>
          What we <span className="text-[#8C6B22]">stand for.</span>
        </h2>
        <ul data-reveal-group className="grid sm:grid-cols-2">
          {values.map(({ title, body, Icon, tone }, i) => (
            <li
              key={title}
              className={`flex flex-col gap-4 py-8 sm:p-8 ${i < 2 ? "border-b border-[#0B231D]/12" : ""} ${i % 2 === 0 ? "sm:border-r sm:border-[#0B231D]/12 sm:pl-0" : ""} ${i > 1 ? "border-b border-[#0B231D]/12 sm:border-b-0" : ""}`}
            >
              <GlassIcon tone={tone} size="md">
                <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
              </GlassIcon>
              <h3 className="text-[1.8rem] font-normal leading-tight text-[#0B231D]">
                {title}
              </h3>
              <p className="max-w-[24rem] text-[1.04rem] leading-[1.55] text-[#4E5A54]">
                {body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Close() {
  return (
    <section className="relative isolate overflow-hidden bg-[#071813] px-5 py-28 text-[#F5F1E8] sm:px-10 lg:px-12 lg:py-36">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(45%_70%_at_15%_50%,rgba(214,178,99,0.14),transparent_70%)]"
      />
      <div className="mx-auto flex max-w-[1320px] flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <h2
          data-reveal
          className="max-w-[20ch] text-[clamp(2.18rem,4.48vw,4rem)] leading-[1] tracking-[-0.02em]"
        >
          Let&apos;s talk about{" "}
          <span className="text-[#D6B263]">your firm.</span>
        </h2>
        <div data-reveal className="flex flex-col gap-3 sm:flex-row lg:pb-3">
          <BookCallButton />
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="ymg-site">
      <Hero />
      <div id="clients" className="scroll-mt-24 bg-[#0B231D]">
        <TrustBand />
      </div>
      <Facts />
      <WhoWeAre />
      <Pillars />
      <Approach />
      <Values />
      <div id="testimonials" className="scroll-mt-24">
        <TestimonialCardsShowcase showAllLink={false} />
      </div>
      <Close />
      <ScrollMotion />
    </div>
  );
}
