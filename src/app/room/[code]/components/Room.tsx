"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { closeRoom, createNewRoomSession } from "@/lib/api";
import { useSocket } from "@/lib/hooks/useSocket";
import { mockImages, staticClusters, TypeImage } from "@/lib/mockdata";
import {
  DownloadIcon,
  LoaderCircleIcon,
  RefreshCwIcon,
  ZapIcon,
  ZapOffIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import CloseRoomDialog from "./CloseRoomDialog";
import ClusterList, { Cluster } from "./ClusterList";
import ImageGrid from "./ImageGrid";
import CodeAnimation from "./CodeAnimation";
import Marquee from "react-fast-marquee";

export default function Room({ code }: { code: string }) {
  // TODO: listen for changes in the room and update the UI accordingly
  // On the main content show the gallery of images

  // On the sidebar show:

  // // The room code ✅
  // // Connection status
  // // The list of users that ask to join the room or just the counter

  // // Results and categories
  // // New session button
  // // Download results button
  // // Close room button

  // Hooks
  const router = useRouter();
  const { isConnected, joinRoom, roomData } = useSocket();

  // States
  const [imagesWithSelfie, setImagesWithSelfie] = useState<TypeImage[]>([
    ...mockImages,
  ]);
  const [clusters, setClusters] = useState<Cluster[]>(staticClusters);
  const [isCloseRoomDialogOpen, setIsCloseRoomDialogOpen] = useState(false);
  const [isClosingRoomLoading, setIsClosingRoomLoading] = useState(false);
  const [isResultDownloadLoading, setIsResultDownloadLoading] = useState(false);
  const [isNewSessionLoading, setIsNewSessionLoading] = useState(false);

  // Effects
  // Join the room when the code is available

  const stableJoinRoom = useCallback(() => {
    if (code) {
      joinRoom(code);
    }
  }, [code, joinRoom]);

  useEffect(() => {
    stableJoinRoom();
  }, [stableJoinRoom]);

  // Update the clusters with the progress
  useEffect(() => {
    console.log("roomData updating", roomData);

    // Create a map of the scores
    const scoreMap = new Map(
      roomData?.scores?.map(({ cluster_id, score }) => [
        cluster_id,
        score * 100, // Convert the flat value to percentage
      ]) || [],
    );

    // Update the clusters with the progress map
    const updatedClusters = staticClusters.map((staticCluster) => ({
      ...staticCluster,
      percentage: scoreMap.get(staticCluster.id) || 0,
    }));
    setClusters(updatedClusters);

    // Update the images with the unlocked ones
    const updatedImages = mockImages.map((image) => ({
      ...image,
      unlocked: roomData?.unlocked_images.includes(image.id) || false,
    }));

    // TODO: Add the selfie to the images
    setImagesWithSelfie(updatedImages);
  }, [roomData]);

  // Callbacks
  // TODO: Handle new session
  // Next.js allows you to use the native window.history.pushState and
  // window.history.replaceState methods to
  // update the browser's history stack without reloading the page.
  // pushState and replaceState calls integrate into the Next.js Router,
  // allowing you to sync with usePathname and useSearchParams.

  const onNewSession = async () => {
    setIsNewSessionLoading(true);
    try {
      const response = await createNewRoomSession({ room_code: code });
      if (response.status === "success") {
        // TODO: remove the selfies from the images
        // TODO: update the clusters
        // What I have to do here?
      }
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Errore, non è stato possibile creare una nuova sessione",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Errore",
          description: "non è stato possibile creare una nuova sessione",
          variant: "destructive",
        });
      }
    } finally {
      setIsNewSessionLoading(false);
    }
  };

  const onCloseRoom = async () => {
    setIsClosingRoomLoading(true);
    setIsCloseRoomDialogOpen(false);

    try {
      const result = await closeRoom({ room_code: code });
      if (result.status === "success") {
        toast({
          title: "Stanza chiusa",
          description: "La stanza è stata chiusa correttamente.",
          variant: "default",
        });
        router.push("/");
      }
    } catch (err) {
      if (err instanceof Error) {
        toast({
          title: "Errore, non è stato possibile chiudere la stanza",
          description: err.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Errore",
          description: "non è stato possibile chiudere la stanza",
          variant: "destructive",
        });
      }
    } finally {
      setIsClosingRoomLoading(false);
    }
  };

  const onResultsDownload = async () => {
    setIsResultDownloadLoading(true);
    try {
      const response = await fetch("/api/generate-results-pdf");

      if (!response.ok)
        throw new Error("Errore durante la generazione del PDF");

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "report.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Errore durante il download del PDF:", error);
      alert("Errore durante il download del PDF.");
    } finally {
      setIsResultDownloadLoading(false);
    }
  };

  return (
    <div className="flex h-svh">
      <div className="flex-1">
        <ImageGrid images={imagesWithSelfie} />
      </div>

      <div className="flex h-svh w-96 flex-col gap-8 overflow-hidden">
        <div className="flex flex-col gap-6 rounded-bl-[32px] bg-stone-500/30 p-3 text-foreground">
          <div className="flex-0 flex items-center">
            <h2 className="flex-1 font-mono text-6xl font-bold">
              <CodeAnimation targetCode={code} />
            </h2>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary">
              {isConnected ? (
                <ZapIcon className="h-5 w-5" />
              ) : (
                <ZapOffIcon className="h-5 w-5 text-destructive" />
              )}
            </div>
          </div>
          <div className="h-6">
            <Marquee>
              {(roomData?.connected_players ?? []).length > 0
                ? (roomData?.connected_players ?? []).map((player) => (
                    <span key={player} className="text-md mr-4 font-semibold">
                      {player}{" "}
                    </span>
                  ))
                : null}
              <span className="text-md mr-8 italic">
                Per partecipare alla stanza inserisci il codice in alto...
              </span>
            </Marquee>
          </div>
          <div className="flex gap-2">
            <div className="flex h-16 items-center justify-center rounded-[20px] border border-primary px-4 py-1 font-mono text-sm font-[500]">
              Partecipanti:
              <span className="px-1 font-bold">
                {roomData?.connected_players.length || 0}
              </span>
            </div>
            <Button
              onClick={onNewSession}
              disabled={isNewSessionLoading}
              className="h-16 flex-1 rounded-[20px]"
            >
              Nuova sessione
              {isNewSessionLoading ? (
                <LoaderCircleIcon className="animate-spin" />
              ) : (
                <RefreshCwIcon />
              )}
            </Button>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <ClusterList cluster={clusters} />
        </div>

        <div className="flex gap-2 rounded-lg bg-card px-4 py-4">
          <Button
            variant="outline"
            className="flex-1"
            onClick={onResultsDownload}
            disabled={isResultDownloadLoading}
          >
            Scarica
            {isResultDownloadLoading ? (
              <LoaderCircleIcon className="animate-spin" />
            ) : (
              <DownloadIcon />
            )}
          </Button>
          <CloseRoomDialog
            isOpen={isCloseRoomDialogOpen}
            setIsOpen={setIsCloseRoomDialogOpen}
            onCloseRoom={onCloseRoom}
            isLoading={isClosingRoomLoading}
          />
        </div>
      </div>
    </div>
  );
}
