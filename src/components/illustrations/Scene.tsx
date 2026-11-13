"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/*
 * Shared frame for the animated service illustrations. Visual language comes from the
 * YMG Service Deck (cream tile, navy and teal figures, gold accents) on a quiet dot-grid
 * ground. Every scene shows sample data only and says so.
 */

export const scenePalette = {
  navy: "#1f2a44",
  navySoft: "#33415c",
  teal: "#2f8f7f",
  coral: "#e0775c",
  blue: "#7fa6d9",
  gold: "#d8b26b",
  goldDeep: "#a87b25",
  cream: "#fff8ea",
  ink: "#2f3236",
  muted: "#6b6e72",
};

/*
 * Colour has one meaning per role, the same in every scene (60 / 30 / 10):
 * calm surfaces, text and navy figures, and one signal colour.
 *   done   — teal: answered, qualified, sent, booked
 *   now    — gold: the step happening right now
 *   reject — coral: did not meet the criteria
 *   idle   — a step that has not started yet
 * Dark mode uses brighter versions of the same roles so they read on dark surfaces.
 */
const lightTone = {
  ink: "#2f3236",
  muted: "#6b6e72",
  done: "#23796b",
  doneBg: "#e3f2ee",
  now: "#9a6d1c",
  nowBg: "#fbf0d9",
  reject: "#b5523a",
  rejectBg: "#fbebe5",
  idleBg: "#f3eee3",
  idleInk: "#a9a191",
  /** Navy line details (icons, signature) and chart grid lines. */
  line: "#33415c",
  grid: "#efe7d6",
};
const darkTone: typeof lightTone = {
  ink: "#efe7d6",
  muted: "#aaa59a",
  done: "#6fd1b8",
  doneBg: "#173a33",
  now: "#e9c27a",
  nowBg: "#3a2f18",
  reject: "#f0a092",
  rejectBg: "#43251f",
  idleBg: "#2e2c27",
  idleInk: "#7d786d",
  line: "#a9b8d6",
  grid: "#3a3833",
};

// The site's theme switch toggles the "dark" class on <html>; follow it live.
function subscribeTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

export function useIsDark() {
  return useSyncExternalStore(
    subscribeTheme,
    () => document.documentElement.classList.contains("dark"),
    () => false
  );
}

export function useTone() {
  return useIsDark() ? darkTone : lightTone;
}

/** Text levels: 1 outcome heading, 2 item, 3 detail. Nothing smaller in the data. */
export const text = {
  outcome: "font-heading text-[1.45rem] leading-[1.2] text-[#2f3236] sm:text-[1.65rem]",
  item: "text-[1rem] font-semibold leading-snug text-[#2f3236]",
  detail: "text-[0.875rem] leading-snug text-[#6b6e72]",
};

/** The result of a scene, shown as the last row of its list. */
export function OutcomeRow({ show, reduce, children }: { show: boolean; reduce: boolean; children: ReactNode }) {
  const tone = useTone();
  return (
    <motion.p
      initial={false}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 6 }}
      transition={{ duration: reduce ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="ymg-scene-outcome flex items-center gap-2.5 rounded-[12px] px-4 py-3 text-[1rem] font-semibold"
      style={{ background: tone.doneBg, color: tone.done }}
      aria-hidden={!show}
    >
      {children}
    </motion.p>
  );
}

// Pause on the final stage before the scene starts over.
const LOOP_HOLD_MS = 2800;

/**
 * Steps a scene through `count` stages while it is in view, then loops.
 * `delays[i]` is the wait before stage i+1. Reduced motion holds on the last stage.
 */
// Playback speed for every scene inside it: the home showcase runs its scenes faster than the service pages.
export const SceneSpeed = createContext(1);

export function useSceneTimeline(count: number, delays: number[], inView: boolean) {
  const reduce = useReducedMotion();
  const speed = useContext(SceneSpeed);
  const [step, setStep] = useState(0);
  const [run, setRun] = useState(0);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    if (!inView) return;
    timers.current.forEach(window.clearTimeout);
    timers.current = [];
    if (reduce) {
      timers.current.push(window.setTimeout(() => setStep(count - 1), 0));
    } else {
      timers.current.push(window.setTimeout(() => setStep(0), 0));
      let at = 0;
      for (let i = 1; i < count; i++) {
        // The first stage comes in quickly, so a scene never sits on an empty frame.
        at += i === 1 ? Math.min(delays[0] ?? 900, 250) : (delays[i - 1] ?? 900) / speed;
        timers.current.push(window.setTimeout(() => setStep(i), at));
      }
      timers.current.push(window.setTimeout(() => setRun((r) => r + 1), at + LOOP_HOLD_MS / speed));
    }
    const pending = timers.current;
    return () => pending.forEach(window.clearTimeout);
  }, [inView, reduce, count, delays, run, speed]);

  // Restarts the cycle from the first stage (e.g. when a scene switches dataset).
  const replay = useCallback(() => {
    setStep(0);
    setRun((r) => r + 1);
  }, []);

  return { step, done: step === count - 1, replay, reduce: Boolean(reduce) };
}

export function Scene({
  label,
  children,
  className = "",
  innerRef,
}: {
  label: string;
  children: ReactNode;
  className?: string;
  innerRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <figure
      ref={innerRef}
      className={`ymg-scene relative isolate overflow-hidden rounded-[24px] border border-[#ead3a0] bg-[#fffaf0] p-5 sm:p-7 ${className}`}
    >
      {/* Quiet planning-board ground: a fine gold dot grid under one warm glow. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(168,123,37,0.16) 1px, transparent 1.4px)",
          backgroundSize: "18px 18px",
          maskImage: "linear-gradient(180deg, #000 0%, rgba(0,0,0,0.55) 100%)",
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-[15%] -top-[35%] -z-10 h-[90%] w-[70%] rounded-full bg-[radial-gradient(closest-side,rgba(246,215,150,0.55),rgba(246,215,150,0))]"
      />
      {children}
      <figcaption className="mt-5 text-[0.8125rem] text-[#66696d]">{label}</figcaption>
    </figure>
  );
}

export function useSceneInView() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  return { ref, inView };
}
