import { layoutMixins } from "@/styles/mixins";
import styled from "styled-components";

export const ListStyle = styled.div`
  display: flex;
  flex-direction: column;

  height: 300px;
  width: 250px;
  border-radius: ${({ theme }) => theme.radius.LIST_BORDER_RADIUS};
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.backgroundGray};

  .flipArea {
    height: 60%;

    border-top-left-radius: ${({ theme }) => theme.radius.LIST_BORDER_RADIUS};
    border-top-right-radius: ${({ theme }) => theme.radius.LIST_BORDER_RADIUS};

    display: inline-grid;
    color: white;
    transition: transform 0.5s;
    transform: perspective(800px) rotateY(0deg);
    transform-style: preserve-3d;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  .flipArea:hover {
    transform: perspective(1000px) rotateY(180deg);
  }

  .flipArea > * {
    border-top-right-radius: ${({ theme }) => theme.radius.LIST_BORDER_RADIUS};
    border-top-left-radius: ${({ theme }) => theme.radius.LIST_BORDER_RADIUS};
    backface-visibility: hidden;
  }

  .flipFront,
  .flipBack {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .flipFront {
    align-items: center;
    justify-content: center;
    object-fit: contain;
  }

  .flipBack {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.colors.lightGray};
    transform: rotateY(180deg);
    color: white;
    font-size: 18px;
  }

  .flipBack li {
    margin-left: 25px;
    list-style: disc;
    list-style-position: inside;
    margin-bottom: 10px;
  }

  .typeArea {
    display: flex;
    flex-grow: 1;
    align-items: center;
    font-size: 15px;
  }

  .typeArea .mealType {
    white-space: nowrap;
    margin: 0px 10px 10px 10px;
    background-color: white;
    padding: 15px;
    text-align: center;
    height: 30px;
    border-radius: 30px;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    ${layoutMixins.flexBox()}
  }

  .typeArea .tagArea {
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    &:hover {
      cursor: grab;
    }
  }
  .typeArea ::-webkit-scrollbar {
    display: none;
  }

  .tagArea .tagBox {
    margin: 0px 10px 10px 10px;
    background-color: white;
    padding: 10px;
    text-align: center;
    height: 30px;
    border-radius: 30px;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.textGray};
  }

  .idArea {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .idArea .idText {
    margin-left: 15px;
    font-size: 18px;
    &:hover {
      cursor: pointer;
    }
  }

  .idArea .mypageArea {
    font-size: 13px;
    display: flex;
    margin-right: 10px;
  }

  .mypageArea .edit {
    margin-right: 10px;
    &:hover {
      cursor: pointer;
    }
  }

  .editIcon {
    color: blue;
  }

  .mypageArea .delete {
    margin-right: 10px;
    &:hover {
      cursor: pointer;
    }
  }

  .deleteIcon {
    color: red;
  }

  .bottom {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    flex-grow: 1;
    border-bottom-left-radius: ${({ theme }) =>
      theme.radius.LIST_BORDER_RADIUS};
    border-bottom-right-radius: ${({ theme }) =>
      theme.radius.LIST_BORDER_RADIUS};

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
  }

  .bottom .favorite {
    margin-left: ${({ theme }) => theme.margin.LIST_BOTTOM_MARGIN};
    &:hover {
      cursor: pointer;
    }
  }

  .bottom .filledFavorite {
    margin-left: ${({ theme }) => theme.margin.LIST_BOTTOM_MARGIN};
    color: red;
  }
  .bottom .createdDate {
    font-size: 13px;
    margin-right: ${({ theme }) => theme.margin.LIST_BOTTOM_MARGIN};
  }
`;
