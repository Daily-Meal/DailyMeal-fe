import styled from "styled-components";

export const InputBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 40%;
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
