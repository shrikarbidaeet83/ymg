import Link from "next/link";
import { ChevronLeft } from "lucide-react";

// Sub pages link back to their parent page; marketing channels default to Law Firm Marketing.
export default function ChannelBreadcrumb({
  current,
  parent = { label: "Law Firm Marketing", href: "/services/law-firm-marketing" },
}: {
  current: string;
  parent?: { label: string; href: string };
}) {
  return (
    <nav aria-label="Breadcrumb" className="pointer-events-none absolute inset-x-0 top-[92px] z-30 px-5 sm:top-[96px] sm:px-10 lg:top-[104px] lg:px-16">
      <ol className="pointer-events-auto mx-auto flex max-w-[1240px] items-center gap-1.5 text-[0.9rem]">
        <li>
          <Link
            href={parent.href}
            className="ymg-breadcrumb-link inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1.5 font-semibold text-[#8a6420] backdrop-blur-sm transition-colors hover:text-[#5e4416]"
          >
            <ChevronLeft size={15} strokeWidth={2} aria-hidden="true" /> {parent.label}
          </Link>
        </li>
        <li aria-current="page" className="ymg-breadcrumb-current hidden text-[#6b6e72] sm:block">
          <span aria-hidden="true" className="mx-1 text-[#c9b996]">/</span>
          {current}
        </li>
      </ol>
    </nav>
  );
}
