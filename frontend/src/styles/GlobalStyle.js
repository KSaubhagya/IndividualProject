import { createGlobalStyle } from "styled-components";
import bgImage from "../assests/background.png";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body, #root {
    margin: 0;
    padding: 0;
    min-height: 100%;
    width: 100%;
    font-family: 'Poppins', sans-serif;
  }

body {
    position: relative;
    background: url(${bgImage}) no-repeat center center fixed;
    background-size: cover;
    color: #ffffff;
  }


  body::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(44, 43, 62, 0.8); 
    z-index: -1; 
  }
`;

export default GlobalStyle;
