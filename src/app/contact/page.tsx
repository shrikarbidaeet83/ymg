import Image from "next/image";
import { MobileProofScroller, ProofBar } from "@/components/sections/ProofHighlights";
import ReadyGrowCtaSection from "@/components/sections/ReadyGrowCtaSection";
import {
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const contactItems = [
  { icon: Phone, label: "(424) 447-1147", href: "tel:4244471147" },
  { icon: Mail, label: "info@ymg-legal.com", href: "mailto:info@ymg-legal.com" },
  { icon: MapPin, label: "Las Vegas Nevada" },
  { icon: ExternalLink, label: "LinkedIn", href: "https://www.linkedin.com/" },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fff5e0] text-[#3d4145]">
      <section className="relative isolate overflow-hidden px-5 pb-10 pt-[118px] sm:px-8 lg:px-12 lg:pb-14 lg:pt-[128px]">
        <Image
          src="/images/Home page Big Flower light mode (1)-Photoroom.png"
          alt=""
          width={230}
          height={230}
          priority
          className="pointer-events-none absolute bottom-[-36px] left-[-36px] z-0 w-[130px] opacity-[0.07] brightness-90 sepia sm:w-[175px]"
        />
        <Image
          src="/images/Home page Big Flower light mode (1)-Photoroom.png"
          alt=""
          width={220}
          height={220}
          priority
          className="pointer-events-none absolute right-[-42px] top-[120px] z-0 w-[120px] opacity-[0.06] brightness-90 sepia sm:w-[170px]"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,470px)] lg:gap-20">
          <div className="text-center lg:text-left">
            <p className="text-[1rem] font-medium text-[#3d4145] sm:text-[1.15rem]">
              Contact Us
            </p>
            <h1 className="mt-5 max-w-[560px] font-heading text-[clamp(3.1rem,6vw,5.7rem)] font-normal leading-[1.06] tracking-[0] text-[#3d4145] lg:mx-0">
              Let&apos;s Grow
              <span className="block">Your Case Volume</span>
            </h1>
            <p className="mx-auto mt-8 max-w-[420px] text-[1.1rem] leading-[1.35] text-[#3d4145] sm:text-[1.25rem] lg:mx-0">
              Connect with our experts to generate high-intent leads and convert
              them into signed cases that drive consistent, scalable growth.
            </p>

            <div className="relative mt-16 grid grid-cols-2 gap-x-6 gap-y-8 text-center sm:grid-cols-4 lg:max-w-[680px] lg:text-left">
              <Image
                src="/images/Home page Big Flower light mode (1)-Photoroom.png"
                alt=""
                width={180}
                height={180}
                className="pointer-events-none absolute left-1/2 top-[-82px] hidden w-[145px] -translate-x-1/2 opacity-[0.06] brightness-90 sepia lg:block"
              />
              {contactItems.map(({ icon: Icon, label, href }) => {
                const content = (
                  <>
                    <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-[4px] border border-[#b8a57a] text-[#3d4145] lg:mx-0">
                      <Icon size={21} strokeWidth={1.45} />
                    </span>
                    <span className="mt-4 block text-[0.8rem] text-[#3d4145]">
                      {label}
                    </span>
                  </>
                );

                return href ? (
                  <a key={label} href={href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>
          </div>

          <form className="mx-auto w-full max-w-[470px] rounded-[6px] bg-[#404040]/[0.06] p-6 text-[#2f3337] shadow-[0_18px_44px_rgba(89,69,35,0.08)] sm:p-8">
            <h2 className="font-heading text-[1.5rem] font-normal leading-tight text-[#3d4145]">
              Book Your Free Strategy Call
            </h2>
            <p className="mt-3 max-w-[300px] text-[0.9rem] leading-[1.35] text-[#3d4145]">
              Tell us about your firm and we&apos;ll show you how we can help.
            </p>
            <div className="mt-6 grid gap-3">
              <input className="h-12 rounded-[4px] border border-[#b8a57a] bg-transparent px-4 text-[0.88rem] outline-none" placeholder="Full Name" />
              <input className="h-12 rounded-[4px] border border-[#b8a57a] bg-transparent px-4 text-[0.88rem] outline-none" placeholder="Email" />
              <input className="h-12 rounded-[4px] border border-[#b8a57a] bg-transparent px-4 text-[0.88rem] outline-none" placeholder="Phone Number" />
              <select className="h-12 rounded-[4px] border border-[#b8a57a] bg-transparent px-4 text-[0.88rem] text-[#55585a] outline-none" defaultValue="">
                <option value="" disabled>Practice Area</option>
                <option>Mass Torts</option>
                <option>Personal Injury</option>
                <option>Case Acquisition</option>
              </select>
            </div>
            <button type="button" className="mt-4 h-12 w-full rounded-[4px] bg-[#404040] text-[0.82rem] font-semibold text-white">
              Book My Free Call
            </button>
          </form>
        </div>

        <div className="relative z-10 mx-auto mt-16 max-w-7xl">
          <MobileProofScroller className="mt-0" />
          <ProofBar className="hidden lg:grid" />
        </div>
      </section>
      <ReadyGrowCtaSection />
    </main>
  );
}
