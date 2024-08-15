import Link from "./components/Link";
import Profile from "./components/Profile";
import * as S from "./Sidebar.style";

export default function Sidebar() {
  return (
    <S.SidebarStyle>
      <Profile />
      <Link />
    </S.SidebarStyle>
  );
}
