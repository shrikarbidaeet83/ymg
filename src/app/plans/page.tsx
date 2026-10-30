import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ContactConversationContent from "@/components/sections/ContactConversationContent";
import { EngagementModels, NextSteps } from "@/components/home/EngagementModels";
import { FullFunnelSolutionCards } from "@/components/sections/FullFunnelSolutionsSection";

export const metadata: Metadata = {
  title: "Engagement Plans | YMG Legal",
  description:
    "Three ways to work with YMG Legal: Lead Generation + Intake, Full-Service Partnership, or Case Support Only. No long-term contracts required to start.",
};

export default function PlansPage() {
  return (
    <div className="bg-[#FFF5E0]">
      <section className="ymg-section-padding relative isolate overflow-hidden !pt-[150px] lg:!pt-[170px]">
        <Image
          src="/flowers/half-circleBG.svg"
          alt=""
          width={1180}
          height={848}
          priority
          className="pointer-events-none absolute right-[-80px] top-[45%] -z-10 w-[320px] -translate-y-1/2 opacity-70 mix-blend-multiply sm:w-[460px] lg:w-[580px]"
        />
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[1rem] font-medium text-[#8a6420]">Engagement plans</p>
          <h1 className="mt-4 max-w-[16ch] text-[2.6rem] leading-[1.04] text-[#2f3236] sm:text-[3.4rem] lg:text-[4rem]">
            Choose how much of the case journey <span className="text-[#c9a14f]">we run for you.</span>
          </h1>
          <p className="mt-6 max-w-[40rem] text-[1.08rem] leading-[1.6] text-[#55585c]">
            Start with lead generation and intake, hand us the whole process, or bring us in for case support only. Every plan
            is scoped to your firm, and no long-term contract is required to start.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-[6px] bg-[#D8B26B] px-6 py-4 font-semibold text-[#2f3236] shadow-[0_8px_18px_rgba(168,123,37,0.22)] hover:bg-[#cfa65b]"
          >
            Get a custom proposal <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <EngagementModels showCompare={false} />

      <section className="ymg-section-padding">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="text-center text-[2rem] leading-[1.1] text-[#2f3236] sm:text-[2.5rem]">What a plan can include</h2>
          <FullFunnelSolutionCards className="mt-6" />
        </div>
      </section>

      <NextSteps />

      <section className="ymg-contact-section ymg-section-padding relative isolate overflow-hidden bg-[#D8B26B] text-[#404040]">
        <div className="relative z-10 mx-auto max-w-7xl">
          <ContactConversationContent variant="gold" homeTypography />
        </div>
      </section>
    </div>
  );
}
