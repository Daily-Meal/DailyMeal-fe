import InputBox from "@/components/InputBox";
import Button from "@/components/Button";
import * as S from "./Login.style";

export default function Login() {
  return (
    <S.LoginStyle>
      <p>
        DailyMeal은, 사용자들이 오늘 하루 먹었던 음식들을 <br />
        자유롭게 공유할 수 있는 공간입니다.
      </p>
      <InputBox label="아이디" type="string" placeholder="abcd@email.com" />
      <InputBox label="비밀번호" type="string" placeholder="password" />
      <Button title="로그인" />
      <S.StyledLink to="/signup">회원가입</S.StyledLink>
    </S.LoginStyle>
  );
}
