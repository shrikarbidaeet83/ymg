import type { Metadata } from "next";
import ChannelPage from "@/components/sections/ChannelPage";
import { channelPages } from "@/data/channel-pages";

export const metadata: Metadata = {
  title: "Local Services Ads for Law Firms | YMG Legal",
  description:
    "Local Services Ads management for law firms that helps generate ready-to-call legal prospects through Google's pay-per-lead platform.",
};

export default function LocalServicesAdsPage() {
  return <ChannelPage content={channelPages.localServicesAds} />;
}
