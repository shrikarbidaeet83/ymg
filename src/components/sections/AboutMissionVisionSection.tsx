"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Eye, Goal, type LucideIcon } from "lucide-react";

const statements: Array<{
  title: string;
  description: string;
  Icon: LucideIcon;
  iconBackground: string;
  iconColor: string;
}> = [
  {
    title: "Our Mission",
    description:
      "To help law firms acquire more qualified clients through innovative marketing, advanced technology, and operational excellence that delivers measurable business growth.",
    Icon: Goal,
    iconBackground: "bg-[#F7E9C9]",
    iconColor: "text-[#8A672B]",
  },
  {
    title: "Our Vision",
    description:
      "To become the most trusted legal growth platform, empowering law firms with scalable client acquisition systems and intelligent business solutions.",
    Icon: Eye,
    iconBackground: "bg-[#E2EEF7]",
    iconColor: "text-[#486A83]",
  },
];

const revealContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.16,
    },
  },
};

const revealCard = {
  hidden: { opacity: 0, y: 30, scale: 0.96, filter: "blur(8px)" },
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

export default function AboutMissionVisionSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden bg-[#404040] px-5 pb-[56px] pt-[52px] text-[#EBC982] sm:px-10 min-[900px]:px-20 lg:px-16 xl:px-20">
      <div className="mx-auto w-full max-w-[960px]">
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center font-heading text-[clamp(2.2rem,5vw,2.75rem)] font-semibold leading-[1.08] text-[#EBC982]"
        >
          Mission &amp; Vision
        </motion.h2>

        <motion.div
          variants={reduceMotion ? undefined : revealContainer}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.22 }}
          className="mt-12 grid gap-6 md:grid-cols-2 md:gap-10"
        >
          {statements.map(
            ({ title, description, Icon, iconBackground, iconColor }) => (
              <motion.article
                key={title}
                variants={reduceMotion ? undefined : revealCard}
                className="flex min-h-[180px] items-start gap-4 rounded-[7px] border border-[#D9B46D] bg-[#FFFCF7] px-6 py-6 text-[#3d4145] shadow-[0_12px_24px_rgba(17,17,17,0.24)] transition-transform duration-300 hover:-translate-y-1 sm:gap-[18px]"
              >
                <span
                  className={`flex h-[47px] w-[47px] shrink-0 items-center justify-center rounded-[6px] border border-[#D9B46D] shadow-[0_5px_12px_rgba(91,69,34,0.2)] ${iconBackground}`}
                >
                  <Icon className={`h-[24px] w-[24px] ${iconColor}`} strokeWidth={1.6} />
                </span>

                <div className="min-w-0">
                  <h3 className="text-[1.25rem] font-medium leading-[1.25] text-[#36383b]">
                    {title}
                  </h3>
                  <p className="mt-2 text-[0.84rem] leading-[1.48] text-[#8A8A8A]">
                    {description}
                  </p>
                </div>
              </motion.article>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}
