import styled from "styled-components";
import { PiListPlusFill } from "react-icons/pi";

export const ListAreaStyle = styled.div`
  background-color: white;
  border-radius: 15px;
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  padding: 50px;
`;

export const NoContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

export const NoContentStyle = styled(PiListPlusFill)`
  color: ${({ theme }) => theme.colors.textGray};
  width: 150px;
  height: 150px;
`;

export const NoContentText = styled.div`
  margin-top: 15px;
  font-size: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textGray};
`;
