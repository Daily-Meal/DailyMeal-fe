import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import MyPage from "../pages/MyPage";
import Sidebar from "@/layout/sidebar";
import Signup from "@/pages/Signup";
import Writing from "@/pages/Writing";
import Header from "@/layout/header/";
import { layoutMixins } from "@/styles/mixins";
import styled from "styled-components";

export default function Router() {
  const location = useLocation();
  const hideHeader =
    location.pathname === "/login" || location.pathname === "/signup";
  return (
    <RouterStyle>
      <Sidebar />
      <MainContent>
        {!hideHeader && <Header />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </MainContent>
    </RouterStyle>
  );
}

const RouterStyle = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  ${layoutMixins.columnFlexBox("", "")}
  width: 100%;
  overflow: auto;
`;
