import Chip from '../chip';

export default function UserChip({ user, notLink }) {
  if (!user) return null;

  return (
    <Chip
      color="coral"
      to={notLink ? null : `/users/${user.username}`}
      img={user.avatar_url}
      text={user.username}
    />
  );
};
