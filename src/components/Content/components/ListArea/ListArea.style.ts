import styled from "styled-components";
import { PiListPlusFill } from "react-icons/pi";
import { scrollMixins } from "@/styles/mixins";

export const ListAreaStyle = styled.div`
  ${scrollMixins.customScrollbar()}
  background-color: white;
  border-radius: 15px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  max-height: 80vh;

  ::-webkit-scrollbar {
    width: 0px;
  }

  .itemContainer {
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 80px;
    padding: 10px;

    align-items: center;
    justify-items: center;
    overflow: auto;
  }

  .infiniteScrollArea {
    background-color: yellow;
    height: 50px;
  }
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
