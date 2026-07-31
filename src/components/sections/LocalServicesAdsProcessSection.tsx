"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, LineChart, Rocket, Settings, UsersRound } from "lucide-react";

const steps = [
  {
    title: "Account Setup",
    body: "Create and configure your Local Services Ads account with best-practice settings.",
    Icon: UsersRound,
  },
  {
    title: "Google Verification",
    body: "Complete Google Screened verification and optimize your business profile.",
    Icon: BadgeCheck,
  },
  {
    title: "Campaign Launch",
    body: "Launch campaigns targeting your preferred locations, services, and practice areas.",
    Icon: Rocket,
  },
  {
    title: "Lead Optimization",
    body: "Analyze lead quality, improve targeting, and maximize conversion rates.",
    Icon: Settings,
  },
  {
    title: "Continuous Growth",
    body: "Scale successful campaigns while lowering your cost per qualified lead.",
    Icon: LineChart,
  },
];

export default function LocalServicesAdsProcessSection() {
  return (
    <section className="overflow-hidden bg-[#FFF5E0] px-5 py-[66px] text-[#3d4145] sm:px-10 sm:py-[86px] lg:px-16 lg:py-[96px]">
      <div className="mx-auto w-full max-w-[1120px]">
        <motion.h2
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.65 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="text-center font-heading text-[2rem] font-bold uppercase leading-tight tracking-[0] text-[#3d4145] sm:text-[2.55rem] lg:text-[2.4rem]"
        >
          Our LSA Management Process
        </motion.h2>

        <div className="mt-[72px] grid gap-9 sm:grid-cols-2 lg:grid-cols-[1fr_40px_1fr_40px_1fr_40px_1fr_40px_1fr] lg:items-start lg:gap-4">
          {steps.map(({ title, body, Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30, scale: 0.94, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="contents"
            >
              <div className="flex min-h-[190px] flex-col items-center text-center">
                <span className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#d9ae5d] text-[#3d4145] shadow-[0_8px_18px_rgba(91,69,34,0.13)]">
                  <Icon className="h-[22px] w-[22px]" strokeWidth={1.55} />
                </span>
                <h3 className="mt-5 text-[0.92rem] font-semibold leading-tight text-[#3d4145]">
                  {title}
                </h3>
                <p className="mt-5 max-w-[170px] text-[0.82rem] leading-[1.35] text-[#8c8a85]">
                  {body}
                </p>
              </div>
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.55, delay: 0.28 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="hidden h-[46px] items-center justify-center text-[#d9ae5d] lg:flex"
                >
                  <ArrowRight className="h-[28px] w-[28px]" strokeWidth={1.45} />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
