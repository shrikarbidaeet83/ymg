"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { ExternalLink } from "lucide-react";

const BOOKING_ID = "qkkfpsTMiOAVsIxG3WrZ";
const bookingUrl = `https://api.leadconnectorhq.com/widget/booking/${BOOKING_ID}`;

// The widget is drawn a step smaller than its own size, and its logo strip at the top is cut off
// (the iframe is cross-origin, so it can't be hidden from inside). Removing the logo in the
// calendar's LeadConnector settings would make the crop unnecessary.
const SCALE = 0.86;
// The widget lays out wider screens differently, so its logo strip ends lower there.
const cropFor = (width: number) => (width >= 700 ? 128 : 100);

/*
 * LeadConnector's own embed: the iframe at its natural size, and their form_embed.js script grows it
 * to fit the calendar, so the page scrolls (not a box inside the page). The widget brings its own
 * title, so the card adds none. If the script is blocked, the min-height still shows the calendar.
 */
export default function LeadConnectorBookingCalendar() {
  const frame = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(820);
  const [crop, setCrop] = useState(100);

  // form_embed.js grows the iframe to fit the calendar; follow it so the card is never clipped.
  useEffect(() => {
    const el = frame.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setHeight(el.offsetHeight);
      setCrop(cropFor(el.offsetWidth));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (window.location.hash !== "#booking") return;
    const timer = window.setTimeout(() => {
      document.getElementById("booking")?.scrollIntoView({ block: "start" });
    }, 180);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div id="booking" className="scroll-mt-28">
      <div
        className="relative overflow-hidden rounded-[26px] bg-white shadow-[0_40px_80px_rgba(0,0,0,0.35)]"
        style={{ height: Math.max(0, height - crop) * SCALE }}
      >
        <div
          className="absolute left-0 top-0 origin-top-left"
          style={{
            width: `${100 / SCALE}%`,
            transform: `translateY(${-crop * SCALE}px) scale(${SCALE})`,
          }}
        >
          <iframe
            ref={frame}
            id={`${BOOKING_ID}_ymg`}
            title="Book your free YMG Legal strategy call"
            src={bookingUrl}
            loading="eager"
            scrolling="no"
            allow="payment; clipboard-read; clipboard-write"
            className="block min-h-[820px] w-full border-0 bg-white"
            style={{ overflow: "hidden" }}
          />
        </div>
      </div>
      <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.92rem] text-[#C9C3B4]">
        Calendar not loading?
        <a
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold text-[#F5F1E8] underline decoration-[#D6B263] underline-offset-4 hover:text-[#D6B263]"
        >
          Open it in a new tab <ExternalLink size={14} aria-hidden="true" />
        </a>.
      </p>
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
