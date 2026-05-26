import FaqSection from "@/src/components/shared/FaqSection";
import ServicesSection from "@/src/components/home/ServicesSection";
import TestimonialsSection from "@/src/components/home/TestimonialsSection";

export const metadata = {
  title: "FAQs — YMG Legal",
  description:
    "Find answers to common questions about YMG Legal's marketing services, intake solutions, lead generation, and law firm growth.",
};

export default function FaqsPage() {
  return (
    <>
      <FaqSection />
      <ServicesSection variant="dark" />
      <TestimonialsSection />
    </>
  );
}
