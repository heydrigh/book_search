const theme = {
  grid: {
    container: "130rem",
    gutter: "3.2rem"
  },
  border: {
    radius: "0.3rem",
    searchBox: "1rem"
  },
  font: {
    family:
      "SfPro, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    bold: 600,
    sizes: {
      ultrasmall: "1.2rem",
      xxsmall: "1.4rem",
      xsmall: "1.6rem",
      small: "1.8rem",
      medium: "2.2rem",
      large: "2.4rem",
      xlarge: "3.4rem",
      xxlarge: "5.2rem"
    }
  },
  colors: {
    bg: "#FFFCF9",
    primary: "#FFF6E5",
    secondary: "#FF6978",
    secondaryHover: "#ff364a",
    green: "#EEF5DB",
    headerBg: "#FFF6E5",
    texts: "#3F4043",
    textTitle: "#36383A",
    textGray: "rgba(49, 49, 49, 0.8)",
    descriptionGray: "rgba(49, 49, 49, 0.8)",
    links: "#4ABDF1",
    placeholder: "#54565A",
    iconGray: "#BFBEBF",
    white: "#FFFFFF",
    black: "#000000",
    darkBlue: "#00173D",
    gray: "rgba(49, 49, 49, 0.6)"
  },
  spacings: {
    xxsmall: "0.8rem",
    xsmall: "1.6rem",
    small: "2.4rem",
    medium: "3.2rem",
    large: "6.0rem",
    xlarge: "6.4rem",
    xxlarge: "12.8rem"
  }
};

type ThemeType = typeof theme;

export type { ThemeType };

export default theme;
