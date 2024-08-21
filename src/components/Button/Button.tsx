import * as S from "./Button.style";

interface IButtonProps
  extends S.IButtonStyleProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export default function Button({
  title,
  width,
  height,
  backgroundColor,
  color,
  ...rest
}: IButtonProps) {
  return (
    <S.ButtonStyle
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      color={color}
      {...rest}
    >
      {title}
    </S.ButtonStyle>
  );
}
