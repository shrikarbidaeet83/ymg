import type { Metadata } from "next";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";
import { servicePages } from "@/data/service-pages";

export const metadata: Metadata = {
  title: "Legal Intake Services for Law Firms | YMG Legal",
  description:
    "Extend your law firm's intake capacity with legal call handling, lead screening, follow-up, qualification, and intake support.",
};

export default function LegalIntakePage() {
  return (
    <ServiceDetailPage
      content={servicePages.legalIntake}
      crumb={{ current: "Legal Intake" }}
    />
  );
}
