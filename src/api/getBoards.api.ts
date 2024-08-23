import { httpClient } from "./http";
import { BoardInfo, BoardsInfo, RequestBoard } from "@/models/boardInfo.model";

// 전체 식단 목록 조회
export const getFilteredBoards = async (
  data: RequestBoard,
): Promise<BoardsInfo> => {
  try {
    let url = `/boards?limit=${data.limit}&offset=${data.offset}`;
    if (data.category !== "전체") {
      url += `&category=${data.category}`;
    }
    const response = await httpClient.get(url);
    return response.data;
  } catch (error) {
    console.error("데이터 조회 에러", error);
    throw error;
  }
};

// 사용자별 식단 목록 조회 - userId, limit, offset
// GET /boards/users/:userId?limit={limit}&offset={offset}
export const getUserBoards = async (
  data: RequestBoard,
): Promise<BoardsInfo> => {
  try {
    let url = `/boards/users/${data.userId}?limit=${data.limit}&offset=${data.offset}`;
    const response = await httpClient.get(url);
    return response.data;
  } catch (error) {
    console.error("데이터 조회 에러", error);
    throw error;
  }
};

// 내가 작성한 식단 목록 조회 - limit, offset,
// GET /mypage/boards?limit={limit}&offset={offset}
export const getMyBoards = async (
  data: Omit<RequestBoard, "category">,
): Promise<BoardsInfo> => {
  try {
    let url = `/mypage/boards?limit=${data.limit}&offset=${data.offset}`;
    const response = await httpClient.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("데이터 조회 에러", error);
    throw error;
  }
};

// 내가 즐겨찾기한 식단 목록 조회 - limit, offset,
// GET /mypage/likes?limit={limit}&offset={offset}
export const getFavoritesBoards = async (
  data: Omit<RequestBoard, "category">,
): Promise<BoardsInfo> => {
  try {
    let url = `/mypage/likes?limit=${data.limit}&offset=${data.offset}`;
    const response = await httpClient.get(url);
    return response.data;
  } catch (error) {
    console.error("데이터 조회 에러", error);
    throw error;
  }
};
