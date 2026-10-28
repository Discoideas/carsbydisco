import path from "node:path";
import sharp from "sharp";
import { getSessao, getSessoes } from "@/lib/sessoes";

// Imagem que aparece ao partilhar o link de uma sessão (Instagram, WhatsApp...):
// a capa da sessão, recortada a 1200x630 com o mesmo enquadramento da capa no site.
export const size = { width: 1200, height: 630 };
export const contentType = "image/jpeg";
export const alt = "Session cover";

export function generateStaticParams() {
  return getSessoes().map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSessao(slug) ?? getSessoes()[0];
  const ficheiro = path.join(process.cwd(), "public", s.capaFoto.src);

  const [px, py] = (s.capaPosicao ?? "50% 50%").split(" ").map((v) => parseFloat(v) / 100);
  const escala = Math.max(size.width / s.capaFoto.width, size.height / s.capaFoto.height);
  const w = Math.round(s.capaFoto.width * escala);
  const h = Math.round(s.capaFoto.height * escala);

  const buf = await sharp(ficheiro)
    .resize(w, h)
    .extract({
      left: Math.round((w - size.width) * px),
      top: Math.round((h - size.height) * py),
      width: size.width,
      height: size.height,
    })
    .jpeg({ quality: 85 })
    .toBuffer();

  return new Response(new Uint8Array(buf), { headers: { "Content-Type": contentType } });
}
