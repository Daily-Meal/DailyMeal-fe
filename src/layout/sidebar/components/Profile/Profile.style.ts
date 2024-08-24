import { layoutMixins } from "@/styles/mixins";
import styled from "styled-components";

export const ProfileStyle = styled.div`
  padding-top: 24px;
  ${layoutMixins.columnFlexBox()}
  text-align: center;

  .info {
    ${layoutMixins.columnFlexBox()}
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

    .non-member {
      font-size: 14px;
      line-height: 150%;
    }
  }
`;
