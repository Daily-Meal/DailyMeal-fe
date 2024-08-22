import { UseFormRegister } from "react-hook-form";
import * as S from "./InputBox.style";

interface IInputBoxProps {
  label?: string;
  children?: React.ReactNode;
  type: "text" | "select" | "password" | "number" | "email";
  placeholder: string;
  width?: string;
  name: string;
  rules?: object;
  register: UseFormRegister<any>;
  options?: string[]; // select 타입일 때 사용되는 옵션들
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
  options,
}: IInputBoxProps) {
  return (
    <S.InputBoxStyle width={width}>
      <label>{label}</label>
      {type === "select" ? (
        <select
          {...register(name, rules)}
          style={{
            width: "97%",
            padding: "22px 10px 18px 20px",
            background: "#FBFBFB",
            border: "1px solid #D6D6D6",
            borderRadius: "8px",
          }}
        >
          {options?.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          {...register(name, rules)}
        />
      )}
      {children}
    </S.InputBoxStyle>
  );
}
