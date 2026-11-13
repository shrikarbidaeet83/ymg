import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { coverFor, getAllSlugs, getPostBySlug } from "@/data/blog";
import CmsContent from "@/components/CmsContent";
import { BookCallButton } from "@/components/site/Cta";
import HeroBackdrop from "@/components/site/HeroBackdrop";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article not found | YMG Legal" };
  return { title: `${post.title} | YMG Legal`, description: post.excerpt };
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

function BackLink() {
  return (
    <Link
      href="/blog"
      className="inline-flex min-h-11 items-center gap-2 text-[1rem] font-semibold text-[#0B231D] hover:text-[#8C6B22]"
    >
      <ArrowLeft size={17} aria-hidden="true" /> All articles
    </Link>
  );
}

function Close() {
  return (
    <section className="relative isolate overflow-hidden bg-[#071813] px-5 py-24 text-[#F5F1E8] sm:px-10 lg:px-12 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(45%_70%_at_85%_50%,rgba(214,178,99,0.14),transparent_70%)]"
      />
      <div className="mx-auto flex max-w-[1320px] flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="max-w-[20ch] text-[clamp(2.02rem,4vw,3.52rem)] leading-[1] tracking-[-0.02em]">
          Want this working{" "}
          <span className="text-[#D6B263]">for your firm?</span>
        </h2>
        <div className="flex flex-col gap-3 sm:flex-row lg:pb-3">
          <BookCallButton />
        </div>
      </div>
    </section>
  );
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
      <div className="ymg-site bg-white pt-[110px]">
        <CmsContent html={post.cmsHtml} />
        <div className="mx-auto max-w-[780px] px-5 pb-16">
          <BackLink />
        </div>
        <Close />
      </div>
    );
  }

  const cover = coverFor(post);
  return (
    <div className="ymg-site">
      <section className="ymg-dark-hero relative isolate overflow-hidden bg-[#0B231D] px-5 pb-16 pt-32 text-[#F5F1E8] sm:px-10 sm:pt-36 lg:px-12">
        <HeroBackdrop src={cover} />
        <div className="mx-auto max-w-[860px]">
          <h1 className="text-[clamp(1.93rem,4vw,3.36rem)] leading-[1.04] tracking-[-0.015em]">
            {post.title}
          </h1>
          <p className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-[0.98rem] text-[#C9C3B4]">
            <span className="font-semibold text-[#D6B263]">
              {post.category}
            </span>
            <span aria-hidden="true">·</span>
            <span>{post.date}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </p>
          <p className="mt-6 max-w-[40rem] text-[1.15rem] leading-[1.6] text-[#E4DFD2]">
            {post.excerpt}
          </p>
        </div>
      </section>

      <div className="bg-white px-5 pb-24 sm:px-10 lg:px-12">
        <div className="relative mx-auto -mt-px aspect-[16/8] max-w-[1080px] overflow-hidden rounded-b-[28px] bg-[#0B231D]">
          <Image
            src={cover}
            alt=""
            fill
            priority
            sizes="(min-width: 1080px) 1080px, 100vw"
            unoptimized={cover.startsWith("http")}
            className="object-cover"
          />
        </div>
        <article className="mx-auto mt-14 max-w-[720px] text-[1.15rem] leading-[1.75] text-[#2E3A35]">
          {post.body.split("\n\n").map((paragraph, i) => (
            <p key={i} className="mb-7">
              {paragraph}
            </p>
          ))}
        </article>
        <div className="mx-auto mt-10 max-w-[720px] border-t border-[#0B231D]/12 pt-6">
          <BackLink />
        </div>
      </div>
      <Close />
    </div>
  );
}
