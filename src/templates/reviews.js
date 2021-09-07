import { useParams, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import usePrevious from '../hooks/usePrevious';
import { styled } from '../stitches.config';
import { formatTitle } from '../utils';
import { fetchReviews } from '../utils/api.js';
import LoadingSpinner from '../atoms/loading-spinner';
import Preview from '../molecules/preview';
import Pagination from '../molecules/pagination';

function Reviews() {
  let { category } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const prevCategory = usePrevious(category);

  useEffect(() => {
    let isMounted = true;
    fetchReviews(category, page)
      .then((reviews) => { if (isMounted) setReviews(reviews); })
      .then(() => setIsLoading(false))
      .catch((err) => { if (err) setError(true) });
    return () => isMounted = false;
  }, [category, page]);

  useEffect(() => {
    if (category !== prevCategory) {
      setPage(1);
    }
  }, [category, prevCategory]);

  if (error) return <Redirect to="/404" />;
  if (isLoading) return <LoadingSpinner />;

  const CategoryTitle = styled('h2', {
    fontSize: '$5',
    lineHeight: '$5',
    marginBottom: '1rem',
  });

  return (
    <section className="content">
      {category && <CategoryTitle>{formatTitle(category)}</CategoryTitle>}
      {reviews.map((review) => (
        <Preview key={review.review_id} review={review} />
      ))}
      <Pagination page={page} setPage={setPage} pageLength={reviews.length} />
    </section>
  );
}

export default Reviews;
