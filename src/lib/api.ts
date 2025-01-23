import AxiosInstance from "./axios";

type Cluster = {
  cluster_id: string;
  score: number;
};

type Session = {
  session_id: string;
  scores: Cluster[];
};

type RoomResults = {
  unlocked_images?: string[];
  unlocked_filters?: string[];
  sessions: Session[];
};

type Interaction = {
  cluster_id: string;
  image_id: string;
  fragment_id: string;
  liked: boolean;
};

type Participant = {
  nickname: string;
  // TODO: why no unlocked_images and unlocked_filters?
  // unlocked_images?: string[];
  // unlocked_filters?: string[];
  sessions: {
    session_id: string;
    interactions: Interaction[];
    clusters: Cluster[];
    selfie_id?: string;
  }[];
};

type CreateRoomResponse = {
  room_code: string;
  session_id: string;
};

export const createRoom = async (): Promise<CreateRoomResponse> => {
  const response = await AxiosInstance.post("/api/room/create");
  return response.data;
};

type createNewRoomSessionResponse = {
  // TODO: check if this is an ENUM or just a 200
  status: string;
  data: {
    session_id: string;
  };
};

type createNewRoomSessionPayload = {
  room_code: string;
};

export const createNewRoomSession = async (
  payload: createNewRoomSessionPayload,
): Promise<createNewRoomSessionResponse> => {
  const response = await AxiosInstance.post("/api/room/new-session", payload);
  return response.data;
};

type exportRoomResultsResponse = {
  status: string;
  data: {
    roomResults: RoomResults;
    participants: Participant[];
  };
};

type exportRoomResultsPayload = {
  room_code: string;
  session_id?: string;
};

export const exportRoomResults = async (
  payload: exportRoomResultsPayload,
): Promise<exportRoomResultsResponse> => {
  const response = await AxiosInstance.get("/api/room/export", {
    params: payload,
  });
  return response.data;
};

type closeRoomResponse = {
  // TODO: check if this is an ENUM or just a 200
  status: string;
};

type closeRoomPayload = {
  room_code: string;
};

export const closeRoom = async (
  payload: closeRoomPayload,
): Promise<closeRoomResponse> => {
  const response = await AxiosInstance.delete("/api/room/close", {
    data: payload,
  });
  return response.data;
};
