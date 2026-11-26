import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export → produces an `out/` folder of plain HTML/CSS/JS for
  // Cloudflare Pages (and any static host).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
