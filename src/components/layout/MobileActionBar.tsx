import Link from "next/link";
import { Phone } from "lucide-react";

// Phones only: keeps the two ways to reach YMG within thumb reach on every page.
// The spacer stops the fixed bar from covering the end of the footer.
export default function MobileActionBar() {
  return (
    <>
      <div aria-hidden="true" className="h-[76px] min-[900px]:hidden" />
      <div className="ymg-mobile-action-bar fixed inset-x-0 bottom-0 z-40 border-t border-[#ead3a0] bg-[#FFF5E0]/95 px-4 pb-[calc(env(safe-area-inset-bottom,0px)+12px)] pt-3 backdrop-blur-sm min-[900px]:hidden">
        <div className="mx-auto flex max-w-[560px] gap-3">
          <a
            href="tel:+13133065055"
            className="flex h-12 flex-1 items-center justify-center gap-2 rounded-[8px] border-[1.5px] border-[#D8B26B] text-[0.98rem] font-semibold text-[#3d4145]"
          >
            <Phone size={17} strokeWidth={1.8} aria-hidden="true" /> Call
          </a>
          <Link
            href="/contact"
            className="flex h-12 flex-[2] items-center justify-center rounded-[8px] bg-[#3d4145] text-[0.98rem] font-semibold text-white"
          >
            Talk to YMG Legal
          </Link>
        </div>
      </div>
    </>
  );
}
