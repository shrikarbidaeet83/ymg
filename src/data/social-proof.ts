/*
 * PLACEHOLDER social proof. Every value here is sample content so the layout can be reviewed.
 * Replace with YMG's real review score, review count and approved client logos before launch,
 * and keep SHOW_CLIENT_LOGOS / SHOW_TESTIMONIALS in site-flags.ts in step with what is approved.
 */

export const rating = {
  score: "4.9",
  count: "120+",
  label: "law firm reviews",
  // Where "see reviews" links go.
  href: "/about#testimonials",
};

// Initials shown in the small reviewer stack next to the rating.
export const reviewerInitials = ["JM", "AR", "KS", "DL"];

export const clientLogos = [
  { name: "Law Logo", src: "/images/law-firms/law-logo.svg" },
  { name: "III Trial Lawyers", src: "/images/law-firms/iii-trial-lawyers.svg" },
  { name: "Alliance Legal Partners", src: "/images/law-firms/alliance-legal-partners.svg" },
  { name: "Halavanau Law Office", src: "/images/law-firms/halavanau-law-office.svg" },
  { name: "Morgan Maxwell Attorney & Law", src: "/images/law-firms/morgan-maxwell.svg" },
  { name: "Erol Gulistan Law Firm", src: "/images/law-firms/erol-gulistan-law-firm.svg" },
  { name: "Good Law", src: "/images/law-firms/good-law.svg" },
  { name: "Attorney & Law", src: "/images/law-firms/attorney-law.svg" },
];

// PLACEHOLDER case study for the "Why YMG Legal" section. Every figure is sample content: replace it
// with one real client result (with the firm's written permission) before launch, or set `show` to false.
export const caseStudy = {
  show: true,
  firm: "Personal injury firm",
  region: "Southwest US",
  period: "First 90 days with YMG",
  quote: "We stopped losing the calls that came in after 6 pm. That alone changed our month.",
  role: "Managing partner",
  metrics: [
    { value: "3.1×", label: "signed cases per month" },
    { value: "−38%", label: "cost per signed case" },
    { value: "<60s", label: "average answer time" },
  ],
};
