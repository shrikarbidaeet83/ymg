import Link from "next/link";
import { Check, ChevronRight, Plus } from "lucide-react";
import GlassIcon, { type GlassTone } from "@/components/ui/GlassIcon";
import ScrollMotion from "@/components/home/ScrollMotion";
import StepTimeline from "@/components/site/StepTimeline";
import { BookCallButton } from "@/components/site/Cta";
import type { ChannelContent } from "@/data/channel-pages";
import HeroBackdrop from "@/components/site/HeroBackdrop";
import HeroPoints from "@/components/site/HeroPoints";
import ServiceOrbit, { HeroTrust } from "@/components/site/ServiceOrbit";
import PhotoCard from "@/components/site/PhotoCard";
import ClientProof from "@/components/site/ClientProof";
import SearchToLead from "@/components/illustrations/SearchToLead";
import LocalVisibility from "@/components/illustrations/LocalVisibility";
import PipelineBoard from "@/components/illustrations/PipelineBoard";
import FollowUpSequence from "@/components/illustrations/FollowUpSequence";

// The live scene each channel shows beside what's included: the work, playing out.
const scenes: Record<string, () => React.ReactNode> = {
  "Google Ads": SearchToLead,
  "Meta Ads": FollowUpSequence,
  "Local Services Ads": LocalVisibility,
  SEO: LocalVisibility,
  "AI Search": SearchToLead,
  "Organic Social": PipelineBoard,
  "Website Design": SearchToLead,
};

const tones: GlassTone[] = ["teal", "blue", "violet", "rose"];
const h2 = "text-[clamp(1.93rem,3.52vw,3.2rem)] leading-[1.03] tracking-[-0.015em]";

/*
 * One template for the Law Firm Marketing channels (Google Ads, Meta, LSA, SEO, AI Search, Organic Social,
 * Website Design). Section order: hero, why, what's included, process, results, close.
 */
export default function ChannelPage({ content }: { content: ChannelContent }) {
  const LiveScene = scenes[content.name] ?? PipelineBoard;
  const proofStart = Object.keys(scenes).indexOf(content.name) + 1;
  const {
    name,
    title,
    intro,
    photo,
    highlights,
    why,
    included,
    process,
    results,
    close,
    areas,
    faqs,
  } = content;

  // Structured data the content guide asks for: Service, FAQPage and the breadcrumb trail.
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${title[0]} ${title[1]}`,
      description: intro,
      serviceType: name,
      areaServed: "US",
      provider: {
        "@type": "Organization",
        name: "YMG Legal",
        url: "https://ymg-legal.com",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { name: "Services", item: "https://ymg-legal.com/services" },
        {
          name: "Law Firm Marketing",
          item: "https://ymg-legal.com/services/law-firm-marketing",
        },
        { name },
      ].map((c, i) => ({ "@type": "ListItem", position: i + 1, ...c })),
    },
  ];

  return (
    <div className="ymg-site">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero: title, then the photo, then the copy on phones */}
      <section className="ymg-dark-hero relative isolate overflow-hidden bg-[#0B231D] px-5 pb-20 pt-32 text-[#F5F1E8] sm:px-10 sm:pt-36 lg:px-12 lg:pb-24">
        <HeroBackdrop src={photo.src} />
        <div className="mx-auto max-w-[1320px]">
          <nav
            aria-label="Breadcrumb"
            data-reveal
            className="text-[0.88rem] text-[#F5F1E8]/60"
          >
            <ol className="flex flex-wrap items-center gap-1.5">
              {[
                { label: "Services", href: "/services" },
                {
                  label: "Law Firm Marketing",
                  href: "/services/law-firm-marketing",
                },
              ].map(({ label, href }) => (
                <li key={href} className="flex items-center gap-1.5">
                  <Link
                    href={href}
                    className="inline-block py-2 hover:text-[#D6B263]"
                  >
                    {label}
                  </Link>
                  <ChevronRight size={14} aria-hidden="true" />
                </li>
              ))}
              <li aria-current="page" className="text-[#F5F1E8]/85">
                {name}
              </li>
            </ol>
          </nav>
          {/* Title, then the visual, then the copy: the order phones read it in. Wide screens put the visual right. */}
          <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-x-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-8">
            <h1
              data-reveal
              className="max-w-[19ch] self-end text-[clamp(2.18rem,4.32vw,3.84rem)] leading-[1] tracking-[-0.02em] md:col-span-2 lg:col-span-1 lg:col-start-1 lg:row-start-1"
            >
              <span className="text-[#D6B263]">{title[0]}</span> {title[1]}
            </h1>
            <div
              data-reveal
              data-reveal-delay="120"
              className="md:col-start-2 md:row-start-2 md:self-center lg:row-span-2 lg:row-start-1"
            >
              <ServiceOrbit
                label={`${name}\nfor law firms`}
                cards={process.steps}
              />
            </div>
            <div
              data-reveal
              data-reveal-delay="200"
              className="md:col-start-1 md:row-start-2 md:self-center lg:row-start-2 lg:self-start"
            >
              <p className="max-w-[32rem] text-[1.12rem] leading-[1.65] text-[#C9C3B4]">
                {intro}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <BookCallButton label={`Get a free ${name} review`} />
              </div>
              <HeroPoints points={highlights} />
            </div>
          </div>
          <HeroTrust />
        </div>
      </section>

      {/* Why: the case for the channel, four points split by hairlines */}
      <section className="bg-white px-5 py-24 sm:px-10 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 data-reveal className={`${h2} max-w-[19ch] text-[#0B231D]`}>
              {why.title[0]}{" "}
              <span className="text-[#8C6B22]">{why.title[1]}</span>
            </h2>
            <p
              data-reveal
              className="mt-6 max-w-[30rem] text-[1.1rem] leading-[1.6] text-[#4E5A54]"
            >
              {why.body}
            </p>
            <div data-reveal className="mt-10">
              <PhotoCard
                photo={photo}
                highlights={[results.items[0]]}
                sizes="(min-width: 1024px) 38vw, 100vw"
              />
            </div>
          </div>
          <ul data-reveal-group className="grid sm:grid-cols-2">
            {why.points.map(({ title: t, body, Icon }, i) => (
              <li
                key={t}
                className={`flex flex-col gap-4 border-b border-[#0B231D]/12 py-8 sm:px-8 ${i % 2 === 0 ? "sm:border-r sm:pl-0" : ""} ${i > 1 ? "sm:border-b-0" : ""}`}
              >
                <GlassIcon tone={tones[i % tones.length]} size="md">
                  <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                </GlassIcon>
                <h3 className="text-[1.7rem] font-normal leading-tight text-[#0B231D]">
                  {t}
                </h3>
                <p className="max-w-[24rem] text-[1.04rem] leading-[1.55] text-[#4E5A54]">
                  {body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What's included, as a checked list on evergreen */}
      <section className="relative isolate overflow-hidden bg-[#0B231D] px-5 py-24 text-[#F5F1E8] sm:px-10 lg:px-12 lg:py-32">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_15%_10%,rgba(214,178,99,0.1),transparent_70%)]"
        />
        <div className="mx-auto max-w-[1320px]">
          <h2 data-reveal className={`${h2} max-w-[19ch]`}>
            {included.title}
          </h2>
          <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
            {/* The work playing out, first on phones so the list reads against it */}
            <div
              data-reveal
              className="min-w-0 lg:sticky lg:top-32 lg:order-2 lg:self-start"
            >
              <LiveScene />
            </div>
            <ul
              data-reveal-group
              className="grid self-start border-t border-[#F5F1E8]/12"
            >
              {included.items.map(({ title: t, body }) => (
                <li
                  key={t}
                  className="flex items-start gap-4 border-b border-[#F5F1E8]/12 py-6"
                >
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1E9E6A] text-white">
                    <Check size={16} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="ymg-num block text-[1.5rem] leading-tight">
                      {t}
                    </span>
                    {body && (
                      <span className="mt-1.5 block text-[1.02rem] leading-[1.55] text-[#C9C3B4]">
                        {body}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {areas && areas.length > 0 && (
            <div
              data-reveal
              className="mt-14 border-t border-[#F5F1E8]/12 pt-10"
            >
              <h3 className="text-[1.7rem] font-normal leading-tight">
                Practice areas we help promote
              </h3>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {areas.map((a) => (
                  <li
                    key={a}
                    className="rounded-full border border-[#F5F1E8]/15 bg-[#F5F1E8]/[0.06] px-4 py-2 text-[0.98rem] text-[#F5F1E8]/90"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#F0F4F1] px-5 py-24 sm:px-10 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <h2 data-reveal className={`${h2} max-w-[22ch] text-[#0B231D]`}>
            {process.title}
          </h2>
          <div className="mt-16 lg:mt-20">
            <StepTimeline
              steps={process.steps.map(({ title: t, Icon }) => ({
                title: t,
                icon: <Icon size={22} strokeWidth={1.8} aria-hidden="true" />,
              }))}
            />
          </div>
        </div>
      </section>

      {/* Results, set large */}
      <section className="bg-white px-5 py-24 sm:px-10 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <h2 data-reveal className={`${h2} max-w-[18ch] text-[#0B231D]`}>
            {results.title}
          </h2>
          <ol data-reveal-group className="border-t border-[#0B231D]/12">
            {results.items.map((r, i) => (
              <li
                key={r}
                className="flex items-baseline gap-6 border-b border-[#0B231D]/12 py-6"
              >
                <span className="ymg-num w-8 shrink-0 text-[1rem] text-[#8C6B22]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="ymg-num text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight text-[#0B231D]">
                  {r}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ: two or three questions, as the content guide's service template asks */}
      <section className="bg-[#F0F4F1] px-5 py-24 sm:px-10 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <h2 data-reveal className={`${h2} max-w-[16ch] text-[#0B231D]`}>
            Questions about <span className="text-[#8C6B22]">{name}.</span>
          </h2>
          <div data-reveal-group className="border-t border-[#0B231D]/12">
            {faqs.map(({ question, answer }) => (
              <details
                key={question}
                className="group border-b border-[#0B231D]/12"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[1.15rem] font-semibold text-[#0B231D] [&::-webkit-details-marker]:hidden">
                  {question}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#0B231D] transition-transform group-open:rotate-45">
                    <Plus size={17} aria-hidden="true" />
                  </span>
                </summary>
                <p className="max-w-[44rem] pb-6 text-[1.04rem] leading-[1.65] text-[#4E5A54]">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ClientProof
        photo={{
          src: "/images/about/handshake.jpg",
          alt: "A handshake over a signed agreement",
        }}
        start={proofStart}
        tone="white"
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
            {close[0]} <span className="text-[#D6B263]">{close[1]}</span>
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
