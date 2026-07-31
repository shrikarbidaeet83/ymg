import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServiceHeroFlowers, ServiceHeroProof } from "@/components/sections/ProofHighlights";
import ServiceFaqSection from "@/components/sections/ServiceFaqSection";
import TestimonialContactSection from "@/components/sections/TestimonialContactSection";
import MotionReveal from "@/components/ui/MotionReveal";
import {
  Bot,
  Bike,
  BriefcaseBusiness,
  Building2,
  CarFront,
  ChartNoAxesColumnIncreasing,
  CircleDollarSign,
  Crosshair,
  FileX,
  Funnel,
  Handshake,
  Gavel,
  ImageIcon,
  Infinity,
  WalletCards,
  LayoutTemplate,
  Link2,
  MapPin,
  Megaphone,
  Network,
  RefreshCw,
  Skull,
  Sparkles,
  SplitSquareHorizontal,
  Stethoscope,
  Target,
  TrendingUp,
  Truck,
  UserRoundPlus,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Meta Ads for Law Firms | YMG Legal",
  description:
    "Targeted Facebook and Instagram ad campaigns for law firms that generate more qualified legal consultations.",
};

const metaMatterItems = [
  {
    title: "Poor Audience\nTargeting",
    body: "Showing ads to the wrong people wastes budget and reduces lead quality.",
    Icon: Crosshair,
  },
  {
    title: "High Cost Per\nLead",
    body: "Poor campaign structure often results in expensive, low-converting leads.",
    Icon: CircleDollarSign,
  },
  {
    title: "Weak Creative\nPerformance",
    body: "Generic ads fail to capture attention or motivate potential clients.",
    Icon: ImageIcon,
  },
  {
    title: "Low Conversion\nRates",
    body: "Clicks mean nothing if visitors don't schedule consultations.",
    Icon: Funnel,
  },
];

const deliverItems = [
  {
    title: "Strategic Campaign\nPlanning",
    body: "Every campaign starts with research into your practice areas, audience, and market competition.",
    Icon: LayoutTemplate,
    bg: "bg-[#e8f1f5]",
    color: "text-[#52646d]",
  },
  {
    title: "Advanced Audience\nTargeting",
    body: "Reach people based on demographics, interests, behaviors, and location to maximize lead quality.",
    Icon: Target,
    bg: "bg-[#f5e6dd]",
    color: "text-[#9b6a55]",
  },
  {
    title: "High-Converting\nCreative",
    body: "Professional ad creatives and persuasive copy designed specifically for legal services.",
    Icon: Sparkles,
    bg: "bg-[#e6efe7]",
    color: "text-[#5f7f62]",
  },
  {
    title: "Landing Page\nOptimization",
    body: "Drive visitors to conversion-focused landing pages built to generate consultations.",
    Icon: Bot,
    bg: "bg-[#eee8f4]",
    color: "text-[#735d86]",
  },
];

const metaProcessSteps = [
  { title: "Discovery &\nStrategy", body: "Understand your practice areas, goals, and ideal clients", Icon: Sparkles },
  { title: "Audience\nResearch", body: "Build highly targeted audiences using Meta's advanced targeting capabilities", Icon: Network },
  { title: "Creative\nDevelopment", body: "Design compelling visuals and messaging that encourage action", Icon: Link2 },
  { title: "Campaign\nLaunch", body: "Deploy optimized campaigns with proper tracking and lead attribution", Icon: Megaphone },
  { title: "Optimization", body: "Continuously improve targeting, creatives, and bidding based on performance data", Icon: TrendingUp },
  { title: "Scale Winning\nCampaigns", body: "Increase budget on top-performing campaigns to maximize qualified case acquisition", Icon: Infinity },
];

const practiceAreas = [
  { label: "Motor Vehicle\nAccidents", Icon: CarFront, bg: "bg-[#e1ecff]", color: "text-[#42627f]" },
  { label: "Truck\nAccidents", Icon: Truck, bg: "bg-[#fff1c7]", color: "text-[#a27625]" },
  { label: "Motorcycle\nAccidents", Icon: Bike, bg: "bg-[#e3f5e8]", color: "text-[#5f8b67]" },
  { label: "Slip & Fall\nCases", Icon: FileX, bg: "bg-[#f3e4ff]", color: "text-[#7a5b92]" },
  { label: "Premises\nLiability", Icon: Building2, bg: "bg-[#edf0f4]", color: "text-[#65717e]" },
  { label: "Medical\nMalpractice", Icon: StethoscopeIcon, bg: "bg-[#e2f5ef]", color: "text-[#4f8675]" },
  { label: "Workers'\nCompensation", Icon: BriefcaseBusiness, bg: "bg-[#f5e6dd]", color: "text-[#9b6a55]" },
  { label: "Mass Tort\nLitigation", Icon: Gavel, bg: "bg-[#ffe5dc]", color: "text-[#a75f49]" },
  { label: "Class\nActions", Icon: Network, bg: "bg-[#eee8f4]", color: "text-[#735d86]" },
  { label: "Wrongful\nDeath", Icon: Skull, bg: "bg-[#f1eacb]", color: "text-[#8b772e]" },
];

const expectedResults = [
  {
    title: "More Qualified\nConsultations",
    body: "Generate high-quality inquiries from people actively seeking legal help",
    Icon: Handshake,
    bg: "bg-[#d9f0df]",
    color: "text-[#4e7f58]",
  },
  {
    title: "Lower Cost Per\nLead",
    body: "Optimize campaigns to improve efficiency and maximize advertising spend",
    Icon: WalletCards,
    bg: "bg-[#dceaff]",
    color: "text-[#3f6285]",
  },
  {
    title: "Better Return on Ad\nSpend",
    body: "Scale campaigns using real performance data to achieve sustainable growth",
    Icon: TrendingUp,
    bg: "bg-[#fff0bd]",
    color: "text-[#a07321]",
  },
];

function StethoscopeIcon({ className, strokeWidth }: { className?: string; strokeWidth?: number }) {
  return <Stethoscope className={className} strokeWidth={strokeWidth} />;
}

function FacebookGlyph({ className }: { className?: string; strokeWidth?: number }) {
  return (
    <span className={`font-sans text-[1.55rem] font-semibold leading-none ${className ?? ""}`}>
      f
    </span>
  );
}

function InstagramGlyph({ className }: { className?: string; strokeWidth?: number }) {
  return (
    <span className={`font-sans text-[1rem] font-bold leading-none ${className ?? ""}`}>
      ◎
    </span>
  );
}

const campaignFeatures = [
  { label: "Facebook\nAdvertising", Icon: FacebookGlyph, bg: "bg-[#e1ecff]", color: "text-[#4267b2]" },
  { label: "Instagram\nAdvertising", Icon: InstagramGlyph, bg: "bg-[#ffe2ef]", color: "text-[#b54a7c]" },
  { label: "Local Audience\nTargeting", Icon: MapPin, bg: "bg-[#e3f5e8]", color: "text-[#5f8b67]" },
  { label: "Lead Generation\nCampaigns", Icon: UserRoundPlus, bg: "bg-[#f4e6ff]", color: "text-[#7a5b92]" },
  { label: "Performance\nReporting", Icon: ChartNoAxesColumnIncreasing, bg: "bg-[#fff1c7]", color: "text-[#b88927]" },
  { label: "Retargeting\nCampaigns", Icon: RefreshCw, bg: "bg-[#e2f5ef]", color: "text-[#4f8675]" },
  { label: "Video &\nCarousel Ads", Icon: PanelsTopLeftIcon, bg: "bg-[#f5e6dd]", color: "text-[#9b6a55]" },
  { label: "A/B Creative\nTesting", Icon: SplitSquareHorizontal, bg: "bg-[#edf0f4]", color: "text-[#65717e]" },
  { label: "Conversion\nTracking", Icon: Crosshair, bg: "bg-[#eee8f4]", color: "text-[#735d86]" },
  { label: "Continuous\nOptimization", Icon: Workflow, bg: "bg-[#e6efe7]", color: "text-[#5f7f62]" },
];

function PanelsTopLeftIcon({ className, strokeWidth }: { className?: string; strokeWidth?: number }) {
  return <LayoutTemplate className={className} strokeWidth={strokeWidth} />;
}

function MetaMatterCard({
  item,
  index,
}: {
  item: (typeof metaMatterItems)[number];
  index: number;
}) {
  const { title, body, Icon } = item;

  return (
    <div className="relative flex min-h-[176px] flex-col items-center text-center">
      <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[5px] border border-[#d9ae5d] text-[#d9ae5d] shadow-[0_6px_14px_rgba(0,0,0,0.16)]">
        <Icon className="h-[24px] w-[24px]" strokeWidth={1.6} />
      </div>
      <h3 className="mt-6 whitespace-pre-line text-[0.9rem] font-semibold leading-[1.18] text-[#d9ae5d]">
        {title}
      </h3>
      <p className="mt-5 max-w-[188px] text-[0.82rem] leading-[1.25] text-white/34">
        {body}
      </p>
      {index < metaMatterItems.length - 1 && (
        <span className="absolute right-[-14%] top-[66px] hidden h-[66px] w-px bg-white/18 lg:block" />
      )}
    </div>
  );
}

function DeliverCard({
  item,
}: {
  item: (typeof deliverItems)[number];
}) {
  const { title, body, Icon, bg, color } = item;

  return (
    <article className="flex min-h-[220px] flex-col items-center rounded-[5px] border border-[#dfbd78]/75 bg-white px-6 pb-7 pt-7 text-center shadow-[0_10px_22px_rgba(72,55,28,0.16)] transition-transform duration-200 hover:-translate-y-1">
      <div className={`flex h-[52px] w-[52px] items-center justify-center rounded-[5px] border border-[#dfbd78]/55 ${bg} shadow-[0_5px_10px_rgba(0,0,0,0.12)] dark:bg-transparent dark:shadow-none`}>
        <Icon className={`h-[26px] w-[26px] ${color} dark:text-[#D8B26B]`} strokeWidth={1.45} />
      </div>
      <h3 className="mt-6 whitespace-pre-line text-[0.82rem] font-semibold leading-[1.18] text-[#343434]">
        {title}
      </h3>
      <p className="mt-5 max-w-[168px] text-[0.7rem] leading-[1.26] text-[#a1a1a1]">
        {body}
      </p>
    </article>
  );
}

function CampaignFeature({
  feature,
  index,
}: {
  feature: (typeof campaignFeatures)[number];
  index: number;
}) {
  const Icon = feature.Icon as LucideIcon;

  return (
    <div className="ymg-view-reveal-up ymg-campaign-feature-reveal relative flex min-h-[132px] w-[185px] shrink-0 snap-center flex-col items-center justify-center px-4 text-center sm:w-auto">
      <div className={`flex h-[48px] w-[48px] items-center justify-center rounded-[6px] border border-[#dfbd78]/45 ${feature.bg} shadow-[0_6px_14px_rgba(0,0,0,0.24)] dark:bg-transparent dark:shadow-none`}>
        <Icon className={`h-[23px] w-[23px] ${feature.color} dark:text-[#D8B26B]`} strokeWidth={1.7} />
      </div>
      <div className="mt-5 whitespace-pre-line text-[0.9rem] font-bold leading-[1.18] text-[#D8B26B]">
        {feature.label}
      </div>
      {index % 5 !== 4 && (
        <span className="absolute right-0 top-1/2 hidden h-[76px] w-px -translate-y-1/2 bg-white/18 lg:block" />
      )}
    </div>
  );
}

function MetaProcessStep({
  step,
  index,
}: {
  step: (typeof metaProcessSteps)[number];
  index: number;
}) {
  const { title, body, Icon } = step;

  return (
    <div
      className="ymg-view-reveal-up relative flex min-h-[178px] flex-col items-center text-center [animation-delay:var(--reveal-delay)]"
      style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}
    >
      <span className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#dfb65d] text-[#5c533c] shadow-[0_8px_16px_rgba(123,89,32,0.14)]">
        <Icon className="h-[21px] w-[21px]" strokeWidth={1.55} />
      </span>
      {index < metaProcessSteps.length - 1 && (
        <span className="absolute left-[calc(50%+52px)] top-[16px] hidden text-[1.6rem] leading-none text-[#dfb65d] lg:block">
          →
        </span>
      )}
      <h3 className="mt-6 whitespace-pre-line text-[0.82rem] font-semibold leading-[1.16] text-[#343434]">
        {title}
      </h3>
      <p className="mt-5 max-w-[130px] text-[0.74rem] leading-[1.26] text-[#929292]">
        {body}
      </p>
    </div>
  );
}

function PracticeAreaFeature({
  area,
  index,
}: {
  area: (typeof practiceAreas)[number];
  index: number;
}) {
  const Icon = area.Icon as LucideIcon;

  return (
    <div
      className="ymg-view-reveal-up relative flex min-h-[132px] w-[185px] shrink-0 snap-center flex-col items-center justify-center px-4 text-center sm:w-auto [animation-delay:var(--reveal-delay)]"
      style={{ "--reveal-delay": `${index * 65}ms` } as React.CSSProperties}
    >
      <div className={`flex h-[48px] w-[48px] items-center justify-center rounded-[6px] border border-[#dfbd78]/45 ${area.bg} shadow-[0_6px_14px_rgba(0,0,0,0.24)]`}>
        <Icon className={`h-[23px] w-[23px] ${area.color}`} strokeWidth={1.7} />
      </div>
      <div className="mt-5 whitespace-pre-line text-[0.94rem] font-bold leading-[1.18] text-[#D8B26B]">
        {area.label}
      </div>
      {index % 5 !== 4 && (
        <span className="absolute right-0 top-1/2 hidden h-[76px] w-px -translate-y-1/2 bg-white/18 lg:block" />
      )}
    </div>
  );
}

function ExpectedResultCard({
  item,
  index,
}: {
  item: (typeof expectedResults)[number];
  index: number;
}) {
  const { title, body, Icon, bg, color } = item;

  return (
    <article
      className="ymg-view-reveal-up flex min-h-[266px] flex-col items-center rounded-[7px] border border-[#dfbd78]/75 bg-white px-7 py-8 text-center shadow-[0_12px_24px_rgba(72,55,28,0.18)] transition-transform duration-300 hover:-translate-y-1 [animation-delay:var(--reveal-delay)]"
      style={{ "--reveal-delay": `${index * 100}ms` } as React.CSSProperties}
    >
      <div className={`flex h-[68px] w-[68px] items-center justify-center rounded-[6px] border border-[#dfbd78]/65 ${bg} shadow-[0_8px_16px_rgba(88,59,16,0.16)]`}>
        <Icon className={`h-[31px] w-[31px] ${color}`} strokeWidth={1.65} />
      </div>
      <h3 className="mt-7 whitespace-pre-line text-[1.02rem] font-semibold leading-[1.22] text-[#343434]">
        {title}
      </h3>
      <p className="mt-6 max-w-[220px] text-[0.95rem] leading-[1.28] text-[#a1a1a1]">
        {body}
      </p>
    </article>
  );
}

export default function MetaAdsPage() {
  return (
    <main className="min-h-screen bg-[#FFF5E0] text-[#424242]">
      <section className="ymg-standard-hero relative isolate overflow-hidden px-5 sm:px-10 lg:px-16">
        <MotionReveal direction="zoom" duration={1.25} amount={0.05} className="pointer-events-none absolute inset-0 z-0">
          <div className="relative h-full w-full"><ServiceHeroFlowers /></div>
        </MotionReveal>

        <div className="relative z-10 mx-auto flex w-full max-w-[1110px] flex-col items-center">
          <MotionReveal direction="soft" duration={0.95} className="ymg-standard-hero-copy">
            <p className="ymg-standard-hero-eyebrow text-[#444444]">
              Meta (Facebook &amp; Instagram) Ads
            </p>
            <h1 className="ymg-standard-hero-title text-[#424242]">
              Reach the Right People.
              <span className="mt-1 block">Generate More Qualified</span>
              <span className="mt-1 block">Legal Consultations</span>
            </h1>
            <p className="ymg-standard-hero-body text-[#4c4c4c]">
              Use targeted Meta advertising campaigns to connect with
              potential clients, build trust, and generate more consultations
              for motor vehicle accidents, serious injury claims, mass torts,
              and other high-value legal matters.
            </p>

            <div className="ymg-standard-hero-actions flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-[18px]">
              <Link
                href="/contact#booking"
                className="inline-flex h-[52px] w-full max-w-[260px] items-center justify-center rounded-[4px] bg-[#d9ae5d] px-8 text-center text-sm font-bold leading-tight text-[#2e3032] shadow-[0_12px_28px_rgba(168,129,62,0.22)] transition-colors hover:bg-[#c89f4e] sm:w-[222px]"
              >
                Book a Strategy Call
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-[52px] w-full max-w-[292px] items-center justify-center rounded-[4px] border border-[#dfbd78] bg-transparent px-8 text-center text-sm font-semibold leading-tight text-[#d3a65a] transition-colors hover:bg-[#d9ae5d]/10 sm:w-[260px]"
              >
                Get a Free Meta Ads Audit
              </Link>
            </div>
          </MotionReveal>

          <MotionReveal direction="up" delay={0.24} duration={0.9} className="w-full"><ServiceHeroProof /></MotionReveal>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#404040] px-5 py-16 text-[#d9ae5d] sm:px-10 sm:py-20 lg:px-16 lg:py-[80px]">
        <Image
          src="/flowers/vcardBG.svg"
          alt=""
          width={273}
          height={196}
          className="pointer-events-none absolute right-[-110px] top-1/2 z-0 w-[546px] -translate-y-1/2"
        />

        <MotionReveal direction="up" duration={0.92} className="relative z-10 mx-auto max-w-[980px]">
          <div className="mx-auto max-w-[640px] text-center">
            <h2 className="font-heading text-[2.15rem] font-bold leading-tight text-[#d9ae5d] sm:text-[2.65rem] lg:text-[2.5rem]">
              Why Meta Advertising Matters
            </h2>
            <p className="mx-auto mt-6 max-w-[620px] text-[0.98rem] leading-[1.34] text-[#d9ae5d] sm:text-[1.05rem]">
              People spend hours every day on Facebook and Instagram. A well-planned
              Meta campaign helps your firm stay visible, build trust, and generate
              qualified consultations before competitors even enter the conversation.
            </p>
          </div>

          <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:mt-[84px] lg:grid-cols-4 lg:gap-12">
            {metaMatterItems.map((item, index) => (
              <MetaMatterCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </MotionReveal>
      </section>

      <section className="relative isolate overflow-hidden bg-[#FFF5E0] px-5 py-16 text-[#424242] sm:px-10 sm:py-20 lg:px-16 lg:py-[80px]">
        <div aria-hidden="true" className="ymg-radial-deep pointer-events-none absolute left-1/2 top-1/2 z-0 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2" />
        <Image
          src="/flowers/vcardBG.svg"
          alt=""
          width={273}
          height={196}
          className="pointer-events-none absolute right-[-110px] top-1/2 z-0 w-[546px] -translate-y-1/2"
        />

        <MotionReveal direction="right" duration={0.92} className="relative z-10 mx-auto max-w-[900px]">
          <h2 className="text-center font-heading text-[2.1rem] font-bold leading-tight text-[#424242] sm:text-[2.55rem] lg:text-[2.2rem]">
            What We Deliver
          </h2>

          <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {deliverItems.map((item) => (
              <DeliverCard key={item.title} item={item} />
            ))}
          </div>
        </MotionReveal>
      </section>

      <section className="relative isolate overflow-hidden bg-[#404040] px-5 py-16 text-[#d9ae5d] sm:px-10 sm:py-20 lg:px-16 lg:py-[80px]">
        <Image
          src="/images/big_flowers.webp"
          alt=""
          width={190}
          height={190}
          className="pointer-events-none absolute right-[7%] top-[-14px] z-0 h-auto w-[116px] opacity-[0.055]"
        />
        <Image
          src="/images/small_flowers.webp"
          alt=""
          width={125}
          height={125}
          className="pointer-events-none absolute right-[3%] top-[26px] z-0 h-auto w-[36px] opacity-[0.055]"
        />
        <Image
          src="/images/small_flowers.webp"
          alt=""
          width={125}
          height={125}
          className="pointer-events-none absolute right-[14%] top-[90px] z-0 h-auto w-[48px] opacity-[0.055]"
        />

        <MotionReveal direction="left" duration={0.92} className="relative z-10 mx-auto max-w-[1120px]">
          <h2 className="ymg-view-reveal-up text-center font-heading text-[2.25rem] font-bold leading-tight text-[#d9ae5d] sm:text-[2.75rem] lg:text-[2.65rem]">
            Campaign Features
          </h2>

          <div className="mt-16 -mx-5 flex snap-x gap-6 overflow-x-auto px-5 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-10 sm:px-10 lg:relative lg:mx-0 lg:mt-[96px] lg:grid lg:grid-cols-5 lg:gap-x-0 lg:gap-y-[72px] lg:overflow-visible lg:px-0 lg:pb-0 lg:after:absolute lg:after:inset-x-[4%] lg:after:top-1/2 lg:after:h-px lg:after:bg-white/18">
            {campaignFeatures.map((feature, index) => (
              <CampaignFeature key={feature.label} feature={feature} index={index} />
            ))}
          </div>

        </MotionReveal>
      </section>

      <section className="relative isolate overflow-hidden bg-[#FFF5E0] px-5 py-16 text-[#424242] sm:px-10 sm:py-20 lg:px-16 lg:py-[80px]">
        <div aria-hidden="true" className="ymg-radial-deep pointer-events-none absolute left-1/2 top-1/2 z-0 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2" />
        <Image
          src="/images/big_flowers.webp"
          alt=""
          width={190}
          height={190}
          className="pointer-events-none absolute right-[7%] top-[-12px] z-0 h-auto w-[116px] opacity-[0.04]"
        />
        <Image
          src="/images/small_flowers.webp"
          alt=""
          width={125}
          height={125}
          className="pointer-events-none absolute right-[12%] top-[102px] z-0 h-auto w-[42px] opacity-[0.045]"
        />

        <MotionReveal direction="up" duration={0.94} className="relative z-10 mx-auto max-w-[1110px]">
          <h2 className="ymg-view-reveal-up text-center font-heading text-[2.05rem] font-bold leading-tight text-[#424242] sm:text-[2.65rem] lg:text-[2.35rem]">
            Our Meta Advertising Process
          </h2>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:mt-[82px] lg:grid-cols-6 lg:gap-8">
            {metaProcessSteps.map((step, index) => (
              <MetaProcessStep key={step.title} step={step} index={index} />
            ))}
          </div>
        </MotionReveal>
      </section>

      <section className="relative isolate overflow-hidden bg-[#404040] px-5 py-16 text-[#d9ae5d] sm:px-10 sm:py-20 lg:px-16 lg:py-[80px]">
        <Image
          src="/images/big_flowers.webp"
          alt=""
          width={190}
          height={190}
          className="pointer-events-none absolute right-[7%] top-[-14px] z-0 h-auto w-[126px] opacity-[0.055]"
        />
        <Image
          src="/images/small_flowers.webp"
          alt=""
          width={125}
          height={125}
          className="pointer-events-none absolute right-[3%] top-[28px] z-0 h-auto w-[38px] opacity-[0.055]"
        />
        <Image
          src="/images/small_flowers.webp"
          alt=""
          width={125}
          height={125}
          className="pointer-events-none absolute right-[13%] top-[116px] z-0 h-auto w-[50px] opacity-[0.055]"
        />

        <MotionReveal direction="right" duration={0.94} className="relative z-10 mx-auto max-w-[1160px]">
          <h2 className="ymg-view-reveal-up text-center font-heading text-[2.18rem] font-bold leading-tight text-[#d9ae5d] sm:text-[2.85rem] lg:text-[2.7rem]">
            Practice Areas We Help Promote
          </h2>

          <div className="mt-16 -mx-5 flex snap-x gap-6 overflow-x-auto px-5 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-10 sm:px-10 lg:relative lg:mx-0 lg:mt-[96px] lg:grid lg:grid-cols-5 lg:gap-x-0 lg:gap-y-[72px] lg:overflow-visible lg:px-0 lg:pb-0 lg:after:absolute lg:after:inset-x-[4%] lg:after:top-1/2 lg:after:h-px lg:after:bg-white/18">
            {practiceAreas.map((area, index) => (
              <PracticeAreaFeature key={area.label} area={area} index={index} />
            ))}
          </div>

        </MotionReveal>
      </section>

      <section className="relative isolate overflow-hidden bg-[#FFF5E0] px-5 py-16 text-[#424242] sm:px-10 sm:py-20 lg:px-16 lg:py-[80px]">
        <div aria-hidden="true" className="ymg-radial-deep pointer-events-none absolute left-1/2 top-1/2 z-0 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2" />
        <Image
          src="/images/big_flowers.webp"
          alt=""
          width={190}
          height={190}
          className="pointer-events-none absolute right-[5%] top-[-18px] z-0 h-auto w-[118px] opacity-[0.04]"
        />
        <Image
          src="/images/small_flowers.webp"
          alt=""
          width={125}
          height={125}
          className="pointer-events-none absolute right-[12%] top-[124px] z-0 h-auto w-[42px] opacity-[0.045]"
        />
        <Image
          src="/images/big_flowers.webp"
          alt=""
          width={190}
          height={190}
          className="pointer-events-none absolute bottom-[-34px] left-[-1%] z-0 h-auto w-[132px] opacity-[0.04]"
        />
        <Image
          src="/images/small_flowers.webp"
          alt=""
          width={125}
          height={125}
          className="pointer-events-none absolute bottom-[34px] left-[13%] z-0 h-auto w-[42px] opacity-[0.04]"
        />

        <MotionReveal direction="zoom" duration={0.96} className="relative z-10 mx-auto max-w-[830px]">
          <h2 className="ymg-view-reveal-up text-center font-heading text-[2.18rem] font-bold leading-tight text-[#424242] sm:text-[2.75rem] lg:text-[2.62rem]">
            Results You Can Expect
          </h2>

          <div className="mt-16 grid gap-8 sm:grid-cols-3 lg:mt-[86px]">
            {expectedResults.map((item, index) => (
              <ExpectedResultCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </MotionReveal>
      </section>

      <MotionReveal direction="soft" duration={0.95} amount={0.08}><TestimonialContactSection showTestimonials={false} contactVariant="home" /></MotionReveal>
      <MotionReveal direction="up" duration={0.9} amount={0.08}><ServiceFaqSection /></MotionReveal>
    </main>
  );
}
