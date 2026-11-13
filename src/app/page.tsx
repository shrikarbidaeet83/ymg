import type { Metadata } from "next";
import ActiveCampaignsSection from "@/components/sections/ActiveCampaignsSection";
import ServiceShowcase from "@/components/home/ServiceShowcase";
import { EngagementModels } from "@/components/home/EngagementModels";
import { HomeFaq } from "@/components/home/HomeClosing";
import {
  CaseQuote,
  CloseStory,
  ComplianceBand,
  CostStory,
  FilmFeature,
  TrustBand,
  StoryHero,
  TailoredServices,
} from "@/components/home/HomeStory";
import { TestimonialCardsShowcase } from "@/components/sections/TestimonialContactSection";
import ScrollMotion from "@/components/home/ScrollMotion";

export const metadata: Metadata = {
  title: "YMG Legal | Legal Marketing, Lead Generation & Law Firm Support",
  description:
    "YMG Legal helps plaintiff law firms with personal injury and mass tort lead generation, legal intake, law firm marketing, and outsourced legal support.",
};

// The home page is one designed brand page (the visitor's dark theme applies on other pages):
// the people on film, the four service categories in turn, client words in rotation → the brand film, full screen then aside → the firms → the four services, each with a picture → what slow intake costs →
// the seven services, each shown working → practice areas → three ways to work with YMG → proof → questions → the close.
export default function HomePage() {
  return (
    <div className="ymg-home2">
      <StoryHero />
      <FilmFeature />
      <TrustBand />
      <TailoredServices />
      <CostStory />
      <ComplianceBand />
      <ServiceShowcase />
      <ActiveCampaignsSection />
      <EngagementModels />
      <TestimonialCardsShowcase>
        <CaseQuote />
      </TestimonialCardsShowcase>
      <HomeFaq />
      <CloseStory />
      <ScrollMotion />
    </div>
  );
}
