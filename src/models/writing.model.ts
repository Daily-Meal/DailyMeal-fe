export interface WritingRequest {
  image: string;
  category: "아침" | "점심" | "저녁";
  mealType: string;
  meals: string[];
  tags: string[];
}

export interface EditBoardInfo extends WritingRequest {
  board_id: string;
}
