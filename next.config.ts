import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  allowedDevOrigins: ["172.168.10.5"],
  async redirects() {
    return [
      {
        source: "/services/digital-marketing",
        destination: "/services/law-firm-marketing",
        permanent: true,
      },
      // Old site's privacy URL: SMS carrier (10DLC) registrations may still point here.
      { source: "/privacy-policy.html", destination: "/privacy-policy", permanent: true },
      // Unlisted pages whose content now lives in the main service pages (code kept).
      { source: "/services/case-acquisition", destination: "/services", permanent: true },
      { source: "/services/legal-answering", destination: "/services/legal-intake", permanent: true },
    ];
  },
};

export default nextConfig;
