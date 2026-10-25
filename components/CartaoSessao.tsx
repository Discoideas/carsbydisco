import Image from "next/image";
import Link from "next/link";
import type { Sessao } from "@/lib/sessoes";

export default function CartaoSessao({ s, prioridade = false }: { s: Sessao; prioridade?: boolean }) {
  return (
    <Link href={`/galeria/${s.slug}`} className="cartao">
      <div className="cartao-img">
        <Image
          src={s.capaFoto.src}
          alt={s.capaFoto.alt}
          fill
          priority={prioridade}
          sizes="(max-width: 700px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="cartao-texto">
        <h3>{s.titulo}</h3>
        <p>
          {s.local} · {s.data} · {s.fotos.length} fotos
        </p>
      </div>
    </Link>
  );
}
