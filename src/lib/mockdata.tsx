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
  },
  {
    id: "d.2",
    format: 1,
    src: "/cluster-images/d.2.jpg",
    unlocked: false,
  },
  {
    id: "d.3",
    format: 1,
    src: "/cluster-images/d.3.jpg",
    unlocked: false,
  },
  {
    id: "d.4",
    format: 1,
    src: "/cluster-images/d.4.jpg",
    unlocked: false,
  },
  {
    id: "d.5",
    format: 1,
    src: "/cluster-images/d.5.jpg",
    unlocked: false,
  },
  {
    id: "d.6",
    format: 1,
    src: "/cluster-images/d.6.jpg",
    unlocked: false,
  },
  {
    id: "d.7",
    format: 1,
    src: "/cluster-images/d.7.jpg",
    unlocked: false,
  },
  {
    id: "d.8",
    format: 1,
    src: "/cluster-images/d.8.jpg",
    unlocked: false,
  },
  {
    id: "d.9",
    format: 1,
    src: "/cluster-images/d.9.jpg",
    unlocked: false,
  },
  {
    id: "d.10",
    format: 1,
    src: "/cluster-images/d.10.jpg",
    unlocked: false,
  },
];
