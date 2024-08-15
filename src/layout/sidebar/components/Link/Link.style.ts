import styled from "styled-components";

export const LinkeStyle = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  flex-grow: 1;

  .link {
    display: flex;
    flex-direction: column;
  }
`;

export const LinkBox = styled.ul`
  padding: 0 23px 110px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  font-size: 18px;
  flex-grow: 1;

  li {
    display: flex;
    align-items: center;
  }

  .item {
    display: flex;
    align-items: center;
    padding: 16px 0px 10px 20px;
    border-radius: 8px;
    margin-right: 10px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.backgroundGray};
    }
  }

  .item.active {
    background-color: ${({ theme }) => theme.colors.defaultGreen};
    /* color: ${({ theme }) => theme.colors.defaultGreen}; */
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
