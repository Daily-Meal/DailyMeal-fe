import { httpClient } from "./http";
import { WritingRequest } from "@/models/writing.model";

export const createPost = async (data: WritingRequest) => {
  try {
    const response = await httpClient.post("/boards", data);
    return response.data;
  } catch (error) {
    console.error("글 작성 중 에러 발생:", error);
    throw error;
  }
};

export const deletePost = async (data: string) => {
  try {
    await httpClient.delete(`/boards/${data}`);
  } catch (error) {
    console.error("삭제 중 에러 발생", error);
    throw error;
  }
};
