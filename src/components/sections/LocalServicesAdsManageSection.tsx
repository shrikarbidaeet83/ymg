"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BarChart3, BadgeDollarSign, FileText, Phone, ShieldCheck, Target } from "lucide-react";
import IncludedServicesCarousel from "@/components/sections/IncludedServicesCarousel";

const manageItems = [
  {
    title: "LSA Profile Optimization",
    body: "Optimize your business profile to improve visibility, trust, and lead quality.",
    Icon: FileText,
    iconName: "file",
    iconBg: "bg-[#fff1d8]",
    iconColor: "text-[#73572d]",
  },
  {
    title: "Google Screened Verification",
    body: "Guide your law firm through Google's verification process to earn the trusted Google Screened badge.",
    Icon: ShieldCheck,
    iconName: "shield",
    iconBg: "bg-[#e8f3d8]",
    iconColor: "text-[#4e6534]",
  },
  {
    title: "Practice Area Optimization",
    body: "Target the right legal practice areas and service locations to maximize qualified inquiries.",
    Icon: Target,
    iconName: "target",
    iconBg: "bg-[#f2ddff]",
    iconColor: "text-[#5d4772]",
  },
  {
    title: "Lead Management",
    body: "Monitor, qualify, and respond to every incoming call and message quickly.",
    Icon: Phone,
    iconName: "messages",
    iconBg: "bg-[#d6f8ea]",
    iconColor: "text-[#315d4d]",
  },
  {
    title: "Budget & Bid Optimization",
    body: "Optimize your budget to maximize qualified leads while reducing acquisition costs.",
    Icon: BadgeDollarSign,
    iconName: "dollar",
    iconBg: "bg-[#f5dfdf]",
    iconColor: "text-[#7a4b4b]",
  },
  {
    title: "Performance Reporting",
    body: "Track calls, booked consultations, qualified leads, cost per lead, and campaign ROI.",
    Icon: BarChart3,
    iconName: "chart",
    iconBg: "bg-[#dce9ff]",
    iconColor: "text-[#3f587c]",
  },
];

const carouselItems = manageItems.map(({ title, body, iconName, iconBg, iconColor }) => ({
  title,
  body,
  iconName,
  iconBg,
  iconColor,
}));

export default function LocalServicesAdsManageSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#404040] px-5 py-[62px] text-[#d9ae5d] sm:px-10 sm:py-[78px] lg:px-16 lg:py-[68px]">
      <Image
        src="/images/big_flowers.png"
        alt=""
        width={190}
        height={190}
        className="pointer-events-none absolute right-[7%] top-[-18px] z-0 hidden w-[102px] opacity-[0.05] sm:block"
      />
      <Image
        src="/images/small_flowers.png"
        alt=""
        width={125}
        height={125}
        className="pointer-events-none absolute right-[2.5%] top-[50px] z-0 hidden w-[32px] opacity-[0.055] lg:block"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1080px]">
        <motion.h2
          initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-center font-heading text-[2rem] font-bold leading-tight text-[#d9ae5d] sm:text-[2.4rem] lg:text-[2.08rem]"
        >
          What We Manage
        </motion.h2>

        <div className="mt-10 lg:hidden">
          <IncludedServicesCarousel services={carouselItems} theme="dark" />
        </div>

        <div className="mt-[74px] hidden grid-cols-6 gap-4 lg:grid">
          {manageItems.map(({ title, body, Icon, iconBg, iconColor }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30, scale: 0.94, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.62, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="min-h-[235px] rounded-[6px] border border-[#dfbd78] bg-[#fffdfa] px-4 pb-5 pt-4 text-left shadow-[5px_7px_10px_rgba(17,17,17,0.22)]"
            >
              <span className={`flex h-[42px] w-[42px] items-center justify-center rounded-[5px] border border-[#dfbd78] shadow-[0_6px_10px_rgba(91,69,34,0.16)] ${iconBg}`}>
                <Icon className={`h-[21px] w-[21px] ${iconColor}`} strokeWidth={1.65} />
              </span>
              <h3 className="mt-5 text-[0.82rem] font-semibold leading-tight text-[#333]">
                {title}
              </h3>
              <p className="mt-5 text-[0.72rem] leading-[1.35] text-[#8f8f8f]">
                {body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
