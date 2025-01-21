"use client";

import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import { toast } from "./use-toast";

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

export const useSocket = () => {
  const socketRef = useRef<Socket<
    ServerToClientEvents,
    ClientToServerEvents
  > | null>(null);

  const [isSocketConnected, setIsSocketConnected] = useState(false);
  const [isRoomConnected, setIsRoomConnected] = useState(false);
  const [roomData, setRoomData] = useState<RoomProgressResponse | null>(null);
  const [roomSelfies, setRoomSelfies] = useState<RoomSelfie[]>([]);
  const [lastRoomSelfie, setLastRoomSelfie] = useState<RoomSelfie | null>(null);

  useEffect(() => {
    socketRef.current = io(process.env.NEXT_PUBLIC_SOCKET_URL);

    socketRef.current.on("connect", () => {
      setIsSocketConnected(true);
      console.log("Connected to Socket.IO server");
    });

    socketRef.current.on("player_connected", (data) => {
      console.log("player_connected", data);
      const alreadyConnected = roomData?.connected_players.includes(
        data.nickname,
      );

      if (alreadyConnected) return;
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
      setRoomData(data);
    });

    socketRef.current.on("room_selfie", (data) => {
      console.log("room_selfie receiving", data);
      setRoomSelfies((prev) => [...prev, data]);
      setLastRoomSelfie(data);
    });

    socketRef.current.on("disconnect", () => {
      setIsSocketConnected(false);
      console.log("Disconnected from Socket.IO server");
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, [roomData?.connected_players]);

  const joinRoom = (code: string) => {
    socketRef.current?.emit("join_room", { code }, (data) => {
      if (data.status === "success") {
        setIsRoomConnected(true);
        setRoomData((prev) => {
          if (JSON.stringify(prev) !== JSON.stringify(data.data)) {
            console.log("Join room", data);

            return data.data;
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
    roomSelfies,
    lastRoomSelfie,
    leaveRoom,
  };
};
