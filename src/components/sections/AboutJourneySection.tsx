"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Atom,
  ChartNoAxesCombined,
  Flag,
  Globe2,
  Headset,
  type LucideIcon,
} from "lucide-react";

const journeySteps: Array<{
  title: string;
  description: string;
  Icon: LucideIcon;
  iconBackground: string;
  iconColor: string;
}> = [
  {
    title: "Founded",
    description:
      "YMG Legal was established with a mission to help law firms grow through smarter marketing and exceptional client service.",
    Icon: Flag,
    iconBackground: "bg-[#F7E9C9]",
    iconColor: "text-[#8A672B]",
  },
  {
    title: "Expanded Legal Marketing",
    description:
      "Successfully scaled digital marketing programs for personal injury and mass tort practices nationwide.",
    Icon: ChartNoAxesCombined,
    iconBackground: "bg-[#E7F0E5]",
    iconColor: "text-[#587351]",
  },
  {
    title: "National Mass Tort Campaigns",
    description:
      "Launched nationwide claimant acquisition campaigns supporting some of the country’s largest litigation efforts.",
    Icon: Globe2,
    iconBackground: "bg-[#E2EEF7]",
    iconColor: "text-[#486A83]",
  },
  {
    title: "24/7 Intake Operations",
    description:
      "Built a dedicated legal intake division to ensure every qualified opportunity receives immediate attention.",
    Icon: Headset,
    iconBackground: "bg-[#E8E2F3]",
    iconColor: "text-[#725C87]",
  },
  {
    title: "AI-Powered Growth Platform",
    description:
      "Introduced AI-driven automation, analytics, and lead intelligence to improve conversion and operational efficiency.",
    Icon: Atom,
    iconBackground: "bg-[#F5E1DE]",
    iconColor: "text-[#8C5D56]",
  },
];

const revealContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.16,
      staggerChildren: 0.13,
    },
  },
};

const revealItem = {
  hidden: { opacity: 0, y: 26, scale: 0.97, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const journeyStepReveal = {
  hidden: { opacity: 0, y: 22, scale: 0.96, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.78,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function AboutJourneySection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="ymg-radial-deep relative isolate overflow-hidden bg-[#404040] px-5 py-[30px] text-[#EBC982] sm:px-10 lg:px-16 xl:px-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-7 top-0 h-[170px] w-[210px] bg-[url('/flowers/psmBG.svg')] bg-contain bg-left-top bg-no-repeat opacity-[0.14] sm:left-0 sm:h-[205px] sm:w-[255px]"
      />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-[1180px]"
        variants={reduceMotion ? undefined : revealContainer}
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.22 }}
      >
        <motion.div variants={reduceMotion ? undefined : revealItem} className="text-center">
          <p className="text-[0.95rem] font-medium text-[#D9AE5D] sm:text-[1.05rem]">
            Our Journey
          </p>
          <h2 className="mt-4 font-heading text-[clamp(2rem,4vw,2.35rem)] font-semibold leading-[1.08] text-[#EBC982]">
            From Start to End
          </h2>
        </motion.div>

        <motion.div
          variants={reduceMotion ? undefined : revealItem}
          className="ymg-journey-timeline-surface relative mt-10 overflow-hidden rounded-[7px] border border-[#D9B46D] bg-white px-5 py-8 text-[#3d4145] shadow-[0_14px_30px_rgba(17,17,17,0.12)] sm:mt-12 sm:px-9 lg:px-12"
        >
          <motion.span
            aria-hidden="true"
            initial={reduceMotion ? false : { scaleY: 0, opacity: 0 }}
            whileInView={reduceMotion ? undefined : { scaleY: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-[54px] left-[38px] top-[50px] w-px origin-top bg-[#D9B46D]/80 sm:left-[54px] min-[900px]:hidden"
          />

          <motion.div
            variants={reduceMotion ? undefined : revealContainer}
            className="relative z-10 grid gap-8 min-[900px]:grid-cols-5 min-[900px]:gap-5"
          >
            <motion.span
              aria-hidden="true"
              initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
              whileInView={reduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1.05, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-[10%] right-[10%] top-[18px] z-10 hidden h-px origin-left bg-[#D9B46D]/80 min-[900px]:block"
            />
            {journeySteps.map(({ title, description, Icon, iconBackground, iconColor }) => (
              <motion.div
                key={title}
                variants={reduceMotion ? undefined : journeyStepReveal}
                className="ymg-journey-step grid grid-cols-[44px_minmax(0,1fr)] items-start gap-4 bg-transparent min-[900px]:flex min-[900px]:flex-col min-[900px]:items-center min-[900px]:text-center"
              >
                <span className={`relative z-20 flex h-[36px] w-[36px] items-center justify-center rounded-[5px] border border-[#D9B46D] shadow-[0_5px_12px_rgba(91,69,34,0.2)] min-[900px]:h-[38px] min-[900px]:w-[38px] ${iconBackground}`}>
                  <Icon className={`h-[18px] w-[18px] ${iconColor}`} strokeWidth={1.45} />
                </span>
                <div className="min-w-0 min-[900px]:mt-5">
                  <h3 className="text-[0.9rem] font-semibold leading-[1.25] text-[#36383b] min-[900px]:min-h-[2.5em] min-[900px]:text-[0.88rem]">
                    {title}
                  </h3>
                  <p className="mt-2 max-w-[240px] text-[0.72rem] leading-[1.42] text-[#858585] min-[900px]:mx-auto min-[900px]:max-w-[155px] min-[900px]:text-[0.68rem]">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
