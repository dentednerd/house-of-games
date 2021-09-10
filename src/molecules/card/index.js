import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { styled } from '../../stitches.config';
import {
  fetchUserByUsername,
} from '../../utils/api';
import LoadingSpinner from '../../atoms/loading-spinner';
import UserChip from '../../atoms/user-chip';
import CategoryChip from '../../atoms/category-chip';

export default function Card({ review, hideUser }) {
  const [isLoading, setIsLoading] = useState(true);
  const [author, setAuthor] = useState({});
  const history = useHistory();

  useEffect(() => {
    if (!review.owner) return;
    let isMounted = true;
    fetchUserByUsername(review.owner)
    .then((user) => { if (isMounted) setAuthor(user) })
    .then(() => setIsLoading(false));
    return () => isMounted = false;
  }, [review]);

  if (!review || isLoading) return <LoadingSpinner />;

  const StyledCard = styled('section', {
    backgroundColor: '$white',
    borderRadius: '$corner',
    display: 'grid',
    gridTemplateRows: '2fr auto',
    gridTemplateColumns: '1fr',
    width: '100%',
    maxWidth: '800px',
    boxShadow: '$wide',
    overflow: 'hidden',
    transition: '$all',
    cursor: 'pointer',

    '&:hover': {
      boxShadow: '$default'
    },

    'a.title': {
      textDecoration: 'none',
    },

    'div.content': {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '$default',
      padding: '$default',
    }
  });

  const StyledTitle = styled('div', {
    backgroundImage: `url('${review.review_img_url}')`,
    backgroundSize: 'cover',
    backgroundClip: 'border-box',
    backgroundPosition: 'center',
    padding: '$default',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',

    h2: {
      textAlign: 'center',
      color: 'white',
      textShadow: '0 0 0.1rem $colors$black, 0 0 0.25rem $colors$navy, 0 0 1rem $colors$navy',
      fontSize: '$3',
      marginBottom: '0',

      '@media(min-width:800px)': {
        fontSize: '$5'
      }
    }
  });

  return (
    <StyledCard onClick={() => history.push(`/review/${review.review_id}`)}>
      <StyledTitle>
        <h2>{review.title}</h2>
        <div className="content">
          {!hideUser && <UserChip user={author} username={review.owner} />}
          <CategoryChip slug={review.category} />
        </div>
      </StyledTitle>

    </StyledCard>
  );
}
