"use client";

import { LayoutGroup, motion } from "framer-motion";
import { Check } from "lucide-react";
import { OutcomeRow, Scene, text, useTone, useSceneInView, useSceneTimeline } from "./Scene";

// Deck, service 04 (Follow-Up & Automation): lead tracking and tagging with a real-time
// status, and a pipeline dashboard from first inquiry to signed retainer.
const columns = ["New", "Contacted", "Nurturing", "Qualified", "Signed"];
const leads = [
  { id: "a", title: "Motor vehicle", place: "Henderson, NV" },
  { id: "b", title: "Slip & fall", place: "Las Vegas, NV" },
  { id: "c", title: "Truck accident", place: "Reno, NV" },
  { id: "d", title: "Hair relaxer", place: "Atlanta, GA" },
  { id: "e", title: "Rideshare", place: "Las Vegas, NV" },
];
// Column index of each lead at each step; one or two cards move per step.
const BOARD: Record<string, number>[] = [
  { a: 2, b: 1, c: 0, d: 0, e: 3 },
  { a: 3, b: 1, c: 1, d: 0, e: 3 },
  { a: 3, b: 2, c: 1, d: 1, e: 4 },
  { a: 4, b: 2, c: 2, d: 1, e: 4 },
  { a: 4, b: 3, c: 2, d: 2, e: 4 },
];
const DELAYS = [1000, 1000, 1000, 1000];

export default function PipelineBoard() {
  const { ref, inView } = useSceneInView();
  const tone = useTone();
  const { step, done, reduce } = useSceneTimeline(BOARD.length, DELAYS, inView);
  const board = BOARD[step];
  const moved = step > 0 ? leads.filter((l) => board[l.id] !== BOARD[step - 1][l.id]).map((l) => l.id) : [];

  return (
    <Scene label="Sample pipeline" innerRef={ref}>
      <p className={text.outcome}>Every lead&apos;s status, from first inquiry to signed retainer.</p>

      <div className="mt-5">
        <LayoutGroup>
          {/* Phones: stages stack as rows. From sm up: five columns side by side. */}
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-5 sm:gap-2.5" aria-label="Sample pipeline board">
            {columns.map((col, ci) => {
              const inCol = leads.filter((l) => board[l.id] === ci);
              const signed = ci === columns.length - 1;
              return (
                <div key={col} className="flex flex-col rounded-[12px] bg-white/70 p-2 ring-1 ring-[#ece2cc] sm:min-h-[230px]">
                  <div className="mb-2 flex items-center justify-between px-1">
                    <span className="text-[0.875rem] font-semibold text-[#2f3236]">{col}</span>
                    <span
                      className="min-w-[1.5rem] rounded-full px-1.5 py-0.5 text-center text-[0.75rem] font-semibold tabular-nums"
                      style={signed ? { background: tone.doneBg, color: tone.done } : { background: tone.idleBg, color: tone.muted }}
                    >
                      {inCol.length}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
                    {inCol.map((lead) => {
                      const justMoved = moved.includes(lead.id) && !done;
                      return (
                        <motion.div
                          key={lead.id}
                          layout={!reduce}
                          layoutId={reduce ? undefined : `lead-${lead.id}`}
                          transition={{ type: "spring", stiffness: 260, damping: 30 }}
                          className="rounded-[10px] border bg-white px-2.5 py-2 shadow-[0_4px_10px_rgba(82,64,34,0.06)]"
                          data-state={justMoved && !signed ? "now" : signed ? "done" : undefined}
                          style={{ borderColor: justMoved && !signed ? tone.now : signed ? "#bfe2d8" : "#ece2cc" }}
                        >
                          <span className="flex items-center justify-between gap-1">
                            <span className="truncate text-[0.8125rem] font-semibold text-[#2f3236]">{lead.title}</span>
                            {signed && <Check size={13} strokeWidth={3} color={tone.done} aria-label="signed" />}
                          </span>
                          <span className="block truncate text-[0.75rem] text-[#6b6e72]">{lead.place}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </LayoutGroup>
      </div>

      <div className="mt-3">
        <OutcomeRow show={done} reduce={reduce}>
          <Check size={18} strokeWidth={2.6} aria-hidden="true" /> Updated in real time, so nothing gets missed
        </OutcomeRow>
      </div>
    </Scene>
  );
}
