"use client";

import { motion } from "framer-motion";
import { Check, PhoneIncoming } from "lucide-react";
import { OutcomeRow, Scene, scenePalette as c, text, useTone, useSceneInView, useSceneTimeline } from "./Scene";

// Deck, service 03: "Trained intake specialists answer calls after hours, on weekends,
// and on holidays — so you never lose a lead to voicemail."
const calls = [
  { when: "Fri 11:42 PM", type: "Motor vehicle accident", place: "Henderson, NV", answered: "answered in 6s", hour: 23.7 },
  { when: "Sat 2:14 AM", type: "Slip & fall", place: "Las Vegas, NV", answered: "answered in 8s", hour: 26.23 },
  { when: "Sun 5:30 AM", type: "Truck accident", place: "Reno, NV", answered: "answered in 5s", hour: 29.5 },
];
const DELAYS = [900, 1300, 1300, 1000];
// Window sky per step: night, deeper night, pre-dawn, first light, morning.
const SKY = ["#1f2a44", "#24315a", "#33406a", "#b98a78", "#f2c487"];

// Hour hand: 12 hours per turn, starting the night at 9 PM (hour 21).
const hourAngle = (hour: number) => (hour / 12) * 360;

export default function IntakeNightShift() {
  const { ref, inView } = useSceneInView();
  const tone = useTone();
  const { step, done, reduce } = useSceneTimeline(5, DELAYS, inView);
  const shown = Math.min(step, calls.length);
  const hour = step === 0 ? 21 : step <= calls.length ? calls[step - 1].hour : 31; // ends 7 AM
  const spin = reduce ? 0 : 0.9;

  return (
    <Scene label="Sample after-hours calls" innerRef={ref}>
      <div className="grid items-center gap-6 sm:grid-cols-[minmax(0,250px)_minmax(0,1fr)]">
        {/* One composed scene: night window, wall clock, intake agent at a desk. Nothing overlaps. */}
        <svg viewBox="0 0 260 226" className="mx-auto w-full max-w-[250px]" aria-hidden="true">
          <defs>
            <clipPath id="ns-window"><rect x="12" y="14" width="120" height="98" rx="14" /></clipPath>
          </defs>

          {/* window: the sky moves from night to dawn as the calls come in */}
          <motion.rect
            x="12" y="14" width="120" height="98" rx="14"
            initial={false}
            animate={{ fill: SKY[step] }}
            transition={{ duration: spin * 1.2 }}
          />
          <g clipPath="url(#ns-window)">
            <motion.g initial={false} animate={{ opacity: step >= 3 ? 0 : 1 }} transition={{ duration: spin }}>
              {[[30, 32], [58, 24], [96, 30], [112, 52], [42, 60], [78, 46]].map(([x, y]) => (
                <circle key={`${x}-${y}`} cx={x} cy={y} r="1.6" fill="#fff" />
              ))}
            </motion.g>
            {/* moon sets, sun rises */}
            <motion.g initial={false} animate={{ y: step * 14, opacity: step >= 4 ? 0 : 1 }} transition={{ duration: spin * 1.2 }}>
              <path d="M98 30a12 12 0 1 0 14 17 10 10 0 1 1-14-17Z" fill="#f1cd7a" />
            </motion.g>
            <motion.circle
              cx="44" r="14" fill="#f7c873"
              initial={false}
              animate={{ cy: step >= 4 ? 96 : 130 }}
              transition={{ duration: spin * 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </g>
          <rect x="12" y="14" width="120" height="98" rx="14" fill="none" stroke="#fff" strokeWidth="4" />
          <line x1="72" y1="14" x2="72" y2="112" stroke="#fff" strokeWidth="3" />
          <line x1="12" y1="63" x2="132" y2="63" stroke="#fff" strokeWidth="3" />

          {/* wall clock */}
          <circle cx="200" cy="62" r="44" fill={c.navy} />
          <circle cx="200" cy="62" r="37" fill={c.navySoft} />
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1="200" y1={i % 3 === 0 ? 30 : 32} x2="200" y2="37"
              stroke="#fff" strokeWidth={i % 3 === 0 ? 2.6 : 1.6} strokeLinecap="round"
              transform={`rotate(${i * 30} 200 62)`}
            />
          ))}
          <g
            style={{
              transformBox: "view-box",
              transformOrigin: "200px 62px",
              transform: `rotate(${hourAngle(hour) * 12}deg)`,
              transition: `transform ${spin * 1.4}s cubic-bezier(0.22, 1, 0.36, 1)`,
            }}
          >
            <line x1="200" y1="62" x2="200" y2="36" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
          </g>
          <g
            style={{
              transformBox: "view-box",
              transformOrigin: "200px 62px",
              transform: `rotate(${hourAngle(hour)}deg)`,
              transition: `transform ${spin * 1.4}s cubic-bezier(0.22, 1, 0.36, 1)`,
            }}
          >
            <line x1="200" y1="62" x2="200" y2="44" stroke={c.gold} strokeWidth="4" strokeLinecap="round" />
          </g>
          <circle cx="200" cy="62" r="4.5" fill={c.gold} />

          {/* intake agent at the desk */}
          <path d="M96 202c0-27 15-44 34-44s34 17 34 44Z" fill="#4b5b7c" />
          <circle cx="130" cy="140" r="17" fill="#eab98f" />
          <path d="M112 141a18 18 0 0 1 36 0" fill="none" stroke={c.navy} strokeWidth="4" strokeLinecap="round" />
          <rect x="108" y="138" width="7" height="12" rx="3.5" fill={c.navy} />
          <path d="M112 150c2 8 8 11 15 11" fill="none" stroke={c.navy} strokeWidth="2.4" strokeLinecap="round" />
          {/* laptop facing the agent */}
          <path d="M170 172h52l-6 30h-40Z" fill={c.navy} />
          <motion.circle
            cx="196" cy="186" r="4"
            initial={false}
            animate={{ fill: step >= 1 && step <= 3 ? "#5cc2a8" : "#5c6b8c", scale: step >= 1 && step <= 3 ? [1, 1.35, 1] : 1 }}
            transition={{ duration: spin, repeat: step >= 1 && step <= 3 && !reduce ? 1 : 0 }}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
          {/* desk */}
          <rect x="8" y="202" width="244" height="9" rx="4.5" fill="#d9b26b" />
          <rect x="30" y="211" width="8" height="15" fill="#c79d55" />
          <rect x="222" y="211" width="8" height="15" fill="#c79d55" />
        </svg>

        <div className="min-w-0">
          <p className={text.outcome}>Every after-hours call answered.</p>
          <ol className="mt-4 grid gap-2" aria-label="Sample calls answered overnight">
            {calls.map((call, i) => {
              const answered = i < shown;
              const ringing = !answered && i === shown && step < calls.length;
              return (
                <motion.li
                  key={call.when}
                  initial={false}
                  animate={{ opacity: answered || ringing ? 1 : 0.45 }}
                  transition={{ duration: reduce ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-3 rounded-[12px] border border-[#ece2cc] bg-white px-4 py-3"
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: answered ? tone.doneBg : ringing ? tone.nowBg : tone.idleBg,
                      color: answered ? tone.done : ringing ? tone.now : tone.idleInk,
                    }}
                    aria-hidden="true"
                  >
                    {answered ? <Check size={16} strokeWidth={2.6} /> : <PhoneIncoming size={15} strokeWidth={2} />}
                  </span>
                  <span className="min-w-0">
                    <span className={`block ${text.item}`}>
                      {call.when} · {call.type}
                    </span>
                    <span className={`block ${text.detail}`}>
                      {call.place} ·{" "}
                      {answered ? (
                        <span style={{ color: tone.done }}>{call.answered}</span>
                      ) : ringing ? (
                        <span style={{ color: tone.now }}>Ringing…</span>
                      ) : (
                        "Waiting"
                      )}
                    </span>
                  </span>
                </motion.li>
              );
            })}
          </ol>
          <div className="mt-2">
            <OutcomeRow show={done} reduce={reduce}>
              <Check size={18} strokeWidth={2.6} aria-hidden="true" /> 0 calls sent to voicemail
            </OutcomeRow>
          </div>
          <p className={`mt-3 ${text.detail}`}>After hours · Weekends · Holidays</p>
        </div>
      </div>
    </Scene>
  );
}
