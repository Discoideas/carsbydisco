import Link from "next/link";
import SeletorLingua from "@/components/SeletorLingua";
import { CONTACTO } from "@/lib/contacto";
import { T, caminho, type Lang } from "@/lib/i18n";

export default function Nav({ lang }: { lang: Lang }) {
  const t = T[lang].nav;
  return (
    <header className="nav">
      <Link href={caminho(lang, "/")} className="brand">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/jante.png" alt="" aria-hidden="true" className="brand-jante" width={26} height={26} />
        {CONTACTO.nome}
      </Link>
      <nav className="nav-links" aria-label={t.aria}>
        <Link href={caminho(lang, "/galeria")}>{t.trabalho}</Link>
        <Link href={caminho(lang, "/sobre")}>{t.sobre}</Link>
      </nav>
      <div className="nav-direita">
        <SeletorLingua lang={lang} />
        <Link href={caminho(lang, "/contacto")} className="nav-cta">
          {t.contacto} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </header>
  );
}
