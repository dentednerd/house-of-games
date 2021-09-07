import { styled } from '../../stitches.config';
import UserChip from '../../atoms/user-chip';
import CategoryChip from '../../atoms/category-chip';

export default function Title({ review, showChips, rounded }) {
  const StyledTitle = styled('div', {
    backgroundImage: `url('${review.review_img_url}')`,
    backgroundSize: 'cover',
    backgroundClip: 'border-box',
    backgroundPosition: 'center',
    padding: '1rem',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',

    h2: {
      textAlign: 'center',
      color: 'white',
      textShadow: '0 0 0.1rem $colors$black, 0 0 0.25rem $colors$navy, 0 0 1rem $colors$navy',
      fontSize: '$3',
      marginBottom: showChips ? '1rem' : 0,

      '@media(min-width:800px)': {
        fontSize: '$5'
      }
    },

    'div.chips': {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '$default',
    },

    '@supports (aspect-ratio: 16 / 9)': {
      aspectRatio: '16 / 9',
    },

    variants: {
      rounded: {
        true: {
          borderRadius: '$corner'
        }
      }
    }
  });

  return (
    <StyledTitle rounded={rounded}>
      <h2>{review.title}</h2>
      {showChips && (
        <div className="chips">
          <UserChip username={review.owner} />
          <CategoryChip slug={review.category} />
        </div>
      )}
    </StyledTitle>
  );
}
