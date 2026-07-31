"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import ServicesProcessSection from "@/components/sections/ServicesProcessSection";
import TestimonialContactSection from "@/components/sections/TestimonialContactSection";
import {
  ArrowRight,
  Bot,
  ChartNoAxesCombined,
  MapPin,
  Megaphone,
  MessagesSquare,
  MonitorSmartphone,
  Search,
  UsersRound,
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    iconBg: "bg-[#dce9ff]",
    iconColor: "text-[#3f587c]",
    title: "Digital Marketing",
    body: "Campaigns built for qualified case growth.",
    href: "/services/digital-marketing",
  },
  {
    icon: Search,
    iconBg: "bg-[#f2ddff]",
    iconColor: "text-[#4d415c]",
    title: "Google Search Ads",
    body: "High-intent PPC campaigns for legal cases.",
    href: "/services/google-search-ads",
  },
  {
    icon: UsersRound,
    iconBg: "bg-[#d6f8ea]",
    iconColor: "text-[#315d4d]",
    title: "Meta Ads",
    body: "Facebook and Instagram campaigns for consultations.",
    href: "/services/meta-ads",
  },
  {
    icon: MapPin,
    iconBg: "bg-[#eceeef]",
    iconColor: "text-[#596068]",
    title: "Local Services Ads",
    body: "Pay-per-lead LSA campaigns for calls.",
    href: "/services/local-services-ads",
  },
  {
    icon: ChartNoAxesCombined,
    iconBg: "bg-[#e9edf1]",
    iconColor: "text-[#596068]",
    title: "SEO",
    body: "Organic rankings for high-value legal searches.",
    href: "/services/seo",
  },
  {
    icon: MonitorSmartphone,
    iconBg: "bg-[#d9f8e2]",
    iconColor: "text-[#345a41]",
    title: "Website Design",
    body: "High-performance websites built to convert.",
    href: "/services/website-design",
  },
  {
    icon: Bot,
    iconBg: "bg-[#f4f3bd]",
    iconColor: "text-[#676632]",
    title: "AI Search (AIO)",
    body: "Authority optimization for AI recommendations.",
    href: "/services/ai-search",
  },
  {
    icon: MessagesSquare,
    iconBg: "bg-[#d8f8ce]",
    iconColor: "text-[#3f6338]",
    title: "Organic Social Media",
    body: "On-brand content that builds trust.",
    href: "/services/organic-social-media",
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
              End to End Solutions
            </h1>
            <p className="mx-auto mt-3 max-w-[590px] text-[0.7rem] leading-[1.45] text-[#606368] sm:text-[0.8rem] lg:text-[0.86rem]">
              From the first phone ring to the signed retainer we cover every touchpoint your law firm needs to capture, qualify, and convert clients.
            </p>
          </motion.div>

          <motion.div variants={reduceMotion ? undefined : heroReveal} className="mx-auto mt-10 grid w-full max-w-[980px] gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
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
