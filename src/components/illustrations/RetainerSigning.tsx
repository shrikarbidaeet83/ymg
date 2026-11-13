"use client";

import { motion } from "framer-motion";
import { Check, Database } from "lucide-react";
import { OutcomeRow, Scene, text, useTone, useSceneInView, useSceneTimeline } from "./Scene";

// Deck, service 03 (Intake & Retainer Services): digital retainer delivery, follow-up and
// signed-agreement confirmation; intake data and signed agreements feed the firm's CRM.
const events = [
  { item: "Retainer sent", detail: "By text and email · 6:02 PM" },
  { item: "Opened by the client", detail: "On their phone · 6:05 PM" },
  { item: "Signed", detail: "Signature confirmed · 6:09 PM" },
];
// 0 drafted · 1 sent · 2 opened · 3 signature drawn, signed · 4 synced to CRM
const DELAYS = [700, 1000, 1300, 1100];
const SIGNATURE = "M14 30c8-14 14-16 16-8s-2 14 4 6 10-18 14-10-4 12 4 8 12-10 16-4 4 6 12 0";

export default function RetainerSigning() {
  const { ref, inView } = useSceneInView();
  const tone = useTone();
  const { step, done, reduce } = useSceneTimeline(5, DELAYS, inView);
  const t = reduce ? 0 : 0.4;
  const signed = step >= 3;

  return (
    <Scene label="Sample retainer signing" innerRef={ref}>
      <div className="grid items-center gap-6 sm:grid-cols-[minmax(0,280px)_minmax(0,1fr)]">
        <div className="relative mx-auto w-full max-w-[280px] pb-14" aria-hidden="true">
          {/* the agreement */}
          <motion.div
            initial={false}
            animate={{ y: step >= 1 ? 0 : 8, opacity: step >= 1 ? 1 : 0.6 }}
            transition={{ duration: t }}
            className="relative rounded-[6px] border border-[#e6ddca] bg-white px-5 pb-5 pt-4 shadow-[0_16px_30px_rgba(31,42,68,0.12)]"
          >
            <span className="absolute right-0 top-0 h-6 w-6 rounded-bl-[6px] bg-[#f3eee3]" />
            <p className="text-center text-[0.75rem] font-semibold tracking-[0.12em] text-[#6b6e72]">RETAINER AGREEMENT</p>
            <div className="mt-3 space-y-2">
              {["w-full", "w-5/6", "w-full", "w-2/3", "w-4/5"].map((w, i) => (
                <span key={i} className={`block h-2 rounded-full bg-[#efe7d6] ${w}`} />
              ))}
            </div>
            <svg viewBox="0 0 110 40" className="mt-4 h-10 w-[120px]">
              <motion.path
                d={SIGNATURE}
                fill="none"
                stroke={tone.line}
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={false}
                animate={{ pathLength: signed ? 1 : 0, opacity: signed ? 1 : 0 }}
                transition={{ duration: reduce ? 0 : 1, ease: "easeInOut" }}
              />
            </svg>
            <span className="block h-px w-[140px] bg-[#cfc5b0]" />
            <p className="mt-1 text-[0.6875rem] text-[#66696d]">Client signature</p>
            <motion.span
              initial={false}
              animate={{ scale: signed ? 1 : 0, opacity: signed ? 1 : 0 }}
              transition={{ duration: t, delay: reduce ? 0 : 0.7, type: "spring", stiffness: 380, damping: 22 }}
              className="absolute bottom-9 right-5 flex h-11 w-11 items-center justify-center rounded-full text-white shadow-[0_8px_16px_rgba(35,121,107,0.3)]"
              style={{ background: tone.done }}
            >
              <Check size={22} strokeWidth={3} />
            </motion.span>
          </motion.div>

          {/* CRM record the signed agreement lands in */}
          <motion.div
            initial={false}
            animate={{ opacity: step >= 4 ? 1 : 0, x: step >= 4 ? 0 : -10 }}
            transition={{ duration: t }}
            className="absolute bottom-0 right-0 flex items-center gap-2 rounded-[10px] border border-[#e6ddca] bg-white px-3 py-2 shadow-[0_10px_20px_rgba(31,42,68,0.12)]"
          >
            <Database size={16} strokeWidth={1.8} color={tone.line} />
            <span className="text-[0.75rem] font-semibold text-[#2f3236]">Case record</span>
            <span className="rounded-full px-2 py-0.5 text-[0.6875rem] font-semibold" style={{ background: tone.doneBg, color: tone.done }}>
              Synced
            </span>
          </motion.div>
        </div>

        <div className="min-w-0">
          <p className={text.outcome}>Qualified leads guided to a signed retainer.</p>
          <ol className="mt-4 grid gap-2" aria-label="Sample retainer timeline">
            {events.map((event, i) => {
              const reached = step >= i + 1;
              // The latest step reads as "happening now", except Signed, which is a finished outcome.
              const current = step === i + 1 && i < events.length - 1;
              return (
                <motion.li
                  key={event.item}
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
                    <span className={`block ${text.item}`}>{event.item}</span>
                    <span className={`block ${text.detail}`}>{event.detail}</span>
                  </span>
                </motion.li>
              );
            })}
          </ol>
          <div className="mt-2">
            <OutcomeRow show={done} reduce={reduce}>
              <Check size={18} strokeWidth={2.6} aria-hidden="true" /> Signed retainer synced to your CRM
            </OutcomeRow>
          </div>
        </div>
      </div>
    </Scene>
  );
}
