import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ["img.icons8.com", "cdn.sanity.io"],
  },
};

export default nextConfig;
