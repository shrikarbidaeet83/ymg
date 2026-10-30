import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | YMG Legal",
  description: "Answers about YMG Legal's case acquisition, legal intake, marketing and law firm support services.",
};

export default function FaqsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
