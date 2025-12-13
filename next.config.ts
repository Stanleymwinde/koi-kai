import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  // images: {
  //   unoptimized: true,
  // },
  webpack: (config, { isServer }) => {
    config.infrastructureLogging = {
      level: "error", // Suppress warnings and only show errors
    };

    return config;
  },
};

export default nextConfig;
