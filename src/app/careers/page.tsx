import type { Metadata } from "next";
import Link from "next/link";
import { cms } from "@/lib/cms";

// Job openings are published from the YMG CMS (Content -> Careers).
export const metadata: Metadata = {
  title: "Careers | YMG Legal",
  description: "Open positions at YMG Legal.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  const open = cms.careers.filter((j) => j.isOpen !== false);
  return (
    <main className="min-h-screen bg-[#FFF5E0]">
      <section className="ymg-section-padding-x pb-16 pt-[128px] lg:pt-[150px]">
        <div className="mx-auto w-full max-w-[860px]">
          <p className="text-[0.85rem] font-medium uppercase tracking-[0.12em] text-[#d8ae63]">Careers</p>
          <h1 className="mt-3 font-heading text-[clamp(2.2rem,5vw,4rem)] font-normal leading-[1.06] text-[#3d4145]">Join our team</h1>
          {open.length === 0 ? (
            <p className="mt-8 text-[1.05rem] text-[#8a8c8e]">There are no open positions right now. Please check back soon.</p>
          ) : (
            <div className="mt-10 grid gap-4">
              {open.map((job) => (
                <Link
                  key={job.slug}
                  href={`/careers/${job.slug}`}
                  className="block rounded-2xl border border-[#e8d9b8] bg-white p-6 transition-colors hover:border-[#d8ae63]"
                >
                  <p className="text-[0.85rem] text-[#8a8c8e]">{[job.department, job.location, job.employmentType].filter(Boolean).join(" · ")}</p>
                  <h2 className="mt-1 text-[1.35rem] font-medium text-[#3d4145]">{job.title}</h2>
                  {job.summary ? <p className="mt-2 text-[#8a8c8e]">{job.summary}</p> : null}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
