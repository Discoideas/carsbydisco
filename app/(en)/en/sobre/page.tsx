import type { Metadata } from "next";
import Sobre from "@/components/paginas/Sobre";
import { T, alternativosEn } from "@/lib/i18n";

export const metadata: Metadata = {
  title: T.en.sobre.titulo,
  description: T.en.sobre.meta,
  alternates: alternativosEn("/sobre"),
};

export default function Page() {
  return <Sobre lang="en" />;
}
