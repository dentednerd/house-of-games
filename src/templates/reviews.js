import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { styled } from '../stitches.config';
import { fetchReviews } from '../utils/api.js';
import Title from '../molecules/title';

function Reviews() {
  let { category } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(category).then((reviews) => {
      if (category) {
        const filteredByCategory = reviews.filter((review) => {
          return review.category === category;
        });
        setReviews(filteredByCategory);
      } else {
        setReviews(reviews);
      }
    })
    return;
  }, [category]);

  if (!reviews) return null;

  const StyledLink = styled(Link, {
    display: 'block',
    textDecoration: 'none',
    marginBottom: '1rem'
  });

  return (
    <section className="content">
      {reviews.map((review) => (
        <StyledLink to={`/review/${review.review_id}`} key={review.review_id}>
          <Title review={review} />
        </StyledLink>
      ))}
    </section>
  );
}

export default Reviews;
