import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${(props) => props.size}%;
  }
  body {
  font-size: 1rem;;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

`;

export default GlobalStyle;
