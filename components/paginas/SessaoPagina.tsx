import Link from "next/link";
import { notFound } from "next/navigation";
import Galeria from "@/components/Galeria";
import { T, caminho, traduzir, type Lang } from "@/lib/i18n";
import { getSessao, getSessoes } from "@/lib/sessoes";

export default function SessaoPagina({ slug, lang }: { slug: string; lang: Lang }) {
  const t = T[lang].sessao;
  const original = getSessao(slug);
  if (!original) notFound();
  const s = traduzir(original, lang);

  const todas = getSessoes();
  const idx = todas.findIndex((x) => x.slug === s.slug);
  const seguinte = traduzir(todas[(idx + 1) % todas.length], lang);

  return (
    <main>
      <section className="intro intro-sessao">
        <Link href={caminho(lang, "/galeria")} className="mono voltar">
          ← {t.voltar}
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
            <li>
              {s.fotos.length} {t.fotos}
            </li>
          </ul>
        </div>
      </section>

      <Galeria fotos={s.fotos} lang={lang} />

      {seguinte.slug !== s.slug && (
        <Link href={caminho(lang, `/galeria/${seguinte.slug}`)} className="proximo">
          <span className="mono">{t.seguinte}</span>
          <span className="titulo-projeto">
            {seguinte.titulo} / {seguinte.numero} →
          </span>
        </Link>
      )}
    </main>
  );
}
