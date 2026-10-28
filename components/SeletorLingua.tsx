"use client";

import { usePathname } from "next/navigation";
import type { Lang } from "@/lib/i18n";

// Botão PT / EN: leva para a mesma página na outra língua.
// Usa <a> normal (não <Link>) porque cada língua tem o seu próprio <html lang>.
export default function SeletorLingua({ lang }: { lang: Lang }) {
  const atual = usePathname() || "/";
  const semEn = atual === "/en" ? "/" : atual.replace(/^\/en(?=\/)/, "");
  const destino = lang === "pt" ? (semEn === "/" ? "/en" : `/en${semEn}`) : semEn;

  return (
    <div className="lingua" role="group" aria-label={lang === "pt" ? "Língua" : "Language"}>
      {lang === "pt" ? (
        <>
          <span className="lingua-ativa" aria-current="true">PT</span>
          <a href={destino} hrefLang="en" lang="en" aria-label="View the site in English">EN</a>
        </>
      ) : (
        <>
          <a href={destino} hrefLang="pt-PT" lang="pt" aria-label="Ver o site em português">PT</a>
          <span className="lingua-ativa" aria-current="true">EN</span>
        </>
      )}
    </div>
  );
}
