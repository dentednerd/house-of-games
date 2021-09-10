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
        borderTopLeftRadius: '$corner',
        borderBottomLeftRadius: '$corner',
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0',
        marginRight: '0.25rem'
      }
    },
    goRight: {
      true: {
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0',
        borderTopRightRadius: '$corner',
        borderBottomRightRadius: '$corner',
        marginLeft: '0.25rem'
      }
    },
    allRound: {
      true: {
        borderRadius: '$corner'
      }
    },
    sort: {
      true: {
        fontFamily: '$barlow',
        fontSize: '$0',
        lineHeight: '$0',
        padding: '0.5rem $space$default',
        height: 'auto',
        width: '100%'
      }
    }
  }
});

export default function Button({
  type,
  text,
  onClick,
  goLeft,
  goRight,
  allRound,
  sort
}) {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      goLeft={goLeft}
      goRight={goRight}
      allRound={allRound}
      sort={sort}
    >
      {text}
    </StyledButton>
  );
}
