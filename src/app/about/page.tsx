import Image from "next/image";
import { ArrowUpRight, CheckCircle2, FileCheck2, PhoneCall, Scale, Target, UsersRound } from "lucide-react";
import CardInteractionHint from "@/components/sections/CardInteractionHint";
import ContactConversationContent from "@/components/sections/ContactConversationContent";
import ReadyGrowCtaSection from "@/components/sections/ReadyGrowCtaSection";
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

function AboutHeroIllustration() {
  return (
    <div className="ymg-about-hero-visual ymg-view-reveal-up relative mx-auto mt-12 h-[330px] w-full max-w-[520px] md:mt-0 md:h-[390px] lg:h-[420px]">
      <Image
        src="/images/big_flowers.png"
        alt=""
        width={190}
        height={190}
        className="pointer-events-none absolute right-[6%] top-[0] z-0 w-[112px] opacity-[0.055] mix-blend-multiply"
      />

      <div className="ymg-about-orbit absolute left-[48%] top-[50%] h-[292px] w-[292px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d9ae5d]/20 sm:h-[340px] sm:w-[340px]" />
      <div className="ymg-about-orbit ymg-about-orbit-reverse absolute left-[48%] top-[50%] h-[214px] w-[214px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d9ae5d]/14 sm:h-[258px] sm:w-[258px]" />

      <div className="ymg-about-vortex ymg-about-vortex-lt absolute left-[4%] top-[12%] z-30 hidden w-[146px] rounded-[8px] border border-[#dfbd78] bg-white px-4 py-3 shadow-[0_14px_28px_rgba(91,69,34,0.15)] sm:block">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#5f7f62]" />
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[#a27625]">Qualified</p>
        </div>
        <div className="mt-3 h-1.5 w-full rounded-full bg-[#f0dec0]">
          <span className="ymg-about-progress block h-full rounded-full bg-[#d9ae5d]" />
        </div>
      </div>

      <div className="ymg-about-vortex ymg-about-vortex-rt absolute right-[4%] top-[18%] z-30 flex h-[88px] w-[88px] items-center justify-center rounded-full border border-[#dfbd78] bg-white shadow-[0_14px_28px_rgba(91,69,34,0.15)]">
        <div className="text-center">
          <ArrowUpRight className="mx-auto h-5 w-5 text-[#d9ae5d]" strokeWidth={2} />
          <p className="mt-1 text-[0.78rem] font-bold text-[#3f3d3a]">+42%</p>
          <p className="text-[0.52rem] text-[#8a7b64]">growth</p>
        </div>
      </div>

      <div className="ymg-about-vortex ymg-about-vortex-lb absolute bottom-[10%] left-[4%] z-30 hidden items-center gap-2 sm:flex">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dfbd78] bg-white text-[#42627f] shadow-[0_10px_22px_rgba(91,69,34,0.13)]">
          <PhoneCall className="h-5 w-5" strokeWidth={1.8} />
        </span>
        <span className="h-px w-8 bg-[#d9ae5d]" />
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dfbd78] bg-white text-[#a27625] shadow-[0_10px_22px_rgba(91,69,34,0.13)]">
          <UsersRound className="h-5 w-5" strokeWidth={1.8} />
        </span>
        <span className="h-px w-8 bg-[#d9ae5d]" />
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dfbd78] bg-white text-[#5f7f62] shadow-[0_10px_22px_rgba(91,69,34,0.13)]">
          <FileCheck2 className="h-5 w-5" strokeWidth={1.8} />
        </span>
      </div>

      <div className="ymg-about-vortex ymg-about-vortex-rb absolute bottom-[10%] right-[11%] z-30 hidden rounded-[999px] border border-[#dfbd78] bg-white px-4 py-2 shadow-[0_10px_22px_rgba(91,69,34,0.13)] sm:block">
        <div className="flex items-center gap-2">
          <Target className="h-4 w-4 text-[#d9ae5d]" strokeWidth={1.8} />
          <span className="text-[0.66rem] font-bold text-[#4d4841]">Intake engine</span>
        </div>
      </div>

      <div className="ymg-about-vortex ymg-about-vortex-center ymg-about-dashboard absolute left-1/2 top-1/2 z-20 w-[78%] max-w-[370px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[14px] border border-[#dfbd78] bg-white shadow-[0_24px_52px_rgba(91,69,34,0.2)]">
        <div className="flex items-center justify-between bg-[#404040] px-5 py-4 text-[#d9ae5d]">
          <span className="flex h-10 w-10 items-center justify-center rounded-[7px] bg-[#fff5e0] text-[#404040]">
            <Scale className="h-5 w-5" strokeWidth={1.8} />
          </span>
          <div className="min-w-0 flex-1 px-3">
            <p className="text-[0.9rem] font-bold leading-none">YMG Growth Hub</p>
            <p className="mt-1 text-[0.62rem] text-[#e5c987]">Marketing + intake + retainers</p>
          </div>
          <CheckCircle2 className="h-6 w-6 shrink-0" strokeWidth={1.8} />
        </div>

        <div className="p-5">
          <div className="relative h-[154px] overflow-hidden rounded-[10px] bg-[#fff5e0] p-4">
            <div className="absolute bottom-4 left-4 right-4 flex items-end gap-2">
              {[38, 54, 48, 72, 92].map((height, index) => (
                <span key={height} className="ymg-about-bar block flex-1 rounded-t-[5px] bg-[#d9ae5d]" style={{ height: `${height}px`, animationDelay: `${index * 90}ms` }} />
              ))}
            </div>
            <p className="relative z-10 text-[0.66rem] font-semibold text-[#7b6b54]">Case growth trajectory</p>
          </div>

          <div className="mt-4 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2">
            {[
              { label: "Plan", Icon: Target, bg: "bg-[#fff1c7]", color: "text-[#a27625]" },
              { label: "Qualify", Icon: UsersRound, bg: "bg-[#e6efe7]", color: "text-[#5f7f62]" },
              { label: "Sign", Icon: FileCheck2, bg: "bg-[#eee8f4]", color: "text-[#735d86]" },
            ].map(({ label, Icon, bg, color }, index) => (
              <div key={label} className="contents">
                <div className="rounded-[8px] bg-[#fffdfa] px-2 py-2 text-center">
                  <span className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full ${bg} ${color}`}>
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                  <p className="mt-2 text-[0.6rem] font-bold text-[#4d4841]">{label}</p>
                </div>
                {index < 2 && <span className="h-px w-5 bg-[#d9ae5d]/70" />}
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between rounded-[9px] bg-[#fff5e0] px-4 py-3">
            <span className="text-[0.72rem] font-bold text-[#3f3d3a]">Measurable growth</span>
            <ArrowUpRight className="h-5 w-5 text-[#d9ae5d]" strokeWidth={2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFF5E0]">
      <section className="relative isolate flex min-h-[560px] overflow-hidden bg-[#FFF5E0] px-5 pb-16 pt-[132px] text-[#3f3d3a] sm:px-10 sm:pb-20 min-[900px]:pt-[142px] lg:px-16 lg:pb-[80px]">
        <div className="relative z-10 mx-auto grid w-full max-w-[1160px] items-center gap-10 md:grid-cols-[0.86fr_1.14fr] md:gap-12">
          <div className="relative z-10 max-w-[380px] text-left">
            <Image
              src="/flowers/half-circleBG.svg"
              alt=""
              width={1180}
              height={848}
              className="pointer-events-none absolute -right-[90px] -top-[72px] -z-10 w-[190px] rotate-[18deg] opacity-[0.14] mix-blend-multiply sm:-right-[120px] sm:-top-[82px] sm:w-[230px]"
            />
            <Image
              src="/flowers/3rd-flower.svg"
              alt=""
              width={382}
              height={274}
              className="pointer-events-none absolute -right-[105px] -top-[72px] -z-10 w-[225px] opacity-[0.18] mix-blend-multiply sm:-right-[158px] sm:-top-[87px] sm:w-[285px]"
            />
            <p className="text-[0.78rem] font-normal text-[#4c4945] sm:text-[0.82rem]">
              About YMG Legal
            </p>
            <h1 className="ymg-practice-hero-title mt-4 text-[clamp(2rem,6vw,2rem)] font-normal leading-[1.18] tracking-[-0.025em] text-[#46413d]">
              Driving Case
              <span className="block">Growth for Modern</span>
              <span className="block">Law Firms</span>
            </h1>
            <p className="mt-4 max-w-[345px] text-[0.76rem] leading-[1.35] text-[#55514d] sm:text-[0.8rem]">
              We combine performance marketing, expert intake,
              <span className="block">and conversion systems to deliver real, measurable</span>
              <span className="block">results.</span>
            </p>
          </div>
          <AboutHeroIllustration />
        </div>
      </section>
      <ReadyGrowCtaSection />
      <section className="ymg-section-padding relative isolate overflow-hidden bg-[#FFF5E0] text-[#3a3d42]">
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
            <div className="pointer-events-none relative mx-auto mt-24 hidden h-[250px] w-[420px] opacity-100 lg:mx-0 lg:ml-[40px] lg:block">
              <Image
                src="/flowers/3rd-flower.svg"
                alt=""
                width={382}
                height={274}
                className="absolute inset-0 h-full w-full object-contain object-left-bottom mix-blend-multiply"
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
      <section className="ymg-section-padding bg-[#efcd86] text-[#404040]">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[0.72rem] leading-[1.45] sm:text-[0.92rem] lg:text-[1rem]">
            We are a performance-driven legal marketing partner helping law firms scale through
            qualified lead generation, intake excellence, and conversion-focused systems.
          </p>
        </div>
      </section>
      <section className="ymg-section-padding relative isolate overflow-hidden bg-[#404040] pb-0 text-[#d9b46d]">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-[0.82rem] font-medium text-[#EBC982] sm:text-[0.95rem]">
              Client Testimonials
            </p>
            <h2 className="mt-3 text-[clamp(1.8rem,7vw,3rem)] font-semibold leading-tight text-[#EBC982]">
              What Our Clients Say
            </h2>
            <CardInteractionHint />
          </div>

          <div className="group/testimonials relative mx-auto mt-7 h-[360px] max-w-[820px] overflow-visible sm:mt-14 sm:h-[560px]">
            <Image
              src="/flowers/psmBG.svg"
              alt=""
              width={273}
              height={196}
              className="pointer-events-none absolute bottom-[-28px] left-[-52px] z-0 w-[120px] sm:bottom-[-48px] sm:left-[-90px] sm:w-[190px]"
            />
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
                key={`${name}-${firm}`}
                centerOnMobile
                className={`absolute ${pos} rounded-bl-none rounded-br-[12px] rounded-tl-[12px] rounded-tr-none border border-[#ead3a0] ${color} p-2 shadow-[0_16px_34px_rgba(87,66,34,0.14)] touch-manipulation transition-all duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:z-40 hover:-translate-y-3 hover:scale-105 hover:rotate-0 hover:shadow-[0_24px_48px_rgba(87,66,34,0.24)] sm:rounded-br-[18px] sm:rounded-tl-[18px] sm:p-6`}
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

          <ContactConversationContent variant="gold" fullBleed className="mt-16 sm:mt-20 lg:mt-28" />
        </div>
      </section>
    </main>
  );
}
