import HowHero from "@/src/components/how/HowHero";
import ConversionJourney from "@/src/components/how/ConversionJourney";
import HowItWorksSection from "@/src/components/home/HowItWorksSection";
import CtaSection from "@/src/components/home/CtaSection";
import ContactSection from "@/src/components/home/ContactSection";

export const metadata = {
  title: "How It Works — From Lead to Signed Cases | YMG Legal",
  description:
    "A simple process designed to help law firms capture, qualify, and convert more cases efficiently with 24/7 coverage.",
};

export default function HowItWorksPage() {
  return (
    <>
      <HowHero />
      <ConversionJourney />
      <HowItWorksSection />
      <CtaSection />
      <ContactSection />
    </>
  );
}
