import type { Metadata } from "next";
import PolicyLayout from "@/components/layout/PolicyLayout";
import { getPolicy } from "@/lib/policies";

export const metadata: Metadata = {
  title: "Accessibility Statement | YMG Legal",
  description: "YMG Legal's commitment to WCAG 2.1 AA and how to get help accessing our website.",
};

export default function AccessibilityPage() {
  return <PolicyLayout policy={getPolicy("accessibility")} />;
}
