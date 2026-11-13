import type { Metadata } from "next";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";
import { servicePages } from "@/data/service-pages";

export const metadata: Metadata = {
  title: "Outbound Client Acquisition for Law Firms | YMG Legal",
  description:
    "Consent-based follow-up and re-engagement that turns unconverted and aged inquiries into booked consultations.",
};

export default function OutboundClientAcquisitionPage() {
  return (
    <ServiceDetailPage
      content={servicePages.outboundClientAcquisition}
      crumb={{
        current: "Outbound Client Acquisition",
        parent: {
          label: "Case Acquisition",
          href: "/services#case-acquisition",
        },
      }}
    />
  );
}
