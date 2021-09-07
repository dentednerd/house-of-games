import { styled } from '../../stitches.config';
import UserChip from '../../atoms/user-chip';
import Time from '../../atoms/time';
import Voter from '../../molecules/voter';

const StyledComment = styled('section', {
  backgroundColor: '$beige',
  padding: '1rem',
  borderRadius: '1rem',
  marginBottom: '1rem',

  'p.body': {
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
    marginBottom: '0.75rem'
  },

  'div.chips': {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '1rem'
  }
});

export default function Comment({ comment }) {
  return (
    <StyledComment>
      <p className="body">{comment.body}</p>
      <div className="chips">
        <UserChip username={comment.author} />
        <Time timestamp={comment.created_at} />
        <Voter commentId={comment.comment_id} initialVotes={comment.votes} />
      </div>
    </StyledComment>
  )
}
