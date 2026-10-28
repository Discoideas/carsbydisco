import type { Metadata } from "next";
import BlocoSessao from "@/components/BlocoSessao";
import { getSessoes } from "@/lib/sessoes";

export const metadata: Metadata = {
  title: "Trabalho",
  description: "Fotos de um entusiasta e fotógrafo amador. Todas as sessões: Paddock, GTWC, GT Open, Estoril Classics, Winter Series e Porsche Sprint Challenge, no Estoril e em Portimão.",
  alternates: { canonical: "/galeria" },
};

export default function GaleriaPage() {
  const sessoes = getSessoes();
  return (
    <main>
      <section className="intro">
        <p className="mono">Índice / {String(sessoes.length).padStart(2, "0")} sessões</p>
        <h1 className="titulo-grande">Trabalho</h1>
      </section>
      <div className="lista-blocos">
        {sessoes.map((s, i) => (
          <BlocoSessao key={s.slug} s={s} invertido={i % 2 === 1} prioridade={i === 0} />
        ))}
      </div>
    </main>
  );
}
