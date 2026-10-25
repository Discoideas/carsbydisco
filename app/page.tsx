import Image from "next/image";
import Link from "next/link";
import CartaoSessao from "@/components/CartaoSessao";
import { getSessoes } from "@/lib/sessoes";

export default function Inicio() {
  const sessoes = getSessoes();
  const destaque = sessoes[0]?.capaFoto;

  return (
    <main>
      {destaque && (
        <section className="hero">
          <Image
            src={destaque.src}
            alt={destaque.alt}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "60% 40%" }}
          />
          <div className="hero-sombra" />
          <div className="hero-texto">
            <h1>Fotografia automóvel</h1>
            <p>Provas, eventos e viaturas, vistos de perto.</p>
            <Link href="/galeria" className="btn btn-primary">
              Ver galeria
            </Link>
          </div>
        </section>
      )}

      <section className="secao">
        <div className="secao-topo">
          <h2>Sessões recentes</h2>
          <Link href="/galeria" className="ver-tudo">
            Ver todas →
          </Link>
        </div>
        <div className="grelha-cartoes">
          {sessoes.slice(0, 4).map((s, i) => (
            <CartaoSessao key={s.slug} s={s} prioridade={i === 0} />
          ))}
        </div>
      </section>

      <section className="secao faixa-contacto">
        <h2>Tens um carro ou evento para fotografar?</h2>
        <Link href="/contacto" className="btn btn-primary">
          Falar comigo
        </Link>
      </section>
    </main>
  );
}
