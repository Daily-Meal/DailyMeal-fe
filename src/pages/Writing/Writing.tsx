import InputBox from "@/components/InputBox";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import * as S from "./Writing.style";
import { useCreate } from "@/hooks/useCreate";

export default function Writing() {
  const { register, onSubmit } = useCreate();

  return (
    <S.WritingStyle>
      <S.WritingContainer>
        <S.TitleBox>
          <p> 글작성하기</p> <span>x</span>
        </S.TitleBox>
        <S.ContentContainer>
          <S.DietForm onSubmit={onSubmit}>
            <InputBox
              label="식단"
              type="text"
              placeholder="음식1"
              width="100%"
              name="meals[0]"
              register={register}
            />
            <InputBox
              type="text"
              placeholder="음식2"
              width="100%"
              name="meals[1]"
              register={register}
            />

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
              <S.Upload type="file" id="upload" {...register("image")} />
            </S.UpLoadBox>
          </S.UploadContainer>

          <InputBox
            label="카테고리"
            type="select"
            placeholder="카테고리"
            width="100%"
            name="category"
            register={register}
            options={["아침", "점심", "저녁"]}
          />

          <S.TagForm>
            <InputBox
              label="태그"
              type="text"
              placeholder="태그"
              width="100%"
              name="tags[0]"
              register={register}
            />
            <Button
              title="+ 태그추가"
              width="100%"
              backgroundColor="#e8f4d4"
              color="black"
            />
          </S.TagForm>

          <Button title="작성하기" width="100%" onClick={onSubmit} />
        </S.ContentContainer>
      </S.WritingContainer>
    </S.WritingStyle>
  );
}
