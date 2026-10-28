import type { Metadata } from "next";
import { CONTACTO } from "@/lib/contacto";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacto de André Lourenço “Disco”, entusiasta e fotógrafo amador: telefone, WhatsApp, email e Instagram @carsbydisco.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  const linhas = [
    { rotulo: "Telefone", texto: CONTACTO.telefoneVisivel, href: `tel:${CONTACTO.telefone}` },
    { rotulo: "WhatsApp", texto: "Enviar mensagem", href: `https://wa.me/${CONTACTO.whatsapp}` },
    { rotulo: "Email", texto: CONTACTO.email, href: `mailto:${CONTACTO.email}` },
    ...(CONTACTO.instagram
      ? [{ rotulo: "Instagram", texto: `@${CONTACTO.instagram}`, href: `https://www.instagram.com/${CONTACTO.instagram}/` }]
      : []),
  ];

  return (
    <main>
      <section className="intro">
        <p className="mono">Contacto / {CONTACTO.zona}</p>
        <h1 className="titulo-grande">
          Falar
          <br />
          comigo.
        </h1>
      </section>
      <section className="texto-pagina">
        <p>Sou um entusiasta e fotógrafo amador. Para falar sobre carros, eventos ou as minhas fotos, estes são os meus contactos.</p>
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
