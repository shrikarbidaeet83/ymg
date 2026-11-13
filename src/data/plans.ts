import { FolderOpen, Megaphone, Users, type LucideIcon } from "lucide-react";

// From the YMG Service Deck, "How we work with your firm" and "Next steps" (confirmed by YMG).
export const pillars = [
  "Case generation",
  "Lead qualification",
  "Intake",
  "Follow-up & automation",
  "Case onboarding",
  "Case support",
];

export const models: {
  name: string;
  body: string;
  bestFor: string;
  Icon: LucideIcon;
  includes: boolean[];
  featured?: boolean;
}[] = [
  {
    name: "Lead Generation + Intake",
    body: "We run campaigns, qualify leads and handle intake. Your team manages everything after the retainer is signed.",
    bestFor: "Firms with strong in-house case management",
    Icon: Megaphone,
    includes: [true, true, true, false, false, false],
  },
  {
    name: "Full-Service Partnership",
    body: "End to end, from ad campaign to signed retainer to case support. We operate as an extension of your firm.",
    bestFor: "Firms scaling without adding headcount",
    Icon: Users,
    includes: [true, true, true, true, true, true],
    featured: true,
  },
  {
    name: "Case Support Only",
    body: "Medical records, chronologies, document retrieval and case organization for firms with intake handled.",
    bestFor: "High-volume firms with admin backlogs",
    Icon: FolderOpen,
    includes: [false, false, false, false, false, true],
  },
];
