import { Progress } from "@/components/ui/progress";
import { JSX, useState } from "react";

export type Cluster = {
  id: string;
  name: string;
  icon: JSX.Element;
  percentage: number;
};

type ClusterListItemProps = Cluster;

export default function ClusterListItem({
  icon,
  id,
  name,
  percentage,
}: ClusterListItemProps) {
  const [showName, setShowName] = useState(false);

  return (
    <div
      key={id}
      className="flex cursor-pointer select-none items-center gap-4 p-4 hover:bg-accent/40"
      onClick={() => setShowName(!showName)}
    >
      <div className="relative mr-2 h-8 w-8 flex-shrink-0 flex-grow-0">
        {icon}
      </div>
      <div className="-mt-1 flex-grow">
        <div className="flex items-center">
          <h3 className="text-md flex-1 font-semibold leading-none text-card-foreground">
            {showName ? name : "*".repeat(name.length)}
          </h3>
          <span className="font-mono text-sm leading-none">
            {Math.round(percentage)}
          </span>
        </div>

        <Progress
          value={percentage}
          className="mt-2 h-3 border border-border"
        />
      </div>
      {/* <Button
        onClick={() => setShowName(!showName)}
        variant="ghost"
        size="icon"
        className="flex-shrink-0 rounded-full"
      >
        {showName ? <EyeIcon /> : <EyeClosedIcon />}
      </Button> */}
    </div>
  );
}
