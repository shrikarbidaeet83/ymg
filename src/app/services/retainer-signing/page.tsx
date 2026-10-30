import type { Metadata } from "next";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";
import { servicePages } from "@/data/service-pages";

export const metadata: Metadata = {
  title: "Legal Contract & Retainer Services | YMG Legal",
  description: "E-sign retainers, guided signing, follow-up and secure document handling, from qualified lead to signed client.",
};

export default function RetainerSigningPage() {
  return <ServiceDetailPage content={servicePages.retainerSigning} />;
}
