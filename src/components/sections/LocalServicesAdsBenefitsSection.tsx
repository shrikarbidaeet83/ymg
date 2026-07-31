"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BarChart3, Check, ClipboardCheck, Network, Trophy } from "lucide-react";

const benefits = [
  "Appear Above Traditional Google Ads",
  "Pay Only for Qualified Leads",
  "Generate More High-Intent Calls",
  "Increase Consultation Bookings",
  "Build Trust with Google Screened",
  "Improve Local Market Visibility",
  "Lower Cost Per Acquisition",
  "Higher Return on Advertising Spend",
];

const reasons = [
  {
    title: "Legal Marketing Specialists",
    body: "We specialize exclusively in helping law firms generate more qualified legal cases.",
    Icon: Network,
  },
  {
    title: "Proven LSA Experience",
    body: "Our team has successfully managed Local Services Ads campaigns across personal injury, mass tort, and other legal practice areas.",
    Icon: Trophy,
  },
  {
    title: "Conversion-Focused Strategy",
    body: "We optimize campaigns not only for lead volume but also for signed retainers and long-term profitability.",
    Icon: ClipboardCheck,
  },
  {
    title: "Transparent Reporting",
    body: "Receive clear performance reports showing every lead, phone call, consultation, and ROI.",
    Icon: BarChart3,
  },
];

export default function LocalServicesAdsBenefitsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#404040] px-5 py-[62px] text-[#d9ae5d] sm:px-10 sm:py-[78px] lg:px-16 lg:py-[76px]">
      <Image
        src="/images/big_flowers.webp"
        alt=""
        width={190}
        height={190}
        className="pointer-events-none absolute right-[4%] top-[0px] z-0 hidden w-[128px] opacity-[0.05] sm:block"
      />
      <Image
        src="/images/small_flowers.webp"
        alt=""
        width={125}
        height={125}
        className="pointer-events-none absolute right-[9%] top-[124px] z-0 hidden w-[54px] opacity-[0.05] lg:block"
      />
      <Image
        src="/images/small_flowers.webp"
        alt=""
        width={125}
        height={125}
        className="pointer-events-none absolute right-[15%] top-[42px] z-0 hidden w-[36px] opacity-[0.05] lg:block"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1060px] gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-[88px]">
        <motion.div
          initial={{ opacity: 0, x: -34, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="min-w-0"
        >
          <h2 className="text-[1.08rem] font-normal leading-tight text-[#d9ae5d]">
            Benefits For Your Law Firm
          </h2>
          <div className="mt-9 space-y-5">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -18, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.65 }}
                transition={{ duration: 0.5, delay: index * 0.055, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-5 text-[1.05rem] leading-tight text-[#999897] sm:text-[1.25rem]"
              >
                <Check className="h-[16px] w-[16px] shrink-0 text-[#d9ae5d]" strokeWidth={1.8} />
                {benefit}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 34, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="min-w-0"
        >
          <h2 className="text-[1.08rem] font-normal leading-tight text-[#d9ae5d]">
            Why Choose YMG Legal
          </h2>
          <div className="mt-9 space-y-7">
            {reasons.map(({ title, body, Icon }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 22, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.58, delay: 0.18 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-[52px_minmax(0,1fr)] gap-5"
              >
                <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#d9ae5d] text-[#3d4145] shadow-[0_8px_18px_rgba(17,17,17,0.16)]">
                  <Icon className="h-[24px] w-[24px]" strokeWidth={1.55} />
                </span>
                <span>
                  <h3 className="text-[0.92rem] font-semibold leading-tight text-[#d9ae5d]">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-[470px] text-[0.84rem] leading-[1.38] text-[#999897]">
                    {body}
                  </p>
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
