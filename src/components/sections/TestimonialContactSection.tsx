import Image from "next/image";
import CardInteractionHint from "@/components/sections/CardInteractionHint";
import ContactConversationContent from "@/components/sections/ContactConversationContent";
import TouchPopCard from "@/components/sections/TouchPopCard";

const testimonials = [
  {
    name: "Managing Partner",
    firm: "Bergson Legal",
    avatar: "bg-[radial-gradient(circle_at_35%_28%,#f4d0b8_0_18%,transparent_19%),linear-gradient(135deg,#d9ae5d,#f6e8bd)]",
    text: "YMG Legal completely transformed our intake and lead quality. We went from chasing leads to consistently signing qualified cases every week.",
    color: "bg-white",
    stars: "text-[#d9ae5d]",
    pos: "left-[8px] top-[88px] w-[112px] min-h-[132px] -rotate-[18deg] sm:left-8 sm:top-[120px] sm:w-[300px] sm:min-h-[275px]",
  },
  {
    name: "Founder",
    firm: "Orion Law",
    avatar: "bg-[radial-gradient(circle_at_48%_26%,#e8b99d_0_18%,transparent_19%),linear-gradient(135deg,#b8c4d8,#f8efd9)]",
    text: "Their system works. From lead generation to intake, everything is streamlined. Our team now focuses on closing cases instead of filtering bad leads.",
    color: "bg-white",
    stars: "text-[#d9ae5d]",
    pos: "left-1/2 top-0 w-[118px] min-h-[138px] -translate-x-1/2 -rotate-[4deg] sm:w-[300px] sm:min-h-[285px]",
  },
  {
    name: "Partner",
    firm: "Westline Injury",
    avatar: "bg-[radial-gradient(circle_at_50%_30%,#f1c2a5_0_17%,transparent_18%),linear-gradient(135deg,#3d4145,#d9ae5d)]",
    text: "We worked with multiple marketing agencies before, but none delivered results like this. The reporting, quality, and consistency are excellent.",
    color: "bg-white",
    stars: "text-[#d9ae5d]",
    pos: "right-[8px] top-[88px] w-[112px] min-h-[132px] rotate-[11deg] sm:right-8 sm:top-[122px] sm:w-[300px] sm:min-h-[275px]",
  },
  {
    name: "Partner",
    firm: "Injury Law Group",
    avatar: "bg-[radial-gradient(circle_at_45%_28%,#efc5ab_0_18%,transparent_19%),linear-gradient(135deg,#7e5ab7,#f3dbff)]",
    text: "The biggest difference is their intake team. Every lead is handled professionally, and we only speak with serious, qualified clients.",
    color: "bg-[#c091e8] text-white [&_p]:!text-white [&_.testimonial-divider]:!bg-white/60",
    stars: "text-[#ffd35e]",
    pos: "left-[28%] top-[140px] z-20 w-[118px] min-h-[138px] -rotate-[4deg] sm:left-[26%] sm:top-[245px] sm:w-[300px] sm:min-h-[275px]",
  },
  {
    name: "Attorney",
    firm: "Casebridge Law",
    avatar: "bg-[radial-gradient(circle_at_52%_27%,#d8a98d_0_17%,transparent_18%),linear-gradient(135deg,#f0c878,#fff4d7)]",
    text: "In the first 60 days, we saw a significant increase in signed retainers. YMG understands legal marketing because they are a true partner.",
    color: "bg-[#f8d8a7]",
    stars: "text-[#d9ae5d]",
    pos: "right-[18%] top-[132px] z-10 w-[118px] min-h-[138px] rotate-[20deg] sm:right-[16%] sm:top-[265px] sm:w-[300px] sm:min-h-[275px]",
  },
];

export function TestimonialCardsShowcase({
  className = "",
}: {
  className?: string;
}) {
  return (
    <section className={`ymg-section-padding relative isolate overflow-hidden bg-[#404040] text-[#d9b46d] ${className}`}>
      <div className="pointer-events-none absolute bottom-[120px] left-5 hidden h-[170px] w-[250px] opacity-20 brightness-75 contrast-125 saturate-150 sm:block lg:left-12">
        <Image
          src="/images/big_flowers.webp"
          alt=""
          fill
          sizes="250px"
          className="object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-[0.82rem] font-medium text-[#EBC982] sm:text-[0.95rem]">
            Client Testimonials
          </p>
          <h2 className="mt-3 mb-6 text-[clamp(1.8rem,7vw,3rem)] font-semibold leading-tight text-[#EBC982] sm:mb-8">
            What Our Clients Say
          </h2>
          <CardInteractionHint />
        </div>

        <div className="group/testimonials relative mx-auto mt-7 h-[360px] max-w-[820px] overflow-visible sm:mt-12 sm:h-[560px]">
          <div className="pointer-events-none absolute bottom-12 right-0 z-[5] h-[150px] w-[230px] opacity-25 sm:bottom-10 sm:right-0 sm:h-[180px] sm:w-[280px]">
            <Image
              src="/images/big_flowers.webp"
              alt=""
              width={200}
              height={200}
              className="absolute right-[72px] top-0 w-[115px] sm:right-[88px] sm:w-[145px]"
            />
            <Image
              src="/images/small_flowers.webp"
              alt=""
              width={68}
              height={68}
              className="absolute left-0 top-9 w-[42px] sm:w-[50px]"
            />
            <Image
              src="/images/small_flowers.webp"
              alt=""
              width={68}
              height={68}
              className="absolute right-0 top-16 w-[42px] sm:w-[50px]"
            />
            <Image
              src="/images/small_flowers.webp"
              alt=""
              width={68}
              height={68}
              className="absolute bottom-0 left-[70px] w-[46px] sm:left-[86px] sm:w-[54px]"
            />
          </div>

          {testimonials.map(({ name, firm, avatar, text, color, stars, pos }) => (
            <TouchPopCard
              key={`${name}-${firm}`}
              centerOnMobile
              className={`absolute ${pos} rounded-bl-none rounded-br-[12px] rounded-tl-[12px] rounded-tr-none border border-[#ead3a0] ${color} p-2 shadow-[0_16px_34px_rgba(87,66,34,0.14)] touch-manipulation transition-all duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:z-40 hover:-translate-y-3 hover:scale-105 hover:rotate-0 hover:shadow-[0_24px_48px_rgba(87,66,34,0.24)] sm:rounded-br-[18px] sm:rounded-tl-[18px] sm:p-6`}
            >
              <div className={`mb-2 flex gap-0.5 sm:mb-4 ${stars}`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index} className="text-[0.52rem] leading-none sm:text-base">
                    &#9733;
                  </span>
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
      </div>
    </section>
  );
}

export default function TestimonialContactSection({
  showTestimonials = true,
  contactVariant = "default",
}: {
  showTestimonials?: boolean;
  contactVariant?: "default" | "home";
}) {
  const contactOnly = contactVariant === "home" && !showTestimonials;

  return (
    <section
      className={`${contactOnly ? "ymg-section-padding-x py-0" : "ymg-section-padding"} relative isolate overflow-hidden bg-[#404040] text-[#d9b46d] ${contactVariant === "home" ? "pb-0" : ""}`}
      style={contactVariant === "home" ? { paddingBottom: 0 } : undefined}
    >
      <div className={`relative z-10 mx-auto ${contactOnly ? "max-w-[1160px]" : "max-w-7xl"}`}>
        {showTestimonials && (
          <>
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
                className="pointer-events-none absolute bottom-[-28px] right-[-52px] z-0 w-[180px] sm:bottom-[-48px] sm:right-[-90px] sm:w-[285px]"
              />

              {testimonials.map(({ name, firm, avatar, text, color, stars, pos }) => (
                <TouchPopCard
                  key={`${name}-${firm}`}
                  centerOnMobile
                  className={`absolute ${pos} rounded-bl-none rounded-br-[12px] rounded-tl-[12px] rounded-tr-none border border-[#ead3a0] ${color} p-2 shadow-[0_16px_34px_rgba(87,66,34,0.14)] touch-manipulation transition-all duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:z-40 hover:-translate-y-3 hover:scale-105 hover:rotate-0 hover:shadow-[0_24px_48px_rgba(87,66,34,0.24)] sm:rounded-br-[18px] sm:rounded-tl-[18px] sm:p-6`}
                >
                  <div className={`mb-2 flex gap-0.5 sm:mb-4 ${stars}`}>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index} className="text-[0.52rem] leading-none sm:text-base">
                        &#9733;
                      </span>
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
          </>
        )}

        <ContactConversationContent variant="gold" fullBleed className={showTestimonials ? "mt-16 sm:mt-20 lg:mt-28" : ""} />
      </div>
    </section>
  );
}
