/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const globalStyles = css`
  @font-face {
    font-family: 'Bicyclette';
    src: url('/fonts/Bicyclette-Thin.eot');
    src: local('Bicyclette Thin'), local('Bicyclette-Thin'),
        url('/fonts/Bicyclette-Thin.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Bicyclette-Thin.woff2') format('woff2'),
        url('/fonts/Bicyclette-Thin.woff') format('woff'),
        url('/fonts/Bicyclette-Thin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Bicyclette';
    src: url('/fonts/Bicyclette-Bold.eot');
    src: local('Bicyclette Bold'), local('Bicyclette-Bold'),
        url('/fonts/Bicyclette-Bold.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Bicyclette-Bold.woff2') format('woff2'),
        url('/fonts/Bicyclette-Bold.woff') format('woff'),
        url('/fonts/Bicyclette-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Bicyclette';
    src: url('/fonts/Bicyclette-Regular.eot');
    src: local('Bicyclette Regular'), local('Bicyclette-Regular'),
        url('/fonts/Bicyclette-Regular.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Bicyclette-Regular.woff2') format('woff2'),
        url('/fonts/Bicyclette-Regular.woff') format('woff'),
        url('/fonts/Bicyclette-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Bicyclette Ultra';
    src: url('/fonts/Bicyclette-Ultra.eot');
    src: local('Bicyclette Ultra'), local('Bicyclette-Ultra'),
        url('/fonts/Bicyclette-Ultra.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Bicyclette-Ultra.woff2') format('woff2'),
        url('/fonts/Bicyclette-Ultra.woff') format('woff'),
        url('/fonts/Bicyclette-Ultra.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Bicyclette';
    src: url('/fonts/Bicyclette-Black.eot');
    src: local('Bicyclette Black'), local('Bicyclette-Black'),
        url('/fonts/Bicyclette-Black.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Bicyclette-Black.woff2') format('woff2'),
        url('/fonts/Bicyclette-Black.woff') format('woff'),
        url('/fonts/Bicyclette-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Bicyclette';
    src: url('/fonts/Bicyclette-Italic.eot');
    src: local('Bicyclette Italic'), local('Bicyclette-Italic'),
        url('/fonts/Bicyclette-Italic.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Bicyclette-Italic.woff2') format('woff2'),
        url('/fonts/Bicyclette-Italic.woff') format('woff'),
        url('/fonts/Bicyclette-Italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Bicyclette';
    src: url('/fonts/Bicyclette-Light.eot');
    src: local('Bicyclette Light'), local('Bicyclette-Light'),
        url('/fonts/Bicyclette-Light.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Bicyclette-Light.woff2') format('woff2'),
        url('/fonts/Bicyclette-Light.woff') format('woff'),
        url('/fonts/Bicyclette-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Bicyclette', sans-serif;
  }

  body {
    font-family: 'Bicyclette', sans-serif !important;
    font-weight: normal !important;
    font-size: 1.5rem !important;
  }

  h1 {
    font-family: 'Bicyclette', sans-serif !important;
    font-weight: bold;
    // border: 1px solid red;
  }
`;

export { globalStyles };
