import { globalCss } from '@stitches/react';

const globalStyles = globalCss({
  '*, *:before, *:after': {
    margin: '0',
    padding: '0'
  },

  body: {
    backgroundColor: '$navy',
    color: '$navy',
    padding: '0',
    margin: '0',
    fontFamily: "'Barlow', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    fontSize: '16px',
    lineHeight: '1.2'
  },

  main: {
    backgroundColor: '$lightNavy',
    width: '100%',

    'section.content': {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '1rem',
      minHeight: '100vh'
    }
  },

  p: {
    marginBottom: '1.2rem'
  },

  h1: {
    display: 'inline',
    fontFamily: '$bubblegum',
    fontSize: '$4',
    padding: '0',
    margin: '0'
  },

  h2: {
    fontFamily: '$bubblegum'
  },

  h3: {
    fontFamily: '$bubblegum'
  },

  a: {
    color: '$coral',
    textDecoration: 'none'
  }
});

export default globalStyles;
