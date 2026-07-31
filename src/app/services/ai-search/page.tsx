import type { Metadata } from "next";
import Link from "next/link";
import { ServiceHeroFlowers, ServiceHeroProof } from "@/components/sections/ProofHighlights";
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
      <section className="ymg-standard-hero relative isolate overflow-hidden px-5 sm:px-10 lg:px-16">
        <ServiceHeroFlowers />
        <div className="relative z-10 mx-auto flex w-full max-w-[1014px] flex-col items-center">
          <div className="ymg-standard-hero-copy">
            <p className="ymg-standard-hero-eyebrow text-[#444444]">
              AI Search (AIO) For Law Firms
            </p>
            <h1 className="ymg-standard-hero-title text-[#424242]">
              Get Recommended by AI. Not
              <span className="mt-2 block">Just Ranked on Search Engines.</span>
            </h1>
            <p className="ymg-standard-hero-body text-[#4c4c4c]">
              Structure your website and content so AI-powered search experiences
              recognize your law firm as a trusted authority and recommend you when
              potential clients search for legal help.
            </p>

            <div className="ymg-standard-hero-actions flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-[18px]">
              <Link
                href="/contact#booking"
                className="inline-flex h-[52px] w-full max-w-[260px] items-center justify-center rounded-[4px] bg-[#d9ae5d] px-8 text-center text-sm font-bold leading-tight text-[#2e3032] shadow-[0_12px_28px_rgba(168,129,62,0.22)] transition-colors hover:bg-[#c89f4e] sm:w-[189px]"
              >
                Book a Strategy Call
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-[52px] w-full max-w-[260px] items-center justify-center rounded-[4px] border border-[#dfbd78] bg-transparent px-8 text-center text-sm font-semibold leading-tight text-[#d3a65a] transition-colors hover:bg-[#d9ae5d]/10 sm:w-[245px]"
              >
                Get a Free AI Search Audit
              </Link>
            </div>
          </div>

          <ServiceHeroProof />
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
