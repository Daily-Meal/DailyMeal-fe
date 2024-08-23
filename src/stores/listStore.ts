import { BoardInfo } from "@/models/boardInfo.model";
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

interface IListStore {
  lists: BoardInfo[];
  setDatas: (data: BoardInfo[], initialize?: boolean) => void;
}

const listStore: StateCreator<IListStore> = set => ({
  lists: [],
  setDatas: (data: BoardInfo[], initialize?: boolean) =>
    set(state => {
      return {
        lists: initialize ? data : [...state.lists, ...data],
      };
    }),
});

export const useListStore = create<IListStore>()(
  devtools(listStore, { name: "List Store" }),
);
