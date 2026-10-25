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

  const todas = getSessoes();
  const idx = todas.findIndex((x) => x.slug === s.slug);
  const seguinte = todas[(idx + 1) % todas.length];

  return (
    <main>
      <section className="intro intro-sessao">
        <Link href="/galeria" className="mono voltar">
          ← Trabalho
        </Link>
        <h1 className="titulo-grande">
          {s.titulo} / {s.numero}
        </h1>
        <div className="intro-meta">
          <p className="mono">
            {s.categoria} / {s.data}
          </p>
          {s.descricao && <p className="bloco-desc">{s.descricao}</p>}
          <ul className="mono etiquetas">
            <li>{s.local}</li>
            <li>{s.fotos.length} fotos</li>
          </ul>
        </div>
      </section>

      <Galeria fotos={s.fotos} />

      {seguinte && seguinte.slug !== s.slug && (
        <Link href={`/galeria/${seguinte.slug}`} className="proximo">
          <span className="mono">Seguinte</span>
          <span className="titulo-projeto">
            {seguinte.titulo} / {seguinte.numero} →
          </span>
        </Link>
      )}
    </main>
  );
}
