import ContactSection from "@/src/components/home/ContactSection";
import ContactStats from "@/src/components/contact/ContactStats";
import CtaSection from "@/src/components/home/CtaSection";

export const metadata = {
  title: "Contact YMG Legal — Let's Grow Your Case Volume",
  description:
    "Connect with our experts to generate high-intent leads and convert them into signed cases that drive consistent, scalable growth.",
};

export default function ContactPage() {
  return (
    <>
      <ContactSection
        eyebrow="Contact Us"
        heading="Let's Grow Your Case Volume"
        body="Connect with our experts to generate high-intent leads and convert them into signed cases that drive consistent, scalable growth."
        variant="light"
      />
      <ContactStats />
      <CtaSection />
    </>
  );
}
