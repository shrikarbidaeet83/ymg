import type { Metadata } from "next";
import Link from "next/link";
import SeoProblemSection from "@/components/sections/SeoProblemSection";
import SeoSolutionSection from "@/components/sections/SeoSolutionSection";
import SeoProcessSection from "@/components/sections/SeoProcessSection";
import SeoServicesSection from "@/components/sections/SeoServicesSection";
import SeoResultsSection from "@/components/sections/SeoResultsSection";
import { MobileProofScroller, ProofBar, ServiceHeroFlowers, ServiceHeroProof } from "@/components/sections/ProofHighlights";
import ServiceFaqSection from "@/components/sections/ServiceFaqSection";
import MotionReveal from "@/components/ui/MotionReveal";

export const metadata: Metadata = {
  title: "SEO for Law Firms | YMG Legal",
  description:
    "Search engine optimization for law firms targeting high-value injury, mass tort, and complex legal searches.",
};

export default function SeoServicePage() {
  return (
    <main className="min-h-screen bg-[#FFF5E0] text-[#424242]">
      <section className="ymg-standard-hero relative isolate overflow-hidden px-5 sm:px-10 lg:px-16">
        <MotionReveal direction="zoom" duration={1.25} amount={0.05} className="pointer-events-none absolute inset-0 z-0">
          <div className="relative h-full w-full"><ServiceHeroFlowers /></div>
        </MotionReveal>
        <div className="relative z-10 mx-auto flex w-full max-w-[1014px] flex-col items-center">
          <MotionReveal direction="soft" duration={0.95} className="ymg-standard-hero-copy">
            <p className="ymg-standard-hero-eyebrow text-[#444444]">
              SEO
            </p>
            <h1 className="ymg-standard-hero-title text-[#424242]">
              Search Engine Optimization
              <span className="mt-2 block">(SEO) for Law Firms</span>
            </h1>
            <p className="ymg-standard-hero-body text-[#4c4c4c]">
              Rank at the top of Google for the high-value searches
              <span className="block">that bring in serious injury, mass tort, and complex</span>
              <span className="block">legal cases not just website traffic.</span>
            </p>

            <div className="ymg-standard-hero-actions flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-[18px]">
              <Link
                href="/contact#booking"
                className="inline-flex h-[52px] w-full max-w-[260px] items-center justify-center rounded-[4px] bg-[#d9ae5d] px-8 text-center text-sm font-bold leading-tight text-[#2e3032] shadow-[0_12px_28px_rgba(168,129,62,0.22)] transition-colors hover:bg-[#c89f4e] sm:w-[189px]"
              >
                Book a Strategy Call
              </Link>
              <Link
                href="/blog"
                className="inline-flex h-[52px] w-full max-w-[260px] items-center justify-center rounded-[4px] border border-[#dfbd78] bg-transparent px-8 text-center text-sm font-semibold leading-tight text-[#d3a65a] transition-colors hover:bg-[#d9ae5d]/10 sm:w-[132px]"
              >
                Case Study
              </Link>
            </div>
          </MotionReveal>
          <MotionReveal direction="up" delay={0.24} duration={0.9} className="w-full"><ServiceHeroProof /></MotionReveal>
        </div>
      </section>
      <MotionReveal direction="left" duration={0.92} amount={0.08}><SeoProblemSection /></MotionReveal>
      <MotionReveal direction="right" duration={0.92} amount={0.08}><SeoSolutionSection /></MotionReveal>
      <MotionReveal direction="up" duration={0.94} amount={0.08}><SeoProcessSection /></MotionReveal>
      <MotionReveal direction="soft" duration={0.96} amount={0.08}><SeoServicesSection /></MotionReveal>
      <MotionReveal direction="zoom" duration={0.96} amount={0.08}><SeoResultsSection /></MotionReveal>

      <section className="ymg-radial-wide bg-[#FFF5E0] px-5 pb-[72px] pt-[28px] text-[#3d4145] sm:px-10 sm:pb-[86px] sm:pt-[38px] lg:px-16 lg:pb-[74px] lg:pt-[30px]">
        <MotionReveal direction="up" duration={0.92} className="mx-auto w-full max-w-[900px] text-center">
          <p className="text-[0.92rem] font-normal text-[#3d4145] sm:text-[1rem]">
            Why Choose YMG Legal
          </p>
          <h2 className="mt-5 font-heading text-[2rem] font-bold leading-[1.35] text-[#3d4145] sm:text-[2.4rem] lg:text-[2.15rem]">
            SEO Experts Legal
            <span className="mt-1 block">Industry Specialists</span>
          </h2>

          <div className="mt-10 w-full lg:mt-[44px]">
            <div className="mx-auto w-full lg:hidden">
              <MobileProofScroller />
            </div>
            <div className="mx-auto hidden w-full lg:block">
              <ProofBar darkGold className="ymg-proof-bar" />
            </div>
          </div>
        </MotionReveal>
      </section>
      <MotionReveal direction="up" duration={0.9} amount={0.08}><ServiceFaqSection /></MotionReveal>
    </main>
  );
}
