import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Marketing & Intake Insights | YMG Legal Blog",
  description:
    "Articles on case acquisition, legal intake and law firm marketing for personal injury and mass tort firms.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
