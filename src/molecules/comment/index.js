import { styled } from '../../stitches.config';
import UserChip from '../../atoms/user-chip';
import TimeChip from '../../atoms/time-chip';
import Voter from '../../molecules/voter';

const StyledComment = styled('section', {
  backgroundColor: '$beige',
  padding: '1rem',
  borderRadius: '1rem',
  marginBottom: '1rem',

  'p.body': {
    marginBottom: '0.75rem'
  },

  'div.chips': {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});

export default function Comment({ comment }) {
  return (
    <StyledComment>
      <p className="body">{comment.body}</p>
      <div className="chips">
        <UserChip username={comment.author} />
        <TimeChip timestamp={comment.created_at} />
        <Voter commentId={comment.comment_id} initialVotes={comment.votes} />
      </div>
    </StyledComment>
  )
}
