import Chip from '../chip';

export default function UserChip({ user }) {
  if (!user) return null;

  return (
    <Chip
      color="coral"
      to={`/users/${user.username}`}
      img={user.avatar_url}
      text={user.username}
    />
  );
};
