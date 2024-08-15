import React from "react";
import * as S from "./Button.style";

interface IButtonProps {
  title: string;
}

export default function Button({ title }: IButtonProps) {
  return <S.ButtonStyle>{title}</S.ButtonStyle>;
}
