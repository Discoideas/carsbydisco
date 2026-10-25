import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 = qualidade alta nas fotos abertas em ecrã inteiro e na galeria
    qualities: [75, 90],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
