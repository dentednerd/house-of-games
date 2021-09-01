import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

const StyledFooter = styled.footer`
  width: 100%;
  background: ${colors.navy};
  color: ${colors.white};
  padding: 1rem;
`;

export default function Footer() {
  return (
    <StyledFooter>
      this is the footer
    </StyledFooter>
  )
}
