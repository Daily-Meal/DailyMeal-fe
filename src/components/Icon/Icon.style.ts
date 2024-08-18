import styled from "styled-components";

export const IconContainer = styled.img`
  width: ${props => props.width || "inherit"};
  height: ${props => props.height || "inherit"};
  cursor: pointer;
`;
