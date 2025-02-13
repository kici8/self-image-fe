import { Button } from "@/components/ui/button";
import { staticClusterImages } from "@/lib/staticElements/clusterImages";
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
    <div className="relative z-30 h-12 w-12 rounded-md border border-dashed border-self-blue-300/40 bg-self-blue-900/80">
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
              padding: 2,
              backgroundColor: "#ffffff",
              rotate: index === 0 ? 0 : -18,
              position: "absolute",
            }}
            onClick={() => setIsOpen(true)}
          >
            <motion.div
              id="image"
              style={{
                backgroundImage: `url(${image?.src})`,
                width: 44,
                height: 44,
                borderRadius: 6,
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
              />
              <motion.div
                layoutId="unlockedImage"
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
                  backgroundColor: "#ffffff",
                }}
              >
                <motion.div
                  id="image"
                  layout
                  style={{
                    backgroundImage: `url(${lastUnlockedImage?.src})`,
                    width: 280,
                    height: 220,
                    backgroundColor: "#a3a7eb",
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
                      gap: 4,
                    }}
                  >
                    <h2 className="text-md mb-4 text-center font-semibold text-self-blue-500">
                      Hai sbloccato un&apos;immagine!
                    </h2>
                    <p className="text-md text-center text-primary-foreground">
                      {lastUnlockedImage?.title}
                    </p>
                    <p className="text-center text-sm text-self-blue-500/80">
                      {lastUnlockedImage?.author}
                    </p>
                    <Button className="mt-8" onClick={() => setIsOpen(false)}>
                      Continua
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </>
          ) : (
            <motion.div
              layoutId="unlockedImage"
              style={{
                position: "relative",
                zIndex: 40,
                display: "flex",
                height: 48,
                width: 48,
                justifyContent: "center",
                overflow: "hidden",
                borderRadius: 8,
                padding: 2,
                backgroundColor: "#ffffff",
                rotate: 12,
              }}
              onClick={() => setIsOpen(true)}
            >
              <motion.div
                id="image"
                layout
                style={{
                  backgroundImage: `url(${lastUnlockedImage?.src})`,
                  width: 44,
                  height: 44,
                  borderRadius: 6,
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
