import InputBox from "@/components/InputBox";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { useForm } from "react-hook-form";
import { JoinRequest } from "@/models/join.model";
import { useJoin } from "@/hooks/useJoin";
import {
  checkEmailAvailability,
  checkNickNameAvailability,
} from "@/api/auth.api";
import * as S from "./Signup.style";

export default function Signup() {
  const methods = useForm<JoinRequest>({
    mode: "onTouched",
  });
  const { join, loading } = useJoin();
  const onSubmit = async (data: JoinRequest) => {
    await join(data);
    console.log("Signup Data:", data);
  };

  const checkEmail = async () => {
    const email = methods.getValues("email");
    if (email) {
      try {
        const isAvailable = await checkEmailAvailability(email);
        if (isAvailable) {
          alert("이메일을 사용할 수 있습니다.");
        } else {
          alert("이미 사용 중인 이메일입니다.");
        }
      } catch (error) {
        console.error("이메일 중복 확인 중 오류 발생:", error);
        alert("이메일 확인 중 오류가 발생했습니다. 나중에 다시 시도해주세요.");
      }
    }
  };

  const checkNickname = async () => {
    const nickname = methods.getValues("nickname");
    if (nickname) {
      try {
        const isAvailable = await checkNickNameAvailability(nickname);
        if (isAvailable) {
          alert("닉네임을 사용할 수 있습니다.");
        } else {
          alert("이미 사용 중인 닉네임입니다.");
        }
      } catch (error) {
        console.error("닉네임 중복 확인 중 오류 발생:", error);
        alert("닉네임 확인 중 오류가 발생했습니다. 나중에 다시 시도해주세요.");
      }
    }
  };

  return (
    <S.SignupStyle>
      <Icon name="logoLetter" width="300px" height="50px" />
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <S.CheckBox>
          <InputBox
            label="아이디"
            type="email"
            placeholder="abcd@email.com"
            name="email"
            register={methods.register}
          />

          <Button
            title="중복확인"
            width="60px"
            height="30px"
            onClick={checkEmail}
          />
        </S.CheckBox>

        <S.CheckBox>
          <InputBox
            label="닉네임"
            type="string"
            placeholder="사용할 닉네임을 입력해주세요"
            name="nickname"
            register={methods.register}
          />

          <Button
            title="중복확인"
            width="60px"
            height="30px"
            onClick={checkNickname}
          />
        </S.CheckBox>

        <InputBox
          label="비밀번호"
          type="password"
          placeholder="password"
          name="password"
          register={methods.register}
        />
        {/* <InputBox
          label="비밀번호 확인"
          type="password"
          placeholder="password"
          name="passwordConfirm"
          register={methods.register}
          rules={{
            required: "비밀번호 확인은 필수 입력 항목입니다.",
            validate: (value: any) =>
              value === methods.getValues("password") ||
              "비밀번호가 일치하지 않습니다.",
          }}
        /> */}
        <Button title="회원가입" type="submit" disabled={loading} />
      </form>
    </S.SignupStyle>
  );
}
