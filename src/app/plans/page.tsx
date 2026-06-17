import Image from "next/image";
import FullFunnelSolutionsSection from "@/components/sections/FullFunnelSolutionsSection";
import {
  BarChart3,
  CalendarDays,
  ClipboardList,
  FileCheck2,
  Mail,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";

const planCards = [
  {
    title: "Call Services",
    description:
      "Reduce missed calls, capture every lead and be there for your clients - 24/7/365",
    features: [
      { icon: CalendarDays, text: "Office hours and after-hours phone coverage" },
      { icon: Phone, text: "Live transfer and call routing" },
      { icon: ClipboardList, text: "Appointment scheduling" },
      { icon: BarChart3, text: "Reporting & analytics" },
    ],
  },
  {
    title: "Intake Services",
    description:
      "Screen potential clients and identify the right cases and opportunities",
    features: [
      { icon: FileCheck2, text: "24/7/365 new client intake" },
      { icon: Users, text: "Web forms and online leads" },
      { icon: Phone, text: "Outbound calling" },
      { icon: ClipboardList, text: "CRM/CMS integration" },
      {
        icon: BarChart3,
        text: "Large-scale advertising and marketing campaigns",
      },
    ],
    featured: true,
    ctaClassName: "mt-10",
  },
  {
    title: "Contract & Retainer Services",
    description: "Convert the right inquiries into paying clients",
    features: [
      { icon: Phone, text: "Resurrect lost leads" },
      { icon: CalendarDays, text: "Scheduled call-backs" },
      { icon: BarChart3, text: "Smart Lead tracking" },
      { icon: Mail, text: "Personalized welcome email" },
      { icon: ShieldCheck, text: "HIPAA compliant and secure" },
    ],
    ctaClassName: "mt-10",
  },
];

export default function PlansPage() {
  return (
    <>
      <section className="relative isolate min-h-screen overflow-hidden bg-[#fff5e0] px-5 pb-16 pt-[118px] text-[#3d4145] sm:px-8 lg:px-12 lg:pb-20 lg:pt-[132px]">
        <Image
          src="/images/Home page Big Flower light mode (1)-Photoroom.png"
          alt=""
          width={220}
          height={220}
          priority
          className="pointer-events-none absolute bottom-[-32px] left-[-34px] z-0 w-[120px] opacity-[0.08] brightness-90 sepia sm:w-[170px] lg:w-[210px]"
        />
        <Image
          src="/images/Home page Small Flower light mode-Photoroom.png"
          alt=""
          width={76}
          height={76}
          priority
          className="pointer-events-none absolute bottom-[84px] left-[10%] z-0 w-[48px] opacity-[0.07] brightness-90 sepia sm:w-[62px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <h1 className="mx-auto max-w-[1180px] text-center font-heading text-[clamp(1.45rem,2.45vw,2.3rem)] font-normal leading-[1.24] tracking-[0] text-[#3d4145]">
            <span className="block lg:whitespace-nowrap">
              Our outbound call services are designed to increase your firm&apos;s revenue and
            </span>
            <span className="block lg:whitespace-nowrap">
              enhance client engagement. Contact us to learn more.
            </span>
          </h1>

          <div className="mx-auto mt-10 grid max-w-[1180px] items-start gap-5 md:grid-cols-3 lg:mt-14 lg:gap-6">
            {planCards.map(({ title, description, features, featured, ctaClassName }) => (
              <article
                key={title}
                className={`relative overflow-hidden rounded-[6px] border border-[#dfbd78] bg-[#fff5e0] px-6 py-7 shadow-[0_12px_26px_rgba(86,65,31,0.14)] ${
                  featured ? "md:-translate-y-0 lg:-translate-y-0" : ""
                }`}
              >
                <div className="pointer-events-none absolute bottom-[-34px] left-[-20px] h-[150px] w-[150px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(223,189,120,0.16),rgba(223,189,120,0)_68%)]" />

                <div className="relative z-10 flex flex-col">
                  <h2 className="text-[1.25rem] font-semibold leading-tight text-[#3d4145] lg:text-[1.35rem]">
                    {title}
                  </h2>
                  <p className="mt-4 max-w-[235px] text-[0.78rem] leading-[1.45] text-[#8a8c8e]">
                    {description}
                  </p>

                  <ul className="mt-6 space-y-4">
                    {features.map(({ icon: Icon, text }) => (
                      <li
                        key={text}
                        className="flex items-start gap-3 text-[0.7rem] leading-snug text-[#55585a]"
                      >
                        <Icon className="mt-[-1px] h-4 w-4 shrink-0 text-[#3d4145]" strokeWidth={1.65} />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className={`${ctaClassName ?? "mt-8"} h-12 w-full rounded-[4px] bg-[#d9ae5d] text-[0.82rem] font-semibold tracking-[0.08em] text-[#1f2529] shadow-[0_8px_14px_rgba(130,95,35,0.16)] transition-colors hover:bg-[#efcd86]`}
                  >
                    Get Started
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FullFunnelSolutionsSection />
    </>
  );
}
