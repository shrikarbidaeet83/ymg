"use client";

import { motion } from "framer-motion";
import { Check, MousePointer2, Search } from "lucide-react";
import { OutcomeRow, Scene, scenePalette as c, text, useTone, useSceneInView, useSceneTimeline } from "./Scene";

// Deck, service 01 (Case Generation): paid search, Meta, YouTube and pay-per-call campaigns
// built around the firm's case type and geography.
// A mass tort search, so the first service shown is not read as accident-only.
const QUERY = "hair relaxer lawsuit";
const facts = [
  { item: "Search: “hair relaxer lawsuit”", detail: "Atlanta, GA · 9:41 PM" },
  { item: "Your ad: Free Case Review", detail: "Targeted to your case types and markets" },
  { item: "Case review form submitted", detail: "Diagnosis confirmed · used products 5+ years" },
];
// 0 empty search · 1 query typed · 2 results with your ad · 3 ad clicked, form sent · 4 lead captured
const DELAYS = [600, 1100, 1100, 1000];

export default function SearchToLead() {
  const { ref, inView } = useSceneInView();
  const tone = useTone();
  const { step, done, reduce } = useSceneTimeline(5, DELAYS, inView);
  const t = reduce ? 0 : 0.4;
  const typed = step >= 1 ? QUERY : "";

  return (
    <Scene label="Sample search campaign" innerRef={ref}>
      <div className="grid items-center gap-6 sm:grid-cols-[minmax(0,300px)_minmax(0,1fr)]">
        {/* browser window, as in the deck */}
        <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-[14px] border border-[#e6ddca] bg-white shadow-[0_14px_28px_rgba(31,42,68,0.12)]" aria-hidden="true">
          <div className="flex items-center gap-1.5 border-b border-[#efe7d6] bg-[#faf6ee] px-3 py-2">
            {["#e0775c", "#d8b26b", "#5cc2a8"].map((dot) => (
              <span key={dot} className="h-2 w-2 rounded-full" style={{ background: dot }} />
            ))}
          </div>
          <div className="space-y-2.5 p-3.5">
            <div className="flex items-center gap-2 rounded-full bg-[#f3eee3] px-3 py-2">
              <Search size={14} strokeWidth={2} color={tone.line} />
              <span className="min-h-[1.2em] text-[0.8125rem] text-[#2f3236]">
                {reduce ? (
                  typed
                ) : (
                  <motion.span
                    key={step >= 1 ? "typed" : "empty"}
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={{ clipPath: "inset(0 0% 0 0)" }}
                    transition={{ duration: 0.9, ease: "linear" }}
                    className="inline-block"
                  >
                    {typed}
                  </motion.span>
                )}
                {step === 0 && <span className="inline-block h-3.5 w-px translate-y-0.5 animate-pulse bg-[#2f3236] motion-reduce:animate-none" />}
              </span>
            </div>

            {/* sponsored result: your firm */}
            <motion.div
              initial={false}
              animate={{ opacity: step >= 2 ? 1 : 0, y: step >= 2 ? 0 : 6 }}
              transition={{ duration: t }}
              className="relative rounded-[10px] border px-3 py-2.5"
              style={{
                borderColor: step === 3 ? tone.now : "#ead7ad",
                background: step >= 3 ? tone.nowBg : "#fffaf0",
              }}
            >
              <span className="rounded-full bg-[#d8b26b] px-2 py-0.5 text-[0.6875rem] font-semibold text-[#2f3236]">Sponsored</span>
              <p className="mt-1.5 text-[0.875rem] font-semibold text-[#2f5aa0]">Free Case Review</p>
              <p className="text-[0.75rem] text-[#6b6e72]">Used chemical hair relaxers? See if you qualify for a claim.</p>
              <motion.span
                initial={false}
                animate={{ opacity: step === 3 ? 1 : 0, scale: step === 3 ? 1 : 0.6 }}
                transition={{ duration: t }}
                className="absolute bottom-1.5 right-3"
              >
                <MousePointer2 size={18} strokeWidth={1.8} fill="#fff" color={c.navy} />
              </motion.span>
            </motion.div>

            {/* organic results stay quiet */}
            {[0, 1].map((row) => (
              <motion.div
                key={row}
                initial={false}
                animate={{ opacity: step >= 2 ? 1 : 0 }}
                transition={{ duration: t, delay: reduce ? 0 : 0.1 * (row + 1) }}
                className="space-y-1.5 px-1"
              >
                <span className="block h-2 w-3/5 rounded-full bg-[#e7dfcf]" />
                <span className="block h-2 w-4/5 rounded-full bg-[#efe9dc]" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <p className={text.outcome}>Found at the moment they search.</p>
          <ol className="mt-4 grid gap-2" aria-label="How this sample lead was captured">
            {facts.map((fact, i) => {
              const reached = step >= i + 1;
              const current = step === i + 1;
              return (
                <motion.li
                  key={fact.item}
                  initial={false}
                  animate={{ opacity: reached ? 1 : 0.4 }}
                  transition={{ duration: t }}
                  className="flex items-center gap-3 rounded-[12px] border border-[#ece2cc] bg-white px-4 py-3"
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: current ? tone.nowBg : reached ? tone.doneBg : tone.idleBg,
                      color: current ? tone.now : reached ? tone.done : tone.idleInk,
                    }}
                    aria-hidden="true"
                  >
                    {reached && !current ? <Check size={16} strokeWidth={2.6} /> : <span className="text-[0.875rem] font-semibold">{i + 1}</span>}
                  </span>
                  <span className="min-w-0">
                    <span className={`block ${text.item}`}>{fact.item}</span>
                    <span className={`block ${text.detail}`}>{fact.detail}</span>
                  </span>
                </motion.li>
              );
            })}
          </ol>
          <div className="mt-2">
            <OutcomeRow show={done} reduce={reduce}>
              <Check size={18} strokeWidth={2.6} aria-hidden="true" /> New lead in your pipeline
            </OutcomeRow>
          </div>
          <p className={`mt-3 ${text.detail}`}>Google Search · Meta · YouTube · Pay-per-call</p>
        </div>
      </div>
    </Scene>
  );
}
