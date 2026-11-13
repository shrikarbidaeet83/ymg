import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="ymg-section-padding flex min-h-[78svh] items-center bg-[#FFF5E0] pt-[140px]">
      <div className="mx-auto w-full max-w-[760px] text-center">
        <p className="font-heading text-[5rem] leading-none text-[#D8B26B] sm:text-[7rem]">
          404
        </p>
        <h1 className="mt-4 text-[2rem] leading-tight text-[#2f3236] sm:text-[2.6rem]">
          This page isn&apos;t here.
        </h1>
        <p className="mx-auto mt-4 max-w-[34rem] text-[1.06rem] leading-[1.6] text-[#5e6064]">
          The link may be old or mistyped. Here are the places most law firms
          are looking for.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-[6px] bg-[#3d4145] px-6 py-3.5 font-semibold text-white hover:bg-[#25282b]"
          >
            Go to the home page{" "}
            <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center rounded-[6px] border border-[#D8B26B] px-6 py-3.5 font-semibold text-[#8a6420] hover:bg-[#D8B26B]/15"
          >
            Explore services
          </Link>
        </div>
      </div>
    </section>
  );
}
