import styled from "styled-components";
import { layoutMixins } from "@/styles/mixins";

export const SignupStyle = styled.div`
  ${layoutMixins.columnFlexBox()}
  min-width: 800px;
  width: 100%;
  height: 100vh;
  gap: 50px;

  form {
    ${layoutMixins.columnFlexBox()}
    width: 100%;
    gap: 30px;
  }
`;

export const CheckBox = styled.div`
  ${layoutMixins.columnFlexBox("", "")}
  width: 40%;
  gap: 5px;
  div {
    width: 100%;
  }
  button {
    align-self: flex-start;
  }
`;
