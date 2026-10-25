import type { Metadata } from "next";
import CartaoSessao from "@/components/CartaoSessao";
import { getSessoes } from "@/lib/sessoes";

export const metadata: Metadata = { title: "Galeria" };

export default function GaleriaPage() {
  const sessoes = getSessoes();
  return (
    <main className="secao">
      <h1 className="titulo-pagina">Galeria</h1>
      <p className="subtitulo">Cada sessão é um evento ou um dia de fotografia.</p>
      <div className="grelha-cartoes">
        {sessoes.map((s, i) => (
          <CartaoSessao key={s.slug} s={s} prioridade={i < 2} />
        ))}
      </div>
    </main>
  );
}
