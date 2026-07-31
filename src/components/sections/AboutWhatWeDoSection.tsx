"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ChartNoAxesCombined,
  ClipboardCheck,
  Headset,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

const services: Array<{
  title: string;
  description: string;
  Icon: LucideIcon;
  iconBackground: string;
  iconColor: string;
}> = [
  {
    title: "Client Acquisition",
    description:
      "Generate high-intent legal clients through multi-channel marketing campaigns optimized for measurable growth.",
    Icon: UsersRound,
    iconBackground: "bg-[#E8E2F3]",
    iconColor: "text-[#725C87]",
  },
  {
    title: "Intake Operations",
    description:
      "Our dedicated intake specialists engage, qualify, and nurture every lead 24/7 to maximize conversion.",
    Icon: Headset,
    iconBackground: "bg-[#E2EEF7]",
    iconColor: "text-[#486A83]",
  },
  {
    title: "Retainer Optimization",
    description:
      "Increase signed retainers through structured follow-up workflows and personalized claimant engagement.",
    Icon: ClipboardCheck,
    iconBackground: "bg-[#E7F0E5]",
    iconColor: "text-[#587351]",
  },
  {
    title: "Growth Analytics",
    description:
      "Track campaign performance with real-time reporting, attribution, and actionable business insights.",
    Icon: ChartNoAxesCombined,
    iconBackground: "bg-[#F7E9C9]",
    iconColor: "text-[#8A672B]",
  },
];

const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.14,
    },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 34, scale: 0.95, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.68,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function AboutWhatWeDoSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="ymg-radial-wide overflow-hidden bg-[#404040] px-5 pb-[54px] pt-[34px] text-[#EBC982] sm:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto w-full max-w-[960px]">
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center font-heading text-[clamp(2.2rem,5vw,2.75rem)] font-semibold leading-[1.08] text-[#EBC982]"
        >
          What We Do
        </motion.h2>

        <motion.div
          variants={reduceMotion ? undefined : cardContainer}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.18 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[42px]"
        >
          {services.map(({ title, description, Icon, iconBackground, iconColor }) => (
            <motion.article
              key={title}
              variants={reduceMotion ? undefined : cardReveal}
              className="flex min-h-[257px] flex-col items-center rounded-[6px] border border-[#D9B46D] bg-[#FFFCF7] px-[18px] pb-8 pt-8 text-center text-[#3d4145] shadow-[0_12px_24px_rgba(17,17,17,0.24)] transition-transform duration-300 hover:-translate-y-1"
            >
              <span className={`flex h-[47px] w-[47px] shrink-0 items-center justify-center rounded-[6px] border border-[#D9B46D] shadow-[0_5px_12px_rgba(91,69,34,0.2)] ${iconBackground}`}>
                <Icon className={`h-[24px] w-[24px] ${iconColor}`} strokeWidth={1.35} />
              </span>
              <h3 className="mt-5 text-[0.94rem] font-medium leading-[1.25] text-[#36383b]">
                {title}
              </h3>
              <p className="mt-3 text-[0.84rem] leading-[1.48] text-[#8A8A8A]">
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
