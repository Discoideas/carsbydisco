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
    data: "2026",
    descricao: "O meu ponto de vista, de alguns trackdays no Autódromo do Estoril.",
    capa: "img_1495.jpg",
    capaPosicao: "50% 42%",
    // 6 escolhidas primeiro; depois por cor: vermelhos, verde, azul, brancos, cinzentos, pretos
    ordem: [
      "img_1495.jpg",
      "img_1429.jpg",
      "img_2658.jpg",
      "img_1440.jpg",
      "img_1445.jpg",
      "img_1463.jpg",
      "img_1481.jpg",
      "img_2640.jpg",
      "img_2651.jpg",
      "ab3cc141-404a-48e1-9737-a44c8e371e49.jpg",
      "boxe-gt.jpg",
      "img_2684.jpg",
      "hiperdesportivo-boxe.jpg",
      "img_1134.jpg",
      "img_1035.jpg",
      "img_1050.jpg",
      "860542b9-a56e-4c31-b398-8fa997fb48d3.jpg",
      "img_1019.jpg",
      "img_1042.jpg",
      "img_1041.jpg",
      "img_1483.jpg",
      "img_2636.jpg",
      "img_1104.jpg",
      "fc37a708-0c01-4dda-8024-98b7202c4e1d.jpg",
      "img_2987.jpg",
      "img_1460.jpg",
      "mclaren-traseira.jpg",
      "img_1480.jpg",
    ],
  },
  {
    slug: "portimao-gtwc-2026",
    titulo: "Paddock",
    categoria: "Motorsport",
    local: "Autódromo Internacional do Algarve, Portimão",
    data: "Outubro 2026",
    descricao: "Paddock GTWC 2026.",
    capa: "dji_20261018134323_0509_d.jpg",
    capaPosicao: "50% 58%",
    ordem: [
      "dji_20261018110927_0299_d.jpg",
      "dji_20261018115927_0364_d.jpg",
      "dji_20261018114710_0335_d.jpg",
      "dji_20261018114737_0338_d.jpg",
      "dji_20261018114840_0341_d.jpg",
      "dji_20261018115258_0347_d.jpg",
      "dji_20261018115322_0349_d.jpg",
      "dji_20261018115539_0351_d.jpg",
      "dji_20261018115603_0353_d.jpg",
      "dji_20261018134323_0509_d.jpg",
      "dji_20261018134329_0511_d_2.jpg",
      "img_3614.jpg",
      "img_3620.jpg",
      "dji_20261017180813_0177_d.jpg",
      "dji_20261018110558_0288_d.jpg",
      "dji_20261018110656_0291_d.jpg",
      "dji_20261018110846_0296_d.jpg",
      "dji_20261018110852_0297_d.jpg",
      "dji_20261018112541_0316_d.jpg",
      "dji_20261018115900_0362_d.jpg",
      "dji_20261018115959_0368_d.jpg",
      "dji_20261018120057_0374_d.jpg",
      "dji_20261018123058_0479_d.jpg",
      "dji_20261018123429_0486_d.jpg",
      "dji_20261018132637_0494_d.jpg",
      "dji_20261018133055_0498_d.jpg",
      "dji_20261018134152_0508_d.jpg",
      "img_3273.jpg",
      "img_3308.jpg",
      "img_3326.jpg",
      "img_3349.jpg",
      "img_3350.jpg",
      "img_3436.jpg",
      "img_3535.jpg",
      "img_3564.jpg",
      "img_3591.jpg",
      "dji_20261017180021_0151_d.jpg",
      "dji_20261017180026_0157_d.jpg",
      "dji_20261017180037_0167_d.jpg",
    ],
  },
  // Stock: escondido por agora (fotos guardadas em public/fotos/stock). Para voltar a mostrar, tira as // destas linhas.
  // {
  //   slug: "stock",
  //   titulo: "Stock",
  //   categoria: "Viaturas",
  //   local: "Região Oeste",
  //   data: "2026",
  //   descricao: "Fotos para anúncio: interiores, motores e detalhes.",
  //   capa: "interior-bmw.jpg",
  // },
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
