import { createGlobalStyle, css } from "styled-components";
import { ThemeType } from "./theme";

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
    @font-face {
    font-family: 'SfPro';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('SfPro Regular'), local('sf_pro_regular'),
        url('src/assets/fonts/sf_pro_regular.ttf') format('ttf');
  }
  @font-face {
    font-family: 'SfPro';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('SfPro Medium'), local('sf_pro_medium'),
        url('src/assets/fonts/sf_pro_medium.ttf') format('ttf');
  }
  @font-face {
    font-family: 'SfPro';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('SfPro Bold'), local('sf_pro_bold'),
        url('src/assets/fonts/sf_pro_regular.ttf') format('ttf');
  }

*{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
html {
  font-size: 62.5%;
}
${({ theme }) => css`
  body {
    font-family: ${theme.font.family};
    background-color: ${theme.colors.primary};
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  input,
  button,
  select {
    font-family: ${theme.font.family};
  }
`}


button {
  cursor: pointer;
}
`;

export default GlobalStyles;
