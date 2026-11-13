import type { Metadata } from "next";
import Link from "next/link";
import {
  Gauge,
  LineChart,
  ArrowUpRight,
  BarChart3,
  ChevronRight,
  Database,
  LayoutTemplate,
  MapPin,
  Megaphone,
  PhoneCall,
  RefreshCw,
  Search,
  Share2,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import GlassIcon, { type GlassTone } from "@/components/ui/GlassIcon";
import ScrollMotion from "@/components/home/ScrollMotion";
import { BookCallButton } from "@/components/site/Cta";
import HeroBackdrop from "@/components/site/HeroBackdrop";
import HeroPoints from "@/components/site/HeroPoints";
import ServiceOrbit, { HeroTrust } from "@/components/site/ServiceOrbit";
import PhotoCard from "@/components/site/PhotoCard";
import ClientProof from "@/components/site/ClientProof";
import SearchToLead from "@/components/illustrations/SearchToLead";
import PipelineBoard from "@/components/illustrations/PipelineBoard";

export const metadata: Metadata = {
  title: "Law Firm Marketing Services | Legal Marketing Agency | YMG Legal",
  description:
    "YMG Legal provides law firm marketing through Google, Meta, SEO, landing pages, conversion optimization, and performance tracking.",
};

type Channel = {
  name: string;
  body: string;
  /** Channels link to their own page; conversion and tracking work runs across all of them. */
  href?: string;
  Icon: LucideIcon;
  tone: GlassTone;
};

const groups: { title: string; channels: Channel[] }[] = [
  {
    title: "Paid advertising",
    channels: [
      {
        name: "Google Ads",
        body: "Reach people searching for legal help right now.",
        href: "/services/google-search-ads",
        Icon: Search,
        tone: "blue",
      },
      {
        name: "Meta Ads",
        body: "Facebook and Instagram campaigns for your case types.",
        href: "/services/meta-ads",
        Icon: Megaphone,
        tone: "indigo",
      },
      {
        name: "Local Services Ads",
        body: "Appear first in Google's pay-per-lead local results.",
        href: "/services/local-services-ads",
        Icon: MapPin,
        tone: "green",
      },
    ],
  },
  {
    title: "Organic & web",
    channels: [
      {
        name: "SEO",
        body: "Rank for high-value searches without paying per click.",
        href: "/services/seo",
        Icon: TrendingUp,
        tone: "teal",
      },
      {
        name: "AI Search",
        body: "Get recommended by AI-powered search.",
        href: "/services/ai-search",
        Icon: Sparkles,
        tone: "violet",
      },
      {
        name: "Organic Social",
        body: "Consistent content that builds trust and referrals.",
        href: "/services/organic-social-media",
        Icon: Share2,
        tone: "rose",
      },
      {
        name: "Website Design",
        body: "Fast, conversion-focused sites and landing pages.",
        href: "/services/website-design",
        Icon: LayoutTemplate,
        tone: "amber",
      },
    ],
  },
  {
    title: "Conversion & tracking",
    channels: [
      {
        name: "Conversion Optimization",
        body: "Analyze the journey from click to call or form submission and identify opportunities to improve conversion.",
        Icon: Gauge,
        tone: "blue",
      },
      {
        name: "Tracking & Reporting",
        body: "Measure campaign activity, lead flow, and downstream performance.",
        Icon: LineChart,
        tone: "green",
      },
    ],
  },
];

// Content guide: "Marketing Built Around Outcomes", the flow from traffic to retainers.
const impact = [
  {
    title: "Traffic",
    body: "Relevant visitors from search, social and local results.",
  },
  {
    title: "Leads",
    body: "Calls and forms from people actively seeking legal help.",
  },
  {
    title: "Qualified Opportunities",
    body: "Inquiries checked against the criteria your firm sets.",
  },
  {
    title: "Intake",
    body: "Each opportunity handled and documented by intake.",
  },
  {
    title: "Retainers",
    body: "Qualified clients guided to a signed retainer.",
  },
];

// The acquisition engine, in the order a lead travels through it.
const engine: { title: string; Icon: LucideIcon }[] = [
  { title: "Ads & SEO", Icon: Search },
  { title: "Landing pages", Icon: LayoutTemplate },
  { title: "Call tracking", Icon: PhoneCall },
  { title: "CRM integration", Icon: Database },
  { title: "Lead nurturing", Icon: RefreshCw },
  { title: "Reporting", Icon: BarChart3 },
];

const h2 = "text-[clamp(1.93rem,3.52vw,3.2rem)] leading-[1.03] tracking-[-0.015em]";

export default function LawFirmMarketingPage() {
  return (
    <div className="ymg-site">
      <section className="ymg-dark-hero relative isolate overflow-hidden bg-[#0B231D] px-5 pb-20 pt-32 text-[#F5F1E8] sm:px-10 sm:pt-36 lg:px-12 lg:pb-24">
        <HeroBackdrop src="/images/services/mkt-search.jpg" />
        <div className="mx-auto max-w-[1320px]">
          <nav
            aria-label="Breadcrumb"
            data-reveal
            className="text-[0.88rem] text-[#F5F1E8]/60"
          >
            <ol className="flex flex-wrap items-center gap-1.5">
              <li className="flex items-center gap-1.5">
                <Link
                  href="/services"
                  className="inline-block py-2 hover:text-[#D6B263]"
                >
                  Services
                </Link>
                <ChevronRight size={14} aria-hidden="true" />
              </li>
              <li aria-current="page" className="text-[#F5F1E8]/85">
                Law Firm Marketing
              </li>
            </ol>
          </nav>
          <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-x-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-8">
            <h1
              data-reveal
              className="max-w-[20ch] self-end text-[clamp(2.1rem,4vw,3.52rem)] leading-[1.02] tracking-[-0.02em] md:col-span-2 lg:col-span-1 lg:col-start-1 lg:row-start-1"
            >
              Law Firm Marketing Services{" "}
              <span className="text-[#D6B263]">for Plaintiff Firms</span>
            </h1>
            <div
              data-reveal
              data-reveal-delay="120"
              className="md:col-start-2 md:row-start-2 md:self-center lg:row-span-2 lg:row-start-1"
            >
              <ServiceOrbit
                label={"Law Firm\nMarketing"}
                cards={groups
                  .flatMap((g) => g.channels)
                  .filter((c) => c.href)
                  .map(({ name, Icon }) => ({ title: name, Icon }))}
              />
            </div>
            <div
              data-reveal
              data-reveal-delay="200"
              className="md:col-start-1 md:row-start-2 md:self-center lg:row-start-2 lg:self-start"
            >
              <p className="text-[1.25rem] leading-snug text-[#D6B263]">
                Reach the Right Prospects. Build a Stronger Pipeline.
              </p>
              <p className="mt-4 max-w-[34rem] text-[1.08rem] leading-[1.65] text-[#C9C3B4]">
                YMG Legal provides digital marketing solutions for law firms
                looking to increase visibility, generate inquiries, and build
                consistent acquisition channels. We combine campaign strategy,
                paid media, search, landing pages, conversion optimization, and
                performance tracking around your firm&apos;s growth objectives.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <BookCallButton label="Talk to a Law Firm Marketing Specialist" />
              </div>
              <HeroPoints
                points={[
                  "Paid, organic and web",
                  "Tracked from click to retainer",
                ]}
              />
            </div>
          </div>
          <HeroTrust />
        </div>
      </section>

      {/* The channels, in two groups */}
      <section className="bg-white px-5 py-24 sm:px-10 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <h2 data-reveal className={`${h2} max-w-[22ch] text-[#0B231D]`}>
            The channels <span className="text-[#8C6B22]">we run for you.</span>
          </h2>
          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
            {groups.map(({ title, channels }) => (
              <div key={title}>
                <p
                  data-reveal
                  className="text-[1.05rem] font-semibold text-[#4E5A54]"
                >
                  {title}
                </p>
                <ul
                  data-reveal-group
                  className="mt-4 border-t border-[#0B231D]/12"
                >
                  {channels.map(({ name, body, href, Icon, tone }) => {
                    const inner = (
                      <>
                        <GlassIcon tone={tone} size="lg">
                          <Icon
                            size={22}
                            strokeWidth={1.8}
                            aria-hidden="true"
                          />
                        </GlassIcon>
                        <span className="min-w-0 flex-1">
                          <span className="ymg-num block text-[1.7rem] leading-tight text-[#0B231D] transition-colors group-hover:text-[#8C6B22]">
                            {name}
                          </span>
                          <span className="mt-1 block text-[1.02rem] leading-[1.5] text-[#4E5A54]">
                            {body}
                          </span>
                        </span>
                      </>
                    );
                    return (
                      <li key={name} className="border-b border-[#0B231D]/12">
                        {href ? (
                          <Link
                            href={href}
                            className="group flex items-center gap-5 py-6"
                          >
                            {inner}
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F0F4F1] text-[#0B231D] transition-colors group-hover:bg-[#0B231D] group-hover:text-[#D6B263]">
                              <ArrowUpRight size={18} aria-hidden="true" />
                            </span>
                          </Link>
                        ) : (
                          <div className="flex items-center gap-5 py-6">
                            {inner}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One lead, followed from the search to the firm's pipeline */}
      <section className="bg-[#F0F4F1] px-5 py-24 sm:px-10 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-20">
            <h2 data-reveal className={`${h2} max-w-[19ch] text-[#0B231D]`}>
              Follow one lead{" "}
              <span className="text-[#8C6B22]">from search to signed.</span>
            </h2>
            <p
              data-reveal
              className="max-w-[30rem] text-[1.1rem] leading-[1.6] text-[#4E5A54] lg:pb-2"
            >
              Someone searches at 9:41 PM. Your ad answers, the form comes in,
              and the lead lands in your pipeline already tagged by case type,
              where intake moves it toward a retainer.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-[1040px] gap-14">
            <div data-reveal className="min-w-0">
              <p className="mb-4 flex items-center gap-3 text-[1.02rem] font-semibold text-[#0B231D]">
                <span className="ymg-num flex h-9 w-9 items-center justify-center rounded-full bg-[#0B231D] text-[0.95rem] text-[#D6B263]">
                  1
                </span>
                The search becomes a lead
              </p>
              <SearchToLead />
            </div>
            <div data-reveal data-reveal-delay="160" className="min-w-0">
              <p className="mb-4 flex items-center gap-3 text-[1.02rem] font-semibold text-[#0B231D]">
                <span className="ymg-num flex h-9 w-9 items-center justify-center rounded-full bg-[#0B231D] text-[0.95rem] text-[#D6B263]">
                  2
                </span>
                The lead moves to a signed case
              </p>
              <PipelineBoard />
            </div>
          </div>
        </div>
      </section>

      {/* The engine: one line from the first ad to the report */}
      <section className="relative isolate overflow-hidden bg-[#0B231D] px-5 py-24 text-[#F5F1E8] sm:px-10 lg:px-12 lg:py-32">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_85%_20%,rgba(214,178,99,0.1),transparent_70%)]"
        />
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-20">
            <h2 data-reveal className={`${h2} max-w-[18ch]`}>
              One system,{" "}
              <span className="text-[#D6B263]">ad to retainer.</span>
            </h2>
            <p
              data-reveal
              className="max-w-[30rem] text-[1.1rem] leading-[1.6] text-[#C9C3B4] lg:pb-2"
            >
              No single-channel dependency. Every channel feeds the same
              tracking, CRM and follow-up, so you see which spend becomes cases.
            </p>
          </div>
          <ol
            data-reveal-group
            className="relative mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4"
          >
            <span
              aria-hidden="true"
              className="ymg-flow-spark absolute top-7 hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D6B263] shadow-[0_0_14px_4px_rgba(214,178,99,0.55)] lg:block"
            />
            <span
              aria-hidden="true"
              className="absolute left-[8%] right-[8%] top-7 hidden h-px bg-[linear-gradient(90deg,transparent,rgba(214,178,99,0.55)_10%,rgba(214,178,99,0.55)_90%,transparent)] lg:block"
            />
            {engine.map(({ title, Icon }, i) => (
              <li
                key={title}
                className="relative flex flex-col items-start gap-4 lg:items-center lg:text-center"
              >
                <span
                  className="ymg-flow-node relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#D6B263]/60 bg-[#0B231D] text-[#D6B263]"
                  style={{ animationDelay: `${i * 1.1 - 0.15}s` }}
                >
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span>
                  <span className="ymg-num block text-[0.95rem] text-[#D6B263]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="block text-[1.1rem] font-semibold">
                    {title}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Impact, four big lines */}
      <section className="bg-white px-5 py-24 sm:px-10 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-20">
          <div>
            <h2 data-reveal className={`${h2} max-w-[16ch] text-[#0B231D]`}>
              Marketing Built{" "}
              <span className="text-[#8C6B22]">Around Outcomes</span>
            </h2>
            <p
              data-reveal
              className="mt-6 max-w-[30rem] text-[1.08rem] leading-[1.6] text-[#4E5A54]"
            >
              Traffic and impressions are only part of the picture. We focus on
              the metrics that matter to law firms.
            </p>
            <div data-reveal className="mt-10">
              <PhotoCard
                photo={{
                  src: "/images/home/svc-marketing-search.jpg",
                  alt: "A Google search on a phone",
                }}
                highlights={["Every lead traced to its source"]}
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
          <ul data-reveal-group className="border-t border-[#0B231D]/12">
            {impact.map(({ title, body }) => (
              <li
                key={title}
                className="grid gap-2 border-b border-[#0B231D]/12 py-7 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:items-baseline sm:gap-8"
              >
                <span className="ymg-num text-[clamp(1.7rem,2.8vw,2.4rem)] leading-tight text-[#0B231D]">
                  {title}
                </span>
                <span className="text-[1.04rem] leading-[1.55] text-[#4E5A54]">
                  {body}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClientProof
        photo={{
          src: "/images/about/meeting.jpg",
          alt: "A law firm team reviewing results",
        }}
        start={2}
        tone="mist"
      />

      <section className="relative isolate overflow-hidden bg-[#071813] px-5 py-28 text-[#F5F1E8] sm:px-10 lg:px-12 lg:py-36">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(45%_70%_at_85%_50%,rgba(214,178,99,0.14),transparent_70%)]"
        />
        <div className="mx-auto flex max-w-[1320px] flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <h2
            data-reveal
            className="max-w-[20ch] text-[clamp(2.18rem,4.48vw,4rem)] leading-[1] tracking-[-0.02em]"
          >
            Let&apos;s plan your{" "}
            <span className="text-[#D6B263]">marketing.</span>
          </h2>
          <div data-reveal className="flex flex-col gap-3 sm:flex-row lg:pb-3">
            <BookCallButton />
          </div>
        </div>
      </section>
      <ScrollMotion />
    </div>
  );
}
