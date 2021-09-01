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
    backgroundColor: '$white',
    width: '100%',

    'section.content': {
      maxWidth: '800px',
      margin: '2rem auto 0',
      padding: '1rem',
    }
  }
});

export default globalStyles;
