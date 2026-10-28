import BlocoSessao from "@/components/BlocoSessao";
import { T, traduzir, type Lang } from "@/lib/i18n";
import { getSessoes } from "@/lib/sessoes";

export default function Trabalho({ lang }: { lang: Lang }) {
  const t = T[lang].trabalho;
  const sessoes = getSessoes().map((s) => traduzir(s, lang));
  return (
    <main>
      <section className="intro">
        <p className="mono">
          {t.indice} / {String(sessoes.length).padStart(2, "0")} {t.sessoes}
        </p>
        <h1 className="titulo-grande">{t.titulo}</h1>
      </section>
      <div className="lista-blocos">
        {sessoes.map((s, i) => (
          <BlocoSessao key={s.slug} s={s} lang={lang} invertido={i % 2 === 1} prioridade={i === 0} />
        ))}
      </div>
    </main>
  );
}
