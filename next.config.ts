import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.psecn.photoshelter.com',
        pathname: '/**',
      },
    ],
    // Uncomment the line below if images still don't load on Netlify
    // unoptimized: true,
  },
};

export default nextConfig;
