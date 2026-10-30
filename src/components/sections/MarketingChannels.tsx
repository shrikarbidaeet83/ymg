import Link from "next/link";
import { ArrowRight, Bot, Globe, MapPin, MousePointerClick, Search, Share2, ThumbsUp, type LucideIcon } from "lucide-react";
import SearchToLead from "@/components/illustrations/SearchToLead";

// The seven channel pages under Law Firm Marketing (content guide), grouped as in the header menu.
const groups: { title: string; channels: { name: string; body: string; href: string; Icon: LucideIcon }[] }[] = [
  {
    title: "Paid advertising",
    channels: [
      { name: "Google Ads", body: "Reach people searching for legal help right now.", href: "/services/google-search-ads", Icon: MousePointerClick },
      { name: "Meta Ads", body: "Targeted Facebook and Instagram campaigns for your case types.", href: "/services/meta-ads", Icon: ThumbsUp },
      { name: "Local Services Ads", body: "Appear first in Google's pay-per-lead local results.", href: "/services/local-services-ads", Icon: MapPin },
    ],
  },
  {
    title: "Organic & web",
    channels: [
      { name: "SEO", body: "Rank for high-value searches without paying per click.", href: "/services/seo", Icon: Search },
      { name: "AI Search", body: "Get recommended by AI-powered search experiences.", href: "/services/ai-search", Icon: Bot },
      { name: "Organic Social", body: "Consistent content that builds trust and referrals.", href: "/services/organic-social-media", Icon: Share2 },
      { name: "Website Design", body: "Fast, conversion-focused sites and landing pages.", href: "/services/website-design", Icon: Globe },
    ],
  },
];

export default function MarketingChannels() {
  return (
    <section className="ymg-section-padding bg-[#FFF5E0]">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-12">
          <div>
            <h2 className="text-[2rem] leading-[1.1] text-[#2f3236] sm:text-[2.5rem]">Marketing channels we manage</h2>
            <p className="mt-4 text-[1.06rem] leading-[1.6] text-[#5e6064]">
              Campaigns run across the channels your potential clients actually use, with no single-channel dependency.
              Pick a channel to see how we run it.
            </p>
          </div>
          <SearchToLead />
        </div>

        <div className="mt-12 grid gap-10">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-[1.3rem] text-[#2f3236]">{group.title}</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {group.channels.map(({ name, body, href, Icon }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="group flex h-full flex-col rounded-[16px] border border-[#ece2cc] bg-white p-5 transition-colors hover:border-[#c9a14f]"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fbf0d9] text-[#8a6420]">
                        <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <span className="mt-4 font-heading text-[1.2rem] text-[#2f3236]">{name}</span>
                      <span className="mt-1.5 text-[0.95rem] leading-[1.5] text-[#5e6064]">{body}</span>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[0.92rem] font-semibold text-[#8a6420]">
                        Learn more <ArrowRight size={15} strokeWidth={1.8} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
