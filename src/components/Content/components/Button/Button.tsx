import { useNavigate } from "react-router-dom";
import * as S from "./Button.style";

interface ButtonProps {
  name: string;
  width?: string;
  height?: string;
  isSelected?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function FilterButton({
  name,
  width,
  height,
  isSelected,
  onClick,
}: ButtonProps) {
  return (
    <S.FilterButtonStyle
      width={width}
      height={height}
      isSelected={isSelected}
      onClick={onClick}
    >
      {name}
    </S.FilterButtonStyle>
  );
}

export function CreateButton({ width, height }: Omit<ButtonProps, "name">) {
  const navigate = useNavigate();

  return (
    <S.CreateButtonStyle
      onClick={() => {
        navigate("/writing");
      }}
    >
      + 게시물 작성하기
    </S.CreateButtonStyle>
  );
}
