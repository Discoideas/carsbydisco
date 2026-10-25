import Image from "next/image";

// Os teus dados: preenche aqui e o site inteiro atualiza.
const CONTACTO = {
  telefone: "+351000000000", // ex.: +351912345678
  telefoneVisivel: "[telemóvel]",
  whatsapp: "351000000000", // só números, com 351 à frente
  email: "[email profissional]",
  cvPdf: "/cv-andre-lourenco.pdf", // põe o PDF na pasta public/
};

const NUMEROS = [
  { valor: "[X]", texto: "viaturas fotografadas" },
  { valor: "+[X]", texto: "seguidores em [N] semanas" },
  { valor: "[X]", texto: "contactos gerados" },
];

export default function Home() {
  return (
    <main className="wrap">
      <nav className="nav">
        <span className="brand">André Lourenço</span>
        <a href="#contacto">Contacto</a>
      </nav>

      <div className="hero-img">
        <Image
          src="/fotos/ferrari-frente.jpg"
          alt="Frente de um desportivo vermelho numa boxe de circuito"
          fill
          priority
          sizes="(max-width: 1080px) 100vw, 1080px"
          style={{ objectFit: "cover", objectPosition: "60% 40%" }}
        />
      </div>

      <section className="hero">
        <p className="kicker">Torres Vedras · Região Oeste</p>
        <h1>Fotografia, vídeo e marketing para stands automóveis</h1>
        <p className="lead">
          Faço os carros em stock parecerem o que valem, e ponho-os à frente de
          quem compra.
        </p>
        <div className="buttons">
          <a className="btn btn-primary" href={`tel:${CONTACTO.telefone}`}>
            Ligar
          </a>
          <a
            className="btn btn-outline"
            href={`https://wa.me/${CONTACTO.whatsapp}`}
          >
            WhatsApp
          </a>
        </div>
      </section>

      <section className="stats">
        {NUMEROS.map((n) => (
          <div key={n.texto}>
            <span className="stat-num">{n.valor}</span>
            <span className="stat-label">{n.texto}</span>
          </div>
        ))}
      </section>

      <section className="section">
        <h2>Viaturas de stock</h2>
        <p className="section-text">
          Fotos para anúncio: interior, motor e detalhe, com luz natural e
          enquadramento limpo.
        </p>
        <div className="grid-2 grid-3-desktop">
          <div className="photo photo-tall">
            <Image
              src="/fotos/interior-bmw.jpg"
              alt="Interior de berlina alemã, vista do banco traseiro"
              fill
              sizes="(max-width: 760px) 50vw, 360px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="photo photo-tall">
            <Image
              src="/fotos/motor-amg.jpg"
              alt="Tampa de motor em carbono com placa de assinatura"
              fill
              sizes="(max-width: 760px) 50vw, 360px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="photo photo-tall span-mobile">
            <Image
              src="/fotos/mclaren-traseira.jpg"
              alt="Traseira de desportivo preto e dourado"
              fill
              sizes="(max-width: 760px) 50vw, 360px"
              style={{ objectFit: "cover", objectPosition: "55% 50%" }}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Vídeos</h2>
        <div className="grid-2 grid-3-desktop">
          {/* Troca cada bloco por um vídeo do YouTube/Instagram quando os tiveres */}
          <div className="video">Reel de viatura</div>
          <div className="video">Reel de evento</div>
        </div>
      </section>

      <section className="section">
        <h2>Eventos e bastidores</h2>
        <p className="section-text">
          Acesso às boxes e paddock em provas no Autódromo do Estoril.
        </p>
        <div className="grid-2 grid-3-desktop">
          <figure>
            <div className="photo photo-event">
              <Image
                src="/fotos/hiperdesportivo-boxe.jpg"
                alt="Hiperdesportivo verde numa boxe com a equipa ao fundo"
                fill
                sizes="(max-width: 760px) 50vw, 360px"
                style={{ objectFit: "cover", objectPosition: "50% 60%" }}
              />
            </div>
            <figcaption>[Evento · data]</figcaption>
          </figure>
          <figure>
            <div className="photo photo-event">
              <Image
                src="/fotos/boxe-gt.jpg"
                alt="Boxe de equipa GT com carro em reparação"
                fill
                sizes="(max-width: 760px) 50vw, 360px"
                style={{ objectFit: "cover", objectPosition: "50% 35%" }}
              />
            </div>
            <figcaption>[Equipa · prova]</figcaption>
          </figure>
          <figure className="span-mobile">
            <div className="photo photo-event">
              <Image
                src="/fotos/volante-mclaren.jpg"
                alt="Volante de superdesportivo visto do lugar do condutor"
                fill
                sizes="(max-width: 760px) 50vw, 360px"
                style={{ objectFit: "cover", objectPosition: "50% 30%" }}
              />
            </div>
            <figcaption>[Contexto: a convite de quem, em que evento]</figcaption>
          </figure>
        </div>
      </section>

      <section id="contacto" className="contact">
        <h2>Falamos?</h2>
        <p className="section-text">
          Fotografo-vos uma viatura sem custo para verem o resultado.
        </p>
        <a className="btn btn-primary" href={`tel:${CONTACTO.telefone}`}>
          Ligar {CONTACTO.telefoneVisivel}
        </a>
        <a
          className="btn btn-outline"
          href={`https://wa.me/${CONTACTO.whatsapp}`}
        >
          WhatsApp
        </a>
        <a className="contact-link" href={`mailto:${CONTACTO.email}`}>
          {CONTACTO.email}
        </a>
        <a className="contact-link" href={CONTACTO.cvPdf}>
          Descarregar CV em PDF
        </a>
      </section>
    </main>
  );
}
