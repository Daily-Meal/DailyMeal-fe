import { DefaultTheme } from "styled-components";

export interface Colors {
  defaultGreen: string;
  defaultGray: string;
  overlayGray: string;
  backgroundGreen: string;
  textGreen: string;
}

const theme: DefaultTheme = {
  colors: {
    defaultGreen: "#88C533",
    defaultGray: "#D6D6D6",
    overlayGray: "#000000",
    backgroundGreen: "#E6EFDA",
    textGreen: "#5E8B20",
  },
  fonts: {
    main: "'Roboto', sans-serif",
  },
  // spacing: (factor: number) => `${8 * factor}px`,
};

export default theme;
