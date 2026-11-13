import Image from "next/image";
import ClientProof from "@/components/site/ClientProof";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarClock,
  FileCheck2,
  FileSignature,
  Headset,
  LayoutTemplate,
  MapPin,
  Megaphone,
  MessagesSquare,
  PhoneCall,
  PhoneOutgoing,
  Scale,
  Search,
  Share2,
  Sparkles,
  TrendingUp,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import GlassIcon, { type GlassTone } from "@/components/ui/GlassIcon";
import ScrollMotion from "@/components/home/ScrollMotion";
import PhotoCard from "@/components/site/PhotoCard";
import ServiceFinder, {
  type FinderOption,
} from "@/components/site/ServiceFinder";
import {
  BookCallButton,
  BookCallButtonDark,
} from "@/components/site/Cta";
import HeroBackdrop from "@/components/site/HeroBackdrop";

type Service = { title: string; body: string; href: string; Icon: LucideIcon };

// The same four groups as the header's Services menu; every service page sits under exactly one.
const acquisition: Service[] = [
  {
    title: "Personal Injury Leads",
    body: "Qualified PI opportunities built around your case criteria.",
    href: "/services/personal-injury-leads",
    Icon: FileCheck2,
  },
  {
    title: "MVA Leads",
    body: "Motor vehicle accident cases in the markets you serve.",
    href: "/services/mva-leads",
    Icon: Search,
  },
  {
    title: "Mass Tort Leads",
    body: "Claimant pipelines for the campaigns you are pursuing.",
    href: "/services/mass-tort-leads",
    Icon: UsersRound,
  },
  {
    title: "Class Action Leads",
    body: "Class members screened against the class definition.",
    href: "/services/class-action-leads",
    Icon: Scale,
  },
  {
    title: "Pay-Per-Call",
    body: "Live, pre-screened callers transferred to your team.",
    href: "/services/pay-per-call",
    Icon: PhoneCall,
  },
  {
    title: "Outbound Acquisition",
    body: "Consent-based follow-up that revives old inquiries.",
    href: "/services/outbound-client-acquisition",
    Icon: PhoneOutgoing,
  },
];

const intake: Service[] = [
  {
    title: "Answer",
    body: "24/7 live intake answers and screens every inquiry.",
    href: "/services/legal-intake",
    Icon: Headset,
  },
  {
    title: "Reply",
    body: "Live chat and two-way text for people who won't call.",
    href: "/services/live-chat-text",
    Icon: MessagesSquare,
  },
  {
    title: "Book",
    body: "Consultations booked the moment a prospect is ready.",
    href: "/services/ai-booking",
    Icon: CalendarClock,
  },
  {
    title: "Sign",
    body: "Retainers sent for e-signature and followed up until signed.",
    href: "/services/retainer-signing",
    Icon: FileSignature,
  },
];
const intakeNames = [
  "Legal Intake",
  "Live Chat & Text",
  "AI-Powered Booking",
  "Contract & Retainer",
];

const channels: {
  title: string;
  href: string;
  Icon: LucideIcon;
  tone: GlassTone;
}[] = [
  {
    title: "Google Search Ads",
    href: "/services/google-search-ads",
    Icon: Search,
    tone: "blue",
  },
  {
    title: "Meta Ads",
    href: "/services/meta-ads",
    Icon: Megaphone,
    tone: "indigo",
  },
  {
    title: "Local Services Ads",
    href: "/services/local-services-ads",
    Icon: MapPin,
    tone: "green",
  },
  { title: "SEO", href: "/services/seo", Icon: TrendingUp, tone: "teal" },
  {
    title: "AI Search",
    href: "/services/ai-search",
    Icon: Sparkles,
    tone: "violet",
  },
  {
    title: "Organic Social",
    href: "/services/organic-social-media",
    Icon: Share2,
    tone: "rose",
  },
  {
    title: "Website Design",
    href: "/services/website-design",
    Icon: LayoutTemplate,
    tone: "amber",
  },
];

const support = [
  {
    title: "Paralegal & Firm Support",
    body: "Case, litigation, records and admin work, under your attorneys' direction.",
    href: "/services/law-firm-support",
    image: "/images/services/firm-support.jpg",
    alt: "A legal team reviewing case documents",
  },
  {
    title: "Legal Virtual Assistants",
    body: "Dedicated, US-based remote staff working in your systems.",
    href: "/services/legal-virtual-assistants",
    image: "/images/services/virtual-assistants.jpg",
    alt: "A virtual assistant on a video call",
  },
];

const groups = [
  {
    id: "case-acquisition",
    title: "Case Acquisition",
    count: "6 services",
  },
  {
    id: "intake-conversion",
    title: "Intake & Conversion",
    count: "4 services",
  },
  {
    id: "law-firm-marketing",
    title: "Law Firm Marketing",
    count: "7 channels",
  },
  {
    id: "law-firm-support",
    title: "Law Firm Support",
    count: "2 services",
  },
];

const finder: FinderOption[] = [
  {
    problem: "We are not getting enough cases",
    answer: "Start with case acquisition.",
    body: "Campaigns built around your case types and markets, with every lead screened before it reaches your team.",
    services: [
      {
        label: "Personal Injury Leads",
        href: "/services/personal-injury-leads",
      },
      { label: "MVA Leads", href: "/services/mva-leads" },
      { label: "Pay-Per-Call", href: "/services/pay-per-call" },
    ],
  },
  {
    problem: "Calls go unanswered after hours",
    answer: "Answer every inquiry, 24/7.",
    body: "Live intake picks up nights and weekends, screens on your criteria, and books the consultation.",
    services: [
      { label: "Legal Intake", href: "/services/legal-intake" },
      { label: "Live Chat & Text", href: "/services/live-chat-text" },
      { label: "AI-Powered Booking", href: "/services/ai-booking" },
    ],
  },
  {
    problem: "Leads talk to us but never sign",
    answer: "Close the gap to a signed retainer.",
    body: "Retainers go out for e-signature right after the call, and unconverted inquiries get steady, consent-based follow-up.",
    services: [
      { label: "Contract & Retainer", href: "/services/retainer-signing" },
      {
        label: "Outbound Acquisition",
        href: "/services/outbound-client-acquisition",
      },
    ],
  },
  {
    problem: "People can't find our firm online",
    answer: "Build demand for your own brand.",
    body: "Search, local and social channels run as one plan, measured by the cases they bring in.",
    services: [
      { label: "Law Firm Marketing", href: "/services/law-firm-marketing" },
      { label: "SEO", href: "/services/seo" },
      { label: "Local Services Ads", href: "/services/local-services-ads" },
    ],
  },
  {
    problem: "Our team is buried in admin",
    answer: "Add capacity without hiring.",
    body: "Paralegal, records and virtual assistant support, scoped to your caseload and run in your systems.",
    services: [
      { label: "Law Firm Support", href: "/services/law-firm-support" },
      {
        label: "Virtual Assistants",
        href: "/services/legal-virtual-assistants",
      },
    ],
  },
];

const promises = [
  { value: "30 min", label: "free strategy call" },
  { value: "48 hrs", label: "custom proposal" },
  { value: "1 wk", label: "to launch, at fastest" },
];

const h2 = "text-[clamp(1.93rem,3.52vw,3.2rem)] leading-[1.03] tracking-[-0.015em]";

/* Hero: the four groups as photo tiles that jump to their section. */
function Hero() {
  return (
    <section className="ymg-dark-hero relative isolate overflow-hidden bg-[#0B231D] px-5 pb-20 pt-32 text-[#F5F1E8] sm:px-10 sm:pt-36 lg:px-12 lg:pb-24">
      <HeroBackdrop src="/images/about/boardroom.jpg" />
      <div className="mx-auto grid max-w-[1320px] gap-10 md:grid-cols-2 md:gap-x-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-8">
        <h1
          data-reveal
          className="max-w-[18ch] self-end text-[clamp(2.18rem,4.48vw,4rem)] leading-[1] tracking-[-0.02em] md:col-span-2 lg:col-span-1"
        >
          Every stage of a case.{" "}
          <span className="text-[#D6B263]">One partner.</span>
        </h1>

        <nav
          aria-label="Service groups"
          data-reveal
          data-reveal-delay="120"
          className="md:col-start-2 md:row-start-2 lg:row-span-2 lg:row-start-1 lg:self-center"
        >
          <ol className="border-t border-[#F5F1E8]/15">
            {groups.map((g, i) => (
              <li key={g.id} className="border-b border-[#F5F1E8]/15">
                <a
                  href={`#${g.id}`}
                  className="group flex items-center gap-5 py-6 transition-colors duration-300"
                >
                  <span className="ymg-num w-8 text-[1rem] text-[#D6B263]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="ymg-num block text-[clamp(1.6rem,2.6vw,2.2rem)] leading-tight text-[#F5F1E8] transition-colors group-hover:text-[#D6B263]">
                      {g.title}
                    </span>
                    <span className="mt-1 block text-[0.95rem] text-[#B9B2A3]">
                      {g.count}
                    </span>
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#F5F1E8]/25 text-[#F5F1E8] transition-colors group-hover:border-[#F5F1E8] group-hover:bg-[#F5F1E8] group-hover:text-[#0B231D]">
                    <ArrowRight
                      size={17}
                      className="rotate-90"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div
          data-reveal
          data-reveal-delay="200"
          className="md:col-start-1 md:row-start-2 md:self-center lg:self-start"
        >
          <h2 className="text-[1.5rem] font-normal leading-snug text-[#D6B263]">
            Services Built Around Law Firm Growth
          </h2>
          <p className="mt-4 max-w-[32rem] text-[1.12rem] leading-[1.65] text-[#C9C3B4]">
            Our services are designed around the business problems law firms
            face, not simply the marketing channels used to solve them. Use one
            service, or connect them into one system scoped to your case types
            and markets.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <BookCallButton />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Case Acquisition: a typographic index of six services under a photo with its key points. */
function Acquisition() {
  return (
    <section
      id="case-acquisition"
      className="scroll-mt-24 bg-white px-5 py-24 sm:px-10 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-10 md:grid-cols-2 md:grid-rows-[auto_1fr] md:gap-x-12 lg:gap-x-20">
          <h2
            data-reveal
            className={`${h2} max-w-[16ch] self-end text-[#0B231D] md:col-start-1 md:row-start-1`}
          >
            Case Acquisition
          </h2>
          <div
            data-reveal
            className="md:col-start-2 md:row-span-2 md:row-start-1"
          >
            <PhotoCard
              photo={{
                src: "/images/services/pi-ambulance.jpg",
                alt: "An ambulance on a city street",
              }}
              highlights={[
                "Screened on your case criteria",
                "Live in as little as 1 week",
              ]}
              sizes="(min-width: 768px) 50vw, 100vw"
              aspect="aspect-[16/11]"
              priority
            />
          </div>
          <p
            data-reveal
            className="max-w-[30rem] self-start text-[1.12rem] leading-[1.6] text-[#4E5A54] md:col-start-1 md:row-start-2"
          >
            Leads, live calls and claimants built around the cases your firm
            takes, in the markets you serve. Nothing reaches your team until it
            has been screened.
          </p>
        </div>

        <ul
          data-reveal-group
          className="mt-16 grid border-t border-[#0B231D]/12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3"
        >
          {acquisition.map(({ title, body, href, Icon }, i) => (
            <li
              key={href}
              className="border-b border-[#0B231D]/12 sm:[&:nth-child(odd)]:border-r lg:border-r lg:[&:nth-child(3n)]:border-r-0"
            >
              <Link
                href={href}
                className="group flex h-full flex-col gap-5 p-6 transition-colors duration-300 hover:bg-[#F0F4F1] sm:p-8"
              >
                <span className="flex items-center justify-between">
                  <span className="ymg-num text-[1rem] text-[#8C6B22]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon
                    size={22}
                    strokeWidth={1.6}
                    className="text-[#0B231D]/40 transition-colors group-hover:text-[#0B231D]"
                    aria-hidden="true"
                  />
                </span>
                <span className="ymg-num text-[1.75rem] leading-tight text-[#0B231D]">
                  {title}
                </span>
                <span className="text-[1.04rem] leading-[1.55] text-[#4E5A54]">
                  {body}
                </span>
                <span className="mt-auto inline-flex items-center gap-2 text-[0.98rem] font-semibold text-[#0B231D]">
                  Explore
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* Intake & Conversion: the four services read as one journey, answer to signature. */
function Intake() {
  return (
    <section
      id="intake-conversion"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#0B231D] px-5 py-24 text-[#F5F1E8] sm:px-10 lg:px-12 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_85%_20%,rgba(214,178,99,0.1),transparent_70%)]"
      />
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-10 md:grid-cols-2 md:grid-rows-[auto_1fr] md:gap-x-12 lg:gap-x-20">
          <h2
            data-reveal
            className={`${h2} max-w-[16ch] self-end md:col-start-2 md:row-start-1`}
          >
            Intake &amp; <span className="text-[#D6B263]">Conversion</span>
          </h2>
          <div
            data-reveal
            className="md:col-start-1 md:row-span-2 md:row-start-1"
          >
            <PhotoCard
              photo={{
                src: "/images/services/legal-intake.jpg",
                alt: "An intake specialist on a headset",
              }}
              highlights={[
                "24/7 live intake, US-based team",
                "Screened on your criteria",
              ]}
              sizes="(min-width: 768px) 50vw, 100vw"
              aspect="aspect-[16/11]"
            />
          </div>
          <p
            data-reveal
            className="max-w-[30rem] self-start text-[1.12rem] leading-[1.6] text-[#C9C3B4] md:col-start-2 md:row-start-2"
          >
            A case is won or lost in the first few minutes. Every inquiry is
            answered, screened and guided to a signed retainer, day or night.
          </p>
        </div>

        <ol
          data-reveal-group
          className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-8"
        >
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-[linear-gradient(90deg,transparent,rgba(214,178,99,0.5)_10%,rgba(214,178,99,0.5)_90%,transparent)] lg:block"
          />
          {intake.map(({ title, body, href, Icon }, i) => (
            <li key={href} className="relative">
              <Link href={href} className="group block">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#D6B263]/60 bg-[#0B231D] text-[#D6B263] transition-colors group-hover:bg-[#D6B263] group-hover:text-[#0B231D]">
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="mt-6 flex items-baseline gap-3">
                  <span className="ymg-num text-[1rem] text-[#D6B263]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="ymg-num text-[2.2rem] leading-none">
                    {title}
                  </span>
                </span>
                <span className="mt-3 block max-w-[18rem] text-[1.04rem] leading-[1.55] text-[#C9C3B4]">
                  {body}
                </span>
                <span className="mt-5 inline-flex items-center gap-2 text-[0.96rem] font-semibold text-[#F5F1E8] transition-colors group-hover:text-[#D6B263]">
                  {intakeNames[i]}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* Law Firm Marketing: the channels as a set of glass-icon links beside one photo. */
function Marketing() {
  return (
    <section
      id="law-firm-marketing"
      className="scroll-mt-24 bg-[#F0F4F1] px-5 py-24 sm:px-10 lg:px-12 lg:py-32"
    >
      <div className="mx-auto grid max-w-[1320px] gap-10 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:grid-rows-[auto_1fr] lg:gap-x-20 lg:gap-y-8">
        <h2
          data-reveal
          className={`${h2} max-w-[16ch] self-end text-[#0B231D] md:col-span-2 lg:col-span-1 lg:col-start-1 lg:row-start-1`}
        >
          Law Firm Marketing
        </h2>
        <div
          data-reveal
          className="md:col-start-2 md:row-start-2 lg:row-span-2 lg:row-start-1 lg:self-center"
        >
          <PhotoCard
            photo={{
              src: "/images/services/mkt-search.jpg",
              alt: "A phone open on a search engine",
            }}
            highlights={["Found first in search", "Measured by signed cases"]}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div data-reveal className="md:col-start-1 md:row-start-2">
          <p className="max-w-[30rem] text-[1.12rem] leading-[1.6] text-[#4E5A54]">
            Be the firm people find first, and the one they call. We run your
            channels as one plan, tied to intake and the cases they bring in.
          </p>
          <ul className="mt-8 grid gap-2 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
            {channels.map(({ title, href, Icon, tone }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex items-center gap-3 rounded-[16px] bg-white px-3 py-3 text-[1.02rem] font-semibold text-[#0B231D] shadow-[0_1px_0_rgba(11,35,29,0.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(11,35,29,0.1)]"
                >
                  <GlassIcon tone={tone} size="sm">
                    <Icon size={17} strokeWidth={1.9} aria-hidden="true" />
                  </GlassIcon>
                  <span className="flex-1">{title}</span>
                  <ArrowRight
                    size={16}
                    className="mr-1 text-[#0B231D]/40 transition-[color,transform] group-hover:translate-x-0.5 group-hover:text-[#0B231D]"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <BookCallButtonDark
              label="See the marketing overview"
              href="/services/law-firm-marketing"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Law Firm Support: two photo-led halves, the copy set into each photo. */
function Support() {
  return (
    <section
      id="law-firm-support"
      className="scroll-mt-24 bg-white px-5 py-24 sm:px-10 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-20">
          <h2 data-reveal className={`${h2} max-w-[16ch] text-[#0B231D]`}>
            Law Firm Support
          </h2>
          <p
            data-reveal
            className="max-w-[30rem] text-[1.12rem] leading-[1.6] text-[#4E5A54] lg:pb-2"
          >
            After the client signs, the work begins. Add paralegal and admin
            capacity without building every role in-house.
          </p>
        </div>
        <div data-reveal-group className="mt-14 grid gap-5 md:grid-cols-2">
          {support.map(({ title, body, href, image, alt }) => (
            <Link
              key={href}
              href={href}
              className="group relative isolate flex min-h-[460px] flex-col justify-end overflow-hidden rounded-[28px] p-7 text-[#F5F1E8] sm:min-h-[520px] sm:p-9"
            >
              <Image
                src={image}
                alt={alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="-z-10 object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071813] via-[#071813]/55 to-transparent"
              />
              <span className="ymg-num text-[clamp(1.9rem,3vw,2.6rem)] leading-tight">
                {title}
              </span>
              <span className="mt-3 max-w-[26rem] text-[1.06rem] leading-[1.55] text-[#E4DFD2]">
                {body}
              </span>
              <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#F5F1E8] px-5 py-3 text-[0.96rem] font-semibold text-[#0B231D] transition-colors group-hover:bg-white">
                Explore{" "}
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* The close: pick the problem you recognise, get the services that answer it. */
function Finder() {
  return (
    <section className="relative isolate overflow-hidden bg-[#071813] px-5 py-24 text-[#F5F1E8] sm:px-10 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1320px]">
        <h2 data-reveal className={`${h2} max-w-[22ch]`}>
          Where does your firm{" "}
          <span className="text-[#D6B263]">lose cases?</span>
        </h2>
        <p
          data-reveal
          className="mt-6 max-w-[34rem] text-[1.1rem] leading-[1.6] text-[#C9C3B4]"
        >
          Pick the one that sounds most like your week. We will point you to
          where to start.
        </p>
        <div data-reveal className="mt-12">
          <ServiceFinder options={finder} />
        </div>
        <div
          data-reveal
          className="mt-16 flex flex-col gap-10 border-t border-[#F5F1E8]/12 pt-10 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <BookCallButton />
          </div>
          <dl className="grid grid-cols-3 gap-6 sm:gap-10">
            {promises.map(({ value, label }) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="ymg-num text-[1.8rem] leading-none sm:text-[2.1rem]">
                  {value}
                </dd>
                <dd className="mt-2 text-[0.88rem] text-[#B9B2A3]">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div className="ymg-site">
      <Hero />
      <Acquisition />
      <Intake />
      <Marketing />
      <Support />
      <ClientProof
        photo={{
          src: "/images/about/boardroom.jpg",
          alt: "A law firm boardroom",
        }}
        start={2}
        tone="mist"
      />
      <Finder />
      <ScrollMotion />
    </div>
  );
}
