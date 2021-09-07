import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { styled } from '../stitches.config';
import { fetchReviewById, fetchCommentsByReviewId } from '../utils/api';
import LoadingSpinner from '../atoms/loading-spinner';
import Time from '../atoms/time';
import Comment from '../molecules/comment';
import Title from '../molecules/title';
import Voter from '../molecules/voter';

export default function Review() {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let isMounted = true;
    fetchReviewById(id)
      .then((review) => { if (isMounted) setReview(review) })
      .then(() => setIsLoading(false));
    return () => { isMounted = false };
  }, [id]);

  useEffect(() => {
    fetchCommentsByReviewId(id)
      .then((comments) => setComments(comments));
  }, [id]);

  if (isLoading) return <LoadingSpinner />;

  const StyledReview = styled('article', {
    marginBottom: '1rem',

    'div.content': {
      padding: '1rem',

      p: {
        fontSize: '1.25rem',
        lineHeight: '1.5rem',
        marginBottom: '1.5rem'
      },

      footer: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '1rem'
      }
    }
  });

  return (
    <section className="content">
      <StyledReview>
        <Title review={review} showChips />
        <div className="content">
          <p>{review.review_body}</p>
          <footer>
            <Time timestamp={review.created_at} />
            <Voter reviewId={review.review_id} initialVotes={review.votes} />
          </footer>
        </div>
      </StyledReview>
      {comments.sort((a, b) => b.votes - a.votes).map((comment) => (
        <Comment key={comment.comment_id} comment={comment} />
      ))}
    </section>
  );
}
