import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  DollarSign,
  Eye,
  FileText,
  KeyRound,
  MousePointerClick,
  PanelsTopLeft,
  Phone,
  Rocket,
  Search,
  Send,
  SquarePen,
  TrendingUp,
} from "lucide-react";
import IncludedServicesCarousel from "@/components/sections/IncludedServicesCarousel";
import OrganicBenefitStack from "@/components/sections/OrganicBenefitStack";
import { MobileProofScroller, ProofBar } from "@/components/sections/ProofHighlights";
import SearchAdsPerformanceReveal from "@/components/sections/SearchAdsPerformanceReveal";
import ServiceFaqSection from "@/components/sections/ServiceFaqSection";

export const metadata: Metadata = {
  title: "Google Search Ads for Law Firms | YMG Legal",
  description:
    "Strategic Google Search Ads for law firms that generate qualified phone calls, form submissions, and high-intent legal cases.",
};

const searchAdsBenefits = [
  {
    title: "Immediate Visibility",
    body: "Appear at the top of Google search results and reach potential clients the moment they're searching for legal representation.",
    Icon: Eye,
    iconName: "eye" as const,
    iconBg: "bg-[#dce9ff]",
    iconColor: "text-[#3f587c]",
  },
  {
    title: "High-Intent Traffic",
    body: "Target people actively searching for legal services, resulting in higher-quality leads and better conversion rates.",
    Icon: MousePointerClick,
    iconName: "click" as const,
    iconBg: "bg-[#f2ddff]",
    iconColor: "text-[#5d4772]",
  },
  {
    title: "More Qualified Calls",
    body: "Generate phone calls and consultation requests from prospects ready to take action.",
    Icon: Phone,
    iconName: "phone" as const,
    iconBg: "bg-[#d6f8ea]",
    iconColor: "text-[#315d4d]",
  },
  {
    title: "Scalable Growth",
    body: "Increase qualified case volume with campaigns optimized for long-term, sustainable growth.",
    Icon: Rocket,
    iconName: "rocket" as const,
    iconBg: "bg-[#fff1d8]",
    iconColor: "text-[#73572d]",
  },
];

const searchAdsSteps = [
  "Campaign Research",
  "Keyword Selection",
  "Ad Creation",
  "Landing Page Optimization",
  "Campaign Launch",
  "Conversion Tracking",
  "Continuous Optimization",
  "Scale Winning Campaigns",
];

const searchAdsBenefitSlides = searchAdsBenefits.map(
  ({ title, body, iconName, iconBg, iconColor }) => ({
    title,
    body,
    iconName,
    iconBg,
    iconColor,
  })
);

const searchAdsServices = [
  {
    title: "Campaign Included",
    body: "Custom Google Ads strategies aligned with your firm's goals and practice areas.",
    Icon: Search,
    iconName: "search",
    iconBg: "bg-[#dce9ff]",
    iconColor: "text-[#3f587c]",
  },
  {
    title: "Keyword Research",
    body: "Target high-converting legal search terms with comprehensive keyword research.",
    Icon: KeyRound,
    iconName: "key",
    iconBg: "bg-[#f2ddff]",
    iconColor: "text-[#5d4772]",
  },
  {
    title: "Ad Copywriting",
    body: "Write persuasive ad copy that improves click-through rates and generates qualified leads.",
    Icon: SquarePen,
    iconName: "edit",
    iconBg: "bg-[#d6f8ea]",
    iconColor: "text-[#315d4d]",
  },
  {
    title: "Landing Page Optimization",
    body: "Design landing pages focused on converting visitors into consultations.",
    Icon: PanelsTopLeft,
    iconName: "landing",
    iconBg: "bg-[#fff1d8]",
    iconColor: "text-[#73572d]",
  },
  {
    title: "Conversion Tracking",
    body: "Track every phone call and form submission with advanced analytics.",
    Icon: TrendingUp,
    iconName: "tracking",
    iconBg: "bg-[#e8f3d8]",
    iconColor: "text-[#4e6534]",
  },
  {
    title: "Bid Management",
    body: "Optimize bids to maximize return on investment and campaign efficiency.",
    Icon: DollarSign,
    iconName: "dollar",
    iconBg: "bg-[#f5dfdf]",
    iconColor: "text-[#7a4b4b]",
  },
  {
    title: "Negative Keywords",
    body: "Reduce wasted ad spend by filtering out irrelevant searches.",
    Icon: Send,
    iconName: "send",
    iconBg: "bg-[#e8e4fb]",
    iconColor: "text-[#514a78]",
  },
  {
    title: "Monthly Reporting",
    body: "Receive transparent monthly reports with campaign insights and recommendations.",
    Icon: FileText,
    iconName: "file",
    iconBg: "bg-[#e2f0f3]",
    iconColor: "text-[#3d6269]",
  },
];

const searchAdsServiceSlides = searchAdsServices.map(
  ({ title, body, iconName, iconBg, iconColor }) => ({
    title,
    body,
    iconName,
    iconBg,
    iconColor,
  })
);

export default function GoogleSearchAdsPage() {
  return (
    <main className="min-h-screen bg-[#FFF5E0] text-[#424242]">
      <section className="relative isolate min-h-screen overflow-hidden px-5 pb-7 pt-[126px] sm:px-10 sm:pt-[136px] lg:min-h-[604px] lg:px-16 lg:pt-[139px]">
        <Image
          src="/flowers/half-circleBG.svg"
          alt=""
          width={1180}
          height={848}
          priority
          className="pointer-events-none absolute bottom-[106px] left-[7%] z-0 w-[150px] opacity-[0.22] mix-blend-multiply sm:w-[180px] lg:bottom-[108px] lg:left-[14%] lg:w-[188px]"
        />
        <Image
          src="/images/big_flowers.png"
          alt=""
          width={190}
          height={190}
          priority
          className="pointer-events-none absolute right-[7.5%] top-[242px] z-0 w-[88px] opacity-[0.07] sm:w-[104px] lg:right-[8%] lg:top-[244px] lg:w-[96px]"
        />
        <Image
          src="/images/small_flowers.png"
          alt=""
          width={125}
          height={125}
          priority
          className="pointer-events-none absolute right-[3.2%] top-[302px] z-0 w-[34px] opacity-[0.08] lg:right-[2.2%] lg:top-[304px] lg:w-[36px]"
        />
        <Image
          src="/images/small_flowers.png"
          alt=""
          width={125}
          height={125}
          priority
          className="pointer-events-none absolute right-[18.5%] top-[284px] z-0 hidden w-[34px] opacity-[0.065] lg:block"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-[1014px] flex-col items-center">
          <div className="mx-auto w-full max-w-[650px] text-center">
            <p className="text-[0.8rem] font-normal uppercase leading-none tracking-[0] text-[#444444] sm:text-[0.98rem]">
              Google Search Ads For Law Firms
            </p>
            <h1 className="mt-[22px] font-heading text-[2rem] font-bold leading-[1.3] tracking-[0] text-[#424242] sm:text-[2.35rem] lg:text-[2.04rem]">
              Capture High-Intent Searches.
              <span className="mt-2 block">Generate Qualified Legal Cases.</span>
            </h1>
            <p className="mx-auto mt-[16px] max-w-[535px] text-[0.78rem] leading-[1.3] text-[#4c4c4c] sm:text-[0.9rem] lg:text-[0.85rem]">
              Connect with people actively searching for legal help through
              strategically managed Google Search Ads. We create, optimize, and scale
              PPC campaigns that generate high-quality phone calls, form submissions,
              and qualified case opportunities for your law firm.
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
                Get a Free Google Ads Audit
              </Link>
            </div>
          </div>

          <div className="w-full pt-[40px] lg:pt-[70px]">
            <div className="mx-auto w-full max-w-[900px] lg:hidden">
              <MobileProofScroller />
            </div>
            <div className="mx-auto hidden w-full max-w-[900px] lg:block">
              <ProofBar className="ymg-proof-bar" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#404040] px-5 py-[62px] text-[#d9ae5d] sm:px-10 sm:py-[78px] lg:px-16 lg:py-[64px]">
        <Image
          src="/images/big_flowers.png"
          alt=""
          width={190}
          height={190}
          className="pointer-events-none absolute right-[7%] top-[18px] z-0 hidden w-[82px] opacity-[0.05] sm:block lg:w-[96px]"
        />
        <Image
          src="/images/small_flowers.png"
          alt=""
          width={125}
          height={125}
          className="pointer-events-none absolute right-[3%] top-[66px] z-0 hidden w-[30px] opacity-[0.05] lg:block"
        />
        <Image
          src="/images/small_flowers.png"
          alt=""
          width={125}
          height={125}
          className="pointer-events-none absolute right-[12%] top-[104px] z-0 hidden w-[36px] opacity-[0.045] lg:block"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1040px]">
          <div className="mx-auto max-w-[610px] text-center">
            <p className="text-[0.88rem] font-normal text-[#d9ae5d] sm:text-[1rem]">
              Why Google Search Ads?
            </p>
            <h2 className="mt-5 font-heading text-[2rem] font-bold leading-[1.35] tracking-[0] text-[#d9ae5d] sm:text-[2.35rem] lg:text-[2.05rem]">
              Reach Potential Clients at the Exact
              <span className="mt-1 block">Moment They Need Legal Help</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[540px] text-[0.8rem] leading-[1.35] text-[#d9ae5d] sm:text-[0.88rem] lg:text-[0.78rem]">
              Connect with people actively searching for legal help through strategically
              managed Google Search Ads. We create, optimize, and scale PPC campaigns
              that generate high-quality phone calls, form submissions, and qualified case
              opportunities for your law firm.
            </p>
          </div>

          <OrganicBenefitStack benefits={searchAdsBenefitSlides} />

          <div className="mx-auto mt-10 hidden w-full max-w-[900px] grid-cols-4 gap-[22px] lg:grid">
            {searchAdsBenefits.map(({ title, body, Icon, iconBg, iconColor }) => (
              <article
                key={title}
                className="grid min-h-[156px] grid-cols-[38px_minmax(0,1fr)] content-start gap-x-3 rounded-[6px] border border-[#dfbd78] bg-[#fffdfa] px-3 py-3 text-left shadow-[5px_7px_10px_rgba(17,17,17,0.22)] lg:min-h-[132px]"
              >
                <span className={`row-span-2 flex h-[38px] w-[38px] items-center justify-center rounded-[6px] border border-[#dfbd78]/70 shadow-[0_4px_8px_rgba(91,69,34,0.14)] ${iconBg}`}>
                  <Icon className={`h-[19px] w-[19px] ${iconColor}`} strokeWidth={1.7} />
                </span>
                <h3 className="pt-0.5 text-[0.72rem] font-semibold leading-tight text-[#3d4145]">
                  {title}
                </h3>
                <p className="mt-3 text-[0.68rem] leading-[1.32] text-[#929292]">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#404040] px-5 pb-[74px] pt-[20px] text-[#d9ae5d] sm:px-10 sm:pb-[86px] lg:px-16 lg:pb-[80px] lg:pt-[26px]">
        <div className="mx-auto grid w-full min-w-0 max-w-[900px] gap-8 lg:grid-cols-[199px_minmax(0,1fr)] lg:items-start lg:gap-[22px]">
          <div className="min-w-0">
            <h2 className="h-[40px] font-heading text-[1.22rem] font-normal leading-[1.18] text-[#d9ae5d] lg:text-[1.02rem]">
              Our Google Ads Strategy
            </h2>
            <div className="mt-[24px] rounded-[6px] border border-[#dfbd78] bg-[#fffdfa] px-[18px] py-[16px] shadow-[5px_7px_10px_rgba(17,17,17,0.22)] lg:h-[408px]">
              <div className="grid h-full content-between gap-5 lg:gap-0">
                {searchAdsSteps.map((step, index) => (
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
            <h2 className="h-[40px] font-heading text-[1.22rem] font-normal leading-[1.18] text-[#d9ae5d] lg:text-[1.02rem]">
              What&apos;s Included
            </h2>
            <div className="mt-[24px]">
              <IncludedServicesCarousel services={searchAdsServiceSlides} theme="dark" />
            </div>
            <div className="mt-[24px] hidden grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid lg:grid-cols-4 lg:gap-x-[31px] lg:gap-y-[18px]">
              {searchAdsServices.map(({ title, body, Icon, iconBg, iconColor }) => (
                <article
                  key={title}
                  className="flex min-h-[195px] flex-col items-center rounded-[6px] border border-[#dfbd78] bg-[#fffdfa] px-[14px] pb-[15px] pt-[12px] text-center shadow-[5px_7px_10px_rgba(17,17,17,0.22)] lg:h-[195px]"
                >
                  <span className={`mb-[14px] flex h-[34px] w-[34px] items-center justify-center rounded-[5px] border border-[#dfbd78] shadow-[0_5px_8px_rgba(91,69,34,0.18)] ${iconBg}`}>
                    <Icon className={`h-[19px] w-[19px] ${iconColor}`} strokeWidth={1.75} />
                  </span>
                  <h3 className="text-[0.74rem] font-semibold leading-tight text-[#333]">
                    {title}
                  </h3>
                  <p className="mt-[16px] text-[0.68rem] leading-[1.22] text-[#8f8f8f]">
                    {body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SearchAdsPerformanceReveal />
      <ServiceFaqSection />
    </main>
  );
}
