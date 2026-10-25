import type { Metadata } from "next";
import Link from "next/link";
import { CONTACTO } from "@/lib/contacto";

export const metadata: Metadata = { title: "Sobre" };

export default function SobrePage() {
  return (
    <main>
      <section className="intro">
        <p className="mono">Sobre / {CONTACTO.zona}</p>
        <h1 className="titulo-grande">
          Cada linha
          <br />
          conta.
        </h1>
      </section>
      <section className="texto-pagina">
        <p>
          Sou o {CONTACTO.nome}. Fotografo carros: provas e bastidores no Autódromo
          do Estoril, e viaturas para venda, com atenção à luz, à forma e ao detalhe.
        </p>
        <p>[Escreve aqui, por palavras tuas, porque fotografas carros e o que procuras.]</p>
        <Link href="/contacto" className="botao">
          Marcar sessão →
        </Link>
      </section>
    </main>
  );
}
