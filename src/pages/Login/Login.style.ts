import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  gap: 30px;
  p {
    text-align: center;
    line-height: 25px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.linkGreen};
  font-size: 14px;
  cursor: pointer !important;
`;
