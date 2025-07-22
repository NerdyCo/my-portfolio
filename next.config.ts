import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ["img.icons8.com", "placehold.co"],
  },
};

export default nextConfig;
