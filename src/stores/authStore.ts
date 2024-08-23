import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  setAccessToken: (token: string) => void;
  setRefreshToken: (token: string) => void;
  clearTokens: () => void;
}

export const authStore: StateCreator<AuthState> = set => ({
  accessToken: null,
  refreshToken: null,
  setAccessToken: token => set({ accessToken: token }),
  setRefreshToken: token => set({ refreshToken: token }),
  clearTokens: () => set({ accessToken: null, refreshToken: null }),
});

export const useAuthStore = create<AuthState>()(
  devtools(authStore, { name: "Auth Store" }),
);
