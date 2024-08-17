export interface JoinRequest {
  username: string;
  email: string;
  nickname: string;
  password: string;
}

export interface JoinResponse {
  message: string;
}
