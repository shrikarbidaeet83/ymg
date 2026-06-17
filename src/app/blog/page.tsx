import Link from "next/link";
import { posts } from "@/data/blog";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#fff5e0]">
      <section className="flex min-h-[380px] items-center justify-center px-5 pb-16 pt-[128px] text-center text-[#3d4145] sm:px-8 lg:min-h-[430px] lg:px-12 lg:pb-20 lg:pt-[150px]">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-heading text-[clamp(3.4rem,8vw,7rem)] font-normal leading-[0.98] tracking-[0] text-[#3d4145]">
            Blog
          </h1>
          <p className="mt-8 text-[clamp(1.4rem,2.5vw,2rem)] font-semibold leading-tight text-[#3d4145]">
            Insights for Law Firms.
          </p>
          <p className="mx-auto mt-6 max-w-[520px] text-[0.95rem] leading-[1.35] text-[#8a8c8e] sm:text-[1.08rem]">
            Strategy, case acquisition trends, and legal marketing intel from
            the YMG Legal team.
          </p>
        </div>
      </section>

      <section className="bg-[#fff5e0]">
        <div className="bg-[#dfbd78] px-5 py-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1120px]">
            <p className="font-heading text-[clamp(1.55rem,3vw,2.55rem)] font-normal leading-tight tracking-[0] text-[#3d4145]">
              Latest Articles
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-[1120px] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-[16px] border border-[#e8d9b8] bg-white p-6 shadow-[0_4px_16px_rgba(61,65,69,0.06)] transition-shadow hover:shadow-[0_8px_28px_rgba(61,65,69,0.12)]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-[#fbefd9] px-3 py-1 text-[0.78rem] font-medium text-[#d8ae63]">
                    {post.category}
                  </span>
                  <span className="text-[0.78rem] text-[#8a8c8e]">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="font-heading text-[1.35rem] font-normal leading-[1.15] tracking-[0] text-[#3d4145] group-hover:text-[#b8922a] sm:text-[1.5rem]">
                  {post.title}
                </h2>
                <p className="mt-4 flex-1 text-[0.95rem] leading-[1.5] text-[#8a8c8e]">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-[#e8d9b8] pt-4">
                  <span className="text-[0.82rem] text-[#8a8c8e]">
                    {post.date}
                  </span>
                  <span className="text-[0.88rem] font-medium text-[#b8922a]">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
