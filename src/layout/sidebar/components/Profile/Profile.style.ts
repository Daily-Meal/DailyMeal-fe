import styled from "styled-components";

export const ProfileStyle = styled.div`
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-top: 60px;
    gap: 10px;

    .img {
      width: 80px;
      height: 80px;
      background-color: black;
      border-radius: 50%;
      margin-bottom: 14px;
    }

    .email {
      color: ${({ theme }) => theme.colors.lightGray};
      font-size: 14px;
    }
  }
`;
