"use client";

import { useEffect, useState } from "react";

const bookingUrl = "https://api.leadconnectorhq.com/widget/booking/qkkfpsTMiOAVsIxG3WrZ";

export default function LeadConnectorBookingCalendar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#booking") {
      const timer = window.setTimeout(() => {
        document.getElementById("booking")?.scrollIntoView({ block: "center" });
      }, 180);

      return () => window.clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 1023px)");
    const updateViewport = () => setIsMobile(mobileQuery.matches);

    updateViewport();
    mobileQuery.addEventListener("change", updateViewport);

    return () => {
      mobileQuery.removeEventListener("change", updateViewport);
    };
  }, []);

  return (
    <div id="booking" className="w-full scroll-mt-32 rounded-[8px] bg-[#4040400F] p-2.5 text-[#2f3337] shadow-[0_18px_40px_rgba(65,48,19,0.12)] dark:bg-[#1F1F1F] dark:shadow-[0_18px_40px_rgba(0,0,0,0.28)] sm:p-4 lg:p-5">
      <div className="mb-3 flex items-center justify-between gap-3 px-1">
        <div>
          <h2 className="font-heading text-[1.2rem] font-semibold leading-tight text-[#3d4145] dark:text-[#D8B26B]">
            Book Your Free Strategy Call
          </h2>
          <p className="mt-1 text-[0.78rem] leading-[1.35] text-[#55585a] dark:text-[#8E8E8E]">
            Choose a time that works for you.
          </p>
        </div>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 text-[0.7rem] font-semibold text-[#9A762E] underline-offset-4 hover:underline dark:text-[#D8B26B]"
        >
          Open calendar
        </a>
      </div>

      <div className="relative h-[765px] overflow-hidden rounded-[6px] border border-[#D8B26B]/55 bg-[#FFF5E0] lg:h-[540px] dark:bg-[#191917]">
        <span className="pointer-events-none absolute bottom-0 left-1/3 top-0 z-10 hidden w-px bg-[#D8B26B]/55 dark:lg:block" />
        <iframe
          key={isMobile ? "mobile" : "desktop"}
          id="ymg-leadconnector-booking"
          title="Book your free YMG Legal strategy call"
          src={bookingUrl}
          loading="eager"
          scrolling={isMobile ? "yes" : "no"}
          allow="payment; clipboard-read; clipboard-write"
          className="absolute left-0 top-0 block h-[980px] w-[128.25%] origin-top-left scale-[0.78] border-0 bg-white mix-blend-multiply [filter:grayscale(.9)_sepia(.16)_saturate(.9)_contrast(1.1)] lg:top-[-50px] lg:h-[825px] lg:w-[125%] lg:scale-[0.8] dark:bg-[#191917] dark:mix-blend-normal dark:[filter:invert(.9)_sepia(.22)_saturate(.72)_hue-rotate(8deg)_brightness(1.02)]"
        />
      </div>

      <p className="px-1 pt-3 text-center text-[0.7rem] leading-[1.35] text-[#6B655B] dark:text-[#8E8E8E]">
        If the calendar does not load, use the Open calendar link above to continue booking.
      </p>
    </div>
  );
}
