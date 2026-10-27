import type { Metadata, Viewport } from "next";
import Nav from "@/components/Nav";
import { CONTACTO } from "@/lib/contacto";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://carsbydisco.com"),
  title: {
    default: "carsbydisco — Fotografia automóvel",
    template: "%s — carsbydisco",
  },
  description:
    "Portfólio de fotografia automóvel: provas, eventos e viaturas. Torres Vedras, Região Oeste.",
};

export const viewport: Viewport = {
  themeColor: "#F1F0EC",
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
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        {children}
        <footer className="rodape mono">
          <span>© {new Date().getFullYear()} {CONTACTO.nome}</span>
          <span>carsbydisco.com</span>
        </footer>
      </body>
    </html>
  );
}
