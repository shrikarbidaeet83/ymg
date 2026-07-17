import Image from "next/image";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

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
];

export default function ServiceFaqSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#404040] px-5 py-16 text-[#d9ae5d] sm:px-10 sm:py-20 lg:px-16 lg:py-[80px]">
      <Image
        src="/images/big_flowers.png"
        alt=""
        width={190}
        height={190}
        className="pointer-events-none absolute bottom-[78px] left-[19%] z-0 hidden w-[92px] opacity-[0.055] lg:block"
      />
      <Image
        src="/images/small_flowers.png"
        alt=""
        width={125}
        height={125}
        className="pointer-events-none absolute bottom-[134px] left-[14.5%] z-0 hidden w-[32px] opacity-[0.055] lg:block"
      />
      <Image
        src="/images/small_flowers.png"
        alt=""
        width={125}
        height={125}
        className="pointer-events-none absolute bottom-[58px] left-[21%] z-0 hidden w-[38px] opacity-[0.055] lg:block"
      />
      <Image
        src="/images/small_flowers.png"
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
            Find answers to common questions about our legal marketing services,
            intake solutions, lead generation process, and how we help law firms
            grow with qualified cases and measurable results.
          </p>
        </div>

        <div className="w-full min-w-0 lg:max-w-[650px]">
          <div className="w-full min-w-0 space-y-[11px]">
            {serviceFaqs.map(({ question, answer }, index) => (
              <details
                key={question}
                open={index === 1}
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

          <div className="mt-[30px] flex min-w-0 items-center justify-center gap-2 text-[#d9ae5d] sm:gap-[15px]">
            <ChevronLeft className="h-4 w-4" strokeWidth={1.8} />
            {[1, 2, 3, 4, 6].map((page) => (
              <span
                key={page}
                className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[0.9rem] sm:h-[38px] sm:w-[38px] sm:text-[0.96rem] ${
                  page === 4 ? "bg-white text-[#404040]" : ""
                }`}
              >
                {page}
              </span>
            ))}
            <ChevronRight className="h-4 w-4" strokeWidth={1.8} />
          </div>
        </div>
      </div>
    </section>
  );
}
