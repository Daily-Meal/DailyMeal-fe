import styled from "styled-components";

const BORDER_RADIUS = "13px";
const BOTTOM_MARGIN = "20px";

export const ListStyle = styled.div`
  display: flex;
  flex-direction: column;

  height: 414px;
  width: 371px;
  border-radius: ${BORDER_RADIUS};
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.backgroundGray};

  .imageArea {
    height: 60%;
    object-fit: contain;
    border-top-left-radius: ${BORDER_RADIUS};
    border-top-right-radius: ${BORDER_RADIUS};
  }

  .detailArea {
  }

  .typeArea {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
  }

  .typeArea .mealType {
    font-size: 20px;
    white-space: nowrap;

    margin: 0px 10px 0px 10px;
    background-color: white;
    padding: 15px;
    text-align: center;
    height: 30px;
    border-radius: 30px;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .typeArea .tagArea {
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow-x: scroll; /* 수평 스크롤 활성화 */
    font-size: 20px;
    white-space: nowrap; /* 줄바꿈 방지 */
    -webkit-overflow-scrolling: touch;
  }
  .typeArea ::-webkit-scrollbar {
    width: 10px;
    height: 6px;
  }
  .typeArea ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.defaultGreen};
    border-radius: 12px 12px 12px 12px;
  }

  .tagArea .tagBox {
    margin: 0px 5px 5px 5px;
    background-color: white;
    padding: 15px;
    text-align: center;
    height: 30px;
    border-radius: 30px;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .idArea {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }

  .idArea .idText {
    margin-left: 15px;
    font-size: 18px;
  }

  .bottom {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    flex-grow: 1;
    border-bottom-left-radius: ${BORDER_RADIUS};
    border-bottom-right-radius: ${BORDER_RADIUS};

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
  }

  .bottom .favorite {
    margin-left: ${BOTTOM_MARGIN};
  }

  .bottom .filledFavorite {
    margin-left: ${BOTTOM_MARGIN};
    color: red;
  }
  .bottom .createdDate {
    font-size: 20px;
    margin-right: ${BOTTOM_MARGIN};
  }
`;
