"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import ServicesProcessSection from "@/components/sections/ServicesProcessSection";
import TestimonialContactSection from "@/components/sections/TestimonialContactSection";
import {
  ArrowRight,
  ChartNoAxesCombined,
  FileCheck2,
  MapPin,
  MonitorSmartphone,
  Search,
  UsersRound,
} from "lucide-react";

const services = [
  {
    icon: FileCheck2,
    iconBg: "bg-[#dce9ff]",
    iconColor: "text-[#3f587c]",
    title: "Personal Injury Lead Generation",
    body: "Qualified opportunities built around your firm's PI case criteria.",
    href: "/services/personal-injury-leads",
  },
  {
    icon: Search,
    iconBg: "bg-[#f2ddff]",
    iconColor: "text-[#4d415c]",
    title: "MVA Lead Generation",
    body: "Motor vehicle accident opportunities aligned to your target markets.",
    href: "/services/mva-leads",
  },
  {
    icon: UsersRound,
    iconBg: "bg-[#d6f8ea]",
    iconColor: "text-[#315d4d]",
    title: "Mass Tort Lead Generation",
    body: "Claimant pipelines for the campaigns your firm is actively pursuing.",
    href: "/services/mass-tort-leads",
  },
  {
    icon: MapPin,
    iconBg: "bg-[#eceeef]",
    iconColor: "text-[#596068]",
    title: "Legal Intake Services",
    body: "Structured screening, follow-up, and intake capacity for your firm.",
    href: "/services/legal-intake",
  },
  {
    icon: ChartNoAxesCombined,
    iconBg: "bg-[#e9edf1]",
    iconColor: "text-[#596068]",
    title: "Law Firm Marketing",
    body: "Marketing channels connected to lead quality, intake, and growth goals.",
    href: "/services/law-firm-marketing",
  },
  {
    icon: MonitorSmartphone,
    iconBg: "bg-[#d9f8e2]",
    iconColor: "text-[#345a41]",
    title: "Outsourced Paralegal & Law Firm Support",
    body: "Flexible operational capacity structured around your firm's workflow.",
    href: "/services/law-firm-support",
  },
];

const heroReveal = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.08,
    },
  },
};

const heroRevealItem = {
  hidden: { opacity: 0, y: 24, scale: 0.97, filter: "blur(7px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.62,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function ServicesPage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="bg-[#FFF5E0] pt-20 dark:bg-[#191917]">
      <section className="ymg-standard-hero relative isolate overflow-hidden bg-[#FFF5E0] px-5 pb-14 pt-10 text-[#3a3d42] sm:px-10 sm:pb-16 lg:px-16 xl:px-20">
        <div className="pointer-events-none absolute inset-0 z-0 mx-auto w-full max-w-[1220px]">
          <Image
            src="/flowers/3rd-flower.svg"
            alt=""
            width={382}
            height={274}
            priority
            className="absolute left-[14%] top-[50px] w-[110px] opacity-[0.08] mix-blend-multiply sm:w-[150px]"
          />
          <Image
            src="/flowers/3rd-flower.svg"
            alt=""
            width={382}
            height={274}
            priority
            className="absolute right-[13%] top-[34px] w-[130px] rotate-[12deg] opacity-[0.1] mix-blend-multiply sm:w-[175px]"
          />
        </div>

        <motion.div
          variants={reduceMotion ? undefined : heroReveal}
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? undefined : "visible"}
          className="relative z-10 mx-auto w-full max-w-[1260px]"
        >
          <motion.div variants={reduceMotion ? undefined : heroRevealItem} className="mx-auto max-w-[650px] text-center">
            <p className="text-[0.68rem] font-medium text-[#55585a] sm:text-[0.78rem] lg:text-[0.86rem]">
              What We Offer
            </p>
            <h1 className="ymg-standard-hero-title mt-4 text-[#3d4145]">
              Services Built Around Law Firm Growth
            </h1>
            <p className="mx-auto mt-3 max-w-[590px] text-[0.7rem] leading-[1.45] text-[#606368] sm:text-[0.8rem] lg:text-[0.86rem]">
              Our services are designed around the business problems law firms face, connecting acquisition, intake, marketing, and operational support.
            </p>
          </motion.div>

          <motion.div variants={reduceMotion ? undefined : heroReveal} className="mx-auto mt-10 grid w-full max-w-[980px] gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, iconBg, iconColor, title, body, href }) => (
              <motion.div
                key={title}
                variants={reduceMotion ? undefined : heroRevealItem}
                className="min-w-0"
              >
                <Link
                  href={href}
                  className="group flex h-full min-h-[185px] flex-col rounded-[7px] border border-[#dfbd78] bg-[#fff4dd] px-4 pb-4 pt-4 shadow-[0_7px_12px_rgba(91,69,34,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_28px_rgba(91,69,34,0.2)] sm:min-h-[225px]"
                >
                  <span className={`mb-4 flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[5px] ${iconBg}`}>
                    <Icon className={`h-[20px] w-[20px] ${iconColor}`} strokeWidth={1.7} />
                  </span>
                  <h3 className="font-sans text-[0.86rem] font-medium leading-[1.25] text-[#3d4145]">
                    {title}
                  </h3>
                  <p className="mt-3 text-[0.68rem] leading-[1.45] text-[#85827b]">
                    {body}
                  </p>
                  <span className="mt-auto flex items-center justify-end gap-1 pt-4 text-[0.64rem] font-medium text-[#D8B26B]">
                    Explore More
                    <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.6} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      <ServicesProcessSection />
      <TestimonialContactSection contactVariant="home" />
    </div>
  );
}
