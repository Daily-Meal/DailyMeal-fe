import { layoutMixins } from "@/styles/mixins";
import styled from "styled-components";

export const LinkStyle = styled.div`
  ${layoutMixins.columnFlexBox("", "center")}
  margin-top: 60px;
  text-align: center;
  flex-grow: 1;

  .link {
    display: flex;
    flex-direction: column;
  }
`;

export const LinkBox = styled.ul`
  padding: 0 23px 110px 32px;
  ${layoutMixins.columnFlexBox("space-between", "")}
  width: 100%;
  font-size: 18px;
  flex-grow: 1;

  li {
    display: flex;
    align-items: center;
  }

  .item {
    ${layoutMixins.flexBox("")}
    padding: 16px 0px 10px 20px;
    border-radius: 8px;
    margin-right: 10px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.backgroundGray};
    }
  }

  .item.active {
    background-color: ${({ theme }) => theme.colors.defaultGreen};
    color: white;
  }

  .linkName {
    margin-left: 15px;
  }

  .item.logout {
    background-color: ${({ theme }) => theme.colors.backgroundGray};
  }

  .item.logout.active {
    background-color: ${({ theme }) => theme.colors.defaultGreen};
  }
`;
