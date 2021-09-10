import { Link } from 'react-router-dom';
import { styled } from '../../stitches.config';

const StyledFooter = styled('footer', {
  width: 'calc(100% - 2rem)',
  background: '$navy',
  color: '$white',
  padding: '$default',
  display: 'grid',
  gridTemplateRows: 'repeat(2, 1fr)',
  gridTemplateColumns: '1fr',
  gap: '$default',

  '@media(min-width: 768px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: '1fr'
  },

  ul: {
    listStyleType: 'none'
  },

  a: {
    color: '$white',
    textDecoration: 'none'
  }
});

export default function Footer() {
  return (
    <StyledFooter>
      <h2>dentednerd's House of Games</h2>
      <ul>
        <li>
          <Link to="/about">What's this then?</Link>
        </li>
        <li>
          <a href="https://joeyimlay.dev">Who is dentednerd?</a>
        </li>
        <li>
          <a href="https://www.northcoders.com">What is Northcoders?</a>
        </li>
      </ul>
    </StyledFooter>
  );
}
