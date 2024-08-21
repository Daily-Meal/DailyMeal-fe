import { UseFormRegister } from "react-hook-form";
import * as S from "./InputBox.style";

interface IInputBoxProps {
  label?: string;
  children?: React.ReactNode;
  type: string;
  placeholder: string;
  width?: string;
  name: string;
  rules?: object;
  register: UseFormRegister<any>;
}

export default function InputBox({
  label,
  children,
  type,
  placeholder,
  width,
  name,
  rules = {},
  register,
}: IInputBoxProps) {
  return (
    <S.InputBoxStyle width={width}>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} {...register(name, rules)} />
      {children}
    </S.InputBoxStyle>
  );
}
