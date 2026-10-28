import type { MetadataRoute } from "next";
import { getSessoes } from "@/lib/sessoes";

const BASE = "https://www.carsbydisco.com";

// Mapa do site para o Google: páginas e fotos de cada sessão.
export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();
  const fixas = ["", "/galeria", "/sobre", "/contacto"].map((p) => ({
    url: `${BASE}${p}`,
    lastModified: agora,
  }));
  const sessoes = getSessoes().map((s) => ({
    url: `${BASE}/galeria/${s.slug}`,
    lastModified: agora,
    images: s.fotos.map((f) => `${BASE}${f.src}`),
  }));
  return [...fixas, ...sessoes];
}
