import { useListStore } from "@/store/listStore";
import * as S from "./ListArea.style";
import List from "./List/List";

export default function ListArea() {
  const { lists } = useListStore();

  return (
    <>
      {lists.length > 0 ? (
        <S.ListAreaStyle>
          {lists.map((list, index) => (
            <List
              key={list.id}
              category={list.category}
              created_at={list.created_at}
              food_name={list.food_name}
              id={list.id}
              meal_type={list.meal_type}
              tag_name={list.tag_name}
              user_id={list.user_id}
              url={list.url}
            ></List>
          ))}
        </S.ListAreaStyle>
      ) : (
        <S.NoContentWrapper>
          <S.NoContentStyle />
          <S.NoContentText>
            <p>게시물이 없습니다.</p> <br />
            게시물을 작성해주세요.
          </S.NoContentText>
        </S.NoContentWrapper>
      )}
    </>
  );
}
