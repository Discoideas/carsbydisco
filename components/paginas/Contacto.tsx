import { CONTACTO } from "@/lib/contacto";
import { T, type Lang } from "@/lib/i18n";

export default function Contacto({ lang }: { lang: Lang }) {
  const t = T[lang];
  const linhas = [
    { rotulo: t.contacto.telefone, texto: CONTACTO.telefoneVisivel, href: `tel:${CONTACTO.telefone}` },
    { rotulo: "WhatsApp", texto: t.contacto.whatsapp, href: `https://wa.me/${CONTACTO.whatsapp}` },
    { rotulo: "Email", texto: CONTACTO.email, href: `mailto:${CONTACTO.email}` },
    ...(CONTACTO.instagram
      ? [{ rotulo: "Instagram", texto: `@${CONTACTO.instagram}`, href: `https://www.instagram.com/${CONTACTO.instagram}/` }]
      : []),
  ];

  return (
    <main>
      <section className="intro">
        <p className="mono">
          {t.contacto.titulo} / {t.zona}
        </p>
        <h1 className="titulo-grande">
          {t.contacto.h1[0]}
          <br />
          {t.contacto.h1[1]}
        </h1>
      </section>
      <section className="texto-pagina">
        <p>{t.contacto.texto}</p>
        <ul className="lista-contactos">
          {linhas.map((l) => (
            <li key={l.rotulo}>
              <span className="mono">{l.rotulo}</span>
              <a href={l.href}>{l.texto} →</a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
