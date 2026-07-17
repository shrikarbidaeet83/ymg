"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  BarChart3,
  Building2,
  CheckCircle2,
  Mic,
  Phone,
  Search,
  UserRound,
} from "lucide-react";

const seoServices = [
  "Legal SEO Strategy",
  "Local SEO",
  "Keyword Research",
  "Authority Link Building",
  "Technical SEO",
  "Content Strategy",
  "On-Page SEO",
  "Monthly Reporting",
];

const diagramContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.32,
      delayChildren: 0.15,
    },
  },
};

const diagramItem = {
  hidden: { opacity: 0, y: -28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function FlowArrow() {
  return (
    <motion.div variants={diagramItem} className="flex h-6 items-center justify-center text-[#d9ae5d]">
      <span className="text-[1.4rem] font-light leading-none">&darr;</span>
    </motion.div>
  );
}

export default function SeoSolutionSection() {
  return (
    <section className="overflow-hidden bg-[#FFF5E0] px-5 py-[62px] text-[#3d4145] sm:px-10 sm:py-[78px] lg:px-16 lg:py-[64px]">
      <div className="mx-auto grid w-full max-w-[900px] items-center gap-12 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-[72px]">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="min-w-0"
        >
          <p className="text-[0.92rem] font-normal text-[#3d4145]">Our Solution</p>
          <h2 className="mt-6 max-w-[600px] font-heading text-[2rem] font-bold leading-[1.35] tracking-[0] text-[#3d4145] sm:text-[2.5rem] lg:text-[2.08rem]">
            We Build SEO Systems
            <span className="mt-1 block">That Generate Qualified Cases</span>
          </h2>
          <p className="mt-7 max-w-[590px] text-[0.8rem] leading-[1.4] text-[#55585a] sm:text-[0.9rem] lg:text-[0.78rem]">
            Our SEO strategy is built specifically for personal injury, mass tort, and complex
            litigation firms. Every optimization is designed to increase qualified case
            inquiries, not vanity traffic.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-4 min-[420px]:grid-cols-2 sm:max-w-[520px]">
            {seoServices.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="flex items-center gap-2 text-[0.82rem] text-[#55585a] sm:text-[0.9rem]"
              >
                <CheckCircle2 className="h-[14px] w-[14px] shrink-0 text-[#77796f]" strokeWidth={1.6} />
                {service}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={diagramContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          className="mx-auto flex w-full max-w-[250px] flex-col lg:max-w-[220px]"
        >
          <motion.div
            variants={diagramItem}
            className="flex h-[42px] items-center gap-2 rounded-[9px] border border-[#dfbd78] bg-white px-3 shadow-[0_7px_15px_rgba(91,69,34,0.17)]"
          >
            <Search className="h-[15px] w-[15px] shrink-0 text-[#d3a756]" strokeWidth={1.7} />
            <span className="min-w-0 flex-1 truncate text-[0.58rem] text-[#4c4c4c]">
              Personal Injury Lawyer
            </span>
            <Mic className="h-[13px] w-[13px] shrink-0 text-[#252525]" strokeWidth={1.8} />
          </motion.div>

          <FlowArrow />

          <motion.div
            variants={diagramItem}
            className="grid min-h-[76px] grid-cols-[34px_minmax(0,1fr)] items-center gap-3 rounded-[9px] border border-[#dfbd78] bg-white px-3 py-3 shadow-[0_7px_15px_rgba(91,69,34,0.17)]"
          >
            <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#dfb761] text-[0.72rem] font-semibold text-white">
              #1
            </span>
            <span className="space-y-2">
              <span className="block h-[4px] w-[82%] rounded-full bg-[#4a4a4a]" />
              <span className="block h-[4px] w-[50%] rounded-full bg-[#e0b45d]" />
              <span className="block h-[4px] w-[70%] rounded-full bg-[#f4e3bd]" />
            </span>
          </motion.div>

          <FlowArrow />

          <motion.div
            variants={diagramItem}
            className="grid min-h-[82px] grid-cols-[1.1fr_0.8fr] gap-3 rounded-[9px] border border-[#dfbd78] bg-white px-3 py-3 shadow-[0_7px_15px_rgba(91,69,34,0.17)]"
          >
            <div className="flex items-end gap-1 border-b border-[#e7d6ad] pb-1">
              {[18, 27, 36, 48].map((height, index) => (
                <span
                  key={height}
                  className="w-3 bg-[linear-gradient(to_top,#d9ae5d,#f4e5c4)]"
                  style={{ height }}
                >
                  <span className="sr-only">Growth bar {index + 1}</span>
                </span>
              ))}
            </div>
            <div className="flex flex-col justify-center gap-2 rounded-[4px] bg-[#fff7e7] px-2">
              <BarChart3 className="h-[16px] w-[16px] text-[#d3a756]" strokeWidth={1.6} />
              <span className="h-[3px] w-full rounded-full bg-[#d7b66d]" />
              <span className="h-[3px] w-3/4 rounded-full bg-[#ead7ad]" />
            </div>
          </motion.div>

          <FlowArrow />

          <motion.div
            variants={diagramItem}
            className="grid min-h-[92px] grid-cols-[38px_minmax(0,1fr)] gap-x-3 rounded-[9px] border border-[#dfbd78] bg-white px-3 py-3 shadow-[0_7px_15px_rgba(91,69,34,0.17)]"
          >
            <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#666] text-white">
              <UserRound className="h-[19px] w-[19px]" strokeWidth={1.7} />
            </span>
            <span className="space-y-2 pt-1">
              <span className="block h-[4px] w-[68%] rounded-full bg-[#4a4a4a]" />
              <span className="flex h-[12px] w-full items-center rounded-full bg-[#f4ebd6] px-1">
                <BadgeCheck className="h-[9px] w-[9px] text-[#d3a756]" />
              </span>
            </span>
            <span className="col-span-2 mt-2 flex items-center gap-3 pl-1">
              <Phone className="h-[11px] w-[11px] text-[#444]" />
              <span className="h-[4px] w-[42%] rounded-full bg-[#dfc994]" />
            </span>
          </motion.div>

          <FlowArrow />

          <motion.div
            variants={diagramItem}
            className="grid min-h-[70px] grid-cols-[42px_minmax(0,1fr)] items-center gap-3 rounded-[9px] border border-[#dfbd78] bg-white px-3 py-3 shadow-[0_7px_15px_rgba(91,69,34,0.17)]"
          >
            <Building2 className="h-[36px] w-[36px] text-[#4b4b4b]" strokeWidth={1.65} />
            <span className="space-y-2">
              <span className="block h-[4px] w-[70%] rounded-full bg-[#4a4a4a]" />
              <span className="flex h-[16px] w-full items-center rounded-full bg-[#f4ebd6] px-1">
                <BadgeCheck className="h-[11px] w-[11px] text-[#d3a756]" />
              </span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
