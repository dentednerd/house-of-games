import { styled } from '../../stitches.config';
import Menu from '../../molecules/menu';

const StyledHeader = styled('header', {
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '3rem',
  width: 'calc(100% - 2rem)',
  backgroundColor: '$navy',
  padding: '1rem',
  color: '$white',

  a: {
    textDecoration: 'none',
    color: '$white'
  },

  h1: {
    display: 'inline',
    fontFamily: '"Bubblegum Sans", sans-serif',
    fontSize: '1.75rem',
    padding: '0',
    margin: '0'
  }
});

export default function Header() {
  return (
    <StyledHeader>
      <a href="/">
        <h1>DentedNerd's House of Games</h1>
      </a>
      <Menu />
    </StyledHeader>
  );
};
