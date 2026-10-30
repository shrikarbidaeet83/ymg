import { ClipboardList, FileCheck2, Layers, Magnet, UsersRound } from "lucide-react";
import TouchPopCard from "@/components/sections/TouchPopCard";

const solutions = [
  {
    icon: Magnet,
    iconBg: "bg-[#e7eefb]",
    iconColor: "text-[#5b8def]",
    title: "Personal Injury Leads",
    body: "Generate qualified personal injury opportunities aligned with your firm's case criteria.",
    tilt: "-rotate-[5deg] translate-y-2 sm:-rotate-[4deg] lg:-rotate-[6deg]",
  },
  {
    icon: Layers,
    iconBg: "bg-[#e3eefc]",
    iconColor: "text-[#4f7fc0]",
    title: "Mass Tort Leads",
    body: "Build claimant pipelines around the mass tort campaigns your firm is actively pursuing.",
    tilt: "rotate-[3deg] -translate-y-1 sm:rotate-[3deg] lg:rotate-[3deg] lg:-translate-y-2",
  },
  {
    icon: ClipboardList,
    iconBg: "bg-[#f3e9fb]",
    iconColor: "text-[#a06ad4]",
    title: "Legal Intake",
    body: "Extend intake capacity with screening, follow-up, documentation, and communication support.",
    tilt: "rotate-[4deg] -translate-y-2 sm:rotate-[3deg] lg:rotate-[4deg] lg:-translate-y-3",
  },
  {
    icon: FileCheck2,
    iconBg: "bg-[#e4f6ea]",
    iconColor: "text-[#46b06a]",
    title: "Law Firm Marketing",
    body: "Build stronger acquisition channels through search, paid media, landing pages, and performance tracking.",
    tilt: "-rotate-[4deg] translate-y-2 sm:-rotate-[4deg] sm:translate-y-3 lg:-rotate-[4deg]",
  },
  {
    icon: UsersRound,
    iconBg: "bg-[#fbeedd]",
    iconColor: "text-[#d8ae63]",
    title: "Law Firm Support",
    body: "Add flexible operational capacity for defined legal and administrative workflows.",
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
      className={`flex snap-x snap-mandatory overflow-x-auto px-12 pb-20 pt-24 [scrollbar-width:none] sm:px-4 sm:pb-8 sm:pt-5 lg:px-6 lg:pb-3 xl:justify-center xl:overflow-visible [&::-webkit-scrollbar]:hidden ${className}`}
    >
      {solutions.map(({ icon: Icon, iconBg, iconColor, title, body, tilt }, index) => (
        <TouchPopCard
          as="div"
          key={title}
          activeClassName="max-[1100px]:z-10 max-[1100px]:rotate-0 max-[1100px]:translate-y-0"
          className={`group w-[165px] shrink-0 snap-start touch-manipulation transition-transform duration-300 ease-out hover:z-10 hover:rotate-0 hover:translate-y-0 sm:w-[250px] lg:w-[260px] xl:w-[238px] 2xl:w-[262px] ${
            index !== 0 ? "-ml-4 sm:-ml-6 xl:-ml-5" : ""
          } ${tilt}`}
        >
          <div className="flex h-full flex-col rounded-[10px] bg-white px-4 py-5 shadow-[0_10px_24px_rgba(21,16,10,0.12)] transition-all duration-300 ease-out group-data-[active=true]:-translate-y-3 group-data-[active=true]:scale-[1.04] group-hover:-translate-y-3 group-hover:scale-[1.04] group-hover:shadow-[0_16px_30px_rgba(21,16,10,0.16)] sm:px-6 sm:py-7">
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
        </TouchPopCard>
      ))}
    </div>
  );
}

export default function FullFunnelSolutionsSection() {
  return (
    <section className="ymg-section-padding ymg-radial-wide relative isolate overflow-hidden bg-[#404040] pb-6 text-[#d9b46d] sm:pb-8">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="mb-3 text-[0.8rem] font-medium text-[#EBC982]">
            About YMG - Legal
          </p>
          <h2 className="font-heading text-[clamp(2rem,4.7vw,3.4rem)] font-normal leading-[1.12] tracking-[0] text-[#EBC982]">
            Full-Funnel Legal Growth Solutions
          </h2>
        </div>

        <FullFunnelSolutionCards className="mt-12 sm:mt-14" />

      </div>
    </section>
  );
}
