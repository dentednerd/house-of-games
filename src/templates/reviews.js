import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { styled } from '../stitches.config';
import Title from '../molecules/title';

function Reviews() {
  let { category } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://nc-games-sql-dentednerd.herokuapp.com/api/reviews${category ? '?limit=100' : ''}`
    }).then((response) => {
      if (category) {
        const filteredByCategory = response.data.reviews.filter((review) => {
          return review.category === category;
        });
        setReviews(filteredByCategory);
      } else {
        setReviews(response.data.reviews);
      }
    });
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
        <StyledLink to={`/review/${review.review_id}`}>
          <Title key={review.review_id} review={review} />
        </StyledLink>
      ))}
    </section>
  );
}

export default Reviews;
