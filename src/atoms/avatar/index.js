import { styled } from '../../stitches.config';

export default function Avatar({ username, avatarUrl}) {
  const StyledAvatar = styled('img', {
    height: '2rem',
    width: '2rem',
    borderRadius: '$circle'
  });

  return <StyledAvatar src={avatarUrl} alt={username} />;
}
