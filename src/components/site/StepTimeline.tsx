"use client";

import { useRef, useState, type ReactNode } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

/*
 * A process drawn as a line that fills with brass as the visitor scrolls through it. Each step lights up
 * when the fill reaches it. Horizontal on wide screens, vertical on phones and tablets.
 */
export default function StepTimeline({
  steps,
}: {
  steps: { title: string; icon: ReactNode }[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 55%"],
  });
  const fill = useTransform(scrollYProgress, (v) =>
    reduce ? 1 : Math.min(1, Math.max(0, v)),
  );
  const [reached, setReached] = useState(reduce ? steps.length : 0);

  useMotionValueEvent(fill, "change", (v) => {
    const next = Math.round(v * (steps.length - 1)) + (v > 0.02 ? 1 : 0);
    setReached((current) => (current === next ? current : next));
  });

  return (
    <div
      ref={ref}
      className="relative"
      style={{ ["--n" as string]: steps.length }}
    >
      {/* Track and fill: vertical below lg, horizontal from lg */}
      <span
        aria-hidden="true"
        className="absolute bottom-10 left-[27px] top-10 w-px bg-[#0B231D]/12 lg:hidden"
      />
      <motion.span
        aria-hidden="true"
        style={{ scaleY: fill }}
        className="absolute bottom-10 left-[27px] top-10 w-px origin-top bg-[#C8A24E] lg:hidden"
      />
      <span
        aria-hidden="true"
        className="absolute left-[calc(50%/var(--n))] right-[calc(50%/var(--n))] top-7 hidden h-px bg-[#0B231D]/12 lg:block"
      />
      <motion.span
        aria-hidden="true"
        style={{ scaleX: fill }}
        className="absolute left-[calc(50%/var(--n))] right-[calc(50%/var(--n))] top-7 hidden h-px origin-left bg-[#C8A24E] lg:block"
      />

      <ol className="relative grid lg:grid-cols-[repeat(var(--n),minmax(0,1fr))] lg:gap-4">
        {steps.map(({ title, icon }, i) => {
          const on = i < reached;
          return (
            <li
              key={title}
              className="relative flex items-center gap-5 py-3 lg:flex-col lg:gap-4 lg:py-0 lg:text-center"
            >
              <span
                className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border transition-[background-color,border-color,color,box-shadow] duration-500 ${
                  on
                    ? "border-[#C8A24E] bg-[#0B231D] text-[#D6B263] shadow-[0_0_0_6px_rgba(200,162,78,0.14)]"
                    : "border-[#0B231D]/15 bg-white text-[#0B231D]/45"
                }`}
              >
                {icon}
              </span>
              <span className="min-w-0">
                <span
                  className={`ymg-num block text-[0.95rem] transition-colors duration-500 ${on ? "text-[#8C6B22]" : "text-[#0B231D]/35"}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`block text-[1.05rem] font-semibold leading-snug transition-colors duration-500 ${on ? "text-[#0B231D]" : "text-[#0B231D]/55"}`}
                >
                  {title}
                </span>
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
