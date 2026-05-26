import AboutHero from "@/src/components/about/AboutHero";
import ScaleCtaBar from "@/src/components/about/ScaleCtaBar";
import MissionBand from "@/src/components/about/MissionBand";
import TrustedBySection from "@/src/components/home/TrustedBySection";
import TestimonialsSection from "@/src/components/home/TestimonialsSection";
import ContactSection from "@/src/components/home/ContactSection";

export const metadata = {
  title: "About YMG Legal — Driving Case Growth for Modern Law Firms",
  description:
    "YMG Legal combines performance marketing, expert intake, and conversion systems to deliver real, measurable results for law firms.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ScaleCtaBar />
      <TrustedBySection />
      <MissionBand />
      <div style={{ background: "var(--grad-walnut)" }}>
        <TestimonialsSection variant="dark" />
      </div>
      <ContactSection />
    </>
  );
}
