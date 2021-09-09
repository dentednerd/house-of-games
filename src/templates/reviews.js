import { useParams, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import usePrevious from '../hooks/usePrevious';
import { styled } from '../stitches.config';
import { fetchReviews } from '../utils/api.js';
import LoadingSpinner from '../atoms/loading-spinner';
import Card from '../molecules/card';
import CategorySwitcher from '../molecules/category-switcher';
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

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (error) return <Redirect to="/404" />;
  if (isLoading) return <LoadingSpinner />;

  const ReviewsGrid = styled('section', {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
    marginBottom: '1rem',

    '*:nth-child(3n + 1)': {
      gridColumn: '1 / 3'
    }
  });

  return (
    <section className="content">
      {category && <CategorySwitcher />}
      <ReviewsGrid>
        {reviews.map((review) => (
          <Card
            key={review.review_id}
            review={review}
          />
        ))}
      </ReviewsGrid>
      <Pagination page={page} setPage={setPage} pageLength={reviews.length} />
    </section>
  );
}

export default Reviews;
