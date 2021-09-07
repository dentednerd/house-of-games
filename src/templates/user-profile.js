import { useParams, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { styled } from '../stitches.config';
import { fetchUserByUsername, fetchReviewsByUser } from '../utils/api';
import LoadingSpinner from '../atoms/loading-spinner';
import Preview from '../molecules/preview';

export default function UserProfile() {
  let { username } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    let isMounted = true;
    fetchUserByUsername(username)
      .then((user) => { if (isMounted) setUser(user) })
      .catch((err) => { if (err) setError(true); });
    fetchReviewsByUser(username)
      .then((reviews) => { if (isMounted) setReviews(reviews) })
      .then(() => setIsLoading(false));
    return () => { isMounted = false };
  }, [username]);

  if (error) return <Redirect to="/404" />;
  if (isLoading) return <LoadingSpinner />;

  const UserHeader = styled('section', {
    display: 'grid',
    gridTemplateColumns: '3.5rem auto',
    columnGap: '$default',
    marginBottom: '1rem',

    'div.avatar': {
      img: {
        height: '3.5rem',
        width: '3.5rem',
        borderRadius: '$circle',
        boxShadow: '$default'
      },
    }
  });

  return (
    <section className="content">
      <UserHeader>
        <div className="avatar">
          <img src={user.avatar_url} alt={user.name} />
        </div>
        <div>
          <h2>{user.name}</h2>
          <h3>{user.username}</h3>
        </div>
      </UserHeader>
      <section>
        {reviews.map((review) => (
          <Preview review={review} key={review.review_id} />
        ))}
      </section>
    </section>
  );
}
