export interface WritingRequest {
  image: string;
  category: "아침" | "점심" | "저녁";
  // mealType: "한식" | "중식" | "일식" | "양식" | "기타";
  meals: string[];
  tags: string[];
}
