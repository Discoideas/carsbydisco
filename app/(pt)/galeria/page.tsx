import type { Metadata } from "next";
import Trabalho from "@/components/paginas/Trabalho";
import { T, alternativos } from "@/lib/i18n";

export const metadata: Metadata = {
  title: T.pt.trabalho.titulo,
  description: T.pt.trabalho.meta,
  alternates: alternativos("/galeria"),
};

export default function Page() {
  return <Trabalho lang="pt" />;
}
