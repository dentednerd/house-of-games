import { useState, useEffect } from 'react';
import axios from 'axios';
import Review from '../organisms/review';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://nc-games-sql-dentednerd.herokuapp.com/api/reviews'
    }).then((response) => {
      setReviews(response.data.reviews);
    });
  }, []);

  return (
    <main>
      {reviews.map((review) => (
        <Review key={review.review_id} review_id={review.review_id} />
      ))}
    </main>
  );
}

export default Reviews;
