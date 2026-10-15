import type { Metadata } from "next";
import PolicyLayout from "@/components/layout/PolicyLayout";
import { getPolicy } from "@/lib/policies";

export const metadata: Metadata = {
  title: "SMS & Call Consent Terms | YMG Legal",
  description: "How YMG Legal and participating law firms may call and text you, and how to opt out.",
};

export default function SmsTermsPage() {
  return <PolicyLayout policy={getPolicy("sms-terms")} />;
}
