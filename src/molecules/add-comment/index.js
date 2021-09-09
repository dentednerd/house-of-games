import React, { useState, useRef } from 'react';
import { GetUser } from '../../hooks/UserContext';
import { styled } from '../../stitches.config';
import { postComment } from '../../utils/api';
import Button from '../../atoms/button';

export default function AddComment({
  reviewId,
  comments,
  setComments
}) {
  const { username } = GetUser();
  const inputRef = useRef(null);
  const [newComment, setNewComment] = useState('');

  const handleChange = () => {
    setNewComment(inputRef.current.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(reviewId, username, newComment)
      .then((addedComment) => setComments([...comments, addedComment]))
      .then(() => setNewComment(''))
      .catch((err) => console.log(err));
  };

  const StyledForm = styled('form', {
    backgroundColor: '$white',
    borderRadius: '$corner',
    padding: '1rem',
    marginBottom: '1rem',
    display: 'grid',
    gridTemplateRows: 'repeat(2, auto)',
    gridTemplateColumns: '1fr',
    gap: '1rem',
    justifyItems: 'center',
    alignItems: 'center',

    '@bp1': {
      gridTemplateRows: '1fr',
      gridTemplateColumns: '2fr 1fr',
    },

    input: {
      border: 'solid 1px $colors$navy',
      borderRadius: '0.5rem',
      padding: '0.5rem',
      fontFamily: '$barlow',
      fontSize: '$2',
      color: '$navy',
      width: '100%',
      margin: '0 1rem',
    }
  });

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        autoFocus
        ref={inputRef}
        type="text"
        placeholder="Add your comment..."
        value={newComment}
        onChange={handleChange}
      />
      <Button type="submit" text="Comment" allRound />
    </StyledForm>
  );
}
