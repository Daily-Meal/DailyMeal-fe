import { httpClient } from "@/api/http";
import { LoginRequest, LoginResponse } from "@/models/login.model";
import { useAuthStore } from "@/stores/authStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = async () => {
  const navigate = useNavigate();
  const { setAccessToken, setRefreshToken } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (data: LoginRequest) => {
    setLoading(true);
    setError(null);

    try {
      const response = await httpClient.post<LoginResponse>("api 자리", data);
      const { accessToken, refreshToken } = response.data;
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);

      navigate("/");
    } catch (err: any) {
      setError(err.response?.data?.message || "로그인에 실패하셨습니다");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
