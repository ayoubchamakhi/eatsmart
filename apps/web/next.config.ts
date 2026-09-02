import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@eatsmart/design-tokens", "@eatsmart/domain"],
};

export default nextConfig;
