import { httpClient } from "./http";
import { JoinRequest, JoinResponse } from "@/models/join.model";
import { LoginRequest, LoginResponse } from "@/models/login.model";

export const joinUser = async (data: JoinRequest): Promise<JoinResponse> => {
  const response = await httpClient.post<JoinResponse>("/join", data);
  return response.data;
};

export const loginUser = async (data: LoginRequest) => {
  const response = await httpClient.post<LoginResponse>("/login", data);
  return response.data;
};
