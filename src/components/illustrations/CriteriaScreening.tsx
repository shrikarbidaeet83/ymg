"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, X, ShieldCheck } from "lucide-react";
import { OutcomeRow, Scene, scenePalette as c, text, useTone, useSceneInView, useSceneTimeline } from "./Scene";

// Deck, service 02 (Lead Qualification): criteria-based screening, real-time routing
// (live transfer / callback scheduled) and disqualification handling (logged separately).
// Mass tort criteria from the content guide: exposure, product or drug history, injury or
// diagnosis, timing, documentation.
const scenarios = {
  pi: {
    tab: "Personal Injury",
    criteria: ["Liability", "Damages", "Statute of limitations", "Case type"],
    lead: { title: "Motor vehicle accident", meta: "Henderson, NV · received 9:47 PM" },
    route: "Live transfer to your intake line",
    reject: { title: "Rear-end collision, 2019", reason: "Outside the statute of limitations" },
  },
  mt: {
    tab: "Mass Tort",
    criteria: ["Product use or exposure", "Injury or diagnosis", "Timing", "Documentation"],
    lead: { title: "Hair relaxer claim", meta: "Atlanta, GA · web form at 2:05 PM" },
    route: "Callback scheduled for 4:30 PM today",
    reject: { title: "Talcum powder inquiry", reason: "No qualifying diagnosis" },
  },
} as const;

type Key = keyof typeof scenarios;
// 0 start · 1-4 criteria tick · 5 qualified + routed · 6 second lead logged separately
const DELAYS = [450, 450, 450, 450, 900, 1000];

export default function CriteriaScreening() {
  const { ref, inView } = useSceneInView();
  const tone = useTone();
  const [key, setKey] = useState<Key>("pi");
  const { step, replay, reduce } = useSceneTimeline(7, DELAYS, inView);
  const s = scenarios[key];
  const ticked = Math.min(step, 4);
  const qualified = step >= 5;
  const rejected = step >= 6;
  const t = reduce ? 0 : 0.4;

  const choose = (next: Key) => {
    if (next === key) return;
    setKey(next);
    replay();
  };

  return (
    <Scene label="Sample leads screened" innerRef={ref}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className={text.outcome}>Only leads that meet your criteria reach your team.</p>
        <div role="tablist" aria-label="Practice area" className="flex rounded-full border border-[#e3d8c0] bg-white p-1">
          {(Object.keys(scenarios) as Key[]).map((k) => (
            <button
              key={k}
              role="tab"
              type="button"
              aria-selected={key === k}
              onClick={() => choose(k)}
              className={`rounded-full px-3.5 py-1.5 text-[0.875rem] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-[#a87b25] ${
                key === k ? "bg-[#2f3236] text-white" : "text-[#5b5e62] hover:text-[#2f3236]"
              }`}
            >
              {scenarios[k].tab}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid items-start gap-5 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        {/* clipboard */}
        <div className="relative rounded-[16px] border border-[#ece2cc] bg-white px-5 pb-5 pt-7">
          <span aria-hidden="true" className="absolute -top-2.5 left-1/2 h-5 w-20 -translate-x-1/2 rounded-[6px]" style={{ background: c.navy }} />
          <p className={text.detail}>Your firm&apos;s criteria</p>
          <ul className="mt-3 grid gap-3">
            {s.criteria.map((item, i) => {
              const on = i < ticked;
              const current = !on && i === ticked && step > 0 && step < 5;
              return (
                <li key={item} className="flex items-center gap-3">
                  <motion.span
                    initial={false}
                    animate={{ backgroundColor: on ? tone.done : current ? tone.nowBg : tone.idleBg }}
                    transition={{ duration: t }}
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                    style={current ? { boxShadow: `inset 0 0 0 2px ${tone.now}` } : undefined}
                    aria-hidden="true"
                  >
                    {on && <Check size={14} strokeWidth={3} color="#fff" />}
                  </motion.span>
                  <span className={on || current ? text.item : "text-[1rem] leading-snug text-[#8a8c8f]"}>{item}</span>
                </li>
              );
            })}
          </ul>
          <motion.span
            aria-hidden="true"
            initial={false}
            animate={{ opacity: qualified ? 1 : 0, scale: qualified ? 1 : 0.8 }}
            transition={{ duration: t }}
            className="absolute -bottom-3 -right-3"
          >
            <ShieldCheck size={44} strokeWidth={1.4} fill={tone.done} color="#fff" />
          </motion.span>
        </div>

        {/* leads */}
        <div className="grid gap-2">
          <div className="rounded-[12px] border border-[#ece2cc] bg-white px-4 py-3">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className={text.item}>{s.lead.title}</p>
                <p className={text.detail}>{s.lead.meta}</p>
              </div>
              <span
                className="shrink-0 rounded-full px-2.5 py-1 text-[0.8125rem] font-semibold"
                style={qualified ? { background: tone.doneBg, color: tone.done } : { background: tone.nowBg, color: tone.now }}
              >
                {qualified ? "Qualified" : step === 0 ? "New lead" : "Screening…"}
              </span>
            </div>
          </div>

          <AnimatePresence initial={false} mode="popLayout">
            {qualified && (
              <motion.div
                key={`route-${key}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: t }}
              >
                <OutcomeRow show reduce={reduce}>
                  <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" /> {s.route}
                </OutcomeRow>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={false}
            animate={{ opacity: rejected ? 1 : 0, y: rejected ? 0 : 6 }}
            transition={{ duration: t }}
            className="mt-2 flex items-start gap-3 rounded-[12px] px-4 py-3"
            style={{ background: tone.rejectBg }}
            aria-hidden={!rejected}
          >
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white" style={{ color: tone.reject }}>
              <X size={14} strokeWidth={3} aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className={`block ${text.item}`}>{s.reject.title}</span>
              <span className={`block ${text.detail}`}>
                {s.reject.reason} · <span style={{ color: tone.reject }}>logged separately</span>
              </span>
            </span>
          </motion.div>
        </div>
      </div>
    </Scene>
  );
}
