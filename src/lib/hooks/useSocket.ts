"use client";

import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

type RoomSelfie = {
  image_base64: string;
  applied_filters: string[];
};

type PlayerConnectedResponse = string;

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

type roomSelfieResponse = RoomSelfie;

// TODO: forse bisogna approfondire il discorso della room in socket
interface ServerToClientEvents {
  player_connected: (data: PlayerConnectedResponse) => void;
  room_progress: (data: RoomProgressResponse) => void;
  room_selfie: (data: roomSelfieResponse) => void;
}

type JoinRoomPayload = {
  code: string;
};

type JoinRoomResponse = {
  status: "success"; // TODO: error handling?
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

  const [isConnected, setIsConnected] = useState(false);
  const [roomData, setRoomData] = useState<RoomProgressResponse | null>(null);
  const [roomSelfie, setRoomSelfie] = useState<RoomSelfie[]>([]);

  useEffect(() => {
    socketRef.current = io(process.env.NEXT_PUBLIC_SOCKET_URL);

    socketRef.current.on("connect", () => {
      setIsConnected(true);
      console.log("Connected to Socket.IO server");
    });

    socketRef.current.on("player_connected", (data) => {
      const alreadyConnected = roomData?.connected_players.includes(data);

      if (alreadyConnected) return;
      setRoomData((prev) =>
        prev
          ? {
              ...prev,
              connected_players: [...prev.connected_players, data],
            }
          : null,
      );
    });

    socketRef.current.on("room_progress", (data) => {
      setRoomData(data);
    });

    socketRef.current.on("room_selfie", (data) => {
      setRoomSelfie((prev) => [...prev, data]);
    });

    socketRef.current.on("disconnect", () => {
      setIsConnected(false);
      console.log("Disconnected from Socket.IO server");
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, [roomData?.connected_players]);

  const joinRoom = (code: string) => {
    socketRef.current?.emit("join_room", { code }, (data) => {
      if (data.status === "success") {
        setRoomData((prev) => {
          if (JSON.stringify(prev) !== JSON.stringify(data.data)) {
            return data.data;
          }
          return prev;
        });
      }
    });
  };

  // TODO: when I have to use this?
  // On room unmount or close room?
  const leaveRoom = (code: string) => {
    socketRef.current?.emit("leave_room", { code }, (data) => {
      console.log("Leave room", data);
    });
  };

  return {
    isConnected,
    joinRoom,
    roomData,
    roomSelfie,
    setRoomData,
    setRoomSelfie,
    leaveRoom,
  };
};
