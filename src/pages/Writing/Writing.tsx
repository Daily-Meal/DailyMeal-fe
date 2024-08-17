import InputBox from "@/components/InputBox";
import * as S from "./Writing.style";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
export default function Writing() {
  return (
    <S.WritingStyle>
      <S.WritingContainer>
        <S.TitleBox>
          <p> 글작성하기</p> <span>x</span>
        </S.TitleBox>
        <S.ContentContainer>
          <S.DietForm>
            <InputBox
              label="식단"
              type="string"
              placeholder="음식1"
              width="100%"
            />
            <InputBox type="string" placeholder="음식2" width="100%" />

            <Button
              title="+ 새로운 음식 추가 버튼"
              width="100%"
              backgroundColor="#e8f4d4"
              color="black"
            />
          </S.DietForm>

          <S.UploadContainer>
            <label>사진 업로드</label>
            <S.UpLoadBox>
              <label htmlFor="upload">
                <Icon name="upload" />
              </label>
              <S.Upload type="file" id="upload" />
            </S.UpLoadBox>
          </S.UploadContainer>
          <InputBox
            label="카테고리"
            type="string"
            placeholder="음식2"
            width="100%"
          />
          <S.TagForm>
            <InputBox
              label="태그"
              type="string"
              placeholder="음식2"
              width="100%"
            />
            <Button
              title="+ 태그추가"
              width="100%"
              backgroundColor="#e8f4d4"
              color="black"
            />
          </S.TagForm>
          <Button title="작성하기" width="100%" />
        </S.ContentContainer>
      </S.WritingContainer>
    </S.WritingStyle>
  );
}
