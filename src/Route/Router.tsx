import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import MyPage from "../pages/MyPage";
import Sidebar from "@/layout/sidebar";
import Signup from "@/pages/Signup";
import styled from "styled-components";

import Header from "@/layout/header_tmp/Header";
import MainContent from "@/layout/mainContent";

export default function Router() {
  return (
    <BrowserRouter>
      <RouterStyle>
        <Sidebar />
        <MainContentStyle>
          <Header />
          <MainContent>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/mypage" element={<MyPage />} />
            </Routes>
          </MainContent>
        </MainContentStyle>
      </RouterStyle>
    </BrowserRouter>
  );
}

const RouterStyle = styled.div`
  display: flex;
`;

const MainContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
