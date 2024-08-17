import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import MyPage from "../pages/MyPage";
import Sidebar from "@/layout/sidebar";
import Signup from "@/pages/Signup";
import styled from "styled-components";
import Writing from "@/pages/Writing";
import Header from "@/layout/header/";

export default function Router() {
  return (
    <BrowserRouter>
      <RouterStyle>
        <Sidebar />
        <MainContent>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
        </MainContent>
      </RouterStyle>
    </BrowserRouter>
  );
}

const RouterStyle = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto; /* 메인 콘텐츠 영역에 스크롤 추가 */
`;
