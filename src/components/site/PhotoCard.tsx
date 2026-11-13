import Image from "next/image";
import { Check } from "lucide-react";

/*
 * A photo with its key points on white cards that sit across the bottom edge: about 40% over the photo,
 * 60% below it: side by side when the photo is wide, stacked when it is narrow. Every photo on the page uses this one placement.
 */
export default function PhotoCard({
  photo,
  highlights,
  sizes,
  aspect = "aspect-[5/4]",
  className = "",
  priority = false,
}: {
  photo: { src: string; alt: string };
  highlights: string[];
  sizes: string;
  aspect?: string;
  className?: string;
  /** Load at once: set it for a photo in the first screen. */
  priority?: boolean;
}) {
  return (
    <figure className={`@container ${className}`}>
      <div className={highlights.length > 1 ? "pb-36 @[30rem]:pb-12" : "pb-12"}>
        <div className="relative">
          <div
            className={`relative overflow-hidden rounded-[26px] bg-[#0B231D] ${aspect}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes={sizes}
              priority={priority}
              className="object-cover"
            />
          </div>
          <figcaption
            className={`absolute inset-x-3 bottom-0 grid gap-3 @[30rem]:inset-x-5 ${
              highlights.length > 1
                ? "translate-y-[calc(100%-1.75rem)] grid-cols-1 @[30rem]:translate-y-[60%] @[30rem]:grid-cols-2"
                : "translate-y-[60%] grid-cols-1 @[30rem]:max-w-[24rem]"
            }`}
          >
            {highlights.map((h) => (
              <span
                key={h}
                className="flex items-center gap-2.5 rounded-[14px] bg-white px-3 py-2.5 text-[0.86rem] font-semibold leading-tight text-[#0B231D] shadow-[0_18px_40px_rgba(11,35,29,0.16)] [text-wrap:balance] @[44rem]:px-3.5 @[44rem]:text-[0.94rem]"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1E9E6A] text-white">
                  <Check size={13} strokeWidth={3} aria-hidden="true" />
                </span>
                {/* Non-breaking hyphens, so "US-based" never splits across lines */}
                {h.replace(/-/g, "‑")}
              </span>
            ))}
          </figcaption>
        </div>
      </div>
    </figure>
  );
}
