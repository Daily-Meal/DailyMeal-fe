import { BoardsInfo } from "@/models/boardInfo.model";
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

interface IUserStore {
  nickname: string;
  email: string;
  setNickname: (nickname: string) => void;
  setEmail: (email: string) => void;
}

const UserStore: StateCreator<IUserStore> = set => ({
  nickname: "",
  email: "",
  setNickname: (nickname: string) => set({ nickname }),
  setEmail: (email: string) => set({ email }),
});

export const useUserStore = create<IUserStore>()(
  devtools(UserStore, { name: "User Store" }),
);
