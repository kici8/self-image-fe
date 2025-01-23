"use client";

import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import { toast } from "./use-toast";
import { staticClusters, staticImages } from "../referenceElements";
import {
  TypeGridImage,
  typeGridType,
} from "@/app/room/[code]/components/ImageGrid";
import { Cluster } from "@/app/room/[code]/components/ClusterListItem";

type PlayerConnectedResponse = {
  player_id: string;
  nickname: string;
};

type RoomData = {
  code: string;
  session_id: string;
  status: number; // 0 open, 1 closed
  scores: {
    cluster_id: string;
    score: number;
  }[];
  connected_players: string[];
  unlocked_filters: string[];
  unlocked_images: string[];
};

type RoomProgressResponse = RoomData;

type RoomSelfie = {
  filters: string[];
  player_id: string;
  selfie_id: string;
};

type roomSelfieResponse = RoomSelfie;

interface ServerToClientEvents {
  player_connected: (data: PlayerConnectedResponse) => void;
  room_progress: (data: RoomProgressResponse) => void;
  room_selfie: (data: roomSelfieResponse) => void;
}

type JoinRoomPayload = {
  code: string;
};

type JoinRoomResponse = {
  status: "success" | "error";
  data: RoomData;
};

type LeaveRoomResponse = {
  status: "success"; // TODO: error handling?
};

interface ClientToServerEvents {
  join_room: (
    data: JoinRoomPayload,
    callback: (data: JoinRoomResponse) => void,
  ) => void;
  leave_room: (
    data: JoinRoomPayload,
    callback: (data: LeaveRoomResponse) => void,
  ) => void;
}

function getMappedImages(
  sessionId: string | null,
  unlockedImages: string[],
): TypeGridImage[] {
  return staticImages.map((image) => ({
    ...image,
    index: staticImages.indexOf(image),
    unlocked: unlockedImages.includes(image.id) || false,
    type: typeGridType.image,
    session_id: sessionId,
  }));
}

function getMappedClusters(
  scores: {
    cluster_id: string;
    score: number;
  }[],
): Cluster[] {
  return staticClusters.map((cluster) => ({
    ...cluster,
    percentage:
      (scores.find((score) => score.cluster_id === cluster.id)?.score ?? 0) *
      100,
  }));
}

export const useSocket = () => {
  const socketRef = useRef<Socket<
    ServerToClientEvents,
    ClientToServerEvents
  > | null>(null);

  const [isSocketConnected, setIsSocketConnected] = useState(false);
  const [isRoomConnected, setIsRoomConnected] = useState(false);
  const [roomData, setRoomData] = useState<RoomProgressResponse | null>(null);
  const [selfies, setSelfies] = useState<TypeGridImage[]>([]);
  const [images, setImages] = useState<TypeGridImage[]>([]);
  const [clusters, setClusters] = useState<Cluster[]>([]);

  useEffect(() => {
    socketRef.current = io(process.env.NEXT_PUBLIC_SOCKET_URL);

    socketRef.current.on("connect", () => {
      setIsSocketConnected(true);
      console.log("Connected to Socket.IO server");
    });

    socketRef.current.on("player_connected", (data) => {
      console.log("player_connected", data);
      setRoomData((prev) =>
        prev
          ? {
              ...prev,
              connected_players: [...prev.connected_players, data.nickname],
            }
          : null,
      );
    });

    socketRef.current.on("room_progress", (data) => {
      console.log("room_progress receiving", data);
      // Update room data
      setRoomData(data);
      // Update images
      setImages(getMappedImages(data.session_id, data.unlocked_images));
      // Update clusters
      setClusters(getMappedClusters(data.scores));
    });

    socketRef.current.on("room_selfie", (data) => {
      console.log("room_selfie receiving", data, selfies);
      // Update selfies only if the player has not already submitted a selfie
      if (
        selfies.find((selfie) => selfie.author_id === data.player_id) ==
        undefined
      ) {
        setSelfies((prev) => [
          ...prev,
          {
            id: data.selfie_id,
            author: undefined,
            author_id: data.player_id,
            description: undefined,
            filters: data.filters,
            src: `${process.env.NEXT_PUBLIC_API_URL}/api/room/selfie/${data.selfie_id}`,
            title: undefined,
            year: undefined,
            session_id: roomData?.session_id || null,
            index: Math.floor(Math.random() * staticImages.length),
            unlocked: true,
            type: typeGridType.selfie,
          },
        ]);
      }
    });

    socketRef.current.on("disconnect", () => {
      setIsSocketConnected(false);
      console.log("Disconnected from Socket.IO server");
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, [roomData?.session_id, selfies]);

  const joinRoom = (code: string) => {
    socketRef.current?.emit("join_room", { code }, (data) => {
      if (data.status === "success") {
        setIsRoomConnected(true);
        // Init room data
        setRoomData((prev) => {
          if (JSON.stringify(prev) !== JSON.stringify(data.data)) {
            console.log("Join room", data);
            return data.data;
          }
          return prev;
        });
        // Init clusters
        setClusters((prev) => {
          const newClusters = getMappedClusters(data.data.scores);
          if (JSON.stringify(prev) !== JSON.stringify(newClusters)) {
            return getMappedClusters(data.data.scores);
          }
          return prev;
        });

        // Init images
        setImages((prev) => {
          const newImages = getMappedImages(
            data.data.session_id,
            data.data.unlocked_images,
          );
          if (JSON.stringify(prev) !== JSON.stringify(newImages)) {
            return newImages;
          }
          return prev;
        });
      }

      if (data.status === "error") {
        console.error("Error joining room:", data);
        toast({
          title: "Impossibile connettersi alla stanza",
          description:
            "La stanza potrebbe non esistere, essere chiusa o avere problemi di connessione.",
          variant: "destructive",
        });
        setIsRoomConnected(false);
      }
    });
  };

  // TODO: Do I need this?
  const leaveRoom = (code: string) => {
    socketRef.current?.emit("leave_room", { code }, (data) => {
      console.log("Leave room", data);
    });
  };

  return {
    isSocketConnected,
    isRoomConnected,
    joinRoom,
    roomData,
    selfies,
    images,
    clusters,
    leaveRoom,
  };
};
