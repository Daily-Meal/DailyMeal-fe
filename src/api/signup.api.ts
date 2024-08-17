import { SignupRequest, SignupResponse } from "@/models/signup.model";
import { httpClient } from "./http";

export const signupUser = async (
  data: SignupRequest,
): Promise<SignupResponse> => {
  const response = await httpClient.post<SignupResponse>("백엔드 url", data);
  return response.data;
};
