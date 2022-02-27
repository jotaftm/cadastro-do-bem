import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    width: 100vw;
    height: 100vh;
    font-family: 'Montserrat';
    background: #F5F5FA;
    color: #333333;
    -webkit-font-smoothing: antialiased !important
  }

  h1, h2, h3 strong {
    font-style: normal;
    font-weight: 700;
  }

  h1 {
    font-size: 48px;
    line-height: 68px;
  }

  h2 {
    font-size: 24px;
    line-height: 29px;
  }

  h3 {
    font-size: 18px;
    line-height: 22px;
  }

  p {
    font-style: normal;
    font-weight: normal;
  }

  .text1 {
    font-size: 24px;
    line-height: 40px;
  }

  .text2 {
    font-size: 18px;
    line-height: 22px;
  }

  button {
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
  }

  :root {
        --white: #F5F5FA;
        --blue: #2091CB;
        --red: #DD3937;
        --gray: #BDBDBD;
        --black: #333333;
    }
`;
