import type { Metadata } from "next";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";
import { servicePages } from "@/data/service-pages";

export const metadata: Metadata = {
  title: "Outsourced Paralegal Services for Law Firms | YMG Legal",
  description: "Extend your firm's capacity with outsourced paralegal, administrative, case support, documentation, and legal operations services.",
};

export default function LawFirmSupportPage() {
  return <ServiceDetailPage content={servicePages.lawFirmSupport} />;
}
