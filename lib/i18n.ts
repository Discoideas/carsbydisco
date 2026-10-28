import type { Sessao } from "@/lib/sessoes";

export type Lang = "pt" | "en";

// Endereço de uma página na língua pedida: "/galeria" -> "/en/galeria"
export function caminho(lang: Lang, p: string) {
  if (lang === "pt") return p;
  return p === "/" ? "/en" : `/en${p}`;
}

// Todos os textos do site, em português e inglês
export const T = {
  pt: {
    zona: "Torres Vedras · Região Oeste",
    nav: { trabalho: "Trabalho", sobre: "Sobre", contacto: "Contacto", aria: "Principal" },
    lingua: { outra: "EN", aria: "Ver o site em inglês" },
    inicio: {
      kicker: "Fotografia automóvel amadora",
      titulo: ["A minha visão", "do automóvel."],
    },
    trabalho: {
      titulo: "Trabalho",
      indice: "Índice",
      sessoes: "sessões",
      meta: "Fotos de um entusiasta e fotógrafo amador. Todas as sessões: Paddock, GTWC, McLaren Trophy, GT Open, Estoril Classics, Winter Series e Porsche Sprint Challenge, no Estoril e em Portimão.",
    },
    sessao: { voltar: "Trabalho", seguinte: "Seguinte", fotos: "fotos", foto: "foto", abrir: "Abrir" },
    galeria: { abrir: "Abrir foto", fechar: "Fechar", anterior: "Foto anterior", seguinte: "Foto seguinte" },
    sobre: {
      titulo: "Sobre",
      h1: ["A minha visão", "do automóvel."],
      texto:
        "Sou o André Lourenço, tenho 21 anos, mais conhecido por “Disco”, amante do mundo automóvel e do desporto motorizado, partilhando as minhas fotos amadoras de forma a poder documentar a minha evolução enquanto fotógrafo/criador de conteúdos do mundo automóvel, de um entusiasta para entusiastas.",
      assinatura: "Assinatura de André Lourenço",
      botao: "Falar comigo →",
      meta: "André Lourenço “Disco”, 21 anos, entusiasta e fotógrafo amador do mundo automóvel e do desporto motorizado.",
    },
    contacto: {
      titulo: "Contacto",
      h1: ["Falar", "comigo."],
      texto:
        "Sou um entusiasta e fotógrafo amador. Para falar sobre carros, eventos ou as minhas fotos, estes são os meus contactos.",
      telefone: "Telefone",
      whatsapp: "Enviar mensagem",
      meta: "Contacto de André Lourenço “Disco”, entusiasta e fotógrafo amador: telefone, WhatsApp, email e Instagram @carsbydisco.",
    },
    site: {
      titulo: "carsbydisco — Fotografia automóvel amadora",
      meta: "Car’s by Disco: as fotos de um entusiasta e fotógrafo amador, André Lourenço. Paddock, provas e trackdays no Autódromo do Estoril e em Portimão.",
      cargo: "Entusiasta e fotógrafo amador do mundo automóvel",
      locale: "pt_PT",
    },
  },
  en: {
    zona: "Torres Vedras · Portugal",
    nav: { trabalho: "Work", sobre: "About", contacto: "Contact", aria: "Main" },
    lingua: { outra: "PT", aria: "Ver o site em português" },
    inicio: {
      kicker: "Amateur automotive photography",
      titulo: ["My view", "of the automobile."],
    },
    trabalho: {
      titulo: "Work",
      indice: "Index",
      sessoes: "sessions",
      meta: "Photos by an enthusiast and amateur photographer. All sessions: Paddock, GTWC, McLaren Trophy, GT Open, Estoril Classics, Winter Series and Porsche Sprint Challenge, at Estoril and Portimão.",
    },
    sessao: { voltar: "Work", seguinte: "Next", fotos: "photos", foto: "photo", abrir: "Open" },
    galeria: { abrir: "Open photo", fechar: "Close", anterior: "Previous photo", seguinte: "Next photo" },
    sobre: {
      titulo: "About",
      h1: ["My view", "of the automobile."],
      texto:
        "I’m André Lourenço, I’m 21, better known as “Disco”. I love cars and motorsport, and I share my amateur photos to document my progress as an automotive photographer and content creator — from an enthusiast, for enthusiasts.",
      assinatura: "Signature of André Lourenço",
      botao: "Get in touch →",
      meta: "André Lourenço “Disco”, 21, car and motorsport enthusiast and amateur photographer.",
    },
    contacto: {
      titulo: "Contact",
      h1: ["Get in", "touch."],
      texto:
        "I’m an enthusiast and amateur photographer. To talk about cars, events or my photos, here’s how to reach me.",
      telefone: "Phone",
      whatsapp: "Send a message",
      meta: "Contact André Lourenço “Disco”, enthusiast and amateur photographer: phone, WhatsApp, email and Instagram @carsbydisco.",
    },
    site: {
      titulo: "carsbydisco — Amateur automotive photography",
      meta: "Car’s by Disco: photos by André Lourenço, an enthusiast and amateur photographer. Paddock, races and trackdays at Estoril and Portimão, Portugal.",
      cargo: "Car enthusiast and amateur photographer",
      locale: "en_GB",
    },
  },
} as const;

// Sessão com os textos na língua pedida
export function traduzir(s: Sessao, lang: Lang): Sessao {
  if (lang === "pt" || !s.en) return s;
  const titulo = s.en.titulo ?? s.titulo;
  const local = s.en.local ?? s.local;
  const fotos = s.fotos.map((f, i) => ({ ...f, alt: `${titulo}, ${local}, photo ${i + 1}` }));
  const capaFoto = fotos.find((f) => f.src === s.capaFoto.src) ?? fotos[0];
  return {
    ...s,
    titulo,
    local,
    categoria: s.en.categoria ?? s.categoria,
    data: s.en.data ?? s.data,
    descricao: s.en.descricao ?? s.descricao,
    fotos,
    capaFoto,
  };
}

// Ligações entre as duas versões de uma página (para o Google)
export function alternativos(p: string) {
  return {
    canonical: p,
    languages: { "pt-PT": p, en: caminho("en", p), "x-default": p },
  };
}
export function alternativosEn(p: string) {
  return {
    canonical: caminho("en", p),
    languages: { "pt-PT": p, en: caminho("en", p), "x-default": p },
  };
}
