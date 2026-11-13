import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import GlassIcon, { type GlassTone } from "@/components/ui/GlassIcon";
import ScrollMotion from "@/components/home/ScrollMotion";
import LeadConnectorBookingCalendar from "@/components/sections/LeadConnectorBookingCalendar";
import HeroBackdrop from "@/components/site/HeroBackdrop";

export const metadata: Metadata = {
  title: "Contact YMG Legal | Talk to Our Team",
  description:
    "Book a free 30-minute strategy call with YMG Legal. We review your case flow and outline what we'd build for your firm.",
};

// lucide has no brand marks, so LinkedIn gets its "in" as text.
const LinkedInMark = () => (
  <span className="text-[1.05rem] font-bold leading-none">in</span>
);

const channels: {
  label: string;
  value: string;
  href?: string;
  Icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  tone: GlassTone;
}[] = [
  {
    label: "Email",
    value: "info@ymg-legal.com",
    href: "mailto:info@ymg-legal.com",
    Icon: Mail,
    tone: "blue",
  },
  { label: "Office", value: "Las Vegas, Nevada", Icon: MapPin, tone: "rose" },
  {
    label: "LinkedIn",
    value: "YMG Legal",
    href: "https://www.linkedin.com/company/ymglegal-attorney-marketing/",
    Icon: LinkedInMark,
    tone: "indigo",
  },
];

const next = [
  {
    value: "30 min",
    title: "Strategy call",
    body: "We look at your case volume, intake and where leads are being lost.",
  },
  {
    value: "48 hrs",
    title: "Custom proposal",
    body: "Services, timeline and pricing scoped to your firm.",
  },
  {
    value: "1 wk",
    title: "Launch, at fastest",
    body: "Campaigns and intake live, with weekly reporting.",
  },
];

/* Booking first: the title, then the calendar, then the other ways to reach us. */
function Hero() {
  return (
    <section className="ymg-dark-hero relative isolate overflow-hidden bg-[#0B231D] px-5 pb-20 pt-32 text-[#F5F1E8] sm:px-10 sm:pt-36 lg:px-12 lg:pb-28">
      <HeroBackdrop src="/images/about/handshake.jpg" />
      <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-10">
        <div data-reveal className="self-end lg:col-start-1 lg:row-start-1">
          <h1 className="max-w-[16ch] text-[clamp(2.18rem,4.48vw,4rem)] leading-[1] tracking-[-0.02em]">
            Let&apos;s talk about{" "}
            <span className="text-[#D6B263]">your firm.</span>
          </h1>
          <p className="mt-6 max-w-[30rem] text-[1.12rem] leading-[1.65] text-[#C9C3B4]">
            Case acquisition, intake, marketing or support: tell us what you
            want to improve, and we&apos;ll map the right setup on a free call.
          </p>
        </div>

        <div
          data-reveal
          data-reveal-delay="120"
          className="min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1"
        >
          <LeadConnectorBookingCalendar />
        </div>

        <ul
          data-reveal-group
          className="self-start border-t border-[#F5F1E8]/12 lg:col-start-1 lg:row-start-2"
        >
          {channels.map(({ label, value, href, Icon, tone }) => {
            const row = (
              <>
                <GlassIcon tone={tone} size="md" surface="dark">
                  <span aria-hidden="true" className="flex">
                    <Icon size={19} strokeWidth={1.8} />
                  </span>
                </GlassIcon>
                <span className="min-w-0">
                  <span className="block text-[0.88rem] text-[#B9B2A3]">
                    {label}
                  </span>
                  <span className="block text-[1.12rem] font-semibold text-[#F5F1E8]">
                    {value}
                  </span>
                </span>
              </>
            );
            return (
              <li key={label} className="border-b border-[#F5F1E8]/12">
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-center gap-4 py-4 transition-colors hover:[&_span_span:last-child]:text-[#D6B263]"
                  >
                    {row}
                  </a>
                ) : (
                  <div className="flex items-center gap-4 py-4">{row}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* What happens after you book, as three numbers you can hold us to. */
function Next() {
  return (
    <section className="bg-[#F0F4F1] px-5 py-24 sm:px-10 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1320px]">
        <h2
          data-reveal
          className="max-w-[22ch] text-[clamp(1.93rem,3.52vw,3.2rem)] leading-[1.03] tracking-[-0.015em] text-[#0B231D]"
        >
          What happens <span className="text-[#8C6B22]">after you book.</span>
        </h2>
        <ol
          data-reveal-group
          className="mt-14 grid gap-10 md:grid-cols-3 md:gap-0"
        >
          {next.map(({ value, title, body }, i) => (
            <li
              key={title}
              className={`md:px-10 ${i ? "md:border-l md:border-[#0B231D]/12" : "md:pl-0"}`}
            >
              <span className="ymg-num block text-[clamp(3.2rem,6vw,5rem)] leading-[0.9] text-[#0B231D]">
                {value}
              </span>
              <h3 className="mt-5 text-[1.5rem] font-normal leading-tight text-[#0B231D]">
                {title}
              </h3>
              <p className="mt-2 max-w-[22rem] text-[1.04rem] leading-[1.55] text-[#4E5A54]">
                {body}
              </p>
            </li>
          ))}
        </ol>
        <p
          data-reveal
          className="mt-14 border-t border-[#0B231D]/12 pt-6 text-[1rem] font-semibold text-[#0B231D]"
        >
          No long-term contracts required to start.
        </p>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <div className="ymg-site">
      <Hero />
      <Next />
      <ScrollMotion />
    </div>
  );
}
