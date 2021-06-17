import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: Roboto, 'Comic Sans MS', sans-serif;
  }

  body {
    padding: 4rem;
  }

  h3 {
    font-weight: 500;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --gray: #eeeeee;
    --blue: #5d9ce6;
  }
`;

export default GlobalStyles;
