import axios from 'axios';

const request = axios.create({
  baseURL: 'https://nc-games-sql-dentednerd.herokuapp.com/api',
});

export const fetchReviews = async (category, page) => {
  const url = `/reviews`;
  const { data } = await request.get(url, {
    params: {
      category,
      p: page
    }
  });
  return data.reviews;
};

export const fetchReviewById = async (id) => {
  const url = `/reviews/${id}`;
  const { data } = await request.get(url);
  return data.review;
};

export const fetchReviewsByUser = async (username) => {
  const url = `/reviews/by/${username}`;
  const { data } = await request.get(url);
  return data.reviews;
}

export const fetchCommentsByReviewId = async (id) => {
  const url = `/reviews/${id}/comments`;
  const { data } = await request.get(url);
  return data.comments;
};

export const fetchCategories = async () => {
  const url = '/categories';
  const { data } = await request.get(url);
  return data.categories;
};

export const fetchUsers = async () => {
  const url = '/users';
  const { data } = await request.get(url);
  return data.users;
};

export const fetchUserByUsername = async (username) => {
  const url = `/users/${username}`;
  const { data } = await request.get(url);
  return data.user;
};

export const voteOnComment = async (commentId, vote) => {
  const url = `/comments/${commentId}`;
  const { data } = await request.patch(url, {
    inc_votes: vote
  });
  return data.comment;
}

export const voteOnReview = async (reviewId, vote) => {
  const url = `/reviews/${reviewId}`;
  const { data } = await request.patch(url, {
    inc_votes: vote
  });
  return data;
}
