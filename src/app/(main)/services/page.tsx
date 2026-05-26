import ServicesHero from "@/src/components/services/ServicesHero";
import ServicesIncludes from "@/src/components/services/ServicesIncludes";
import SystemWorks from "@/src/components/services/SystemWorks";
import WhyChoose from "@/src/components/services/WhyChoose";
import FaqSection from "@/src/components/shared/FaqSection";
import ContactSection from "@/src/components/home/ContactSection";

export const metadata = {
  title: "Services — Professional Legal Answering & Intake | YMG Legal",
  description:
    "24/7 legal call handling and intake support. Live specialists, bilingual support, and instant lead routing for law firms.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesIncludes />
      <SystemWorks />
      <WhyChoose />
      <FaqSection />
      <ContactSection />
    </>
  );
}
