import { layoutMixins } from "@/styles/mixins";
import styled from "styled-components";

interface InputBoxStyleProps {
  width?: string;
}

export const InputBoxStyle = styled.div<InputBoxStyleProps>`
  ${layoutMixins.columnFlexBox("", "")}
  gap: 8px;
  width: ${props => props.width || "40%"};
  label {
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.textGray};
  }

  input {
    background-color: ${({ theme }) => theme.colors.backgroundGray};
    border: 1px solid ${({ theme }) => theme.colors.defaultGray};
    padding: 22px 10px 18px 28px;
    border-radius: 8px;
    height: 50px;
  }
`;

export const InputLayout = styled.div``;
