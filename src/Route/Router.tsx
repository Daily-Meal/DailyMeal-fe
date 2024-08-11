import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import MyPage from "../pages/MyPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
