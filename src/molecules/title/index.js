import { styled } from '../../stitches.config';
import UserChip from '../../atoms/user-chip';
import CategoryChip from '../../atoms/category-chip';

export default function Title({ review, showChips }) {
  const StyledTitle = styled('div', {
    backgroundImage: `url('${review.review_img_url}')`,
    backgroundSize: 'cover',
    backgroundClip: 'border-box',
    backgroundPosition: 'center',
    borderRadius: '1rem',
    padding: '1rem',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',

    h2: {
      fontFamily: '"Bubblegum Sans", sans-serif',
      textAlign: 'center',
      color: 'white',
      textShadow: '0 0 0.1rem $colors$black, 0 0 0.25rem $colors$navy, 0 0 1rem $colors$navy',
      fontSize: '1.5rem',

      '@media(min-width:800px)': {
        fontSize: '2rem'
      }
    },

    'div.chips': {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'center',
      alignItems: 'center',
    },

    '@supports (aspect-ratio: 16 / 9)': {
      aspectRatio: '16 / 9',
    },
  });

  return (
    <StyledTitle>
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
