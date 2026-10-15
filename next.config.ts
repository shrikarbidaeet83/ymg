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
    ];
  },
};

export default nextConfig;
