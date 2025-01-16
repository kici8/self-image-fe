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
  src: string;
  title: string | undefined;
  description: string | undefined;
  author: string | undefined;
  year: string | undefined;
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

export const mockImages: TypeImage[] = [
  {
    id: "d.1",
    src: "/cluster-images/d.1.jpg",
    title: "Selfwithfur",
    description: `The Austrian Birgit Jürgenssen (1949 - 2003, Vienna) is one of the most prominent artists of the feminist avant-garde. Based on the emancipatory potential of Surrealism and in dialogue with the socio-critical discourse of her generation, she developed a multilayered and stylistically manifold art starting in the late sixties. The female body and its metamorphoses are the center of her works dominated by drawing, print and photography.`,
    author: "Birgit Jürgenssen",
    year: "1974",
  },
  {
    id: "d.2",
    src: "/cluster-images/d.2.jpg",
    title: "Untitled Film Still #17",
    description:
      "Cindy Sherman is a contemporary master of socially critical photography. In her work, she stages herself in various roles, often in the style of Hollywood film stills.",
    author: "Cindy Sherman",
    year: "1978",
  },
  {
    id: "d.3",
    src: "/cluster-images/d.3.jpg",
    title: "Cremaster 4",
    author: "Matthew Barney",
    description:
      "Matthew Barney is an American artist who works in sculpture, photography, drawing and film. His early works are characterized by their complex narrative structures and the use of unusual materials.",
    year: undefined,
  },
  {
    id: "d.4",
    src: "/cluster-images/d.4.jpg",
    title: "UMA THURMAN",
    description:
      "David LaChapelle is an American photographer and director. His works are characterized by their colorful, surreal and often provocative style.",
    author: "David LaChapelle",
    year: undefined,
  },
  {
    id: "d.5",
    src: "/cluster-images/d.5.jpg",
    title: "Boy and Girl",
    description:
      "Gus Van Sant is an American director, screenwriter, producer and photographer. His films often deal with the lives of marginalized people and are characterized by their poetic and melancholic style.",
    author: "Gus Van Sant",
    year: "2010",
  },
  {
    id: "d.6",
    src: "/cluster-images/d.6.jpg",
    title: "The Dorian Gray Syndrome",
    description:
      "Ines Alpha is a 3D artist and art director based in Paris. Her work is characterized by its colorful, surreal and futuristic style. She often collaborates with other artists and designers.",
    author: "Ines Alpha & Esmay Wagemans",
    year: "2024",
  },
  {
    id: "d.7",
    src: "/cluster-images/d.7.jpg",
    title: undefined,
    description: undefined,
    author: undefined,
    year: undefined,
  },
  {
    id: "d.8",
    src: "/cluster-images/d.8.jpg",
    title: undefined,
    description: undefined,
    author: undefined,
    year: undefined,
  },
  {
    id: "d.9",
    src: "/cluster-images/d.9.jpg",
    title: undefined,
    description: undefined,
    author: undefined,
    year: undefined,
  },
  {
    id: "d.10",
    src: "/cluster-images/d.10.jpg",
    title: undefined,
    description: undefined,
    author: undefined,
    year: undefined,
  },
];
