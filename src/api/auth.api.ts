import { httpClient } from "./http";
import { JoinRequest, JoinResponse } from "@/models/join.model";
import { LoginRequest, LoginResponse } from "@/models/login.model";
import { useAuthStore } from "@/stores/authStore";

export const joinUser = async (data: JoinRequest): Promise<JoinResponse> => {
  const response = await httpClient.post<JoinResponse>("/join", data);
  return response.data;
};

export const checkEmailAvailability = async (
  email: string,
): Promise<boolean> => {
  const response = await httpClient.get(`/check/email?value=${email}`);
  return response.data;
};

export const checkNickNameAvailability = async (
  nickname: string,
): Promise<boolean> => {
  const response = await httpClient.get(`/check/nickname?value=${nickname}`);
  return response.data;
};

export const loginUser = async (data: LoginRequest) => {
  const response = await httpClient.post<LoginResponse>("/login", data);
  return response.data;
};

export const logoutUser = () => {
  const { clearTokens } = useAuthStore.getState();
  clearTokens();
  window.location.href = "/login";
};
