import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Review({ review_id }) {
  const [review, setReview] = useState({});
  useEffect(() => {
    axios({
      method: 'get',
      url: `https://nc-games-sql-dentednerd.herokuapp.com/api/reviews/${review_id}`
    }).then((response) => {
      setReview(response.data.review);
    });
  }, [review_id]);

  if (!review || review === {}) return null;

  return (
    <section>
      <h2>{review.title}</h2>
      <img src={review.review_img_url} alt={review.title} style={{ maxWidth: '100%' }}/>
      <p>by {review.owner}</p>
      <p>{review.review_body}</p>
      <p>{review.category}</p>
    </section>
  );
};
