import BlocoSessao from "@/components/BlocoSessao";
import { T, traduzir, type Lang } from "@/lib/i18n";
import { getSessoes } from "@/lib/sessoes";

export default function Inicio({ lang }: { lang: Lang }) {
  const t = T[lang];
  const sessoes = getSessoes().map((s) => traduzir(s, lang));
  return (
    <main>
      <section className="intro">
        <p className="mono">
          {t.inicio.kicker} / {t.zona}
        </p>
        <h1 className="titulo-grande">
          {t.inicio.titulo[0]}
          <br />
          {t.inicio.titulo[1]}
        </h1>
      </section>
      <div className="lista-blocos">
        {sessoes.map((s, i) => (
          <BlocoSessao key={s.slug} s={s} lang={lang} invertido={i % 2 === 1} prioridade={i === 0} />
        ))}
      </div>
    </main>
  );
}
