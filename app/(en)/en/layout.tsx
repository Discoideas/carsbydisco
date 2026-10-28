import type { Metadata, Viewport } from "next";
import Estrutura from "@/components/Estrutura";
import { T, alternativosEn } from "@/lib/i18n";
import "../../globals.css";

const t = T.en.site;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.carsbydisco.com"),
  title: { default: t.titulo, template: "%s — carsbydisco" },
  description: t.meta,
  alternates: alternativosEn("/"),
  openGraph: { siteName: "Car’s by Disco", locale: t.locale, type: "website" },
};

export const viewport: Viewport = { themeColor: "#F1F0EC" };

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <Estrutura lang="en">{children}</Estrutura>;
}
