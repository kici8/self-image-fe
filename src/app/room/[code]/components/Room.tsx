"use client";

import { Button } from "@/components/ui/button";
import { useSocket } from "@/lib/hooks/useSocket";
import { mockImages, staticClusters, TypeImage } from "@/lib/mockdata";
import { DownloadIcon, LoaderCircleIcon, RefreshCwIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import ClusterList, { Cluster } from "./ClusterList";
import ImageGrid from "./ImageGrid";
import CloseRoomDialog from "./CloseRoomDialog";
import { closeRoom } from "@/lib/api";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";

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
  // TODO: Handle new session
  // Next.js allows you to use the native window.history.pushState and
  // window.history.replaceState methods to
  // update the browser's history stack without reloading the page.
  // pushState and replaceState calls integrate into the Next.js Router,
  // allowing you to sync with usePathname and useSearchParams.

  return (
    <div className="flex h-svh">
      <div className="flex-1">
        <ImageGrid images={imagesWithSelfie} />
      </div>

      <div className="flex min-w-96 flex-grow-0 flex-col gap-6 p-3">
        <div className="flex flex-grow-0 flex-col gap-6 rounded-xl bg-card p-3">
          <div className="flex">
            <div className="flex flex-1 flex-col justify-center px-6">
              <h2 className="text-4xl font-semibold italic">{code}</h2>
              <p className="text-sm text-muted-foreground">
                Entra nella stanza
              </p>
              <p className="text-sm text-muted-foreground">
                {/* TODO: */}
                {isConnected ? "Stanza collegata" : "STANZA OFFLINE"}
              </p>
            </div>
          </div>

          <div className="flex flex-col text-sm">
            <div className="flex gap-1 text-muted-foreground">
              Utenti entrati:
              <span className="font-bold text-primary">
                {roomData?.connected_players.length || 0}
              </span>
            </div>
            {roomData?.connected_players.map((player) => (
              <span key={player}>{player}</span>
            ))}
          </div>
          <Button>
            Nuova sessione
            <RefreshCwIcon />
          </Button>
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
            Scarica risultati
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
