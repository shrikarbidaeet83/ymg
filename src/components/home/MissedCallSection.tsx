"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, PhoneIncoming } from "lucide-react";

const stages = [
  { step: "Answered", title: "Call picked up", note: "Live intake, 9:47 PM" },
  { step: "Screened", title: "Your criteria", note: "Timing, injury, liability" },
  { step: "Qualified", title: "Meets requirements", note: "No existing representation" },
  { step: "Intake", title: "File complete", note: "Details documented" },
  { step: "Delivered", title: "To your firm", note: "Ready for consultation" },
];

// Ringing for RING_MS, then one stage every STEP_MS; holds on "Delivered" for HOLD_MS, then loops.
const RING_MS = 1600;
const STEP_MS = 1100;
const HOLD_MS = 2800;

export default function MissedCallSection() {
  // -1 = still ringing; 0..4 = latest stage reached.
  const [stage, setStage] = useState(-1);
  const [cycle, setCycle] = useState(0);
  const timers = useRef<number[]>([]);

  // Every state change is scheduled, so the effect itself never sets state.
  const schedule = useCallback(() => {
    timers.current.forEach(window.clearTimeout);
    timers.current = [];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      timers.current.push(window.setTimeout(() => setStage(stages.length - 1), 0));
      return;
    }
    timers.current.push(window.setTimeout(() => setStage(-1), 0));
    stages.forEach((_, index) => {
      timers.current.push(window.setTimeout(() => setStage(index), RING_MS + index * STEP_MS));
    });
    const last = RING_MS + (stages.length - 1) * STEP_MS;
    timers.current.push(window.setTimeout(() => setCycle((c) => c + 1), last + HOLD_MS));
  }, []);

  useEffect(() => {
    schedule();
    const pending = timers.current;
    return () => pending.forEach(window.clearTimeout);
  }, [schedule, cycle]);

  const answered = stage >= 0;
  const progress = answered ? stage / (stages.length - 1) : 0;

  return (
    <section className="ymg-home-hero relative isolate overflow-hidden bg-[#FFF5E0] px-5 py-16 sm:px-10 lg:px-16 lg:py-24 xl:px-20">
      <div className="mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,500px)] lg:gap-14">
        <div>
          <h2 className="text-[2.2rem] leading-[1.05] tracking-[-0.01em] text-[#2f3236] sm:text-[2.8rem] lg:text-[3.2rem]">
            Every case starts with a call
            <span className="block text-[#c9a14f]">someone has to answer.</span>
          </h2>
          <p className="mt-5 max-w-[34rem] text-[1.06rem] leading-[1.6] text-[#55585c] sm:text-[1.13rem]">
            Prospective clients call when they need help, often at night and on weekends. YMG Legal answers, screens the
            caller against your criteria, and moves the case toward your firm.
          </p>
          <Link
            href="/services/legal-intake"
            className="ymg-home-secondary mt-7 inline-flex items-center gap-2 text-[1rem] font-semibold text-[#8a6420] hover:text-[#5e4416]"
          >
            See Legal Intake Services <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </div>

        <div className="ymg-call-card relative rounded-[22px] bg-[#3d4145] p-6 text-[#f5ecd8] shadow-[0_28px_56px_rgba(47,50,54,0.26)] sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <p className="flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#e3bd72]">
              <span className="relative flex h-3 w-3 shrink-0" aria-hidden="true">
                {!answered && <span className="absolute inset-0 animate-ping rounded-full bg-[#e3bd72] opacity-60 motion-reduce:animate-none" />}
                <span className={`relative h-3 w-3 rounded-full ${answered ? "bg-[#7fd09c]" : "bg-[#e3bd72]"}`} />
              </span>
              {answered ? "Answered by YMG intake" : "Incoming call · 9:47 PM"}
            </p>
            <span
              className={`shrink-0 rounded-full px-3 py-1.5 text-[0.72rem] font-semibold transition-colors duration-500 ${
                answered ? "bg-[#284a37] text-[#bfe9cd]" : "bg-[#5a3b36] text-[#f6c9bd]"
              }`}
            >
              {answered ? "Picked up in 8 sec" : "Missed at most firms"}
            </span>
          </div>
          <p className="ymg-call-title mt-5 flex items-center gap-3 font-heading text-[1.6rem] leading-tight text-[#f5ecd8] sm:text-[1.85rem]">
            <PhoneIncoming size={24} strokeWidth={1.6} className="shrink-0 text-[#e3bd72]" aria-hidden="true" />
            Motor vehicle accident
          </p>
          <p className="ymg-call-meta mt-2 text-[0.98rem] leading-[1.5] text-[#f5ecd8]/80">
            Las Vegas, NV · rear-ended on I-15 yesterday · treatment started · no attorney yet
          </p>
          <div className="mt-6 flex items-baseline gap-4 border-t border-[#f5ecd8]/15 pt-5">
            <span className="font-heading text-[2.9rem] leading-none text-[#e3bd72]">48%</span>
            <p className="ymg-call-meta text-[0.9rem] leading-[1.45] text-[#f5ecd8]/85">
              of law firms were essentially unreachable by phone in a 2024 secret-shopper study.
              <a
                href="https://www.clio.com/resources/legal-trends/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-[0.74rem] text-[#f5ecd8]/60 underline underline-offset-2 hover:text-[#e3bd72]"
              >
                Source: Clio, Legal Trends Report 2024
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-10 max-w-[1240px] lg:mt-14">
        <div className="-mx-5 overflow-x-auto px-5 pb-4 pt-2 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
          <ol className="relative grid min-w-[760px] grid-cols-5 gap-3 sm:min-w-0 lg:gap-4" aria-label="How this sample lead moves">
            <span aria-hidden="true" className="absolute left-[6%] right-[6%] top-1/2 border-t-2 border-dashed border-[#d8b26b]/70" />
            <span
              aria-hidden="true"
              className="absolute left-[6%] top-1/2 h-[2px] -translate-y-px origin-left bg-[#c99a45] transition-transform duration-700 ease-out"
              style={{ width: "88%", transform: `scaleX(${progress})` }}
            />
            {stages.map(({ step, title, note }, index) => {
              const reached = index <= stage;
              const current = index === stage;
              return (
                <li
                  key={step}
                  aria-current={current ? "step" : undefined}
                  className={`ymg-stage relative rounded-[14px] border px-4 py-4 transition-all duration-500 ease-out lg:px-5 ${
                    current
                      ? "ymg-stage-current -translate-y-1 border-[#D8B26B] bg-[#D8B26B] shadow-[0_14px_26px_rgba(168,123,37,0.25)]"
                      : reached
                        ? "border-[#e3c98f] bg-[#fff9ec]"
                        : "border-[#ead3a0] bg-white"
                  }`}
                >
                  <span className="flex items-center justify-between gap-2">
                    <span className={`text-[0.72rem] font-bold uppercase tracking-[0.12em] ${current ? "text-[#2f3236]" : "text-[#a87b25]"}`}>
                      {step}
                    </span>
                    {reached && !current && (
                      <Check size={15} strokeWidth={2.4} className="text-[#2f7a4d]" aria-label="done" />
                    )}
                  </span>
                  <span className="mt-1.5 block font-heading text-[1.12rem] leading-tight text-[#2f3236] lg:text-[1.22rem]">{title}</span>
                  <span className={`mt-1 block text-[0.84rem] leading-snug ${current ? "text-[#3d4145]" : "text-[#77797c]"}`}>{note}</span>
                </li>
              );
            })}
          </ol>
        </div>
        <p className="mt-3 text-[0.74rem] uppercase tracking-[0.1em] text-[#85878a]">Sample lead · illustrative</p>
      </div>
    </section>
  );
}
