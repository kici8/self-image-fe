"use client";

import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

type StrapiRoomStage = "OPEN" | "IN_PROGRESS" | "CLOSED";

export type StrapiRoomUpdatedResponse = {
  id: number;
  documentId: string;
  code: string;
  stage: StrapiRoomStage;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  host: {
    count: number;
  };
  participants: {
    count: number;
  };
  createdBy: {
    id: number;
    documentId: string;
    firstname: string;
    lastname: string;
    username: null;
    email: string;
    password: string;
    resetPasswordToken: null;
    registrationToken: null;
    isActive: true;
    blocked: false;
    preferedLanguage: null;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    locale: null;
  };
  updatedBy: {
    id: 1;
    documentId: string;
    firstname: string;
    lastname: string;
    username: null;
    email: string;
    password: string;
    resetPasswordToken: null;
    registrationToken: null;
    isActive: true;
    blocked: false;
    preferedLanguage: null;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    locale: null;
  };
  localizations: [];
};

type playerConnectedResponse = {
  player_id: string;
  nickname: string;
};

type roomProgressResponse = {
  scores: {
    cluster_id: string;
    value: number;
  }[];
  unlocked_filters: string[];
  unlocked_images: string[];
};

type roomSelfieResponse = {
  image_base64: string;
  applied_filters: string[];
};

// TODO: forse bisogna approfondire il discorso della room in socket
interface ServerToClientEvents {
  "room.updated": (data: StrapiRoomUpdatedResponse) => void;
  player_connected: (data: playerConnectedResponse) => void;
  room_progress: (data: roomProgressResponse) => void;
  room_selfie: (data: roomSelfieResponse) => void;
}

interface ClientToServerEvents {
  "room.updated": (data: StrapiRoomUpdatedResponse) => void;
}

type UseSocketProperties = {
  room_code?: string;
};

export const useSocket = ({ room_code }: UseSocketProperties) => {
  const socketRef = useRef<Socket<
    ServerToClientEvents,
    ClientToServerEvents
  > | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  // const [isRoomJoined, setIsRoomJoined] = useState(false);
  const [updatedMessage, setUpdatedMessage] =
    useState<StrapiRoomUpdatedResponse | null>(null);

  useEffect(() => {
    socketRef.current = io(process.env.NEXT_PUBLIC_SOCKET_URL);

    socketRef.current.on("connect", () => {
      setIsConnected(true);
      console.log("Connesso al server Socket.IO");
    });

    // TODO: remove strapi
    socketRef.current.on("room.updated", (data) => {
      console.log("Messaggio ricevuto:", data);
      setUpdatedMessage(data);
    });

    console.log("room_code", room_code);

    //
    socketRef.current.on("disconnect", () => {
      setIsConnected(false);
      console.log("Disconnesso dal server Socket.IO");
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  const sendMessage = (msg: StrapiRoomUpdatedResponse) => {
    socketRef.current?.emit("room.updated", msg);
  };

  return { isConnected, updatedMessage, sendMessage };
};
