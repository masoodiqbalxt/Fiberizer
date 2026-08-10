import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/imagineering-technologies',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
