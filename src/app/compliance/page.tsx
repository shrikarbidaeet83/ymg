import type { Metadata } from "next";
import PolicyLayout from "@/components/layout/PolicyLayout";
import { getPolicy } from "@/lib/policies";

export const metadata: Metadata = {
  title: "Compliance | YMG Legal",
  description:
    "How YMG Legal builds consent, TCPA, lead-source tracking, firm-defined criteria and secure data handling into its legal marketing and intake work.",
};

export default function CompliancePage() {
  return <PolicyLayout policy={getPolicy("compliance")} />;
}
