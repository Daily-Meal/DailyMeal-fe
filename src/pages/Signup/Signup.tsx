import InputBox from "@/components/InputBox";
import Button from "@/components/Button";
import * as S from "./Signup.style";

export default function Signup() {
  return (
    <S.SignupStyle>
      <form>
        <InputBox label="아이디" type="email" placeholder="abcd@email.com" />
        <div>
          <Button title="중복확인" width="60px" height="30px" />
        </div>
      </form>
      <InputBox
        label="닉네임"
        type="string"
        placeholder="사용할 닉네임을 입력해주세요"
      />

      <InputBox label="비밀번호" type="password" placeholder="password" />
      <InputBox label="비밀번호 확인" type="password" placeholder="password" />
      <Button title="회원가입" />
    </S.SignupStyle>
  );
}
