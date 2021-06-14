import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
html, body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
}

body {
    padding: 2rem;
    min-height: 100vh;
}

h3 {
    font-weight: 500;
}

*,
*::before,
*::after {
    margin:0;
    padding: 0;
    box-sizing: boder-box;
}

:root {
    --blue: #5d9ce6;
}
`;

export default GlobalStyles;
