export type Filters = "전체" | "아침" | "점심" | "저녁";

interface UserInfo {
  user_id: string;
  nickname: string;
}

interface TagsInfo {
  tag_id: string;
  name: string;
  board_id: string;
}

interface MealsInfo {
  meal_id: string;
  name: string;
  board_id: string;
}

export interface BoardInfo {
  board_id: string;
  image?: string;
  created_at: string;
  category?: "아침" | "점심" | "저녁";
  meal_type: string;
  user: UserInfo;
  meals: MealsInfo[];
  tags: TagsInfo[];
}

interface PaginationInfo {
  total: number;
  limit: number;
  offset: number;
}

export interface BoardsInfo {
  isSuccess: boolean;
  boards: BoardInfo[];
  pagination: PaginationInfo;
}

export interface RequestBoard {
  category?: "전체" | "아침" | "점심" | "저녁";
  limit: number;
  offset: number;
  userId?: string;
}
