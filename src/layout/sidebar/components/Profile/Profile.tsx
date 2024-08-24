import Icon from "@/components/Icon";
import * as S from "./Profile.style";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "@/stores/userStore";
export default function Profile() {
  const navigate = useNavigate();
  const { email, nickname } = useUserStore();
  return (
    <S.ProfileStyle>
      <Icon
        name="logoLetter"
        clickAction={() => {
          navigate("/");
        }}
      />
      <div className="info">
        {email && nickname ? (
          <>
            <p> 안녕하세요, {nickname} 님!</p>
            <p className="email"> {email}</p>
          </>
        ) : (
          <>
            <p className="non-member">
              {" "}
              로그인하면 <br />더 많은 기능을 이용할 수 있어요!
            </p>
          </>
        )}
      </div>
    </S.ProfileStyle>
  );
}
