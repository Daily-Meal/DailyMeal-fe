import { IList } from "@/stores/listStore";
import { ListStyle } from "./List.style";
import { MdFavorite, MdFavoriteBorder, MdModeEdit } from "react-icons/md";
import ScrollContainer from "react-indiana-drag-scroll";
import { useLocation } from "react-router-dom";
import { IoMdTrash } from "react-icons/io";

export default function List({
  category,
  created_at,
  food_name,
  id,
  meal_type,
  tag_name,
  user_id,
  url,
}: IList) {
  const currentPath = useLocation().pathname;

  return (
    <ListStyle>
      <div className="flipArea">
        <img src={url ? url : "/defaultFood.jpg"} className="flipFront" />
        <div className="flipBack">
          <ul>
            {food_name.map((food, index) => (
              <li key={index}>{food}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="typeArea">
        <div className="mealType">{meal_type}</div>
        <ScrollContainer className="tagArea">
          {tag_name.map((tag, index) => (
            <div className="tagBox" key={index}>
              # {tag}
            </div>
          ))}
        </ScrollContainer>
      </div>
      <div className="idArea">
        <div className="idText">{user_id}</div>
        {currentPath === "/mypage" ? (
          <div className="mypageArea">
            <div className="edit">
              <MdModeEdit className="editIcon" />
              수정
            </div>
            <div className="delete">
              <IoMdTrash className="deleteIcon" />
              삭제
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="favorite">
          <MdFavoriteBorder />
        </div>
        <div className="createdDate">{created_at}</div>
      </div>
    </ListStyle>
  );
}
