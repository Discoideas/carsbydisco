import type { Metadata } from "next";
import Link from "next/link";
import { CONTACTO } from "@/lib/contacto";

export const metadata: Metadata = { title: "Sobre mim" };

export default function SobrePage() {
  return (
    <main className="secao estreito">
      <h1 className="titulo-pagina">Sobre mim</h1>
      <div className="texto-corrido">
        <p>
          Sou o {CONTACTO.nome}, tenho 21 anos e vivo na zona de Torres Vedras.
          Fotografo carros: provas e eventos no Autódromo do Estoril, e viaturas
          para venda.
        </p>
        <p>
          Trabalho em marketing e redes sociais num stand automóvel, onde faço a
          fotografia, o vídeo e os anúncios das viaturas. Também desenvolvo sites,
          incluindo este.
        </p>
        <p>[Escreve aqui, por palavras tuas, porque fotografas carros e o que procuras.]</p>
      </div>
      <Link href="/contacto" className="btn btn-primary">
        Contactar
      </Link>
    </main>
  );
}
