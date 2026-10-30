"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import ServiceShowcase from "@/components/home/ServiceShowcase";
import { EngagementModels, NextSteps } from "@/components/home/EngagementModels";
import TestimonialContactSection from "@/components/sections/TestimonialContactSection";
import {
  ArrowRight,
  Bot,
  CalendarClock,
  ChartNoAxesCombined,
  FileCheck2,
  FileSignature,
  Headset,
  MessagesSquare,
  MonitorSmartphone,
  PhoneCall,
  PhoneOutgoing,
  Scale,
  Search,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

type HubService = { icon: LucideIcon; title: string; body: string; href: string };

// Same four categories as the header's Services menu; each page sits under exactly one.
const categories: { id: string; title: string; body: string; services: HubService[]; channels?: { label: string; href: string }[] }[] = [
  {
    id: "case-acquisition",
    title: "Case Acquisition",
    body: "Leads, live calls and claimants built around the cases your firm handles.",
    services: [
      { icon: FileCheck2, title: "Personal Injury Lead Generation", body: "Qualified opportunities built around your firm's PI case criteria.", href: "/services/personal-injury-leads" },
      { icon: Search, title: "MVA Lead Generation", body: "Motor vehicle accident opportunities aligned to your target markets.", href: "/services/mva-leads" },
      { icon: UsersRound, title: "Mass Tort & Class Action", body: "Claimant pipelines for the campaigns your firm is actively pursuing.", href: "/services/mass-tort-leads" },
      { icon: Scale, title: "Class Action Leads", body: "Class members screened against the class definition and documented.", href: "/services/class-action-leads" },
      { icon: PhoneCall, title: "Pay-Per-Call", body: "Live, pre-screened calls warm-transferred to your intake team.", href: "/services/pay-per-call" },
      { icon: PhoneOutgoing, title: "Outbound Client Acquisition", body: "Consent-based follow-up that turns old inquiries into consultations.", href: "/services/outbound-client-acquisition" },
    ],
  },
  {
    id: "intake-conversion",
    title: "Intake & Conversion",
    body: "Every inquiry answered, screened and guided to a signed retainer.",
    services: [
      { icon: Headset, title: "Legal Intake Services", body: "24/7 answering, screening, follow-up and intake capacity.", href: "/services/legal-intake" },
      { icon: FileSignature, title: "Legal Contract & Retainer", body: "E-sign retainers, guided signing and secure document handling.", href: "/services/retainer-signing" },
      { icon: MessagesSquare, title: "Live Chat & Text", body: "Live website chat and two-way texting with prospects.", href: "/services/live-chat-text" },
      { icon: CalendarClock, title: "AI-Powered Booking", body: "Automated consultation scheduling with people behind it.", href: "/services/ai-booking" },
    ],
  },
  {
    id: "law-firm-marketing",
    title: "Law Firm Marketing",
    body: "The channels we run to grow your firm's own brand and inquiries.",
    services: [
      { icon: ChartNoAxesCombined, title: "Law Firm Marketing", body: "Marketing channels connected to lead quality, intake and growth goals.", href: "/services/law-firm-marketing" },
    ],
    channels: [
      { label: "Google Search Ads", href: "/services/google-search-ads" },
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "Local Services Ads", href: "/services/local-services-ads" },
      { label: "SEO", href: "/services/seo" },
      { label: "AI Search (AIO)", href: "/services/ai-search" },
      { label: "Organic Social Media", href: "/services/organic-social-media" },
      { label: "Website Design", href: "/services/website-design" },
    ],
  },
  {
    id: "law-firm-support",
    title: "Law Firm Support",
    body: "Paralegal, case and administrative capacity after the client signs.",
    services: [
      { icon: MonitorSmartphone, title: "Paralegal & Firm Support", body: "Case, litigation, records and administrative support.", href: "/services/law-firm-support" },
      { icon: Bot, title: "Legal Virtual Assistants", body: "Dedicated, US-based remote support staff for your team.", href: "/services/legal-virtual-assistants" },
    ],
  },
];

function HubCard({ service }: { service: HubService }) {
  const { icon: Icon, title, body, href } = service;
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-[10px] border border-[#dfbd78] bg-[#fff4dd] p-5 shadow-[0_7px_12px_rgba(91,69,34,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_28px_rgba(91,69,34,0.18)]"
    >
      <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[8px] bg-[#f7e3b8] text-[#7a5a1f]">
        <Icon className="h-[20px] w-[20px]" strokeWidth={1.7} aria-hidden="true" />
      </span>
      <h3 className="mt-4 font-sans text-[1.02rem] font-semibold leading-[1.25] text-[#3d4145]">{title}</h3>
      <p className="mt-2 text-[0.9rem] leading-[1.5] text-[#6f6c66]">{body}</p>
      <span className="mt-auto flex items-center gap-1 pt-4 text-[0.85rem] font-semibold text-[#a87b25]">
        Explore
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.8} aria-hidden="true" />
      </span>
    </Link>
  );
}

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

          <nav aria-label="Service categories" className="mx-auto mt-8 flex max-w-[980px] flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="rounded-full border border-[#dfbd78] bg-[#fff4dd] px-4 py-2 text-[0.85rem] font-semibold text-[#5e4416] transition-colors hover:bg-[#f7e3b8]"
              >
                {category.title}
              </a>
            ))}
          </nav>

          <div className="mx-auto mt-12 grid w-full max-w-[1100px] gap-14">
            {categories.map((category) => (
              <motion.section
                key={category.id}
                id={category.id}
                variants={reduceMotion ? undefined : heroRevealItem}
                className="scroll-mt-28"
                aria-labelledby={`${category.id}-title`}
              >
                <div className="flex flex-col gap-2 border-b border-[#dfbd78]/60 pb-4 sm:flex-row sm:items-end sm:justify-between">
                  <h2 id={`${category.id}-title`} className="font-heading text-[1.9rem] leading-tight text-[#3d4145] sm:text-[2.2rem]">
                    {category.title}
                  </h2>
                  <p className="max-w-[440px] text-[0.95rem] leading-[1.5] text-[#6f6c66] sm:text-right">{category.body}</p>
                </div>
                <div className={`mt-6 grid gap-4 sm:grid-cols-2 ${category.services.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
                  {category.services.map((service) => (
                    <HubCard key={service.href} service={service} />
                  ))}
                  {category.channels && (
                    <div className="rounded-[10px] border border-dashed border-[#dfbd78] p-5 sm:col-span-1 lg:col-span-2">
                      <p className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[#9b7531]">Channels we manage</p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {category.channels.map((channel) => (
                          <li key={channel.href}>
                            <Link
                              href={channel.href}
                              className="inline-flex rounded-full bg-[#fff4dd] px-3.5 py-2 text-[0.88rem] font-medium text-[#3d4145] ring-1 ring-[#e8d2aa] transition-colors hover:bg-[#f7e3b8]"
                            >
                              {channel.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.section>
            ))}
          </div>
        </motion.div>
      </section>
      <ServiceShowcase showAll={false} />
      <EngagementModels />
      <NextSteps />
      <TestimonialContactSection contactVariant="home" />
    </div>
  );
}
