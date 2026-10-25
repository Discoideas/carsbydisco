import type { Metadata, Viewport } from "next";
import Nav from "@/components/Nav";
import { CONTACTO } from "@/lib/contacto";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://carsbydisco.com"),
  title: {
    default: `${CONTACTO.nome} — Fotografia automóvel`,
    template: `%s — ${CONTACTO.nome}`,
  },
  description:
    "Portfólio de fotografia automóvel: eventos, provas e viaturas. Torres Vedras, Região Oeste.",
};

export const viewport: Viewport = {
  themeColor: "#111214",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Barlow:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        {children}
        <footer className="rodape">
          <span>© {new Date().getFullYear()} {CONTACTO.nome}</span>
          <span>{CONTACTO.zona}</span>
        </footer>
      </body>
    </html>
  );
}
