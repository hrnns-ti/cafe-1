import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    '192.168.42.1', 'localhost'
  ]
};

export default nextConfig;
