import * as S from "./InputBox.style";

interface IInputBoxProps {
  label: string;
  children?: React.ReactNode;
  type: string;
  placeholder: string;
}

export default function InputBox({
  label,
  children,
  type,
  placeholder,
}: IInputBoxProps) {
  return (
    <S.InputBoxStyle>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
      {children}
    </S.InputBoxStyle>
  );
}
