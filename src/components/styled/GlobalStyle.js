import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    font-family: Roboto, Segoe UI, Tahoma, Geneva, Verdana, sans-serif;

    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyle;
