"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  CirclePlus,
  Crosshair,
  FileText,
  FlaskConical,
  TrendingUp,
} from "lucide-react";
import CaseAcquisitionSystem from "@/components/sections/CaseAcquisitionSystem";

type CardItem = {
  title: string;
  body: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  iconBg: string;
  iconColor: string;
};

const verticalCards: CardItem[] = [
  {
    title: "Mass Torts",
    body: "Acquire and scale high-volume cases with targeted digital campaigns.",
    icon: FileText,
    iconBg: "bg-[#dce7fb]",
    iconColor: "text-[#6c8fcb]",
  },
  {
    title: "Personal Injury",
    body: "Drive qualified injury leads with consistent acquisition strategies.",
    icon: CirclePlus,
    iconBg: "bg-[#edd8fb]",
    iconColor: "text-[#9d71d4]",
  },
  {
    title: "Talcum Powder",
    body: "Connect with affected audiences through focused case marketing.",
    icon: CircleDollarSign,
    iconBg: "bg-[#fbefd9]",
    iconColor: "text-[#d8ae63]",
  },
  {
    title: "Hair Relaxer",
    body: "Generate high-intent opportunities through data-led campaigns.",
    icon: FlaskConical,
    iconBg: "bg-[#dff7ee]",
    iconColor: "text-[#53b785]",
  },
];

const valueCards: CardItem[] = [
  {
    title: "High Demand",
    body: "Consistent, nationwide demand for these case types.",
    icon: BarChart3,
    iconBg: "bg-[#dce7fb]",
    iconColor: "text-[#6c8fcb]",
  },
  {
    title: "Proven Performance",
    body: "Data-backed strategies that deliver qualified, ready-to-convert leads.",
    icon: Crosshair,
    iconBg: "bg-[#edd8fb]",
    iconColor: "text-[#9d71d4]",
  },
  {
    title: "Strong ROI",
    body: "High case value and better returns for your firm.",
    icon: CircleDollarSign,
    iconBg: "bg-[#dff7ee]",
    iconColor: "text-[#53b785]",
  },
  {
    title: "Scalable Campaigns",
    body: "Built to scale with predictable lead flow and results.",
    icon: TrendingUp,
    iconBg: "bg-[#ededed]",
    iconColor: "text-[#555555]",
  },
];

function scrollToCard(container: HTMLDivElement | null, index: number) {
  if (!container) return;
  const card = container.children[index] as HTMLElement | undefined;
  if (!card) return;

  container.scrollTo({
    left: card.offsetLeft - container.offsetLeft - 20,
    behavior: "smooth",
  });
}

function getClosestCardIndex(container: HTMLDivElement) {
  const cards = Array.from(container.children) as HTMLElement[];
  const target = container.scrollLeft + 20;
  let closestIndex = 0;
  let closestDistance = Number.POSITIVE_INFINITY;

  cards.forEach((card, index) => {
    const distance = Math.abs(card.offsetLeft - container.offsetLeft - target);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  return closestIndex;
}

function CarouselControls({
  activeIndex,
  total,
  label,
  onSelect,
}: {
  activeIndex: number;
  total: number;
  label: string;
  onSelect: (index: number) => void;
}) {
  const previousIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;

  return (
    <div className="mt-5 flex justify-center lg:hidden" aria-label={`${label} carousel controls`}>
      <div className="flex items-center gap-3 rounded-full border border-[#d8ad5c]/25 bg-[#353535]/85 p-1.5 shadow-[0_8px_22px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm">
        <button
          type="button"
          aria-label={`Previous ${label} slide`}
          onClick={() => onSelect(previousIndex)}
          className="group inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#d8ad5c]/35 bg-[linear-gradient(145deg,rgba(104,88,58,0.42),rgba(53,53,53,0.76))] text-[#e0b766] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300 hover:border-[#e0b766]/70 hover:bg-[#d8ad5c]/12 active:scale-95"
        >
          <ChevronLeft size={14} strokeWidth={1.6} className="transition-transform group-hover:-translate-x-0.5" />
        </button>

        <div className="flex min-w-[82px] items-center justify-center gap-1.5 px-1">
          {Array.from({ length: total }, (_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to ${label} slide ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              onClick={() => onSelect(index)}
              className="group flex h-4 w-4 items-center justify-center rounded-full"
            >
              <span
                className={`block rotate-45 rounded-[1px] transition-all duration-300 ${
                  activeIndex === index
                    ? "h-2 w-2 bg-[linear-gradient(145deg,#f0d08c,#bd8d39)] shadow-[0_0_0_3px_rgba(216,173,92,0.1),0_0_9px_rgba(224,183,102,0.34)]"
                    : "h-1 w-1 border border-[#cda552]/65 bg-transparent group-hover:border-[#e9c77e] group-hover:bg-[#d8ad5c]/20"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          aria-label={`Next ${label} slide`}
          onClick={() => onSelect(nextIndex)}
          className="group inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#d8ad5c]/35 bg-[linear-gradient(145deg,rgba(104,88,58,0.42),rgba(53,53,53,0.76))] text-[#e0b766] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300 hover:border-[#e0b766]/70 hover:bg-[#d8ad5c]/12 active:scale-95"
        >
          <ChevronRight size={14} strokeWidth={1.6} className="transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}

function VerticalGrowthCards() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const selectCard = (index: number) => {
    setActiveIndex(index);
    scrollToCard(carouselRef.current, index);
  };

  return (
    <div>
      <div
        ref={carouselRef}
        onScroll={(event) => setActiveIndex(getClosestCardIndex(event.currentTarget))}
        className="flex w-full max-w-full touch-pan-x snap-x snap-mandatory scroll-smooth gap-4 overflow-x-auto overscroll-x-contain px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-8 lg:grid lg:grid-cols-4 lg:gap-3 lg:overflow-visible lg:px-0 lg:pb-0"
      >
        {verticalCards.map(({ title, body, icon: Icon, iconBg, iconColor }) => (
          <article
            key={title}
            className="flex min-h-[255px] w-[82vw] max-w-[310px] shrink-0 snap-center flex-col rounded-[20px] border border-[#e1bd74] bg-[#fffdfa] p-5 text-left shadow-[0_8px_22px_rgba(0,0,0,0.08)] sm:w-[285px] lg:w-auto lg:max-w-none"
          >
            <div className={`flex h-[61px] w-[61px] items-center justify-center rounded-[7px] ${iconBg}`}>
              <Icon size={30} strokeWidth={1.35} className={iconColor} />
            </div>
            <h3 className="ymg-practice-hero-title mt-5 text-[1.28rem] font-normal leading-tight text-[#494745]">
              {title}
            </h3>
            <p className="mt-3 text-[0.76rem] leading-[1.35] text-[#5e5b58]">{body}</p>
            <Link href="/contact" className="mt-auto inline-flex items-center gap-1 pt-4 text-[0.76rem] text-[#5e5b58] transition-colors hover:text-[#d5aa58]">
              Explore <ArrowUpRight size={13} strokeWidth={1.4} />
            </Link>
          </article>
        ))}
      </div>
      <CarouselControls activeIndex={activeIndex} total={verticalCards.length} label="case verticals" onSelect={selectCard} />
    </div>
  );
}

function ValueCarouselCards() {
  return (
    <div className="grid w-full grid-cols-1 gap-3 px-5 sm:px-8 lg:grid-cols-2 lg:px-0">
      {valueCards.map(({ title, body, icon: Icon, iconBg, iconColor }) => (
        <article
          key={title}
          className="grid min-h-[100px] w-full grid-cols-[58px_1fr] items-center gap-x-5 rounded-[20px] border border-[#c89f53] bg-[#404040]/75 px-4 py-3 text-left lg:grid-cols-[58px_minmax(0,1fr)_auto]"
        >
          <div className={`row-span-2 flex h-[58px] w-[58px] items-center justify-center rounded-[6px] ${iconBg}`}>
            <Icon size={29} strokeWidth={1.4} className={iconColor} />
          </div>
          <div>
            <h3 className="text-[0.88rem] font-medium leading-tight text-[#EBC982]">{title}</h3>
            <p className="mt-2 max-w-[250px] text-[0.68rem] leading-[1.35] text-[#92908d]">{body}</p>
          </div>
          <Link href="/contact" className="col-start-2 mt-3 inline-flex items-center gap-1 text-[0.72rem] text-[#d9ae5d] lg:col-start-3 lg:row-start-1 lg:mt-0 lg:pl-3">
            Explore <ArrowUpRight size={13} strokeWidth={1.4} />
          </Link>
        </article>
      ))}
    </div>
  );
}

export default function PracticeAreasPage() {
  return (
    <main className="min-h-screen bg-[#404040] text-[#d9b46d]">
      <section className="ymg-section-padding relative isolate flex min-h-[480px] overflow-hidden bg-[#FFF5E0] pt-[126px] text-center sm:pt-[134px] lg:pt-[138px]">
        <div className="pointer-events-none absolute inset-0 z-0 mx-auto w-full max-w-[1120px]">
          <Image
            src="/flowers/half-circleBG.svg"
            alt=""
            width={1180}
            height={848}
            priority
            className="absolute right-[-60px] top-1/2 w-[300px] -translate-y-1/2 mix-blend-multiply sm:right-0 sm:w-[393px] lg:w-[467px]"
          />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[520px] flex-col items-center">
          <p className="max-w-[410px] text-[0.8rem] font-normal leading-[1.38] text-[#4d4a45] sm:text-[0.86rem]">
            We generate qualified leads and signed cases across
            <span className="block">high-demand legal categories.</span>
          </p>

          <h1 className="ymg-practice-hero-title mt-4 text-[clamp(2rem,3.5vw,2.2rem)] font-normal leading-[1.13] tracking-[-0.025em] text-[#45413d]">
            High-Value Case Verticals
            <span className="block">We Specialize In</span>
          </h1>

          <p className="mt-4 max-w-[410px] text-[0.76rem] font-normal leading-[1.38] text-[#595650] sm:text-[0.8rem]">
            From personal injury to mass tort campaigns, we help law firms
            <span className="block">scale client acquisition with targeted, performance-driven</span>
            <span className="block">strategies.</span>
          </p>

          <div className="mt-8 grid w-full max-w-[351px] grid-cols-1 justify-center gap-3 sm:grid-cols-[154px_181px] sm:gap-4">
            <Link
              href="/services/case-acquisition"
              className="inline-flex h-[43px] items-center justify-center rounded-[3px] bg-[#ddb25d] px-4 text-[0.76rem] font-semibold tracking-[0.025em] text-[#202322] transition-colors hover:bg-[#e6bf73]"
            >
              Get More Cases
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-[43px] items-center justify-center rounded-[3px] border border-[#e0b45d] px-4 text-[0.76rem] font-medium tracking-[0.025em] text-[#d4a64f] transition-colors hover:bg-[#e0b45d]/10"
            >
              Explore Opportunity
            </Link>
          </div>
        </div>
      </section>

      <section className="ymg-section-padding relative isolate overflow-hidden bg-[#404040]">
        <Image
          src="/flowers/psmBG.svg"
          alt=""
          width={273}
          height={196}
          className="pointer-events-none absolute left-0 top-3 z-0 w-[120px] sm:top-4 sm:w-[167px] lg:top-5 lg:w-[228px]"
        />
        <Image
          src="/flowers/psmBG.svg"
          alt=""
          width={273}
          height={196}
          className="pointer-events-none absolute bottom-5 right-0 z-0 w-[60px] sm:bottom-6 sm:w-[84px] lg:bottom-8 lg:w-[114px]"
        />

        <div className="relative z-10 mx-auto w-full min-w-0 max-w-[1240px]">
          <div className="text-center">
            <p className="text-[0.88rem] font-medium text-[#e1c277] sm:text-[0.96rem]">
              Our Focus Your Growth
            </p>
            <h2 className="ymg-practice-hero-title mt-4 text-[clamp(2rem,5vw,2.2rem)] font-normal leading-[1.08] tracking-[-0.015em] text-[#EBC982]">
              Case Verticals We Drive
            </h2>
          </div>

          <div className="flex flex-col">
            <div className="order-2 mt-9 sm:mt-11 lg:order-1 lg:mt-16">
              <VerticalGrowthCards />
            </div>

            <div className="order-1 mt-9 sm:mt-11 lg:order-2 lg:mt-3">
              <ValueCarouselCards />
            </div>
          </div>
        </div>

        <Image
          src="/images/big_flowers.png"
          alt=""
          width={320}
          height={320}
          className="pointer-events-none absolute bottom-[10px] right-[2%] hidden w-[220px] opacity-[0.12] brightness-50 saturate-50 lg:block"
        />
        <Image
          src="/images/small_flowers.png"
          alt=""
          width={80}
          height={80}
          className="pointer-events-none absolute bottom-[150px] right-[2%] hidden w-[58px] opacity-[0.12] brightness-50 saturate-50 lg:block"
        />
      </section>

      <CaseAcquisitionSystem bottomVariant="proof" showStepFlower />

      <section className="ymg-section-padding relative isolate overflow-hidden bg-[#404040]">
        <Image
          src="/flowers/vcardBG.svg"
          alt=""
          width={273}
          height={196}
          className="pointer-events-none absolute bottom-0 left-0 z-0 w-[140px] sm:w-[210px] lg:w-[273px]"
        />
        <Image
          src="/flowers/vcardBG.svg"
          alt=""
          width={273}
          height={196}
          className="pointer-events-none absolute right-[36%] top-1/2 z-0 w-[130px] -translate-y-1/2 sm:w-[190px] lg:w-[240px]"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(420px,540px)] lg:gap-12">
          <div className="max-w-[640px] text-center lg:text-left">
            <p className="text-[1rem] font-medium text-[#e1c277] sm:text-[1.12rem]">
              Ready to Grow?
            </p>
            <h2 className="mt-5 font-heading text-[clamp(2.4rem,5.8vw,4.6rem)] font-normal leading-[1.06] tracking-[0] text-[#EBC982]">
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
