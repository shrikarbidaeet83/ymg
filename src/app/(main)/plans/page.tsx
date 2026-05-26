import PlansHero from "@/src/components/plans/PlansHero";
import ServicesSection from "@/src/components/home/ServicesSection";
import CtaSection from "@/src/components/home/CtaSection";

export const metadata = {
  title: "Plans & Pricing — YMG Legal",
  description:
    "Call services, intake services, and contract & retainer plans designed to grow your law firm's revenue and client engagement.",
};

export default function PlansPage() {
  return (
    <>
      <PlansHero />
      <ServicesSection variant="dark" />
      <CtaSection />
    </>
  );
}
