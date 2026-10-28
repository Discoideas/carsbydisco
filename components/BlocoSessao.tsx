import Image from "next/image";
import Link from "next/link";
import { T, caminho, type Lang } from "@/lib/i18n";
import type { Sessao } from "@/lib/sessoes";

// Um projeto na lista: foto grande, título "NOME / 01", metadados em mono.
export default function BlocoSessao({
  s,
  lang,
  invertido = false,
  prioridade = false,
}: {
  s: Sessao;
  lang: Lang;
  invertido?: boolean;
  prioridade?: boolean;
}) {
  const t = T[lang].sessao;
  const href = caminho(lang, `/galeria/${s.slug}`);
  return (
    <article className={`bloco ${invertido ? "bloco-inv" : ""}`}>
      <Link href={href} className="bloco-img" aria-label={`${t.abrir} ${s.titulo}`}>
        <Image
          src={s.capaFoto.src}
          alt={s.capaFoto.alt}
          fill
          priority={prioridade}
          sizes="(max-width: 800px) 100vw, 80vw"
          quality={90}
          style={{ objectFit: "cover", objectPosition: s.capaPosicao ?? "50% 50%" }}
        />
      </Link>
      <div className="bloco-texto">
        <div>
          <h2 className="titulo-projeto">
            <Link href={href}>
              {s.titulo} / {s.numero}
            </Link>
          </h2>
          <p className="mono">
            {s.categoria} / {s.data}
          </p>
          {s.descricao && <p className="bloco-desc">{s.descricao}</p>}
        </div>
        <ul className="mono etiquetas">
          <li>{s.categoria}</li>
          <li>{s.local}</li>
          <li>
            {s.fotos.length} {t.fotos}
          </li>
        </ul>
      </div>
    </article>
  );
}
