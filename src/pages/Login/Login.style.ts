import styled from "styled-components";
import { Link } from "react-router-dom";
import { layoutMixins } from "@/styles/mixins";

export const LoginStyle = styled.div`
  ${layoutMixins.columnFlexBox()}
  width: 100%;
  height: 100vh;
  min-width: 500px;
  gap: 30px;
  p {
    text-align: center;
    line-height: 25px;
  }
`;

export const LoginForm = styled.form`
  ${layoutMixins.columnFlexBox()}
  width: 100%;
  min-width: 500px;
  gap: 30px;
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.linkGreen};
  font-size: 14px;
  cursor: pointer !important;
`;
