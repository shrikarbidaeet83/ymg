import {
  HandCoins,
  Landmark,
  ShieldPlus,
  Baby,
  Briefcase,
  CarFront,
  CarTaxiFront,
  DatabaseZap,
  Footprints,
  HardHat,
  Pill,
  Scale,
  ShieldAlert,
  Smartphone,
  SprayCan,
  Sprout,
  Stethoscope,
  Syringe,
  Truck,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";

/*
 * Practice areas and the case types / campaigns under each one, combined from the old
 * ymg-legal.com site, the Design & Content Guide and the YMG Service Deck (confirmed by YMG).
 * Every section that lists practice areas reads from here, so a campaign is
 * switched on or off in one place (set `active: false` to hide it everywhere).
 */

export type PracticeItem = {
  /** Two-line label used in the icon strips: label on line 1, detail on line 2. */
  label: string;
  detail: string;
  /** Short name used for chips. */
  short: string;
  /** One-line summary for cards and the Practice Areas page. */
  description: string;
  /** Either a PNG from /public or a lucide icon. */
  icon?: string;
  Icon?: LucideIcon;
  active: boolean;
  /** Federal multidistrict litigation number and court, checked against the JPML's pending-MDL reports (2025–26). */
  mdl?: string;
};

export type PracticeArea = {
  slug: string;
  title: string;
  description: string;
  /** A PNG from /public, or a lucide icon for areas without artwork. */
  icon?: string;
  Icon?: LucideIcon;
  iconBackground: string;
  href: string;
  items: PracticeItem[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "personal-injury",
    title: "Personal Injury",
    description: "Qualified personal injury opportunities built around your firm's case criteria and markets.",
    icon: "/Wha-We-Serve/personal-injury.png",
    iconBackground: "bg-[#efd8ff]",
    href: "/services/personal-injury-leads",
    items: [
      {
        label: "Motor Vehicle",
        detail: "Accidents",
        short: "Motor Vehicle",
        description: "Car, auto and other motor vehicle accident claims.",
        Icon: CarFront,
        active: true,
      },
      {
        label: "Truck &",
        detail: "Commercial",
        short: "Truck & Commercial",
        description: "Truck and commercial vehicle accident opportunities.",
        Icon: Truck,
        active: true,
      },
      {
        label: "Rideshare",
        detail: "Accidents",
        short: "Rideshare",
        description: "Accidents involving rideshare vehicles and drivers.",
        Icon: CarTaxiFront,
        active: true,
      },
      {
        label: "Slip & Fall",
        detail: "Incidents",
        short: "Slip & Fall",
        description: "Premises incidents where an unsafe condition caused a fall and injury.",
        Icon: Footprints,
        active: true,
      },
      {
        label: "Premises",
        detail: "Liability",
        short: "Premises liability",
        description: "Injuries caused by unsafe conditions on someone else's property.",
        Icon: ShieldAlert,
        active: true,
      },
      {
        label: "Workplace",
        detail: "Injuries",
        short: "Workplace Injuries",
        description: "Injuries suffered on the job or at a work site.",
        Icon: HardHat,
        active: true,
      },
    ],
  },
  {
    slug: "mass-torts",
    title: "Mass Torts",
    description: "Claimant pipelines for the active mass tort campaigns your firm is pursuing.",
    icon: "/Wha-We-Serve/mass-torts.png",
    iconBackground: "bg-[#dce9ff]",
    href: "/services/mass-tort-leads",
    items: [
      {
        label: "Hair Relaxer",
        detail: "Lawsuits",
        short: "Hair Relaxer",
        description: "Claims alleging chemical hair relaxer use led to uterine or ovarian cancer.",
        icon: "/Wha-We-Serve/Hair-Relaxer.png",
        active: true,
        mdl: "MDL 3060 · N.D. Ill.",
      },
      {
        label: "Talcum Powder",
        detail: "Lawsuits",
        short: "Talcum Powder",
        description: "Claims alleging talc-based products led to ovarian cancer or mesothelioma.",
        icon: "/Wha-We-Serve/Talcum-Powder.png",
        active: true,
        mdl: "MDL 2738 · D.N.J.",
      },
      {
        label: "Tylenol Pregnancy",
        detail: "Lawsuits",
        short: "Tylenol Pregnancy",
        description: "Claims alleging acetaminophen use during pregnancy led to developmental disorders in children.",
        icon: "/Wha-We-Serve/Pregnancy-Lawsuits.png",
        // Off until ops confirm it: the CEO-approved deck's campaign list leaves it out, and the
        // content guide says to remove it unless YMG confirms it is active. Past experience with it
        // is still mentioned in the home page credentials.
        active: false,
      },
      {
        label: "Paraquat",
        detail: "Lawsuits",
        short: "Paraquat",
        description: "Claims alleging occupational paraquat herbicide exposure contributed to Parkinson's disease.",
        Icon: SprayCan,
        active: true,
        mdl: "MDL 3004 · S.D. Ill.",
      },
      {
        label: "Roundup",
        detail: "Lawsuits",
        short: "Roundup",
        description: "Claims alleging Roundup herbicide exposure caused non-Hodgkin's lymphoma.",
        Icon: Sprout,
        active: true,
        mdl: "MDL 2741 · N.D. Cal.",
      },
      {
        label: "Depo-Provera",
        detail: "Lawsuits",
        short: "Depo-Provera",
        description: "Claims alleging Depo-Provera contraceptive injections are linked to meningioma brain tumors.",
        Icon: Syringe,
        active: true,
        mdl: "MDL 3140 · N.D. Fla.",
      },
      {
        label: "Social Media",
        detail: "Addiction",
        short: "Social media",
        description: "Claims alleging social media platforms were designed in ways that harmed young users.",
        Icon: Smartphone,
        active: true,
        mdl: "MDL 3047 · N.D. Cal.",
      },
    ],
  },
  {
    slug: "class-action",
    title: "Class Action",
    description: "Claimant acquisition for consumer, privacy and employment class actions.",
    Icon: Users,
    iconBackground: "bg-[#d9fff3]",
    href: "/practice-areas",
    items: [
      { label: "Product", detail: "Defects", short: "Product defects", description: "Consumer products alleged to be defective or unsafe.", Icon: ShieldAlert, active: true },
      { label: "Data", detail: "Breaches", short: "Data breaches", description: "Consumers whose personal data was exposed in a breach.", Icon: DatabaseZap, active: true },
      { label: "Wage &", detail: "Hour", short: "Wage & hour", description: "Workers owed unpaid wages or overtime.", Icon: Wallet, active: true },
    ],
  },
  {
    slug: "medical-malpractice",
    title: "Medical Malpractice",
    description: "Screened medical negligence inquiries for firms handling malpractice claims.",
    Icon: Stethoscope,
    iconBackground: "bg-[#e1ecff]",
    href: "/practice-areas",
    items: [
      { label: "Surgical", detail: "Errors", short: "Surgical errors", description: "Injuries caused by errors during surgery.", Icon: Stethoscope, active: true },
      { label: "Misdiagnosis", detail: "", short: "Misdiagnosis", description: "Missed, delayed or wrong diagnoses.", Icon: Scale, active: true },
      { label: "Birth", detail: "Injury", short: "Birth injury", description: "Injuries to mother or baby during delivery.", Icon: Baby, active: true },
      { label: "Medication", detail: "Errors", short: "Medication errors", description: "Wrong drug, dose or harmful interaction.", Icon: Pill, active: true },
    ],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    description: "On-the-job injury claims across industries and claim types.",
    Icon: HardHat,
    iconBackground: "bg-[#fff1d8]",
    href: "/practice-areas",
    items: [
      { label: "On-the-Job", detail: "Injuries", short: "On-the-job injuries", description: "Injuries suffered at work, across all industries and claim types.", Icon: Briefcase, active: true },
    ],
  },
  {
    slug: "social-security-disability",
    title: "Social Security Disability",
    description: "SSDI and SSI claimants with long-term or permanent disabilities.",
    Icon: Landmark,
    iconBackground: "bg-[#efd8ff]",
    href: "/practice-areas",
    items: [
      { label: "SSDI", detail: "Claims", short: "SSDI", description: "Social Security Disability Insurance claims.", Icon: ShieldPlus, active: true },
      { label: "SSI", detail: "Claims", short: "SSI", description: "Supplemental Security Income claims.", Icon: HandCoins, active: true },
    ],
  },
];

export const activeItems = (area: PracticeArea) => area.items.filter((item) => item.active);
