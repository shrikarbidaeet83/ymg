"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  BrainCircuit,
  Crosshair,
  DollarSign,
  MousePointerClick,
  Phone,
  RefreshCcw,
  Split,
  TrendingUp,
} from "lucide-react";

const performanceReasons = [
  {
    title: "Data-Driven Decisions",
    Icon: BrainCircuit,
    iconBg: "bg-[#dce9ff]",
    iconColor: "text-[#3f587c]",
  },
  {
    title: "Daily Optimization",
    Icon: RefreshCcw,
    iconBg: "bg-[#f2ddff]",
    iconColor: "text-[#5d4772]",
  },
  {
    title: "Call Tracking",
    Icon: Phone,
    iconBg: "bg-[#d6f8ea]",
    iconColor: "text-[#315D4D]",
  },
  {
    title: "A/B Testing",
    Icon: Split,
    iconBg: "bg-[#fff1d8]",
    iconColor: "text-[#73572d]",
  },
  {
    title: "Audience Targeting",
    Icon: Crosshair,
    iconBg: "bg-[#e8f3d8]",
    iconColor: "text-[#4e6534]",
  },
  {
    title: "Performance Reporting",
    Icon: TrendingUp,
    iconBg: "bg-[#e8e4fb]",
    iconColor: "text-[#514a78]",
  },
];

const deliverySteps = [
  { title: "Higher Click-Through Rates", Icon: MousePointerClick },
  { title: "Lower Cost Per Lead", Icon: DollarSign },
  { title: "More Qualified Consultations", Icon: Phone },
  { title: "Better Return on Ad Spend", Icon: BarChart3 },
];

const revealContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const revealItem = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function SearchAdsPerformanceReveal() {
  return (
    <section className="ymg-radial-wide overflow-hidden bg-[#FFF5E0] px-5 py-[58px] text-[#3d4145] sm:px-10 sm:py-[72px] lg:px-16 lg:py-[54px]">
      <motion.div
        className="mx-auto grid w-full max-w-[900px] gap-10 lg:grid-cols-[370px_1px_minmax(0,1fr)] lg:items-stretch lg:gap-[42px]"
        variants={revealContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.28 }}
      >
        <div className="min-w-0">
          <motion.h2
            variants={revealItem}
            className="font-heading text-[1.45rem] font-normal leading-[1.25] text-[#3d4145] lg:text-[1.05rem]"
          >
            Why Our Campaigns
            <span> Perform Better</span>
          </motion.h2>

          <motion.div
            variants={revealContainer}
            className="mt-8 grid grid-cols-1 gap-x-5 gap-y-4 min-[420px]:grid-cols-2 sm:grid-cols-3 lg:mt-9"
          >
            {performanceReasons.map(({ title, Icon, iconBg, iconColor }) => (
              <div
                key={title}
                className="grid min-w-0 grid-cols-[34px_minmax(0,1fr)] items-center gap-2"
              >
                <span className={`flex h-[34px] w-[34px] items-center justify-center rounded-[5px] border border-[#dfbd78] shadow-[0_4px_8px_rgba(91,69,34,0.15)] ${iconBg} dark:border-[#D8B26B] dark:bg-transparent dark:shadow-none`}>
                  <Icon className={`h-[18px] w-[18px] ${iconColor} dark:text-[#D8B26B]`} strokeWidth={1.7} />
                </span>
                <h3 className="text-[0.72rem] font-medium leading-[1.2] text-[#3d4145]">
                  {title}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          aria-hidden="true"
          className="h-px w-full origin-left bg-[#9d9688]/55 lg:h-full lg:w-px lg:origin-top"
          initial={{ scaleX: 0, scaleY: 0 }}
          whileInView={{ scaleX: 1, scaleY: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="min-w-0">
          <motion.h2
            variants={revealItem}
            className="font-heading text-[1.45rem] font-normal leading-[1.25] text-[#3d4145] lg:text-[1.05rem]"
          >
            Designed To Deliver
            <span> More Qualified Cases</span>
          </motion.h2>

          <motion.div
            variants={revealContainer}
            className="mt-8 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4 lg:mt-[34px] lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-start lg:gap-3"
          >
            {deliverySteps.map(({ title, Icon }, index) => (
              <div key={title} className="contents">
                <div className="flex min-w-0 flex-col items-center text-center">
                  <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#dfb761] text-[#4c4a43] shadow-[0_6px_14px_rgba(151,111,45,0.16)] dark:bg-transparent dark:text-[#D8B26B] dark:shadow-none">
                    <Icon className="h-[20px] w-[20px]" strokeWidth={1.65} />
                  </span>
                  <h3 className="mt-3 max-w-[92px] text-[0.68rem] font-medium leading-[1.25] text-[#3d4145]">
                    {title}
                  </h3>
                </div>

                {index < deliverySteps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden pt-[8px] text-[1.6rem] font-light leading-none text-[#d9ae5d] lg:block"
                  >
                    &rarr;
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
