import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllSlugs } from "@/data/blog";
import CmsContent from "@/components/CmsContent";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article not found | YMG Legal" };
  return { title: `${post.title} | YMG Legal`, description: post.excerpt };
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  // Designed in the YMG CMS: the post carries its own header and layout.
  if (post.cmsHtml) {
    return (
      <main className="min-h-screen bg-[#FFF5E0] pt-[110px]">
        <CmsContent html={post.cmsHtml} />
        <div className="ymg-section-padding-x mx-auto max-w-[780px] pb-12">
          <Link href="/blog" className="text-[0.95rem] font-medium text-[#b8922a] hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FFF5E0]">
      <section className="ymg-section-padding-x flex min-h-[320px] items-end justify-center pb-[60px] pt-[128px] text-[#3d4145] lg:min-h-[360px] lg:pt-[150px]">
        <div className="mx-auto w-full max-w-[780px]">
          <div className="mb-5 flex items-center gap-3">
            <span className="rounded-full bg-[#fbefd9] px-3 py-1 text-[0.78rem] font-medium text-[#d8ae63]">
              {post.category}
            </span>
            <span className="text-[0.78rem] text-[#8a8c8e]">{post.readTime}</span>
            <span className="text-[0.78rem] text-[#8a8c8e]">{post.date}</span>
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,5vw,4rem)] font-normal leading-[1.06] tracking-[0] text-[#3d4145]">
            {post.title}
          </h1>
          <p className="mt-6 text-[1.05rem] leading-[1.45] text-[#8a8c8e] sm:text-[1.18rem]">
            {post.excerpt}
          </p>
        </div>
      </section>

      <section className="bg-[#FFF5E0]">
        <div className="ymg-section-padding-x bg-[#dfbd78] py-4">
          <div className="mx-auto max-w-[780px]" />
        </div>

        <div className="ymg-section-padding mx-auto max-w-[780px]">
          <article className="text-[1rem] leading-[1.65] text-[#8a8c8e] sm:text-[1.18rem] lg:text-[1.28rem]">
            {post.body.split("\n\n").map((paragraph, i) => (
              <p key={i} className="mb-6">
                {paragraph}
              </p>
            ))}
          </article>

          <div className="mt-12 border-t border-[#e8d9b8] pt-8">
            <Link
              href="/blog"
              className="text-[0.95rem] font-medium text-[#b8922a] hover:underline"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
