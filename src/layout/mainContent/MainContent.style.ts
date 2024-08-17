import styled from "styled-components";

export const MainBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.linkGray};
  height: 100%;
`;

const margin = "15px";

export const MainWrapper = styled.div`
  display: flex;
  margin: ${margin};

  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.linkGray};
  height: calc(100% - (2 * ${margin}));
  overflow: auto;
`;
