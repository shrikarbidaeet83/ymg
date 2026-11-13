"use client";

import { useMemo, useState } from "react";
import { Plus, Search } from "lucide-react";
import ScrollMotion from "@/components/home/ScrollMotion";
import {
  BookCallButton,
  BookCallButtonDark,
} from "@/components/site/Cta";
import { cms } from "@/lib/cms";
import { builtInFaqs, type Faq } from "@/data/faqs";
import HeroBackdrop from "@/components/site/HeroBackdrop";

// When the site is connected to the YMG CMS, the FAQs published there are the
// whole list (deleting one there removes it here); the built-in list is only
// the fallback for builds without the CMS.
const faqs: Faq[] = cms.enabled
  ? cms.faqs.map((f) => ({
      question: f.title,
      answer: "",
      answerHtml: f.answer,
    }))
  : builtInFaqs;

const plain = (html: string) => html.replace(/<[^>]+>/g, " ");

export default function FAQsPage() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(0);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs
      .map((faq, index) => ({ faq, index }))
      .filter(
        ({ faq }) =>
          !q ||
          `${faq.question} ${faq.answer} ${plain(faq.answerHtml ?? "")}`
            .toLowerCase()
            .includes(q),
      );
  }, [query]);

  return (
    <div className="ymg-site">
      {/* Hero: the title, then the search, then the line under it */}
      <section className="ymg-dark-hero relative isolate overflow-hidden bg-[#0B231D] px-5 pb-20 pt-32 text-[#F5F1E8] sm:px-10 sm:pt-36 lg:px-12 lg:pb-24">
        <HeroBackdrop src="/images/services/legal-intake.jpg" />
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-2 lg:items-end lg:gap-16">
          <h1
            data-reveal
            className="max-w-[16ch] text-[clamp(2.18rem,4.48vw,4rem)] leading-[1] tracking-[-0.02em]"
          >
            Questions firms <span className="text-[#D6B263]">ask first.</span>
          </h1>
          <div data-reveal data-reveal-delay="120">
            <label htmlFor="faq-search" className="sr-only">
              Search the questions
            </label>
            <div className="flex items-center gap-3 rounded-full bg-[#F5F1E8] py-2 pl-5 pr-2 text-[#0B231D] shadow-[0_24px_50px_rgba(0,0,0,0.3)]">
              <Search
                size={20}
                className="shrink-0 text-[#0B231D]/60"
                aria-hidden="true"
              />
              <input
                id="faq-search"
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setOpen(0);
                }}
                placeholder="Search the questions"
                className="min-h-12 w-full bg-transparent text-[1.05rem] outline-none placeholder:text-[#0B231D]/45"
              />
            </div>
            <p className="mt-5 max-w-[30rem] text-[1.08rem] leading-[1.6] text-[#C9C3B4]">
              Straight answers about our services, intake, lead generation and
              how we work with your firm.
            </p>
          </div>
        </div>
      </section>

      {/* The questions, with a way to ask your own beside them */}
      <section className="bg-white px-5 py-24 sm:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
          <aside className="order-2 lg:sticky lg:top-32 lg:order-none lg:self-start">
            <h2 className="max-w-[16ch] text-[clamp(1.9rem,2.72vw,2.4rem)] leading-[1.05] tracking-[-0.015em] text-[#0B231D]">
              Still have a <span className="text-[#8C6B22]">question?</span>
            </h2>
            <p className="mt-5 max-w-[26rem] text-[1.04rem] leading-[1.6] text-[#4E5A54]">
              Book a free strategy call and ask us directly.
            </p>
            <div className="mt-8">
              <BookCallButtonDark />
            </div>
          </aside>

          <div aria-live="polite">
            {shown.length === 0 ? (
              <p className="border-t border-[#0B231D]/12 py-10 text-[1.1rem] text-[#4E5A54]">
                No question matches &ldquo;{query}&rdquo;. Try another word, or
                ask us on a call.
              </p>
            ) : (
              <ol className="border-t border-[#0B231D]/12">
                {shown.map(({ faq, index }, i) => {
                  const isOpen = open === i;
                  return (
                    <li
                      key={faq.question}
                      className="border-b border-[#0B231D]/12"
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`faq-${index}`}
                        onClick={() => setOpen(isOpen ? -1 : i)}
                        className="flex w-full items-start gap-5 py-7 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8A24E]"
                      >
                        <span className="ymg-num w-8 shrink-0 pt-1 text-[1rem] text-[#8C6B22]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="ymg-num flex-1 text-[1.45rem] leading-snug text-[#0B231D] sm:text-[1.65rem]">
                          {faq.question}
                        </span>
                        <span
                          className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,color,border-color] duration-300 ${
                            isOpen
                              ? "rotate-45 border-[#0B231D] bg-[#0B231D] text-[#F5F1E8]"
                              : "border-[#0B231D]/20 text-[#0B231D]"
                          }`}
                        >
                          <Plus size={18} aria-hidden="true" />
                        </span>
                      </button>
                      <div
                        id={`faq-${index}`}
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                      >
                        <div className="overflow-hidden">
                          {faq.answerHtml ? (
                            <div
                              className="max-w-[44rem] pb-8 pl-13 pr-12 text-[1.04rem] leading-[1.65] text-[#4E5A54] [&_a]:underline [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5"
                              dangerouslySetInnerHTML={{
                                __html: faq.answerHtml,
                              }}
                            />
                          ) : (
                            <p className="max-w-[44rem] pb-8 pl-13 pr-12 text-[1.04rem] leading-[1.65] text-[#4E5A54]">
                              {faq.answer}
                            </p>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>
            )}
          </div>
        </div>
      </section>

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
            The quickest answer{" "}
            <span className="text-[#D6B263]">is a call.</span>
          </h2>
          <div data-reveal className="flex flex-col gap-3 sm:flex-row lg:pb-3">
            <BookCallButton />
          </div>
        </div>
      </section>
      <ScrollMotion />
    </div>
  );
}
