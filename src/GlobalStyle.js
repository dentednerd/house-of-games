import { createGlobalStyle } from 'styled-components';

const colors = {
  beige: '#f8b195',
  coral: '#f67280',
  duskypink: '#c06c84',
  purple: '#6c5b7b',
  navy: '#355c7d',
  white: '#ffffff'
};

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #ffffff;
    color: ${colors.navy};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    line-height: 1.2;
  }

  main {
    max-width: 800px;
    margin: 2rem auto 0;
    padding: 1rem;
  }
`;

export {
  GlobalStyle,
  colors
};
