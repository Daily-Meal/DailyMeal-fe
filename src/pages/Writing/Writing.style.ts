import { layoutMixins, scrollMixins } from "@/styles/mixins";
import styled from "styled-components";

export const WritingStyle = styled.div`
  ${layoutMixins.flexBox()}
  width: 100%;
`;

export const WritingContainer = styled.div`
  ${layoutMixins.columnFlexBox("", "center")};
  margin-top: 50px;
  width: 30%;
  padding-bottom: 70px;
  border: none;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  min-width: 400px;
  max-height: 80vh;
  height: 100%;
  ${scrollMixins.customScrollbar("0px")}
`;

export const ContentContainer = styled.div`
  ${layoutMixins.columnFlexBox("", "")};
  padding: 0 40px;
  width: 100%;
  gap: 40px;
`;

export const DietForm = styled.form`
  ${layoutMixins.columnFlexBox("", "")}
  margin-top: 60px;
  width: 99%;
  gap: 6px;
  height: 200px;
  padding-right: 8px;
  ${scrollMixins.customScrollbar()}
`;

export const UploadContainer = styled.div`
  ${layoutMixins.columnFlexBox("", "")}
  width: 100%;
  gap: 8px;
`;

export const UpLoadBox = styled.div`
  ${layoutMixins.columnFlexBox()};
  border-radius: 12px;
  height: 279px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.linkGray};
`;

export const Upload = styled.input`
  display: none;
`;

export const TitleBox = styled.div`
  ${layoutMixins.flexBox("space-between")};
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  padding: 44px 36px 30px 36px;
  background-color: ${({ theme }) => theme.colors.defaultGreen};

  width: 100%;
  color: white;

  p {
    text-align: center;
    flex: 1;
  }

  span {
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
  }
`;

export const TagForm = styled.form`
  ${layoutMixins.columnFlexBox("", "")};
  width: 100%;
  height: 200px;
  padding-right: 8px;
  gap: 8px;
  ${scrollMixins.customScrollbar()}
`;

export const Preview = styled.div`
  width: 100%;
  height: 279px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
