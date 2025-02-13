"use client";

import { useState, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { SpawnedFragment } from "../../store/gameContext";

type CardDrivenProps = {
  cardWrapperX: number;
  buttonScaleBadAnswer: number;
  buttonScaleGoodAnswer: number;
  clusterValueIndicatorOpacity: number;
};

type GameCardProps = {
  // Unique ID for the card component
  id: number;
  // The fragment data to display in the card.
  data: SpawnedFragment | undefined;
  // Function to update the driven properties from drag motion.
  setCardDrivenProps: Dispatch<SetStateAction<CardDrivenProps>>;
  // Function to update whether the card is in dragging state.
  setIsDragging: Dispatch<SetStateAction<boolean>>;
  // Indicates whether the card is currently being dragged.
  isDragging: boolean;
  // Indicates if this card is the last one.
  isLast: boolean;
  // Function to set the swipe direction.
  setDirection: Dispatch<SetStateAction<CardSwipeDirection>>;
};

export type CardSwipeDirection = "left" | "right" | null;

/**
 * GameCard component displays a card with an image that can be swiped.
 */
const GameCard = ({
  id,
  data,
  setCardDrivenProps,
  setIsDragging,
  isDragging,
  setDirection,
}: GameCardProps) => {
  // Track image loading state to smoothly transition image opacity.
  const [imgLoadingComplete, setImgLoadingComplete] = useState<boolean>(false);

  // Determine if running on mobile (viewport width less than 768px)
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const x = useMotionValue(0);
  const offsetBoundary = 150;

  // Input and output ranges for card drag transformations.
  const inputX = [offsetBoundary * -1, 0, offsetBoundary];
  const outputX = [-200, 0, 200];
  const outputY = [50, 0, 50];
  const outputRotate = [-40, 0, 40];
  const outputActionScaleBadAnswer = [1.5, 1, 0.3];
  const outputActionScaleRightAnswer = [0.3, 1, 1.5];

  // Derived motion values for card and action button animations.
  const drivenX = useTransform(x, inputX, outputX);
  const drivenY = useTransform(x, inputX, outputY);
  const drivenRotation = useTransform(x, inputX, outputRotate);
  const drivenActionLeftScale = useTransform(
    x,
    inputX,
    outputActionScaleBadAnswer,
  );
  const drivenActionRightScale = useTransform(
    x,
    inputX,
    outputActionScaleRightAnswer,
  );
  const drivenActionClusterValueIndicator = useTransform(x, inputX, [1, 0, 1]);

  // Update external card properties when motion value changes.
  useMotionValueEvent(x, "change", (latest) => {
    setCardDrivenProps((prev: CardDrivenProps) => ({
      ...prev,
      cardWrapperX: latest,
      buttonScaleBadAnswer: drivenActionLeftScale.get(),
      buttonScaleGoodAnswer: drivenActionRightScale.get(),
      clusterValueIndicatorOpacity: drivenActionClusterValueIndicator.get(),
    }));
  });

  return (
    <>
      {/* Card visual with image */}
      <motion.div
        id={`cardDrivenWrapper-${id}`}
        className="pointer-events-none absolute aspect-[88/107] w-full origin-bottom select-none rounded-lg bg-white p-2 shadow-card"
        style={{
          y: drivenY,
          rotate: drivenRotation,
          x: drivenX,
        }}
      >
        <div
          id="illustration"
          className="relative aspect-square w-full bg-neutral-300"
        >
          {data && data.url ? (
            <Image
              priority
              className={`absolute object-cover object-center ${
                imgLoadingComplete ? "opacity-100" : "opacity-0"
              } duration-500 ease-out`}
              src={data.url}
              fill
              sizes={`(max-width: 768px) 100vw, 250px`}
              alt=""
              onLoad={() => setImgLoadingComplete(true)}
            />
          ) : (
            <div className="h-full w-full rounded-full bg-gray-100" />
          )}
        </div>
      </motion.div>

      {/* Draggable overlay to capture swipe gestures */}
      <motion.div
        id={`cardDriverWrapper-${id}`}
        className={`absolute aspect-[100/150] w-full ${!isDragging ? "hover:cursor-grab" : ""}`}
        drag="x"
        dragSnapToOrigin
        dragElastic={isMobile ? 0.2 : 0.06}
        dragConstraints={{ left: 0, right: 0 }}
        dragTransition={{ bounceStiffness: 1000, bounceDamping: 50 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={(_, info) => {
          setIsDragging(false);
          const isOffBoundary =
            info.offset.x > offsetBoundary || info.offset.x < -offsetBoundary;
          const swipeDirection = info.offset.x > 0 ? "right" : "left";
          if (isOffBoundary) {
            setDirection(swipeDirection);
          }
        }}
        style={{ x }}
      ></motion.div>
    </>
  );
};

export default GameCard;
