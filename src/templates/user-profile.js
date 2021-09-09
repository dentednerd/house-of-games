import { useParams, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { styled } from '../stitches.config';
import {
  fetchUserByUsername,
  fetchReviewsByUser,
  fetchCommentsByUser
} from '../utils/api';
import LoadingSpinner from '../atoms/loading-spinner';
import ReviewLink from '../atoms/review-link';
import UserHeader from '../atoms/user-header';
import Card from '../molecules/card';
import Comment from '../molecules/comment';

export default function UserProfile() {
  let { username } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});
  const [reviews, setReviews] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let isMounted = true;

    fetchUserByUsername(username)
      .then((user) => { if (isMounted) setUser(user) })
      .catch((err) => { if (err) setError(true); });

    fetchReviewsByUser(username)
      .then((reviews) => { if (isMounted) setReviews(reviews) })
      .catch((err) => { if (err) setError(true); });

    fetchCommentsByUser(username)
      .then((comments) => { if (isMounted) setComments(comments) })
      .then(() => setIsLoading(false));
    return () => { isMounted = false };
  }, [username]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (error) return <Redirect to="/404" />;
  if (isLoading) return <LoadingSpinner />;

  const ProfileGrid = styled('section', {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1rem',
    margin: '1rem 0',

    '@bp1': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },

    variants: {
      box: {
        true: {
          padding: '1rem',
          borderRadius: '$corner',
          backgroundColor: '$white',
          boxShadow: '$wide'
        }
      }
    }
  });

  return (
    <section className="content">
      <UserHeader user={user} />

      <ProfileGrid>
        {reviews.map((review) => (
          <Card
            key={review.review_id}
            review={review}
            hideUser
          />
        ))}
      </ProfileGrid>

      <ProfileGrid box>
        {comments.map((comment) => (
          <section key={comment.comment_id}>
            <p>
              {user.username}
              &nbsp;on&nbsp;
              <ReviewLink reviewId={comment.review_id} />
              ...
            </p>
            <Comment
              comment={comment}
              comments={comments}
              setComments={setComments}
              hideUser
            />
          </section>
        ))}
      </ProfileGrid>
    </section>
  );
}
