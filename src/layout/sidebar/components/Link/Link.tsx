import Icon from "@/components/Icon";
import * as S from "./Link.style";
import { Fragment } from "react/jsx-runtime";
import React from "react";

export default function Link() {
  return (
    <S.LinkeStyle>
      <S.LinkBox>
        <div className="link">
          {LINK_CONTENTS.map(link => (
            <li className="item" key={link.id}>
              <Icon name={link.name} />
              <span className="linkName">{link.title}</span>
            </li>
          ))}
        </div>
        <li className="item logout">
          <Icon name="door" />
          <span className="linkName">로그인</span>
        </li>
      </S.LinkBox>
    </S.LinkeStyle>
  );
}

const LINK_CONTENTS = [
  { id: 1, name: "home", title: "홈" },
  { id: 2, name: "profile", title: "프로필" },
  { id: 3, name: "favorite", title: "즐겨찾기" },
];
