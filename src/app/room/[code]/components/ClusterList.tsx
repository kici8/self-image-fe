import { Progress } from "@/components/ui/progress";
import { JSX } from "react";

export type Cluster = {
  id: string;
  name: string;
  icon: JSX.Element;
  percentage: number;
};

type ClusterListProps = {
  cluster: Cluster[];
};

export default function ClusterList({ cluster }: ClusterListProps) {
  return cluster.map(({ icon, id, name, percentage }) => (
    <div key={id} className="flex items-center space-x-4 rounded-lg px-4 py-3">
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex-grow">
        <h3 className="text-md font-semibold text-card-foreground">{name}</h3>
        <Progress value={percentage} className="mt-2 h-2" />
      </div>
      <div className="flex-shrink-0 text-sm text-muted-foreground">
        {Math.round(percentage)}%
      </div>
    </div>
  ));
}
