import { layoutMixins } from "@/styles/mixins";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  ${layoutMixins.flexBox("", "flex-start")};
  gap: 8px;
  padding: 29px 0 10px 38px;
  height: 90px;
  flex-shrink: 0;
  width: 100%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;

  p {
    color: ${({ theme }) => theme.colors.lightTextGray};
  }
`;

export const TextBox = styled.div`
  ${layoutMixins.columnFlexBox("flex-start", "baseline")}
  gap:8px;
`;
