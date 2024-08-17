import { IList } from "@/store/listStore";
import { ListStyle } from "./List.style";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

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
  return (
    <ListStyle>
      {url ? (
        <img src={url} className="imageArea" />
      ) : (
        <img src="/defaultFood.jpg" className="imageArea" />
      )}
      <div className="typeArea">
        <div className="mealType">{meal_type}</div>
        <div className="tagArea">
          {tag_name.map((tag, index) => (
            <div className="tagBox" key={index}>
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="idArea">
        <div className="idText">{user_id}</div>
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
