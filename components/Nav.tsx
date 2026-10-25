import Link from "next/link";
import { CONTACTO } from "@/lib/contacto";

export default function Nav() {
  return (
    <header className="nav">
      <Link href="/" className="brand">
        {CONTACTO.nome}
      </Link>
      <nav className="nav-links" aria-label="Principal">
        <Link href="/galeria">Trabalho</Link>
        <Link href="/sobre">Sobre</Link>
      </nav>
      <Link href="/contacto" className="nav-cta">
        Marcar sessão <span aria-hidden="true">→</span>
      </Link>
    </header>
  );
}
