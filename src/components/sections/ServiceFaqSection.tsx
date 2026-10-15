"use client";

import Image from "next/image";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const serviceFaqs = [
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
      "Book a strategy call and our team will review your goals, current marketing, intake process, and growth opportunities.",
  },
  {
    question: "Do you provide exclusive leads?",
    answer:
      "Yes. Depending on campaign structure and market, we can build programs focused on exclusivity, higher qualification standards, and cleaner intake handoff.",
  },
  {
    question: "Can campaigns be exclusive to my market?",
    answer:
      "Yes. Market exclusivity can be structured around your location, practice area, campaign capacity, and agreed acquisition goals.",
  },
  {
    question: "Do you provide after-hours intake support?",
    answer:
      "Yes. Our intake workflows can support evenings, weekends, and overflow periods so qualified opportunities receive a fast response.",
  },
  {
    question: "Can you integrate with our CRM?",
    answer:
      "Yes. We can connect lead and intake workflows with many common legal CRMs, case-management systems, and reporting platforms.",
  },
  {
    question: "How quickly are new leads contacted?",
    answer:
      "Response workflows are designed for immediate outreach, with routing and follow-up based on your campaign and intake requirements.",
  },
  {
    question: "How do you measure campaign performance?",
    answer:
      "We track lead source, contact rate, qualification, consultation bookings, signed cases, acquisition cost, and return on investment.",
  },
  {
    question: "How is your pricing structured?",
    answer:
      "Pricing depends on the services, markets, practice areas, intake volume, and campaign scope selected for your firm.",
  },
  {
    question: "Do you require a long-term contract?",
    answer:
      "Engagement terms vary by solution. We review the scope and expectations clearly before your campaign or intake program begins.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Most implementations begin with discovery, tracking, routing, and intake setup. Timing depends on integrations and campaign complexity.",
  },
  {
    question: "Is advertising spend included?",
    answer:
      "Media spend is typically planned separately from management and intake services so budgets remain transparent and controllable.",
  },
  {
    question: "How are leads qualified?",
    answer:
      "Qualification can include practice area, location, incident details, timing, representation status, intent, and firm-specific criteria.",
  },
  {
    question: "Can you use our existing intake script?",
    answer:
      "Yes. We can refine your current script or build a custom intake flow around your qualification and handoff requirements.",
  },
  {
    question: "Can calls be recorded and reviewed?",
    answer:
      "Where legally permitted, call recording and quality review can be incorporated for coaching, compliance, and conversion improvement.",
  },
  {
    question: "How do you handle missed contacts?",
    answer:
      "We use structured follow-up across calls, text, and email to reconnect with prospects without overwhelming them.",
  },
  {
    question: "What reporting will our firm receive?",
    answer:
      "Reporting can include campaign performance, lead status, intake outcomes, consultations, signed cases, and conversion trends.",
  },
  {
    question: "Can you improve an existing campaign?",
    answer:
      "Yes. We can audit current campaigns, tracking, landing pages, intake speed, and follow-up to identify conversion gaps.",
  },
  {
    question: "Do you combine SEO and paid advertising?",
    answer:
      "Yes. We can coordinate organic search, paid media, landing pages, and intake workflows as one acquisition system.",
  },
  {
    question: "Do you support mass tort campaigns?",
    answer:
      "Yes. We support qualified mass tort acquisition and intake programs with campaign-specific screening and routing.",
  },
  {
    question: "Do you work with personal injury firms?",
    answer:
      "Yes. Personal injury is a core focus, including motor vehicle, premises, medical malpractice, and related case types.",
  },
  {
    question: "Can the program scale with our firm?",
    answer:
      "Yes. Capacity, media, intake coverage, and follow-up can expand as your firm is ready to handle more qualified opportunities.",
  },
  {
    question: "How do you protect sensitive information?",
    answer:
      "We use controlled access, secure systems, and defined handling procedures appropriate for sensitive lead and intake information.",
  },
  {
    question: "What happens during onboarding?",
    answer:
      "We document goals, markets, qualification criteria, routing, integrations, reporting, and escalation paths before launch.",
  },
  {
    question: "Does our firm own its lead data?",
    answer:
      "Data ownership and access are defined clearly in the engagement so your firm understands how campaign and intake records are handled.",
  },
  {
    question: "Can campaigns target multiple locations?",
    answer:
      "Yes. Campaigns can be structured by city, state, region, or service area while maintaining separate performance visibility.",
  },
  {
    question: "Do you create landing pages and ad creative?",
    answer:
      "Yes. We can create conversion-focused landing pages, messaging, ad creative, and testing plans for legal campaigns.",
  },
  {
    question: "How do I book a consultation?",
    answer:
      "Use any Book a Strategy Call button on the website to select an available date and time with the YMG Legal team.",
  },
];

const PAGE_SIZE = 5;

const defaultIntro =
  "Find answers to common questions about our legal marketing services, intake solutions, lead generation process, and how we help law firms grow with qualified cases and measurable results.";

export default function ServiceFaqSection({
  faqs = serviceFaqs,
  intro = defaultIntro,
}: {
  faqs?: { question: string; answer: string }[];
  intro?: string;
}) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(faqs.length / PAGE_SIZE);
  const pageFaqs = faqs.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <section className="relative isolate overflow-hidden bg-[#404040] px-5 py-16 text-[#d9ae5d] sm:px-10 sm:py-20 lg:px-16 lg:py-[80px]">
      <Image
        src="/images/big_flowers.webp"
        alt=""
        width={190}
        height={190}
        className="pointer-events-none absolute bottom-[78px] left-[19%] z-0 hidden w-[92px] opacity-[0.055] lg:block"
      />
      <Image
        src="/images/small_flowers.webp"
        alt=""
        width={125}
        height={125}
        className="pointer-events-none absolute bottom-[134px] left-[14.5%] z-0 hidden w-[32px] opacity-[0.055] lg:block"
      />
      <Image
        src="/images/small_flowers.webp"
        alt=""
        width={125}
        height={125}
        className="pointer-events-none absolute bottom-[58px] left-[21%] z-0 hidden w-[38px] opacity-[0.055] lg:block"
      />
      <Image
        src="/images/small_flowers.webp"
        alt=""
        width={125}
        height={125}
        className="pointer-events-none absolute bottom-[105px] left-[31.5%] z-0 hidden w-[28px] opacity-[0.055] lg:block"
      />

      <div className="relative z-10 mx-auto grid w-full min-w-0 max-w-[1160px] items-start gap-9 lg:grid-cols-[430px_minmax(0,650px)] lg:gap-[80px]">
        <div className="min-w-0 text-center lg:text-left">
          <p className="text-[0.92rem] font-normal text-[#d9ae5d]">
            Frequently Asked Questions
          </p>
          <h2 className="mt-[20px] font-heading text-[2rem] font-bold leading-[1.2] tracking-[0] text-[#d9ae5d] sm:text-[2.35rem] lg:text-[2.02rem] lg:leading-[1.46]">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-[18px] max-w-[430px] text-[0.9rem] leading-[1.38] text-[#d9ae5d] lg:mx-0 lg:max-w-[430px] lg:leading-[1.34]">
            {intro}
          </p>
        </div>

        <div className="w-full min-w-0 lg:max-w-[650px]">
          <div className="w-full min-w-0 space-y-[11px]">
            {pageFaqs.map(({ question, answer }) => (
              <details
                key={question}
                className="group w-full min-w-0 overflow-hidden rounded-[5px] border border-[#d9ae5d] bg-[#404040] shadow-[0_6px_12px_rgba(18,18,18,0.22)] [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-[13px] text-left text-[0.92rem] font-normal leading-[1.3] text-[#d9ae5d] sm:gap-4 sm:px-[26px] sm:text-[0.95rem]">
                  <span className="min-w-0 [overflow-wrap:anywhere]">{question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-[#8d7a53] transition-transform duration-200 group-open:rotate-180" strokeWidth={1.8} />
                </summary>
                <div className="px-4 pb-[20px] sm:px-[26px] sm:pb-[23px]">
                  <div className="h-px w-full bg-[#d9ae5d]" />
                  <p className="pt-[12px] text-[0.82rem] leading-[1.32] text-white">
                    {answer}
                  </p>
                </div>
              </details>
            ))}
          </div>

          {totalPages > 1 && (
          <div className="mt-[30px] flex min-w-0 items-center justify-center gap-2 text-[#d9ae5d] sm:gap-[15px]">
            <button
              type="button"
              onClick={() => setPage((current) => Math.max(1, current - 1))}
              disabled={page === 1}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-[#D8B26B]/10 disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Previous FAQ page"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.8} />
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                type="button"
                onClick={() => setPage(pageNumber)}
                aria-current={pageNumber === page ? "page" : undefined}
                className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[0.9rem] transition-colors sm:h-[38px] sm:w-[38px] sm:text-[0.96rem] ${
                  pageNumber === page
                    ? "border-[#D8B26B] bg-[#D8B26B] font-semibold text-[#191917]"
                    : "border-transparent text-[#D8B26B] hover:border-[#D8B26B]/60 hover:bg-[#D8B26B]/10"
                }`}
              >
                {pageNumber}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
              disabled={page === totalPages}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-[#D8B26B]/10 disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Next FAQ page"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.8} />
            </button>
          </div>
          )}
        </div>
      </div>
    </section>
  );
}
