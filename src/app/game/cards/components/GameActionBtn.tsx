import { motion } from "framer-motion";
import { IsDragOffBoundary } from "../../store/gameContext";
import { MinusIcon, PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const actionPropsMatrix = {
  left: {
    ariaLabel: "Swipe Left",
    bgColorClass: "bg-destructive",
    icon: <MinusIcon className="h-6 w-6 duration-100 ease-out" />,
  },
  right: {
    ariaLabel: "Swipe Right",
    bgColorClass: "bg-green-400",
    icon: <PlusIcon className="h-6 w-6 duration-100 ease-out" />,
  },
};

type Props = {
  ariaLabel: string;
  scale: number;
  direction: "left" | "right";
  isDragOffBoundary: IsDragOffBoundary;
  onClick: () => void;
};

const GameActionBtn = ({
  scale,
  direction,
  isDragOffBoundary = null,
  onClick,
}: Props) => {
  const Icon = actionPropsMatrix[direction!].icon;

  return (
    <motion.button onClick={onClick} whileTap={{ scale: 0.9 }}>
      <motion.div
        className={cn(
          "flex h-[60px] w-[60px] items-center justify-center rounded-full shadow",
          actionPropsMatrix[direction].bgColorClass,
        )}
        style={{ scale: scale }}
      >
        {Icon}
      </motion.div>
    </motion.button>
  );
};

export default GameActionBtn;
