"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  ClipboardList,
  Code2,
  FileText,
  TrendingUp,
} from "lucide-react";

const processSteps = [
  {
    title: "Audit Your Website",
    description:
      "We evaluate your website's AI readiness, technical SEO, authority signals, and content quality.",
    Icon: ClipboardList,
  },
  {
    title: "Content Strategy",
    description:
      "Identify valuable legal topics, search intent, and opportunities to position your firm as an authority.",
    Icon: FileText,
  },
  {
    title: "Technical Optimization",
    description:
      "Implement structured data, improve website architecture, optimize metadata, and enhance crawlability.",
    Icon: Code2,
  },
  {
    title: "Authority Building",
    description:
      "Strengthen your firm's digital reputation through quality citations, entity optimization, and trusted references.",
    Icon: BadgeCheck,
  },
  {
    title: "Continuous Improvement",
    description:
      "Monitor AI visibility, refine your strategy, and adapt to evolving AI search algorithms.",
    Icon: TrendingUp,
  },
];

const container = {
  hidden: {},
  visible: { transition: { delayChildren: 0.2, staggerChildren: 0.22 } },
};

const stepReveal = {
  hidden: { opacity: 0, y: 34, scale: 0.94, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function AiSearchProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#fff5e0] px-5 py-[66px] sm:px-10 sm:py-[82px] lg:px-16 lg:py-[72px]">
      <div aria-hidden="true" className="ymg-radial-deep pointer-events-none absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2" />
      <div className="relative z-10 mx-auto max-w-[980px]">
        <motion.h2
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.65 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="text-center font-heading text-[1.9rem] font-semibold text-[#424242] sm:text-[2.15rem] lg:text-[2rem]"
        >
          Our AI Search Process
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-12 flex max-w-[420px] flex-col items-center gap-3 lg:mt-[58px] lg:max-w-none lg:flex-row lg:items-start lg:justify-between lg:gap-0"
        >
          {processSteps.map(({ title, description, Icon }, index) => (
            <div key={title} className="contents">
        <div
                className="flex w-full max-w-[220px] flex-col items-center text-center lg:w-[148px] lg:max-w-none"
              >
                <span className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#d9b462] text-[#5a513e] shadow-[0_7px_16px_rgba(156,117,45,0.18)] lg:h-[38px] lg:w-[38px]">
                  <Icon className="h-[21px] w-[21px] lg:h-[18px] lg:w-[18px]" strokeWidth={1.7} />
                </span>
                <h3 className="mt-5 text-[0.78rem] font-semibold leading-[1.3] text-[#444444] lg:text-[0.68rem]">
                  {title}
                </h3>
                <p className="mt-3 text-[0.72rem] leading-[1.45] text-[#8d8a83] lg:text-[0.61rem] lg:leading-[1.42]">
                  {description}
                </p>
        </div>

              {index < processSteps.length - 1 && (
                <motion.span
                  variants={stepReveal}
                  aria-hidden="true"
                  className="my-1 text-[1.45rem] font-light text-[#d5a64e] lg:mx-1 lg:mt-[8px] lg:rotate-[-90deg]"
                >
                  ↓
                </motion.span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
