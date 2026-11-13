import type { Metadata } from "next";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";
import { servicePages } from "@/data/service-pages";

export const metadata: Metadata = {
  title: "MVA Leads for Law Firms | Motor Vehicle Accident Lead Generation",
  description:
    "YMG Legal provides qualified motor vehicle accident leads and intake support for personal injury law firms across selected markets.",
};

export default function MvaLeadsPage() {
  return (
    <ServiceDetailPage
      content={servicePages.mvaLeads}
      crumb={{
        current: "MVA Leads",
        parent: {
          label: "Case Acquisition",
          href: "/services#case-acquisition",
        },
      }}
    />
  );
}
