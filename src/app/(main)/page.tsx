import HeroSection        from "@/src/components/home/HeroSection";
import AboutSection       from "@/src/components/home/AboutSection";
import ServicesSection    from "@/src/components/home/ServicesSection";
import HowItWorksSection  from "@/src/components/home/HowItWorksSection";
import ResultsSection     from "@/src/components/home/ResultsSection";
import TrustedBySection   from "@/src/components/home/TrustedBySection";
import TestimonialsSection from "@/src/components/home/TestimonialsSection";
import PracticeAreasSection from "@/src/components/home/PracticeAreasSection";
import CtaSection         from "@/src/components/home/CtaSection";
import ContactSection     from "@/src/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HowItWorksSection />
      <ResultsSection />
      <TrustedBySection />
      <TestimonialsSection />
      <PracticeAreasSection />
      <CtaSection />
      <ContactSection />
    </>
  );
}
