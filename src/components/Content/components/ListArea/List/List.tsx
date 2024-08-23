import { ListStyle } from "./List.style";
import { MdFavorite, MdFavoriteBorder, MdModeEdit } from "react-icons/md";
import ScrollContainer from "react-indiana-drag-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdTrash } from "react-icons/io";
import { BoardInfo } from "@/models/boardInfo.model";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { setFavorite } from "@/api/favorites.api";
import { useState } from "react";
import { deletePost } from "@/api/boards.api";
dayjs.extend(utc);

interface BoardWithFavorite extends BoardInfo {
  isFavorite: boolean;
  handleDelete: (boardId: string) => Promise<void>;
}

export default function List({
  board_id,
  image,
  created_at,
  category,
  meal_type,
  user,
  meals,
  tags,
  isFavorite,
  handleDelete,
}: BoardWithFavorite) {
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();
  const formatDate = (created_at: string) => {
    return dayjs.utc(created_at).format("YYYY-MM-DD HH:mm:ss");
  };

  const [listFavorite, setListFavorite] = useState(isFavorite);

  return (
    <ListStyle>
      <div className="flipArea">
        <img src={image ? image : "/defaultFood.jpg"} className="flipFront" />
        <div className="flipBack">
          <ul>
            {meals.map((meal, index) => (
              <li key={index}>{meal.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="typeArea">
        <div className="mealType">{meal_type}</div>
        <ScrollContainer className="tagArea">
          {tags.map((tag, index) => (
            <div className="tagBox" key={index}>
              # {tag.name}
            </div>
          ))}
        </ScrollContainer>
      </div>
      <div className="idArea">
        <div
          className="idText"
          onClick={() => {
            navigate(`/user/${user.user_id}`);
          }}
        >
          {user.nickname}
        </div>
        {currentPath === "/mypage" ? (
          <div className="mypageArea">
            <div className="edit">
              <MdModeEdit className="editIcon" />
              수정
            </div>
            <div
              className="delete"
              onClick={() => {
                handleDelete(board_id);
              }}
            >
              <IoMdTrash className="deleteIcon" />
              삭제
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="favorite">
          {listFavorite ? (
            <MdFavorite
              className="filledFavorite"
              onClick={async () => {
                await setFavorite(board_id);
                setListFavorite(false);
              }}
            />
          ) : (
            <MdFavoriteBorder
              onClick={() => {
                setFavorite(board_id);
                setListFavorite(true);
              }}
            />
          )}
        </div>

        <div className="createdDate">{formatDate(created_at)}</div>
      </div>
    </ListStyle>
  );
}
