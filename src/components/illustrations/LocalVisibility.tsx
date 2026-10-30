"use client";

import { LayoutGroup, motion } from "framer-motion";
import { Check, MapPin, Search } from "lucide-react";
import { OutcomeRow, Scene, text, useTone, useSceneInView, useSceneTimeline } from "./Scene";

// Deck, service 01 (Case Generation, SEO for Law Firms): long-term organic visibility
// through local SEO, keyword targeting and content strategy — consistent lead flow
// without paying per click.
const others = ["Injury attorney group", "Accident law office", "Trial lawyers LLP"];
// Your firm's position in the local results at each step (0 = top).
const POSITION = [3, 2, 1, 0];
const MONTHS = ["Month 1", "Month 3", "Month 6", "Month 9"];
// Visibility line, drawn further at each step; y grows upward.
const LINE = "M8 92 C 40 90, 60 84, 88 74 S 140 52, 168 40 S 214 18, 232 12";
const DELAYS = [1000, 1000, 1100];

export default function LocalVisibility() {
  const { ref, inView } = useSceneInView();
  const tone = useTone();
  const { step, done, reduce } = useSceneTimeline(POSITION.length, DELAYS, inView);
  const t = reduce ? 0 : 0.5;
  const pos = POSITION[step];
  const results = [...others];
  results.splice(pos, 0, "You");

  return (
    <Scene label="Sample local search visibility" innerRef={ref}>
      <p className={text.outcome}>Found in local search without paying per click.</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        {/* local results, as in the deck */}
        <div className="rounded-[14px] border border-[#e6ddca] bg-white p-3.5 shadow-[0_10px_22px_rgba(31,42,68,0.08)]" aria-hidden="true">
          <div className="flex items-center gap-2 rounded-full bg-[#f3eee3] px-3 py-2">
            <Search size={14} strokeWidth={2} color={tone.line} />
            <span className="text-[0.8125rem] text-[#2f3236]">personal injury lawyer</span>
          </div>
          <LayoutGroup>
            <ol className="mt-3 grid gap-1.5">
              {results.map((name, i) => {
                const you = name === "You";
                return (
                  <motion.li
                    key={name}
                    layout={!reduce}
                    transition={{ type: "spring", stiffness: 240, damping: 28 }}
                    className="flex items-center gap-2.5 rounded-[10px] px-2.5 py-2"
                    style={you ? { background: tone.nowBg, boxShadow: `inset 0 0 0 1.5px ${done ? tone.done : tone.now}` } : undefined}
                  >
                    <span className="w-4 text-center text-[0.75rem] font-semibold tabular-nums text-[#8a8c8f]">{i + 1}</span>
                    <MapPin size={15} strokeWidth={2} color={you ? (done ? tone.done : tone.now) : tone.idleInk} />
                    <span className={`truncate text-[0.875rem] ${you ? "font-semibold text-[#2f3236]" : "text-[#8a8c8f]"}`}>
                      {you ? "Your Law Firm" : name}
                    </span>
                    {you && (
                      <span className="ml-auto shrink-0 rounded-full bg-white px-2 py-0.5 text-[0.6875rem] font-semibold" style={{ color: done ? tone.done : tone.now }}>
                        Local SEO
                      </span>
                    )}
                  </motion.li>
                );
              })}
            </ol>
          </LayoutGroup>
        </div>

        {/* visibility over time */}
        <div className="rounded-[14px] border border-[#e6ddca] bg-white px-4 pb-3 pt-3.5" aria-hidden="true">
          <p className={text.detail}>Organic visibility</p>
          <svg viewBox="0 0 240 104" className="mt-2 w-full">
            {[24, 52, 80].map((y) => (
              <line key={y} x1="8" x2="232" y1={y} y2={y} stroke={tone.grid} strokeWidth="1" />
            ))}
            <motion.path
              d={`${LINE} L 232 100 L 8 100 Z`}
              fill={tone.doneBg}
              initial={false}
              animate={{ opacity: done ? 1 : 0 }}
              transition={{ duration: t }}
            />
            <motion.path
              d={LINE}
              fill="none"
              stroke={tone.done}
              strokeWidth="3"
              strokeLinecap="round"
              initial={false}
              animate={{ pathLength: (step + 1) / POSITION.length }}
              transition={{ duration: reduce ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>
          <div className="mt-1 grid grid-cols-4 text-[0.75rem] text-[#8a8c8f]">
            {MONTHS.map((m, i) => (
              <span key={m} className={i <= step ? "font-semibold text-[#2f3236]" : undefined}>
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3">
        <OutcomeRow show={done} reduce={reduce}>
          <Check size={18} strokeWidth={2.6} aria-hidden="true" /> Consistent lead flow from organic search
        </OutcomeRow>
      </div>
      <p className={`mt-3 ${text.detail}`}>Local SEO · keyword targeting · content strategy</p>
    </Scene>
  );
}
