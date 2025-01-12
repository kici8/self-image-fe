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
  id: number;
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
    id: 1,
    format: 1,
    src: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    unlocked: false,
  },
  {
    id: 2,
    format: 1,
    src: "https://images.unsplash.com/photo-1578926314433-e2789279f4aa?q=80&w=2821&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    unlocked: true,
  },
  {
    id: 4,
    format: 1,
    src: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    unlocked: false,
  },
  {
    id: 5,
    format: 1,
    src: "https://images.unsplash.com/photo-1578926314433-e2789279f4aa?q=80&w=2821&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    unlocked: true,
  },
  {
    id: 7,
    format: 1,
    src: "https://images.unsplash.com/photo-1578926314433-e2789279f4aa?q=80&w=2821&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    unlocked: false,
  },
  {
    id: 9,
    format: 1,
    src: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    unlocked: false,
  },
  {
    id: 10,
    format: 1,
    src: "https://images.unsplash.com/photo-1578926314433-e2789279f4aa?q=80&w=2821&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    unlocked: true,
  },
  {
    id: 12,
    format: 1,
    src: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    unlocked: false,
  },
  {
    id: 13,
    format: 1,
    src: "https://images.unsplash.com/photo-1578926314433-e2789279f4aa?q=80&w=2821&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    unlocked: true,
  },
  {
    id: 15,
    format: 1,
    src: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    unlocked: false,
  },
  {
    id: 16,
    format: 1,
    src: "https://images.unsplash.com/photo-1578926314433-e2789279f4aa?q=80&w=2821&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    unlocked: false,
  },
  {
    id: 18,
    format: 1,
    src: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    unlocked: false,
  },
  {
    id: 19,
    format: 1,
    src: "https://images.unsplash.com/photo-1578926314433-e2789279f4aa?q=80&w=2821&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    unlocked: false,
  },
  {
    id: 21,
    format: 1,
    src: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    unlocked: false,
  },
  {
    id: 22,
    format: 1,
    src: "https://images.unsplash.com/photo-1578926314433-e2789279f4aa?q=80&w=2821&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    unlocked: false,
  },
];
