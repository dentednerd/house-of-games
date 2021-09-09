import { styled } from '../../stitches.config';

const StyledButton = styled('button', {
  width: '10ch',
  height: '2rem',
  fontFamily: '$bubblegum',
  fontSize: '$2',
  fontWeight: '700',
  backgroundColor: '$coral',
  color: '$white',
  border: 'none',
  boxShadow: '$wide',
  cursor: 'pointer',
  transition: '$all',

  '&:hover': {
    boxShadow: '$default'
  },

  variants: {
    goLeft: {
      true: {
        borderTopLeftRadius: '1rem',
        borderBottomLeftRadius: '1rem',
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0',
        marginRight: '0.25rem'
      }
    },
    goRight: {
      true: {
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0',
        borderTopRightRadius: '1rem',
        borderBottomRightRadius: '1rem',
        marginLeft: '0.25rem'
      }
    },
    allRound: {
      true: {
        borderRadius: '1rem'
      }
    }
  }
});

export default function Button({ type, text, onClick, goLeft, goRight, allRound }) {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      goLeft={goLeft}
      goRight={goRight}
      allRound={allRound}
    >
      {text}
    </StyledButton>
  );
}
