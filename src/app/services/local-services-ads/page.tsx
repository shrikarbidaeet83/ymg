import type { Metadata } from "next";
import Link from "next/link";
import { ServiceHeroFlowers, ServiceHeroProof } from "@/components/sections/ProofHighlights";
import LocalServicesAdsIntroSection from "@/components/sections/LocalServicesAdsIntroSection";
import LocalServicesAdsMatterSection from "@/components/sections/LocalServicesAdsMatterSection";
import LocalServicesAdsManageSection from "@/components/sections/LocalServicesAdsManageSection";
import LocalServicesAdsProcessSection from "@/components/sections/LocalServicesAdsProcessSection";
import LocalServicesAdsBenefitsSection from "@/components/sections/LocalServicesAdsBenefitsSection";
import ContactConversationContent from "@/components/sections/ContactConversationContent";
import ServiceFaqSection from "@/components/sections/ServiceFaqSection";

export const metadata: Metadata = {
  title: "Local Services Ads for Law Firms | YMG Legal",
  description:
    "Local Services Ads management for law firms that helps generate ready-to-call legal prospects through Google's pay-per-lead platform.",
};

export default function LocalServicesAdsPage() {
  return (
    <main className="min-h-screen bg-[#FFF5E0] text-[#424242]">
      <section className="ymg-standard-hero relative isolate overflow-hidden px-5 sm:px-10 lg:px-16">
        <ServiceHeroFlowers />

        <div className="relative z-10 mx-auto flex w-full max-w-[1014px] flex-col items-center">
          <div className="ymg-standard-hero-copy">
            <p className="ymg-standard-hero-eyebrow text-[#444444]">
              Local Services Ads (LSA) For Law Firms
            </p>
            <h1 className="ymg-standard-hero-title text-[#424242]">
              Be the First Law Firm
              <span className="mt-2 block">Clients Call.</span>
            </h1>
            <p className="ymg-standard-hero-body text-[#4c4c4c]">
              Dominate Google&apos;s pay-per-lead Local Services Ads so your firm
              appears first when prospects are actively searching for legal
              representation and ready to hire.
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
                Get a Free LSA Audit
              </Link>
            </div>
          </div>

          <ServiceHeroProof />
        </div>
      </section>
      <LocalServicesAdsIntroSection />
      <LocalServicesAdsMatterSection />
      <LocalServicesAdsManageSection />
      <LocalServicesAdsProcessSection />
      <LocalServicesAdsBenefitsSection />
      <section className="ymg-section-padding relative isolate overflow-hidden bg-[#D8B26B] text-[#404040]">
        <div className="relative z-10 mx-auto max-w-7xl">
          <ContactConversationContent variant="gold" />
        </div>
      </section>
      <ServiceFaqSection />
    </main>
  );
}
