"use client";

import { motion } from "framer-motion";
import { Check, PhoneForwarded, PhoneIncoming, PhoneOff } from "lucide-react";
import { OutcomeRow, Scene, scenePalette as c, text, useTone, useSceneInView, useSceneTimeline } from "./Scene";

// Deck, service 01 (Case Generation, Pay-Per-Call): high-intent inbound phone leads from
// people actively searching for legal help; you pay only for real calls that meet your
// screening criteria.
const checks = ["Caller is in your market", "Injury case your firm takes", "No attorney yet"];
// 0 ringing · 1 connected · 2-4 screening checks pass · 5 meets criteria, transferred
const DELAYS = [900, 550, 550, 550, 1000];

export default function PayPerCall() {
  const { ref, inView } = useSceneInView();
  const tone = useTone();
  const { step, done, reduce } = useSceneTimeline(6, DELAYS, inView);
  const t = reduce ? 0 : 0.4;
  const ringing = step === 0;
  const passed = Math.max(0, Math.min(step - 1, checks.length));

  return (
    <Scene label="Sample pay-per-call lead" innerRef={ref}>
      <div className="grid items-center gap-6 sm:grid-cols-[minmax(0,240px)_minmax(0,1fr)]">
        {/* phone, as in the deck */}
        <div className="relative mx-auto w-full max-w-[200px]" aria-hidden="true">
          {ringing && !reduce && (
            <>
              {[0, 1].map((ring) => (
                <motion.span
                  key={ring}
                  className="absolute left-1/2 top-[34%] h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
                  style={{ borderColor: c.gold }}
                  initial={{ scale: 0.6, opacity: 0.7 }}
                  animate={{ scale: 1.7, opacity: 0 }}
                  transition={{ duration: 1.4, repeat: Infinity, delay: ring * 0.7, ease: "easeOut" }}
                />
              ))}
            </>
          )}
          <div className="relative rounded-[30px] p-2 shadow-[0_16px_30px_rgba(31,42,68,0.24)]" style={{ background: c.navy }}>
            <div className="flex h-[300px] flex-col items-center rounded-[23px] bg-white px-4 pb-5 pt-4 text-center">
              <span className="h-1.5 w-12 rounded-full bg-[#e3dccd]" />
              <p className="mt-5 text-[0.75rem] font-semibold tracking-[0.08em] text-[#66696d]">
                {ringing ? "INCOMING CALL" : "CONNECTED · 0:42"}
              </p>
              <p className="mt-1 text-[1.05rem] font-semibold text-[#2f3236]">(833) 555-0198</p>
              <p className="text-[0.8125rem] text-[#6b6e72]">Personal injury</p>
              <motion.span
                initial={false}
                animate={{ opacity: done ? 1 : 0, y: done ? 0 : 6 }}
                transition={{ duration: t }}
                className="mt-4 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-[0.75rem] font-semibold"
                style={{ background: tone.doneBg, color: tone.done }}
              >
                <Check size={13} strokeWidth={3} /> Meets criteria
              </motion.span>
              <div className="mt-auto flex gap-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-full" style={{ background: tone.rejectBg, color: tone.reject }}>
                  <PhoneOff size={18} strokeWidth={2} />
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full text-white" style={{ background: ringing ? "#5cc2a8" : c.navySoft }}>
                  {ringing ? <PhoneIncoming size={18} strokeWidth={2} /> : <PhoneForwarded size={18} strokeWidth={2} />}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <p className={text.outcome}>Calls from people searching for legal help right now.</p>
          <ul className="mt-4 grid gap-2" aria-label="Sample live screening">
            {checks.map((check, i) => {
              const on = i < passed;
              const current = !on && i === passed && step >= 1 && step < 5;
              return (
                <motion.li
                  key={check}
                  initial={false}
                  animate={{ opacity: on || current ? 1 : 0.45 }}
                  transition={{ duration: t }}
                  className="flex items-center gap-3 rounded-[12px] border border-[#ece2cc] bg-white px-4 py-3"
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: on ? tone.doneBg : current ? tone.nowBg : tone.idleBg,
                      color: on ? tone.done : current ? tone.now : tone.idleInk,
                    }}
                    aria-hidden="true"
                  >
                    {on ? <Check size={16} strokeWidth={2.6} /> : <span className="text-[0.875rem] font-semibold">{i + 1}</span>}
                  </span>
                  <span className={text.item}>{check}</span>
                </motion.li>
              );
            })}
          </ul>
          <div className="mt-2">
            <OutcomeRow show={done} reduce={reduce}>
              <PhoneForwarded size={18} strokeWidth={2.2} aria-hidden="true" /> Transferred live to your intake line
            </OutcomeRow>
          </div>
          <p className={`mt-3 ${text.detail}`}>You pay only for real calls that meet your screening criteria</p>
        </div>
      </div>
    </Scene>
  );
}
