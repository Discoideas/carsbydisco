"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Item = { href: string; texto: string };

// Botão ☰ (só no telemóvel) que abre um painel lateral com as páginas.
export default function MenuMobile({
  itens,
  abrir,
  fechar,
  titulo,
}: {
  itens: Item[];
  abrir: string;
  fechar: string;
  titulo: string;
}) {
  const [aberto, setAberto] = useState(false);
  const [montado, setMontado] = useState(false);
  const atual = usePathname();

  useEffect(() => setMontado(true), []);

  // fecha ao mudar de página
  useEffect(() => setAberto(false), [atual]);

  // trava o scroll da página e fecha com Esc
  useEffect(() => {
    if (!aberto) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAberto(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [aberto]);

  return (
    <>
      <button
        className="menu-botao"
        aria-label={aberto ? fechar : abrir}
        aria-expanded={aberto}
        aria-controls="menu-lateral"
        onClick={() => setAberto((a) => !a)}
      >
        <span className={`menu-icone ${aberto ? "x" : ""}`} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      {montado &&
        createPortal(
          <>
          <div className={`menu-fundo ${aberto ? "aberto" : ""}`} onClick={() => setAberto(false)} aria-hidden="true" />

          <nav
            id="menu-lateral"
            className={`menu-lateral ${aberto ? "aberto" : ""}`}
            aria-label={titulo}
            aria-hidden={!aberto}
            inert={!aberto}
          >
            <button className="menu-fechar" aria-label={fechar} onClick={() => setAberto(false)}>
              <span className="menu-icone x" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
            <ul>
              {itens.map((it, i) => (
                <li key={it.href}>
                  <Link href={it.href} aria-current={atual === it.href ? "page" : undefined}>
                    <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                    {it.texto}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          </>,
          document.body,
        )}
    </>
  );
}
