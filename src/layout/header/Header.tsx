import React from "react";
import * as S from "./Header.style";
import Icon from "@/components/Icon";
export default function Header() {
  return (
    <S.HeaderContainer>
      <Icon name="square" height="18px" width="4px" />
      <S.TextBox>
        <h3>qlasdkfjakl님의 작성글 조회</h3>
        <p>14 개의 게시물</p>
      </S.TextBox>
    </S.HeaderContainer>
  );
}
