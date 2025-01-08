"use client";

import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

const SOCKET_SERVER_URL =
  "https://railwayapp-strapi-production-873a.up.railway.app"; // TODO: change with socket.io server and make it an env variable

type RoomStage = "OPEN" | "IN_PROGRESS" | "CLOSED";

export type RoomUpdatedResponse = {
  id: number;
  documentId: string;
  code: string;
  stage: RoomStage;
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

// TODO:
interface ServerToClientEvents {
  "room.updated": (data: RoomUpdatedResponse) => void;
}

interface ClientToServerEvents {
  "room.updated": (data: RoomUpdatedResponse) => void;
}

export const useSocket = () => {
  const socketRef = useRef<Socket<
    ServerToClientEvents,
    ClientToServerEvents
  > | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [updatedMessage, setUpdatedMessage] =
    useState<RoomUpdatedResponse | null>(null);

  useEffect(() => {
    socketRef.current = io(SOCKET_SERVER_URL);

    socketRef.current.on("connect", () => {
      setIsConnected(true);
      console.log("Connesso al server Socket.IO");
    });

    socketRef.current.on("room.updated", (data) => {
      console.log("Messaggio ricevuto:", data);
      setUpdatedMessage(data);
    });

    socketRef.current.on("disconnect", () => {
      setIsConnected(false);
      console.log("Disconnesso dal server Socket.IO");
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  const sendMessage = (msg: RoomUpdatedResponse) => {
    socketRef.current?.emit("room.updated", msg);
  };

  return { isConnected, updatedMessage, sendMessage };
};
