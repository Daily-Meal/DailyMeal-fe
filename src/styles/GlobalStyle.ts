import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body{
    background-color: #FFFFFF;
  }
  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
