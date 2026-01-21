import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fix image quality warning (because you used quality={90})
  images: {
    qualities: [75, 90, 92],
  },

  // Fix the "workspace root inferred" issue (important!)
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
