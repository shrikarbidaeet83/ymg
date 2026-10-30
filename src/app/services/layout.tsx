import type { Metadata } from "next";

// The services index is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: "Legal Marketing, Lead Generation & Intake Services | YMG Legal",
  description:
    "Personal injury, MVA and mass tort lead generation, 24/7 legal intake, law firm marketing, and outsourced paralegal and law firm support from YMG Legal.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
