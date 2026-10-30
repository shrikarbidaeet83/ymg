import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Info, type LucideIcon } from "lucide-react";
import MotionReveal from "@/components/ui/MotionReveal";
import ServiceCardCarousel from "@/components/sections/ServiceCardCarousel";
import ServiceFaqSection from "@/components/sections/ServiceFaqSection";
import { MobileProofScroller, ProofBar, ServiceHeroFlowers } from "@/components/sections/ProofHighlights";
import CaseOnboarding from "@/components/illustrations/CaseOnboarding";
import CriteriaScreening from "@/components/illustrations/CriteriaScreening";
import FollowUpSequence from "@/components/illustrations/FollowUpSequence";
import IntakeNightShift from "@/components/illustrations/IntakeNightShift";
import PayPerCall from "@/components/illustrations/PayPerCall";
import RetainerSigning from "@/components/illustrations/RetainerSigning";

// Animated scenes a service page can show in its "See it in action" section.
const scenes = {
  caseOnboarding: CaseOnboarding,
  criteriaScreening: CriteriaScreening,
  followUp: FollowUpSequence,
  nightShift: IntakeNightShift,
  payPerCall: PayPerCall,
  retainer: RetainerSigning,
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
  /** Optional animated scene, shown in its own section after the criteria. */
  scene?: { key: keyof typeof scenes; title: string; body: string };
};

// Same soft icon tiles and icon colours as the Law Firm Marketing and SEO cards.
const iconTones = [
  { bg: "bg-[#dbe9ff]", color: "text-[#3f587c]" },
  { bg: "bg-[#f0dbff]", color: "text-[#5d4772]" },
  { bg: "bg-[#d7f8ef]", color: "text-[#315d4d]" },
  { bg: "bg-[#fff1d8]", color: "text-[#73572d]" },
  { bg: "bg-[#e8f3d8]", color: "text-[#4e6534]" },
  { bg: "bg-[#f5dfdf]", color: "text-[#7a4b4b]" },
  { bg: "bg-[#e8e4fb]", color: "text-[#514a78]" },
];

const tone = (index: number) => iconTones[index % iconTones.length];

// ---------------------------------------------------------------------------
// Hero diagram: the page's capabilities orbit a central hub, in the style of the
// Law Firm Marketing services map. Coordinates use a 406 x 426 canvas.

const HUB = { x: 203, y: 213 };
const RADIUS = { x: 150, y: 160 };

function hubNodes(count: number) {
  const start = count === 4 ? -45 : -90;
  return Array.from({ length: count }, (_, index) => {
    const angle = ((start + (360 / count) * index) * Math.PI) / 180;
    return { x: HUB.x + RADIUS.x * Math.cos(angle), y: HUB.y + RADIUS.y * Math.sin(angle) };
  });
}

function pointToward(from: { x: number; y: number }, to: { x: number; y: number }, distance: number) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.hypot(dx, dy);
  return { x: from.x + (dx / length) * distance, y: from.y + (dy / length) * distance };
}

function ServiceHub({ label, cards }: { label: string; cards: ServiceCard[] }) {
  const nodes = hubNodes(cards.length);
  const [accent, ...rest] = label.split("\n");

  return (
    <div className="relative mx-auto aspect-[406/426] w-full max-w-[420px]" role="img" aria-label={`${label.replace("\n", " ")} services diagram`}>
      <svg aria-hidden="true" className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 406 426" preserveAspectRatio="none" fill="none">
        <g stroke="#dfb15d" strokeWidth="1">
          {nodes.map((node, index) => {
            const end = pointToward(HUB, node, 82);
            return <path key={index} d={`M${node.x} ${node.y}L${end.x} ${end.y}`} />;
          })}
        </g>
        <g fill="#dfb15d">
          {nodes.map((node, index) => {
            const end = pointToward(HUB, node, 82);
            return <circle key={index} cx={end.x} cy={end.y} r="2.5" />;
          })}
        </g>
      </svg>

      <div className="absolute left-1/2 top-1/2 z-10 aspect-square w-[38%] -translate-x-1/2 -translate-y-1/2">
        <MotionReveal direction="zoom" delay={0.08} duration={0.72} className="relative h-full w-full">
          <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute -inset-[9%] h-[118%] w-[118%] animate-[spin_38s_linear_infinite] motion-reduce:animate-none">
            <circle cx="50" cy="50" r="48" fill="none" stroke="#dfb15d" strokeWidth="0.5" strokeDasharray="3 4" />
            <circle cx="50" cy="2" r="1.6" fill="#dfb15d" />
          </svg>
          <div className="flex h-full w-full items-center justify-center rounded-full border border-[#dba849] bg-white shadow-[0_5px_8px_rgba(83,62,27,0.22)]">
            <div className="flex h-[80%] w-[80%] items-center justify-center rounded-full border border-[#c9c9c9] bg-[linear-gradient(145deg,#fafafa,#dedede)] text-center shadow-[inset_0_-8px_14px_rgba(80,80,80,0.08),0_2px_3px_rgba(0,0,0,0.15)]">
              <p className="font-heading text-[13px] leading-[1.3] text-[#444] sm:text-[15px] dark:text-[#D8B26B]">
                <span className="text-[#c99a45]">{accent}</span>
                {rest.length > 0 && <><br />{rest.join(" ")}</>}
              </p>
            </div>
          </div>
        </MotionReveal>
      </div>

      {cards.map(({ title, Icon }, index) => (
        <div
          key={title}
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${(nodes[index].x / 406) * 100}%`, top: `${(nodes[index].y / 426) * 100}%` }}
        >
          <MotionReveal direction="zoom" delay={0.18 + index * 0.1} duration={0.7}>
            <article className="flex h-[80px] w-[80px] flex-col items-center justify-center rounded-[13px] border border-[#e8d2aa] bg-white px-1.5 text-center shadow-[0_4px_6px_rgba(86,68,38,0.16)] transition-transform duration-500 ease-out hover:-translate-y-1.5 hover:scale-[1.03] sm:h-[96px] sm:w-[96px] sm:px-2">
              <div className="relative mb-1.5 flex h-7 w-7 items-center justify-center sm:h-8 sm:w-8">
                <span className="absolute h-5 w-5 rounded-[5px] bg-[#f7dfac]" />
                <Icon aria-hidden="true" className={`relative h-6 w-6 sm:h-7 sm:w-7 ${tone(index).color}`} strokeWidth={1.35} />
              </div>
              <p className="text-[8px] font-medium leading-[1.3] text-[#4d4c49] sm:text-[9px]">{title}</p>
            </article>
          </MotionReveal>
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------

// Background flowers, placed the same way as on the Meta Ads page.
function Flowers({ placement }: { placement: "hero" | "outline" | "dark" | "cream" }) {
  if (placement === "hero") {
    return (
      <MotionReveal direction="zoom" duration={1.25} amount={0.05} className="pointer-events-none absolute inset-0 z-0">
        <div className="relative h-full w-full"><ServiceHeroFlowers /></div>
      </MotionReveal>
    );
  }

  if (placement === "outline") {
    return (
      <Image src="/flowers/vcardBG.svg" alt="" width={273} height={196} className="pointer-events-none absolute right-[-110px] top-1/2 z-0 w-[546px] -translate-y-1/2" />
    );
  }

  if (placement === "dark") {
    return (
      <>
        <Image src="/images/big_flowers.webp" alt="" width={190} height={190} className="pointer-events-none absolute right-[7%] top-[-14px] z-0 h-auto w-[126px] opacity-[0.055]" />
        <Image src="/images/small_flowers.webp" alt="" width={125} height={125} className="pointer-events-none absolute right-[3%] top-[28px] z-0 h-auto w-[38px] opacity-[0.055]" />
        <Image src="/images/small_flowers.webp" alt="" width={125} height={125} className="pointer-events-none absolute right-[13%] top-[116px] z-0 h-auto w-[50px] opacity-[0.055]" />
      </>
    );
  }

  return (
    <>
      <Image src="/images/big_flowers.webp" alt="" width={190} height={190} className="pointer-events-none absolute right-[5%] top-[-18px] z-0 h-auto w-[118px] opacity-[0.04]" />
      <Image src="/images/small_flowers.webp" alt="" width={125} height={125} className="pointer-events-none absolute right-[12%] top-[124px] z-0 h-auto w-[42px] opacity-[0.045]" />
      <Image src="/images/big_flowers.webp" alt="" width={190} height={190} className="pointer-events-none absolute bottom-[-34px] left-[-1%] z-0 h-auto w-[132px] opacity-[0.04]" />
      <Image src="/images/small_flowers.webp" alt="" width={125} height={125} className="pointer-events-none absolute bottom-[34px] left-[13%] z-0 h-auto w-[42px] opacity-[0.04]" />
    </>
  );
}

function CapabilityCard({ card, index, className = "" }: { card: ServiceCard; index: number; className?: string }) {
  const { title, text, Icon, href, bullets } = card;
  const body = (
    <>
      <div className={`flex h-[60px] w-[60px] items-center justify-center rounded-[7px] ${tone(index).bg}`}>
        <Icon className="h-[32px] w-[32px] text-[#46494b]" strokeWidth={1.7} />
      </div>
      <h3 className="mt-[14px] font-sans text-[19px] font-normal leading-tight text-[#464646]">{title}</h3>
      <p className="mt-3 text-[14px] leading-[1.45] text-[#8f8f8f]">{text}</p>
      {bullets && (
        <ul className="mt-4 space-y-2 border-t border-[#efdcb4] pt-4">
          {bullets.map((item) => (
            <li key={item} className="flex items-start gap-2 text-[13px] leading-[1.35] text-[#5b5b5b]">
              <Check className="mt-[1px] h-4 w-4 shrink-0 text-[#c99a45]" strokeWidth={2} />
              {item}
            </li>
          ))}
        </ul>
      )}
      {href && (
        <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-[#b48635]">
          Explore service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      )}
    </>
  );
  const classes = `group flex h-full flex-col rounded-[19px] border border-[#e8c77f] bg-[#fffefd] px-[24px] py-[22px] text-left shadow-[0_6px_12px_rgba(20,17,12,0.14)] transition-transform duration-500 ease-out hover:-translate-y-2 ${className}`;

  return href ? <Link href={href} className={classes}>{body}</Link> : <article className={classes}>{body}</article>;
}

function StepCard({ step, index, className = "" }: { step: ServicePageContent["workflow"]["steps"][number]; index: number; className?: string }) {
  const { title, Icon } = step;
  return (
    <article className={`relative flex flex-col items-center rounded-[8px] border border-[#dfbd78] bg-[#fffdfa] px-3 pb-5 pt-8 text-center shadow-[5px_7px_10px_rgba(17,17,17,0.22)] ${className}`}>
      <span className="absolute -top-[17px] flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#dfb761] text-[0.68rem] font-semibold text-[#4b463b] shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="flex h-[42px] w-[42px] items-center justify-center rounded-[6px] border border-[#dfbd78]/70">
        <Icon className={`h-[22px] w-[22px] ${tone(index).color}`} strokeWidth={1.65} />
      </span>
      <h3 className="mt-4 text-[0.82rem] font-medium leading-[1.3] text-[#4b4b4b]">{title}</h3>
    </article>
  );
}

function SplitTitle({ title }: { title: string }) {
  // Highlight the service name in gold, as on the Law Firm Marketing hero ("X for Law Firms").
  const split = title.lastIndexOf(" for ");
  if (split === -1) return <>{title}</>;
  return (
    <>
      <span className="text-[#ddb66c]">{title.slice(0, split)}</span>
      {title.slice(split)}
    </>
  );
}

function SceneSection({ scene }: { scene: NonNullable<ServicePageContent["scene"]> }) {
  const SceneComponent = scenes[scene.key];
  return (
    <section className="ymg-section-padding relative isolate overflow-hidden bg-[#FFF5E0] px-5 !pt-0 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1120px] items-center gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
        <MotionReveal direction="left">
          <p className="text-[18px] font-normal text-[#474747]">See It in Action</p>
          <h2 className="mt-4 font-heading text-[2rem] font-normal leading-[1.25] text-[#444] sm:text-[2.4rem]">{scene.title}</h2>
          <p className="mt-5 text-[16px] leading-[1.6] text-[#5e5a55]">{scene.body}</p>
        </MotionReveal>
        <SceneComponent />
      </div>
    </section>
  );
}

export default function ServiceDetailPage({ content }: { content: ServicePageContent }) {
  const { capabilities, criteria, workflow } = content;
  const fourUp = capabilities.cards.length === 4;

  return (
    <main className="min-h-screen bg-[#FFF5E0] text-[#44413e]">
      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden px-5 pb-[60px] pt-[110px] sm:px-10 lg:px-16">
        <Flowers placement="hero" />
        <div className="relative z-10 mx-auto grid w-full min-w-0 max-w-[1220px] grid-cols-[minmax(0,1fr)] items-center gap-14 lg:grid-cols-[minmax(0,520px)_minmax(420px,1fr)] lg:gap-[70px]">
          <MotionReveal direction="left" duration={0.92} className="min-w-0 max-w-[520px] lg:-translate-y-3">
            <p className="mb-5 text-[17px] font-normal text-[#4a4947]">{content.eyebrow}</p>
            <h1 className="font-heading text-[2rem] font-normal leading-[1.28] tracking-[-0.01em] text-[#403f3e] sm:text-[40px]">
              <SplitTitle title={content.title} />
            </h1>
            {content.subhead && (
              <p className="mt-4 font-heading text-[1.15rem] leading-[1.4] text-[#b48635] sm:text-[1.3rem]">{content.subhead}</p>
            )}
            <p className="mt-4 text-[16px] leading-[1.5] text-[#55514e]">{content.intro}</p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-5">
              <Link
                href="/contact#booking"
                className="inline-flex min-h-[52px] items-center justify-center rounded-[4px] bg-[#d9ae5d] px-8 py-3 text-center text-sm font-bold text-[#2e3032] shadow-[0_12px_28px_rgba(168,129,62,0.22)] transition-colors hover:bg-[#c89f4e]"
              >
                {content.cta}
              </Link>
              <a
                href="#process"
                className="inline-flex min-h-[52px] items-center justify-center rounded-[4px] border border-[#dfbd78] bg-[#fff6e5]/40 px-8 py-3 text-sm font-semibold text-[#d3a65a] transition-colors hover:bg-[#fff6e5]/70 dark:!bg-transparent dark:!text-[#D8B26B] dark:hover:!bg-[#D8B26B]/10"
              >
                View Our Process
              </a>
            </div>
          </MotionReveal>

          <MotionReveal direction="right" delay={0.12} duration={0.95} className="flex min-w-0 justify-center lg:justify-end">
            <ServiceHub label={content.hubLabel} cards={capabilities.cards} />
          </MotionReveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="ymg-section-padding relative isolate overflow-hidden bg-[#393a39]">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_36%,rgba(37,27,12,0.92)_0%,rgba(37,27,12,0.54)_25%,rgba(57,58,57,0)_58%)]" />
        <Flowers placement="outline" />
        <div className="relative z-10 mx-auto max-w-[1120px]">
          <MotionReveal direction="down" className="text-center">
            <p className="text-[18px] font-normal text-[#edc269]">Capabilities</p>
            <h2 className="mx-auto mt-5 max-w-[720px] font-heading text-[2.1rem] font-normal leading-[1.3] text-[#EBC982] sm:text-[2.6rem] lg:text-[2.9rem]">
              {capabilities.title}
            </h2>
            {capabilities.intro && <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-[1.5] text-[#e6dcc8]/80">{capabilities.intro}</p>}
          </MotionReveal>

          <ServiceCardCarousel theme="dark" label="capability" className="mt-10">
            {capabilities.cards.map((card, index) => (
              <CapabilityCard key={card.title} card={card} index={index} className="w-[78vw] max-w-[290px] shrink-0 snap-center" />
            ))}
          </ServiceCardCarousel>

          <div className={`mt-[64px] hidden gap-5 lg:grid ${fourUp ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
            {capabilities.cards.map((card, index) => (
              <MotionReveal
                key={card.title}
                direction={index % 3 === 0 ? "left" : index % 3 === 2 ? "right" : "up"}
                delay={index * 0.08}
                className="h-full"
              >
                <CapabilityCard card={card} index={index} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Criteria */}
      <section className="ymg-section-padding relative isolate overflow-hidden bg-[#FFF5E0] px-5 sm:px-10 lg:px-16">
        <div aria-hidden="true" className="ymg-radial-deep pointer-events-none absolute left-1/2 top-1/2 z-0 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2" />
        <Flowers placement="outline" />
        <div className="relative z-10 mx-auto max-w-[960px]">
          <MotionReveal direction="soft" className="text-center">
            <p className="text-[18px] font-normal text-[#474747]">Built Around Your Firm</p>
            <h2 className="mt-5 font-heading text-[2.1rem] font-normal leading-[1.3] text-[#444] sm:text-[2.6rem] lg:text-[2.9rem]">{criteria.title}</h2>
            <p className="mx-auto mt-6 max-w-[720px] text-[16px] leading-[1.6] text-[#5e5a55]">{criteria.body}</p>
          </MotionReveal>

          {criteria.items && (
            <div className={`mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 ${criteria.items.length % 4 === 0 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
              {criteria.items.map((item, index) => (
                <MotionReveal key={item} direction="up" delay={index * 0.06} className="h-full">
                  <div className="flex h-full items-center gap-3 rounded-[6px] border border-[#dfbd78] bg-[#fffdfa] px-4 py-4 text-left shadow-[5px_7px_10px_rgba(91,69,34,0.14)]">
                    <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[6px] border border-[#dfbd78]/70">
                      <Check className="h-[18px] w-[18px] text-[#b48635]" strokeWidth={2} />
                    </span>
                    <span className="text-[0.86rem] font-medium leading-[1.3] text-[#4b4b4b]">{item}</span>
                  </div>
                </MotionReveal>
              ))}
            </div>
          )}

          {criteria.note && (
            <MotionReveal direction="up" delay={0.1}>
              <div className="mx-auto mt-10 flex max-w-[760px] gap-4 rounded-[10px] border border-[#e8c77f] bg-[#fffdfa] px-6 py-5 text-left shadow-[0_6px_14px_rgba(91,69,34,0.12)]">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#c99a45]" strokeWidth={1.8} />
                <p className="text-[14px] leading-[1.55] text-[#5e5a55]">{criteria.note}</p>
              </div>
            </MotionReveal>
          )}
        </div>
      </section>

      {content.scene && <SceneSection scene={content.scene} />}

      {/* Workflow */}
      <section id="process" className="relative isolate scroll-mt-24 overflow-hidden bg-[#404040] px-5 py-[62px] text-[#d9ae5d] sm:px-10 sm:py-[76px] lg:px-16 lg:py-[80px]">
        <Flowers placement="dark" />
        <div className="relative z-10 mx-auto w-full min-w-0 max-w-[1040px]">
          <MotionReveal direction="up" className="text-center">
            <p className="text-[0.92rem] font-normal text-[#d9ae5d] sm:text-[1rem]">How It Works</p>
            <h2 className="mt-5 font-heading text-[2rem] font-normal leading-[1.35] text-[#d9ae5d] sm:text-[2.35rem] lg:text-[2.4rem]">{workflow.title}</h2>
            <p className="mx-auto mt-5 max-w-[680px] text-[15px] leading-[1.55] text-[#e6dcc8]/80">{workflow.body}</p>
          </MotionReveal>

          <ServiceCardCarousel theme="dark" label="process step" className="mt-10">
            {workflow.steps.map((step, index) => (
              <StepCard key={step.title} step={step} index={index} className="min-h-[170px] w-[60vw] max-w-[220px] shrink-0 snap-center justify-center" />
            ))}
          </ServiceCardCarousel>

          <div className="relative mx-auto mt-[60px] hidden lg:block">
            <div aria-hidden="true" className="absolute left-[4%] right-[4%] top-1/2 h-px bg-[linear-gradient(90deg,transparent,#dfb15d_12%,#dfb15d_88%,transparent)]" />
            <div className="relative grid gap-[18px]" style={{ gridTemplateColumns: `repeat(${workflow.steps.length}, minmax(0, 1fr))` }}>
              {workflow.steps.map((step, index) => (
                <MotionReveal key={step.title} direction="left" delay={index * 0.14} duration={0.85} className="h-full">
                  <StepCard step={step} index={index} className="h-full min-h-[140px]" />
                </MotionReveal>
              ))}
            </div>
          </div>

          {content.disclaimer && (
            <p className="mx-auto mt-10 max-w-[720px] text-center text-xs italic leading-relaxed text-[#e6dcc8]/70">{content.disclaimer}</p>
          )}
        </div>
      </section>

      {/* Proof */}
      <section className="ymg-radial-wide relative isolate overflow-hidden bg-[#FFF5E0] px-5 pb-[72px] pt-[56px] text-[#3d4145] sm:px-10 sm:pb-[86px] lg:px-16 lg:pb-[80px]">
        <Flowers placement="cream" />
        <MotionReveal direction="up" duration={0.92} className="relative z-10 mx-auto w-full max-w-[900px] text-center">
          <p className="text-[0.92rem] font-normal text-[#3d4145] sm:text-[1rem]">Why Choose YMG Legal</p>
          <h2 className="mt-5 font-heading text-[2rem] font-bold leading-[1.35] text-[#3d4145] sm:text-[2.4rem] lg:text-[2.15rem]">
            Your Criteria. Your Process.
            <span className="mt-1 block">One Connected Workflow.</span>
          </h2>
          <div className="mt-10 w-full lg:mt-[44px]">
            <MobileProofScroller />
            <div className="mx-auto hidden w-full lg:block">
              <ProofBar darkGold className="ymg-proof-bar" />
            </div>
          </div>
          <Link
            href="/contact#booking"
            className="mt-10 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[4px] bg-[#d9ae5d] px-8 py-3 text-sm font-bold text-[#2e3032] shadow-[0_12px_28px_rgba(168,129,62,0.22)] transition-colors hover:bg-[#c89f4e]"
          >
            Book a Strategy Call <ArrowRight className="h-4 w-4" />
          </Link>
        </MotionReveal>
      </section>

      <MotionReveal direction="up" duration={0.9} amount={0.08}>
        <ServiceFaqSection
          faqs={content.faqs}
          intro={`Answers to common questions about ${content.eyebrow === "Case Acquisition" ? "our case acquisition campaigns" : content.eyebrow.toLowerCase()}, qualification, and how we structure each engagement around your firm.`}
        />
      </MotionReveal>
    </main>
  );
}
