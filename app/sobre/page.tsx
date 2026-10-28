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
          A minha visão
          <br />
          do automóvel.
        </h1>
      </section>
      <section className="texto-pagina">
        <p>
          Sou o André Lourenço, tenho 21 anos, mais conhecido por “Disco”, amante do
          mundo automóvel e do desporto motorizado, partilhando as minhas fotos
          amadoras de forma a poder documentar a minha evolução enquanto
          fotógrafo/criador de conteúdos do mundo automóvel, de um entusiasta para
          entusiastas.
        </p>
        <p>
          <a
            href={`https://www.instagram.com/${CONTACTO.instagram}/`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}
          >
            Instagram @{CONTACTO.instagram} →
          </a>
        </p>
        <Link href="/contacto" className="botao">
          Marcar sessão →
        </Link>
      </section>
    </main>
  );
}
