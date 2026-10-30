import type { MetadataRoute } from "next";
import { posts } from "@/data/blog";

const SITE = "https://ymg-legal.com";

const routes = [
  "",
  "/services",
  "/services/personal-injury-leads",
  "/services/mva-leads",
  "/services/mass-tort-leads",
  "/services/class-action-leads",
  "/services/pay-per-call",
  "/services/outbound-client-acquisition",
  "/services/legal-intake",
  "/services/retainer-signing",
  "/services/live-chat-text",
  "/services/ai-booking",
  "/services/law-firm-marketing",
  "/services/google-search-ads",
  "/services/meta-ads",
  "/services/local-services-ads",
  "/services/seo",
  "/services/ai-search",
  "/services/organic-social-media",
  "/services/website-design",
  "/services/law-firm-support",
  "/services/legal-virtual-assistants",
  "/practice-areas",
  "/how-it-works",
  "/about",
  "/faqs",
  "/contact",
  "/plans",
  "/blog",
  "/compliance",
  "/privacy-policy",
  "/terms",
  "/sms-terms",
  "/cookie-policy",
  "/disclaimer",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...routes.map((path) => ({
      url: `${SITE}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : path.startsWith("/services") ? 0.8 : 0.6,
    })),
    ...posts.map((post) => ({
      url: `${SITE}/blog/${post.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
