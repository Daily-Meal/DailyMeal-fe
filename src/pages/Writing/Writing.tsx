import InputBox from "@/components/InputBox";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { useCreate } from "@/hooks/useCreate";
import * as S from "./Writing.style";
import { ChangeEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { EditBoardInfo } from "@/models/writing.model";

export default function Writing() {
  const navigate = useNavigate();
  const location = useLocation();
  const [imagePreview, setImagePreview] = useState<string>("");
  const editBoardInfo = location.state?.boardInfo as EditBoardInfo;

  const { register, onSubmit, setValue } = useCreate(editBoardInfo);
  const [addedDietCount, setAddedDietCount] = useState<number[]>([1]);
  const [addedTagCount, setAddedTagCount] = useState<number[]>([1]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImagePreview(base64String);
        setValue("image", base64String);
      };
    }
  };

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
            <label>식단</label>
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
              title="+ 새로운 음식 추가"
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
                {imagePreview ? (
                  <S.Preview>
                    <img src={imagePreview as string} alt="미리보기" />
                  </S.Preview>
                ) : (
                  <Icon name="upload" />
                )}
              </label>
              <S.Upload
                type="file"
                id="upload"
                {...register("image")}
                accept="image/*"
                onChange={handleFileChange}
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
              title="+ 태그 추가"
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
