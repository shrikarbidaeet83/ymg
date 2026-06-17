"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ProcessScrollButton() {
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);

  useEffect(() => {
    const scroller = document.querySelector<HTMLElement>("[data-process-scroll]");
    if (!scroller) return;

    const updateScrollState = () => {
      const maxScroll = scroller.scrollHeight - scroller.clientHeight;
      setCanScrollUp(scroller.scrollTop > 4);
      setCanScrollDown(scroller.scrollTop < maxScroll - 4);
    };

    updateScrollState();
    scroller.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      scroller.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollPoints = (direction: 1 | -1) => {
    document
      .querySelector("[data-process-scroll]")
      ?.scrollBy({ top: direction * 180, behavior: "smooth" });
  };

  return (
    <>
      <button
        type="button"
        aria-label="Scroll process points up"
        onClick={() => scrollPoints(-1)}
        className={`absolute left-1/2 top-[42px] z-20 hidden h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full text-[#f2d086] transition-all duration-300 lg:flex ${
          canScrollUp
            ? "opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <span className="flex h-7 w-5 flex-col items-center justify-start rounded-full">
          <ChevronUp size={14} strokeWidth={2} className="-mb-1" />
          <span className="h-5 w-px bg-[#d8b26b]/80" />
        </span>
      </button>

      <button
        type="button"
        aria-label="Scroll process points down"
        onClick={() => scrollPoints(1)}
        className={`absolute bottom-[-8px] left-1/2 z-20 hidden h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full text-[#f2d086] transition-all duration-300 lg:flex ${
          canScrollDown
            ? "opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <span className="flex h-7 w-5 flex-col items-center justify-end rounded-full">
          <span className="h-5 w-px bg-[#d8b26b]/80" />
          <ChevronDown size={14} strokeWidth={2} className="-mt-1" />
        </span>
      </button>
    </>
  );
}
