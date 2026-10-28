import type { Metadata } from "next";
import Sobre from "@/components/paginas/Sobre";
import { T, alternativos } from "@/lib/i18n";

export const metadata: Metadata = {
  title: T.pt.sobre.titulo,
  description: T.pt.sobre.meta,
  alternates: alternativos("/sobre"),
};

export default function Page() {
  return <Sobre lang="pt" />;
}
