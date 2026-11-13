import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** The site's primary action: a cream pill with an evergreen arrow, made for evergreen sections. */
export function BookCallButton({
  label = "Book a free strategy call",
  href = "/contact#booking",
}: {
  label?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex min-h-14 items-center sm:whitespace-nowrap justify-center gap-3 rounded-full bg-[#F5F1E8] py-2 pl-7 pr-2 text-left text-[1rem] font-semibold text-[#0B231D] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5F1E8]"
    >
      {label}
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B231D] text-[#D6B263] transition-transform duration-300 group-hover:translate-x-0.5">
        <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
      </span>
    </Link>
  );
}

/** The same action for light sections: an evergreen pill. */
export function BookCallButtonDark({
  label = "Book a free strategy call",
  href = "/contact#booking",
}: {
  label?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex min-h-14 items-center sm:whitespace-nowrap justify-center gap-3 rounded-full bg-[#0B231D] py-2 pl-7 pr-2 text-left text-[1rem] font-semibold text-[#F5F1E8] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#102E26] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B231D]"
    >
      {label}
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5F1E8] text-[#0B231D] transition-transform duration-300 group-hover:translate-x-0.5">
        <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
      </span>
    </Link>
  );
}

