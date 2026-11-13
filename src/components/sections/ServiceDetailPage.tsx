import Link from "next/link";
import ClientProof from "@/components/site/ClientProof";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Info,
  Plus,
  type LucideIcon,
} from "lucide-react";
import GlassIcon, { type GlassTone } from "@/components/ui/GlassIcon";
import ScrollMotion from "@/components/home/ScrollMotion";
import StepTimeline from "@/components/site/StepTimeline";
import PhotoCard from "@/components/site/PhotoCard";
import {
  BookCallButton,
  BookCallButtonDark,
} from "@/components/site/Cta";
import CaseOnboarding from "@/components/illustrations/CaseOnboarding";
import CriteriaScreening from "@/components/illustrations/CriteriaScreening";
import FollowUpSequence from "@/components/illustrations/FollowUpSequence";
import IntakeNightShift from "@/components/illustrations/IntakeNightShift";
import PayPerCall from "@/components/illustrations/PayPerCall";
import RetainerSigning from "@/components/illustrations/RetainerSigning";
import MedicalChronology from "@/components/illustrations/MedicalChronology";
import { activeItems, practiceAreas } from "@/data/practice-areas";
import HeroBackdrop from "@/components/site/HeroBackdrop";
import ServiceOrbit, { HeroTrust } from "@/components/site/ServiceOrbit";

// Animated scenes a service page can show in its "See it in action" section.
const scenes = {
  caseOnboarding: CaseOnboarding,
  criteriaScreening: CriteriaScreening,
  followUp: FollowUpSequence,
  nightShift: IntakeNightShift,
  payPerCall: PayPerCall,
  retainer: RetainerSigning,
  medicalChronology: MedicalChronology,
};

export type ServiceCard = {
  title: string;
  text: string;
  Icon: LucideIcon;
  href?: string;
  bullets?: string[];
};

export type ServicePageContent = {
  eyebrow: string;
  /** The service's photo, shown with its two highlights over the bottom edge. */
  photo: { src: string; alt: string };
  /** Two short key points, a few words each, read at a glance. */
  highlights: string[];
  /** Short label for the centre of the hero diagram; "\n" breaks the line. */
  hubLabel: string;
  title: string;
  subhead?: string;
  intro: string;
  cta: string;
  capabilities: {
    title: string;
    intro?: string;
    cards: ServiceCard[];
  };
  criteria: {
    title: string;
    body: string;
    items?: string[];
    note?: string;
  };
  workflow: {
    title: string;
    body: string;
    steps: { title: string; Icon: LucideIcon }[];
  };
  faqs: { question: string; answer: string }[];
  disclaimer?: string;
  /** One sourced stat, set large beside the criteria (content guide: the Legal Intake stat callout). */
  stat?: { value: string; label: string; source: string; href?: string };
  /** Practice-area slug whose active campaigns are listed beside the criteria (CMS active flag). */
  campaigns?: string;
  /** Optional animated scene, shown in its own section after the criteria. */
  scene?: { key: keyof typeof scenes; title: string; body: string };
};

// Each capability keeps its own liquid colour, in the same order on every service page.
const tones: GlassTone[] = [
  "teal",
  "blue",
  "violet",
  "rose",
  "green",
  "amber",
  "indigo",
  "gold",
];
const toneAt = (i: number) => tones[i % tones.length];

export type ServiceCrumb = {
  current: string;
  parent?: { label: string; href: string };
};

const promises = [
  { value: "30 min", label: "free strategy call" },
  { value: "48 hrs", label: "custom proposal" },
  { value: "1 wk", label: "to launch, at fastest" },
];

/** "X for Law Firms": the service name in brass, the audience in cream. */
function SplitTitle({ title }: { title: string }) {
  const split = title.lastIndexOf(" for ");
  if (split === -1) return <>{title}</>;
  return (
    <>
      <span className="text-[#D6B263]">{title.slice(0, split)}</span>
      {title.slice(split)}
    </>
  );
}

/* ─── Sections ─── */

function Hero({
  content,
  crumb,
}: {
  content: ServicePageContent;
  crumb: ServiceCrumb;
}) {
  return (
    <section className="ymg-dark-hero relative isolate overflow-hidden bg-[#0B231D] px-5 pb-16 pt-32 text-[#F5F1E8] sm:px-10 sm:pt-36 lg:px-12 lg:pb-20">
      <HeroBackdrop src={content.photo.src} />
      <div className="mx-auto max-w-[1320px]">
        <nav
          aria-label="Breadcrumb"
          data-reveal
          className="text-[0.88rem] text-[#F5F1E8]/60"
        >
          <ol className="flex flex-wrap items-center gap-1.5">
            {[
              { label: "Services", href: "/services" },
              ...(crumb.parent ? [crumb.parent] : []),
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
              {crumb.current}
            </li>
          </ol>
        </nav>

        {/* Title, then the visual, then the copy: the order phones read it in. Wide screens put the visual right. */}
        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-x-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-8">
          <h1
            data-reveal
            className="max-w-[23ch] self-end text-[clamp(2.02rem,4vw,3.52rem)] leading-[1.02] tracking-[-0.015em] text-[#F5F1E8] md:col-span-2 lg:col-span-1 lg:col-start-1 lg:row-start-1"
          >
            <SplitTitle title={content.title} />
          </h1>

          <div
            data-reveal
            data-reveal-delay="120"
            className="md:col-start-2 md:row-start-2 md:self-center lg:row-span-2 lg:row-start-1"
          >
            <ServiceOrbit
              label={content.hubLabel}
              cards={content.capabilities.cards}
            />
          </div>

          <div
            data-reveal
            data-reveal-delay="200"
            className="md:col-start-1 md:row-start-2 md:self-center lg:row-start-2 lg:self-start"
          >
            {content.subhead && (
              <p className="text-[1.25rem] leading-snug text-[#D6B263]">
                {content.subhead}
              </p>
            )}
            <p
              className={`max-w-[36rem] text-[1.08rem] leading-[1.65] text-[#C9C3B4] ${content.subhead ? "mt-4" : ""}`}
            >
              {content.intro}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <BookCallButton label={content.cta} />
            </div>
          </div>
        </div>

        <HeroTrust />
      </div>
    </section>
  );
}

/* Capabilities as an index: a sticky heading on the left, one row per capability on the right. */
function Capabilities({ content }: { content: ServicePageContent }) {
  const { capabilities } = content;
  return (
    <section className="bg-white px-5 py-24 sm:px-10 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <h2
            data-reveal
            className="max-w-[19ch] text-[clamp(1.9rem,3.36vw,3.04rem)] leading-[1.04] tracking-[-0.015em] text-[#0B231D]"
          >
            {capabilities.title}
          </h2>
          {capabilities.intro && (
            <p
              data-reveal
              className="mt-6 max-w-[30rem] text-[1.05rem] leading-[1.6] text-[#4E5A54]"
            >
              {capabilities.intro}
            </p>
          )}
          <div data-reveal className="mt-10">
            <PhotoCard
              photo={content.photo}
              highlights={content.highlights}
              sizes="(min-width: 1024px) 520px, 100vw"
            />
          </div>
        </div>

        <div>
          <ol data-reveal-group className="border-t border-[#0B231D]/10">
            {capabilities.cards.map(
              ({ title, text, Icon, href, bullets }, i) => {
                const row = (
                  <>
                    <span className="ymg-num hidden w-10 shrink-0 pt-3 text-[1rem] text-[#8C6B22] sm:block">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <GlassIcon tone={toneAt(i)} size="lg">
                      <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                    </GlassIcon>
                    <span className="min-w-0 flex-1">
                      <span className="ymg-num block text-[1.7rem] leading-tight text-[#0B231D]">
                        {title}
                      </span>
                      <span className="mt-2 block max-w-[36rem] text-[1.08rem] leading-[1.55] text-[#4E5A54]">
                        {text}
                      </span>
                      {bullets && (
                        <span className="mt-4 flex flex-wrap gap-2">
                          {bullets.map((b) => (
                            <span
                              key={b}
                              className="rounded-full bg-[#F0F4F1] px-3 py-1.5 text-[0.86rem] text-[#0B231D]"
                            >
                              {b}
                            </span>
                          ))}
                        </span>
                      )}
                    </span>
                    {href && (
                      <span className="mt-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F0F4F1] text-[#0B231D] transition-colors group-hover:bg-[#0B231D] group-hover:text-[#D6B263]">
                        <ArrowUpRight size={18} aria-hidden="true" />
                      </span>
                    )}
                  </>
                );
                const cls =
                  "group flex items-start gap-5 rounded-[18px] px-2 py-7 transition-colors duration-300 sm:px-4";
                return (
                  <li key={title} className="border-b border-[#0B231D]/10">
                    {href ? (
                      <Link
                        href={href}
                        className={`${cls} hover:bg-[#F0F4F1]/70`}
                      >
                        {row}
                      </Link>
                    ) : (
                      <div className={cls}>{row}</div>
                    )}
                  </li>
                );
              },
            )}
          </ol>
          <p data-reveal className="mt-8 text-[0.98rem] text-[#4E5A54]">
            Every engagement is scoped to your case types and markets.{" "}
            <Link
              href="/contact#booking"
              className="font-semibold text-[#0B231D] underline decoration-[#C8A24E] decoration-2 underline-offset-4 hover:text-[#8C6B22]"
            >
              Talk it through with us
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

/* Criteria as a live qualification checklist: the items tick one by one when the card scrolls in. */
/* Current Campaigns: only the items marked active, so a litigation YMG isn't working is never listed. */
function CurrentCampaigns({ slug }: { slug: string }) {
  const area = practiceAreas.find((a) => a.slug === slug);
  const items = area ? activeItems(area) : [];
  if (!area || items.length === 0) return null;
  return (
    <div className="mt-10 max-w-[34rem] border-t border-[#0B231D]/12 pt-8">
      <h3 className="text-[1.6rem] leading-tight text-[#0B231D]">
        Current Campaigns
      </h3>
      <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item.short}
            className="rounded-2xl border border-[#0B231D]/10 bg-white px-4 py-3.5 shadow-[0_10px_24px_rgba(11,35,29,0.07)]"
          >
            <span className="flex items-center gap-2 text-[1rem] font-bold text-[#0B231D]">
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-[#1E9E6A]"
                aria-hidden="true"
              />
              {item.short}
            </span>
            {item.mdl && (
              <span className="mt-1.5 block text-[0.82rem] font-semibold tracking-[0.02em] text-[#8C6B22]">
                {item.mdl}
              </span>
            )}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[0.82rem] text-[#4E5A54]">
        MDL: federal multidistrict litigation, per JPML pending-docket reports.
      </p>
      <Link
        href={`/practice-areas#${area.slug}`}
        className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0B231D] px-6 text-[0.98rem] font-semibold text-[#F5F1E8] transition-colors hover:bg-[#102E26]"
      >
        View Current Campaigns <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </div>
  );
}

function Criteria({ content }: { content: ServicePageContent }) {
  const { criteria } = content;
  const items = criteria.items?.length
    ? criteria.items
    : content.capabilities.cards.map((c) => c.title);
  return (
    <section className="bg-[#F0F4F1] px-5 py-24 sm:px-10 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-10 md:grid-cols-2 md:gap-x-10 lg:grid-rows-[auto_1fr] lg:gap-x-20 lg:gap-y-6">
        <h2
          data-reveal
          className="max-w-[20ch] self-end text-[clamp(1.9rem,3.36vw,3.04rem)] leading-[1.04] tracking-[-0.015em] text-[#0B231D] md:col-span-2 lg:col-span-1 lg:col-start-1 lg:row-start-1"
        >
          {criteria.title}
        </h2>

        <div
          data-reveal
          className="ymg-checklist md:col-start-2 md:row-start-2 lg:row-span-2 lg:row-start-1 lg:self-center"
        >
          <div className="overflow-hidden rounded-[26px] bg-[#0B231D] text-[#F5F1E8] shadow-[0_40px_80px_rgba(11,35,29,0.25)]">
            <div className="flex items-center justify-between gap-4 border-b border-[#F5F1E8]/10 px-6 py-5 sm:px-8">
              <p className="text-[0.98rem] font-semibold">
                {criteria.items?.length
                  ? "Qualification checklist"
                  : "Configured for your firm"}
              </p>
              <span className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-[#3FC8A8]/15 px-3 py-1 text-[0.8rem] font-medium text-[#7FE0C6]">
                <span
                  className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7FE0C6]"
                  aria-hidden="true"
                />{" "}
                Your criteria
              </span>
            </div>
            <ul className="grid gap-1 p-4 sm:p-5">
              {items.map((item, i) => (
                <li
                  key={item}
                  className="flex items-center gap-4 rounded-[14px] px-3 py-3.5 text-[1rem] sm:px-4"
                  style={{ ["--i" as string]: i }}
                >
                  <span className="ymg-tick relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#F5F1E8]/25">
                    <Check
                      size={15}
                      strokeWidth={3}
                      className="text-white"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-[#F5F1E8]/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div data-reveal className="md:col-start-1 md:row-start-2">
          <p className="max-w-[34rem] text-[1.08rem] leading-[1.65] text-[#4E5A54]">
            {criteria.body}
          </p>
          {criteria.note && (
            <p className="mt-8 flex max-w-[34rem] gap-3 border-l-2 border-[#C8A24E] pl-4 text-[0.96rem] leading-[1.6] text-[#4E5A54]">
              <Info
                size={18}
                className="mt-0.5 shrink-0 text-[#8C6B22]"
                aria-hidden="true"
              />
              {criteria.note}
            </p>
          )}
          {content.stat && (
            <figure className="mt-10 max-w-[34rem] border-t border-[#0B231D]/12 pt-8">
              <span className="ymg-num block text-[clamp(3.2rem,6vw,4.6rem)] leading-none text-[#0B231D]">
                {content.stat.value}
              </span>
              <figcaption className="mt-3">
                <span className="block text-[1.08rem] leading-[1.5] text-[#0B231D]">
                  {content.stat.label}
                </span>
                <span className="mt-2 block text-[0.86rem] text-[#4E5A54]">
                  Source:{" "}
                  {content.stat.href ? (
                    <a
                      href={content.stat.href}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-[#C8A24E] underline-offset-4 hover:text-[#0B231D]"
                    >
                      {content.stat.source}
                    </a>
                  ) : (
                    content.stat.source
                  )}
                </span>
              </figcaption>
            </figure>
          )}
          {content.campaigns && <CurrentCampaigns slug={content.campaigns} />}
        </div>
      </div>
    </section>
  );
}

/* The animated scene, framed on evergreen so it reads as the product in motion. */
function SceneSection({
  scene,
}: {
  scene: NonNullable<ServicePageContent["scene"]>;
}) {
  const SceneComponent = scenes[scene.key];
  return (
    <section className="relative isolate overflow-hidden bg-[#0B231D] px-5 py-24 text-[#F5F1E8] sm:px-10 lg:px-12 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(55%_60%_at_70%_50%,rgba(214,178,99,0.1),transparent_70%)]"
      />
      <div className="mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-6">
        <h2
          data-reveal
          className="max-w-[19ch] self-end text-[clamp(1.9rem,3.2vw,2.88rem)] leading-[1.04] tracking-[-0.015em] text-[#F5F1E8] lg:col-start-1 lg:row-start-1"
        >
          {scene.title}
        </h2>
        <div
          data-reveal
          className="min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1"
        >
          <SceneComponent />
        </div>
        <p
          data-reveal
          className="max-w-[30rem] self-start text-[1.08rem] leading-[1.65] text-[#C9C3B4] lg:col-start-1 lg:row-start-2"
        >
          {scene.body}
        </p>
      </div>
    </section>
  );
}

// The workflow photo and its one key point, by service category.
const flowMedia: Record<string, { src: string; alt: string; point: string }> = {
  "Case Acquisition": {
    src: "/images/services/flow-accident.jpg",
    alt: "A police car at the scene of a road accident",
    point: "Campaigns live in as little as 1 week",
  },
  "Intake Support": {
    src: "/images/services/flow-intake.jpg",
    alt: "An open-plan intake office at work",
    point: "24/7 live intake, US-based team",
  },
  "Law Firm Support": {
    src: "/images/services/flow-support.jpg",
    alt: "Case files organised in stacks",
    point: "Scoped to your caseload",
  },
};

function Workflow({
  workflow,
  disclaimer,
  eyebrow,
}: {
  workflow: ServicePageContent["workflow"];
  disclaimer?: string;
  eyebrow: string;
}) {
  const media = flowMedia[eyebrow] ?? flowMedia["Case Acquisition"];
  return (
    <section
      id="process"
      className="scroll-mt-24 bg-white px-5 py-24 sm:px-10 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1320px]">
        {/* Title, then the photo, then the copy on phones; side by side from md */}
        <div className="grid gap-8 md:grid-cols-2 md:grid-rows-[auto_1fr] md:gap-x-12 lg:gap-x-20">
          <h2
            data-reveal
            className="max-w-[20ch] self-end text-[clamp(1.9rem,3.36vw,3.04rem)] leading-[1.04] tracking-[-0.015em] text-[#0B231D] md:col-start-1 md:row-start-1"
          >
            {workflow.title}
          </h2>
          <div
            data-reveal
            className="md:col-start-2 md:row-span-2 md:row-start-1"
          >
            <PhotoCard
              photo={media}
              highlights={[media.point]}
              sizes="(min-width: 768px) 50vw, 100vw"
              aspect="aspect-[16/11]"
            />
          </div>
          <p
            data-reveal
            className="mt-4 max-w-[32rem] self-start text-[1.12rem] leading-[1.6] text-[#4E5A54] md:col-start-1 md:row-start-2 md:mt-0"
          >
            {workflow.body}
          </p>
        </div>
        <div className="mt-20 lg:mt-24">
          <StepTimeline
            steps={workflow.steps.map(({ title, Icon }) => ({
              title,
              icon: <Icon size={22} strokeWidth={1.8} aria-hidden="true" />,
            }))}
          />
        </div>
        {disclaimer && (
          <p className="mt-14 max-w-[48rem] text-[0.9rem] italic leading-relaxed text-[#4E5A54]">
            {disclaimer}
          </p>
        )}
      </div>
    </section>
  );
}

/* FAQ: numbered questions that open in place. Native details, so it works without JS. */
function Faq({
  faqs,
  topic,
}: {
  faqs: ServicePageContent["faqs"];
  topic: string;
}) {
  return (
    <section className="bg-[#F0F4F1] px-5 py-24 sm:px-10 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <div>
          <h2
            data-reveal
            className="max-w-[16ch] text-[clamp(1.9rem,3.36vw,3.04rem)] leading-[1.04] tracking-[-0.015em] text-[#0B231D]"
          >
            Questions about {topic}.
          </h2>
          <p
            data-reveal
            className="mt-6 max-w-[26rem] text-[1.02rem] leading-[1.6] text-[#4E5A54]"
          >
            Not covered here? Book a free strategy call and ask us directly.
          </p>
          <div data-reveal className="mt-8">
            <BookCallButtonDark />
          </div>
        </div>
        <div data-reveal-group className="border-t border-[#0B231D]/12">
          {faqs.map(({ question, answer }, i) => (
            <details
              key={question}
              className="group border-b border-[#0B231D]/12"
              open={i === 0}
            >
              <summary className="flex cursor-pointer list-none items-start gap-5 py-7 [&::-webkit-details-marker]:hidden">
                <span className="ymg-num w-8 shrink-0 pt-1 text-[1rem] text-[#8C6B22]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="ymg-num flex-1 text-[1.45rem] leading-snug text-[#0B231D] sm:text-[1.6rem]">
                  {question}
                </span>
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#0B231D]/20 text-[#0B231D] transition-[transform,background-color,color] duration-300 group-open:rotate-45 group-open:border-[#0B231D] group-open:bg-[#0B231D] group-open:text-[#F5F1E8]">
                  <Plus size={18} aria-hidden="true" />
                </span>
              </summary>
              <p className="max-w-[40rem] pb-8 pl-13 pr-12 text-[1.02rem] leading-[1.65] text-[#4E5A54]">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* The close: centred, with brass rings opening out behind the line. */
function Close() {
  return (
    <section className="relative isolate overflow-hidden bg-[#071813] px-5 py-28 text-center text-[#F5F1E8] sm:px-10 lg:py-40">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="ymg-close-ring absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D6B263]/25"
            style={{ animationDelay: `${i * 2.6}s` }}
          />
        ))}
        <span className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(214,178,99,0.16),transparent_65%)]" />
      </div>
      <div className="mx-auto max-w-[900px]">
        <h2
          data-reveal
          className="text-[clamp(2.18rem,4.8vw,4.32rem)] leading-[1] tracking-[-0.02em] text-[#F5F1E8]"
        >
          Your criteria. Your process.{" "}
          <span className="text-[#D6B263]">One connected workflow.</span>
        </h2>
        <div
          data-reveal
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <BookCallButton />
        </div>
        <dl
          data-reveal-group
          className="mx-auto mt-16 grid max-w-[560px] grid-cols-3 gap-4 border-t border-[#F5F1E8]/15 pt-8"
        >
          {promises.map(({ value, label }) => (
            <div key={label}>
              <dt className="sr-only">{label}</dt>
              <dd className="ymg-num text-[1.9rem] leading-none text-[#F5F1E8] sm:text-[2.2rem]">
                {value}
              </dd>
              <dd className="mt-2 text-[0.88rem] text-[#B9B2A3]">{label}</dd>
            </div>
          ))}
        </dl>
        <Link
          href="/services"
          className="mt-10 inline-flex items-center gap-2 text-[0.98rem] font-semibold text-[#D6B263] hover:text-[#F5F1E8]"
        >
          See every service <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

export default function ServiceDetailPage({
  content,
  crumb,
}: {
  content: ServicePageContent;
  crumb: ServiceCrumb;
}) {
  const topic =
    content.eyebrow === "Case Acquisition"
      ? "these campaigns"
      : content.eyebrow.toLowerCase();
  // Structured data the content guide asks for: Service, the page's FAQ, and its breadcrumb trail.
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: content.title,
      description: content.intro,
      serviceType: content.eyebrow,
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
      mainEntity: content.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { label: "Services", href: "/services" },
        ...(crumb.parent ? [crumb.parent] : []),
        { label: crumb.current },
      ].map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.label,
        ...("href" in c && c.href
          ? { item: `https://ymg-legal.com${c.href.split("#")[0]}` }
          : {}),
      })),
    },
  ];
  return (
    <div className="ymg-site">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero content={content} crumb={crumb} />
      <Capabilities content={content} />
      <Criteria content={content} />
      {content.scene && <SceneSection scene={content.scene} />}
      <Workflow
        workflow={content.workflow}
        disclaimer={content.disclaimer}
        eyebrow={content.eyebrow}
      />
      <Faq faqs={content.faqs} topic={topic} />
      <ClientProof
        photo={{
          src: "/images/about/meeting.jpg",
          alt: "A law firm team in a meeting",
        }}
        start={0}
        tone="white"
      />
      <Close />
      <ScrollMotion />
    </div>
  );
}
