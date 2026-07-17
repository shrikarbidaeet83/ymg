"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  FileText,
  Link2,
  MapPin,
  MonitorCog,
  Search,
  SquarePen,
  Target,
} from "lucide-react";

const seoServices = [
  {
    title: "Keyword Research",
    body: "Find searches that convert into real legal cases.",
    Icon: Search,
    iconBg: "bg-[#dce9ff]",
    iconColor: "text-[#3f587c]",
  },
  {
    title: "Technical SEO",
    body: "Improve speed, indexing, and website health.",
    Icon: MonitorCog,
    iconBg: "bg-[#f2ddff]",
    iconColor: "text-[#5d4772]",
  },
  {
    title: "On-Page SEO",
    body: "Optimize every page for higher rankings.",
    Icon: FileText,
    iconBg: "bg-[#d6f8ea]",
    iconColor: "text-[#315d4d]",
  },
  {
    title: "Local SEO",
    body: "Dominate Google Maps and local searches.",
    Icon: MapPin,
    iconBg: "bg-[#fff1d8]",
    iconColor: "text-[#73572d]",
  },
  {
    title: "Content Strategy",
    body: "Publish authority content that attracts qualified clients.",
    Icon: SquarePen,
    iconBg: "bg-[#e8f3d8]",
    iconColor: "text-[#4e6534]",
  },
  {
    title: "Link Building",
    body: "Earn trusted backlinks that improve rankings.",
    Icon: Link2,
    iconBg: "bg-[#f5dfdf]",
    iconColor: "text-[#7a4b4b]",
  },
  {
    title: "Analytics",
    body: "Track rankings, traffic, and qualified leads.",
    Icon: BarChart3,
    iconBg: "bg-[#e8e4fb]",
    iconColor: "text-[#514a78]",
  },
  {
    title: "CRO Optimization",
    body: "Turn more visitors into signed cases.",
    Icon: Target,
    iconBg: "bg-[#e2f0f3]",
    iconColor: "text-[#3d6269]",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function SeoServicesSection() {
  return (
    <section className="bg-[#FFF5E0] px-5 py-[62px] text-[#3d4145] sm:px-10 sm:py-[78px] lg:px-16 lg:py-[58px]">
      <div className="mx-auto w-full max-w-[900px]">
        <div className="text-center">
          <p className="text-[0.92rem] font-normal text-[#3d4145]">What&apos;s Included</p>
          <h2 className="mt-5 font-heading text-[2rem] font-bold leading-[1.3] text-[#3d4145] sm:text-[2.4rem] lg:text-[2.08rem]">
            Comprehensive SEO Services
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-[42px] lg:grid-cols-4 lg:gap-x-[24px] lg:gap-y-[22px]"
        >
          {seoServices.map(({ title, body, Icon, iconBg, iconColor }) => (
            <motion.article
              key={title}
              variants={item}
              className="grid min-h-[116px] grid-cols-[42px_minmax(0,1fr)] content-center gap-x-3 rounded-[6px] border border-[#dfbd78] bg-[#fffdfa] px-3 py-4 text-left shadow-[5px_7px_10px_rgba(91,69,34,0.16)] lg:min-h-[94px]"
            >
              <span className={`row-span-2 flex h-[42px] w-[42px] items-center justify-center rounded-[6px] border border-[#dfbd78]/70 shadow-[0_4px_8px_rgba(91,69,34,0.13)] ${iconBg}`}>
                <Icon className={`h-[21px] w-[21px] ${iconColor}`} strokeWidth={1.65} />
              </span>
              <h3 className="text-[0.74rem] font-semibold leading-tight text-[#3d4145]">
                {title}
              </h3>
              <p className="mt-2 text-[0.68rem] leading-[1.3] text-[#929292]">
                {body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
