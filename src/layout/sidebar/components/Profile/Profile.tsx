import Icon from "@/components/Icon";
import * as S from "./Profile.style";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const navigate = useNavigate();
  return (
    <S.ProfileStyle>
      <Icon
        name="logoLetter"
        clickAction={() => {
          navigate("/");
        }}
      />
      <div className="info">
        <p> Hello! Michael!</p>
        <p className="email"> michaelwilson12@gmail.com</p>
      </div>
    </S.ProfileStyle>
  );
}
