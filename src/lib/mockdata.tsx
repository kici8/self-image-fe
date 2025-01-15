import { cn } from "@/lib/utils";
import {
  BoxIcon,
  GlassesIcon,
  Grid2x2XIcon,
  PaletteIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react";

export type TypeImage = {
  id: string;
  format: number;
  src: string;
  unlocked: boolean;
};

const iconClasses = cn("h-6 w-6 shrink-0 grow-0");

export const staticClusters = [
  {
    id: "A",
    name: "Pittorico - figurativo - grafico",
    icon: <PaletteIcon className={iconClasses} />,
    percentage: 0,
  },
  {
    id: "B",
    name: "Ostacolo - ambiguità - duplicità",
    icon: <SmileIcon className={cn(iconClasses, "-rotate-90")} />,
    percentage: 0,
  },
  {
    id: "C",
    name: "Di persona - in presenza - interpellazione",
    icon: <UserIcon className={iconClasses} />,
    percentage: 0,
  },
  {
    id: "D",
    name: "Artefatto - truccato - mascherato",
    icon: <GlassesIcon className={iconClasses} />,
    percentage: 0,
  },
  {
    id: "E",
    name: "Assemblaggio - composizione - frammenti",
    icon: <BoxIcon className={iconClasses} />,
    percentage: 0,
  },
  {
    id: "F",
    name: "Assenza - mancanza - incompiutezza",
    icon: <Grid2x2XIcon className={iconClasses} />,
    percentage: 0,
  },
];

export const mockImages = [
  {
    id: "d.1",
    format: 1,
    src: "/cluster-images/d.1.jpg",
    unlocked: false,
    title: "Selfwithfur",
    description: `The Austrian Birgit Jürgenssen (1949 - 2003, Vienna) is one of the most prominent artists of the feminist avant-garde. Based on the emancipatory potential of Surrealism and in dialogue with the socio-critical discourse of her generation, she developed a multilayered and stylistically manifold art starting in the late sixties. The female body and its metamorphoses are the center of her works dominated by drawing, print and photography.`,
    author: "Birgit Jürgenssen",
    year: "1974",
  },
  {
    id: "d.2",
    format: 1,
    src: "/cluster-images/d.2.jpg",
    unlocked: false,
    title: "Untitled Film Still #17",
    description:
      "Cindy Sherman is a contemporary master of socially critical photography. In her work, she stages herself in various roles, often in the style of Hollywood film stills.",
    author: "Cindy Sherman",
    year: "1978",
  },
  {
    id: "d.3",
    format: 1,
    src: "/cluster-images/d.3.jpg",
    unlocked: false,
    title: "Cremaster 4",
    description:
      "Matthew Barney is an American artist who works in sculpture, photography, drawing and film. His early works are characterized by their complex narrative structures and the use of unusual materials.",
    year: undefined,
  },
  {
    id: "d.4",
    format: 1,
    src: "/cluster-images/d.4.jpg",
    unlocked: false,
    title: "UMA THURMAN",
    description:
      "David LaChapelle is an American photographer and director. His works are characterized by their colorful, surreal and often provocative style.",
    author: "David LaChapelle",
    year: undefined,
  },
  {
    id: "d.5",
    format: 1,
    src: "/cluster-images/d.5.jpg",
    unlocked: false,
    title: "Boy and Girl",
    Description:
      "Gus Van Sant is an American director, screenwriter, producer and photographer. His films often deal with the lives of marginalized people and are characterized by their poetic and melancholic style.",
    author: "Gus Van Sant",
    year: "2010",
  },
  {
    id: "d.6",
    format: 1,
    src: "/cluster-images/d.6.jpg",
    unlocked: false,
    title: "The Dorian Gray Syndrome",
    description:
      "Ines Alpha is a 3D artist and art director based in Paris. Her work is characterized by its colorful, surreal and futuristic style. She often collaborates with other artists and designers.",
    author: "Ines Alpha & Esmay Wagemans",
    year: "2024",
  },
  {
    id: "d.7",
    format: 1,
    src: "/cluster-images/d.7.jpg",
    unlocked: false,
    title: undefined,
    description: undefined,
    author: undefined,
    year: undefined,
  },
  {
    id: "d.8",
    format: 1,
    src: "/cluster-images/d.8.jpg",
    unlocked: false,
    title: undefined,
    description: undefined,
    author: undefined,
    year: undefined,
  },
  {
    id: "d.9",
    format: 1,
    src: "/cluster-images/d.9.jpg",
    unlocked: false,
    title: undefined,
    description: undefined,
    author: undefined,
    year: undefined,
  },
  {
    id: "d.10",
    format: 1,
    src: "/cluster-images/d.10.jpg",
    unlocked: false,
    title: undefined,
    description: undefined,
    author: undefined,
    year: undefined,
  },
];
