import type { Metadata } from "next";
import PolicyLayout from "@/components/layout/PolicyLayout";
import { getPolicy } from "@/lib/policies";

export const metadata: Metadata = {
  title: "Cookie Policy | YMG Legal",
  description: "The cookies and similar technologies YMG Legal uses and how to manage your choices.",
};

export default function CookiePolicyPage() {
  return <PolicyLayout policy={getPolicy("cookie-policy")} />;
}
