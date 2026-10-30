import type { Metadata } from "next";
import ActiveCampaignsSection from "@/components/sections/ActiveCampaignsSection";
import HomeHero from "@/components/home/HomeHero";
import ClientLogoStrip from "@/components/home/ClientLogoStrip";
import { TestimonialCardsShowcase } from "@/components/sections/TestimonialContactSection";
import ServiceShowcase from "@/components/home/ServiceShowcase";
import { EngagementModels } from "@/components/home/EngagementModels";
import { OnePartner, ProblemStats } from "@/components/home/HomeSections";
import { FinalCta, HomeFaq } from "@/components/home/HomeClosing";

export const metadata: Metadata = {
  title: "YMG Legal | Legal Marketing, Lead Generation & Law Firm Support",
  description:
    "YMG Legal helps plaintiff law firms with personal injury and mass tort lead generation, legal intake, law firm marketing, and outsourced legal support.",
};

// Home story, kept to one idea per section on one cream page (dark only in contained panels):
// hero → who trusts YMG → what YMG runs → what firms are losing → practice areas → how to work with
// YMG → reviews → why YMG over the alternatives → common questions → one call to action.
// The lead journey, roadmap and contact form live on How It Works, Plans and Contact.
export default function HomePage() {
  return (
    <div className="ymg-home-page">
      <HomeHero />
      <ClientLogoStrip />
      <ServiceShowcase />
      <ProblemStats />
      <ActiveCampaignsSection />
      <EngagementModels />
      <TestimonialCardsShowcase />
      <OnePartner />
      <HomeFaq />
      <FinalCta />
    </div>
  );
}
