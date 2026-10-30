"use client";

import { motion } from "framer-motion";
import { Check, FileText, FolderOpen } from "lucide-react";
import { OutcomeRow, Scene, scenePalette as c, text, useTone, useSceneInView, useSceneTimeline } from "./Scene";

// Deck, service 05 (Case Onboarding): digital intake packets (ID verification, incident
// details, insurance information, medical authorization), document collection named and
// organized in a consistent structure, and case status tracking.
const packet = [
  { label: "ID verification", file: "01_ID_Verification.pdf" },
  { label: "Incident details", file: "02_Incident_Report.pdf" },
  { label: "Insurance information", file: "03_Insurance.pdf" },
  { label: "Medical authorization", file: "04_Medical_Authorization.pdf" },
];
// 0 packet sent · 1-4 items completed and filed · 5 file complete
const DELAYS = [700, 700, 700, 700, 900];

export default function CaseOnboarding() {
  const { ref, inView } = useSceneInView();
  const tone = useTone();
  const { step, done, reduce } = useSceneTimeline(6, DELAYS, inView);
  const t = reduce ? 0 : 0.4;
  const completed = Math.min(step, packet.length);

  return (
    <Scene label="Sample client onboarding" innerRef={ref}>
      <div className="grid items-center gap-6 sm:grid-cols-[minmax(0,250px)_minmax(0,1fr)]">
        {/* tablet with the intake packet, as in the deck */}
        <div className="mx-auto w-full max-w-[250px] rounded-[22px] p-2.5 shadow-[0_16px_30px_rgba(31,42,68,0.22)]" style={{ background: c.navy }} aria-hidden="true">
          <div className="rounded-[15px] bg-white px-4 pb-4 pt-3.5">
            <p className="text-[0.875rem] font-semibold text-[#2f3236]">Client intake packet</p>
            <ul className="mt-3 grid gap-2.5">
              {packet.map(({ label }, i) => {
                const on = i < completed;
                const current = i === completed && step > 0 && step <= packet.length;
                return (
                  <li key={label} className="flex items-center gap-2.5">
                    <motion.span
                      initial={false}
                      animate={{ backgroundColor: on ? tone.done : current ? tone.nowBg : tone.idleBg }}
                      transition={{ duration: t }}
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={current ? { boxShadow: `inset 0 0 0 2px ${tone.now}` } : undefined}
                    >
                      {on && <Check size={12} strokeWidth={3} color="#fff" />}
                    </motion.span>
                    <span className={`text-[0.8125rem] ${on ? "text-[#2f3236]" : "text-[#8a8c8f]"}`}>{label}</span>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 flex items-center gap-2">
              <span className="h-2 flex-1 overflow-hidden rounded-full bg-[#efe7d6]">
                <motion.span
                  className="block h-full rounded-full"
                  style={{ background: tone.done }}
                  initial={false}
                  animate={{ width: `${(completed / packet.length) * 100}%` }}
                  transition={{ duration: reduce ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
              <span
                className="rounded-[6px] px-2 py-1 text-[0.6875rem] font-semibold"
                style={done ? { background: tone.done, color: "#fff" } : { background: tone.idleBg, color: tone.muted }}
              >
                Submitted
              </span>
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <p className={text.outcome}>Client files ready on day one.</p>
          <div className="mt-4 rounded-[12px] border border-[#ece2cc] bg-white px-4 py-3">
            <p className={`flex items-center gap-2 ${text.item}`}>
              <FolderOpen size={18} strokeWidth={1.8} color={c.goldDeep} aria-hidden="true" />
              Garcia, M. · MVA · 2026-10-18
            </p>
            <ul className="mt-2 grid gap-1.5" aria-label="Documents collected">
              {packet.map(({ file }, i) => (
                <motion.li
                  key={file}
                  initial={false}
                  animate={{ opacity: i < completed ? 1 : 0, x: i < completed ? 0 : -8 }}
                  transition={{ duration: t }}
                  className={`flex items-center gap-2 pl-1 ${text.detail}`}
                  aria-hidden={i >= completed}
                >
                  <FileText size={15} strokeWidth={1.8} color={tone.line} aria-hidden="true" />
                  <span className="text-[#2f3236]">{file}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="mt-2">
            <OutcomeRow show={done} reduce={reduce}>
              <Check size={18} strokeWidth={2.6} aria-hidden="true" /> File complete, ready for your legal team
            </OutcomeRow>
          </div>
          <p className={`mt-3 ${text.detail}`}>Named and organized the same way for every client</p>
        </div>
      </div>
    </Scene>
  );
}
