import React from "react";
import * as S from "./Button.style";

interface IButtonProps extends S.IButtonStyleProps {
  title: string;
}

export default function Button({
  title,
  width,
  height,
  backgroundColor,
  color,
}: IButtonProps) {
  return (
    <S.ButtonStyle
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      color={color}
    >
      {title}
    </S.ButtonStyle>
  );
}
