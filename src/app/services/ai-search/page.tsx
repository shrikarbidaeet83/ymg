import type { Metadata } from "next";
import ChannelPage from "@/components/sections/ChannelPage";
import { channelPages } from "@/data/channel-pages";

export const metadata: Metadata = {
  title: "AI Search Optimization for Law Firms | YMG Legal",
  description:
    "AI search optimization for law firms that builds authority and helps legal brands earn recommendations across AI-powered search experiences.",
};

export default function AiSearchPage() {
  return <ChannelPage content={channelPages.aiSearch} />;
}
