import type { Metadata } from "next";
import ClientProof from "@/components/site/ClientProof";
import ScrollMotion from "@/components/home/ScrollMotion";
import PracticeExplorer from "@/components/site/PracticeExplorer";
import { BookCallButton } from "@/components/site/Cta";
import CriteriaScreening from "@/components/illustrations/CriteriaScreening";
import { activeItems, practiceAreas } from "@/data/practice-areas";
import HeroBackdrop from "@/components/site/HeroBackdrop";
import HeroPoints from "@/components/site/HeroPoints";

export const metadata: Metadata = {
  title: "Practice Areas & Active Campaigns | YMG Legal",
  description:
    "Case acquisition and intake support for plaintiff law firms across personal injury, mass torts, class action, medical malpractice, workers' compensation and Social Security disability.",
};

const caseTypes = practiceAreas.reduce((n, a) => n + activeItems(a).length, 0);

function Hero() {
  return (
    <section className="ymg-dark-hero relative isolate overflow-hidden bg-[#0B231D] px-5 pb-20 pt-32 text-[#F5F1E8] sm:px-10 sm:pt-36 lg:px-12 lg:pb-24">
      <HeroBackdrop src="/images/services/retainer.jpg" />
      <div className="mx-auto grid max-w-[1320px] gap-8">
        <h1
          data-reveal
          className="max-w-[18ch] text-[clamp(2.18rem,4.48vw,4rem)] leading-[1] tracking-[-0.02em]"
        >
          Six practice areas.{" "}
          <span className="text-[#D6B263]">Your criteria.</span>
        </h1>
        <div data-reveal data-reveal-delay="200" className="max-w-[40rem]">
          <p className="max-w-[32rem] text-[1.12rem] leading-[1.65] text-[#C9C3B4]">
            Active campaign and intake experience across the plaintiff practice
            areas. Every campaign is built on the case criteria your firm sets.
            Campaigns, jurisdictions and availability change over time.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <BookCallButton label="Ask about current campaigns" />
          </div>
          <HeroPoints
            points={[`${caseTypes} case types`, "6 plaintiff practice areas"]}
          />
        </div>
      </div>
    </section>
  );
}

/* Every campaign is screened on the firm's criteria: the copy beside the live screening scene. */
function Criteria() {
  return (
    <section className="bg-[#F0F4F1] px-5 py-24 sm:px-10 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-6">
        <h2
          data-reveal
          className="max-w-[19ch] self-end text-[clamp(1.93rem,3.52vw,3.2rem)] leading-[1.03] tracking-[-0.015em] text-[#0B231D] lg:col-start-1 lg:row-start-1"
        >
          Every campaign runs on{" "}
          <span className="text-[#8C6B22]">your criteria.</span>
        </h2>
        <div
          data-reveal
          className="min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1"
        >
          <CriteriaScreening />
        </div>
        <p
          data-reveal
          className="max-w-[32rem] self-start text-[1.1rem] leading-[1.65] text-[#4E5A54] lg:col-start-1 lg:row-start-2"
        >
          Geography, timing, injury, treatment, liability, existing
          representation: your firm sets the requirements, and every inquiry is
          screened against them before it reaches your team.
        </p>
      </div>
    </section>
  );
}

function Close() {
  return (
    <section className="relative isolate overflow-hidden bg-[#071813] px-5 py-28 text-[#F5F1E8] sm:px-10 lg:px-12 lg:py-36">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(45%_70%_at_85%_50%,rgba(214,178,99,0.14),transparent_70%)]"
      />
      <div className="mx-auto flex max-w-[1320px] flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <h2
          data-reveal
          className="max-w-[20ch] text-[clamp(2.18rem,4.48vw,4rem)] leading-[1] tracking-[-0.02em]"
        >
          Ask what&apos;s <span className="text-[#D6B263]">running now.</span>
        </h2>
        <div data-reveal className="flex flex-col gap-3 sm:flex-row lg:pb-3">
          <BookCallButton label="Ask about current campaigns" />
        </div>
      </div>
    </section>
  );
}

export default function PracticeAreasPage() {
  return (
    <div className="ymg-site">
      <Hero />
      <section className="bg-white px-5 py-24 sm:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <PracticeExplorer />
        </div>
      </section>
      <Criteria />
      <ClientProof
        photo={{
          src: "/images/services/retainer.jpg",
          alt: "A client signing a retainer agreement",
        }}
        start={3}
        tone="white"
      />
      <Close />
      <ScrollMotion />
    </div>
  );
}
