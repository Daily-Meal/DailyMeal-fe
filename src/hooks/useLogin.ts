import { useState } from "react";
import { LoginRequest } from "@/models/login.model";
import { useAuthStore } from "@/stores/authStore";
import { useNavigate } from "react-router-dom";
import { loginUser } from "@/api/auth.api";
import { useUserStore } from "@/stores/userStore";

export const useLogin = () => {
  const navigate = useNavigate();
  const { setAccessToken, setRefreshToken } = useAuthStore();
  const { setNickname, setEmail } = useUserStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (data: LoginRequest) => {
    setLoading(true);
    setError(null);

    try {
      const response = await loginUser(data);
      const { accessToken, refreshToken } = response;
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);

      // 백엔드 nickname, email전달시
      // setNickname(response.nickname);
      // setEmail(response.email);

      navigate("/");
    } catch (err: any) {
      setError(err.response?.data?.message || "로그인에 실패하셨습니다");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
