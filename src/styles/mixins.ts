import { css } from "styled-components";

type JustifyContent =
  | ""
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around";
type AlignItems =
  | ""
  | "center"
  | "flex-start"
  | "flex-end"
  | "stretch"
  | "baseline";

export const layoutMixins = {
  flexBox: (jc: JustifyContent = "center", ai: AlignItems = "center") => `
    display: flex;
    justify-content: ${jc};
    align-items: ${ai};
   `,

  columnFlexBox: (jc: JustifyContent = "center", ai: AlignItems = "center") => `
      display: flex;
      flex-direction:column;
      justify-content: ${jc};
      align-items: ${ai};
      `,
};

export const scrollMixins = {
  customScrollbar: (marginTop: string | number = "24px") => css`
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 8px; /* 스크롤바 너비 */
    }

    &::-webkit-scrollbar-track {
      margin-top: ${marginTop};
      background: #f1f1f1; /* 스크롤바 트랙 색상 */
      border-radius: 0px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.lightGray};
      border-radius: 20px;
      border: 1px solid #f1f1f1;
    }

    &::-webkit-scrollbar-thumb:hover {
      margin-left: 14px;
      background-color: #555; /* 호버 시 색상 */
    }
  `,
};
