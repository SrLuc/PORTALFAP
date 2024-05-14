import { createGlobalStyle } from "styled-components";
import { softexTheme } from "../themes/softexTheme";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body{
    //font-family: "Ubuntu", sans-serif;
    //font-family: "Libre Franklin", sans-serif;
    font-family: "Arimo", sans-serif;
    background-image: linear-gradient(${softexTheme.gradients.gradient});
  
    transition: all 0.25s linear;
  }
`;

export default GlobalStyle;
