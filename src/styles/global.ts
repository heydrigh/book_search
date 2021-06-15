import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
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
html, body{
  height: 100%;
}
body {
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

button {
  cursor: pointer;
}
`;

export default GlobalStyles;
