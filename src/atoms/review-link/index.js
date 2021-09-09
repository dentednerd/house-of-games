import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchReviewById } from '../../utils/api';

export default function ReviewLink({ reviewId }) {
  const [error, setError] = useState(false);
  const [review, setReview] = useState({});

  useEffect(() => {
    let isMounted = true;
    fetchReviewById(reviewId)
      .then((review) => { if (isMounted) setReview(review) })
      .catch((err) => { if (err) setError(true); });
    return () => { isMounted = false };
  }, [reviewId]);

  if (error) return null;

  return (
    <Link to={`/review/${review.review_id}`}>
      {review.title}
    </Link>
  );
}
