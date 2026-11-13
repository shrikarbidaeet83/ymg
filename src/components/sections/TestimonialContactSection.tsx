import ContactConversationContent from "@/components/sections/ContactConversationContent";
import ReviewCarousel, { type Review } from "@/components/sections/ReviewCarousel";
import { cms } from "@/lib/cms";
import { SHOW_TESTIMONIALS } from "@/data/site-flags";

// PLACEHOLDER reviews (see src/data/social-proof.ts): replace with real, approved client quotes before launch.
const builtInTestimonials: Review[] = [
  {
    title: "From chasing leads to signing cases",
    name: "Managing Partner",
    firm: "Bergson Legal",
    text: "YMG Legal completely transformed our intake and lead quality. We went from chasing leads to consistently signing qualified cases every week.",
  },
  {
    title: "Our team finally focuses on cases",
    name: "Founder",
    firm: "Orion Law",
    text: "Their system works. From lead generation to intake, everything is streamlined. Our team now focuses on closing cases instead of filtering bad leads.",
  },
  {
    title: "Better than every agency before",
    name: "Partner",
    firm: "Westline Injury",
    text: "We worked with multiple marketing agencies before, but none delivered results like this. The reporting, quality, and consistency are excellent.",
  },
  {
    title: "Intake that screens properly",
    name: "Partner",
    firm: "Injury Law Group",
    text: "The biggest difference is their intake team. Every lead is handled professionally, and we only speak with serious, qualified clients.",
  },
  {
    title: "More signed retainers in 60 days",
    name: "Attorney",
    firm: "Casebridge Law",
    text: "In the first 60 days, we saw a significant increase in signed retainers. YMG understands legal marketing because they are a true partner.",
  },
];

// When the site is connected to the YMG CMS, its testimonials (featured first) replace the built-in
// ones. Firm name comes from the CMS "Location".
export const testimonials: Review[] = cms.enabled
  ? cms.testimonials.map((t) => ({ name: t.title, firm: t.location || t.caseType, text: t.quote }))
  : builtInTestimonials;

export function TestimonialCardsShowcase({
  className = "",
  showAllLink = true,
  sand = false,
  children,
}: {
  className?: string;
  showAllLink?: boolean;
  /** The home page sets the reviews on the sand tone. */
  sand?: boolean;
  /** Extra proof shown under the reviews (the home page adds the client result). */
  children?: React.ReactNode;
}) {
  if (!SHOW_TESTIMONIALS || testimonials.length === 0) return null;
  return (
    <section className={`ymg-reviews ymg-section-padding relative ${sand ? "ymg-tone-sand bg-[#F6E9CC]" : "bg-[#FFF5E0]"} dark:bg-[#191917] ${className}`}>
      <div className="mx-auto max-w-[1240px]">
        <ReviewCarousel reviews={testimonials} showAllLink={showAllLink} />
        {children}
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
  const contactOnly = contactVariant === "home";

  return (
    <>
      {/* Testimonials need written permission first; the flag lives in src/data/site-flags.ts. */}
      {showTestimonials && <TestimonialCardsShowcase />}
      <section
        className={`${contactOnly ? "ymg-section-padding-x py-0" : "ymg-section-padding"} relative isolate overflow-hidden bg-[#404040] text-[#d9b46d] ${contactVariant === "home" ? "pb-0" : ""}`}
        style={contactVariant === "home" ? { paddingBottom: 0 } : undefined}
      >
        <div className={`relative z-10 mx-auto ${contactOnly ? "max-w-[1160px]" : "max-w-7xl"}`}>
          <ContactConversationContent variant="gold" fullBleed />
        </div>
      </section>
    </>
  );
}
