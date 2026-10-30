"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Handshake,
  Lightbulb,
  ShieldCheck,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";

const coreValues: Array<{
  title: string;
  description: string;
  Icon: LucideIcon;
  iconBackground: string;
  iconColor: string;
}> = [
  {
    title: "Integrity",
    description:
      "Honest reporting, compliant practices, and clear expectations with every firm we work with.",
    Icon: ShieldCheck,
    iconBackground: "bg-[#F7E9C9]",
    iconColor: "text-[#8A672B]",
  },
  {
    title: "Innovation",
    description:
      "Continuously improving our technology, marketing strategies, and client acquisition systems.",
    Icon: Lightbulb,
    iconBackground: "bg-[#E8E2F3]",
    iconColor: "text-[#725C87]",
  },
  {
    title: "Performance",
    description:
      "Every campaign is measured, optimized, and focused on delivering real business outcomes.",
    Icon: SlidersHorizontal,
    iconBackground: "bg-[#E2EEF7]",
    iconColor: "text-[#486A83]",
  },
  {
    title: "Partnership",
    description:
      "We become an extension of your firm, working together toward sustainable long-term growth.",
    Icon: Handshake,
    iconBackground: "bg-[#E7F0E5]",
    iconColor: "text-[#587351]",
  },
];

const revealContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.16,
      staggerChildren: 0.14,
    },
  },
};

export default function AboutCoreValuesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#FFF5E0] px-5 pb-[60px] pt-[34px] text-[#3d4145] sm:px-10 lg:px-16 xl:px-20">
      <div aria-hidden="true" className="ymg-radial-deep pointer-events-none absolute -inset-[2%] translate-y-[14%]" />
      <div className="relative z-10 mx-auto w-full max-w-[920px]">
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 22, filter: "blur(8px)" }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center font-heading text-[clamp(2rem,5vw,2.4rem)] font-semibold leading-[1.1] text-[#3d4145]"
        >
          Our Values
        </motion.h2>

        <motion.div
          variants={reduceMotion ? undefined : revealContainer}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.2 }}
          className="relative mt-[78px] grid md:grid-cols-2"
        >
          <motion.span
            aria-hidden="true"
            initial={reduceMotion ? false : { scaleY: 0, opacity: 0 }}
            whileInView={reduceMotion ? undefined : { scaleY: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 left-1/2 top-0 hidden w-px origin-top -translate-x-1/2 bg-[#D9B46D]/35 md:block"
          />
          <motion.span
            aria-hidden="true"
            initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
            whileInView={reduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[33%] right-[33%] top-1/2 hidden h-px origin-center -translate-y-1/2 bg-[#D9B46D]/45 md:block"
          />

          {coreValues.map(
            ({ title, description, Icon }, index) => (
              <div
                key={title}
                className={`flex min-h-[142px] items-center gap-4 border-b border-[#D9B46D]/25 py-7 last:border-b-0 md:border-b-0 md:px-8 md:py-5 lg:px-14 ${index % 2 === 1 ? "md:translate-x-20" : "md:-translate-x-12"}`}
              >
                <span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center">
                  <Icon className="h-[28px] w-[28px] text-[#D8B26B]" strokeWidth={1.55} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[1.28rem] font-semibold leading-[1.2] text-[#3d4145]">
                    {title}
                  </h3>
                  <p className="mt-1 max-w-[285px] text-[0.82rem] leading-[1.38] text-[#8A8A8A]">
                    {description}
                  </p>
                </div>
              </div>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}
