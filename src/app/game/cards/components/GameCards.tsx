"use client";

import { easeOutExpo } from "@/lib/ease";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
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
 * GameCards component acts as the main container for the GameCard.
 * It renders a list of GameCard and associated action buttons for swiping (e.g., like or dislike).
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

  // States
  const [direction, setDirection] = useState<CardSwipeDirection>(null);
  const [isDragOffBoundary, setIsDragOffBoundary] =
    useState<CardSwipeDirection>(null);
  const [cardDrivenProps, setCardDrivenProps] = useState(initialDrivenProps);
  const [isDragging, setIsDragging] = useState(false);

  // Callbacks
  const handleActionBtnOnClick = (btn: CardSwipeDirection) => {
    setDirection(btn);
  };

  // Effects
  useEffect(() => {
    if (direction) {
      const swipedFragment = fragmentSpawned.find(
        (f) => f.roundNumber === roundNumber,
      );
      if (swipedFragment) {
        applySwipeEffect(swipedFragment, direction === "right");
      }
    }

    setDirection(null);
  }, [applySwipeEffect, direction, fragmentSpawned, roundNumber]);

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
    <div className="flex h-svh w-svw flex-col items-center justify-center overflow-hidden p-4">
      <div className="flex items-center justify-center gap-4">{}</div>
      <div
        id="cardsWrapper"
        className="relative mb-10 aspect-[88/107] w-full max-w-xs"
      >
        <AnimatePresence>
          {[...Array(maxNumberOfRounds).keys()]
            .reverse()
            .filter((round) => round + 1 >= roundNumber)
            .map((round) => {
              const fragment = fragmentSpawned.find(
                (f) => f.roundNumber === round + 1,
              );

              return (
                <motion.div
                  key={`card-${round + 1}`}
                  className="relative"
                  variants={cardVariants}
                  style={{
                    pointerEvents: round + 1 === roundNumber ? "auto" : "none",
                    display: round + 1 >= roundNumber ? "block" : "none",
                  }}
                  initial="remainings"
                  animate={
                    round + 1 === roundNumber
                      ? "current"
                      : round === roundNumber
                        ? "upcoming"
                        : "remainings"
                  }
                  exit="exit"
                >
                  {/* Render the top card using fragmentSpawned array */}
                  <GameCard
                    id={round + 1}
                    data={fragment}
                    setCardDrivenProps={setCardDrivenProps}
                    setIsDragging={setIsDragging}
                    isDragging={isDragging}
                    isLast={false}
                    setIsDragOffBoundary={setIsDragOffBoundary}
                    setDirection={setDirection}
                  />
                </motion.div>
              );
            })}
        </AnimatePresence>
      </div>

      {/* Swipe action buttons */}
      <div
        id="actions"
        className="z-10 flex w-full items-center justify-center gap-4"
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
  );
};

export default GameCards;
