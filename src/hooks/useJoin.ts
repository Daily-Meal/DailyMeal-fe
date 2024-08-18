import { useState } from "react";
import { joinUser } from "@/api/auth.api";
import { JoinRequest } from "@/models/join.model";
import { useNavigate } from "react-router-dom";

export const useJoin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const join = async (data: JoinRequest) => {
    setLoading(true);
    setError(null);

    try {
      await joinUser(data);
      navigate("/login");
    } catch (err: any) {
      setError(err.response?.data?.message || "실패 하셨습니다");
    } finally {
      setLoading(false);
    }
  };
  return { join, loading, error };
};
