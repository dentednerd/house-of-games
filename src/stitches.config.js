import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      white: 'hsl(0, 0%, 100%)',
      grey: 'hsl(0, 0%, 75%)',
      darkGrey: 'hsl(0, 0%, 50%)',
      black: 'hsl(0, 0%, 0%)',
      lightBeige: 'hsl(18, 87%, 95%)',
      beige: 'hsl(18, 87%, 88%)',
      lightNavy: 'hsl(208, 40%, 85%)',
      medNavy: 'hsl(208, 40%, 60%)',
      navy: 'hsl(208, 40%, 35%)',
      purple: 'hsl(272, 15%, 52%)',
      coral: 'hsl(354, 88%, 70%)',
    },
    fontSizes: {
      0: '0.75rem',
      1: '1rem',
      2: '1.25rem',
      3: '1.5rem',
      4: '1.75rem',
      5: '2rem'
    },
    lineHeights: {
      0: '1rem',
      1: '1.2rem',
      2: '1.5rem',
      3: '1.8rem',
      4: '2.1rem',
      5: '2.4rem'
    },
    fonts: {
      bubblegum: '"Bubblegum Sans", sans-serif',
      barlow: '"Barlow", sans-serif'
    },
    space: {
      small: '0.5rem',
      default: '1rem'
    },
    radii: {
      corner: '1rem',
      circle: '50%'
    },
    shadows: {
      default: '0 0 0.25rem $colors$navy',
      wide: '0 0 0.5rem $colors$navy'
    },
    transitions: {
      all: 'all 0.2s'
    }
  },
  media: {
    bp1: '(min-width: 768px)'
  }
});
