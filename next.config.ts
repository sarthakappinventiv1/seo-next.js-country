import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
      {
        protocol: "https",
        hostname: "www.dummyimage.co.uk",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "roam.virginconnect.com",
      },
      {
        protocol: "https",
        hostname: "roam-dev.virginconnect.com",
      }
      
    ]
  },
  typescript:{
    ignoreBuildErrors: true
  }
};

export default nextConfig;
