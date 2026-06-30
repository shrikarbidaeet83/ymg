import Image from "next/image";
import Link from "next/link";
import {
  ChartNoAxesCombined,
  Eye,
  FileText,
  Gauge,
  Handshake,
  MousePointerClick,
  PanelsTopLeft,
  SearchCheck,
  UserRoundCheck,
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

function ServiceCard({ service }: { service: MarketingService }) {
  const { title, Icon, className, iconClassName } = service;

  return (
    <article
      className={`absolute z-10 flex h-[90px] w-[90px] flex-col items-center justify-center rounded-[13px] border border-[#e8d2aa] bg-white px-2 text-center shadow-[0_4px_6px_rgba(86,68,38,0.16)] transition-transform duration-200 hover:-translate-y-1 ${className}`}
    >
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

      <div className="absolute left-1/2 top-[183px] z-10 -translate-x-1/2 text-center font-heading text-[18px] leading-[1.28] text-[#4b4641]">
        Digital
        <br />
        Marketing
      </div>

      {marketingServices.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </div>
  );
}

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-[#fff4df] text-[#44413e]">
      <section className="relative isolate min-h-[624px] overflow-hidden px-5 pb-12 pt-[150px] sm:px-8 lg:px-14 lg:pb-10 lg:pt-[160px]">
        <Image
          src="/images/Home page Big Flower light mode (1)-Photoroom.png"
          alt=""
          width={190}
          height={190}
          priority
          className="pointer-events-none absolute bottom-[-16px] left-[9%] z-0 h-auto w-[175px] opacity-[0.045]"
        />
        <Image
          src="/images/Home page Small Flower light mode-Photoroom.png"
          alt=""
          width={125}
          height={125}
          priority
          className="pointer-events-none absolute left-[42%] top-[48%] z-0 h-auto w-[118px] opacity-[0.055]"
        />

        <div className="relative z-10 mx-auto grid w-full max-w-[1220px] items-center gap-16 lg:grid-cols-[minmax(0,470px)_minmax(480px,1fr)] lg:gap-[70px]">
          <div className="max-w-[470px] lg:-translate-y-3">
            <p className="mb-5 text-[17px] font-normal text-[#4a4947]">
              Core Services
            </p>
            <h1 className="font-heading text-[38px] font-normal leading-[1.3] tracking-[-0.01em] text-[#403f3e] sm:text-[42px] lg:text-[40px]">
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
                href="/contact"
                className="inline-flex h-[55px] min-w-[221px] items-center justify-center rounded-[4px] bg-[#ddb563] px-7 text-[15px] font-medium tracking-[0.08em] text-[#152024] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e7c278] hover:shadow-[0_8px_18px_rgba(105,77,28,0.18)]"
              >
                Book Strategy Call
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex h-[55px] min-w-[210px] items-center justify-center rounded-[4px] border border-[#efbf68] bg-transparent px-7 text-[15px] font-normal tracking-[0.04em] text-[#dcae5b] transition-colors duration-200 hover:bg-[#f4dfb7]/45 hover:text-[#ae8139]"
              >
                View Our Process
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <MarketingMap />
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#393a39] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-[92px]">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_36%,rgba(37,27,12,0.92)_0%,rgba(37,27,12,0.54)_25%,rgba(57,58,57,0)_58%)]" />
        <Image
          src="/images/Home page Big Flower light mode (1)-Photoroom.png"
          alt=""
          width={160}
          height={160}
          className="pointer-events-none absolute right-[5%] top-[28px] -z-0 h-auto w-[128px] opacity-[0.055]"
        />
        <Image
          src="/images/Home page Small Flower light mode-Photoroom.png"
          alt=""
          width={80}
          height={80}
          className="pointer-events-none absolute right-[15%] top-[66px] -z-0 h-auto w-[42px] opacity-[0.05]"
        />
        <Image
          src="/images/Home page Small Flower light mode-Photoroom.png"
          alt=""
          width={80}
          height={80}
          className="pointer-events-none absolute right-[11%] top-[160px] -z-0 h-auto w-[50px] opacity-[0.05]"
        />

        <div className="relative z-10 mx-auto max-w-[1084px]">
          <div className="text-center">
            <p className="text-[18px] font-normal text-[#edc269]">Real Impact</p>
            <h2 className="mx-auto mt-5 max-w-[630px] font-heading text-[38px] font-normal leading-[1.32] text-[#e8c476] sm:text-[46px] lg:text-[48px]">
              Digital Marketing That
              <br />
              Delivers What Matters
            </h2>
          </div>

          <div className="mt-[78px] grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impactCards.map(({ title, body, Icon, iconBackground }) => (
              <article
                key={title}
                className="min-h-[258px] rounded-[19px] border border-[#e8c77f] bg-[#fffefd] px-[26px] py-[19px] shadow-[0_6px_12px_rgba(20,17,12,0.14)] transition-transform duration-200 hover:-translate-y-1"
              >
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
