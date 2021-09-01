import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Review from '../organisms/review';

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

  return (
    <main>
      {reviews.map((review) => (
        <Review key={review.review_id} review_id={review.review_id} />
      ))}
    </main>
  );
}

export default Reviews;
