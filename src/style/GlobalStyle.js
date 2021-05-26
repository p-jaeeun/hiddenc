import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing:inherit;
  }

  body{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

 a{
   text-decoration:none;
   color:inherit;
 }
  ul, li{
    list-style:none;
  }
  
`;

export default GlobalStyle;
