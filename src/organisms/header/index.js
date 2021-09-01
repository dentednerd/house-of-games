import { styled } from '../../stitches.config';

const StyledHeader = styled('header', {
  width: 'calc(100% - 2rem)',
  height: '0',
  backgroundColor: '$navy',
  padding: '1rem',
  color: '$white',

  h1: {
    fontFamily: '"Bubblegum Sans", sans-serif',
    lineHeight: '1',
    padding: '0',
    margin: '0',
  }
});

export default function Header() {
  return (
    <StyledHeader>
      <h1>Joey's House of Games</h1>
    </StyledHeader>
  );
};
