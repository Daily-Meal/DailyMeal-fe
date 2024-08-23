import React from "react";
import * as S from "./Header.style";
import Icon from "@/components/Icon";
import { useLocation } from "react-router-dom";
import { useListStore } from "@/stores/listStore";
export default function Header() {
  const currentPath = useLocation().pathname;
  const { headerTotal, focusedUser } = useListStore();

  const regex = new RegExp("^/user");
  const userId = parseInt(currentPath.split("/").slice(-1).join());

  let count;
  let title;

  switch (currentPath) {
    case "/":
      title = "홈";
      count = headerTotal;
      break;
    case "/favorites":
      title = "즐겨찾기한 게시글 조회";
      count = headerTotal;
      break;
    case "/mypage":
      title = "내가 작성한 게시글 조회";
      count = headerTotal;
      break;
    default:
      if (regex.test(currentPath) && userId) {
        title = `${focusedUser}님의 게시글 조회`;
        count = headerTotal;
      }
  }

  return (
    <S.HeaderContainer>
      <Icon name="square" height="18px" width="4px" />
      <S.TextBox>
        <h3>{title ? title : null}</h3>
        {count ? <p>{count} 개의 게시물</p> : null}
      </S.TextBox>
    </S.HeaderContainer>
  );
}
