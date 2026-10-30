import type { Metadata } from "next";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";
import { servicePages } from "@/data/service-pages";

export const metadata: Metadata = {
  title: "Pay-Per-Call Leads for Law Firms | YMG Legal",
  description: "Live, pre-screened calls from people who need legal help, warm-transferred to your intake team. Pay for qualified conversations.",
};

export default function PayPerCallPage() {
  return <ServiceDetailPage content={servicePages.payPerCall} />;
}
