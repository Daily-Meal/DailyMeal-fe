import styled from "styled-components";

export const IconContainer = styled.img`
  width: ${props => props.width};
  height: ${props => props.width};
  color: white;
  fill: white;
  svg {
    color: white;
    fill: white;
  }
  cursor: pointer;
`;
