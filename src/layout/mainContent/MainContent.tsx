import { ReactNode } from "react";
import * as S from "./MainContent.style";

interface MainContentProps {
  children: ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <S.MainBackground>
      <S.MainWrapper>{children}</S.MainWrapper>
    </S.MainBackground>
  );
}
