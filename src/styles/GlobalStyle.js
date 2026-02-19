import { createGlobalStyle } from 'styled-components';
import FutureTenseRegular from "../assets/fonts/FutureTense-Regular.woff2";

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "Future Tense";
    src: url(${FutureTenseRegular}) format("woff2");
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
    font-family: "Montserrat", sans-serif;
    background: #232221;
    color: #FFFFFF;
    -webkit-font-smoothing: antialiased;
  }

  html, body {
    overflow-x: hidden;
  }

  h1, h2 {
    font-family: "Future Tense", sans-serif;
    letter-spacing: 1px;
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
