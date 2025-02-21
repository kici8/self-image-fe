"use client";

import AchieveBackground from "@/components/AchieveBackground";
import { Button } from "@/components/ui/button";
import { staticClusterImages } from "@/lib/ourData/clusterImages";
import { LayoutGroup, motion } from "framer-motion";
import { useEffect, useState } from "react";

type UnlockedImagesProps = {
  unlockedImages: Set<string>;
};

export default function UnlockedImages({
  unlockedImages,
}: UnlockedImagesProps) {
  const [isOpen, setIsOpen] = useState(true);

  const visibleUnlockedImages = [...unlockedImages].slice(-3);
  const lastUnlockedImage = staticClusterImages.find(
    (image) =>
      image.id === visibleUnlockedImages[visibleUnlockedImages.length - 1],
  );

  useEffect(() => {
    if (lastUnlockedImage) {
      setIsOpen(true);
    }
  }, [lastUnlockedImage]);

  return (
    <div className="relative z-30 h-12 w-12 rounded-md border border-dashed bg-background/40">
      {visibleUnlockedImages.map((imageId, index) => {
        const image = staticClusterImages.find((image) => image.id === imageId);
        if (!image || image.id === lastUnlockedImage?.id) return null;
        return (
          <motion.div
            key={image.id}
            style={{
              zIndex: 30,
              display: "flex",
              height: 48,
              width: 48,
              justifyContent: "center",
              overflow: "hidden",
              borderRadius: 8,
              rotate: index === 0 ? -4 : -18,
              position: "absolute",
              left: 0,
              top: 0,
            }}
            onClick={() => setIsOpen(true)}
          >
            <motion.div
              id="image"
              style={{
                backgroundImage: `url(${image?.src})`,
                height: 48,
                width: 48,
                backgroundSize: "cover",
                backgroundOrigin: "center",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </motion.div>
        );
      })}
      {visibleUnlockedImages.length > 0 ? (
        <LayoutGroup>
          {isOpen ? (
            <>
              <div
                className="fixed left-0 top-0 z-30 h-full w-full bg-self-blue-950/80"
                onClick={() => setIsOpen(false)}
              >
                <div className="absolute left-1/2 top-1/2 aspect-square min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 transform">
                  <AchieveBackground className="absolute z-0 min-h-full min-w-full object-center text-self-blue-300/10" />
                </div>
              </div>

              <motion.div
                layoutId="unlockedImage"
                className="bg-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5 },
                }}
                style={{
                  position: "fixed",
                  left: "50%",
                  top: "50%",
                  zIndex: 40,
                  marginLeft: -140,
                  marginTop: -260,
                  width: 280,
                  display: "flex",
                  shadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  flexDirection: "column",
                  overflow: "hidden",
                  borderRadius: 8,
                }}
              >
                <motion.div
                  id="image"
                  layout
                  style={{
                    backgroundImage: `url(${lastUnlockedImage?.src})`,
                    width: 280,
                    height: 220,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOrigin: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <motion.div>
                  <motion.div
                    layout
                    style={{
                      padding: 16,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: 16,
                    }}
                  >
                    <h2 className="text-center text-xl font-semibold text-primary">
                      Immagine sbloccata
                    </h2>
                    <p className="text-md text-center text-muted-foreground">
                      <span className="font-semibold text-card-foreground">
                        {lastUnlockedImage?.author || "Autore sconosciuto"}:{" "}
                      </span>
                      {lastUnlockedImage?.title || "Senza titolo"}
                    </p>

                    <Button className="mt-4" onClick={() => setIsOpen(false)}>
                      Continua
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </>
          ) : (
            <motion.div
              layoutId="unlockedImage"
              className="bg-card"
              style={{
                position: "relative",
                zIndex: 40,
                display: "flex",
                height: 48,
                width: 48,
                justifyContent: "center",
                overflow: "hidden",
                borderRadius: 8,
                padding: 0,
                rotate: 12,
              }}
              onClick={() => setIsOpen(true)}
            >
              <motion.div
                id="image"
                layout
                style={{
                  backgroundImage: `url(${lastUnlockedImage?.src})`,
                  width: 48,
                  height: 48,
                  backgroundSize: "cover",
                  backgroundOrigin: "center",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </motion.div>
          )}
        </LayoutGroup>
      ) : null}
    </div>
  );
}
