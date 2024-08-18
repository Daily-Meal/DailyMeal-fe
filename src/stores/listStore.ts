import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

export interface IList {
  id: string;
  url?: string | undefined;
  created_at: string;
  user_id: string;
  category: string;
  meal_type: string;
  food_name: string[];
  tag_name: string[];
}

interface IListStore {
  lists: IList[];
  setDatas: (data: IList[], initialize?: boolean) => void;
}

const listStore: StateCreator<IListStore> = set => ({
  lists: [],
  setDatas: (data: IList[], initialize?: boolean) =>
    set(state => ({
      lists: initialize ? data : [...state.lists, ...data],
    })),
});

export const useListStore = create<IListStore>()(
  devtools(listStore, { name: "List Store" }),
);
