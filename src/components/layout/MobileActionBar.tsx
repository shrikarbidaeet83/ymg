import Link from "next/link";

// Phones only: keeps booking a call within thumb reach on every page.
// The spacer stops the fixed bar from covering the end of the footer.
export default function MobileActionBar() {
  return (
    <>
      <div aria-hidden="true" className="h-[76px] min-[900px]:hidden" />
      <div className="ymg-mobile-action-bar fixed inset-x-0 bottom-0 z-40 border-t border-[#ead3a0] bg-[#FFF5E0]/95 px-4 pb-[calc(env(safe-area-inset-bottom,0px)+12px)] pt-3 backdrop-blur-sm min-[900px]:hidden">
        <div className="mx-auto flex max-w-[560px] gap-3">
          <Link
            href="/contact#booking"
            className="flex h-12 flex-1 items-center justify-center rounded-[8px] bg-[#3d4145] text-[0.98rem] font-semibold text-white"
          >
            Book a free strategy call
          </Link>
        </div>
      </div>
    </>
  );
}
