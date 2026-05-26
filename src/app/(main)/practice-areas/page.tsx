import PracticeHero from "@/src/components/practice/PracticeHero";
import VerticalsGrid from "@/src/components/practice/VerticalsGrid";
import WhyVerticals from "@/src/components/practice/WhyVerticals";
import HowItWorksSection from "@/src/components/home/HowItWorksSection";
import PracticeCta from "@/src/components/practice/PracticeCta";

export const metadata = {
  title: "Practice Areas — High-Value Case Verticals | YMG Legal",
  description:
    "From personal injury to mass torts, YMG Legal specializes in high-demand case verticals — Hair Relaxer, Talcum Powder, Tylenol Pregnancy, and more.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <PracticeHero />
      <VerticalsGrid />
      <WhyVerticals />
      <HowItWorksSection />
      <PracticeCta />
    </>
  );
}
