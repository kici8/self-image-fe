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
    <div key={id} className="flex items-center rounded-lg px-4 py-3">
      <div className="mr-2 h-12 w-12 flex-shrink-0 flex-grow-0">{icon}</div>
      <div className="mr-4 flex-grow">
        <h3 className="text-md font-semibold text-card-foreground">{name}</h3>
        <Progress
          value={percentage}
          className="mt-2 h-3 border border-border"
        />
      </div>
      <div className="flex-shrink-0 font-mono text-lg">
        {Math.round(percentage)}%
      </div>
    </div>
  ));
}
