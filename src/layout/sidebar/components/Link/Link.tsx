import { Link as RouterLink, useLocation } from "react-router-dom";
import Icon from "@/components/Icon";
import * as S from "./Link.style";

interface ILinkItemProps {
  to: string;
  name: string;
  title: string;
  className?: string;
  active: boolean;
}

const LinkItem = ({ to, name, title, className, active }: ILinkItemProps) => (
  <RouterLink to={to} className={`item ${className} ${active ? "active" : ""}`}>
    <li>
      <Icon name={name} />
      <span className="linkName">{title}</span>
    </li>
  </RouterLink>
);

export default function Link() {
  const location = useLocation();
  return (
    <S.LinkStyle>
      <S.LinkBox>
        <div className="link">
          {LINK_CONTENTS.map(link => {
            const active = location.pathname === link.path;
            return (
              <LinkItem
                key={link.id}
                to={link.path}
                name={active ? link.activeName : link.name}
                title={link.title}
                active={active}
              />
            );
          })}
        </div>
        <LinkItem
          to="/login"
          name={location.pathname === "/login" ? "activeDoor" : "door"}
          title="로그인"
          className="logout"
          active={location.pathname === "/login"}
        />
      </S.LinkBox>
    </S.LinkStyle>
  );
}

const LINK_CONTENTS = [
  { id: 1, name: "home", activeName: "home", title: "홈", path: "/" },
  {
    id: 2,
    name: "profile",
    activeName: "activeProfile",
    title: "프로필",
    path: "/profile",
  },
  {
    id: 3,
    name: "favorite",
    activeName: "activeFavorite",
    title: "즐겨찾기",
    path: "/favorites",
  },
  {
    id: 4,
    name: "mypage",
    activeName: "activeMypage",
    title: "마이페이지",
    path: "/mypage",
  },
];
