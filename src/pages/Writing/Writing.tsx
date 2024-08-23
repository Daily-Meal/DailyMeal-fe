import InputBox from "@/components/InputBox";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { useCreate } from "@/hooks/useCreate";
import * as S from "./Writing.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Writing() {
  const navigate = useNavigate();
  const { register, onSubmit } = useCreate();
  const [addedDietCount, setAddedDietCount] = useState<number[]>([1]);
  const [addedTagCount, setAddedTagCount] = useState<number[]>([1]);

  return (
    <S.WritingStyle>
      <S.WritingContainer>
        <S.TitleBox>
          <p> 글작성하기</p>{" "}
          <span
            onClick={() => {
              navigate("/");
            }}
          >
            x
          </span>
        </S.TitleBox>
        <S.ContentContainer>
          <S.DietForm onSubmit={onSubmit}>
            <label htmlFor="meals[0]">식단</label>
            {addedDietCount.map((_, index) => {
              return (
                <InputBox
                  type="text"
                  placeholder={`음식${index + 1}`}
                  width="100%"
                  name={`meals[${index}]`}
                  register={register}
                />
              );
            })}

            <Button
              title="+ 새로운 음식 추가 버튼"
              width="100%"
              backgroundColor="#e8f4d4"
              color="black"
              type="button"
              onClick={() => {
                setAddedDietCount(prev => [...prev, 1]);
              }}
            />
          </S.DietForm>

          <S.UploadContainer>
            <label>사진 업로드</label>
            <S.UpLoadBox>
              <label htmlFor="upload">
                <Icon name="upload" />
              </label>
              <S.Upload
                type="file"
                id="upload"
                {...register("image")}
                accept="image/*"
              />
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

          <InputBox
            label="음식종류"
            type="text"
            placeholder="한식, 양식, 중식, 일식..."
            width="100%"
            name="mealType"
            register={register}
          />

          <S.TagForm>
            <label htmlFor="tags[0]">태그</label>
            {addedTagCount.map((_, index) => {
              return (
                <InputBox
                  type="text"
                  placeholder={`태그${index + 1}`}
                  width="100%"
                  name={`tags[${index}]`}
                  register={register}
                />
              );
            })}

            <Button
              title="+ 태그추가"
              width="100%"
              backgroundColor="#e8f4d4"
              color="black"
              type="button"
              onClick={() => {
                setAddedTagCount(prev => [...prev, 1]);
              }}
            />
          </S.TagForm>

          <Button title="작성하기" width="100%" onClick={onSubmit} />
        </S.ContentContainer>
      </S.WritingContainer>
    </S.WritingStyle>
  );
}
