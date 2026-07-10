import Link from "next/link";

export default function ReadyGrowCtaSection({
  variant = "dark",
  compactMobile = false,
}: {
  variant?: "dark" | "cream";
  compactMobile?: boolean;
}) {
  const isCream = variant === "cream";

  return (
    <section className={`ymg-section-padding ${isCream ? "bg-[#FFF5E0] text-[#3d4145]" : "bg-[#404040] text-[#d9b46d]"}`}>
      <div className="mx-auto grid max-w-7xl items-center gap-8 text-left lg:grid-cols-[1fr_220px] lg:gap-12">
        <div>
          <h2 className={`font-heading font-normal leading-tight tracking-[0] ${compactMobile ? "text-center text-[1.65rem] sm:text-[2rem] lg:text-left lg:text-[clamp(2rem,4.5vw,4rem)]" : "text-[clamp(2rem,4.5vw,4rem)]"} ${isCream ? "text-[#3d4145]" : "text-[#EBC982]"}`}>
            Ready to Grow Your Firm?
          </h2>
          <p className={`mt-4 font-medium ${compactMobile ? "text-center text-[0.8rem] lg:text-left lg:text-[1.25rem]" : "text-[1rem] sm:text-[1.25rem]"} ${isCream ? "text-[#3d4145]" : "text-[#ecd08c]"}`}>
            Let&apos;s build your pipeline of qualified cases.
          </p>
        </div>

        <div className={`flex w-full max-w-[220px] flex-col gap-4 ${compactMobile ? "mx-auto lg:mx-0" : ""}`}>
          <Link href="/services/case-acquisition" className="inline-flex h-12 items-center justify-center rounded-[3px] bg-[#d9b46d] px-7 text-[0.86rem] font-semibold text-[#262626]">
            Get More Cases
          </Link>
          <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-[3px] border border-[#d9b46d] px-7 text-[0.86rem] font-semibold text-[#d9b46d]">
            Book Strategy Call
          </Link>
        </div>
      </div>
    </section>
  );
}
