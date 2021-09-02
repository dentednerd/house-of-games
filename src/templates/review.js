import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { styled } from '../stitches.config';
import { fetchReviewById, fetchCommentsByReviewId } from '../utils/api';
import TimeChip from '../atoms/time-chip';
import Comment from '../molecules/comment';
import Title from '../molecules/title';

export default function Review() {
  let { id } = useParams();
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchReviewById(id)
      .then((review) => setReview(review));
    return;
  }, [id]);

  useEffect(() => {
    fetchCommentsByReviewId(id)
      .then((comments) => setComments(comments));
  }, [id]);

  if (!review) return null;

  const StyledReview = styled('article', {
    marginBottom: '1rem',

    p: {
      padding: '1rem',
      fontSize: '1.25rem',
      lineHeight: '1.5rem'
    }
  });

  return (
    <section className="content">
      <StyledReview>
        <Title review={review} showChips />
        <p>{review.review_body}</p>
        <TimeChip timestamp={review.created_at} />
      </StyledReview>
      {comments.map((comment) => (
        <Comment key={comment.comment_id} comment={comment} />
      ))}
    </section>
  );
}
