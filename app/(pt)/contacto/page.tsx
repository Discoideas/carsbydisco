import type { Metadata } from "next";
import Contacto from "@/components/paginas/Contacto";
import { T, alternativos } from "@/lib/i18n";

export const metadata: Metadata = {
  title: T.pt.contacto.titulo,
  description: T.pt.contacto.meta,
  alternates: alternativos("/contacto"),
};

export default function Page() {
  return <Contacto lang="pt" />;
}
