"use client";

import { motion } from "framer-motion";
import { Check, Hospital, Loader } from "lucide-react";
import { OutcomeRow, Scene, scenePalette as c, text, useTone, useSceneInView, useSceneTimeline } from "./Scene";

// Deck, service 06 (Case Support Services): medical record retrieval with delivery
// confirmed, record review (dates, diagnoses, procedures, providers) and a chronological
// treatment timeline ready for demand packages or litigation support.
const providers = [
  { name: "Emergency room", detail: "ER visit and X-ray" },
  { name: "Orthopedic clinic", detail: "Exam and MRI" },
  { name: "Physical therapy", detail: "12 visits" },
];
const timeline = [
  { date: "Oct 18", entry: "ER visit", tag: "Neck and back strain" },
  { date: "Oct 21", entry: "X-ray", tag: "No fracture" },
  { date: "Oct 25", entry: "MRI", tag: "Disc herniation, C5-C6" },
  { date: "Nov 2", entry: "PT begins", tag: "12 visits prescribed" },
];
// 0 requested · 1-3 records received · 4 chronology built · 5 ready
const DELAYS = [800, 700, 700, 1300, 800];

export default function MedicalChronology() {
  const { ref, inView } = useSceneInView();
  const tone = useTone();
  const { step, done, reduce } = useSceneTimeline(6, DELAYS, inView);
  const t = reduce ? 0 : 0.4;
  const received = Math.min(step, providers.length);
  const built = step >= 4;

  return (
    <Scene label="Sample records and chronology" innerRef={ref}>
      <p className={text.outcome}>Records retrieved and organized while your team practices law.</p>

      <div className="mt-5 grid gap-5 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <ol className="grid content-start gap-2" aria-label="Sample record requests">
          {providers.map((p, i) => {
            const got = i < received;
            const waiting = !got && step < providers.length;
            return (
              <li key={p.name} className="flex items-center gap-3 rounded-[12px] border border-[#ece2cc] bg-white px-4 py-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                  style={{ background: got ? tone.doneBg : tone.nowBg, color: got ? tone.done : tone.now }}
                  aria-hidden="true"
                >
                  {got ? (
                    <Check size={16} strokeWidth={2.6} />
                  ) : waiting && !reduce ? (
                    <Loader size={15} strokeWidth={2} className="animate-spin [animation-duration:2.4s]" />
                  ) : (
                    <Hospital size={15} strokeWidth={2} />
                  )}
                </span>
                <span className="min-w-0">
                  <span className={`block ${text.item}`}>{p.name}</span>
                  <span className={`block ${text.detail}`}>
                    {p.detail} · {got ? <span style={{ color: tone.done }}>delivery confirmed</span> : <span style={{ color: tone.now }}>requested</span>}
                  </span>
                </span>
              </li>
            );
          })}
        </ol>

        {/* the chronology builds from the received records */}
        <div className="rounded-[14px] border border-[#ece2cc] bg-white px-4 py-4 sm:px-5">
          <p className={text.detail}>Medical chronology</p>
          <ol className="relative mt-3 grid gap-3 pl-6" aria-label="Sample treatment timeline">
            <span aria-hidden="true" className="absolute bottom-2 left-[7px] top-2 w-px bg-[#e3d8c0]" />
            <motion.span
              aria-hidden="true"
              className="absolute left-[7px] top-2 w-px origin-top"
              style={{ background: c.navySoft, height: "calc(100% - 16px)" }}
              initial={false}
              animate={{ scaleY: built ? 1 : 0 }}
              transition={{ duration: reduce ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
            {timeline.map((row, i) => (
              <motion.li
                key={row.date}
                initial={false}
                animate={{ opacity: built ? 1 : 0.25, x: built ? 0 : -6 }}
                transition={{ duration: t, delay: built && !reduce ? i * 0.22 : 0 }}
                className="relative"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-6 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white"
                  style={{ background: built ? c.navySoft : "#e3d8c0", boxShadow: "0 0 0 1px #e3d8c0" }}
                />
                <span className={`block ${text.item}`}>
                  {row.date} · {row.entry}
                </span>
                <span className={`block ${text.detail}`}>{row.tag}</span>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-3">
        <OutcomeRow show={done} reduce={reduce}>
          <Check size={18} strokeWidth={2.6} aria-hidden="true" /> Chronology ready for the demand package
        </OutcomeRow>
      </div>
    </Scene>
  );
}
