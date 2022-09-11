import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body,div,p, ul, li,a, img,footer, nav, header, span, figure,h3,h1,h2 {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  .main__container{
    min-height: 70vh;
  }
`;
