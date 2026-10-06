import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CmsContent from "@/components/CmsContent";
import { cms, getCmsPage } from "@/lib/cms";

/*
 * Pages built in the YMG CMS (Content -> Pages). Every coded route
 * (/about, /faqs, /services…) takes priority over this one, and only slugs
 * published in the CMS exist: anything else is a 404, exactly as before.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return cms.pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const page = getCmsPage((await params).slug);
  if (!page) return {};
  return {
    title: `${page.seo?.metaTitle || page.title} | YMG Legal`,
    description: page.seo?.metaDescription || page.summary || undefined,
    alternates: { canonical: `/${page.slug}` },
    ...(page.seo?.noindex ? { robots: { index: false, follow: false } } : {}),
  };
}

export default async function CmsPage({ params }: { params: Promise<{ slug: string }> }) {
  const page = getCmsPage((await params).slug);
  if (!page) notFound();
  return (
    <main className="min-h-screen bg-[#FFF5E0] pt-[110px]">
      <CmsContent html={page.html} />
    </main>
  );
}
