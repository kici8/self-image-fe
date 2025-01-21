"use client";

import { Button } from "@/components/ui/button";
import { closeRoom, createNewRoomSession } from "@/lib/api";
import { toast } from "@/lib/hooks/use-toast";
import { useSocket } from "@/lib/hooks/useSocket";
import { DownloadIcon, LoaderCircleIcon, RefreshCwIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import CloseRoomDialog from "./CloseRoomDialog";
import ClusterList from "./ClusterList";
import CodeAnimation from "./CodeAnimation";
import ConnectionIndicator from "./ConnectionIndicator";
import ImageGrid from "./ImageGrid";

export default function Room({ code }: { code: string }) {
  // Hooks
  const router = useRouter();
  const {
    joinRoom,
    roomData,
    clusters: mappedClusters,
    images: processedImages,
    selfies: mappedSelfies,
    isRoomConnected,
    isSocketConnected,
  } = useSocket();

  // States
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

  // Callbacks
  const onNewSession = async () => {
    setIsNewSessionLoading(true);
    try {
      const response = await createNewRoomSession({ room_code: code });
      if (response.status === "success") {
        toast({
          title: "Nuova sessione creata",
          description: "Una nuova sessione è stata creata correttamente.",
          variant: "default",
        });
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
      const response = await fetch(
        `/api/generate-results-pdf/?room_code=${code}`,
      );

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

  // Show only the selfies of the current session
  const filteredSelfies = mappedSelfies.filter(
    (selfie) => selfie.session_id === roomData?.session_id,
  );

  // Merge the images and the selfies and sort them by index
  const allImages = [...processedImages, ...filteredSelfies].sort(
    (a, b) => a.index - b.index,
  );

  return (
    <div className="flex h-svh">
      <div className="flex-1">
        <ImageGrid images={allImages} />
      </div>

      <div className="flex h-svh w-96 flex-col gap-8 overflow-hidden">
        <div className="flex flex-col gap-6 p-3 text-foreground">
          <div className="flex-0 flex items-center">
            <h2 className="flex-1 font-mono text-6xl font-bold">
              <CodeAnimation targetCode={code} />
            </h2>
            <ConnectionIndicator
              isRoomConnected={isRoomConnected}
              isSocketConnected={isSocketConnected}
            />
          </div>
          <div className="h-6">
            <Marquee>
              <p className="text-md"></p>
              {(roomData?.connected_players ?? []).length > 0 ? (
                <>
                  <span className="mr-2 font-semibold">{`Partecipanti (${roomData?.connected_players.length || 0}):`}</span>
                  {(roomData?.connected_players ?? []).map((player) => (
                    <span key={player} className="mr-2 font-semibold">
                      {player}{" "}
                    </span>
                  ))}
                </>
              ) : null}
              <span className="mx-8 italic text-secondary-foreground">
                - Per partecipare alla stanza inserisci il codice sopra -
              </span>
            </Marquee>
          </div>

          <div className="flex gap-2">
            {/* <Button className="flex-1 rounded-full" variant="outline">
              Partecipanti: {roomData?.connected_players.length || 0}
            </Button> */}
            <Button
              onClick={onNewSession}
              disabled={isNewSessionLoading}
              className="flex-1 rounded-full"
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
          <ClusterList cluster={mappedClusters} />
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
