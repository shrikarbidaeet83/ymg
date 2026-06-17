import Link from "next/link";
import { Bot, ClipboardList, FileCheck2, Magnet, Scale } from "lucide-react";

const solutions = [
  {
    icon: Magnet,
    iconBg: "bg-[#e7eefb]",
    iconColor: "text-[#5b8def]",
    title: "Lead Generation",
    body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    tilt: "-rotate-[5deg] translate-y-2 sm:-rotate-[4deg] lg:-rotate-[6deg]",
  },
  {
    icon: ClipboardList,
    iconBg: "bg-[#f3e9fb]",
    iconColor: "text-[#a06ad4]",
    title: "Intake Services",
    body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    tilt: "rotate-[4deg] -translate-y-2 sm:rotate-[3deg] lg:rotate-[4deg] lg:-translate-y-3",
  },
  {
    icon: FileCheck2,
    iconBg: "bg-[#e4f6ea]",
    iconColor: "text-[#46b06a]",
    title: "Case Acquisition",
    body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    tilt: "-rotate-[4deg] translate-y-2 sm:-rotate-[4deg] sm:translate-y-3 lg:-rotate-[4deg]",
  },
  {
    icon: Bot,
    iconBg: "bg-[#fbeedd]",
    iconColor: "text-[#d8ae63]",
    title: "AI Booking",
    body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    tilt: "rotate-[5deg] -translate-y-1 sm:rotate-[4deg] lg:rotate-[6deg]",
  },
];

export function FullFunnelSolutionCards({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`flex snap-x snap-mandatory overflow-x-auto px-4 pb-12 pt-5 [scrollbar-width:none] lg:justify-center lg:overflow-visible lg:px-6 lg:pb-16 [&::-webkit-scrollbar]:hidden ${className}`}
    >
      {solutions.map(({ icon: Icon, iconBg, iconColor, title, body, tilt }, index) => (
        <div
          key={title}
          className={`group w-[165px] shrink-0 snap-start transition-transform duration-300 ease-out hover:z-10 hover:rotate-0 hover:translate-y-0 sm:w-[250px] lg:w-[285px] ${
            index !== 0 ? "-ml-4 sm:-ml-6 lg:-ml-8" : ""
          } ${tilt}`}
        >
          <div className="flex h-full flex-col rounded-[10px] bg-white px-4 py-5 shadow-[0_10px_24px_rgba(21,16,10,0.12)] transition-all duration-300 ease-out group-hover:-translate-y-3 group-hover:scale-[1.04] group-hover:shadow-[0_16px_30px_rgba(21,16,10,0.16)] sm:px-6 sm:py-7">
            <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-[6px] sm:mb-5 sm:h-12 sm:w-12 ${iconBg}`}>
              <Icon size={18} strokeWidth={1.8} className={`${iconColor} sm:size-[22px]`} />
            </div>
            <h3 className="mb-2 text-[0.88rem] font-semibold leading-tight text-[#2f3236] sm:mb-2.5 sm:text-[1.25rem]">
              {title}
            </h3>
            <p className="text-[0.62rem] leading-[1.5] text-[#8a8c8e] sm:text-[0.88rem] sm:leading-[1.6]">
              {body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FullFunnelSolutionsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#404040] px-5 py-14 text-[#d9b46d] sm:px-8 sm:py-18 lg:px-12 lg:py-20">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="mb-3 text-[0.8rem] font-medium text-[#d9b46d]">
            About YMG - Legal
          </p>
          <h2 className="font-heading text-[clamp(2rem,4.7vw,3.4rem)] font-normal leading-[1.12] tracking-[0] text-[#d9b46d]">
            Full-Funnel Legal Growth Solutions
          </h2>
        </div>

        <FullFunnelSolutionCards className="mt-12 sm:mt-14" />

        <div className="grid items-center gap-8 text-center lg:grid-cols-[auto_1fr_220px] lg:gap-10 lg:text-left">
          <div className="mx-auto flex h-[86px] w-[86px] items-center justify-center rounded-full border border-[#d9b46d] lg:mx-0 lg:h-[104px] lg:w-[104px]">
            <Scale size={48} strokeWidth={1.25} className="lg:size-[58px]" />
          </div>

          <div>
            <h3 className="font-heading text-[clamp(2rem,4vw,3.35rem)] font-normal leading-tight tracking-[0] text-[#d9b46d]">
              Ready to Grow Your Firm?
            </h3>
            <p className="mt-3 text-[0.9rem] font-medium text-[#ecd08c] sm:text-[1.1rem]">
              Let&apos;s build your pipeline of qualified cases.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Link
              href="/services/case-acquisition"
              className="inline-flex h-12 items-center justify-center rounded-[3px] bg-[#d9b46d] px-8 text-[0.82rem] font-semibold text-[#262626]"
            >
              Get More Cases
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-[3px] border border-[#d9b46d] px-8 text-[0.82rem] font-semibold text-[#d9b46d]"
            >
              Book Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
