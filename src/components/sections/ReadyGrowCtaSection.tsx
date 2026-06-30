import Link from "next/link";

export default function ReadyGrowCtaSection({
  variant = "dark",
}: {
  variant?: "dark" | "cream";
}) {
  const isCream = variant === "cream";

  return (
    <section className={`${isCream ? "bg-[#fff5e0] text-[#3d4145]" : "bg-[#404040] text-[#d9b46d]"} px-5 py-12 sm:px-8 lg:px-12 lg:py-14`}>
      <div className="mx-auto grid max-w-7xl items-center gap-8 text-left lg:grid-cols-[1fr_220px] lg:gap-12">
        <div>
          <h2 className="font-heading text-[clamp(2rem,4.5vw,4rem)] font-normal leading-tight tracking-[0]">
            Ready to Grow Your Firm?
          </h2>
          <p className={`mt-4 text-[1rem] font-medium sm:text-[1.25rem] ${isCream ? "text-[#3d4145]" : "text-[#ecd08c]"}`}>
            Let&apos;s build your pipeline of qualified cases.
          </p>
        </div>

        <div className="flex w-full max-w-[220px] flex-col gap-4">
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