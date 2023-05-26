import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  }
  *:hover {
    touch-action: none;
  }
  
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    ;
  }
  
  

  
`;
