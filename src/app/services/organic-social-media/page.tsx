import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import IncludedServicesCarousel from "@/components/sections/IncludedServicesCarousel";
import OrganicBenefitStack from "@/components/sections/OrganicBenefitStack";
import ServiceFaqSection from "@/components/sections/ServiceFaqSection";
import { MobileProofScroller, ProofBar } from "@/components/sections/ProofHighlights";
import {
  BarChart3,
  BrainCircuit,
  CalendarDays,
  Megaphone,
  MessagesSquare,
  Palette,
  PenLine,
  RefreshCcw,
  Settings,
  Share2,
  ShieldCheck,
  Handshake,
  Target,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Organic Social Media for Law Firms | YMG Legal",
  description:
    "Organic social media marketing for law firms that builds credibility, trust, visibility, and consistent case acquisition.",
};

const organicBenefits = [
  {
    title: "Brand Awareness",
    body: "Increase your firm's visibility through professionally crafted content that keeps your brand consistently in front of your audience.",
    iconBg: "bg-[#dce9ff]",
    iconColor: "text-[#3f587c]",
  },
  {
    title: "Build Trust",
    body: "Educate potential clients with valuable content that positions your firm as a trusted authority in your practice areas.",
    iconBg: "bg-[#d6f8ea]",
    iconColor: "text-[#315d4d]",
  },
  {
    title: "Audience Engagement",
    body: "Encourage conversations, answer questions, and build lasting relationships through meaningful social interactions.",
    iconBg: "bg-[#f2ddff]",
    iconColor: "text-[#5d4772]",
  },
  {
    title: "Long-Term Growth",
    body: "Develop a recognizable brand that supports sustainable client acquisition and long-term business growth.",
    iconBg: "bg-[#fff1d8]",
    iconColor: "text-[#73572d]",
  },
];

const strategySteps = [
  "Brand Discovery",
  "Content Planning",
  "Creative Design",
  "Content Writing",
  "Review & Approval",
  "Publishing & Scheduling",
  "Performance Monitoring",
  "Continuous Optimization",
];

const includedServices = [
  {
    title: "Social Media Strategy",
    body: "A customized content strategy tailored to your firm's goals, audience, and practice areas.",
    Icon: Target,
    iconName: "target",
    iconBg: "bg-[#dce9ff]",
    iconColor: "text-[#3f587c]",
  },
  {
    title: "Content Calendar",
    body: "Target high-converting legal search terms with comprehensive keyword research.",
    Icon: CalendarDays,
    iconName: "calendar",
    iconBg: "bg-[#f2ddff]",
    iconColor: "text-[#5d4772]",
  },
  {
    title: "Graphic Design",
    body: "Premium branded graphics designed to capture attention and reinforce your firm's professional image.",
    Icon: Palette,
    iconName: "palette",
    iconBg: "bg-[#d6f8ea]",
    iconColor: "text-[#315d4d]",
  },
  {
    title: "Caption Writing",
    body: "Compelling, audience-focused copy that informs, engages, and builds trust.",
    Icon: PenLine,
    iconName: "pen",
    iconBg: "bg-[#fff1d8]",
    iconColor: "text-[#73572d]",
  },
  {
    title: "Multi-Platform Publishing",
    body: "Manage and publish content across Facebook, Instagram, LinkedIn, X, and other relevant platforms.",
    Icon: Share2,
    iconName: "share",
    iconBg: "bg-[#e8f3d8]",
    iconColor: "text-[#4e6534]",
  },
  {
    title: "Community Engagement",
    body: "Monitor comments, encourage conversations, and strengthen relationships with your audience.",
    Icon: MessagesSquare,
    iconName: "messages",
    iconBg: "bg-[#f5dfdf]",
    iconColor: "text-[#7a4b4b]",
  },
  {
    title: "Performance Reporting",
    body: "Monthly reports highlighting growth, engagement, audience insights, and content performance.",
    Icon: BarChart3,
    iconName: "chart",
    iconBg: "bg-[#e8e4fb]",
    iconColor: "text-[#514a78]",
  },
  {
    title: "Brand Consistency",
    body: "Maintain a unified visual identity and messaging across every social media channel.",
    Icon: ShieldCheck,
    iconName: "shield",
    iconBg: "bg-[#e2f0f3]",
    iconColor: "text-[#3d6269]",
  },
];

const includedServiceSlides = includedServices.map(
  ({ title, body, iconName, iconBg, iconColor }) => ({
    title,
    body,
    iconName,
    iconBg,
    iconColor,
  })
);

const performanceReasons = [
  {
    title: "Strategic Content Planning",
    body: "Every post is created with a clear objective that supports your firm's marketing goals.",
    Icon: BrainCircuit,
  },
  {
    title: "Professional Creative Design",
    body: "Visually compelling content that reflects the quality and professionalism of our firm.",
    Icon: Palette,
  },
  {
    title: "Consistent Publishing",
    body: "Maintain an active online presence with a reliable and optimized posting schedule.",
    Icon: RefreshCcw,
  },
  {
    title: "Audience-Focused Messaging",
    body: "Create content that educates, informs, and encourages engagement from potential clients.",
    Icon: Megaphone,
  },
  {
    title: "Platform Optimization",
    body: "Tailor every post to match the best practices and audience behavior of each social platform.",
    Icon: Settings,
  },
  {
    title: "Transparent Reporting",
    body: "Receive detailed monthly performance reports with actionable insights and recommendations.",
    Icon: BarChart3,
  },
];

const brandPresenceStats = [
  {
    title: "Increased Brand Awareness",
    body: "Keep your firm visible with consistent content that reinforces your expertise.",
    Icon: Megaphone,
  },
  {
    title: "Higher Engagement",
    body: "Create meaningful interactions that strengthen audience relationships and trust.",
    Icon: MessagesSquare,
  },
  {
    title: "Greater Credibility",
    body: "Position your firm as a knowledgeable and reliable legal resource through educational content.",
    Icon: ShieldCheck,
  },
  {
    title: "Stronger Referral Relationships",
    body: "Stay top-of-mind with referral partners, local businesses, and professional networks.",
    Icon: Handshake,
  },
];

export default function OrganicSocialMediaPage() {
  return (
    <div className="min-h-screen bg-[#FFF5E0] text-[#424242]">
      <section className="relative isolate overflow-hidden px-5 pb-7 pt-[126px] sm:px-10 sm:pt-[136px] lg:min-h-[604px] lg:px-16 lg:pt-[139px]">
        <Image
          src="/flowers/half-circleBG.svg"
          alt=""
          width={1180}
          height={848}
          priority
          className="pointer-events-none absolute bottom-[132px] left-[9%] z-0 w-[148px] opacity-[0.22] mix-blend-multiply sm:w-[180px] lg:bottom-[136px] lg:left-[14%] lg:w-[188px]"
        />
        <Image
          src="/images/big_flowers.png"
          alt=""
          width={190}
          height={190}
          priority
          className="pointer-events-none absolute right-[7.5%] top-[252px] z-0 w-[88px] opacity-[0.07] sm:w-[104px] lg:right-[8%] lg:top-[254px] lg:w-[96px]"
        />
        <Image
          src="/images/small_flowers.png"
          alt=""
          width={125}
          height={125}
          priority
          className="pointer-events-none absolute right-[3.2%] top-[306px] z-0 w-[34px] opacity-[0.08] lg:right-[2.2%] lg:top-[312px] lg:w-[36px]"
        />
        <Image
          src="/images/small_flowers.png"
          alt=""
          width={125}
          height={125}
          priority
          className="pointer-events-none absolute right-[18.5%] top-[290px] z-0 hidden w-[34px] opacity-[0.065] lg:block"
        />
        <Image
          src="/images/small_flowers.png"
          alt=""
          width={125}
          height={125}
          priority
          className="pointer-events-none absolute left-[27%] top-[310px] z-0 hidden w-[34px] opacity-[0.045] lg:block"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-[1014px] flex-col items-center">
          <div className="mx-auto w-full max-w-[620px] text-center">
            <p className="text-[0.8rem] font-normal uppercase leading-none tracking-[0] text-[#444444] sm:text-[0.98rem]">
              Organic Social Media For Law Firms
            </p>
            <h1 className="mt-[22px] font-heading text-[2rem] font-bold leading-[1.52] tracking-[0] text-[#424242] sm:text-[2.4rem] lg:text-[2.04rem]">
              Build Trust. Stay Visible. Win
              <span className="block">More Qualified Cases.</span>
            </h1>
            <p className="mx-auto mt-[14px] max-w-[520px] text-[0.78rem] leading-[1.24] text-[#4c4c4c] sm:text-[0.9rem] lg:text-[0.85rem]">
              Stay top-of-mind with prospective clients and referral partners through
              strategic organic social media marketing. We create consistent, on-brand
              content that strengthens your firm&apos;s credibility, builds lasting
              relationships, and supports long-term case acquisition.
            </p>

            <div className="mt-[30px] flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-[18px]">
              <Link
                href="/contact"
                className="inline-flex h-[52px] w-full max-w-[260px] items-center justify-center rounded-[4px] bg-[#d9ae5d] px-8 text-center text-sm font-bold leading-tight text-[#2e3032] shadow-[0_12px_28px_rgba(168,129,62,0.22)] transition-colors hover:bg-[#c89f4e] sm:w-[189px]"
              >
                Book a Strategy Call
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-[52px] w-full max-w-[260px] items-center justify-center rounded-[4px] border border-[#dfbd78] bg-[#fff6e5]/40 px-8 text-center text-sm font-semibold leading-tight text-[#d3a65a] transition-colors hover:bg-[#fff6e5]/70 sm:w-[245px]"
              >
                Get a Free Social Media Audit
              </Link>
            </div>
          </div>

          <div className="w-full pt-[40px] lg:pt-[82px]">
            <div className="mx-auto w-full max-w-[900px] lg:hidden">
              <MobileProofScroller />
            </div>
            <div className="mx-auto hidden w-full max-w-[900px] lg:block">
              <ProofBar className="ymg-proof-bar" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-visible bg-[#404040] px-5 py-[62px] text-[#d9ae5d] sm:px-10 sm:py-[78px] lg:overflow-hidden lg:px-16 lg:py-[88px]">
        <Image
          src="/images/big_flowers.png"
          alt=""
          width={190}
          height={190}
          className="pointer-events-none absolute right-[3%] top-[8px] z-0 hidden w-[96px] opacity-[0.05] lg:block"
        />
        <Image
          src="/images/small_flowers.png"
          alt=""
          width={125}
          height={125}
          className="pointer-events-none absolute right-[8%] top-[110px] z-0 hidden w-[42px] opacity-[0.05] lg:block"
        />
        <Image
          src="/images/small_flowers.png"
          alt=""
          width={125}
          height={125}
          className="pointer-events-none absolute right-[14%] top-[32px] z-0 hidden w-[30px] opacity-[0.04] lg:block"
        />

        <div className="relative z-10 mx-auto max-w-[1040px]">
          <div className="mx-auto max-w-[570px] text-center">
            <p className="text-[0.88rem] font-normal uppercase leading-none text-[#d9ae5d] sm:text-[1rem]">
              Why Organic Social Media?
            </p>
            <h2 className="mt-6 font-heading text-[2rem] font-bold leading-[1.5] tracking-[0] text-[#d9ae5d] sm:text-[2.35rem] lg:text-[2.05rem]">
              Build a Stronger Brand That
              <span className="block">Clients Remember</span>
            </h2>
            <p className="mx-auto mt-[17px] max-w-[520px] text-[0.8rem] leading-[1.36] text-[#d9ae5d] sm:text-[0.9rem] lg:text-[0.85rem]">
              Today&apos;s legal clients do more than search Google-they explore your
              firm&apos;s online presence before reaching out. A consistent, professional
              social media strategy builds trust, reinforces credibility, and keeps your
              firm top-of-mind. By sharing valuable content regularly, you create
              meaningful connections with potential clients while strengthening
              relationships with referral partners and your local community.
            </p>
          </div>

          <OrganicBenefitStack benefits={organicBenefits} />

          <div className="mx-auto mt-[52px] hidden max-w-[710px] grid-cols-4 gap-[24px] lg:grid">
            {organicBenefits.map(({ title, body, iconBg, iconColor }) => (
              <article
                key={title}
                className="min-h-[190px] rounded-[5px] border border-[#e2b75f] bg-white px-[10px] py-[13px] text-[#4a4a4a] shadow-[7px_8px_9px_rgba(17,17,17,0.22)]"
              >
                <div className={`mb-[22px] flex h-[34px] w-[34px] items-center justify-center rounded-[4px] border border-[#e2b75f] shadow-[0_4px_7px_rgba(91,69,34,0.16)] ${iconBg}`}>
                  <TrendingUp className={`h-[19px] w-[19px] ${iconColor}`} strokeWidth={1.65} />
                </div>
                <h3 className="text-[0.75rem] font-semibold leading-tight text-[#3d3d3d]">
                  {title}
                </h3>
                <p className="mt-[16px] text-[0.68rem] leading-[1.28] text-[#969696]">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="included-services" className="bg-[#FFF5E0] px-5 py-[58px] text-[#3d4145] sm:px-10 sm:py-[72px] lg:px-16 lg:py-[74px]">
        <div className="mx-auto grid w-full min-w-0 max-w-[866px] gap-6 lg:grid-cols-[199px_minmax(0,1fr)] lg:items-start lg:gap-[22px]">
          <div className="lg:pt-0">
            <h2 className="h-[40px] font-heading text-[1.22rem] font-normal leading-[1.18] text-[#3d4145] lg:text-[1.02rem]">
              Our Organic Social
              <span className="block">Media Strategy</span>
            </h2>
            <div className="mt-[24px] rounded-[6px] border border-[#dfbd78] bg-white px-[18px] py-[16px] shadow-[5px_7px_9px_rgba(91,69,34,0.18)] lg:h-[408px]">
              <div className="grid h-full content-between">
                {strategySteps.map((step, index) => (
                  <div key={step} className="flex items-center gap-[10px]">
                    <span className="flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-[4px] border border-[#dfbd78] bg-white text-[0.52rem] font-medium leading-none text-[#d9ae5d] shadow-[0_4px_7px_rgba(91,69,34,0.16)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[0.72rem] font-medium leading-tight text-[#3d4145]">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <h2 className="h-[40px] font-heading text-[1.22rem] font-normal leading-[1.18] text-[#3d4145] lg:text-[1.02rem]">
              What&apos;s Included
            </h2>
            <div className="mt-[24px]">
              <IncludedServicesCarousel services={includedServiceSlides} />
            </div>
            <div className="mt-[24px] hidden grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid lg:grid-cols-4 lg:gap-x-[31px] lg:gap-y-[18px]">
              {includedServices.map(({ title, body, Icon, iconBg, iconColor }) => (
                <article
                  key={title}
                  className="flex min-h-[195px] flex-col items-center rounded-[6px] border border-[#dfbd78] bg-white px-[14px] pb-[15px] pt-[12px] text-center shadow-[5px_7px_9px_rgba(91,69,34,0.18)] lg:h-[195px]"
                >
                  <span className={`mb-[14px] flex h-[34px] w-[34px] items-center justify-center rounded-[5px] border border-[#dfbd78] shadow-[0_5px_8px_rgba(91,69,34,0.18)] ${iconBg}`}>
                    <Icon className={`h-[19px] w-[19px] ${iconColor}`} strokeWidth={1.75} />
                  </span>
                  <h3 className="text-[0.74rem] font-semibold leading-tight text-[#333]">
                    {title}
                  </h3>
                  <p className="mt-[16px] text-[0.68rem] leading-[1.22] text-[#9b9b9b]">
                    {body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF5E0] px-5 pb-[74px] pt-[30px] text-[#3d4145] sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[870px] items-center gap-[38px] lg:grid-cols-[370px_minmax(0,1fr)] lg:gap-[38px]">
          <div>
            <h2 className="font-heading text-[1rem] font-normal uppercase leading-none text-[#3d4145]">
              Why Our Social Media Performs Better
            </h2>
            <div className="mt-[26px] grid gap-x-[22px] gap-y-[33px] rounded-[6px] border border-[#dfbd78] bg-white px-[15px] py-[15px] shadow-[5px_7px_9px_rgba(91,69,34,0.18)] sm:grid-cols-2 lg:min-h-[364px]">
              {performanceReasons.map(({ title, body, Icon }) => (
                <article key={title} className="grid grid-cols-[34px_minmax(0,1fr)] gap-[8px]">
                  <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[5px] border border-[#dfbd78] bg-white shadow-[0_5px_8px_rgba(91,69,34,0.18)]">
                    <Icon className="h-[18px] w-[18px] text-[#444]" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-[0.72rem] font-semibold leading-[1.18] text-[#333]">
                      {title}
                    </h3>
                    <p className="mt-[7px] text-[0.67rem] leading-[1.28] text-[#999]">
                      {body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="pt-[16px]">
            <h2 className="text-center font-heading text-[1rem] font-normal leading-none text-[#3d4145]">
              Designed to Strengthen Your Brand Presence
            </h2>
            <div className="mt-[50px] grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
              {brandPresenceStats.map(({ title, body, Icon }, index) => (
                <article
                  key={title}
                  className="relative px-4 text-center lg:px-[13px]"
                >
                  <span className="mx-auto flex h-[34px] w-[34px] items-center justify-center rounded-[5px] border border-[#dfbd78] bg-white shadow-[0_5px_8px_rgba(91,69,34,0.18)]">
                    <Icon className="h-[18px] w-[18px] text-[#444]" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-[15px] text-[0.72rem] font-bold leading-[1.18] text-[#333]">
                    {title}
                  </h3>
                  <p className="mt-[13px] text-[0.52rem] leading-[1.28] text-[#999]">
                    {body}
                  </p>
                  {index < brandPresenceStats.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute right-0 top-[14px] hidden h-[76px] w-px bg-[#d8cbb2] lg:block"
                    />
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceFaqSection />
    </div>
  );
}
