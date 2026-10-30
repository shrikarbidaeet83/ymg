import type { Metadata } from "next";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";
import { servicePages } from "@/data/service-pages";

export const metadata: Metadata = {
  title: "Class Action Lead Generation for Law Firms | YMG Legal",
  description: "Class member acquisition, class-definition screening and organized claimant delivery for plaintiff law firms.",
};

export default function ClassActionLeadsPage() {
  return <ServiceDetailPage content={servicePages.classActionLeads} />;
}
