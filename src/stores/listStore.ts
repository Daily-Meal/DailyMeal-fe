import { BoardsInfo } from "@/models/boardInfo.model";
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

interface IListStore {
  list: BoardsInfo | null;
  focusedUser: string | null;
  setDatas: (data: BoardsInfo) => void;
  setFocusedUser: (nickname: string) => void;
}

const listStore: StateCreator<IListStore> = set => ({
  list: null,
  focusedUser: null,
  setDatas: (data: BoardsInfo) => set(() => ({ list: data })),
  setFocusedUser: (nickname: string) =>
    set(() => ({
      focusedUser: nickname,
    })),
});

export const useListStore = create<IListStore>()(
  devtools(listStore, { name: "List Store" }),
);
