import type { Metadata } from "next";
import ChannelPage from "@/components/sections/ChannelPage";
import { channelPages } from "@/data/channel-pages";

export const metadata: Metadata = {
  title: "Website Design for Law Firms | YMG Legal",
  description:
    "High-performance WordPress website design for law firms built to rank, convert, and grow.",
};

export default function WebsiteDesignPage() {
  return <ChannelPage content={channelPages.websiteDesign} />;
}
