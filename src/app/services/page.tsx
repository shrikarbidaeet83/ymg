"use client";

import Image from "next/image";
import GrowthPartnerSection from "@/components/sections/GrowthPartnerSection";
import ServicesProcessSection from "@/components/sections/ServicesProcessSection";
import TestimonialContactSection from "@/components/sections/TestimonialContactSection";
import {
  ClipboardList,
  FileCheck2,
  Magnet,
  Phone,
  Radio,
  UserCheck,
  Users,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Magnet,
    iconBg: "bg-[#dce9ff]",
    iconColor: "text-[#3f587c]",
    title: "Lead Generation",
    body: "Generate high-intent leads with targeted campaigns. Drive consistent, qualified case opportunities.",
  },
  {
    icon: ClipboardList,
    iconBg: "bg-[#f2ddff]",
    iconColor: "text-[#4d415c]",
    title: "Lead Capture",
    body: "Capture high-intent leads through optimized channels. Turn inquiries into qualified opportunities instantly.",
  },
  {
    icon: UserCheck,
    iconBg: "bg-[#d6f8ea]",
    iconColor: "text-[#315d4d]",
    title: "Intake & Qualification",
    body: "Screen and qualify every lead with expert intake. Connect you with high-intent, case-ready clients.",
    mobileOrder: "order-5",
  },
  {
    icon: Phone,
    iconBg: "bg-[#eceeef]",
    iconColor: "text-[#596068]",
    title: "Call Handling",
    body: "Handle every call with speed and precision. Capture and qualify high-intent inquiries seamlessly.",
    mobileOrder: "order-6",
  },
  {
    icon: FileCheck2,
    iconBg: "bg-[#d9f8e2]",
    iconColor: "text-[#345a41]",
    title: "Conversion",
    body: "Convert qualified leads into signed retainers. Maximize case value with optimized follow-ups.",
    mobileOrder: "order-3",
  },
  {
    icon: Radio,
    iconBg: "bg-[#fffadf]",
    iconColor: "text-[#464638]",
    title: "Post Conversion",
    body: "Manage clients seamlessly after conversion. Ensure smooth onboarding and long-term value.",
    mobileOrder: "order-4",
  },
  {
    icon: Users,
    iconBg: "bg-[#d8f8ce]",
    iconColor: "text-[#3f6338]",
    title: "Staffing",
    body: "Scale your team with skilled, dedicated support staff. Enhance efficiency with trained intake and operations experts.",
    mobileOrder: "order-7 col-start-2",
  },
  {
    icon: Zap,
    iconBg: "bg-[#f4e2d7]",
    iconColor: "text-[#6d584d]",
    title: "Technology / Automation",
    body: "Automate workflows with intelligent, AI-driven systems. Boost efficiency and scale operations seamlessly.",
    mobileOrder: "order-8 col-start-4",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#FFF5E0] pt-20">
      <section className="ymg-section-padding relative isolate min-h-[calc(100svh-80px)] overflow-hidden bg-[#FFF5E0] pt-16 text-[#3a3d42] sm:pt-20 lg:pt-24 xl:pt-28">
        <div className="pointer-events-none absolute inset-0 z-0 mx-auto w-full max-w-[1220px]">
          <Image
            src="/flowers/half-circleBG.svg"
            alt=""
            width={1180}
            height={848}
            priority
            className="absolute bottom-[-70px] left-[-80px] w-[260px] mix-blend-multiply sm:w-[360px] lg:bottom-[-90px] lg:left-[-100px] lg:w-[460px]"
          />
          <Image
            src="/flowers/vcardBG.svg"
            alt=""
            width={273}
            height={196}
            priority
            className="absolute bottom-8 right-[-34px] w-[140px] sm:bottom-10 sm:right-[-20px] sm:w-[210px] lg:bottom-12 lg:right-0 lg:w-[273px]"
          />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-[1220px] items-center gap-7 sm:gap-9 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-[34px] xl:grid-cols-[minmax(0,400px)_minmax(0,1fr)] xl:gap-[54px]">
          <div className="mx-auto max-w-[310px] text-center sm:max-w-[430px] lg:mx-0 lg:max-w-[400px] lg:text-left">
            <p className="mb-3 text-[0.55rem] font-medium text-[#55585a] sm:mb-4 sm:text-[0.75rem] lg:mb-5 lg:text-[0.82rem]">
              What We Offer
            </p>
            <h1 className="mx-auto max-w-[280px] font-heading text-[1.72rem] font-normal leading-[1.1] tracking-[0] text-[#3d4145] sm:max-w-[390px] sm:text-[2.35rem] lg:mx-0 lg:max-w-[400px] lg:text-[2.42rem] xl:text-[2.68rem]">
              End to End Legal
              <span className="block lg:whitespace-nowrap">Marketing Services</span>
            </h1>
            <p className="mx-auto mt-4 max-w-[292px] text-[0.64rem] leading-[1.45] text-[#606368] sm:mt-5 sm:max-w-[350px] sm:text-[0.82rem] lg:mx-0 lg:mt-6 lg:text-[0.86rem]">
              From the first phone ring to the signed retainer we cover every touchpoint your law firm needs to capture, qualify, and convert clients.
            </p>
          </div>

          <div className="mx-auto grid w-full max-w-[330px] grid-cols-6 gap-1.5 sm:max-w-[620px] sm:grid-cols-2 sm:gap-2.5 lg:max-w-none lg:grid-cols-4 lg:gap-3.5">
            {services.map(({ icon: Icon, iconBg, iconColor, title, body, mobileOrder }) => (
              <article
                key={title}
                className={`${mobileOrder ?? ""} col-span-2 min-h-[102px] rounded-[4px] border border-[#dfbd78] bg-[#fff4dd] px-2 pb-2 pt-2 shadow-[0_6px_10px_rgba(91,69,34,0.13)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_26px_rgba(91,69,34,0.18)] sm:col-span-1 sm:col-start-auto sm:min-h-[142px] sm:rounded-[6px] sm:px-3.5 sm:pb-3.5 sm:pt-3.5 lg:order-none lg:min-h-[152px] lg:rounded-[7px] lg:px-4 lg:pb-4 lg:pt-4 xl:min-h-[160px]`}
              >
                <div className={`mb-2 flex h-[22px] w-[22px] items-center justify-center rounded-[3px] sm:mb-3 sm:h-[30px] sm:w-[30px] sm:rounded-[5px] lg:mb-4 lg:h-[34px] lg:w-[34px] ${iconBg}`}>
                  <Icon className={`h-[11px] w-[11px] sm:h-[15px] sm:w-[15px] lg:h-[17px] lg:w-[17px] ${iconColor}`} strokeWidth={1.7} />
                </div>
                <h3 className="mb-1 font-sans text-[0.43rem] font-medium leading-tight text-[#3d4145] sm:mb-1.5 sm:text-[0.68rem] lg:mb-2 lg:text-[0.74rem]">
                  {title}
                </h3>
                <p className="text-[0.36rem] leading-[1.35] text-[#85827b] sm:text-[0.54rem] sm:leading-[1.42] lg:text-[0.58rem] lg:leading-[1.45]">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ServicesProcessSection />
      <GrowthPartnerSection variant="light" />
      <TestimonialContactSection contactVariant="home" />
    </div>
  );
}
