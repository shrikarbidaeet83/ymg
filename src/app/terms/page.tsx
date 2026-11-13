import type { Metadata } from "next";
import PolicyLayout from "@/components/layout/PolicyLayout";
import { getPolicy } from "@/lib/policies";

export const metadata: Metadata = {
  title: "Terms of Use | YMG Legal",
  description:
    "The terms that govern use of ymg-legal.com, YMG Legal landing pages, the client portal and related services.",
};

export default function TermsPage() {
  return <PolicyLayout policy={getPolicy("terms")} />;
}
