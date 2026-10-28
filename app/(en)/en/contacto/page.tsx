import type { Metadata } from "next";
import Contacto from "@/components/paginas/Contacto";
import { T, alternativosEn } from "@/lib/i18n";

export const metadata: Metadata = {
  title: T.en.contacto.titulo,
  description: T.en.contacto.meta,
  alternates: alternativosEn("/contacto"),
};

export default function Page() {
  return <Contacto lang="en" />;
}
