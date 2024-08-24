import { httpClient } from "./http";
import { EditBoardInfo, WritingRequest } from "@/models/writing.model";

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

export const editWriting = async (data: EditBoardInfo): Promise<boolean> => {
  try {
    let url = `/boards/${data.board_id}`;
    console.log("data.meals : ", data.meals);
    const response = await httpClient.put(url, {});
    return response.data;
  } catch (error) {
    console.error("수정 중 에러 발생", error);
    throw error;
  }
};
