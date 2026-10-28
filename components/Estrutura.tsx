import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "@/components/Nav";
import { CONTACTO } from "@/lib/contacto";
import { T, type Lang } from "@/lib/i18n";

const BASE = "https://www.carsbydisco.com";

// <html> comum às duas línguas: tipo de letra, dados para o Google, menu e rodapé
export default function Estrutura({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const t = T[lang];
  const dados = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${BASE}/#site`,
        name: "Car’s by Disco",
        alternateName: ["carsbydisco", "CarsByDisco"],
        url: `${BASE}/`,
        inLanguage: ["pt-PT", "en"],
        publisher: { "@id": `${BASE}/#autor` },
      },
      {
        "@type": "Person",
        "@id": `${BASE}/#autor`,
        name: "André Lourenço",
        alternateName: "Disco",
        jobTitle: t.site.cargo,
        url: lang === "pt" ? `${BASE}/sobre` : `${BASE}/en/sobre`,
        image: `${BASE}/icon.png`,
        email: `mailto:${CONTACTO.email}`,
        address: { "@type": "PostalAddress", addressLocality: "Torres Vedras", addressCountry: "PT" },
        sameAs: [`https://www.instagram.com/${CONTACTO.instagram}/`],
      },
    ],
  };

  return (
    <html lang={lang === "pt" ? "pt-PT" : "en"}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dados) }} />
        <Nav lang={lang} />
        {children}
        <footer className="rodape mono">
          <span>
            © {new Date().getFullYear()} {CONTACTO.nome}
          </span>
          <a href={`https://www.instagram.com/${CONTACTO.instagram}/`} target="_blank" rel="noopener noreferrer">
            Instagram @{CONTACTO.instagram} →
          </a>
        </footer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
