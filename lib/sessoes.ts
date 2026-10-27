import fs from "node:fs";
import path from "node:path";
import { imageSize } from "image-size";

/*
  COMO ADICIONAR UMA SESSÃO NOVA
  1. Cria uma pasta em public/fotos/<nome-da-sessao>/ e põe lá as fotos (.jpg, .jpeg, .png, .webp).
  2. Acrescenta uma entrada na lista SESSOES abaixo, com o mesmo "slug" que o nome da pasta.
  As fotos aparecem por ordem alfabética do nome do ficheiro (ou pela lista "ordem").
*/

export type SessaoInfo = {
  slug: string; // nome da pasta em public/fotos/
  titulo: string;
  categoria: string; // ex.: "Motorsport", "Stock", "Detalhe"
  local: string;
  data: string; // texto livre, ex.: "Setembro 2026"
  descricao?: string;
  capa: string; // nome do ficheiro da foto de capa
  ordem?: string[]; // opcional: fotos que aparecem primeiro, por esta ordem
  capaPosicao?: string; // opcional: zona da capa a mostrar, ex.: "50% 68%" (horizontal vertical)
};

export const SESSOES: SessaoInfo[] = [
  {
    slug: "estoril-boxes",
    titulo: "Paddock",
    categoria: "Motorsport",
    local: "Autódromo do Estoril",
    data: "[mês e ano]",
    descricao: "Bastidores de uma prova: equipas, carros de competição e superdesportivos nas boxes.",
    capa: "img_1495.jpg",
    capaPosicao: "50% 42%",
    ordem: ["boxe-gt.jpg", "hiperdesportivo-boxe.jpg", "mclaren-traseira.jpg", "volante-mclaren.jpg"],
  },
  {
    slug: "stock",
    titulo: "Stock",
    categoria: "Viaturas",
    local: "Região Oeste",
    data: "2026",
    descricao: "Fotos para anúncio: interiores, motores e detalhes.",
    capa: "interior-bmw.jpg",
  },
  {
    slug: "estoril-classicos-2026-09",
    titulo: "Estoril Classics",
    categoria: "Motorsport clássico",
    local: "Autódromo do Estoril",
    data: "Setembro 2026",
    descricao: "Fórmula 1, Grupo 5 e GT históricos nas boxes e na grelha.",
    capa: "img_2775.jpg",
    capaPosicao: "50% 68%",
    ordem: ["img_2980.jpg", "img_2981.jpg", "img_2982.jpg", "img_2984.jpg", "img_2985.jpg", "img_2744.jpg"],
  },
];

export type Foto = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type Sessao = SessaoInfo & { fotos: Foto[]; capaFoto: Foto; numero: string };

const EXTENSOES = /\.(jpe?g|png|webp)$/i;

function lerFotos(info: SessaoInfo): Foto[] {
  const pasta = path.join(process.cwd(), "public", "fotos", info.slug);
  if (!fs.existsSync(pasta)) return [];
  const ficheiros = fs
    .readdirSync(pasta)
    .filter((f) => EXTENSOES.test(f))
    .sort((a, b) => {
      // 1.º as fotos de "ordem", depois o resto por nome (a capa não muda a ordem)
      const prio = (f: string) => {
        const i = info.ordem?.indexOf(f) ?? -1;
        return i >= 0 ? i : 1000;
      };
      return prio(a) - prio(b) || a.localeCompare(b);
    });
  return ficheiros.map((f, i) => {
    const { width = 1200, height = 900 } = imageSize(
      fs.readFileSync(path.join(pasta, f)),
    );
    return {
      src: `/fotos/${info.slug}/${f}`,
      width,
      height,
      alt: `${info.titulo}, ${info.local}, foto ${i + 1}`,
    };
  });
}

export function getSessoes(): Sessao[] {
  return SESSOES.map((info, i) => {
    const fotos = lerFotos(info);
    const capaFoto = fotos.find((f) => f.src.endsWith(`/${info.capa}`)) ?? fotos[0];
    return { ...info, fotos, capaFoto, numero: String(i + 1).padStart(2, "0") };
  }).filter((s) => s.fotos.length > 0);
}

export function getSessao(slug: string): Sessao | undefined {
  return getSessoes().find((s) => s.slug === slug);
}
