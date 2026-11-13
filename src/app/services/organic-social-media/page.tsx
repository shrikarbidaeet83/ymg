import type { Metadata } from "next";
import ChannelPage from "@/components/sections/ChannelPage";
import { channelPages } from "@/data/channel-pages";

export const metadata: Metadata = {
  title: "Organic Social Media for Law Firms | YMG Legal",
  description:
    "Organic social media marketing for law firms that builds credibility, trust, visibility, and consistent case acquisition.",
};

export default function OrganicSocialMediaPage() {
  return <ChannelPage content={channelPages.organicSocial} />;
}
