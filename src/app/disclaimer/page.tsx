import type { Metadata } from "next";
import PolicyLayout from "@/components/layout/PolicyLayout";
import { getPolicy } from "@/lib/policies";

export const metadata: Metadata = {
  title: "Legal Disclaimer | YMG Legal",
  description:
    "YMG Legal is a legal marketing and support company, not a law firm, and does not provide legal advice.",
};

export default function DisclaimerPage() {
  return <PolicyLayout policy={getPolicy("disclaimer")} />;
}
