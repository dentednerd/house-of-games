import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import UserChip from '../../atoms/user-chip';
import CategoryLink from '../../atoms/category-link';
import { colors } from '../../GlobalStyle';

const StyledReview = styled.section`
background-color: ${colors.beige};

border-radius: 1rem;
margin-bottom: 1rem;
display: grid;
grid-template-columns: repeat(2, 1fr);

div.title {
  background-image: url('${props => props.bg}');
  background-size: cover;
  background-clip: border-box;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    text-align: center;
    color: ${colors.white};
    text-shadow: 0 0 0.25rem ${colors.navy}, 0 0 1rem ${colors.navy};
  }
}

div.content {
  padding: 1rem;

  div.chips {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
}
`;

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
    <StyledReview bg={review.review_img_url}>
      <div className="title">
        <h2>{review.title}</h2>
      </div>
      <div className="content">
        <p>{review.review_body}</p>
        <div className="chips">
          <UserChip username={review.owner} />
          <CategoryLink slug={review.category} />
        </div>
      </div>
    </StyledReview>
  );
};
