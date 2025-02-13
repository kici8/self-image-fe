"use client";

import { easeOutExpo } from "@/lib/ease";
import { staticClusterImages } from "@/lib/staticElements/clusterImages";
import { staticClusters } from "@/lib/staticElements/clusters";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useGame } from "../../store/gameContext";
import GameActionBtn from "./GameActionBtn";
import GameCard, { CardSwipeDirection } from "./GameCard";
import UnlockedImages from "./UnlockedImages";

/**
 * Initial driven properties used for animating the card and action buttons.
 */
const initialDrivenProps = {
  cardWrapperX: 0,
  buttonScaleBadAnswer: 1,
  buttonScaleGoodAnswer: 1,
  clusterValueIndicatorOpacity: 0,
};

/**
 * GameCards component acts as the main container for the GameCard.
 * It renders a list of GameCard and associated action buttons for swiping (e.g., like or dislike).
 */
const GameCards = () => {
  const {
    applySwipeEffect,
    clusterValues,
    roundNumber,
    maxNumberOfRounds,
    activeSpawnedFragment,
    fragmentsSpawned,
    isGameOver,
    unlockedFilters,
    unlockedImages,
  } = useGame();

  const baseCards = [...Array(maxNumberOfRounds).keys()].reverse();

  // States
  const [direction, setDirection] = useState<CardSwipeDirection>(null);
  const [cardDrivenProps, setCardDrivenProps] = useState(initialDrivenProps);
  const [isDragging, setIsDragging] = useState(false);

  // Callbacks
  const handleActionBtnOnClick = (btn: CardSwipeDirection) => {
    setDirection(btn);
  };

  // Effects
  useEffect(() => {
    if (direction) {
      const swipedFragment = fragmentsSpawned.find(
        (f) => f.roundNumber === roundNumber,
      );
      if (swipedFragment) {
        applySwipeEffect(swipedFragment, direction === "right");
      }
    }

    setDirection(null);
  }, [applySwipeEffect, direction, fragmentsSpawned, roundNumber]);

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
      y: 72,
      scale: 0.88,
      transition: { duration: 0.3, ease: easeOutExpo, delay: 0 },
    },
    remaining: {
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

  if (isGameOver) {
    return (
      <div className="flex h-svh w-svw items-center justify-center">
        <div className="text-center text-2xl font-bold">
          Game Over! You have unlocked {unlockedImages.size} images and{" "}
          {unlockedFilters.size} filters.
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-svh w-svw items-center justify-center gap-8 bg-self-blue-900">
      <div className="flex h-full max-h-[840px] w-full max-w-sm flex-col justify-between rounded-xl px-2 py-8 shadow-xl md:border md:border-self-blue-300/40 md:bg-self-blue-300/10 md:shadow-self-blue-400/10">
        <div className="flex items-center justify-center gap-2">
          {staticClusters
            .sort((a, b) => a.id.localeCompare(b.id))
            .map((cluster) => {
              // animate the y position based on the cluster value
              // 40 is equal to value 0, 0 is equal to value 1
              // cluster value is between 0 and 1
              // so make a proportional calculation to get the y position
              const yPosition = 40 * (1 - clusterValues[cluster.id]);
              const image = staticClusterImages.find(
                (image) => image.id === activeSpawnedFragment.image_id,
              );
              const fragmentClusterValue = image?.clusterValues.find(
                (cv) => cv.clusterId === cluster.id,
              )?.value;
              return (
                <div key={cluster.id} className="relative">
                  <div className="relative flex h-[40px] w-[40px] items-center justify-center overflow-hidden rounded-full bg-self-blue-300/20">
                    <motion.div
                      className="absolute z-10 h-[40px] w-[40px] bg-self-blue-400"
                      style={{
                        y: yPosition,
                      }}
                    />
                    <div className="z-20 h-6 w-6">
                      {cluster.descriptiveIcon}
                    </div>
                  </div>
                  <motion.div
                    className="absolute -bottom-4 left-1/2 h-2 w-2 -translate-x-1/2 transform rounded-full bg-self-blue-100"
                    style={{
                      // show if the spawned fragment in this round has some values for this cluster
                      opacity: fragmentClusterValue
                        ? cardDrivenProps.clusterValueIndicatorOpacity
                        : 0,
                    }}
                  />
                </div>
              );
            })}
        </div>
        <div id="cardsWrapper" className="relative aspect-[88/107] w-full">
          <AnimatePresence>
            {baseCards
              .filter((round) => round + 1 >= roundNumber)
              .map((round) => {
                const fragment = fragmentsSpawned.find(
                  (f) => f.roundNumber === round + 1,
                );

                return (
                  <motion.div
                    key={`card-${round + 1}`}
                    className="relative"
                    variants={cardVariants}
                    style={{
                      pointerEvents:
                        round + 1 === roundNumber ? "auto" : "none",
                      display: round + 1 >= roundNumber ? "block" : "none",
                    }}
                    initial="remaining"
                    animate={
                      round + 1 === roundNumber
                        ? "current"
                        : round === roundNumber
                          ? "upcoming"
                          : "remaining"
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
                      setDirection={setDirection}
                    />
                  </motion.div>
                );
              })}
          </AnimatePresence>
        </div>
        <div className="relative left-0 flex min-h-12 w-full items-center justify-end px-2">
          <div
            id="actions"
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-2"
          >
            <GameActionBtn
              direction="left"
              ariaLabel="swipe left"
              scale={cardDrivenProps.buttonScaleBadAnswer}
              onClick={() => handleActionBtnOnClick("left")}
            />
            <GameActionBtn
              direction="right"
              ariaLabel="swipe right"
              scale={cardDrivenProps.buttonScaleGoodAnswer}
              onClick={() => handleActionBtnOnClick("right")}
            />
          </div>
          <div className="h-12 w-12">
            <UnlockedImages unlockedImages={unlockedImages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCards;
