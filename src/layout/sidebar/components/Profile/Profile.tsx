import Icon from "@/components/Icon";
import * as S from "./Profile.style";
export default function Profile() {
  return (
    <S.ProfileStyle>
      <Icon name="logoLetter" />
      <div className="info">
        <p> Hello! Michael!</p>
        <p className="email"> michaelwilson12@gmail.com</p>
      </div>
    </S.ProfileStyle>
  );
}
