import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lumynxr-cdn.azureedge.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;