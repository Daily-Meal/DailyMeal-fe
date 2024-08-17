import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

interface ButtonStyleProps {
  width?: string;
  height?: string;
  isSelected?: boolean;
}

export const FilterButtonStyle = styled.button<ButtonStyleProps>`
  width: ${props => props.width || "86px"};
  height: ${props => props.height || "47px"};
  background-color: ${props =>
    props.isSelected ? props.theme.colors.defaultGreen : "white"};
  color: ${props => (props.isSelected ? "white" : "black")};

  border-radius: 8px;
  border: none;
  font-size: 18px;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
    font-weight: 700;
    background-color: ${props =>
      props.isSelected
        ? props.theme.colors.textGreen
        : props.theme.colors.textGray};
  }
`;

export const CreateButtonStyle = styled.button<ButtonStyleProps>`
  width: ${props => props.width || "200px"};
  height: ${props => props.height || "52px"};
  background-color: ${({ theme }) => theme.colors.defaultGreen};
  color: white;

  border-radius: 8px;
  border: none;
  font-size: 20px;

  &:hover {
    cursor: pointer;
    font-weight: 700;
    background-color: ${props => props.theme.colors.textGreen};
  }
`;
