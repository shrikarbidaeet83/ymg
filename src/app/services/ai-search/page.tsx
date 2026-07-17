import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MobileProofScroller, ProofBar } from "@/components/sections/ProofHighlights";
import AiSearchIntroSection from "@/components/sections/AiSearchIntroSection";
import AiSearchMattersSection from "@/components/sections/AiSearchMattersSection";
import AiSearchOptimizeSection from "@/components/sections/AiSearchOptimizeSection";
import AiSearchProcessSection from "@/components/sections/AiSearchProcessSection";
import ContactConversationContent from "@/components/sections/ContactConversationContent";
import ServiceFaqSection from "@/components/sections/ServiceFaqSection";
import AiSearchBenefitsSection from "@/components/sections/AiSearchBenefitsSection";

export const metadata: Metadata = {
  title: "AI Search Optimization for Law Firms | YMG Legal",
  description:
    "AI search optimization for law firms that builds authority and helps legal brands earn recommendations across AI-powered search experiences.",
};

export default function AiSearchServicePage() {
  return (
    <main className="min-h-screen bg-[#FFF5E0] text-[#424242]">
      <section className="relative isolate min-h-screen overflow-hidden px-5 pb-7 pt-[126px] sm:px-10 sm:pt-[136px] lg:min-h-[604px] lg:px-16 lg:pt-[139px]">
        <Image
          src="/flowers/half-circleBG.svg"
          alt=""
          width={1180}
          height={848}
          priority
          className="pointer-events-none absolute bottom-[104px] left-[7%] z-0 w-[150px] opacity-[0.22] mix-blend-multiply sm:w-[180px] lg:left-[14%] lg:w-[188px]"
        />
        <Image
          src="/images/big_flowers.png"
          alt=""
          width={190}
          height={190}
          priority
          className="pointer-events-none absolute right-[7.5%] top-[258px] z-0 w-[88px] opacity-[0.07] sm:w-[104px] lg:right-[8%] lg:w-[96px]"
        />
        <Image
          src="/images/small_flowers.png"
          alt=""
          width={125}
          height={125}
          priority
          className="pointer-events-none absolute right-[3.2%] top-[312px] z-0 w-[34px] opacity-[0.08] lg:right-[2.2%] lg:w-[36px]"
        />
        <Image
          src="/images/small_flowers.png"
          alt=""
          width={125}
          height={125}
          priority
          className="pointer-events-none absolute right-[18.5%] top-[292px] z-0 hidden w-[34px] opacity-[0.065] lg:block"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-[1014px] flex-col items-center">
          <div className="mx-auto w-full max-w-[670px] text-center">
            <p className="text-[0.8rem] font-normal uppercase leading-none tracking-[0] text-[#444444] sm:text-[0.98rem]">
              AI Search (AIO) For Law Firms
            </p>
            <h1 className="mt-[22px] font-heading text-[2rem] font-bold leading-[1.3] tracking-[0] text-[#424242] sm:text-[2.4rem] lg:text-[2.08rem]">
              Get Recommended by AI. Not
              <span className="mt-2 block">Just Ranked on Search Engines.</span>
            </h1>
            <p className="mx-auto mt-[18px] max-w-[540px] text-[0.78rem] leading-[1.35] text-[#4c4c4c] sm:text-[0.9rem] lg:text-[0.82rem]">
              Structure your website and content so AI-powered search experiences
              recognize your law firm as a trusted authority and recommend you when
              potential clients search for legal help.
            </p>

            <div className="mt-[30px] flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-[18px]">
              <Link
                href="/contact"
                className="inline-flex h-[52px] w-full max-w-[260px] items-center justify-center rounded-[4px] bg-[#d9ae5d] px-8 text-center text-sm font-bold leading-tight text-[#2e3032] shadow-[0_12px_28px_rgba(168,129,62,0.22)] transition-colors hover:bg-[#c89f4e] sm:w-[189px]"
              >
                Book a Strategy Call
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-[52px] w-full max-w-[260px] items-center justify-center rounded-[4px] border border-[#dfbd78] bg-[#fff6e5]/40 px-8 text-center text-sm font-semibold leading-tight text-[#d3a65a] transition-colors hover:bg-[#fff6e5]/70 sm:w-[245px]"
              >
                Get a Free AI Search Audit
              </Link>
            </div>
          </div>

          <div className="w-full pt-[40px] lg:pt-[74px]">
            <div className="mx-auto w-full max-w-[900px] lg:hidden">
              <MobileProofScroller />
            </div>
            <div className="mx-auto hidden w-full max-w-[900px] lg:block">
              <ProofBar className="ymg-proof-bar" />
            </div>
          </div>
        </div>
      </section>
      <AiSearchIntroSection />
      <AiSearchMattersSection />
      <AiSearchOptimizeSection />
      <AiSearchProcessSection />
      <AiSearchBenefitsSection />
      <section className="ymg-section-padding relative isolate overflow-hidden bg-[#D8B26B] text-[#404040]">
        <div className="relative z-10 mx-auto max-w-7xl">
          <ContactConversationContent variant="gold" />
        </div>
      </section>
      <ServiceFaqSection />
    </main>
  );
}
