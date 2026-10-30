import type { Metadata } from "next";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";
import { servicePages } from "@/data/service-pages";

export const metadata: Metadata = {
  title: "AI-Powered Booking for Law Firms | YMG Legal",
  description: "Automated consultation scheduling, routing and reminders, with live intake staff behind it.",
};

export default function AiBookingPage() {
  return <ServiceDetailPage content={servicePages.aiBooking} />;
}
