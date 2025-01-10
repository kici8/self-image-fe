import AxiosInstance from "./axios";

type CreateStrapiRoomResponse = {
  data: {
    id: number;
    documentId: string;
    code: string;
    stage: "OPEN" | "CLOSED" | "IN_PROGRESS";
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
  meta: unknown;
};

type CreateStrapiRoomPayload = {
  data: {
    stage: "OPEN" | "CLOSED" | "IN_PROGRESS";
    host: {
      id: number;
      username: string;
      email: string;
    };
  };
};

export const createStrapiRoom = async (
  payload: CreateStrapiRoomPayload,
): Promise<CreateStrapiRoomResponse> => {
  //   const response = await AxiosInstance.post("/api/room/create");
  const response = await AxiosInstance.post("/api/rooms", payload);
  return response.data;
};

type CreateRoomResponse = {
  room_code: string;
  session_id: string;
};

export const createRoom = async (): Promise<CreateRoomResponse> => {
  const response = await AxiosInstance.post("api/room/create");
  return response.data;
};

type createNewRoomSessionResponse = {
  // TODO: check if this is an ENUM or just a 200
  status: string;
};

type createNewRoomSessionPayload = {
  room_code: string;
};

export const createNewRoomSession = async (
  payload: createNewRoomSessionPayload,
): Promise<createNewRoomSessionResponse> => {
  const response = await AxiosInstance.post("/api/room/session/new", payload);
  return response.data;
};

type exportRoomResultsResponse = {
  // TODO: file to download
  export: unknown;
};

type exportRoomResultsPayload = {
  room_code: string;
  session_id: string;
};

export const exportRoomResults = async (
  payload: exportRoomResultsPayload,
): Promise<exportRoomResultsResponse> => {
  const response = await AxiosInstance.get("/api/room/export", {
    data: payload,
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
  const response = await AxiosInstance.delete("/api/room/export", {
    data: payload,
  });
  return response.data;
};
