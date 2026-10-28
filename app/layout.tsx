import type { Metadata, Viewport } from "next";
import Nav from "@/components/Nav";
import { CONTACTO } from "@/lib/contacto";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.carsbydisco.com"),
  title: {
    default: "carsbydisco — Fotografia automóvel",
    template: "%s — carsbydisco",
  },
  description:
    "Car’s by Disco: portfólio de fotografia automóvel de André Lourenço. Paddock, provas e trackdays no Autódromo do Estoril e em Portimão.",
  alternates: { canonical: "/" },
  openGraph: { siteName: "Car’s by Disco", locale: "pt_PT", type: "website" },
};

// Dados estruturados: dizem ao Google quem é o autor, o nome do site e o logótipo
const DADOS = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.carsbydisco.com/#site",
      name: "Car’s by Disco",
      alternateName: ["carsbydisco", "CarsByDisco"],
      url: "https://www.carsbydisco.com/",
      inLanguage: "pt-PT",
      publisher: { "@id": "https://www.carsbydisco.com/#autor" },
    },
    {
      "@type": "Person",
      "@id": "https://www.carsbydisco.com/#autor",
      name: "André Lourenço",
      alternateName: "Disco",
      jobTitle: "Fotógrafo automóvel",
      url: "https://www.carsbydisco.com/sobre",
      image: "https://www.carsbydisco.com/icon.png",
      email: `mailto:${CONTACTO.email}`,
      address: { "@type": "PostalAddress", addressLocality: "Torres Vedras", addressCountry: "PT" },
      sameAs: [`https://www.instagram.com/${CONTACTO.instagram}/`],
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(DADOS) }}
        />
        <Nav />
        {children}
        <footer className="rodape mono">
          <span>© {new Date().getFullYear()} {CONTACTO.nome}</span>
          <a href={`https://www.instagram.com/${CONTACTO.instagram}/`} target="_blank" rel="noopener noreferrer">
            Instagram @{CONTACTO.instagram} →
          </a>
        </footer>
      </body>
    </html>
  );
}
