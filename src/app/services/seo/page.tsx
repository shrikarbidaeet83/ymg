import type { Metadata } from "next";
import ChannelPage from "@/components/sections/ChannelPage";
import { channelPages } from "@/data/channel-pages";

export const metadata: Metadata = {
  title: "SEO for Law Firms | YMG Legal",
  description:
    "Search engine optimization for law firms targeting high-value injury, mass tort, and complex legal searches.",
};

export default function SeoPage() {
  return <ChannelPage content={channelPages.seo} />;
}
