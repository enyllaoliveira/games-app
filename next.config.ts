import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/emersonbroga/nintendo-64-games/main/images/**",
      },
    ],
  },
};

export default nextConfig;
