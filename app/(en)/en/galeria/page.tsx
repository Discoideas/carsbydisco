import type { Metadata } from "next";
import Trabalho from "@/components/paginas/Trabalho";
import { T, alternativosEn } from "@/lib/i18n";

export const metadata: Metadata = {
  title: T.en.trabalho.titulo,
  description: T.en.trabalho.meta,
  alternates: alternativosEn("/galeria"),
};

export default function Page() {
  return <Trabalho lang="en" />;
}
