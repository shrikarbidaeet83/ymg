"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeDollarSign, TrendingUp, Trophy, UsersRound } from "lucide-react";

const results = [
  {
    title: "Organic Traffic",
    body: "Increase visibility for competitive legal keywords.",
    Icon: TrendingUp,
    iconBg: "bg-[#dce9ff]",
    iconColor: "text-[#3f587c]",
  },
  {
    title: "Qualified Leads",
    body: "Attract clients actively searching for legal help.",
    Icon: UsersRound,
    iconBg: "bg-[#f2ddff]",
    iconColor: "text-[#5d4772]",
  },
  {
    title: "Higher Rankings",
    body: "Dominate Google's first page.",
    Icon: Trophy,
    iconBg: "bg-[#d6f8ea]",
    iconColor: "text-[#315d4d]",
  },
  {
    title: "Better ROI",
    body: "Generate long-term case acquisition at a lower cost.",
    Icon: BadgeDollarSign,
    iconBg: "bg-[#fff1d8]",
    iconColor: "text-[#73572d]",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function SeoResultsSection() {
  return (
    <section className="bg-[#FFF5E0] px-4 py-4 text-[#d9ae5d] sm:px-8 sm:py-6 lg:px-16 lg:py-5">
      <div className="relative isolate mx-auto w-full max-w-[1040px] overflow-hidden rounded-[14px] bg-[#404040] px-5 py-[68px] sm:px-10 sm:py-[84px] lg:px-16 lg:py-[72px]">
        <Image
        src="/images/big_flowers.png"
        alt=""
        width={190}
        height={190}
        className="pointer-events-none absolute right-[6%] top-[24px] z-0 hidden w-[96px] opacity-[0.05] sm:block"
        />
        <Image
        src="/images/small_flowers.png"
        alt=""
        width={125}
        height={125}
        className="pointer-events-none absolute right-[14%] top-[58px] z-0 hidden w-[30px] opacity-[0.045] lg:block"
        />
        <Image
        src="/images/small_flowers.png"
        alt=""
        width={125}
        height={125}
        className="pointer-events-none absolute right-[9%] top-[126px] z-0 hidden w-[38px] opacity-[0.045] lg:block"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative z-10 mx-auto w-full max-w-[900px]"
        >
        <div className="text-center">
          <motion.p variants={item} className="text-[0.92rem] font-normal text-[#d9ae5d] sm:text-[1rem]">
            Real Results
          </motion.p>
          <motion.h2
            variants={item}
            className="mt-5 font-heading text-[2rem] font-bold leading-[1.35] text-[#d9ae5d] sm:text-[2.4rem] lg:text-[2.15rem]"
          >
            SEO That Delivers
            <span className="mt-1 block">Business Results</span>
          </motion.h2>
        </div>

        <motion.div
          variants={container}
          className="mx-auto mt-12 grid max-w-[780px] grid-cols-1 gap-y-8 min-[420px]:grid-cols-2 lg:mt-[58px] lg:grid-cols-4 lg:gap-0"
        >
          {results.map(({ title, body, Icon, iconBg, iconColor }, index) => (
            <motion.article
              key={title}
              variants={item}
              className={`relative flex min-h-[150px] flex-col items-center px-5 text-center lg:min-h-[132px] ${
                index < results.length - 1
                  ? "lg:after:absolute lg:after:right-0 lg:after:top-4 lg:after:h-[92px] lg:after:w-px lg:after:bg-[#8d8b86]/45"
                  : ""
              }`}
            >
              <span className={`flex h-[44px] w-[44px] items-center justify-center rounded-[6px] border border-[#dfbd78]/70 shadow-[0_5px_10px_rgba(0,0,0,0.16)] ${iconBg}`}>
                <Icon className={`h-[22px] w-[22px] ${iconColor}`} strokeWidth={1.65} />
              </span>
              <h3 className="mt-5 text-[0.8rem] font-semibold leading-tight text-[#d9ae5d]">
                {title}
              </h3>
              <p className="mt-4 max-w-[135px] text-[0.68rem] leading-[1.32] text-white/70">
                {body}
              </p>
            </motion.article>
          ))}
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
