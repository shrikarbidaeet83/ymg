import Link from "next/link";
import Image from "next/image";
import {
  BarChart3,
  Circle,
  CirclePlus,
  Crosshair,
  FileText,
  FlaskConical,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import CaseAcquisitionSystem from "@/components/sections/CaseAcquisitionSystem";

type CardItem = {
  title: string;
  body?: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  iconBg: string;
  iconColor: string;
  tilt: string;
  cardSize?: string;
  titleSize?: string;
  bodySize?: string;
};

const verticalCards: CardItem[] = [
  {
    title: "Mass Torts",
    icon: FileText,
    iconBg: "bg-[#dce7fb]",
    iconColor: "text-[#6c8fcb]",
    tilt: "-rotate-[8deg] lg:-rotate-[10deg]",
    cardSize:
      "w-[152px] min-h-[168px] px-5 py-5 sm:w-[176px] sm:min-h-[190px] sm:px-6 sm:py-6 lg:w-[182px] lg:min-h-[198px]",
    titleSize: "text-[0.98rem] sm:text-[1.22rem] lg:text-[1.26rem]",
  },
  {
    title: "Personal Injury",
    icon: CirclePlus,
    iconBg: "bg-[#edd8fb]",
    iconColor: "text-[#9d71d4]",
    tilt: "rotate-[8deg] lg:rotate-[9deg]",
    cardSize:
      "w-[176px] min-h-[178px] px-5 py-5 sm:w-[206px] sm:min-h-[202px] sm:px-6 sm:py-6 lg:w-[214px] lg:min-h-[214px]",
    titleSize: "text-[1.02rem] sm:text-[1.3rem] lg:text-[1.36rem]",
  },
  {
    title: "Talcum Powder Lawsuits",
    icon: Sparkles,
    iconBg: "bg-[#fbefd9]",
    iconColor: "text-[#d8ae63]",
    tilt: "-rotate-[5deg] lg:-rotate-[6deg]",
    cardSize:
      "w-[198px] min-h-[188px] px-5 py-5 sm:w-[236px] sm:min-h-[212px] sm:px-6 sm:py-6 lg:w-[248px] lg:min-h-[226px]",
    titleSize: "text-[1.08rem] sm:text-[1.42rem] lg:text-[1.48rem]",
  },
  {
    title: "Hair Relaxer Cancer Lawsuit",
    icon: FlaskConical,
    iconBg: "bg-[#dff7ee]",
    iconColor: "text-[#53b785]",
    tilt: "rotate-[9deg] lg:rotate-[10deg]",
    cardSize:
      "w-[220px] min-h-[198px] px-5 py-5 sm:w-[264px] sm:min-h-[226px] sm:px-6 sm:py-6 lg:w-[280px] lg:min-h-[242px]",
    titleSize: "text-[1.12rem] sm:text-[1.5rem] lg:text-[1.56rem]",
  },
];

const valueCards: CardItem[] = [
  {
    title: "High Demand",
    body: "Consistent, nationwide demand for these case types.",
    icon: BarChart3,
    iconBg: "bg-[#dce7fb]",
    iconColor: "text-[#6c8fcb]",
    tilt: "-rotate-[8deg] lg:-rotate-[9deg]",
  },
  {
    title: "Proven Performance",
    body: "Data-backed strategies that deliver qualified, ready-to-convert leads.",
    icon: Crosshair,
    iconBg: "bg-[#edd8fb]",
    iconColor: "text-[#9d71d4]",
    tilt: "rotate-[7deg] lg:rotate-[8deg]",
  },
  {
    title: "Strong Conversion",
    body: "Better-fit inquiries paired with efficient intake and follow-up systems.",
    icon: ShieldCheck,
    iconBg: "bg-[#dff7ee]",
    iconColor: "text-[#53b785]",
    tilt: "-rotate-[6deg] lg:-rotate-[7deg]",
  },
  {
    title: "Scalable Growth",
    body: "Campaigns built to support volume, quality control, and measurable ROI.",
    icon: Circle,
    iconBg: "bg-[#fbefd9]",
    iconColor: "text-[#d8ae63]",
    tilt: "rotate-[8deg] lg:rotate-[9deg]",
  },
];

function VerticalGrowthCards() {
  return (
    <div className="overflow-visible">
      <div className="flex snap-x snap-mandatory items-end gap-10 overflow-x-auto px-4 py-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:justify-center lg:gap-12 lg:px-6">
        {verticalCards.map(({ title, icon: Icon, iconBg, iconColor, tilt, cardSize, titleSize }) => (
          <div key={title} className="shrink-0 snap-start overflow-visible px-3 py-4">
            <article
              className={`overflow-visible flex flex-col justify-start gap-3 rounded-[26px] bg-white shadow-[0_10px_24px_rgba(21,16,10,0.12)] sm:gap-4 ${tilt} ${cardSize}`}
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-[10px] ${iconBg} sm:h-18 sm:w-18`}>
                <Icon size={28} strokeWidth={1.7} className={iconColor} />
              </div>
              <h3 className={`max-w-[14ch] font-medium leading-[1.08] tracking-[0] text-[#3d4145] ${titleSize}`}>
                {title}
              </h3>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}

function ValueCarouselCards() {
  return (
    <div className="overflow-visible">
      <div className="flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 py-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:px-6">
        {valueCards.map(({ title, body, icon: Icon, iconBg, iconColor, tilt }) => (
          <div key={title} className="shrink-0 snap-start overflow-visible px-3 py-4">
            <article
              className={`overflow-visible w-[235px] min-h-[238px] rounded-[26px] bg-white px-5 py-5 shadow-[0_10px_24px_rgba(21,16,10,0.12)] sm:w-[272px] sm:min-h-[276px] sm:px-6 sm:py-6 lg:w-[285px] lg:min-h-[288px] ${tilt}`}
            >
              <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-[10px] ${iconBg} sm:mb-6 sm:h-18 sm:w-18`}>
                <Icon size={28} strokeWidth={1.7} className={iconColor} />
              </div>
              <h3 className="w-full text-[1.2rem] font-medium leading-[1.12] tracking-[0] text-[#3d4145] sm:text-[1.38rem]">
                {title}
              </h3>
              <p className="mt-4 w-full text-[0.95rem] leading-[1.45] text-[#8a8c8e] sm:text-[1.02rem]">
                {body}
              </p>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PracticeAreasPage() {
  return (
    <main className="min-h-screen bg-[#404040] text-[#d9b46d]">
      <section className="relative isolate overflow-hidden px-5 pb-12 pt-[132px] text-center sm:px-8 sm:pb-14 lg:px-12 lg:pb-16 lg:pt-[148px]">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-heading text-[clamp(2.5rem,7vw,5.2rem)] font-normal leading-[1.02] tracking-[0] text-[#d9b46d]">
            Updating Hero Section
          </h1>
        </div>
      </section>

      <section className="relative isolate overflow-hidden px-5 pb-16 pt-4 sm:px-8 sm:pb-20 sm:pt-6 lg:px-12 lg:pb-24 lg:pt-8">
        <Image
          src="/images/Home page Big Flower light mode (1)-Photoroom.png"
          alt=""
          width={320}
          height={320}
          className="pointer-events-none absolute left-[5%] top-[34px] hidden w-[240px] opacity-[0.12] brightness-50 saturate-50 lg:block"
        />
        <Image
          src="/images/Home page Small Flower light mode-Photoroom.png"
          alt=""
          width={80}
          height={80}
          className="pointer-events-none absolute left-[1%] top-[120px] hidden w-[52px] opacity-[0.12] brightness-50 saturate-50 lg:block"
        />
        <Image
          src="/images/Home page Small Flower light mode-Photoroom.png"
          alt=""
          width={80}
          height={80}
          className="pointer-events-none absolute left-[31%] top-[260px] hidden w-[62px] opacity-[0.12] brightness-50 saturate-50 lg:block"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-[1rem] font-medium text-[#e1c277] sm:text-[1.12rem]">
              Our Focus Your Growth
            </p>
            <h1 className="mt-5 font-heading text-[clamp(2.5rem,5.6vw,4.4rem)] font-normal leading-[1.06] tracking-[0] text-[#d9b46d]">
              Case Verticals We Drive
            </h1>
          </div>

          <div className="mt-12 sm:mt-16">
            <VerticalGrowthCards />
          </div>

          <div className="mt-6 flex justify-center sm:mt-10">
            <Image
              src="/images/linebg.svg"
              alt=""
              width={1240}
              height={120}
              className="h-auto w-full max-w-[1180px] opacity-90"
            />
          </div>

          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)] lg:gap-14 lg:mt-14">
            <div className="pt-2 text-center lg:text-left">
              <p className="text-[1rem] font-medium text-[#e1c277] sm:text-[1.08rem]">
                Why This Verticals
              </p>
              <h2 className="mt-5 font-heading text-[clamp(1.9rem,4vw,3.1rem)] font-normal leading-[1.08] tracking-[0] text-[#d9b46d] lg:max-w-[620px]">
                <span className="block lg:whitespace-nowrap">Built for High Demand.</span>
                <span className="block">Driven by Results.</span>
              </h2>
              <p className="mx-auto mt-7 max-w-[390px] text-[1rem] leading-[1.45] text-[#e4d4ab] sm:text-[1.08rem] lg:mx-0">
                We focus on case types with high demand, strong economics, and
                proven conversion potential so your firm gets maximum ROI.
              </p>
            </div>

            <div className="min-w-0 lg:max-w-[100%]">
              <ValueCarouselCards />
            </div>
          </div>
        </div>

        <Image
          src="/images/Home page Big Flower light mode (1)-Photoroom.png"
          alt=""
          width={320}
          height={320}
          className="pointer-events-none absolute bottom-[10px] right-[2%] hidden w-[220px] opacity-[0.12] brightness-50 saturate-50 lg:block"
        />
        <Image
          src="/images/Home page Small Flower light mode-Photoroom.png"
          alt=""
          width={80}
          height={80}
          className="pointer-events-none absolute bottom-[150px] right-[2%] hidden w-[58px] opacity-[0.12] brightness-50 saturate-50 lg:block"
        />
      </section>

      <CaseAcquisitionSystem bottomVariant="proof" />

      <section className="relative isolate overflow-hidden bg-[#404040] px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20">
        <Image
          src="/images/Home page Big Flower light mode (1)-Photoroom.png"
          alt=""
          width={240}
          height={240}
          className="pointer-events-none absolute bottom-[18px] left-[2%] hidden w-[190px] opacity-[0.12] brightness-50 saturate-50 lg:block"
        />
        <Image
          src="/images/Home page Big Flower light mode (1)-Photoroom.png"
          alt=""
          width={220}
          height={220}
          className="pointer-events-none absolute left-1/2 top-[78px] hidden w-[180px] -translate-x-1/2 opacity-[0.08] brightness-50 saturate-50 lg:block"
        />
        <Image
          src="/images/Home page Small Flower light mode-Photoroom.png"
          alt=""
          width={74}
          height={74}
          className="pointer-events-none absolute left-[21%] top-[248px] hidden w-[54px] opacity-[0.12] brightness-50 saturate-50 lg:block"
        />
        <Image
          src="/images/Home page Small Flower light mode-Photoroom.png"
          alt=""
          width={74}
          height={74}
          className="pointer-events-none absolute right-[30%] top-[142px] hidden w-[52px] opacity-[0.12] brightness-50 saturate-50 lg:block"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(420px,540px)] lg:gap-12">
          <div className="max-w-[640px] text-center lg:text-left">
            <p className="text-[1rem] font-medium text-[#e1c277] sm:text-[1.12rem]">
              Ready to Grow?
            </p>
            <h2 className="mt-5 font-heading text-[clamp(2.4rem,5.8vw,4.6rem)] font-normal leading-[1.06] tracking-[0] text-[#d9b46d]">
              Let&apos;s Build Your Next
              <span className="block">Winning Campaign</span>
            </h2>
            <p className="mx-auto mt-7 max-w-[560px] text-[1.05rem] leading-[1.45] text-[#a9abad] sm:text-[1.12rem] lg:mx-0">
              Partner with YMG Legal and start getting more qualified leads,
              more consultations, and more signed cases.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/services/case-acquisition"
                className="inline-flex h-[52px] min-w-[182px] items-center justify-center rounded-[4px] bg-[#d9b46d] px-8 text-[0.98rem] font-semibold text-[#262626]"
              >
                Get More Cases
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-[52px] min-w-[246px] items-center justify-center rounded-[4px] border border-[#d9b46d] px-8 text-[0.98rem] font-medium text-[#d9b46d]"
              >
                Schedule a Strategy Call
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] lg:mx-0 lg:max-w-none">
            <Image
              src="/images/Union.png"
              alt="YMG Legal campaign performance collage"
              width={598}
              height={428}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
