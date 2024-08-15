import * as S from "./InputBox.style";

interface IInputBoxProps {
  label?: string;
  children?: React.ReactNode;
  type: string;
  placeholder: string;
  width?: string;
}

export default function InputBox({
  label,
  children,
  type,
  placeholder,
  width,
}: IInputBoxProps) {
  return (
    <S.InputBoxStyle width={width}>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
      {children}
    </S.InputBoxStyle>
  );
}
