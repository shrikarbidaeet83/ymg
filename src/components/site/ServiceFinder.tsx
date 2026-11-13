"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export type FinderOption = {
  problem: string;
  answer: string;
  body: string;
  services: { label: string; href: string }[];
};

/*
 * "Where does your firm lose cases?": the visitor picks the problem they recognise and gets the services
 * that answer it. Tabs on wide screens, a stacked list on phones; the answer panel follows the choice.
 */
export default function ServiceFinder({
  options,
}: {
  options: FinderOption[];
}) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = options[active];

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
      <div
        role="tablist"
        aria-label="Where your firm loses cases"
        className="grid gap-2"
      >
        {options.map((o, i) => {
          const on = i === active;
          return (
            <button
              key={o.problem}
              type="button"
              role="tab"
              id={`finder-tab-${i}`}
              aria-selected={on}
              aria-controls="finder-panel"
              onClick={() => setActive(i)}
              className={`flex items-center gap-4 rounded-[18px] px-5 py-5 text-left text-[1.12rem] font-semibold transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6B263] sm:text-[1.2rem] ${
                on
                  ? "bg-[#F5F1E8] text-[#0B231D]"
                  : "text-[#F5F1E8]/80 hover:bg-[#F5F1E8]/[0.07] hover:text-[#F5F1E8]"
              }`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[0.85rem] transition-colors ${
                  on
                    ? "border-[#0B231D] bg-[#0B231D] text-[#D6B263]"
                    : "border-[#F5F1E8]/30"
                }`}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              {o.problem}
            </button>
          );
        })}
      </div>

      <div
        id="finder-panel"
        role="tabpanel"
        aria-labelledby={`finder-tab-${active}`}
        className="relative min-h-[300px] overflow-hidden rounded-[26px] border border-[#F5F1E8]/12 bg-[#102E26] p-7 sm:p-10"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.problem}
            initial={
              reduce ? false : { opacity: 0, transform: "translateY(14px)" }
            }
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            exit={{ opacity: 0, transform: "translateY(-8px)" }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          >
            <h3 className="ymg-num text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.08] text-[#F5F1E8]">
              {current.answer}
            </h3>
            <p className="mt-4 max-w-[34rem] text-[1.06rem] leading-[1.6] text-[#C9C3B4]">
              {current.body}
            </p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {current.services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-[#F5F1E8]/25 px-5 text-[0.98rem] font-semibold text-[#F5F1E8] transition-colors hover:border-[#D6B263] hover:text-[#D6B263]"
                  >
                    {s.label}
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
