import * as S from "./Icon.style";
import { iconList } from "./IconList";

interface IconProps {
  name: string;
  clickAction?: () => void;
  width?: string;
  height?: string;
}

export default function Icon({ name, width, height, clickAction }: IconProps) {
  return (
    <S.IconContainer
      src={iconList[name]}
      alt={name}
      onClick={clickAction}
      width={width}
      height={height}
    />
  );
}
