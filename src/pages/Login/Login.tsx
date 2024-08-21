import InputBox from "@/components/InputBox";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { LoginRequest } from "@/models/login.model";
import { FormProvider, useForm } from "react-hook-form";
import { useLogin } from "@/hooks/useLogin";
import * as S from "./Login.style";

export default function Login() {
  const methods = useForm<LoginRequest>();
  const { login, loading } = useLogin();

  const onSubmit = async (data: LoginRequest) => {
    await login(data);
  };

  return (
    <FormProvider {...methods}>
      <S.LoginStyle>
        <Icon name="logoLetter" width="300px" height="50px" />
        <p>
          DailyMeal은, 사용자들이 오늘 하루 먹었던 음식들을 <br />
          자유롭게 공유할 수 있는 공간입니다.
        </p>
        <S.LoginForm onSubmit={methods.handleSubmit(onSubmit)}>
          <InputBox
            label="아이디"
            type="string"
            placeholder="abcd@email.com"
            name="email"
            register={methods.register}
          />
          <InputBox
            label="비밀번호"
            type="string"
            placeholder="password"
            name="password"
            register={methods.register}
          />
          <Button title="로그인" disabled={loading} />
        </S.LoginForm>
        <S.StyledLink to="/signup">회원가입</S.StyledLink>
      </S.LoginStyle>
    </FormProvider>
  );
}
