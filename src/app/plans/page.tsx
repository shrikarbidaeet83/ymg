import type { Metadata } from "next";
import ClientProof from "@/components/site/ClientProof";
import Link from "next/link";
import { ArrowRight, Check, Minus } from "lucide-react";
import GlassIcon from "@/components/ui/GlassIcon";
import ScrollMotion from "@/components/home/ScrollMotion";
import { NextSteps } from "@/components/home/EngagementModels";
import { BookCallButton } from "@/components/site/Cta";
import { models, pillars } from "@/data/plans";
import HeroBackdrop from "@/components/site/HeroBackdrop";
import HeroPoints from "@/components/site/HeroPoints";

export const metadata: Metadata = {
  title: "Engagement Plans | YMG Legal",
  description:
    "Three ways to work with YMG Legal: Lead Generation + Intake, Full-Service Partnership, or Case Support Only. No long-term contracts required to start.",
};

const tones = ["blue", "gold", "teal"] as const;

function Hero() {
  return (
    <section className="ymg-dark-hero relative isolate overflow-hidden bg-[#0B231D] px-5 pb-20 pt-32 text-[#F5F1E8] sm:px-10 sm:pt-36 lg:px-12 lg:pb-24">
      <HeroBackdrop src="/images/about/handshake.jpg" />
      <div className="mx-auto grid max-w-[1320px] gap-8">
        <h1
          data-reveal
          className="max-w-[19ch] text-[clamp(2.18rem,4.48vw,4rem)] leading-[1] tracking-[-0.02em]"
        >
          Choose how much{" "}
          <span className="text-[#D6B263]">we run for you.</span>
        </h1>
        <div data-reveal data-reveal-delay="200" className="max-w-[40rem]">
          <p className="max-w-[32rem] text-[1.12rem] leading-[1.65] text-[#C9C3B4]">
            Start with lead generation and intake, hand us the whole case
            journey, or bring us in for case support only. Every plan is scoped
            to your firm before it starts.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <BookCallButton label="Get a custom proposal" />
          </div>
          <HeroPoints
            points={["No long-term contracts", "Proposal within 48 hours"]}
          />
        </div>
      </div>
    </section>
  );
}

/* Wide screens: one comparison table, the popular plan's column lifted in evergreen. Phones: one block per plan. */
function Compare() {
  return (
    <section className="bg-white px-5 py-24 sm:px-10 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1320px]">
        <h2
          data-reveal
          className="max-w-[22ch] text-[clamp(1.93rem,3.52vw,3.2rem)] leading-[1.03] tracking-[-0.015em] text-[#0B231D]"
        >
          Three plans, <span className="text-[#8C6B22]">side by side.</span>
        </h2>

        {/* Table, from lg */}
        <div data-reveal className="mt-16 hidden lg:block">
          <table className="w-full table-fixed border-separate border-spacing-0">
            <caption className="sr-only">
              What each engagement plan includes
            </caption>
            <colgroup>
              <col className="w-[22%]" />
              <col />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr>
                <td />
                {models.map(({ name, body, Icon, featured }, i) => (
                  <th
                    key={name}
                    scope="col"
                    className={`relative px-7 pb-8 pt-10 text-left align-top font-normal ${
                      featured
                        ? "rounded-t-[26px] bg-[#0B231D] text-[#F5F1E8]"
                        : "text-[#0B231D]"
                    }`}
                  >
                    {featured && (
                      <span className="absolute -top-3.5 left-7 rounded-full bg-[#C8A24E] px-3 py-1 text-[0.8rem] font-bold text-[#0B231D]">
                        Most popular
                      </span>
                    )}
                    <GlassIcon
                      tone={tones[i]}
                      size="md"
                      surface={featured ? "dark" : "light"}
                    >
                      <Icon size={20} strokeWidth={1.9} aria-hidden="true" />
                    </GlassIcon>
                    <span className="ymg-num mt-5 block text-[1.8rem] leading-tight">
                      {name}
                    </span>
                    <span
                      className={`mt-3 block text-[1rem] leading-[1.55] ${featured ? "text-[#C9C3B4]" : "text-[#4E5A54]"}`}
                    >
                      {body}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pillars.map((pillar, pi) => (
                <tr key={pillar}>
                  <th
                    scope="row"
                    className="border-t border-[#0B231D]/10 py-5 pr-4 text-left text-[1.05rem] font-semibold text-[#0B231D]"
                  >
                    {pillar}
                  </th>
                  {models.map(({ name, includes, featured }) => (
                    <td
                      key={name}
                      className={`border-t px-7 py-5 ${featured ? "border-[#F5F1E8]/10 bg-[#0B231D]" : "border-[#0B231D]/10"}`}
                    >
                      {includes[pi] ? (
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1E9E6A] text-white">
                          <Check
                            size={16}
                            strokeWidth={3}
                            aria-label="Included"
                          />
                        </span>
                      ) : (
                        <Minus
                          size={18}
                          className={
                            featured ? "text-[#F5F1E8]/30" : "text-[#0B231D]/25"
                          }
                          aria-label="Not included"
                        />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <th
                  scope="row"
                  className="border-t border-[#0B231D]/10 py-6 pr-4 text-left text-[1.05rem] font-semibold text-[#0B231D]"
                >
                  Best for
                </th>
                {models.map(({ name, bestFor, featured }) => (
                  <td
                    key={name}
                    className={`border-t px-7 py-6 text-[1rem] leading-[1.5] ${
                      featured
                        ? "border-[#F5F1E8]/10 bg-[#0B231D] text-[#E4DFD2]"
                        : "border-[#0B231D]/10 text-[#4E5A54]"
                    }`}
                  >
                    {bestFor}
                  </td>
                ))}
              </tr>
              <tr>
                <td />
                {models.map(({ name, featured }) => (
                  <td
                    key={name}
                    className={`px-7 pb-9 pt-2 ${featured ? "rounded-b-[26px] bg-[#0B231D]" : ""}`}
                  >
                    <PlanButton featured={featured} />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Stacked plans, below lg */}
        <div
          data-reveal-group
          className="mt-12 grid gap-6 md:grid-cols-2 lg:hidden"
        >
          {models.map(
            ({ name, body, bestFor, Icon, includes, featured }, i) => (
              <article
                key={name}
                className={`relative flex flex-col rounded-[24px] p-7 ${
                  featured
                    ? "bg-[#0B231D] text-[#F5F1E8] md:col-span-2"
                    : "border border-[#0B231D]/12 text-[#0B231D]"
                }`}
              >
                {featured && (
                  <span className="absolute -top-3.5 left-7 rounded-full bg-[#C8A24E] px-3 py-1 text-[0.8rem] font-bold text-[#0B231D]">
                    Most popular
                  </span>
                )}
                <GlassIcon
                  tone={tones[i]}
                  size="md"
                  surface={featured ? "dark" : "light"}
                >
                  <Icon size={20} strokeWidth={1.9} aria-hidden="true" />
                </GlassIcon>
                <h3 className="mt-5 text-[1.8rem] font-normal leading-tight">
                  {name}
                </h3>
                <p
                  className={`mt-3 text-[1rem] leading-[1.55] ${featured ? "text-[#C9C3B4]" : "text-[#4E5A54]"}`}
                >
                  {body}
                </p>
                <ul
                  className={`mt-6 grid gap-3 border-t pt-5 ${featured ? "border-[#F5F1E8]/12" : "border-[#0B231D]/10"}`}
                >
                  {pillars.map((pillar, pi) => (
                    <li
                      key={pillar}
                      className={`flex items-center gap-3 text-[1rem] ${includes[pi] ? "" : featured ? "text-[#F5F1E8]/40" : "text-[#0B231D]/40"}`}
                    >
                      {includes[pi] ? (
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1E9E6A] text-white">
                          <Check
                            size={13}
                            strokeWidth={3}
                            aria-label="Included"
                          />
                        </span>
                      ) : (
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center">
                          <Minus size={16} aria-label="Not included" />
                        </span>
                      )}
                      {pillar}
                    </li>
                  ))}
                </ul>
                <p
                  className={`mt-6 text-[0.98rem] ${featured ? "text-[#E4DFD2]" : "text-[#4E5A54]"}`}
                >
                  <span className="font-semibold">Best for:</span> {bestFor}
                </p>
                <div className="mt-6">
                  <PlanButton featured={featured} />
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function PlanButton({ featured }: { featured?: boolean }) {
  return (
    <Link
      href="/contact#booking"
      className={`group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-6 text-[0.98rem] font-semibold transition-colors ${
        featured
          ? "bg-[#F5F1E8] text-[#0B231D] hover:bg-white"
          : "border border-[#0B231D]/20 text-[#0B231D] hover:border-[#0B231D]"
      }`}
    >
      Discuss this plan{" "}
      <ArrowRight
        size={16}
        className="transition-transform group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </Link>
  );
}

function Close() {
  return (
    <section className="relative isolate overflow-hidden bg-[#071813] px-5 py-28 text-[#F5F1E8] sm:px-10 lg:px-12 lg:py-36">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(45%_70%_at_85%_50%,rgba(214,178,99,0.14),transparent_70%)]"
      />
      <div className="mx-auto flex max-w-[1320px] flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <h2
          data-reveal
          className="max-w-[20ch] text-[clamp(2.18rem,4.48vw,4rem)] leading-[1] tracking-[-0.02em]"
        >
          Not sure which fits? <span className="text-[#D6B263]">Ask us.</span>
        </h2>
        <div data-reveal className="flex flex-col gap-3 sm:flex-row lg:pb-3">
          <BookCallButton />
        </div>
      </div>
    </section>
  );
}

export default function PlansPage() {
  return (
    <div className="ymg-site">
      <Hero />
      <Compare />
      <ClientProof
        photo={{
          src: "/images/about/handshake.jpg",
          alt: "A handshake over a signed agreement",
        }}
        start={1}
        tone="mist"
      />
      <NextSteps />
      <Close />
      <ScrollMotion />
    </div>
  );
}
