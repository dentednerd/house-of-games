import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { styled } from '../stitches.config';
import axios from 'axios';
import TimeChip from '../atoms/time-chip';
import Comment from '../molecules/comment';
import Title from '../molecules/title';

export default function Review() {
  let { id } = useParams();
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://nc-games-sql-dentednerd.herokuapp.com/api/reviews/${id}`
    }).then((response) => {
      setReview(response.data.review);
    });
  }, [id]);

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://nc-games-sql-dentednerd.herokuapp.com/api/reviews/${id}/comments`
    }).then((response) => {
      setComments(response.data.comments);
    });
  }, [id]);

  if (!review) return null;

  const StyledReview = styled('article', {
    // backgroundColor: '$lightNavy',
    // borderRadius: '1rem',
    marginBottom: '1rem',
    // boxShadow: '0 0 0.5rem $colors$navy',

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
