import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nc-games-sql-dentednerd.herokuapp.com/api',
});

export const fetchReviews = async (category, page, sortBy) => {
  const url = `/reviews`;
  const { data } = await api.get(url, {
    params: {
      category,
      p: page,
      sort_by: sortBy
    }
  });
  return data.reviews;
};

export const fetchReviewById = async (id) => {
  const url = `/reviews/${id}`;
  const { data } = await api.get(url);
  return data.review;
};

export const fetchReviewsByUser = async (username) => {
  const url = `/reviews/by/${username}`;
  const { data } = await api.get(url);
  return data.reviews;
}

export const fetchCommentsByReviewId = async (id) => {
  const url = `/reviews/${id}/comments`;
  const { data } = await api.get(url);
  return data.comments;
};

export const fetchCategories = async () => {
  const url = '/categories';
  const { data } = await api.get(url);
  return data.categories;
};

export const fetchUsers = async () => {
  const url = '/users';
  const { data } = await api.get(url);
  return data.users;
};

export const fetchUserByUsername = async (username) => {
  const url = `/users/${username}`;
  const { data } = await api.get(url);
  return data.user;
};

export const fetchCommentsByUser = async (username) => {
  const url = `/comments/by/${username}`;
  const { data } = await api.get(url);
  return data.comments;
};

export const voteOnComment = async (commentId, vote) => {
  const url = `/comments/${commentId}`;
  const { data } = await api.patch(url, {
    inc_votes: vote
  });
  return data.comment;
}

export const voteOnReview = async (reviewId, vote) => {
  const url = `/reviews/${reviewId}`;
  const { data } = await api.patch(url, {
    inc_votes: vote
  });
  return data;
}

export const postComment = async (reviewId, username, comment) => {
  const newComment = {
    username: username,
    body: comment
  };
  const { data } = await api.post(
    `/reviews/${reviewId}/comments`,
    newComment
  );
  return data.comment;
};

export const deleteComment = async (commentId) => {
  const url = `/comments/${commentId}`;
  const response = await api.delete(url);
  return response;
}
