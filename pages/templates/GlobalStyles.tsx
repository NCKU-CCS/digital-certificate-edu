import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html,
  body,
  #__next {
    height: 842px;
    width: 595px;
    /* to centre page on screen*/
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
  }

  p {
    margin: 0;
    padding: 0;
  }
`;
