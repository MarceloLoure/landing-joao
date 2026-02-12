import { createGlobalStyle } from 'styled-components';
import FutureTenseRegular from "../assets/fonts/FutureTense-Regular.ttf";

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "Future Tense";
    src: url(${FutureTenseRegular}) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: "Future Tense", sans-serif;
    background: #232221;
    color: #FFFFFF;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
    border: none;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;
