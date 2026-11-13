"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Plus } from "lucide-react";
import CountText from "@/components/ui/CountText";
import { builtInFaqs, homeFaqQuestions, type Faq } from "@/data/faqs";
import { cms } from "@/lib/cms";

// With the CMS connected its first five FAQs show here; otherwise the five picked in src/data/faqs.ts.
const faqs: Faq[] = cms.enabled
  ? cms.faqs
      .slice(0, 5)
      .map((f) => ({ question: f.title, answer: "", answerHtml: f.answer }))
  : homeFaqQuestions
      .map((q) => builtInFaqs.find((f) => f.question === q))
      .filter((f): f is Faq => Boolean(f));

/* Home FAQ, in the home page's own voice: the question leads as a headline, the answer reads underneath. */
export function HomeFaq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="ymg-home-faq px-5 py-24 sm:px-10 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-20">
          <h2
            data-reveal
            className="max-w-[19ch] text-[clamp(2.02rem,3.68vw,3.36rem)] leading-[1.02] tracking-[-0.015em] text-[#0B231D]"
          >
            Questions firms ask first.
          </h2>
          <div data-reveal className="lg:pb-2">
            <p className="max-w-[30rem] text-[1.08rem] leading-[1.6] text-[#4E5A54]">
              Still deciding? Bring your questions to a free strategy call. We
              answer the same day.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
              <Link
                href="/contact#booking"
                className="group inline-flex min-h-11 items-center gap-2 font-semibold text-[#0B231D] hover:text-[#8C6B22]"
              >
                Book a free strategy call
                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  className="transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/faqs"
                className="group inline-flex min-h-11 items-center gap-2 font-semibold text-[#8C6B22] hover:text-[#0B231D]"
              >
                See all FAQs
                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  className="transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>

        <ul
          data-reveal-group
          className="mt-16 border-t border-[#0B231D]/15 lg:mt-20"
        >
          {faqs.map(({ question, answer, answerHtml }, i) => {
            const isOpen = open === i;
            const id = `home-faq-${i}`;
            return (
              <li key={question} className="border-b border-[#0B231D]/15">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={id}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="group flex w-full items-center justify-between gap-6 py-7 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8A24E]"
                  >
                    <span className="ymg-num text-[1.45rem] leading-snug text-[#0B231D] transition-colors group-hover:text-[#8C6B22] sm:text-[1.75rem]">
                      {question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                        isOpen
                          ? "border-[#0B231D] bg-[#0B231D] text-[#F5F1E8]"
                          : "border-[#0B231D]/25 text-[#0B231D] group-hover:border-[#0B231D]"
                      }`}
                    >
                      <Plus
                        size={18}
                        strokeWidth={2}
                        className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      />
                    </span>
                  </button>
                </h3>
                <div
                  id={id}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    {answerHtml ? (
                      <div
                        className="max-w-[62ch] pb-8 pr-16 text-[1.05rem] leading-[1.7] text-[#4E5A54]"
                        dangerouslySetInnerHTML={{ __html: answerHtml }}
                      />
                    ) : (
                      <p className="max-w-[62ch] pb-8 pr-16 text-[1.05rem] leading-[1.7] text-[#4E5A54]">
                        {answer}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

// CEO-approved promises only (see the approved claims list).
const promises = [
  { value: "30 min", label: "Free strategy call" },
  { value: "48 hrs", label: "Custom proposal" },
  { value: "1 wk", label: "To launch, at fastest" },
];

/* The last thing on the page: one full-width dark band, one decision. */
export function FinalCta() {
  return (
    <section className="ymg-final-cta ymg-band relative overflow-hidden bg-[#3d4145] px-5 py-20 text-center text-white sm:px-10 lg:px-16 lg:py-28">
      <div
        aria-hidden="true"
        data-parallax="0.1"
        className="absolute inset-x-0 -inset-y-24 bg-[radial-gradient(45%_70%_at_0%_0%,rgba(216,178,107,0.3),transparent_70%),radial-gradient(40%_70%_at_100%_100%,rgba(235,201,130,0.18),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D8B26B]/15"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#D8B26B]/10"
      />

      <div className="relative mx-auto max-w-[760px]">
        <h2
          data-reveal
          className="text-[2.2rem] leading-[1.05] tracking-[-0.01em] text-white sm:text-[3rem] lg:text-[3.6rem]"
        >
          Your next signed case{" "}
          <span className="text-[#EBC982]">starts with one call.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[34rem] text-[1.06rem] leading-[1.6] text-white/75">
          Tell us your case types and markets. We come back with a plan built
          for your firm.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact#booking"
            className="group inline-flex h-14 items-center gap-3 rounded-full bg-[#D8B26B] pl-7 pr-2 text-[1rem] font-semibold text-[#1f2023] shadow-[0_14px_30px_rgba(216,178,107,0.3)] transition-colors hover:bg-[#EBC982] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EBC982]"
          >
            Book a free strategy call
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1f2023] text-[#EBC982] transition-transform group-hover:translate-x-0.5">
              <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
            </span>
          </Link>
        </div>

        <ul
          data-reveal-group
          data-reveal-delay="200"
          className="mx-auto mt-10 grid max-w-[620px] grid-cols-3 divide-x divide-white/10 rounded-[18px] border border-white/10 bg-white/[0.04]"
        >
          {promises.map(({ value, label }) => (
            <li key={value} className="px-3 py-4">
              <p className="font-heading text-[1.5rem] leading-none text-[#EBC982] sm:text-[1.8rem]">
                <CountText value={value} />
              </p>
              <p className="mt-1.5 text-[0.8rem] leading-snug text-white/65 sm:text-[0.88rem]">
                {label}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-5 inline-flex items-center gap-2 text-[0.9rem] text-white/70">
          <Check
            size={15}
            strokeWidth={2.4}
            className="text-[#EBC982]"
            aria-hidden="true"
          />{" "}
          No long-term contracts required to start
        </p>
      </div>
    </section>
  );
}
