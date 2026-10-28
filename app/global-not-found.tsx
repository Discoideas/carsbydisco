import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "404 — carsbydisco" };

// Página de erro para endereços que não existem (nas duas línguas)
export default function GlobalNotFound() {
  return (
    <html lang="pt-PT">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main className="intro">
          <p className="mono">404</p>
          <h1 className="titulo-grande">
            Página
            <br />
            não encontrada.
          </h1>
          <p className="mono" style={{ marginTop: 24 }}>Page not found.</p>
          <p style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="/" className="botao">Voltar ao início →</a>
            <a href="/en" className="botao">Back to home →</a>
          </p>
        </main>
      </body>
    </html>
  );
}
