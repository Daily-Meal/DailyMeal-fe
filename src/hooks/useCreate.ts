import { useForm } from "react-hook-form";
import { createPost } from "@/api/boards.api";
import { SendWritingRequest, WritingRequest } from "@/models/writing.model";
import { useNavigate } from "react-router-dom";

export function useCreate() {
  const navigate = useNavigate();
  const methods = useForm<WritingRequest>({
    mode: "onTouched",
  });

  const onSubmit = async (data: WritingRequest) => {
    try {
      const meals = data.meals.filter(meal => {
        return meal.trim() !== "";
      });

      if (meals.length === 0) {
        alert("1개 이상의 식단을 작성해야 합니다.");
        return;
      }
      if (!data.mealType) {
        alert("음식종류를 입력해주세요.");
        return;
      }
      if (!data.category) {
        alert("카테고리를 선택해주세요.");
        return;
      }

      const tags = data.tags.filter(tag => {
        return tag.trim() !== "";
      });
      if (tags.length === 0) {
        alert("1개 이상의 태그를 입력해주세요.");
        return;
      }

      let requestData: SendWritingRequest;
      if (data.image && data.image.length > 0) {
        const file = data.image[0];
        const base64Img = await toBase64(file);

        requestData = {
          ...data,
          meals,
          image: base64Img,
        };
      } else {
        requestData = {
          ...data,
          meals,
          image: "",
        };
      }

      const response = await createPost(requestData);
      if (response) {
        alert("게시글이 등록되었습니다.");
        navigate("/");
      } else {
        console.log("서버 응답:", response);
      }
    } catch (error) {
      alert("글 작성 중 에러가 발생했습니다.");
      navigate("/");
      console.error("글 작성 중 에러 발생:", error);
    }
  };

  return {
    ...methods,
    onSubmit: methods.handleSubmit(onSubmit),
  };
}

const toBase64 = (file: File) => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
};
