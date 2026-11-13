import type { Metadata } from "next";
import ChannelPage from "@/components/sections/ChannelPage";
import { channelPages } from "@/data/channel-pages";

export const metadata: Metadata = {
  title: "Meta Ads for Law Firms | YMG Legal",
  description:
    "Targeted Facebook and Instagram ad campaigns for law firms that generate more qualified legal consultations.",
};

export default function MetaAdsPage() {
  return <ChannelPage content={channelPages.metaAds} />;
}
