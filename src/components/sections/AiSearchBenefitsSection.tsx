"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  BarChart3,
  BriefcaseBusiness,
  Check,
  Globe2,
  Lightbulb,
} from "lucide-react";

const benefits = [
  "Increase AI-generated referrals",
  "Improve visibility beyond traditional SEO",
  "Become a trusted legal authority",
  "Generate more qualified organic leads",
  "Build long-term digital growth",
  "Future-proof your online marketing strategy",
];

const reasons = [
  {
    title: "Built for Law Firms",
    text: "Every optimization strategy is designed specifically for personal injury, mass tort, and litigation-focused law firms.",
    Icon: BriefcaseBusiness,
  },
  {
    title: "AI-Ready Strategies",
    text: "Prepare your website for today's AI search experiences and tomorrow's search technologies.",
    Icon: Globe2,
  },
  {
    title: "Technical & Content Expertise",
    text: "Our specialists combine advanced SEO, structured data, technical optimization, and legal content marketing into one strategy.",
    Icon: Lightbulb,
  },
  {
    title: "Performance-Driven Results",
    text: "Every recommendation is backed by analytics, measurable performance, and continuous optimization.",
    Icon: BarChart3,
  },
];

const reveal = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function AiSearchBenefitsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#404040] px-5 py-[64px] text-[#d9ae5d] sm:px-10 sm:py-[78px] lg:px-16 lg:py-[68px]">
      <Image
        src="/flowers/vcardBG.svg"
        alt=""
        width={520}
        height={520}
        className="pointer-events-none absolute right-[-78px] top-[35%] z-0 hidden w-[260px] -translate-y-1/2 lg:right-[10%] lg:block"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        className="relative z-10 mx-auto grid max-w-[900px] gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-24"
      >
        <motion.div variants={reveal}>
          <h2 className="text-[0.92rem] font-medium text-[#d9ae5d]">
            Benefits For Your Law Firm
          </h2>
          <ul className="mt-8 space-y-5">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-[0.82rem] leading-[1.35] text-white/68">
                <Check className="mt-[1px] h-4 w-4 shrink-0 text-[#d9ae5d]" strokeWidth={2} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={reveal}>
          <h2 className="text-[0.92rem] font-medium text-[#d9ae5d]">
            Why Choose YMG Legal
          </h2>
          <div className="mt-7 space-y-5">
            {reasons.map(({ title, text, Icon }) => (
              <div key={title} className="flex gap-4">
                <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#d9b462] text-[#4c4a42] shadow-[0_7px_16px_rgba(0,0,0,0.16)]">
                  <Icon className="h-[20px] w-[20px]" strokeWidth={1.65} />
                </span>
                <div className="pt-0.5">
                  <h3 className="text-[0.76rem] font-semibold text-[#d9ae5d]">{title}</h3>
                  <p className="mt-1.5 max-w-[430px] text-[0.68rem] leading-[1.45] text-white/60">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
