import styled from "styled-components";

export interface IButtonStyleProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
}

export const ButtonStyle = styled.button<IButtonStyleProps>`
  width: ${props => props.width || "40%"};
  height: ${props => props.height || "40px"};
  flex-shrink: 0;
  background-color: ${props =>
    props.backgroundColor || props.theme.colors.defaultGreen};
  border: none;
  color: ${props => props.color || "white"};
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background-color: #7eb238;
    font-weight: 700;
  }
`;
