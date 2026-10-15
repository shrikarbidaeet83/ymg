"use client";

import { Children, useRef, useState, type ReactNode } from "react";
import {
  CarouselControls,
  getClosestCardIndex,
  scrollToCard,
} from "@/components/sections/IncludedServicesCarousel";

// Mobile/tablet swipe carousel used by the service detail pages, matching the SEO and
// Local Services Ads sections. Cards are rendered on the server and passed in as children.
export default function ServiceCardCarousel({
  children,
  theme,
  label,
  className = "",
}: {
  children: ReactNode;
  theme: "light" | "dark";
  label: string;
  className?: string;
}) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = Children.count(children);

  const selectCard = (index: number) => {
    setActiveIndex(index);
    scrollToCard(carouselRef.current, index);
  };

  return (
    <div className={`w-full min-w-0 lg:hidden ${className}`}>
      <div
        ref={carouselRef}
        onScroll={(event) => setActiveIndex(getClosestCardIndex(event.currentTarget))}
        className="flex w-full max-w-full touch-pan-x snap-x snap-mandatory scroll-smooth gap-4 overflow-x-auto overscroll-x-contain px-5 pb-3 pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-8"
      >
        {children}
      </div>
      <CarouselControls activeIndex={activeIndex} total={total} onSelect={selectCard} theme={theme} label={label} />
    </div>
  );
}
