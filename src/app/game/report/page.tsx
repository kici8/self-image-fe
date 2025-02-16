"use client";

import { staticClusterImages } from "@/lib/ourData/clusterImages";
import { staticClusters } from "@/lib/ourData/clusters";
import { motion } from "framer-motion";
import Image from "next/image";
import { JSX, useState } from "react";

import { Button } from "@/components/ui/button";
import { Interaction, sendSessionReport } from "@/lib/api";
import { ArrowRightIcon, LoaderCircleIcon, Undo2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useGame } from "../store/gameContext";
import { useExitGameDialog } from "../store/ExitGameDialogContext";

export default function GameReport() {
  // Hooks
  const {
    clusterValues,
    unlockedImages,
    numberOfFragmentToUnlockImg,
    unlockedFilters,
    seenFragments,
    resetGame,
  } = useGame();
  const router = useRouter();
  const { setIsOpen } = useExitGameDialog();

  // States
  const [retryIsLoading, setRetryIsLoading] = useState(false);
  const [continueIsLoading, setContinueIsLoading] = useState(false);

  // Logic
  const clusterWithValues = staticClusters.map((cluster) => {
    return {
      ...cluster,
      value: clusterValues[cluster.id],
    };
  });
  const sortedClustersByValue = clusterWithValues.sort(
    (a, b) => b.value - a.value,
  );
  const highestCluster = sortedClustersByValue[0];
  const secondHighestCluster = sortedClustersByValue[1];
  const unlockedImagesArray = Array.from(unlockedImages);
  const filteredUnlockedImages =
    unlockedImagesArray.length > 0
      ? staticClusterImages.filter((image) => {
          return unlockedImagesArray.includes(image.id);
        })
      : [];
  const unlockedFiltersArray = Array.from(unlockedFilters);

  // Callbacks

  const handleSendSessionReport = async () => {
    const playerId = localStorage.getItem("player_id");
    const ClusterScore = staticClusters.map((cluster) => {
      return {
        cluster_id: cluster.id,
        score: clusterValues[cluster.id],
      };
    });
    const purgedSeenFragments: Interaction[] = seenFragments.map(
      // remove the url and the roundNumber from the seenFragments
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ({ url, roundNumber, ...rest }) => ({
        ...rest,
      }),
    );

    if (!playerId) {
      return;
    }
    try {
      const response = await sendSessionReport({
        player_id: playerId,
        interactions: purgedSeenFragments,
        scores: ClusterScore,
        unlocked_filters: unlockedFiltersArray,
        unlocked_images: unlockedImagesArray,
      });
      if (response.status === "success") {
        console.log("Report sent successfully");
      }
    } catch (err) {
      console.error("Failed to send report:", err);
    }
  };

  const handleRetry = async () => {
    setRetryIsLoading(true);
    handleSendSessionReport()
      .then(() => {
        resetGame();
        router.push("/game/cards");
      })
      .catch((err) => {
        console.error("Error in handleRetry:", err);
      })
      .finally(() => {
        setRetryIsLoading(false);
      });
  };

  const handleContinue = async () => {
    setContinueIsLoading(true);
    handleSendSessionReport()
      .then(() => {
        router.push("/game/selfie");
      })
      .catch((err) => {
        console.error("Error in handleContinue:", err);
      })
      .finally(() => {
        setContinueIsLoading(false);
      });
  };

  return (
    <div className="relative h-full w-full overflow-auto">
      <motion.div
        transition={{ duration: 0.5, ease: "easeOut" }}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="flex w-full flex-col gap-8 px-4 py-8 pb-16"
      >
        <h2 className="text-center font-mono text-2xl font-bold">Risultati</h2>
        <div className="flex flex-col gap-4">
          <ClusterCard
            icon={highestCluster.icon}
            text={
              <p>
                Prevalenza del settore: <strong>{highestCluster.name}</strong>
              </p>
            }
          />
          <ClusterCard
            icon={secondHighestCluster.icon}
            text={
              <p>
                Con tratti di: <strong>{secondHighestCluster.name}</strong>
              </p>
            }
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-mono text-lg font-bold">
            Immagini sbloccate: {filteredUnlockedImages.length}
          </h3>
          <p className="text-sm">
            {filteredUnlockedImages.length > 0 ? (
              <>
                Hai consevato almeno {numberOfFragmentToUnlockImg} frammenti
                delle immagini sbloccate
              </>
            ) : (
              <>
                Prova a conservare almeno {numberOfFragmentToUnlockImg}{" "}
                frammenti della stessa immagine per sbloccarla
              </>
            )}
          </p>
          {filteredUnlockedImages.length > 0 ? (
            <div className="mt-2 flex flex-col gap-4">
              {filteredUnlockedImages.map((image) => (
                <div key={image.id} className="flex gap-2">
                  <Image
                    src={image.src}
                    alt={image.title || "Immagine senza titolo"}
                    className="flex-0 w-36 rounded-md"
                    sizes="(max-width: 384px) 33vw, 33vw"
                    draggable={false}
                    width={384}
                    height={384}
                    fetchPriority="high"
                  />
                  <div className="flex flex-1 flex-col gap-y-0.5 pt-2">
                    <p className="text-xs text-self-blue-100/60">
                      {image.author || "Autore sconosciuto"}
                    </p>
                    <p className="text-sm">
                      {image.title || "Immagine senza titolo"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-mono text-lg font-bold">
            Filtri sbloccati: {unlockedFiltersArray.length}
          </h3>
          <p className="text-sm">
            {filteredUnlockedImages.length > 0
              ? "Utilizza i filtri sbloccati per scattare un selfie"
              : "Riprova a giocare per sbloccare dei filtri selfie"}
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        className="sticky bottom-6 left-0 flex w-full gap-2 px-4"
      >
        <Button variant="destructive" onClick={() => setIsOpen(true)}>
          Esci
        </Button>
        {unlockedFiltersArray.length > 0 ? (
          <Button className="w-full" onClick={handleContinue}>
            Continua al selfie
            {continueIsLoading ? (
              <LoaderCircleIcon className="animate-spin" />
            ) : (
              <ArrowRightIcon />
            )}
          </Button>
        ) : (
          <Button className="w-full" onClick={handleRetry}>
            Riprova a giocare
            {retryIsLoading ? (
              <LoaderCircleIcon className="animate-spin" />
            ) : (
              <Undo2Icon />
            )}
          </Button>
        )}
      </motion.div>
    </div>
  );
}

const ClusterCard = ({
  icon,
  text,
}: {
  icon: JSX.Element;
  text: JSX.Element;
}) => {
  return (
    <div className="flex items-center gap-4 border-b border-self-blue-300/40 pb-4">
      <div className="flex-1 font-mono">{text}</div>
      <div className="flex-0 h-10 w-10">{icon}</div>
    </div>
  );
};
