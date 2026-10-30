import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseMedical,
  ClipboardList,
  Clock3,
  Headphones,
  ListChecks,
  MapPin,
  Megaphone,
  RefreshCw,
  Scale,
  type LucideIcon,
} from "lucide-react";
import AboutCoreValuesSection from "@/components/sections/AboutCoreValuesSection";
import ContactConversationContent from "@/components/sections/ContactConversationContent";
import { TestimonialCardsShowcase } from "@/components/sections/TestimonialContactSection";
import PipelineBoard from "@/components/illustrations/PipelineBoard";
import { SHOW_CLIENT_LOGOS } from "@/data/site-flags";
import { clientLogos } from "@/data/social-proof";

export const metadata: Metadata = {
  title: "About YMG Legal | Legal Marketing & Law Firm Support",
  description:
    "YMG Legal works exclusively with law firms: 15+ years of legal marketing, case acquisition, 24/7 US-based intake and case support from Las Vegas, Nevada.",
};


// Deck, "About YMG Legal" (confirmed by YMG).
const facts: { value: string; title: string; body: string; Icon: LucideIcon }[] = [
  { value: "15+ Years", title: "In legal marketing", body: "High-intent lead generation and scalable case acquisition for law firms.", Icon: Clock3 },
  { value: "6 Practice Areas", title: "PI, mass tort and more", body: "Personal injury, mass torts, class action, medical malpractice, workers' compensation and SSD.", Icon: Scale },
  { value: "Las Vegas, NV", title: "US-based operations", body: "Highly trained, empathetic, native English-speaking intake managers, available 24/7.", Icon: MapPin },
];

// Deck, "What we cover": the six service pillars.
const pillars: { title: string; body: string; href: string; Icon: LucideIcon }[] = [
  { title: "Case Generation & Lead Acquisition", body: "Paid search, Meta, YouTube, pay-per-call and SEO campaigns built for your case types.", href: "/services/law-firm-marketing", Icon: Megaphone },
  { title: "Lead Qualification & Screening", body: "Every inquiry screened against your criteria before it reaches your team.", href: "/services/personal-injury-leads", Icon: ListChecks },
  { title: "24/7 Intake & Retainer Support", body: "Live intake on your scripts, after hours and on weekends, through to a signed retainer.", href: "/services/legal-intake", Icon: Headphones },
  { title: "Automated Follow-Up Systems", body: "Text, email and live re-engagement until prospects are ready to talk.", href: "/services/legal-intake", Icon: RefreshCw },
  { title: "Case Onboarding & Documentation", body: "Digital intake packets and organized client files ready on day one.", href: "/services/law-firm-support", Icon: ClipboardList },
  { title: "Medical Records & Case Support", body: "Record retrieval, review, chronologies and case file organization.", href: "/services/law-firm-support", Icon: BriefcaseMedical },
];

// Deck, "Our approach": the four things YMG runs for the firm, in order.
const approach = [
  { title: "We run your marketing", body: "Targeted campaigns across Google, Meta and pay-per-call, managed end to end for your case type and geography." },
  { title: "We qualify every lead", body: "Every inbound inquiry is screened before it reaches your intake team, so no time is spent on cases that don't fit." },
  { title: "We handle intake 24/7", body: "Trained specialists answer day and night, follow your scripts, and guide qualified prospects toward a signed retainer." },
  { title: "We follow up until they sign", body: "Automated and live follow-up keeps leads warm and re-engages anyone who didn't convert on first contact." },
];

export default function AboutPage() {
  return (
    <div className="bg-[#FFF5E0]">
      {/* Hero */}
      <section className="ymg-section-padding relative isolate overflow-hidden !pt-[150px] lg:!pt-[170px]">
        <Image
          src="/flowers/half-circleBG.svg"
          alt=""
          width={1180}
          height={848}
          priority
          className="pointer-events-none absolute right-[-80px] top-[40%] -z-10 w-[320px] -translate-y-1/2 opacity-70 mix-blend-multiply sm:w-[460px] lg:w-[580px]"
        />
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[1rem] font-medium text-[#8a6420]">About YMG Legal</p>
          <h1 className="mt-4 max-w-[15ch] text-[2.6rem] leading-[1.04] text-[#2f3236] sm:text-[3.4rem] lg:text-[4rem]">
            We work <span className="text-[#c9a14f]">exclusively</span> with law firms.
          </h1>
          <p className="mt-6 max-w-[40rem] text-[1.08rem] leading-[1.6] text-[#55585c] sm:text-[1.15rem]">
            A legal marketing firm helping law firms acquire, qualify and retain clients through targeted digital marketing,
            professional intake services and back-office case support, from the first ad impression to a signed retainer, so
            your team can stay focused on practicing law.
          </p>

          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {facts.map(({ value, title, body, Icon }) => (
              <li key={value} className="rounded-[18px] border border-[#ead3a0] bg-white p-6 shadow-[0_12px_26px_rgba(82,64,34,0.07)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fbf0d9] text-[#8a6420]">
                  <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <p className="mt-5 font-heading text-[1.9rem] leading-none text-[#a87b25]">{value}</p>
                <p className="mt-2 font-heading text-[1.15rem] text-[#2f3236]">{title}</p>
                <p className="mt-2 text-[0.98rem] leading-[1.55] text-[#5e6064]">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who we are */}
      <section className="ymg-section-padding">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1.38fr)] lg:items-center lg:gap-12">
          <div>
            <h2 className="text-[2rem] leading-[1.1] text-[#2f3236] sm:text-[2.5rem]">Built to help law firms grow and operate more efficiently</h2>
            <p className="mt-5 text-[1.06rem] leading-[1.6] text-[#5e6064]">
              YMG Legal was built around a simple idea: law firms need more than marketing. They need qualified
              opportunities, responsive intake, reliable follow-up, and the operational capacity to handle growth.
            </p>
            <p className="mt-4 text-[1.06rem] leading-[1.6] text-[#5e6064]">
              We combine marketing, case acquisition, legal intake and law firm support into one process, built around each
              firm&apos;s practice areas, markets and goals, with one team accountable from first click to signed retainer.
            </p>
          </div>
          <PipelineBoard />
        </div>
      </section>

      {/* What we cover */}
      <section className="ymg-section-padding bg-[#3d4145] text-[#f5ecd8]">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="text-[2rem] leading-[1.1] text-[#EBC982] sm:text-[2.5rem]">What we cover</h2>
          <p className="mt-4 max-w-[40rem] text-[1.06rem] leading-[1.6] text-[#e8dfcc]">
            Six service pillars that can run together as a full partnership or on their own.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map(({ title, body, href, Icon }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="group flex h-full flex-col rounded-[18px] border border-white/12 bg-white/[0.04] p-6 transition-colors hover:border-[#D8B26B]/60 hover:bg-white/[0.07]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D8B26B]/20 text-[#EBC982]">
                    <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="mt-5 font-heading text-[1.3rem] leading-tight text-[#f5ecd8]">{title}</span>
                  <span className="mt-2 text-[0.98rem] leading-[1.55] text-[#d9d1c0]">{body}</span>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[0.95rem] font-semibold text-[#EBC982]">
                    Learn more <ArrowRight size={15} strokeWidth={1.8} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our approach */}
      <section className="ymg-section-padding">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="max-w-[20ch] text-[2rem] leading-[1.1] text-[#2f3236] sm:text-[2.5rem]">
            We don&apos;t hand you leads <span className="text-[#c9a14f]">and walk away.</span>
          </h2>
          <p className="mt-4 text-[1.06rem] text-[#5e6064]">We build and manage the system around your firm.</p>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {approach.map((step, i) => (
              <li key={step.title} className="border-t-2 border-[#D8B26B] pt-5">
                <span className="font-heading text-[1rem] text-[#a87b25]">Step {i + 1}</span>
                <h3 className="mt-2 text-[1.35rem] leading-tight text-[#2f3236]">{step.title}</h3>
                <p className="mt-2 text-[0.98rem] leading-[1.55] text-[#5e6064]">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <AboutCoreValuesSection />

      {SHOW_CLIENT_LOGOS && (
        <section id="clients" className="ymg-section-padding scroll-mt-28">
          <div className="mx-auto max-w-[1240px] text-center">
            <h2 className="text-[2rem] leading-[1.1] text-[#2f3236] sm:text-[2.5rem]">Trusted by law firms</h2>
            <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {clientLogos.map(({ name, src }) => (
                <li key={name} className="flex aspect-[1.72/1] items-center justify-center rounded-[10px] border border-[#ead3a0] bg-white px-5">
                  <Image src={src} alt={name} width={220} height={120} className="h-[60px] w-auto max-w-[82%] object-contain" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <div id="testimonials" className="scroll-mt-24">
        <TestimonialCardsShowcase showAllLink={false} />
      </div>

      <section className="ymg-contact-section ymg-section-padding relative isolate overflow-hidden bg-[#D8B26B] text-[#404040]">
        <div className="relative z-10 mx-auto max-w-7xl">
          <ContactConversationContent variant="gold" homeTypography />
        </div>
      </section>
    </div>
  );
}
