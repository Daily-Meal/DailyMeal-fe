import { useForm } from "react-hook-form";
import { createPost } from "@/api/boards.api";
import { WritingRequest } from "@/models/writing.model";

export function useCreate() {
  const methods = useForm<WritingRequest>({
    mode: "onTouched",
  });

  const onSubmit = async (data: WritingRequest) => {
    try {
      const response = await createPost(data);
      console.log("서버 응답:", response);
    } catch (error) {
      console.error("글 작성 중 에러 발생:", error);
    }
  };

  return {
    ...methods,
    onSubmit: methods.handleSubmit(onSubmit),
  };
}
