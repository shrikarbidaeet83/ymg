import ChannelBreadcrumb from "@/components/layout/ChannelBreadcrumb";

// On phones the page shifts down slightly to make room for the breadcrumb above the hero.
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative pt-11 sm:pt-0">
      <ChannelBreadcrumb current="Google Ads" />
      {children}
    </div>
  );
}
