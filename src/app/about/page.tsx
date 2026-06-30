import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import TouchPopCard from "@/components/sections/TouchPopCard";

const lawFirmLogos = [
  { name: "Law Logo", src: "/images/law-firms/law-logo.svg" },
  { name: "III Trial Lawyers", src: "/images/law-firms/iii-trial-lawyers.svg" },
  { name: "Alliance Legal Partners", src: "/images/law-firms/alliance-legal-partners.svg" },
  { name: "Halavanau Law Office", src: "/images/law-firms/halavanau-law-office.svg" },
  { name: "Morgan Maxwell Attorney & Law", src: "/images/law-firms/morgan-maxwell.svg" },
  { name: "Erol Gulistan Law Firm", src: "/images/law-firms/erol-gulistan-law-firm.svg" },
  { name: "Good Law", src: "/images/law-firms/good-law.svg" },
  { name: "Attorney & Law", src: "/images/law-firms/attorney-law.svg" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fff5E0]">
      <section className="flex min-h-[70svh] items-center justify-center px-5 py-24 text-center text-[#3a3d42]">
        <div>
          <p className="mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.22em] text-[#d8ae63]">
            About YMG - Legal
          </p>
          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-tight">
            Updating Hero Section
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[1rem] leading-[1.6] text-[#7a7c7e]">
            Coming soon.
          </p>
        </div>
      </section>
      <section className="bg-[#404040] px-4 py-6 text-[#d9b46d] sm:px-5 sm:py-5">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_112px] items-center gap-4 sm:flex sm:justify-between sm:gap-5">
          <h2 className="text-left text-[clamp(1.25rem,6.4vw,2.05rem)] font-semibold leading-[1.08] sm:text-[clamp(1.45rem,4vw,2rem)]">
            Ready to Scale Your Firm?
          </h2>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:max-w-[390px] sm:flex-row">
            <Link
              href="/services/case-acquisition"
              className="inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-[3px] bg-[#d9b46d] px-2 py-2 text-[0.42rem] font-bold tracking-[0.03em] text-[#262626] sm:min-w-[190px] sm:px-6 sm:text-[0.68rem]"
            >
              Get More Cases
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-[3px] border border-[#d9b46d] px-2 py-2 text-center text-[0.4rem] font-semibold tracking-[0.02em] text-[#d9b46d] sm:min-w-[190px] sm:px-6 sm:text-[0.68rem] sm:tracking-[0.06em]"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>
      <section className="relative isolate overflow-hidden bg-[#fff5E0] px-5 py-14 text-[#3a3d42] sm:px-8 sm:py-20 lg:px-12">
        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(320px,0.76fr)_minmax(520px,1fr)] lg:gap-16">
          <div className="pt-0 text-center lg:text-left">
            <p className="text-[0.72rem] font-medium text-[#54575a] sm:text-[0.9rem] xl:text-[1.05rem]">
              Trusted by Leading Law Firms
            </p>
            <h2 className="mt-4 text-[clamp(1.45rem,8vw,2rem)] font-semibold leading-[1.12] text-[#3d4145] sm:mt-5 sm:text-[clamp(2rem,4vw,2.45rem)] sm:leading-[1.18] xl:text-[clamp(2rem,4.6vw,3rem)]">
              Proven Results.
              <span className="block">Lasting Partnerships.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[300px] text-[0.72rem] leading-[1.42] text-[#8a8c8e] sm:mt-6 sm:max-w-[420px] sm:text-[0.9rem] sm:leading-[1.5] lg:mx-0 xl:text-[1.05rem] xl:leading-[1.55]">
              We partner with ambitious law firms nationwide, delivering qualified
              cases, consistent growth, and measurable success.
            </p>
            <div className="pointer-events-none relative mx-auto mt-24 hidden h-[250px] w-[420px] opacity-100 brightness-75 contrast-125 saturate-150 lg:mx-0 lg:ml-[40px] lg:block">
              <Image
                src="/images/Home page Big Flower light mode (1)-Photoroom.png"
                alt=""
                width={200}
                height={200}
                className="absolute left-1/2 top-0 w-[230px] -translate-x-1/2"
              />
            </div>
          </div>

          <div className="ymg-law-logo-window relative mx-auto w-full max-w-[620px] overflow-hidden px-3 py-4 sm:px-10 sm:py-8 lg:py-10">
            <div className="ymg-law-logo-track grid grid-cols-2 gap-x-2 gap-y-4 sm:gap-x-8 sm:gap-y-8">
              {[...lawFirmLogos, ...lawFirmLogos].map(({ name, src }, index) => {
                const rowOffset = Math.floor(index / 2) % 2 === 0 ? "-translate-x-3 sm:-translate-x-8" : "translate-x-3 sm:translate-x-8";

                return (
                  <div
                    key={`${name}-${index}`}
                    className={`${rowOffset} flex aspect-[1.72/1] min-h-[62px] items-center justify-center rounded-[6px] border-[0.79px] border-[#D9B46D] bg-[#fcf2de] px-2.5 shadow-[0_10px_22px_rgba(91,69,34,0.15)] sm:min-h-[108px] sm:px-5 lg:min-h-[112px]`}
                  >
                    <Image
                      src={src}
                      alt={name}
                      width={220}
                      height={120}
                      className="h-[34px] w-auto max-w-[82%] object-contain sm:h-[70px] lg:h-[76px]"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#efcd86] px-5 py-5 text-[#404040] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[0.72rem] leading-[1.45] sm:text-[0.92rem] lg:text-[1rem]">
            We are a performance-driven legal marketing partner helping law firms scale through
            qualified lead generation, intake excellence, and conversion-focused systems.
          </p>
        </div>
      </section>
      <section className="relative isolate overflow-hidden bg-[#404040] px-5 py-12 text-[#d9b46d] sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="pointer-events-none absolute bottom-[260px] left-5 hidden h-[170px] w-[250px] opacity-20 brightness-75 contrast-125 saturate-150 sm:block lg:left-12">
          <Image
            src="/images/Home page Big Flower light mode (1)-Photoroom.png"
            alt=""
            fill
            sizes="250px"
            className="object-contain"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-[0.82rem] font-medium text-[#d9b46d] sm:text-[0.95rem]">
              Client Testimonials
            </p>
            <h2 className="mt-3 text-[clamp(1.8rem,7vw,3rem)] font-semibold leading-tight text-[#d9b46d]">
              What Our Clients Say
            </h2>
          </div>

          <div className="group/testimonials relative mx-auto mt-8 h-[360px] max-w-[820px] overflow-visible sm:mt-16 sm:h-[560px]">
            <div className="pointer-events-none absolute bottom-12 right-0 z-[5] h-[150px] w-[230px] opacity-25 sm:bottom-10 sm:right-0 sm:h-[180px] sm:w-[280px]">
              <Image
                src="/images/Home page Big Flower light mode (1)-Photoroom.png"
                alt=""
                width={200}
                height={200}
                className="absolute right-[72px] top-0 w-[115px] sm:right-[88px] sm:w-[145px]"
              />
              <Image
                src="/images/Home page Small Flower light mode-Photoroom.png"
                alt=""
                width={68}
                height={68}
                className="absolute left-0 top-9 w-[42px] sm:w-[50px]"
              />
              <Image
                src="/images/Home page Small Flower light mode-Photoroom.png"
                alt=""
                width={68}
                height={68}
                className="absolute right-0 top-16 w-[42px] sm:w-[50px]"
              />
              <Image
                src="/images/Home page Small Flower light mode-Photoroom.png"
                alt=""
                width={68}
                height={68}
                className="absolute bottom-0 left-[70px] w-[46px] sm:left-[86px] sm:w-[54px]"
              />
            </div>

            {[
              {
                name: "Managing Partner",
                firm: "Bergson Legal",
                avatar: "bg-[radial-gradient(circle_at_35%_28%,#f4d0b8_0_18%,transparent_19%),linear-gradient(135deg,#d9ae5d,#f6e8bd)]",
                text: "YMG Legal completely transformed our intake and lead quality. We went from chasing leads to consistently signing qualified cases every week.",
                color: "bg-white",
                stars: "text-[#d9ae5d]",
                pos: "left-[8px] top-[88px] w-[112px] min-h-[150px] -rotate-[18deg] sm:left-8 sm:top-[120px] sm:w-[300px] sm:min-h-[330px]",
              },
              {
                name: "Founder",
                firm: "Orion Law",
                avatar: "bg-[radial-gradient(circle_at_48%_26%,#e8b99d_0_18%,transparent_19%),linear-gradient(135deg,#b8c4d8,#f8efd9)]",
                text: "Their system works. From lead generation to intake, everything is streamlined. Our team now focuses on closing cases instead of filtering bad leads.",
                color: "bg-white",
                stars: "text-[#d9ae5d]",
                pos: "left-1/2 top-0 w-[118px] min-h-[158px] -translate-x-1/2 -rotate-[4deg] sm:w-[300px] sm:min-h-[350px]",
              },
              {
                name: "Partner",
                firm: "Westline Injury",
                avatar: "bg-[radial-gradient(circle_at_50%_30%,#f1c2a5_0_17%,transparent_18%),linear-gradient(135deg,#3d4145,#d9ae5d)]",
                text: "We worked with multiple marketing agencies before, but none delivered results like this. The reporting, quality, and consistency are excellent.",
                color: "bg-white",
                stars: "text-[#d9ae5d]",
                pos: "right-[8px] top-[88px] w-[112px] min-h-[150px] rotate-[11deg] sm:right-8 sm:top-[122px] sm:w-[300px] sm:min-h-[330px]",
              },
              {
                name: "Partner",
                firm: "Injury Law Group",
                avatar: "bg-[radial-gradient(circle_at_45%_28%,#efc5ab_0_18%,transparent_19%),linear-gradient(135deg,#7e5ab7,#f3dbff)]",
                text: "The biggest difference is their intake team. Every lead is handled professionally, and we only speak with serious, qualified clients.",
                color: "bg-[#c091e8] text-white [&_p]:!text-white [&_.testimonial-divider]:!bg-white/60",
                stars: "text-[#ffd35e]",
                pos: "left-[28%] top-[140px] z-20 w-[118px] min-h-[158px] -rotate-[4deg] sm:left-[26%] sm:top-[245px] sm:w-[300px] sm:min-h-[330px]",
              },
              {
                name: "Attorney",
                firm: "Casebridge Law",
                avatar: "bg-[radial-gradient(circle_at_52%_27%,#d8a98d_0_17%,transparent_18%),linear-gradient(135deg,#f0c878,#fff4d7)]",
                text: "In the first 60 days, we saw a significant increase in signed retainers. YMG understands legal marketing because they are a true partner.",
                color: "bg-[#f8d8a7]",
                stars: "text-[#d9ae5d]",
                pos: "right-[18%] top-[132px] z-10 w-[118px] min-h-[158px] rotate-[20deg] sm:right-[16%] sm:top-[265px] sm:w-[300px] sm:min-h-[330px]",
              },
            ].map(({ name, firm, avatar, text, color, stars, pos }) => (
              <TouchPopCard
                key={name}
                className={`absolute ${pos} rounded-bl-none rounded-br-[12px] rounded-tl-[12px] rounded-tr-none border border-[#ead3a0] ${color} p-2 shadow-[0_16px_34px_rgba(87,66,34,0.14)] touch-manipulation transition-all duration-300 ease-out hover:z-40 hover:-translate-y-3 hover:scale-105 hover:rotate-0 hover:shadow-[0_24px_48px_rgba(87,66,34,0.24)] sm:rounded-br-[18px] sm:rounded-tl-[18px] sm:p-6`}
              >
                <div className={`mb-2 flex gap-0.5 sm:mb-4 ${stars}`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-[0.52rem] leading-none sm:text-base">★</span>
                  ))}
                </div>
                <p className="text-[0.39rem] leading-[1.28] text-[#7c7d80] sm:text-[0.9rem] sm:leading-[1.48]">
                  &quot;{text}&quot;
                </p>
                <div className="testimonial-divider mt-2 h-px w-12 bg-[#3a3d42]/40 sm:mt-5 sm:w-24" />
                <div className="mt-2 flex items-center gap-1.5 sm:mt-4 sm:gap-3">
                  <div className={`relative h-5 w-5 overflow-hidden rounded-[3px] shadow-inner sm:h-9 sm:w-9 ${avatar}`}>
                    <div className="absolute bottom-0 left-1/2 h-2.5 w-4 -translate-x-1/2 rounded-t-full bg-[#2f3236]/70 sm:h-4 sm:w-6" />
                  </div>
                  <div>
                    <p className="text-[0.42rem] font-bold text-[#3d4145] sm:text-[0.68rem]">{name}</p>
                    <p className="text-[0.36rem] text-[#8a8c8e] sm:text-[0.58rem]">{firm}</p>
                  </div>
                </div>
              </TouchPopCard>
            ))}
          </div>

          <div className="mt-16 grid items-end gap-8 sm:mt-20 lg:mt-28 lg:grid-cols-12 lg:gap-12">
            <div className="text-center lg:col-span-6 lg:text-left">
              <p className="text-[0.9rem] text-[#d9b46d]">Contact Us</p>
              <h3 className="mt-4 text-[clamp(2rem,7vw,3.2rem)] font-semibold leading-tight text-[#d9b46d]">
                Let&apos;s Start a Conversation
              </h3>
            </div>

            <form className="mx-auto w-full max-w-[520px] rounded-[6px] bg-[#fff5E0] p-5 text-[#2f3337] shadow-[0_18px_44px_rgba(0,0,0,0.18)] sm:p-7 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1">
              <h3 className="text-[1.15rem] font-semibold sm:text-[1.35rem]">
                Book Your Free Strategy Call
              </h3>
              <p className="mt-3 max-w-[300px] text-[0.76rem] leading-[1.45]">
                Tell us about your firm and we&apos;ll show you how we can help.
              </p>
              <div className="mt-5 grid gap-3">
                <input className="h-10 rounded-[4px] border border-[#b8a57a] bg-transparent px-4 text-[0.8rem] outline-none" placeholder="Full Name" />
                <input className="h-10 rounded-[4px] border border-[#b8a57a] bg-transparent px-4 text-[0.8rem] outline-none" placeholder="Email" />
                <input className="h-10 rounded-[4px] border border-[#b8a57a] bg-transparent px-4 text-[0.8rem] outline-none" placeholder="Phone Number" />
                <select className="h-10 rounded-[4px] border border-[#b8a57a] bg-transparent px-4 text-[0.8rem] outline-none">
                  <option>Practice Area</option>
                  <option>Mass Torts</option>
                  <option>Personal Injury</option>
                  <option>Case Acquisition</option>
                </select>
              </div>
              <button className="mt-4 h-11 w-full rounded-[4px] bg-[#404040] text-[0.78rem] font-semibold text-white">
                Book My Free Call
              </button>
            </form>

            <div className="grid w-full grid-cols-4 items-start text-[#d9b46d] lg:col-span-6 lg:gap-5">
              <a href="tel:4244471147" className="flex min-w-0 flex-col items-center justify-center gap-2 text-center lg:items-start lg:text-left">
                <Phone className="h-3.5 w-3.5" />
                <span className="whitespace-nowrap text-[0.48rem] sm:text-[0.68rem] lg:text-[0.82rem]">(424) 447-1147</span>
              </a>
              <a href="mailto:info@ymg-legal.com" className="flex min-w-0 flex-col items-center justify-center gap-2 text-center lg:items-start lg:text-left">
                <Mail className="h-3.5 w-3.5" />
                <span className="whitespace-nowrap text-[0.45rem] sm:text-[0.65rem] lg:text-[0.82rem]">info@ymg-legal.com</span>
              </a>
              <div className="flex min-w-0 flex-col items-center justify-center gap-2 text-center lg:items-start lg:text-left">
                <MapPin className="h-3.5 w-3.5" />
                <span className="whitespace-nowrap text-[0.45rem] sm:text-[0.65rem] lg:text-[0.82rem]">Las Vegas Nevada</span>
              </div>
              <a href="#" className="flex min-w-0 flex-col items-center justify-center gap-2 text-center lg:items-start lg:text-left">
                <ExternalLink className="h-3.5 w-3.5" />
                <span className="whitespace-nowrap text-[0.48rem] sm:text-[0.68rem] lg:text-[0.82rem]">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
