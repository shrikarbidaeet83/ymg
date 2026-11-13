import Image from "next/image";

/*
 * The photo behind a dark hero: tinted into the evergreen, slowly drifting, and faded to solid on the
 * text side and at the bottom, so the headline always reads. Pick a photo that matches the page's scope.
 *
 * `ambient`: for heroes that already show a photo card. A second sharp copy of a photo behind the card
 * reads as a ghost, so the photo is blurred into soft light instead: its colours glow around the card
 * without any detail competing with it.
 */
export default function HeroBackdrop({
  src,
  ambient = false,
}: {
  src: string;
  ambient?: boolean;
}) {
  if (ambient) {
    return (
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden bg-[#0B231D]"
      >
        <div className="absolute inset-y-[-15%] right-[-10%] w-[85%] md:w-[70%]">
          <Image
            src={src}
            alt=""
            fill
            sizes="40vw"
            unoptimized={src.startsWith("http")}
            className="ymg-hero-drift scale-125 object-cover opacity-[0.55] blur-[70px] saturate-[0.8]"
          />
        </div>
        <div className="absolute inset-0 bg-[#0B231D]/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#0B231D_0%,rgba(11,35,29,0.85)_30%,rgba(11,35,29,0)_75%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0B231D] to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(45%_55%_at_75%_45%,rgba(214,178,99,0.1),transparent_70%)]" />
      </div>
    );
  }
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 overflow-hidden bg-[#0B231D]"
    >
      <Image
        src={src}
        alt=""
        fill
        priority
        sizes="100vw"
        unoptimized={src.startsWith("http")}
        className="ymg-hero-drift object-cover opacity-[0.45] mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-[#0B231D]/35 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#0B231D_0%,rgba(11,35,29,0.78)_35%,rgba(11,35,29,0.22)_100%)]" />
      {/* Phones set text across the full width, so the photo sits a step quieter there */}
      <div className="absolute inset-0 bg-[#0B231D]/40 md:hidden" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0B231D] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(55%_55%_at_80%_40%,rgba(214,178,99,0.12),transparent_70%)]" />
    </div>
  );
}
