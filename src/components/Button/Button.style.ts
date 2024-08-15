import styled from "styled-components";

interface IButtonProps {
  width?: string;
  height?: string;
}

export const ButtonStyle = styled.button<IButtonProps>`
  width: ${props => props.width || "40%"};
  height: ${props => props.height || "40px"};
  background-color: ${({ theme }) => theme.colors.defaultGreen};
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background-color: #7eb238;
    font-weight: 700;
  }
`;
