"use client";

import { motion } from "framer-motion";
import { CalendarClock, Mail } from "lucide-react";
import { OutcomeRow, Scene, scenePalette as c, text, useTone, useSceneInView, useSceneTimeline } from "./Scene";

// Deck, service 04 (Follow-Up & Automation): multi-step SMS and email sequences, live
// re-engagement, lead tracking and pipeline status (New · Contacted · Nurturing · Qualified · Signed).
const stages = ["New", "Contacted", "Nurturing", "Qualified", "Signed"];
// step → furthest pipeline stage reached
const stageAt = [0, 1, 2, 2, 2, 3];
// 0 new · 1 day 1 SMS · 2 day 3 SMS · 3 day 5 email · 4 lead replies · 5 callback booked
const DELAYS = [700, 1100, 1100, 1100, 1100];

type Item =
  | { kind: "out"; day: string; text: string; note?: string }
  | { kind: "email"; day: string; subject: string }
  | { kind: "in"; text: string };

const thread: Item[] = [
  {
    kind: "out",
    day: "Day 1 · Text",
    text: "Hi Maria, this is the intake team following up on your case inquiry. Is now a good time to talk?",
    note: "Sent with consent · Reply STOP to opt out",
  },
  { kind: "out", day: "Day 3 · Text", text: "Just checking in. A quick 5-minute call is all we need to review your case." },
  { kind: "email", day: "Day 5 · Email", subject: "Your case review: next steps" },
  { kind: "in", text: "Sorry, busy week. Can you call me Thursday after 5?" },
];

export default function FollowUpSequence() {
  const { ref, inView } = useSceneInView();
  const tone = useTone();
  const { step, reduce } = useSceneTimeline(6, DELAYS, inView);
  const t = reduce ? 0 : 0.42;
  const reached = stageAt[step];

  return (
    <Scene label="Sample follow-up sequence" innerRef={ref}>
      <div className="grid items-center gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,250px)]">
        <div className="min-w-0">
          <p className={text.outcome}>Followed up until they&apos;re ready to talk.</p>
          <p className={`mt-1.5 ${text.detail}`}>Over 80% of leads require multiple touches. Most firms stop after one.</p>
          <ol className="mt-5 grid gap-2" aria-label="Lead status">
            {stages.map((stage, i) => {
              const on = i <= reached;
              const current = i === reached;
              return (
                <li key={stage} className="flex items-center gap-3">
                  <motion.span
                    initial={false}
                    animate={{ backgroundColor: current && step < 5 ? tone.now : on ? tone.done : tone.idleBg, scale: current ? 1.2 : 1 }}
                    transition={{ duration: t }}
                    className="h-3 w-3 shrink-0 rounded-full"
                    aria-hidden="true"
                  />
                  <span className={current ? text.item : on ? "text-[1rem] leading-snug text-[#4b4e52]" : "text-[1rem] leading-snug text-[#66696d]"}>
                    {stage}
                    {current && step > 0 && <span className="sr-only"> (current)</span>}
                  </span>
                </li>
              );
            })}
          </ol>
          <div className="mt-4">
            <OutcomeRow show={step >= 5} reduce={reduce}>
              <CalendarClock size={18} strokeWidth={2.2} aria-hidden="true" /> Callback booked for Thu 5:30 PM
            </OutcomeRow>
          </div>
        </div>

        {/* phone */}
        <div className="mx-auto w-full max-w-[250px] rounded-[34px] p-2.5 shadow-[0_18px_34px_rgba(31,42,68,0.25)]" style={{ background: c.navy }}>
          <div className="flex h-[430px] flex-col rounded-[26px] bg-[#fbf7ef] px-3 pb-3 pt-3">
            <div className="mx-auto mb-2 h-1.5 w-14 rounded-full bg-[#d9d2c3]" aria-hidden="true" />
            <p className="border-b border-[#ece3cf] pb-2 text-center text-[0.78rem] font-semibold text-[#2f3236]">Maria · Lead #2041</p>
            <div className="flex flex-1 flex-col justify-end gap-2 overflow-hidden pt-2">
              {thread.map((item, i) => {
                const visible = i < step;
                if (!visible) return null;
                return (
                  <motion.div
                    key={i}
                    initial={reduce ? false : { opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: t, ease: [0.22, 1, 0.36, 1] }}
                    className={item.kind === "in" ? "self-start" : "self-end"}
                  >
                    {item.kind === "email" ? (
                      <div className="flex max-w-[190px] items-center gap-2 rounded-[12px] border border-[#e6ddca] bg-white px-2.5 py-2">
                        <Mail size={16} strokeWidth={1.8} color={tone.line} aria-hidden="true" />
                        <span className="min-w-0">
                          <span className="block text-[0.6rem] font-semibold" style={{ color: tone.muted }}>{item.day}</span>
                          <span className="block text-[0.72rem] font-semibold leading-tight text-[#2f3236]">{item.subject}</span>
                        </span>
                      </div>
                    ) : item.kind === "in" ? (
                      <div className="max-w-[180px] rounded-[14px] rounded-bl-[4px] bg-white px-3 py-2 text-[0.74rem] leading-snug text-[#2f3236] shadow-[0_2px_6px_rgba(0,0,0,0.06)]">
                        {item.text}
                      </div>
                    ) : (
                      <div className="max-w-[190px]">
                        <span className="mb-0.5 block text-right text-[0.6rem] font-semibold" style={{ color: tone.muted }}>{item.day}</span>
                        <div className="rounded-[14px] rounded-br-[4px] px-3 py-2 text-[0.74rem] leading-snug text-white" style={{ background: c.navySoft }}>
                          {item.text}
                        </div>
                        {item.note && <span className="mt-0.5 block text-right text-[0.56rem] text-[#66696d]">{item.note}</span>}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Scene>
  );
}
