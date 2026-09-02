import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.STANDALONE === "true" ? { output: "standalone" as const } : {}),
  reactStrictMode: true,
  transpilePackages: ["@eatsmart/design-tokens", "@eatsmart/domain"],
};

export default nextConfig;
