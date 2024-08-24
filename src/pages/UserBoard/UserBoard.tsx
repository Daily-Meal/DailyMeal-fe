import Content from "@/components/Content";
import { useLocation, useParams } from "react-router-dom";

export default function UserBoard() {
  // 존재하는 ID인지 유효성 검사 필요
  console.log(`path :  ${useLocation().pathname}`);
  const { userId } = useParams();
  console.log(`params : ${userId}`);
  return <Content></Content>;
}
