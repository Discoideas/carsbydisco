import type { Metadata } from "next";
import { CONTACTO } from "@/lib/contacto";

export const metadata: Metadata = { title: "Contacto" };

export default function ContactoPage() {
  return (
    <main className="secao estreito">
      <h1 className="titulo-pagina">Contacto</h1>
      <p className="subtitulo">
        Sessões de fotografia, eventos ou viaturas para venda. Respondo no próprio
        dia.
      </p>
      <div className="contactos">
        <a className="btn btn-primary" href={`tel:${CONTACTO.telefone}`}>
          Ligar {CONTACTO.telefoneVisivel}
        </a>
        <a className="btn btn-outline" href={`https://wa.me/${CONTACTO.whatsapp}`}>
          WhatsApp
        </a>
        <a className="btn btn-outline" href={`mailto:${CONTACTO.email}`}>
          {CONTACTO.email}
        </a>
        {CONTACTO.instagram && (
          <a
            className="btn btn-outline"
            href={`https://instagram.com/${CONTACTO.instagram}`}
          >
            Instagram @{CONTACTO.instagram}
          </a>
        )}
      </div>
      <p className="subtitulo">{CONTACTO.zona}</p>
    </main>
  );
}
