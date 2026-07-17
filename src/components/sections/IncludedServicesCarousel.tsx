"use client";

import {
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  DollarSign,
  FileText,
  KeyRound,
  PanelsTopLeft,
  MessagesSquare,
  Palette,
  PenLine,
  Search,
  Send,
  Share2,
  ShieldCheck,
  SquarePen,
  Target,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

type IncludedService = {
  title: string;
  body: string;
  iconName: string;
  iconBg: string;
  iconColor: string;
};

const iconMap = {
  target: Target,
  calendar: CalendarDays,
  palette: Palette,
  pen: PenLine,
  share: Share2,
  messages: MessagesSquare,
  chart: BarChart3,
  shield: ShieldCheck,
  search: Search,
  key: KeyRound,
  edit: SquarePen,
  landing: PanelsTopLeft,
  tracking: TrendingUp,
  dollar: DollarSign,
  send: Send,
  file: FileText,
};

export function scrollToCard(container: HTMLDivElement | null, index: number) {
  if (!container) return;
  const card = container.children[index] as HTMLElement | undefined;
  if (!card) return;

  container.scrollTo({
    left: card.offsetLeft - container.offsetLeft - 20,
    behavior: "smooth",
  });
}

export function getClosestCardIndex(container: HTMLDivElement) {
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

export function CarouselControls({
  activeIndex,
  total,
  onSelect,
  theme,
  label = "included service",
}: {
  activeIndex: number;
  total: number;
  onSelect: (index: number) => void;
  theme: "light" | "dark";
  label?: string;
}) {
  const previousIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;

  return (
    <div className="mt-5 flex justify-center lg:hidden" aria-label={`${label} carousel controls`}>
      <div
        className={`flex items-center gap-3 rounded-full border p-1.5 backdrop-blur-sm ${
          theme === "dark"
            ? "border-[#d8ad5c]/25 bg-[#353535]/85 shadow-[0_8px_22px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.04)]"
            : "border-[#dfbd78] bg-[#fffdfa]/95 shadow-[0_8px_20px_rgba(132,96,39,0.16),inset_0_1px_0_rgba(255,255,255,0.9)]"
        }`}
      >
        <button
          type="button"
          aria-label={`Previous ${label}`}
          onClick={() => onSelect(previousIndex)}
          className={`group inline-flex h-8 w-8 items-center justify-center rounded-full border text-[#d9ae5d] transition-all duration-300 active:scale-95 ${
            theme === "dark"
              ? "border-[#d8ad5c]/35 bg-[#44413b] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-[#e0b766]/70"
              : "border-[#d5aa58] bg-[#fff3dc] text-[#9a722d] shadow-[0_3px_8px_rgba(132,96,39,0.12),inset_0_1px_0_rgba(255,255,255,0.9)] hover:border-[#c7963f] hover:bg-[#f9e8c6]"
          }`}
        >
          <ChevronLeft size={14} strokeWidth={1.6} className="transition-transform group-hover:-translate-x-0.5" />
        </button>

        <div className="flex min-w-[82px] items-center justify-center gap-1.5 px-1">
          {Array.from({ length: total }, (_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to ${label} ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              onClick={() => onSelect(index)}
              className="group flex h-4 w-4 items-center justify-center rounded-full"
            >
              <span
                className={`block rotate-45 rounded-[1px] transition-all duration-300 ${
                  activeIndex === index
                    ? "h-2 w-2 bg-[linear-gradient(145deg,#e9c77e,#bd8d39)] shadow-[0_0_0_3px_rgba(216,173,92,0.14),0_0_8px_rgba(187,137,52,0.28)]"
                    : theme === "dark"
                      ? "h-1 w-1 border border-[#cda552]/65 bg-transparent group-hover:border-[#e9c77e] group-hover:bg-[#d8ad5c]/20"
                      : "h-1 w-1 border border-[#b98c42]/70 bg-transparent group-hover:border-[#9a722d] group-hover:bg-[#d8ad5c]/20"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          aria-label={`Next ${label}`}
          onClick={() => onSelect(nextIndex)}
          className={`group inline-flex h-8 w-8 items-center justify-center rounded-full border text-[#d9ae5d] transition-all duration-300 active:scale-95 ${
            theme === "dark"
              ? "border-[#d8ad5c]/35 bg-[#44413b] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-[#e0b766]/70"
              : "border-[#d5aa58] bg-[#fff3dc] text-[#9a722d] shadow-[0_3px_8px_rgba(132,96,39,0.12),inset_0_1px_0_rgba(255,255,255,0.9)] hover:border-[#c7963f] hover:bg-[#f9e8c6]"
          }`}
        >
          <ChevronRight size={14} strokeWidth={1.6} className="transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}

export default function IncludedServicesCarousel({
  services,
  theme = "light",
}: {
  services: IncludedService[];
  theme?: "light" | "dark";
}) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const selectCard = (index: number) => {
    setActiveIndex(index);
    scrollToCard(carouselRef.current, index);
  };

  return (
    <div className="w-full min-w-0 lg:hidden">
      <div
        ref={carouselRef}
        onScroll={(event) => setActiveIndex(getClosestCardIndex(event.currentTarget))}
        className="flex w-full max-w-full touch-pan-x snap-x snap-mandatory scroll-smooth gap-4 overflow-x-auto overscroll-x-contain px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-8"
      >
        {services.map(({ title, body, iconName, iconBg, iconColor }) => {
          const Icon = iconMap[iconName as keyof typeof iconMap] ?? Target;

          return (
            <article
              key={title}
              className="flex min-h-[255px] w-[82vw] max-w-[310px] shrink-0 snap-center flex-col rounded-[20px] border border-[#e1bd74] bg-[#fffdfa] p-5 text-left shadow-[0_8px_22px_rgba(0,0,0,0.08)] sm:w-[285px]"
            >
              <div className={`flex h-[61px] w-[61px] items-center justify-center rounded-[7px] ${iconBg}`}>
                <Icon size={30} strokeWidth={1.35} className={iconColor} />
              </div>
              <h3 className="ymg-practice-hero-title mt-5 text-[1.28rem] font-normal leading-tight text-[#494745]">
                {title}
              </h3>
              <p className="mt-3 text-[0.76rem] leading-[1.35] text-[#5e5b58]">{body}</p>
              <Link
                href="/contact"
                className="mt-auto inline-flex items-center gap-1 pt-4 text-[0.76rem] text-[#5e5b58] transition-colors hover:text-[#d5aa58]"
              >
                Explore <ArrowUpRight size={13} strokeWidth={1.4} />
              </Link>
            </article>
          );
        })}
      </div>
      <CarouselControls activeIndex={activeIndex} total={services.length} onSelect={selectCard} theme={theme} />
    </div>
  );
}
