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
      beige: 'hsl(18, 87%, 88%)',
      coral: 'hsl(354, 88%, 71%)',
      purple: 'hsl(272, 15%, 42%)',
      navy: 'hsl(208, 40%, 35%)',
      white: '#ffffff',
      lightNavy: 'hsl(208, 40%, 85%)',
      medNavy: 'hsl(208, 40%, 65%)'
    }
  }
});
