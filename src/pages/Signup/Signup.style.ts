import styled from "styled-components";
import { Link } from "react-router-dom";
import { layoutMixins } from "@/styles/mixins";

export const SignupStyle = styled.div`
  ${layoutMixins.columnFlexBox()}
  min-width: 800px;
  width: 100%;
  height: 100vh;
  gap: 30px;
  width: 100%;

  form {
    ${layoutMixins.columnFlexBox("")}
    width: 100%;

    gap: 4px;

    div {
      ${layoutMixins.flexBox("flex-start", "")}
      width: 40%;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.linkGreen};
  font-size: 14px;
  cursor: pointer !important;
`;
