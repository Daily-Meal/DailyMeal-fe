//  /boards/{boardId}/like

import { FavoriteSuccess } from "@/models/favorites.model";
import { httpClient } from "./http";

/* 
req : {
	"userId": userId
}
res : {
  "isLiked" : true | false
  }
*/
export const setFavorite = async (data: string): Promise<FavoriteSuccess> => {
  try {
    let url = `/boards/${data}/like`;
    const response = await httpClient.post(url);
    return response.data;
  } catch (error) {
    console.error("즐겨찾기 설정 에러", error);
    throw error;
  }
};
