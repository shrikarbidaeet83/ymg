"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Phone } from "lucide-react";
import SectionHeader from "@/components/home/SectionHeader";
import { builtInFaqs, homeFaqQuestions, type Faq } from "@/data/faqs";
import { cms } from "@/lib/cms";

// With the CMS connected its first five FAQs show here; otherwise the five picked in src/data/faqs.ts.
const faqs: Faq[] = cms.enabled
  ? cms.faqs.slice(0, 5).map((f) => ({ question: f.title, answer: "", answerHtml: f.answer }))
  : homeFaqQuestions.map((q) => builtInFaqs.find((f) => f.question === q)).filter((f): f is Faq => Boolean(f));

export function HomeFaq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="ymg-home-faq ymg-section-padding bg-[#FFF5E0] dark:bg-[#191917]">
      <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <div>
          <SectionHeader eyebrow="FAQ" title="Questions firms" accent="ask first." intro="Still unsure? Ask us on a free strategy call, we answer the same day." />
          <Link
            href="/faqs"
            className="group mt-7 inline-flex min-h-11 items-center gap-2 text-[0.98rem] font-semibold text-[#8a6420] hover:text-[#5e4416] dark:text-[#EBC982]"
          >
            See all FAQs <ArrowRight size={16} strokeWidth={1.8} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        <ul className="self-start rounded-[22px] border border-[#eadbb7] bg-white/80 px-5 dark:border-white/10 dark:bg-white/[0.04] sm:px-7">
          {faqs.map(({ question, answer, answerHtml }, i) => {
            const isOpen = open === i;
            const id = `home-faq-${i}`;
            return (
              <li key={question} className="border-b border-[#f0e4c8] last:border-b-0 dark:border-white/[0.08]">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={id}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex min-h-[64px] w-full items-center justify-between gap-4 py-4 text-left text-[1.02rem] font-semibold text-[#2f3236] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87b25] dark:text-[#f5ecd8]"
                  >
                    {question}
                    <ChevronDown size={18} strokeWidth={2} className={`shrink-0 text-[#a87b25] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                </h3>
                <div id={id} className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    {answerHtml ? (
                      <div className="pb-5 text-[0.98rem] leading-[1.65] text-[#5e6064] dark:text-[#bdb6a6]" dangerouslySetInnerHTML={{ __html: answerHtml }} />
                    ) : (
                      <p className="pb-5 text-[0.98rem] leading-[1.65] text-[#5e6064] dark:text-[#bdb6a6]">{answer}</p>
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

/* The last thing on the page: one dark panel, one decision. */
export function FinalCta() {
  return (
    <section className="ymg-final-cta bg-[#FFF5E0] px-5 pb-16 pt-4 dark:bg-[#191917] sm:px-10 lg:px-16 lg:pb-24">
      <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[32px] bg-[#3d4145] px-6 py-14 text-center text-white shadow-[0_40px_90px_rgba(47,40,28,0.25)] dark:ring-1 dark:ring-[#D8B26B]/20 sm:px-10 lg:py-20">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(45%_70%_at_0%_0%,rgba(216,178,107,0.3),transparent_70%),radial-gradient(40%_70%_at_100%_100%,rgba(235,201,130,0.18),transparent_70%)]" />
        <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D8B26B]/15" />
        <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#D8B26B]/10" />

        <div className="relative mx-auto max-w-[760px]">
          <h2 className="text-[2.2rem] leading-[1.05] tracking-[-0.01em] text-white sm:text-[3rem] lg:text-[3.6rem]">
            Your next signed case <span className="text-[#EBC982]">starts with one call.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[34rem] text-[1.06rem] leading-[1.6] text-white/75">
            Tell us your case types and markets. We come back with a plan built for your firm.
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
            <a
              href="tel:+13133065055"
              className="inline-flex h-14 items-center gap-2 rounded-full border border-white/25 px-6 text-[1rem] font-semibold text-white transition-colors hover:border-[#EBC982] hover:text-[#EBC982]"
            >
              <Phone size={16} strokeWidth={2} aria-hidden="true" /> (313) 306-5055
            </a>
          </div>

          <ul className="mx-auto mt-10 grid max-w-[620px] grid-cols-3 divide-x divide-white/10 rounded-[18px] border border-white/10 bg-white/[0.04]">
            {promises.map(({ value, label }) => (
              <li key={value} className="px-3 py-4">
                <p className="font-heading text-[1.5rem] leading-none text-[#EBC982] sm:text-[1.8rem]">{value}</p>
                <p className="mt-1.5 text-[0.8rem] leading-snug text-white/65 sm:text-[0.88rem]">{label}</p>
              </li>
            ))}
          </ul>
          <p className="mt-5 inline-flex items-center gap-2 text-[0.9rem] text-white/70">
            <Check size={15} strokeWidth={2.4} className="text-[#EBC982]" aria-hidden="true" /> No long-term contracts required to start
          </p>
        </div>
      </div>
    </section>
  );
}
