import { styled } from '../../stitches.config';

const StyledFooter = styled('footer', {
  width: 'calc(100% - 2rem)',
  background: '$navy',
  color: '$white',
  padding: '1rem'
});

export default function Footer() {
  return (
    <StyledFooter>
      this is the footer
    </StyledFooter>
  )
}
