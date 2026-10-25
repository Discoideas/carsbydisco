import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Galeria from "@/components/Galeria";
import { getSessao, getSessoes } from "@/lib/sessoes";

export function generateStaticParams() {
  return getSessoes().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getSessao(slug);
  return s ? { title: s.titulo, description: s.descricao } : {};
}

export default async function SessaoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getSessao(slug);
  if (!s) notFound();

  return (
    <main className="secao">
      <Link href="/galeria" className="voltar">
        ← Galeria
      </Link>
      <h1 className="titulo-pagina">{s.titulo}</h1>
      <p className="subtitulo">
        {s.local} · {s.data} · {s.fotos.length} fotos
      </p>
      {s.descricao && <p className="descricao">{s.descricao}</p>}
      <Galeria fotos={s.fotos} />
    </main>
  );
}
