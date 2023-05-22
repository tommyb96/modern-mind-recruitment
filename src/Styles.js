import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    
  }
  @font-face {
  font-family: 'Hando';
  src: url('') format('opentype');
}

  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    ;
  }
  
  

  
`;
