import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SeoProblemSection from "@/components/sections/SeoProblemSection";
import SeoSolutionSection from "@/components/sections/SeoSolutionSection";
import SeoProcessSection from "@/components/sections/SeoProcessSection";
import SeoServicesSection from "@/components/sections/SeoServicesSection";
import SeoResultsSection from "@/components/sections/SeoResultsSection";
import { MobileProofScroller, ProofBar } from "@/components/sections/ProofHighlights";
import ServiceFaqSection from "@/components/sections/ServiceFaqSection";

export const metadata: Metadata = {
  title: "SEO for Law Firms | YMG Legal",
  description:
    "Search engine optimization for law firms targeting high-value injury, mass tort, and complex legal searches.",
};

export default function SeoServicePage() {
  return (
    <main className="min-h-screen bg-[#FFF5E0] text-[#424242]">
      <section className="relative isolate flex min-h-screen overflow-hidden px-5 pb-12 pt-[136px] sm:px-10 sm:pt-[146px] lg:px-16 lg:pt-[150px]">
        <Image
          src="/flowers/half-circleBG.svg"
          alt=""
          width={1180}
          height={848}
          priority
          className="pointer-events-none absolute bottom-[-18px] left-[7%] z-0 w-[150px] opacity-[0.22] mix-blend-multiply sm:w-[180px] lg:left-[14%] lg:w-[188px]"
        />
        <Image
          src="/images/big_flowers.png"
          alt=""
          width={190}
          height={190}
          priority
          className="pointer-events-none absolute right-[7.5%] top-[248px] z-0 w-[88px] opacity-[0.07] sm:w-[104px] lg:right-[8%] lg:w-[96px]"
        />
        <Image
          src="/images/small_flowers.png"
          alt=""
          width={125}
          height={125}
          priority
          className="pointer-events-none absolute right-[3.2%] top-[302px] z-0 w-[34px] opacity-[0.08] lg:right-[2.2%] lg:w-[36px]"
        />
        <Image
          src="/images/small_flowers.png"
          alt=""
          width={125}
          height={125}
          priority
          className="pointer-events-none absolute right-[18.5%] top-[278px] z-0 hidden w-[34px] opacity-[0.065] lg:block"
        />
        <Image
          src="/images/small_flowers.png"
          alt=""
          width={125}
          height={125}
          priority
          className="pointer-events-none absolute left-[28%] top-[286px] z-0 hidden w-[30px] opacity-[0.04] lg:block"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-[1014px] flex-col items-center">
          <div className="mx-auto w-full max-w-[650px] text-center">
            <p className="text-[0.82rem] font-normal uppercase leading-none text-[#444444] sm:text-[0.98rem]">
              SEO
            </p>
            <h1 className="mt-[22px] font-heading text-[2.05rem] font-bold leading-[1.25] tracking-[0] text-[#424242] sm:text-[2.45rem] lg:text-[2.18rem]">
              Search Engine Optimization
              <span className="mt-2 block">(SEO) for Law Firms</span>
            </h1>
            <p className="mx-auto mt-[16px] max-w-[470px] text-[0.8rem] leading-[1.35] text-[#4c4c4c] sm:text-[0.9rem] lg:text-[0.82rem]">
              Rank at the top of Google for the high-value searches
              <span className="block">that bring in serious injury, mass tort, and complex</span>
              <span className="block">legal cases not just website traffic.</span>
            </p>

            <div className="mt-[20px] flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-[18px]">
              <Link
                href="/contact"
                className="inline-flex h-[52px] w-full max-w-[260px] items-center justify-center rounded-[4px] bg-[#d9ae5d] px-8 text-center text-sm font-bold leading-tight text-[#2e3032] shadow-[0_12px_28px_rgba(168,129,62,0.22)] transition-colors hover:bg-[#c89f4e] sm:w-[189px]"
              >
                Book a Strategy Call
              </Link>
              <Link
                href="/blog"
                className="inline-flex h-[52px] w-full max-w-[260px] items-center justify-center rounded-[4px] border border-[#dfbd78] bg-[#fff6e5]/40 px-8 text-center text-sm font-semibold leading-tight text-[#d3a65a] transition-colors hover:bg-[#fff6e5]/70 sm:w-[132px]"
              >
                Case Study
              </Link>
            </div>
          </div>
        </div>
      </section>
      <SeoProblemSection />
      <SeoSolutionSection />
      <SeoProcessSection />
      <SeoServicesSection />
      <SeoResultsSection />

      <section className="bg-[#FFF5E0] px-5 pb-[72px] pt-[28px] text-[#3d4145] sm:px-10 sm:pb-[86px] sm:pt-[38px] lg:px-16 lg:pb-[74px] lg:pt-[30px]">
        <div className="mx-auto w-full max-w-[900px] text-center">
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
              <ProofBar className="ymg-proof-bar" />
            </div>
          </div>
        </div>
      </section>
      <ServiceFaqSection />
    </main>
  );
}
