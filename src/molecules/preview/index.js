import { Link } from 'react-router-dom';
import { styled } from '../../stitches.config';
import UserChip from '../../atoms/user-chip';
import CategoryChip from '../../atoms/category-chip';
import Title from '../title';

const StyledPreview = styled('section', {
  backgroundColor: '$white',
  borderRadius: '$corner',
  display: 'grid',
  gridTemplateRows: '2fr 1fr',
  gridTemplateColumns: '1fr',
  width: '100%',
  maxWidth: '800px',
  marginBottom: '1rem',
  boxShadow: '$wide',
  overflow: 'hidden',
  transition: '$all',

  '&:hover': {
    boxShadow: '$default'
  },

  '@supports (aspect-ratio: 16 / 13.5)': {
    aspectRatio: '16 / 13.5',
  },

  '@bp1': {
    gridTemplateRows: '1fr',
    gridTemplateColumns: '2fr 1fr',

    '@supports (aspect-ratio: 24 / 9)': {
      aspectRatio: '24 / 9',
    },
  },

  'a.title': {
    textDecoration: 'none',
  },

  'div.content': {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$default',
    padding: '1rem',

    '@bp1': {
      flexFlow: 'column nowrap'
    }
  }
});

export default function Preview({ review }) {
  return (
    <StyledPreview>
      <Link className="title" to={`/review/${review.review_id}`}>
        <Title review={review} />
      </Link>
      <div className="content">
        <UserChip username={review.owner} />
        <CategoryChip slug={review.category} />
      </div>
    </StyledPreview>
  )
}
