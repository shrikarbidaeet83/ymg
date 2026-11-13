import type { Metadata } from "next";
import PolicyLayout from "@/components/layout/PolicyLayout";
import { getPolicy } from "@/lib/policies";

export const metadata: Metadata = {
  title: "Privacy Policy | YMG Legal",
  description:
    "How YMG Legal collects, uses, shares and protects personal information, and how to exercise your privacy choices.",
};

export default function PrivacyPolicyPage() {
  return <PolicyLayout policy={getPolicy("privacy-policy")} />;
}
