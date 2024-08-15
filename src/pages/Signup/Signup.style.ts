import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  gap: 30px;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 4px;

    div {
      display: flex;
      width: 40%;
      justify-content: flex-start;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.linkGreen};
  font-size: 14px;
  cursor: pointer !important;
`;
