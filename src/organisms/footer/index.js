import { styled } from '../../stitches.config';

const StyledFooter = styled('footer', {
  position: 'fixed',
  bottom: '0',
  width: 'calc(100% - 2rem)',
  background: '$navy',
  color: '$white',
  padding: '$default',

  'section.wrapper': {
    maxWidth: '800px',
    marginInline: 'auto',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '$default',
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
      <section className="wrapper">
        <a href="https://joeyimlay.dev">
          <h2>joeyimlay.dev</h2>
        </a>
      </section>
    </StyledFooter>
  );
}
