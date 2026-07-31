import Image from "next/image";
import { MobileProofScroller, ProofBar } from "@/components/sections/ProofHighlights";
import LeadConnectorBookingCalendar from "@/components/sections/LeadConnectorBookingCalendar";

const contactItems = [
  { icon: "/contact_icons/phone.png", label: "(424) 447-1147", href: "tel:4244471147" },
  { icon: "/contact_icons/message.png", label: "info@ymg-legal.com", href: "mailto:info@ymg-legal.com" },
  { icon: "/contact_icons/location.png", label: "Las Vegas Nevada" },
  { icon: "/contact_icons/Vector (4).png", label: "LinkedIn", href: "https://www.linkedin.com/" },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FFF5E0] pt-20 text-[#3d4145]">
      <section className="ymg-section-padding-x relative isolate min-h-[calc(100svh-80px)] overflow-hidden pb-[60px] pt-16 sm:pt-20 lg:pt-24 xl:pt-28">
        <Image
          src="/flowers/vcardBG.svg"
          alt=""
          width={273}
          height={196}
          priority
          className="pointer-events-none absolute bottom-[-20px] left-[-20px] z-0 w-[150px] sm:w-[210px]"
        />
        <Image
          src="/flowers/vcardBG.svg"
          alt=""
          width={273}
          height={196}
          priority
          className="pointer-events-none absolute right-[-30px] top-[110px] z-0 w-[150px] sm:w-[220px]"
        />

        <div className="relative z-10 mx-auto grid max-w-[1600px] items-center gap-12 2xl:grid-cols-[minmax(320px,1fr)_minmax(920px,1000px)] 2xl:gap-16">
          <div className="text-center lg:text-left">
            <p className="text-[1rem] font-medium text-[#3d4145] sm:text-[1.15rem]">Contact Us</p>
            <h1 className="mt-5 max-w-[560px] font-heading text-[clamp(2.5rem,5vw,4.4rem)] font-normal leading-[1.06] tracking-[0] text-[#3d4145] lg:mx-0">
              Let&apos;s Grow
              <span className="block">Your Case Volume</span>
            </h1>
            <p className="mx-auto mt-8 max-w-[420px] text-[1.1rem] leading-[1.35] text-[#3d4145] sm:text-[1.25rem] lg:mx-0">
              Connect with our experts to generate high-intent leads and convert them into signed cases that drive consistent, scalable growth.
            </p>

            <div className="relative mt-16 grid grid-cols-2 gap-x-6 gap-y-8 text-center sm:grid-cols-4 lg:max-w-[680px] lg:text-left">
              <Image
                src="/flowers/vcardBG.svg"
                alt=""
                width={273}
                height={196}
                className="pointer-events-none absolute left-1/2 top-[-100px] hidden w-[180px] -translate-x-1/2 lg:block"
              />
              {contactItems.map(({ icon, label, href }) => {
                const content = (
                  <>
                    <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-[4px] border border-[#b8a57a] text-[#3d4145] lg:mx-0">
                      <Image src={icon} alt="" width={26} height={26} className="h-[22px] w-[22px] object-contain brightness-0" />
                    </span>
                    <span className="mt-4 block text-[0.8rem] text-[#3d4145] dark:text-[#D8B26B]">{label}</span>
                  </>
                );

                return href ? <a key={label} href={href} className="block">{content}</a> : <div key={label}>{content}</div>;
              })}
            </div>
          </div>

          <LeadConnectorBookingCalendar />
        </div>
        <div className="relative z-10 mx-auto mt-12 w-full max-w-7xl">
          <MobileProofScroller />
          <div className="hidden lg:block">
            <ProofBar darkGold className="w-full max-w-none" />
          </div>
        </div>
      </section>
    </main>
  );
}
