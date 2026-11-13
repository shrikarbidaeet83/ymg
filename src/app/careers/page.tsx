import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cms } from "@/lib/cms";
import HeroBackdrop from "@/components/site/HeroBackdrop";

// Job openings are published from the YMG CMS (Content -> Careers).
export const metadata: Metadata = {
  title: "Careers | YMG Legal",
  description: "Open positions at YMG Legal.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  const open = cms.careers.filter((j) => j.isOpen !== false);
  return (
    <div className="ymg-site">
      <section className="ymg-dark-hero relative isolate overflow-hidden bg-[#0B231D] px-5 pb-20 pt-32 text-[#F5F1E8] sm:px-10 sm:pt-36 lg:px-12">
        <HeroBackdrop src="/images/services/team-headsets.jpg" />
        <div className="mx-auto max-w-[1120px]">
          <h1 className="max-w-[16ch] text-[clamp(2.18rem,4.48vw,4rem)] leading-[1] tracking-[-0.02em]">
            Join the team behind{" "}
            <span className="text-[#D6B263]">every signed case.</span>
          </h1>
          <p className="mt-6 max-w-[34rem] text-[1.12rem] leading-[1.65] text-[#C9C3B4]">
            We are a US-based team in Las Vegas, working with plaintiff law
            firms on marketing, intake and case support.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1120px]">
          {open.length === 0 ? (
            <div className="border-t border-[#0B231D]/12 pt-10">
              <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-normal leading-tight text-[#0B231D]">
                No open roles right now.
              </h2>
              <p className="mt-4 max-w-[36rem] text-[1.08rem] leading-[1.6] text-[#4E5A54]">
                New positions are posted here first. You can also introduce
                yourself at{" "}
                <a
                  href="mailto:info@ymg-legal.com"
                  className="font-semibold text-[#0B231D] underline decoration-[#C8A24E] decoration-2 underline-offset-4"
                >
                  info@ymg-legal.com
                </a>.
              </p>
            </div>
          ) : (
            <ul className="border-t border-[#0B231D]/12">
              {open.map((job) => (
                <li key={job.slug} className="border-b border-[#0B231D]/12">
                  <Link
                    href={`/careers/${job.slug}`}
                    className="group flex items-center gap-6 py-8"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="ymg-num block text-[clamp(1.6rem,2.6vw,2.2rem)] leading-tight text-[#0B231D] transition-colors group-hover:text-[#8C6B22]">
                        {job.title}
                      </span>
                      <span className="mt-2 block text-[0.98rem] text-[#4E5A54]">
                        {[job.department, job.location, job.employmentType]
                          .filter(Boolean)
                          .join(" · ")}
                      </span>
                      {job.summary ? (
                        <span className="mt-2 block max-w-[44rem] text-[1.02rem] leading-[1.55] text-[#4E5A54]">
                          {job.summary}
                        </span>
                      ) : null}
                    </span>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F0F4F1] text-[#0B231D] transition-colors group-hover:bg-[#0B231D] group-hover:text-[#D6B263]">
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
