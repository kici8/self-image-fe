"use client";

import { easeOutExpo } from "@/lib/ease";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useGame } from "../../store/gameContext";
import GameActionBtn from "./GameActionBtn";
import GameCard, { CardSwipeDirection } from "./GameCard";

/**
 * Initial driven properties used for animating the card and action buttons.
 */
const initialDrivenProps = {
  cardWrapperX: 0,
  buttonScaleBadAnswer: 1,
  buttonScaleGoodAnswer: 1,
};

/**
 * GameCards component acts as the main container for the card view.
 * It renders a card and associated action buttons for swiping (e.g., like or dislike).
 */
const GameCards = () => {
  const {
    applySwipeEffect,
    seenFragments,
    clusterValues,
    roundNumber,
    maxNumberOfRounds,
    fragmentSpawned,
    unlockedFilters,
    unlockedImages,
  } = useGame();

  // Local state for handling swipe direction and drag events.
  const [direction, setDirection] = useState<CardSwipeDirection>(null);
  const [isDragOffBoundary, setIsDragOffBoundary] =
    useState<CardSwipeDirection>(null);
  const [cardDrivenProps, setCardDrivenProps] = useState(initialDrivenProps);
  const [isDragging, setIsDragging] = useState(false);

  /**
   * Handle action button click to set swipe direction.
   * @param btn - The direction ("left" or "right") selected.
   */

  const handleActionBtnOnClick = (btn: CardSwipeDirection) => {
    setDirection(btn);
  };

  // Variants for Framer Motion animations controlling card transitions.
  const cardVariants = {
    current: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: easeOutExpo },
    },
    upcoming: {
      opacity: 0.5,
      y: 67,
      scale: 0.9,
      transition: { duration: 0.3, ease: easeOutExpo, delay: 0 },
    },
    remainings: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    exit: {
      opacity: 0,
      x: direction === "left" ? -300 : 300,
      y: 40,
      rotate: direction === "left" ? -20 : 20,
      transition: { duration: 0.3, ease: easeOutExpo },
    },
  };

  return (
    <motion.div
      className={`flex h-full min-h-screen flex-col items-center justify-center overflow-hidden p-5 ${
        isDragging ? "cursor-grabbing" : ""
      }`}
    >
      {/* Close button to navigate back */}
      <Link
        href="/"
        id="close"
        className="absolute right-[20px] top-[20px] h-auto w-[30px]"
      >
        <X className="h-full w-full text-gray-500" />
      </Link>

      <div
        id="gameUIWrapper"
        className="relative z-10 flex w-full flex-col items-center justify-center gap-6"
      >
        <div
          id="cardsWrapper"
          className="relative z-10 mb-[20px] aspect-[100/150] w-full max-w-xs"
        >
          <AnimatePresence>
            {Array(maxNumberOfRounds)
              .keys()
              .map((round) => (
                <motion.div
                  key={round + 1}
                  className="relative"
                  variants={cardVariants}
                  initial="remainings"
                  animate={round + 1 === roundNumber ? "current" : "upcoming"}
                  exit="exit"
                >
                  {/* Render the top card using fragmentSpawned array */}
                  <GameCard
                    id={0}
                    data={fragmentSpawned.find(
                      (f) => f.roundNumber === round + 1,
                    )}
                    setCardDrivenProps={setCardDrivenProps}
                    setIsDragging={setIsDragging}
                    isDragging={isDragging}
                    isLast={false}
                    setIsDragOffBoundary={setIsDragOffBoundary}
                    setDirection={setDirection}
                  />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* Swipe action buttons */}
        <div
          id="actions"
          className="relative z-10 flex w-full items-center justify-center gap-4"
        >
          <GameActionBtn
            direction="left"
            ariaLabel="swipe left"
            scale={cardDrivenProps.buttonScaleBadAnswer}
            isDragOffBoundary={isDragOffBoundary}
            onClick={() => handleActionBtnOnClick("left")}
          />
          <GameActionBtn
            direction="right"
            ariaLabel="swipe right"
            scale={cardDrivenProps.buttonScaleGoodAnswer}
            isDragOffBoundary={isDragOffBoundary}
            onClick={() => handleActionBtnOnClick("right")}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default GameCards;
