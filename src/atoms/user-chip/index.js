import { useState, useEffect } from 'react';
import { fetchUserByUsername } from '../../utils/api';
import Chip from '../chip';

export default function UserChip({ username }) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (!username) return;
    let isMounted = true;
    username && fetchUserByUsername(username)
      .then((user) => { if (isMounted) setUser(user) })
      .then(() => setIsLoading(false));
    return () => { isMounted = false };
  }, [username]);

  if (isLoading) return null;

  return (
    <Chip
      color="coral"
      to={`/users/${user.username}`}
      img={user.avatar_url}
      text={user.username}
    />
  );
};
