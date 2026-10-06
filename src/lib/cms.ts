import cmsData from "@/data/cms.generated.json";

/*
 * Typed access to content published in the YMG CMS. The JSON is written
 * by scripts/fetch-cms.mjs before each build; when the CMS isn't
 * configured every list is empty and the site falls back to its own
 * hard-coded content.
 */

type Seo = { metaTitle?: string; metaDescription?: string; ogImage?: string; canonical?: string; noindex?: boolean };
type Base = { slug: string; title: string; html: string; publishedAt: string; updatedAt: string; seo?: Seo; path?: string };

export type CmsBlogPost = Base & { excerpt: string; category: string; author: string; coverImage: string; readingMinutes: number };
export type CmsPage = Base & { summary: string };
export type CmsJob = Base & {
  department: string;
  location: string;
  employmentType: string;
  experience: string;
  salary: string;
  openings: number | null;
  summary: string;
  closingDate: string;
  isOpen: boolean;
};
export type CmsTestimonial = Base & { quote: string; rating: number | null; location: string; caseType: string; photo: string; videoUrl: string; featured: boolean };
export type CmsFaq = Base & { answer: string; category: string; order: number | null };

type CmsFile = {
  enabled: boolean;
  themeCss: string;
  blog: CmsBlogPost[];
  page: CmsPage[];
  careers: CmsJob[];
  testimonials: CmsTestimonial[];
  faqs: CmsFaq[];
};

const data = cmsData as unknown as CmsFile;

export const cms = {
  enabled: data.enabled,
  /** Stylesheet for CMS-rendered HTML (blocks + templates). Inline it next to the HTML. */
  themeCss: data.themeCss,
  blog: data.blog,
  pages: data.page,
  careers: data.careers,
  testimonials: data.testimonials,
  faqs: data.faqs,
};

export function getCmsPage(slug: string) {
  return cms.pages.find((p) => p.slug === slug);
}

export function getCmsJob(slug: string) {
  return cms.careers.find((j) => j.slug === slug);
}

export function formatCmsDate(iso: string): string {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? "" : d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}
