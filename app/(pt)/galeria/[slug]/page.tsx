import type { Metadata } from "next";
import SessaoPagina from "@/components/paginas/SessaoPagina";
import { alternativos, traduzir } from "@/lib/i18n";
import { getSessao, getSessoes } from "@/lib/sessoes";

export function generateStaticParams() {
  return getSessoes().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const o = getSessao(slug);
  if (!o) return {};
  const s = traduzir(o, "pt");
  return {
    title: `${s.titulo} / ${s.numero}`,
    description: s.descricao,
    alternates: alternativos(`/galeria/${slug}`),
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <SessaoPagina slug={slug} lang="pt" />;
}
