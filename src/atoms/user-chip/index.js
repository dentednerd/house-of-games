import { useState, useEffect } from 'react';
import axios from 'axios';
import Chip from '../chip';

export default function UserChip({ username }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    username && axios({
      method: 'get',
      url: `https://nc-games-sql-dentednerd.herokuapp.com/api/users/${username}`
    }).then((response) => {
      setUser(response.data.user);
    });
  }, [username]);

  return (
    <Chip
      to={`/users/${user.username}`}
      img={user.avatar_url}
      text={user.username}
      color="$coral"
    />
  );
};
