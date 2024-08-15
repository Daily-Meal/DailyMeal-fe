import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import MyPage from "../pages/MyPage";
import Sidebar from "@/layout/sidebar";
import Signup from "@/pages/Signup";
import styled from "styled-components";

export default function Router() {
  return (
    <BrowserRouter>
      <RouterStyle>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </RouterStyle>
    </BrowserRouter>
  );
}

const RouterStyle = styled.div`
  display: flex;
`;
