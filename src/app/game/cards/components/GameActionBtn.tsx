"use client";

import { motion } from "framer-motion";
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
  onClick: () => void;
};

const GameActionBtn = ({ scale, direction, onClick }: Props) => {
  const Icon = actionPropsMatrix[direction!].icon;

  return (
    <motion.button onClick={onClick} whileTap={{ scale: 0.9 }}>
      <motion.div
        className={cn(
          "flex h-[48px] w-[48px] items-center justify-center rounded-full shadow",
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
