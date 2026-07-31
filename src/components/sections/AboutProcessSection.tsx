"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ChartNoAxesCombined,
  ChartSpline,
  Expand,
  Rocket,
  SearchCheck,
  type LucideIcon,
} from "lucide-react";

const processSteps: Array<{
  title: string;
  description: string;
  Icon: LucideIcon;
}> = [
  {
    title: "Discover",
    description:
      "Learn about your firm’s goals, practice areas, and growth objectives.",
    Icon: SearchCheck,
  },
  {
    title: "Strategy",
    description:
      "Build a tailored acquisition and intake strategy around your growth goals.",
    Icon: ChartSpline,
  },
  {
    title: "Launch",
    description:
      "Deploy marketing campaigns, intake systems, and automation with precision.",
    Icon: Rocket,
  },
  {
    title: "Optimize",
    description:
      "Analyze performance data and continuously improve conversion rates.",
    Icon: ChartNoAxesCombined,
  },
  {
    title: "Scale",
    description:
      "Expand successful campaigns to generate predictable and sustainable growth.",
    Icon: Expand,
  },
];

const revealContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.14,
      staggerChildren: 0.1,
    },
  },
};

const revealArrow = {
  hidden: { opacity: 0, x: -12, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function AboutProcessSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#404040] px-5 pb-[50px] pt-[50px] text-[#EBC982] sm:px-10 lg:px-16 xl:px-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-7 top-0 h-[170px] w-[210px] bg-[url('/flowers/psmBG.svg')] bg-contain bg-left-top bg-no-repeat opacity-[0.14] sm:left-0 sm:h-[205px] sm:w-[255px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1040px]">
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 22, filter: "blur(8px)" }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center font-heading text-[clamp(2rem,5vw,2.4rem)] font-semibold leading-[1.1] text-[#EBC982]"
        >
          Our Process
        </motion.h2>

        <motion.div
          variants={reduceMotion ? undefined : revealContainer}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.16 }}
          className="mx-auto mt-16 grid max-w-[320px] items-start justify-center gap-5 min-[900px]:max-w-none min-[900px]:grid-cols-[1fr_40px_1fr_40px_1fr_40px_1fr_40px_1fr] min-[900px]:gap-4"
        >
          {processSteps.map(({ title, description, Icon }, index) => (
            <Fragment key={title}>
              <div
                className="flex min-w-0 flex-col items-center bg-transparent text-center dark:bg-[#191917]"
              >
                <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#DFB65D] text-[#514528] shadow-[0_8px_18px_rgba(17,17,17,0.2)]">
                  <Icon className="h-[20px] w-[20px]" strokeWidth={1.45} />
                </span>
                <h3 className="mt-4 text-[0.86rem] font-medium text-[#DFB65D]">
                  {title}
                </h3>
                <p className="mt-3 max-w-[155px] text-[0.72rem] leading-[1.4] text-[#999999]">
                  {description}
                </p>
              </div>

              {index < processSteps.length - 1 && (
                <motion.span
                  aria-hidden="true"
                  variants={reduceMotion ? undefined : revealArrow}
                  className="flex h-8 items-center justify-center text-[#DFB65D] min-[900px]:mt-[5px] min-[900px]:h-[42px]"
                >
                  <ArrowRight
                    className="h-[24px] w-[24px] rotate-90 min-[900px]:rotate-0"
                    strokeWidth={1.5}
                  />
                </motion.span>
              )}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
