import { DefaultTheme } from "styled-components";

export interface Colors {
  defaultGreen: string;
  defaultGray: string;
  overlayGray: string;
  lightGray: string;
  linkGray: string;
  lightTextGray: string;
  backgroundGray: string;
  textGray: string;
  backgroundGreen: string;
  textGreen: string;
  linkGreen: string;
}

const theme: DefaultTheme = {
  colors: {
    defaultGreen: "#88C533",
    defaultGray: "#D6D6D6",
    overlayGray: "#000000",
    lightGray: "#82867E",
    linkGray: "#F6F6F6",
    textGray: "#A9A9A9",
    lightTextGray: "#C0C0C0",
    backgroundGray: "#FBFBFB",
    backgroundGreen: "#E6EFDA",
    textGreen: "#5E8B20",
    linkGreen: "#77BC19",
  },
  fonts: {
    main: "'Roboto', sans-serif",
  },
};

export default theme;
