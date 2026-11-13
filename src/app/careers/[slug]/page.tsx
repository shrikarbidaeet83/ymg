import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CmsContent from "@/components/CmsContent";
import { cms, getCmsJob } from "@/lib/cms";

// Only jobs published from the CMS exist; anything else is a 404 (fully static).
export const dynamicParams = false;

export function generateStaticParams() {
  return cms.careers.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const job = getCmsJob((await params).slug);
  if (!job) return {};
  return {
    title: `${job.seo?.metaTitle || job.title} | Careers | YMG Legal`,
    description: job.seo?.metaDescription || job.summary,
    alternates: { canonical: `/careers/${job.slug}` },
    ...(job.seo?.noindex ? { robots: { index: false, follow: false } } : {}),
  };
}

export default async function JobPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const job = getCmsJob((await params).slug);
  if (!job) notFound();
  return (
    <div className="ymg-site min-h-screen bg-white pt-[110px]">
      <CmsContent html={job.html} />
    </div>
  );
}
