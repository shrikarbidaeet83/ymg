import Image from "next/image";
import Link from "next/link";
import TestimonialContactSection from "@/components/sections/TestimonialContactSection";
import MotionReveal from "@/components/ui/MotionReveal";
import {
  ChartNoAxesCombined,
  Eye,
  FileText,
  Gauge,
  Handshake,
  Infinity,
  LayoutTemplate,
  Mail,
  MousePointerClick,
  PanelsTopLeft,
  Phone,
  Search,
  SearchCheck,
  UserRoundCheck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

type MarketingService = {
  title: string;
  Icon: LucideIcon;
  className: string;
  iconClassName: string;
};

const marketingServices: MarketingService[] = [
  {
    title: "Search Engine\nOptimization",
    Icon: SearchCheck,
    className: "left-1/2 top-0 -translate-x-1/2",
    iconClassName: "text-[#488b72]",
  },
  {
    title: "Pay Per Click\nAdvertising",
    Icon: MousePointerClick,
    className: "left-0 top-[100px]",
    iconClassName: "text-[#b98b2d]",
  },
  {
    title: "Social Media\nAdvertising",
    Icon: PanelsTopLeft,
    className: "right-0 top-[100px]",
    iconClassName: "text-[#8d6e70]",
  },
  {
    title: "Content\nMarketing",
    Icon: FileText,
    className: "left-0 top-[236px]",
    iconClassName: "text-[#708981]",
  },
  {
    title: "Conversion Rate\nOptimization",
    Icon: Gauge,
    className: "right-0 top-[236px]",
    iconClassName: "text-[#b65c4f]",
  },
  {
    title: "Analytics &\nReporting",
    Icon: ChartNoAxesCombined,
    className: "bottom-0 left-1/2 -translate-x-1/2",
    iconClassName: "text-[#846685]",
  },
];

const impactCards = [
  {
    title: "More Visibility",
    body: "Rank higher and get discovered by the right legal audience.",
    Icon: Eye,
    iconBackground: "bg-[#dbe9ff]",
  },
  {
    title: "Qualified Leads",
    body: "Generate inquiries from prospects actively seeking legal help.",
    Icon: UserRoundCheck,
    iconBackground: "bg-[#f0dbff]",
  },
  {
    title: "Lower Cost Per Lead",
    body: "Improve efficiency and maximize marketing performance.",
    Icon: Gauge,
    iconBackground: "bg-[#d7f8ef]",
  },
  {
    title: "Higher Conversions",
    body: "Turn website traffic into consultations and retained cases.",
    Icon: Handshake,
    iconBackground: "bg-[#fff1d8]",
  },
];

const acquisitionInputs = [
  { title: "Google Ads", Icon: Search, iconClassName: "text-[#4285f4]" },
  { title: "Meta Ads", Icon: Infinity, iconClassName: "text-[#1677f2]" },
  { title: "SEO", Icon: SearchCheck, iconClassName: "text-[#3f8c85]" },
  { title: "Landing Pages", Icon: LayoutTemplate, iconClassName: "text-[#5e9c88]" },
];

const acquisitionOutputs = [
  { title: "Call Tracking", Icon: Phone, iconClassName: "text-[#65a2e8]" },
  { title: "CRM Integration", Icon: UsersRound, iconClassName: "text-[#a06ad4]" },
  { title: "Lead Nurturing", Icon: Mail, iconClassName: "text-[#46b06a]" },
  { title: "Performance Reporting", Icon: ChartNoAxesCombined, iconClassName: "text-[#d8ae63]" },
];

function AcquisitionCard({
  title,
  Icon,
  iconClassName = "text-[#111]",
}: {
  title: string;
  Icon: LucideIcon;
  iconClassName?: string;
}) {
  return (
    <div className="flex h-[46px] w-full items-center gap-4 rounded-[8px] border border-[#e2b75f] bg-white px-4 shadow-[0_5px_9px_rgba(91,69,34,0.17)]">
      <Icon className={`h-5 w-5 shrink-0 ${iconClassName}`} strokeWidth={2.2} />
      <span className="text-[20px] font-medium leading-none text-[#444] dark:text-[#D8B26B]">{title}</span>
    </div>
  );
}

function AcquisitionEngine() {
  return (
    <div className="relative mx-auto mt-[76px] grid w-full max-w-[1115px] gap-0 min-[1100px]:h-[240px] min-[1100px]:grid-cols-none min-[1100px]:gap-8">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden h-[240px] w-full min-[1100px]:block"
        viewBox="0 0 1115 240"
        fill="none"
      >
        <g stroke="#dfa94e" strokeWidth="1">
          <path d="M304 23L464 80" />
          <path d="M304 88L464 106" />
          <path d="M304 153L464 135" />
          <path d="M304 218L464 160" />
        </g>
        <g stroke="#dfa94e" strokeDasharray="11 11" strokeWidth="1">
          <path d="M651 80L811 23" />
          <path d="M651 106L811 88" />
          <path d="M651 135L811 153" />
          <path d="M651 160L811 218" />
        </g>
        <g fill="#dfb15d">
          <circle cx="304" cy="23" r="5" />
          <circle cx="304" cy="88" r="5" />
          <circle cx="304" cy="153" r="5" />
          <circle cx="304" cy="218" r="5" />
          <circle cx="811" cy="23" r="5" />
          <circle cx="811" cy="88" r="5" />
          <circle cx="811" cy="153" r="5" />
          <circle cx="811" cy="218" r="5" />
        </g>
      </svg>

      <div className="relative mx-auto grid w-full max-w-[304px] gap-5 pb-8 pr-6 min-[1100px]:absolute min-[1100px]:left-0 min-[1100px]:top-0 min-[1100px]:w-[304px] min-[1100px]:pb-0 min-[1100px]:pr-0">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible min-[1100px]:hidden"
          viewBox="0 0 304 276"
          preserveAspectRatio="none"
          fill="none"
        >
          <g stroke="#D8B26B" strokeWidth="1.2">
            <path d="M280 23H300" />
            <path d="M280 89H300" />
            <path d="M280 155H300" />
            <path d="M280 221H300" />
            <path d="M300 23V244L152 276" />
          </g>
        </svg>
        {acquisitionInputs.map((item, index) => (
          <MotionReveal key={item.title} direction="left" delay={index * 0.08} duration={0.68}>
            <AcquisitionCard {...item} />
          </MotionReveal>
        ))}
      </div>

      <div className="relative z-10 mx-auto h-[194px] w-[194px] min-[1100px]:absolute min-[1100px]:left-1/2 min-[1100px]:top-[22px] min-[1100px]:-translate-x-1/2">
        <MotionReveal direction="zoom" delay={0.16} className="h-full w-full">
          <div className="flex h-full w-full items-center justify-center rounded-full border border-[#dba849] bg-white shadow-[0_5px_8px_rgba(83,62,27,0.22)]">
            <div className="flex h-[156px] w-[156px] items-center justify-center rounded-full border border-[#c9c9c9] bg-[linear-gradient(145deg,#fafafa,#dedede)] text-center shadow-[inset_0_-8px_14px_rgba(80,80,80,0.08),0_2px_3px_rgba(0,0,0,0.15)]">
              <p className="text-[14px] font-semibold leading-[1.35] text-[#444] dark:text-[#D8B26B]">
                <span className="text-[#dfb15d]">Lead</span>
                <br />
                Generation
              </p>
            </div>
          </div>
        </MotionReveal>
      </div>

      <div className="relative mx-auto grid w-full max-w-[304px] gap-5 pl-6 pt-8 min-[1100px]:absolute min-[1100px]:right-0 min-[1100px]:top-0 min-[1100px]:w-[304px] min-[1100px]:pl-0 min-[1100px]:pt-0">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible min-[1100px]:hidden"
          viewBox="0 0 304 276"
          preserveAspectRatio="none"
          fill="none"
        >
          <g stroke="#D8B26B" strokeWidth="1.2">
            <path d="M152 0L4 32V253" />
            <path d="M4 55H24" />
            <path d="M4 121H24" />
            <path d="M4 187H24" />
            <path d="M4 253H24" />
          </g>
        </svg>
        {acquisitionOutputs.map((item, index) => (
          <MotionReveal key={item.title} direction="right" delay={index * 0.08} duration={0.68}>
            <AcquisitionCard {...item} />
          </MotionReveal>
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ service, index }: { service: MarketingService; index: number }) {
  const { title, Icon, className, iconClassName } = service;

  return (
    <div className={`absolute z-10 ${className}`}>
      <MotionReveal direction="zoom" delay={0.18 + index * 0.1} duration={0.7}>
        <article className="flex h-[90px] w-[90px] flex-col items-center justify-center rounded-[13px] border border-[#e8d2aa] bg-white px-2 text-center shadow-[0_4px_6px_rgba(86,68,38,0.16)] transition-transform duration-500 ease-out hover:-translate-y-1.5 hover:scale-[1.03]">
          <div className="relative mb-2 flex h-8 w-8 items-center justify-center">
            <span className="absolute h-5 w-5 rounded-[5px] bg-[#f7dfac]" />
            <Icon
              aria-hidden="true"
              className={`relative h-7 w-7 ${iconClassName}`}
              strokeWidth={1.35}
            />
          </div>
          <p className="whitespace-pre-line text-[8px] font-medium leading-[1.35] text-[#4d4c49]">
            {title}
          </p>
        </article>
      </MotionReveal>
    </div>
  );
}

function MarketingMap() {
  return (
    <div
      className="relative mx-auto h-[426px] w-[406px] max-w-full"
      aria-label="Digital marketing services diagram"
    >
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 406 426"
        fill="none"
      >
        <g stroke="#dfb15d" strokeWidth="1">
          <path d="M203 90V145" />
          <path d="M90 145L155 180" />
          <path d="M316 145L251 180" />
          <path d="M90 281L159 242" />
          <path d="M316 281L247 242" />
          <path d="M203 336V270" />
        </g>
        <g fill="#dfb15d">
          <circle cx="203" cy="90" r="4.5" />
          <circle cx="203" cy="145" r="2.5" />
          <circle cx="90" cy="145" r="4.5" />
          <circle cx="155" cy="180" r="2.5" />
          <circle cx="316" cy="145" r="4.5" />
          <circle cx="251" cy="180" r="2.5" />
          <circle cx="90" cy="281" r="4.5" />
          <circle cx="159" cy="242" r="2.5" />
          <circle cx="316" cy="281" r="4.5" />
          <circle cx="247" cy="242" r="2.5" />
          <circle cx="203" cy="336" r="4.5" />
          <circle cx="203" cy="270" r="2.5" />
        </g>
      </svg>

      <div className="absolute left-1/2 top-[183px] z-10 -translate-x-1/2">
        <MotionReveal direction="zoom" delay={0.08} duration={0.72}>
          <div className="text-center font-heading text-[18px] leading-[1.28] text-[#4b4641]">
            Digital
            <br />
            Marketing
          </div>
        </MotionReveal>
      </div>

      {marketingServices.map((service, index) => (
        <ServiceCard key={service.title} service={service} index={index} />
      ))}
    </div>
  );
}

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-[#FFF5E0] text-[#44413e]">
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden px-5 pb-[60px] pt-[110px] sm:px-10 lg:px-16">
        <Image
          src="/images/big_flowers.webp"
          alt=""
          width={190}
          height={190}
          priority
          className="pointer-events-none absolute bottom-[-16px] left-[9%] z-0 h-auto w-[175px] opacity-[0.045]"
        />
        <Image
          src="/images/small_flowers.webp"
          alt=""
          width={125}
          height={125}
          priority
          className="pointer-events-none absolute left-[42%] top-[48%] z-0 h-auto w-[118px] opacity-[0.055]"
        />

        <div className="relative z-10 mx-auto grid w-full min-w-0 max-w-[1220px] grid-cols-[minmax(0,1fr)] items-center gap-16 lg:grid-cols-[minmax(0,470px)_minmax(480px,1fr)] lg:gap-[70px]">
          <MotionReveal direction="left" duration={0.92} className="min-w-0 max-w-[470px] lg:-translate-y-3">
            <p className="mb-5 text-[17px] font-normal text-[#4a4947]">
              Core Services
            </p>
            <h1 className="font-heading text-[1.125rem] font-normal leading-[1.25] tracking-[-0.04em] text-[#403f3e] sm:hidden">
              <span className="block whitespace-nowrap text-[#ddb66c]">Digital Marketing That</span>
              <span className="block whitespace-nowrap">Drives Qualified Leads &amp; Real Cases.</span>
            </h1>
            <h1 className="hidden font-heading text-[38px] font-normal leading-[1.3] tracking-[-0.01em] text-[#403f3e] sm:block sm:text-[42px] lg:text-[40px]">
              <span className="text-[#ddb66c]">Digital Marketing</span> That
              <br />
              Drives Qualified Leads
              <br />
              &amp; Real Cases.
            </h1>
            <p className="mt-4 max-w-[450px] text-[16px] leading-[1.34] text-[#55514e]">
              Data-driven digital marketing strategies built exclusively
              <br className="hidden sm:block" /> for law firms to attract high-intent prospects, increase
              <br className="hidden sm:block" /> visibility, and generate predictable case growth.
            </p>

            <div className="mt-11 flex flex-col gap-5 sm:flex-row">
              <Link
                href="/contact#booking"
                className="inline-flex h-[52px] min-w-[221px] items-center justify-center rounded-[4px] bg-[#d9ae5d] px-8 text-sm font-bold text-[#2e3032] shadow-[0_12px_28px_rgba(168,129,62,0.22)] transition-colors hover:bg-[#c89f4e]"
              >
                Book Strategy Call
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex h-[52px] min-w-[210px] items-center justify-center rounded-[4px] border border-[#dfbd78] bg-[#fff6e5]/40 px-8 text-sm font-semibold text-[#d3a65a] transition-colors hover:bg-[#fff6e5]/70 dark:!bg-transparent dark:!text-[#D8B26B] dark:hover:!bg-[#D8B26B]/10"
              >
                View Our Process
              </Link>
            </div>
          </MotionReveal>

          <MotionReveal direction="right" delay={0.12} duration={0.95} className="flex min-w-0 justify-center lg:justify-end">
            <MarketingMap />
          </MotionReveal>
        </div>
      </section>

      <section className="ymg-section-padding relative isolate overflow-hidden bg-[#393a39]">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_36%,rgba(37,27,12,0.92)_0%,rgba(37,27,12,0.54)_25%,rgba(57,58,57,0)_58%)]" />
        <Image
          src="/images/big_flowers.webp"
          alt=""
          width={160}
          height={160}
          className="pointer-events-none absolute right-[5%] top-[28px] -z-0 h-auto w-[128px] opacity-[0.055]"
        />
        <Image
          src="/images/small_flowers.webp"
          alt=""
          width={80}
          height={80}
          className="pointer-events-none absolute right-[15%] top-[66px] -z-0 h-auto w-[42px] opacity-[0.05]"
        />
        <Image
          src="/images/small_flowers.webp"
          alt=""
          width={80}
          height={80}
          className="pointer-events-none absolute right-[11%] top-[160px] -z-0 h-auto w-[50px] opacity-[0.05]"
        />

        <div className="relative z-10 mx-auto max-w-[1084px]">
          <MotionReveal direction="down" className="text-center">
            <p className="text-[18px] font-normal text-[#edc269]">Real Impact</p>
            <h2 className="mx-auto mt-5 max-w-[630px] font-heading text-[38px] font-normal leading-[1.32] text-[#EBC982] sm:text-[46px] lg:text-[48px]">
              Digital Marketing That
              <br />
              Delivers What Matters
            </h2>
          </MotionReveal>

          <div className="mt-[78px] grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impactCards.map(({ title, body, Icon, iconBackground }, index) => (
              <MotionReveal
                key={title}
                direction={index === 0 ? "left" : index === impactCards.length - 1 ? "right" : "up"}
                delay={index * 0.09}
                className="h-full"
              >
                <article className="h-full min-h-[258px] rounded-[19px] border border-[#e8c77f] bg-[#fffefd] px-[26px] py-[19px] shadow-[0_6px_12px_rgba(20,17,12,0.14)] transition-transform duration-500 ease-out hover:-translate-y-2">
                  <div className={`flex h-[68px] w-[68px] items-center justify-center rounded-[7px] ${iconBackground}`}>
                    <Icon className="h-[37px] w-[37px] text-[#46494b]" strokeWidth={1.7} />
                  </div>
                  <h3 className="mt-[14px] font-sans text-[20px] font-normal leading-tight text-[#464646]">
                    {title}
                  </h3>
                  <p className="mt-[15px] max-w-[205px] text-[14px] leading-[1.4] text-[#989898]">
                    {body}
                  </p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="ymg-section-padding bg-[#FFF5E0]">
        <div className="mx-auto max-w-[1180px]">
          <MotionReveal direction="soft" className="text-center">
            <p className="text-[21px] font-normal text-[#474747]">Our Acquisition Engine</p>
            <h2 className="mt-6 font-heading text-[38px] font-normal leading-[1.28] text-[#444] sm:text-[48px] lg:text-[50px]">
              A Complete System Built
              <br />
              For Case Growth
            </h2>
          </MotionReveal>

          <MotionReveal direction="up" delay={0.12} duration={0.9}>
            <AcquisitionEngine />
          </MotionReveal>
        </div>
      </section>

      <TestimonialContactSection showTestimonials={false} contactVariant="home" />
    </div>
  );
}
