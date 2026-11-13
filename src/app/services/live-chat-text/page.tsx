import type { Metadata } from "next";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";
import { servicePages } from "@/data/service-pages";

export const metadata: Metadata = {
  title: "Live Chat & Text Services for Law Firms | YMG Legal",
  description:
    "Live website chat and two-way texting staffed by trained intake specialists, with screening and handoff to intake.",
};

export default function LiveChatTextPage() {
  return (
    <ServiceDetailPage
      content={servicePages.liveChatText}
      crumb={{
        current: "Live Chat & Text",
        parent: { label: "Legal Intake", href: "/services/legal-intake" },
      }}
    />
  );
}
