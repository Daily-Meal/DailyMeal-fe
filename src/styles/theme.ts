import { DefaultTheme } from "styled-components";

export interface Colors {
  defaultGreen: string;
  defaultGray: string;
  overlayGray: string;
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
    textGray: "#A9A9A9",
    backgroundGray: "#FBFBFB",
    backgroundGreen: "#E6EFDA",
    textGreen: "#5E8B20",
    linkGreen: "#77BC19",
  },
  fonts: {
    main: "'Roboto', sans-serif",
  },
  // spacing: (factor: number) => `${8 * factor}px`,
};

export default theme;
