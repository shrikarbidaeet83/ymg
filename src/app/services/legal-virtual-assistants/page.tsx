import type { Metadata } from "next";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";
import { servicePages } from "@/data/service-pages";

export const metadata: Metadata = {
  title: "Legal Virtual Assistants for Law Firms | YMG Legal",
  description: "Dedicated, US-based legal virtual assistants for client communication, scheduling, intake admin, records and data entry.",
};

export default function LegalVirtualAssistantsPage() {
  return <ServiceDetailPage content={servicePages.legalVirtualAssistants} />;
}
