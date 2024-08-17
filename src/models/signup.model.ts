export interface SignupRequest {
  username: string;
  email: string;
  nickname: string;
  password: string;
}

export interface SignupResponse {
  message: string;
}
