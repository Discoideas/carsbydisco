import type { Metadata } from "next";
import { CONTACTO } from "@/lib/contacto";

export const metadata: Metadata = { title: "Contacto" };

export default function ContactoPage() {
  const linhas = [
    { rotulo: "Telefone", texto: CONTACTO.telefoneVisivel, href: `tel:${CONTACTO.telefone}` },
    { rotulo: "WhatsApp", texto: "Enviar mensagem", href: `https://wa.me/${CONTACTO.whatsapp}` },
    { rotulo: "Email", texto: CONTACTO.email, href: `mailto:${CONTACTO.email}` },
    ...(CONTACTO.instagram
      ? [{ rotulo: "Instagram", texto: `@${CONTACTO.instagram}`, href: `https://instagram.com/${CONTACTO.instagram}` }]
      : []),
  ];

  return (
    <main>
      <section className="intro">
        <p className="mono">Contacto / {CONTACTO.zona}</p>
        <h1 className="titulo-grande">
          Marcar
          <br />
          sessão.
        </h1>
      </section>
      <section className="texto-pagina">
        <p>Eventos, provas ou viaturas para venda. Respondo no próprio dia.</p>
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
