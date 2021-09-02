import axios from 'axios';

const request = axios.create({
  baseURL: 'https://nc-games-sql-dentednerd.herokuapp.com/api',
});

export const fetchReviews = async (category) => {
  const url = `/reviews${category ? '?limit=100' : ''}`;
  const { data } = await request.get(url);
  return data.reviews;
};

export const fetchReviewById = async (id) => {
  const url = `/reviews/${id}`;
  const { data } = await request.get(url);
  return data.review;
};

export const fetchCommentsByReviewId = async (id) => {
  const url = `/reviews/${id}/comments`;
  const { data } = await request.get(url);
  return data.comments;
}

export const fetchCategories = async () => {
  const url = '/categories';
  const { data } = await request.get(url);
  return data.categories;
};

export const fetchUsers = async () => {
  const url = '/users';
  const { data } = await request.get(url);
  return data.users;
}

export const fetchUserByUsername = async (username) => {
  const url = `/users/${username}`;
  const { data } = await request.get(url);
  return data.user;
}
