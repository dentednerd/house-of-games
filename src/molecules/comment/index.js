import { styled } from '../../stitches.config';
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

  'div.chips': {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '$small'
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
