import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle<{ mode: 'vertical' | 'horizontal' }>`
  html,
  body,
  #__next {

    ${p =>
      p.mode === 'vertical'
        ? `
          height: 842px;
          width: 595px;
        `
        : `
          height: 595px;
          width: 842px;
        `}

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
