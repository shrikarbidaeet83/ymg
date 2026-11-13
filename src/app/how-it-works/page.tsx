import type { Metadata } from "next";
import ClientProof from "@/components/site/ClientProof";
import HowItWorksFunnel from "@/components/sections/HowItWorksFunnel";
import LeadWheel from "@/components/home/LeadWheel";
import { NextSteps } from "@/components/home/EngagementModels";
import ScrollMotion from "@/components/home/ScrollMotion";
import PhotoCard from "@/components/site/PhotoCard";
import { BookCallButton } from "@/components/site/Cta";

export const metadata: Metadata = {
  title: "How It Works | YMG Legal",
  description:
    "How YMG Legal takes a lead from first search to signed retainer and case support: acquire, qualify, intake, convert, support.",
};

const facts = [
  { value: "15+", label: "years in legal marketing" },
  { value: "24/7", label: "live intake coverage" },
  { value: "6", label: "plaintiff practice areas" },
];

/* The people behind the process: a photo with its key points, and three plain facts. */
function People() {
  return (
    <section className="bg-white px-5 py-24 sm:px-10 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-10 md:grid-cols-2 md:grid-rows-[auto_1fr] md:gap-x-12 lg:gap-x-20">
        <h2
          data-reveal
          className="max-w-[18ch] self-end text-[clamp(1.93rem,3.52vw,3.2rem)] leading-[1.03] tracking-[-0.015em] text-[#0B231D] md:col-start-2 md:row-start-1"
        >
          Real people at <span className="text-[#8C6B22]">every stage.</span>
        </h2>
        <div
          data-reveal
          className="md:col-start-1 md:row-span-2 md:row-start-1"
        >
          <PhotoCard
            photo={{
              src: "/images/services/team-headsets.jpg",
              alt: "Two intake specialists on headsets at their desks",
            }}
            highlights={[
              "Answered live, day or night",
              "Your criteria at every step",
            ]}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div data-reveal className="self-start md:col-start-2 md:row-start-2">
          <p className="max-w-[30rem] text-[1.12rem] leading-[1.6] text-[#4E5A54]">
            Software routes the lead, but people win the case. A trained,
            US-based team answers, screens and follows up, and your firm sees
            every step.
          </p>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-[#0B231D]/12 pt-8">
            {facts.map(({ value, label }) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="ymg-num text-[clamp(2rem,3.4vw,2.8rem)] leading-none text-[#0B231D]">
                  {value}
                </dd>
                <dd className="mt-2 text-[0.92rem] leading-snug text-[#4E5A54]">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* The close: a short line and the two ways to reach us. */
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
          className="max-w-[19ch] text-[clamp(2.18rem,4.48vw,4rem)] leading-[1] tracking-[-0.02em]"
        >
          See it run on <span className="text-[#D6B263]">your cases.</span>
        </h2>
        <div data-reveal className="flex flex-col gap-3 sm:flex-row lg:pb-3">
          <BookCallButton />
        </div>
      </div>
    </section>
  );
}

export default function HowItWorksPage() {
  return (
    <div className="ymg-site">
      <LeadWheel />
      <HowItWorksFunnel />
      <People />
      <ClientProof
        photo={{
          src: "/images/home/intake-team.jpg",
          alt: "An intake team on a call",
        }}
        start={4}
        tone="mist"
      />
      <NextSteps />
      <Close />
      <ScrollMotion />
    </div>
  );
}
