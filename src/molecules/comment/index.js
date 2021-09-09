import { useState, useEffect } from 'react';
import { styled } from '../../stitches.config';
import { GetUser } from '../../hooks/UserContext';
import {
  fetchUserByUsername,
  deleteComment
} from '../../utils/api';
import UserChip from '../../atoms/user-chip';
import Time from '../../atoms/time';
import Voter from '../../molecules/voter';

const StyledComment = styled('section', {
  backgroundColor: '$lightBeige',
  padding: '1rem',
  borderRadius: '$corner',
  marginBottom: '1rem',

  'p.body': {
    fontSize: '$2',
    lineHeight: '$2',
    marginBottom: '0.75rem'
  },

  'section.chips': {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '$small'
  },

  img: {
    height: '1.5rem',
    width: '1.5rem',
    cursor: 'pointer'
  },
});

export default function Comment({
  comment,
  comments,
  setComments,
  hideUser
}) {
  const { username } = GetUser();
  const [isLoading, setIsLoading] = useState(true);
  const [author, setAuthor] = useState({});

  useEffect(() => {
    let isMounted = true;

    if (hideUser || !comment.author) {
      setIsLoading(false);
      return () => isMounted = false;
    }

    fetchUserByUsername(comment.author)
      .then((user) => { if (isMounted) setAuthor(user) })
      .then(() => setIsLoading(false));
    return () => isMounted = false;
  }, [comment, hideUser]);

  const handleDelete = () => {
    deleteComment(comment.comment_id).then(() => {
      const updatedComments = comments.filter((otherComment) => otherComment.comment_id !== comment.comment_id);
      setComments(updatedComments);
    });
  }

  if (!comment || isLoading) return null;

  return (
    <StyledComment>
      <p className="body">{comment.body}</p>
      <section className="chips">
        {!hideUser && <UserChip user={author} />}
        <Time timestamp={comment.created_at} />
        <Voter commentId={comment.comment_id} initialVotes={comment.votes} />
        {username === comment.author && (
          <img
            src="https://img.icons8.com/ios/50/000000/trash--v1.png" alt="Delete this comment"
            onClick={handleDelete}
          />
        )}
      </section>
    </StyledComment>
  );
}
