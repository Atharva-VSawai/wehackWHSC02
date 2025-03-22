import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    allowedDevOrigins: ["https://ewaste.loca.lt"], // Add LocalTunnel URL
  },
};

export default nextConfig;
