import type { MetadataRoute } from "next";
import { getSessoes } from "@/lib/sessoes";

const BASE = "https://www.carsbydisco.com";

// Mapa do site para o Google: as duas línguas e as fotos de cada sessão.
export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();
  const entrada = (p: string, images?: string[]) =>
    (["pt", "en"] as const).map((l) => ({
      url: `${BASE}${l === "pt" ? p : p === "" ? "/en" : `/en${p}`}`,
      lastModified: agora,
      alternates: { languages: { "pt-PT": `${BASE}${p || "/"}`, en: `${BASE}/en${p}` } },
      ...(images ? { images } : {}),
    }));
  const fixas = ["", "/galeria", "/sobre", "/contacto"].flatMap((p) => entrada(p));
  const sessoes = getSessoes().flatMap((s) =>
    entrada(`/galeria/${s.slug}`, s.fotos.map((f) => `${BASE}${f.src}`)),
  );
  return [...fixas, ...sessoes];
}
