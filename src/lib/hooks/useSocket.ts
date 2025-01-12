"use client";

import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

type Player = {
  player_id: string;
  nickname: string;
};

type RoomSelfie = {
  image_base64: string;
  applied_filters: string[];
};

type PlayerConnectedResponse = Player;

type RoomProgressResponse = {
  scores: {
    cluster_id: string;
    value: number;
  }[];
  unlocked_filters: string[];
  unlocked_images: string[];
};

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
  session_id: string;
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
  const [roomConnectedPlayer, setRoomConnectedPlayer] = useState<Player[]>([]);
  const [roomProgress, setRoomProgress] = useState<RoomProgressResponse | null>(
    null,
  );
  const [roomSelfie, setRoomSelfie] = useState<RoomSelfie[]>([]);

  useEffect(() => {
    socketRef.current = io(process.env.NEXT_PUBLIC_SOCKET_URL);

    socketRef.current.on("connect", () => {
      setIsConnected(true);
      console.log("Connected to Socket.IO server");
    });

    // TODO: this api may change in favor of a list of players in room progress
    // So if the dashboard get refreshed, the list of players is still there
    socketRef.current.on("player_connected", (data) => {
      setRoomConnectedPlayer((prev) => [...prev, data]);
    });

    socketRef.current.on("room_progress", (data) => {
      setRoomProgress(data);
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
  }, []);

  const joinRoom = (code: string) => {
    socketRef.current?.emit("join_room", { code }, (data) =>
      console.log("Join room", data),
    );
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
    roomConnectedPlayer,
    roomProgress,
    roomSelfie,
    setRoomProgress,
    setRoomSelfie,
    leaveRoom,
  };
};

// export const useGetMappedCluster = () => {
//   const {roomProgress} = useSocket();

//   const [mappedCluster, setMappedCluster] = useState<Cluster[]>([]);

//   useEffect(() => {
//     if (roomProgress) {
//       const mappedCluster = roomProgress.scores.map(({ cluster_id, value }) => {
//         return {
//           id: cluster_id,
//           name: cluster_id,
//           icon: <div />,
//           percentage: value,
//         };
//       });
//       setMappedCluster(mappedCluster);
//     }

//   }, []);

//   return mappedCluster;
// }
