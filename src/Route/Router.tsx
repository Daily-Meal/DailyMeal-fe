import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import MyPage from "../pages/MyPage";
import Sidebar from "@/layout/sidebar";
import Signup from "@/pages/Signup";
import styled from "styled-components";

import Header from "@/layout/header_tmp/Header";

export default function Router() {
  return (
    <BrowserRouter>
      <RouterStyle>
        <Sidebar />
        <MainContentStyle>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
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
