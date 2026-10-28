import Link from "next/link";
import MenuMobile from "@/components/MenuMobile";
import SeletorLingua from "@/components/SeletorLingua";
import { CONTACTO } from "@/lib/contacto";
import { T, caminho, type Lang } from "@/lib/i18n";

export default function Nav({ lang }: { lang: Lang }) {
  const t = T[lang].nav;
  const itens = [
    { href: caminho(lang, "/galeria"), texto: t.trabalho },
    { href: caminho(lang, "/sobre"), texto: t.sobre },
    { href: caminho(lang, "/contacto"), texto: t.contacto },
  ];
  return (
    <header className="nav">
      <Link href={caminho(lang, "/")} className="brand">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/jante.png" alt="" aria-hidden="true" className="brand-jante" width={26} height={26} />
        {CONTACTO.nome}
      </Link>
      <nav className="nav-links" aria-label={t.aria}>
        <Link href={itens[0].href}>{t.trabalho}</Link>
        <Link href={itens[1].href}>{t.sobre}</Link>
      </nav>
      <div className="nav-direita">
        <SeletorLingua lang={lang} />
        <Link href={itens[2].href} className="nav-cta">
          {t.contacto} <span aria-hidden="true">→</span>
        </Link>
        <MenuMobile
          itens={itens}
          titulo={t.aria}
          abrir={lang === "pt" ? "Abrir menu" : "Open menu"}
          fechar={lang === "pt" ? "Fechar menu" : "Close menu"}
        />
      </div>
    </header>
  );
}
