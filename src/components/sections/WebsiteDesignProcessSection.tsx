"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ClipboardList,
  Code2,
  Gauge,
  PenTool,
  SearchCheck,
  type LucideIcon,
} from "lucide-react";

const processSteps = [
  {
    title: "Discovery",
    body: "We understand your firm, goals, competitors, and target audience",
    Icon: ClipboardList,
  },
  {
    title: "Strategy &\nWireframes",
    body: "Plan the website structure and user journey before design begins",
    Icon: SearchCheck,
  },
  {
    title: "UI/UX Design",
    body: "Create a premium interface that builds trust and delivers a seamless experience",
    Icon: PenTool,
  },
  {
    title: "WordPress\nDevelopment",
    body: "Develop a fast, secure, and scalable website using modern WordPress standards",
    Icon: Code2,
  },
  {
    title: "SEO & Performance\nOptimization",
    body: "Optimize technical SEO, Core Web Vitals, accessibility, and loading speed",
    Icon: Gauge,
  },
];

function StepIcon({ Icon }: { Icon: LucideIcon }) {
  return (
    <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#dfb65d] text-[#5d563f] shadow-[0_10px_20px_rgba(123,89,32,0.14)]">
      <Icon className="h-[24px] w-[24px]" strokeWidth={1.55} />
    </span>
  );
}

export default function WebsiteDesignProcessSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#FFF5E0] px-5 pb-20 pt-16 text-[#424242] sm:px-10 sm:pb-24 sm:pt-20 lg:px-16 lg:pb-[112px] lg:pt-[104px]">
      <div className="pointer-events-none absolute right-[6%] top-[-8px] h-[138px] w-[138px] rounded-full bg-[url('/images/big_flowers.webp')] bg-contain bg-center bg-no-repeat opacity-[0.035]" />
      <div className="pointer-events-none absolute right-[13%] top-[122px] h-[50px] w-[50px] rounded-full bg-[url('/images/small_flowers.webp')] bg-contain bg-center bg-no-repeat opacity-[0.04]" />

      <div className="relative z-10 mx-auto max-w-[1160px]">
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 22, filter: "blur(8px)" }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center font-heading text-[2.2rem] font-bold leading-tight text-[#424242] sm:text-[2.8rem] lg:text-[2.65rem]"
        >
          Our Proven Process
        </motion.h2>

        <div className="mt-16 grid gap-10 sm:mt-20 sm:grid-cols-2 lg:mt-[104px] lg:grid-cols-5 lg:gap-8">
          {processSteps.map(({ title, body, Icon }, index) => (
            <motion.div
              key={title}
              initial={reduceMotion ? false : { opacity: 0, y: 34, scale: 0.96, filter: "blur(10px)" }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{
                duration: 0.68,
                delay: reduceMotion ? 0 : index * 0.11,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex flex-col items-center text-center"
            >
              <StepIcon Icon={Icon} />
              {index < processSteps.length - 1 && (
                <motion.div
                  aria-hidden="true"
                  initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{
                    duration: 0.55,
                    delay: reduceMotion ? 0 : index * 0.11 + 0.22,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute left-[calc(50%+58px)] top-[19px] hidden text-[#dfb65d] lg:block"
                >
                  <ArrowRight className="h-8 w-8" strokeWidth={1.55} />
                </motion.div>
              )}

              <h3 className="mt-8 whitespace-pre-line text-[1.05rem] font-semibold leading-[1.22] text-[#2f3030]">
                {title}
              </h3>
              <p className="mt-5 max-w-[170px] text-[0.94rem] leading-[1.28] text-[#909090]">
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
