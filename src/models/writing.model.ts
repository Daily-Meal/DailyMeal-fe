export interface WritingRequest {
  image: FileList;
  category: "아침" | "점심" | "저녁";
  mealType: string;
  meals: string[];
  tags: string[];
}

export interface SendWritingRequest {
  image: string;
  category: "아침" | "점심" | "저녁";
  mealType: string;
  meals: string[];
  tags: string[];
}
