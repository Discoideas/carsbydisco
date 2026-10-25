import BlocoSessao from "@/components/BlocoSessao";
import { CONTACTO } from "@/lib/contacto";
import { getSessoes } from "@/lib/sessoes";

export default function Inicio() {
  const sessoes = getSessoes();

  return (
    <main>
      <section className="intro">
        <p className="mono">Fotografia automóvel / {CONTACTO.zona}</p>
        <h1 className="titulo-grande">
          Carros, pistas
          <br />e detalhes.
        </h1>
      </section>

      <div className="lista-blocos">
        {sessoes.map((s, i) => (
          <BlocoSessao key={s.slug} s={s} invertido={i % 2 === 1} prioridade={i === 0} />
        ))}
      </div>
    </main>
  );
}
