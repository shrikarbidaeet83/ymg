import type { Metadata } from "next";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";
import { servicePages } from "@/data/service-pages";

export const metadata: Metadata = {
  title: "Mass Tort Leads & Lead Generation for Law Firms | YMG Legal",
  description:
    "Build qualified mass tort claimant pipelines with targeted lead generation, screening, and intake support from YMG Legal.",
};

export default function MassTortLeadsPage() {
  return (
    <ServiceDetailPage
      content={servicePages.massTortLeads}
      crumb={{
        current: "Mass Tort Leads",
        parent: {
          label: "Case Acquisition",
          href: "/services#case-acquisition",
        },
      }}
    />
  );
}
