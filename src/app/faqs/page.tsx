"use client";

import { FullFunnelSolutionCards } from "@/components/sections/FullFunnelSolutionsSection";
import { TestimonialCardsShowcase } from "@/components/sections/TestimonialContactSection";
import Image from "next/image";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

const faqs = [
  {
    question: "What services does YMG Legal provide?",
    answer:
      "YMG Legal provides lead generation, intake optimization, client follow-up systems, call handling, signed-retainer workflows, and legal growth support tailored for high-volume firms.",
  },
  {
    question: "How does YMG Legal help law firms grow?",
    answer:
      "We generate qualified leads, optimize intake processes, and improve conversion rates to help firms secure more signed cases.",
  },
  {
    question: "What types of law firms do you work with?",
    answer:
      "We work with plaintiff-focused firms across personal injury, mass torts, employment, and other practice areas that depend on efficient lead handling and consistent case acquisition.",
  },
  {
    question: "How can I get started with YMG Legal?",
    answer:
      "You can get started by booking a strategy call with our team. We will review your goals, current intake process, and growth opportunities before recommending the right setup.",
  },
  {
    question: "Do you provide exclusive leads?",
    answer:
      "Yes. Depending on campaign structure and market, we can build lead programs focused on exclusivity, higher qualification standards, and cleaner intake handoff.",
  },
  {
    question: "Do you offer after-hours or weekend intake support?",
    answer:
      "Yes. We can support firms with extended coverage, after-hours workflows, and response systems that reduce missed opportunities outside normal business hours.",
  },
  {
    question: "Can YMG Legal integrate with our CRM or case management tools?",
    answer:
      "Yes. We can align intake and lead workflows with your CRM, CMS, and reporting stack so your team has clearer visibility into every stage of the pipeline.",
  },
  {
    question: "How do you track campaign and intake performance?",
    answer:
      "We use reporting dashboards, lead-source attribution, intake metrics, and conversion tracking to identify what is performing and where revenue opportunities are being lost.",
  },
  {
    question: "Is your process compliant and secure?",
    answer:
      "Yes. Our workflows are designed with privacy, secure information handling, and professional intake standards in mind, including processes that support sensitive client communications.",
  },
];

const PAGE_SIZE = 5;

function getDefaultOpenQuestion(pageNumber: number) {
  const start = (pageNumber - 1) * PAGE_SIZE;
  return faqs[start + 1]?.question ?? faqs[start]?.question ?? "";
}

export default function FAQsPage() {
  const [page, setPage] = useState(1);
  const [openQuestion, setOpenQuestion] = useState(getDefaultOpenQuestion(1));
  const totalPages = Math.ceil(faqs.length / PAGE_SIZE);

  const pagedFaqs = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return faqs.slice(start, start + PAGE_SIZE);
  }, [page]);

  return (
    <main className="min-h-screen bg-[#FFF5E0] text-[#3d4145]">
      <section className="ymg-section-padding relative isolate overflow-hidden pt-[118px] lg:pt-[130px]">
        <Image
          src="/images/big_flowers.png"
          alt=""
          width={220}
          height={220}
          priority
          className="pointer-events-none absolute bottom-[112px] left-[12%] z-0 hidden w-[150px] opacity-[0.06] brightness-90 sepia lg:block"
        />
        <Image
          src="/images/small_flowers.png"
          alt=""
          width={74}
          height={74}
          priority
          className="pointer-events-none absolute bottom-[174px] left-[8%] z-0 hidden w-[56px] opacity-[0.06] brightness-90 sepia lg:block"
        />
        <Image
          src="/images/small_flowers.png"
          alt=""
          width={74}
          height={74}
          priority
          className="pointer-events-none absolute right-[2%] top-[88px] z-0 hidden w-[54px] opacity-[0.06] brightness-90 sepia lg:block"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[520px_minmax(0,720px)] lg:gap-12">
          <div className="pt-2 text-center lg:pt-0 lg:text-left">
            <p className="text-[1rem] font-medium text-[#3d4145] sm:text-[1.08rem]">
              Frequently Asked Questions
            </p>
            <h1 className="mt-5 max-w-[520px] font-heading text-[clamp(2.15rem,3.8vw,3.55rem)] font-normal leading-[1.04] tracking-[0] text-[#3d4145]">
              Frequently Asked
              <span className="block lg:whitespace-nowrap">Questions</span>
            </h1>
            <p className="mx-auto mt-7 max-w-[430px] text-[1rem] leading-[1.45] text-[#55585a] sm:text-[1.08rem] lg:mx-0">
              Find answers to common questions about our legal marketing services,
              intake solutions, lead generation process, and how we help law
              firms grow with qualified cases and measurable results.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[720px] lg:mx-0 lg:max-w-none">
            <div className="space-y-3">
              {pagedFaqs.map(({ question, answer }) => {
                const isOpen = openQuestion === question;

                return (
                  <article
                    key={question}
                    className="overflow-hidden rounded-[8px] border border-[#dfbd78] bg-[#FFF5E0] shadow-[0_10px_22px_rgba(91,69,34,0.14)]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenQuestion(isOpen ? "" : question)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left sm:px-7"
                    >
                      <span className="text-[1rem] font-medium leading-tight text-[#3d4145] sm:text-[1.1rem] lg:text-[1.22rem]">
                        {question}
                      </span>
                      <ChevronDown
                        size={24}
                        strokeWidth={1.6}
                        className={`shrink-0 text-[#7c6b4a] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-7 sm:px-7">
                        <div className="h-px w-full bg-[#dfbd78]" />
                        <p className="pt-4 text-[0.95rem] leading-[1.45] text-[#8a8c8e] sm:text-[1.02rem]">
                          {answer}
                        </p>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>

            <div className="mt-6 flex items-center justify-center gap-4 text-[#d1a754]">
              <button
                type="button"
                onClick={() => {
                  const nextPage = Math.max(1, page - 1);
                  setPage(nextPage);
                  setOpenQuestion(getDefaultOpenQuestion(nextPage));
                }}
                disabled={page === 1}
                className="inline-flex h-8 w-8 items-center justify-center disabled:opacity-35"
                aria-label="Previous page"
              >
                <ChevronLeft size={18} strokeWidth={1.7} />
              </button>

              {Array.from({ length: totalPages }).map((_, index) => {
                const pageNumber = index + 1;
                const active = pageNumber === page;

                return (
                  <button
                    key={pageNumber}
                    type="button"
                    onClick={() => {
                      setPage(pageNumber);
                      setOpenQuestion(getDefaultOpenQuestion(pageNumber));
                    }}
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-[1.02rem] transition-colors ${
                      active
                        ? "border border-[#dfbd78] bg-white text-[#3d4145]"
                        : "text-[#d1a754]"
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => {
                  const nextPage = Math.min(totalPages, page + 1);
                  setPage(nextPage);
                  setOpenQuestion(getDefaultOpenQuestion(nextPage));
                }}
                disabled={page === totalPages}
                className="inline-flex h-8 w-8 items-center justify-center disabled:opacity-35"
                aria-label="Next page"
              >
                <ChevronRight size={18} strokeWidth={1.7} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="ymg-section-padding overflow-hidden bg-[#FFF5E0]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center sm:mb-10 lg:mb-12 lg:text-left">
            <p className="text-[1rem] font-medium text-[#3d4145] sm:text-[1.08rem]">
              About YMG - Legal
            </p>
            <h2 className="mt-5 font-heading text-[clamp(2.15rem,4.8vw,4rem)] font-normal leading-[1.08] tracking-[0] text-[#3d4145]">
              Full-Funnel Legal Growth Solutions
            </h2>
          </div>
          <FullFunnelSolutionCards />
        </div>
      </section>
      <TestimonialCardsShowcase />
    </main>
  );
}
