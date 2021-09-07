import { Link } from 'react-router-dom';
import { styled } from '../../stitches.config';
import UserChip from '../../atoms/user-chip';
import CategoryChip from '../../atoms/category-chip';
import Title from '../title';

const StyledPreview = styled('section', {
  backgroundColor: '$lightNavy',
  borderRadius: '1rem',
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  width: '100%',
  maxWidth: '800px',
  marginBottom: '1rem',

  '@supports (aspect-ratio: 24 / 9)': {
    aspectRatio: '24 / 9',
  },

  'a.title': {
    textDecoration: 'none',
  },

  'div.content': {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem'
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
