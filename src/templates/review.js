import { useParams, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { styled } from '../stitches.config';
import {
  fetchReviewById,
  fetchCommentsByReviewId,
} from '../utils/api';
import LoadingSpinner from '../atoms/loading-spinner';
import Time from '../atoms/time';
import AddComment from '../molecules/add-comment';
import Comment from '../molecules/comment';
import Card from '../molecules/card';
import Voter from '../molecules/voter';

export default function Review() {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let isMounted = true;
    fetchReviewById(id)
      .then((review) => { if (isMounted) setReview(review) })
      .catch((err) => { if (err) setError(true); });
    return () => { isMounted = false };
  }, [id]);

  useEffect(() => {
    if (error) return;
    fetchCommentsByReviewId(id)
      .then((comments) => setComments(comments))
      .then(() => setIsLoading(false));
  }, [id, error]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (error) return <Redirect to="/404" />;
  if (isLoading) return <LoadingSpinner />;

  const StyledReview = styled('article', {
    marginBottom: '$default',

    'div.content': {
      padding: '$default',

      p: {
        fontSize: '$2',
        lineHeight: '$2',
        marginBottom: '$default'
      },

      footer: {
        height: '1.5rem',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '$small'
      }
    }
  });

  return (
    <section className="content">
      <StyledReview>
        <Card review={review} />
        <div className="content">
          <p>{review.review_body}</p>
          <footer>
            <Time timestamp={review.created_at} />
            <Voter reviewId={review.review_id} initialVotes={review.votes} />
          </footer>
        </div>
      </StyledReview>
      <AddComment
        reviewId={review.review_id}
        comments={comments}
        setComments={setComments}
      />
      {comments.sort((a, b) => b.votes - a.votes).map((comment) => (
        <Comment
          key={comment.comment_id}
          comment={comment}
          comments={comments}
          setComments={setComments}
        />
      ))}
    </section>
  );
}
