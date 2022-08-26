import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
  }

  *, *:before, &:after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: black;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  html {
    scrollbar-width: none;
  }
`;

export default GlobalStyles;
