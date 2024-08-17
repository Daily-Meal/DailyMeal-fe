import { httpClient } from "@/api/http";
import { signupUser } from "@/api/signup.api";
import { SignupRequest, SignupResponse } from "@/models/signup.model";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signup = async (data: SignupRequest) => {
    setLoading(true);
    setError(null);

    try {
      await signupUser(data);
      navigate("/login");
    } catch (err: any) {
      setError(err.response?.data?.message || "실패 하셨습니다");
    } finally {
      setLoading(false);
    }
  };
  return { signup, loading, error };
};
