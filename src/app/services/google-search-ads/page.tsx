import type { Metadata } from "next";
import ChannelPage from "@/components/sections/ChannelPage";
import { channelPages } from "@/data/channel-pages";

export const metadata: Metadata = {
  title: "Google Search Ads for Law Firms | YMG Legal",
  description:
    "Strategic Google Search Ads for law firms that generate qualified phone calls, form submissions, and high-intent legal cases.",
};

export default function GoogleSearchAdsPage() {
  return <ChannelPage content={channelPages.googleAds} />;
}
