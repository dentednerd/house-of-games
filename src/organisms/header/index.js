import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${colors.navy};
  color: ${colors.white};
  padding: 1rem;

  h1 {
    font-family: 'Bubblegum Sans', sans-serif;
    line-height: 1;
    padding: 0;
    margin: 0;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Joey's House of Games</h1>
    </StyledHeader>
  );
};
