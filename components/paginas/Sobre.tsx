import Link from "next/link";
import { CONTACTO } from "@/lib/contacto";
import { T, caminho, type Lang } from "@/lib/i18n";

export default function Sobre({ lang }: { lang: Lang }) {
  const t = T[lang];
  return (
    <main>
      <section className="intro">
        <p className="mono">
          {t.sobre.titulo} / {t.zona}
        </p>
        <h1 className="titulo-grande">
          {t.sobre.h1[0]}
          <br />
          {t.sobre.h1[1]}
        </h1>
      </section>
      <section className="texto-pagina">
        <p>{t.sobre.texto}</p>
        <figure className="assinatura">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assinatura.png" alt={t.sobre.assinatura} width={549} height={275} />
          <figcaption className="mono">André Lourenço “Disco”</figcaption>
        </figure>
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
        <Link href={caminho(lang, "/contacto")} className="botao">
          {t.sobre.botao}
        </Link>
      </section>
    </main>
  );
}
