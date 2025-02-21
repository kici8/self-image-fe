"use client";

import { CameraKitSession, Lens } from "@snap/camera-kit";
import { animate, motion, useMotionValue } from "framer-motion";
import { useState } from "react";

type LensCarouselProps = {
  lenses: Lens[];
  handleShoot: () => void;
  session: CameraKitSession;
};

const getReverseIndex = (index: number, numberOfLenses: number) =>
  numberOfLenses - 1 - index;

const LensCarousel = ({ lenses, handleShoot, session }: LensCarouselProps) => {
  // size: The width (and height) of each carousel item.

  // Initial data
  const size = 80;
  const initialX = (lenses.length / 2) * size - size / 2;

  // Hooks
  const x = useMotionValue(initialX);

  // State
  const [activeIndex, setActiveIndex] = useState(lenses.length - 1);
  const [isDragging, setIsDragging] = useState(false);

  // Utils

  const animateToIndex = (index: number) => {
    // Get the x value for the closest index
    const closestX = index * size - size * (lenses.length / 2) + size / 2;
    // animate to the closest index
    animate(x, closestX, {
      type: "spring",
      stiffness: 500,
      damping: 30,
    });
    // update the ui
    setActiveIndex(index);
    const realIndex = getReverseIndex(index, lenses.length);
    session.applyLens(lenses[realIndex]);
  };

  // Callbacks
  const handleDragEnd = () => {
    // Don't allow dragging if only one filter
    if (lenses.length <= 1) return;
    // Get the closest index based on the current x value.
    // Se trasciniamo gli elementi fino al centro
    // A sinistra abbiamo i valori positivi, a destra i valori negativi
    // Ad esempio con tre lenti, la prima lente è a x = 80, la seconda a x = 0, la terza a x = -80
    // Mentre con 5 lenti la prima è a x = 160, la seconda a x = 80, la terza a x = 0, la quarta a x = -80, la quinta a x = -160

    // Quindi se voglio sapere l'index della lens che in questo momento si trova al centro
    // Devo dividere x per size e arrotondare al numero intero più vicino
    // Però in questo modo l'index parte a contare dalla lente centrale
    // Quindi devo aggiungere lenses.length / 2 per avere l'index corretto
    // Inoltre a x devo aggiungere size / 2 per centrare la lente
    const currentIndex = Math.max(
      0,
      Math.min(
        lenses.length - 1,
        Math.round((x.get() - size / 2) / size + lenses.length / 2),
      ),
    );

    animateToIndex(currentIndex);
    setTimeout(() => setIsDragging(false), 125);
  };

  const handleClick = (index: number) => {
    if (isDragging) return;
    if (index === activeIndex) {
      handleShoot();
      return;
    }
    animateToIndex(index);
  };

  return (
    <div className="absolute bottom-0 left-0 z-20 flex h-full w-full items-center justify-center overflow-hidden">
      {lenses.length > 0 ? (
        <motion.div
          drag={lenses.length > 1 ? "x" : false} // Disable drag if only 1 filter
          dragConstraints={{
            left: -((lenses.length * size) / 2) + size / 2,
            right: (lenses.length * size) / 2 - size / 2,
          }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          style={{ x }}
          className="flex items-center"
        >
          {lenses.map((lens, index) => {
            // Determine if the current item is the one selected (in inverted order)
            const lensIndex = getReverseIndex(index, lenses.length);
            const isSelected = lensIndex === activeIndex;
            return (
              <motion.div
                key={lens.id}
                className="flex h-20 w-20 items-center justify-center rounded-full p-2"
                onClick={() => handleClick(lensIndex)}
              >
                <motion.div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${lens.iconUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    scale: isSelected ? 1 : 0.8,
                    cursor: isSelected ? "pointer" : "grab",
                  }}
                  whileHover={{
                    scale: 0.8,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      ) : (
        <motion.div
          className="h-16 w-16 rounded-full bg-white"
          style={{}}
          whileHover={{
            scale: 0.8,
          }}
          onClick={handleShoot}
        />
      )}
    </div>
  );
};

export default LensCarousel;
