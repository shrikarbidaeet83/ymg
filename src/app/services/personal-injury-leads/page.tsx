import type { Metadata } from "next";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";
import { servicePages } from "@/data/service-pages";

export const metadata: Metadata = {
  title: "Personal Injury Lead Generation for Law Firms | YMG Legal",
  description: "Generate qualified personal injury leads for your law firm with MVA and selected PI campaigns built around your case criteria.",
};

export default function PersonalInjuryLeadsPage() {
  return <ServiceDetailPage content={servicePages.personalInjuryLeads} />;
}
