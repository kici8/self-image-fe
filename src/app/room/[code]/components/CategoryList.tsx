import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import {
  BoxIcon,
  GlassesIcon,
  Grid2x2XIcon,
  PaletteIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react";

const iconClasses = cn("h-6 w-6 shrink-0 grow-0");

const categories = [
  {
    id: "A",
    name: "Pittorico - figurativo - grafico",
    percentage: 5,
    icon: <PaletteIcon className={iconClasses} />,
  },
  {
    id: "B",
    name: "Ostacolo - ambiguità - duplicità",
    percentage: 15,
    icon: <SmileIcon className={cn(iconClasses, "-rotate-90")} />,
  },
  {
    id: "C",
    name: "Di persona - in presenza - interpellazione",
    percentage: 20,
    icon: <UserIcon className={iconClasses} />,
  },
  {
    id: "D",
    name: "Artefatto - truccato - mascherato",
    percentage: 40,
    icon: <GlassesIcon className={iconClasses} />,
  },
  {
    id: "E",
    name: "Assemblaggio - composizione - frammenti",
    percentage: 10,
    icon: <BoxIcon className={iconClasses} />,
  },
  {
    id: "F",
    name: "Assenza - mancanza - incompiutezza",
    percentage: 0,
    icon: <Grid2x2XIcon className={iconClasses} />,
  },
];

export default function CategoryList() {
  return categories.map(({ icon, id, name, percentage }) => (
    <div
      key={id}
      className="flex items-center space-x-4 rounded-lg bg-card px-4 py-3"
    >
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex-grow">
        <h3 className="text-sm font-medium text-card-foreground">{name}</h3>
        <Progress value={percentage} className="mt-2 h-2" />
      </div>
      <div className="flex-shrink-0 text-sm text-muted-foreground">
        {percentage}%
      </div>
    </div>
  ));
}
