import { BoardsInfo } from "@/models/boardInfo.model";
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

interface IListStore {
  boardsInfo: BoardsInfo | null;
  focusedUser: string | null;
  headerTotal: number | null;
  setDatas: (data: BoardsInfo) => void;
  setFocusedUser: (nickname: string) => void;
  setHeaderTotal: (headerTotal: number) => void;
  decreaseHeaderTotal: () => void;
}

const listStore: StateCreator<IListStore> = set => ({
  boardsInfo: null,
  focusedUser: null,
  headerTotal: null,
  setDatas: (data: BoardsInfo) => set(() => ({ boardsInfo: data })),
  setFocusedUser: (nickname: string) =>
    set(() => ({
      focusedUser: nickname,
    })),
  setHeaderTotal: (headerTotal: number) =>
    set(() => ({
      headerTotal,
    })),
  decreaseHeaderTotal: () =>
    set(state => ({
      headerTotal: state.headerTotal !== null ? state.headerTotal - 1 : null,
    })),
});

export const useListStore = create<IListStore>()(
  devtools(listStore, { name: "List Store" }),
);
