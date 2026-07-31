import Image from "next/image";
import Link from "next/link";
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
  },
];

export default function PlansPage() {
  return (
    <>
      <section className="ymg-standard-hero ymg-section-padding-x relative isolate overflow-hidden bg-[#FFF5E0] pb-[60px] pt-[118px] text-[#3d4145] lg:pt-[132px]">
        <Image
          src="/flowers/3rd-flower.svg"
          alt=""
          width={573}
          height={411}
          priority
          className="pointer-events-none absolute left-[5px] top-[500px] z-0 w-[143px] mix-blend-multiply sm:left-[10px] sm:top-[510px] sm:w-[215px] lg:left-[225px] lg:top-[600px] lg:w-[287px]"
        />
        <Image
          src="/images/big_flowers.webp"
          alt=""
          width={220}
          height={220}
          priority
          className="pointer-events-none absolute bottom-[-32px] left-[-34px] z-0 w-[120px] opacity-[0.08] brightness-90 sepia sm:w-[170px] lg:w-[210px]"
        />
        <Image
          src="/images/small_flowers.webp"
          alt=""
          width={76}
          height={76}
          priority
          className="pointer-events-none absolute bottom-[84px] left-[10%] z-0 w-[48px] opacity-[0.07] brightness-90 sepia sm:w-[62px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <h1 className="ymg-standard-hero-title mx-auto max-w-[1180px] text-center text-[#3d4145]">
            <span className="block lg:whitespace-nowrap">
              Our outbound call services are designed to increase your firm&apos;s revenue and
            </span>
            <span className="block lg:whitespace-nowrap">
              enhance client engagement. Contact us to learn more.
            </span>
          </h1>

          <div className="mx-auto mt-10 grid max-w-[1180px] auto-rows-fr gap-5 md:grid-cols-3 lg:mt-14 lg:gap-6">
            {planCards.map(({ title, description, features }) => (
              <article
                key={title}
                className="relative flex h-full min-h-[430px] overflow-hidden rounded-[6px] border border-[#dfbd78] bg-[#FFF5E0] px-6 py-7 shadow-[4px_5px_8px_rgba(86,65,31,0.16)] sm:min-h-[450px] lg:min-h-[470px]"
              >
                <div className="pointer-events-none absolute bottom-[-34px] left-[-20px] h-[150px] w-[150px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(223,189,120,0.16),rgba(223,189,120,0)_68%)]" />

                <div className="relative z-10 flex h-full w-full flex-col">
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

                  <div className="mt-auto pt-10">
                    <Link
                      href="/contact#booking"
                      className="flex h-[52px] w-full items-center justify-center rounded-[4px] bg-[#d9ae5d] px-8 text-sm font-bold text-[#2e3032] shadow-[0_12px_28px_rgba(168,129,62,0.22)] transition-colors hover:bg-[#c89f4e]"
                    >
                      Get Started
                    </Link>
                  </div>
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
