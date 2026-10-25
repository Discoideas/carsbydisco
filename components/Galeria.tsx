"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Foto } from "@/lib/sessoes";

// Fotos em composição desalinhada (grande / pequena); tocar abre em ecrã inteiro.
export default function Galeria({ fotos }: { fotos: Foto[] }) {
  const [aberta, setAberta] = useState<number | null>(null);

  const fechar = useCallback(() => setAberta(null), []);
  const mover = useCallback(
    (d: number) =>
      setAberta((i) => (i === null ? null : (i + d + fotos.length) % fotos.length)),
    [fotos.length],
  );

  useEffect(() => {
    if (aberta === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") fechar();
      if (e.key === "ArrowRight") mover(1);
      if (e.key === "ArrowLeft") mover(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [aberta, fechar, mover]);

  const atual = aberta === null ? null : fotos[aberta];

  return (
    <>
      <div className="composicao">
        {fotos.map((f, i) => (
          <figure key={f.src} className={`peca peca-${i % 4}${f.height > f.width ? " vertical" : ""}`}>
            <button className="peca-btn" onClick={() => setAberta(i)} aria-label={`Abrir foto ${i + 1}`}>
              <Image
                src={f.src}
                alt={f.alt}
                width={f.width}
                height={f.height}
                sizes="(max-width: 800px) 100vw, 60vw"
                quality={90}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </button>
            <figcaption className="mono">{String(i + 1).padStart(2, "0")}</figcaption>
          </figure>
        ))}
      </div>

      {atual && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={atual.alt}>
          <button className="lb-fundo" onClick={fechar} aria-label="Fechar" />
          <Image
            src={atual.src}
            alt={atual.alt}
            width={atual.width}
            height={atual.height}
            sizes="100vw"
            quality={90}
            className="lb-img"
          />
          <button className="lb-btn lb-fechar" onClick={fechar} aria-label="Fechar">
            ✕
          </button>
          {fotos.length > 1 && (
            <>
              <button className="lb-btn lb-ant" onClick={() => mover(-1)} aria-label="Foto anterior">
                ‹
              </button>
              <button className="lb-btn lb-seg" onClick={() => mover(1)} aria-label="Foto seguinte">
                ›
              </button>
            </>
          )}
          <p className="lb-contador mono">
            {String((aberta ?? 0) + 1).padStart(2, "0")} / {String(fotos.length).padStart(2, "0")}
          </p>
        </div>
      )}
    </>
  );
}
